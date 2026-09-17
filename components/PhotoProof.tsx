"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import { Icon } from "./Icons";
import { GradientBlob } from "./GradientBlob";

gsap.registerPlugin(ScrollTrigger);

/** The three arguments photo proof wins. Field Pro voice: verbs first. */
const POINTS: ReadonlyArray<{
  icon: keyof typeof Icon;
  title: string;
  body: string;
}> = [
  {
    icon: "camera",
    title: "Label it in a tap",
    body: "Before, After, Progress. Up to 10 shots a job, sorted as you take them.",
  },
  {
    icon: "file-check",
    title: "Printed, not attached",
    body: "Photos sit inside the PDF itself. Nothing to lose in a thread.",
  },
  {
    icon: "shield",
    title: "Paid without the haggle",
    body: "They see the job, then the total. Approvals come back faster and quieter.",
  },
];

/**
 * Photo proof — the headline differentiator, given its own dark band.
 * Layering: the app screenshot is the primary object (product truth), the
 * before/after polaroids sit in front of its bottom-left corner on a tinted
 * plate — dark-band elevation is surface tint + hairline, never shadow
 * (DESIGN.md §6). Scroll parallax separates the two planes.
 */
export function PhotoProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const shotRef = useRef<HTMLDivElement>(null);
  const plateRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    const shot = shotRef.current;
    const plate = plateRef.current;
    if (!section || !shot || !plate) return;

    const ctx = gsap.context(() => {
      // Counter-parallax: the two planes drift apart, then settle.
      gsap.from(shot, {
        y: 40,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 85%", end: "top 25%", scrub: 1 },
      });
      gsap.from(plate, {
        y: -28,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top 85%", end: "top 25%", scrub: 1 },
      });
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="section-padding relative overflow-hidden bg-ink-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <GradientBlob color="amber" size={520} className="-left-24 top-1/4 opacity-40" />
        <div className="bg-grid-dark absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Copy — right at lg, first on mobile */}
          <Reveal className="lg:order-2">
            <p className="eyebrow text-amber-400">Photo proof</p>
            <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight">
              Show them the photo.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
              Every invoice carries its own evidence. Before and after,
              printed straight into the PDF&nbsp;&mdash; the work speaks
              before you have to. No camera-roll digging, no money knocked
              off to end an argument.
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm">
              <span className="text-ink-400 line-through decoration-white/25">
                &ldquo;That&rsquo;s not what we agreed.&rdquo;
              </span>
              <span className="font-semibold text-amber-400">
                Page two says otherwise.
              </span>
            </div>

            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {POINTS.map((p, i) => {
                const IconEl = Icon[p.icon];
                return (
                  <li key={p.title} className="py-6">
                    <Reveal delay={0.06 * i} y={12}>
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                          <IconEl width={14} height={14} />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-extrabold">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-base leading-relaxed text-ink-300">
                            {p.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Visual — left at lg. Screenshot is the base plane, polaroids in front. */}
          <Reveal delay={0.1} className="lg:order-1">
            <div className="relative mx-auto w-full max-w-[430px] pb-16 pl-8 sm:pb-20 sm:pl-12">
              {/* Plane 1 — the generated invoice PDF, cropped past its store caption */}
              <div ref={shotRef} className="ml-auto w-full max-w-[350px]">
                <Tilt intensity={6}>
                  <div className="overflow-hidden rounded-card-lg border border-white/10 bg-white/[0.05] p-2">
                    <div className="aspect-[900/1477] overflow-hidden rounded-card">
                      <Image
                        src="/app-screenshots/2-pdf-photo-proof.webp"
                        alt="A SnapEnvoice invoice PDF with before and after job photos embedded under the totals"
                        width={900}
                        height={1947}
                        sizes="(max-width: 640px) 75vw, 350px"
                        quality={90}
                        loading="lazy"
                        className="h-full w-full object-cover object-bottom"
                      />
                    </div>
                  </div>
                </Tilt>
              </div>

              {/* Plane 2 — the proof itself, laid over the corner */}
              <div
                ref={plateRef}
                className="absolute bottom-0 left-0 w-[56%] max-w-[240px]"
              >
                <div className="-rotate-6 rounded-card-lg border border-white/10 bg-white/[0.06] p-2 backdrop-blur-sm transition-transform duration-700 ease-premium hover:-rotate-2">
                  <Image
                    src="/mascot/proof-before-after.webp"
                    alt="Two photos of the same room, one labelled Before and one labelled After"
                    width={1200}
                    height={800}
                    sizes="(max-width: 640px) 45vw, 240px"
                    quality={85}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                  <p className="px-2 pb-2 text-center text-xs font-medium text-ink-300">
                    Before &middot; After &middot; In the PDF
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
