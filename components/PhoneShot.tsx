import Image from "next/image";

/**
 * Real device screenshot in a double-bezel frame ("Doppelrand"):
 * outer machined shell → dark device body → screen. Concentric radii.
 * Explicit width (not w-full) — inside shrink-wrapping flex/motion parents
 * a percentage width resolves to 0 and the phone collapses.
 */
export function PhoneShot({
  src,
  alt,
  width = 300,
  className,
  priority = false,
  light = false,
}: {
  src: string;
  alt: string;
  /** Rendered CSS width in px (height follows the 1080x2400 aspect). */
  width?: number;
  className?: string;
  priority?: boolean;
  /** Set true when the phone sits on a light section background. */
  light?: boolean;
}) {
  return (
    <div
      style={{ width, maxWidth: "80vw" }}
      className={`rounded-[2.6rem] p-1.5 ${
        light
          ? "bg-ink-900/[0.06] ring-1 ring-ink-900/10"
          : "bg-white/[0.08] ring-1 ring-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_40px_rgba(37,99,235,0.08)]"
      } ${className ?? ""}`}
    >
      <div className="relative aspect-[1080/2400] overflow-hidden rounded-[calc(2.6rem-0.375rem)] border-[8px] border-ink-950 bg-ink-950 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`(max-width: 640px) ${Math.round(width * 0.85)}px, ${width}px`}
          quality={90}
          priority={priority}
          className="rounded-[calc(2.6rem-0.375rem-8px)] object-cover"
        />
      </div>
    </div>
  );
}
