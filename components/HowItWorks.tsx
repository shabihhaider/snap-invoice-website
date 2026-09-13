"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STEPS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

/**
 * Snappy — the SnapEnvoice mascot. Transparent 3D cut-outs, so no device
 * frame, no card and no drop shadow: the figures sit straight on the band.
 *
 * The three sources do not share an aspect ratio (01 is landscape, 02 and 03
 * are portrait), so every cell is locked to `aspect-[4/5]` and the art is
 * fitted with `object-contain object-bottom`. Identical cells, and because all
 * three renders carry the same ~4% of empty space below the boots, the figures
 * land on one shared ground line.
 *
 * `zoom` then scales the landscape frame up from its bottom-left corner so the
 * figure reads at the same weight as the two portraits instead of half their
 * size. Bottom-left origin is deliberate: the mascot is framed hard left in the
 * source, so it stays fully inside the cell and only the car runs out of frame
 * on the right.
 */
const SHOTS = [
  {
    src: "/mascot/step-snap.webp",
    alt: "Snappy, the SnapEnvoice mascot, crouching to photograph a blue car on his phone",
    width: 1100,
    height: 733,
    zoom: "origin-bottom-left scale-150",
  },
  {
    src: "/mascot/step-price.webp",
    alt: "Snappy sitting on a toolbox, tapping the invoice line items into his phone",
    width: 820,
    height: 1230,
    zoom: "",
  },
  {
    src: "/mascot/step-send.webp",
    alt: "Snappy pointing at his phone as an invoice card sends",
    width: 820,
    height: 1230,
    zoom: "",
  },
] as const;

/**
 * Soft cobalt pool under the boots. Cut-outs on a flat band read as floating;
 * this seats them without a card, a border or an elevation shadow. Centred at
 * 96% of the cell height — where every figure's ground line falls.
 */
const PEDESTAL =
  "radial-gradient(48% 16% at 50% 96%, rgba(37,99,235,0.20) 0%, rgba(37,99,235,0.07) 52%, rgba(37,99,235,0) 100%)";

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  /* Animated connector line that draws as user scrolls */
  useEffect(() => {
    if (reduce || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 70%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="how"
      className="section-padding relative bg-ink-50"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">How it works</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight text-ink-900">
            Three taps. One clean invoice.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            You already snap the job. SnapEnvoice turns that photo into a
            professional, paid-faster invoice&nbsp;&mdash; no desk, no signal,
            no accounting degree.
          </p>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {/*
            Connector line (desktop only). Threaded through the centre of the
            step badges. Padding-top resolves against the grid's *width*, so the
            offset tracks the fluid cell height exactly:
              (gridWidth − 2 × gap) / 3   → cell width
              × 1.25                      → cell height at aspect-[4/5]
              + 2.75rem                   → badge mt-6 (24px) + half of h-10 (20px)
          */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden md:block md:pt-[calc((100%_-_3rem)_/_3_*_1.25_+_2.75rem)] lg:pt-[calc((100%_-_5rem)_/_3_*_1.25_+_2.75rem)]">
            <div
              ref={lineRef as React.RefObject<HTMLDivElement>}
              className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-cobalt-300/40 to-transparent"
              style={{ transformOrigin: "left", transform: "scaleX(0)" }}
            />
          </div>

          {STEPS.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.12} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                {/* Fixed-aspect illustration cell — identical across all three
                    columns whatever the source ratio. */}
                <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden md:max-w-none">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ background: PEDESTAL }}
                  />
                  <img
                    src={SHOTS[i].src}
                    alt={SHOTS[i].alt}
                    width={SHOTS[i].width}
                    height={SHOTS[i].height}
                    loading="lazy"
                    decoding="async"
                    className={`relative h-full w-full object-contain object-bottom ${SHOTS[i].zoom}`}
                  />
                </div>

                {/* Step number — sits on the connector line */}
                <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-cobalt-600 font-display text-sm font-extrabold text-white">
                  {step.n}
                </span>

                <h3 className="mt-4 font-display text-2xl font-extrabold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-amber-600">
                  {step.line}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-500">
                  {step.body}
                </p>
              </div>
              {/* Mobile arrow divider */}
              {i < STEPS.length - 1 && (
                <div className="mt-6 flex justify-center md:hidden">
                  <Icon.arrowDown className="text-cobalt-300" />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
