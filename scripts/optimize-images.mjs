#!/usr/bin/env node
/**
 * Convert raster images to WebP at a sane display size.
 *
 * Every image under public/ should be WebP. PNG screenshots and illustrations
 * arrive from the design/export pipeline at full device resolution, which is
 * far larger than anything the site renders -- the four trade illustrations
 * were 8.7 MB of PNG for a 308px decoration at 12% opacity.
 *
 * Usage
 *   node scripts/optimize-images.mjs --in <dir> [options]
 *
 * Options
 *   --in <dir>        Source directory to read. Required.
 *   --out <dir>       Destination. Defaults to --in (converts in place).
 *   --width <px>      Max width; never upscales. Default 1200.
 *   --quality <1-100> WebP quality. Default 82.
 *   --delete          Remove the source file after a successful convert.
 *                     Only valid when --out differs from --in, or the source
 *                     is a different extension than .webp.
 *   --force           Reconvert even when the .webp is newer than its source.
 *   --dry             Report what would happen; write nothing.
 *
 * Examples
 *   # App Store posters for the gallery
 *   node scripts/optimize-images.mjs --in ../Assets/posters --out public/app-screenshots --width 900
 *
 *   # Raw 1080x2400 device captures for the phone mockups
 *   node scripts/optimize-images.mjs --in ../Assets/Screenshots/organized --out public/app-screens --width 720
 *
 *   # Shrink oversized PNGs already sitting in public/, replacing them
 *   node scripts/optimize-images.mjs --in public/illustrations --width 640 --delete
 */

import { readdir, stat, mkdir, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".tif", ".tiff"]);

/**
 * og.jpg is deliberately JPEG, not WebP: several social scrapers still handle
 * WebP Open Graph images unreliably, and it is fetched by crawlers rather than
 * by the page, so its size does not affect page load.
 */
const NEVER_CONVERT = new Set(["og.jpg", "og.png"]);

function parseArgs(argv) {
  const args = {
    width: 1200,
    quality: 82,
    delete: false,
    force: false,
    dry: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    if (flag === "--in") args.in = argv[++i];
    else if (flag === "--out") args.out = argv[++i];
    else if (flag === "--width") args.width = Number(argv[++i]);
    else if (flag === "--quality") args.quality = Number(argv[++i]);
    else if (flag === "--delete") args.delete = true;
    else if (flag === "--force") args.force = true;
    else if (flag === "--dry") args.dry = true;
    else throw new Error(`Unknown option: ${flag}`);
  }
  if (!args.in) throw new Error("--in <dir> is required. See the header for usage.");
  if (!Number.isFinite(args.width) || args.width < 1)
    throw new Error(`--width must be a positive number, got ${args.width}`);
  if (!Number.isFinite(args.quality) || args.quality < 1 || args.quality > 100)
    throw new Error(`--quality must be 1-100, got ${args.quality}`);
  args.out ??= args.in;
  return args;
}

const kb = (bytes) => Math.round(bytes / 1024);

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!existsSync(args.in)) throw new Error(`Source directory not found: ${args.in}`);
  if (!args.dry) await mkdir(args.out, { recursive: true });

  const entries = await readdir(args.in, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && SOURCE_EXTENSIONS.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name)
    .filter((name) => {
      if (NEVER_CONVERT.has(name.toLowerCase())) {
        console.log(`  skip   ${name}  (excluded: format is intentional)`);
        return false;
      }
      return true;
    })
    .sort();

  if (files.length === 0) {
    console.log(`No convertible images in ${args.in}`);
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let skipped = 0;

  for (const name of files) {
    const src = path.join(args.in, name);
    const dest = path.join(args.out, name.replace(/\.[^.]+$/, ".webp"));

    // Idempotent: leave alone if the .webp is already newer than its source.
    if (!args.force && existsSync(dest)) {
      const [srcStat, destStat] = await Promise.all([stat(src), stat(dest)]);
      if (destStat.mtimeMs >= srcStat.mtimeMs) {
        console.log(`  skip   ${name}  (up to date)`);
        skipped++;
        continue;
      }
    }

    const input = sharp(src);
    const meta = await input.metadata();
    const before = (await stat(src)).size;

    if (args.dry) {
      console.log(
        `  would ${name.padEnd(34)} ${meta.width}x${meta.height} ${kb(before)}KB -> ${path.basename(dest)}`,
      );
      continue;
    }

    await input
      .resize({ width: args.width, withoutEnlargement: true })
      .webp({ quality: args.quality, alphaQuality: 90 })
      .toFile(dest);

    const after = (await stat(dest)).size;
    const outMeta = await sharp(dest).metadata();
    totalBefore += before;
    totalAfter += after;
    converted++;

    const pct = Math.round(100 - (after / before) * 100);
    console.log(
      `  ok     ${name.padEnd(34)} ${meta.width}x${meta.height} ${String(kb(before)).padStart(5)}KB` +
        ` ->  ${outMeta.width}x${outMeta.height} ${String(kb(after)).padStart(5)}KB  (${pct}% smaller)`,
    );

    // Only remove the original when the .webp is genuinely a different file.
    if (args.delete && path.resolve(src) !== path.resolve(dest)) {
      await unlink(src);
      console.log(`         removed source ${name}`);
    }
  }

  if (converted > 0) {
    const pct = Math.round(100 - (totalAfter / totalBefore) * 100);
    console.log(
      `\n${converted} converted, ${skipped} up to date` +
        `  |  ${kb(totalBefore)}KB -> ${kb(totalAfter)}KB  (${pct}% smaller)`,
    );
  } else {
    console.log(`\nNothing to do. ${skipped} already up to date.`);
  }
}

main().catch((err) => {
  console.error(`\nimage optimize failed: ${err.message}`);
  process.exit(1);
});
