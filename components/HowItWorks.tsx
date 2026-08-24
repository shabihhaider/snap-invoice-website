"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STEPS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { PhoneShot } from "./PhoneShot";
import { Tilt } from "./Tilt";
import { Icon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

const SCREENS = [
  {
    src: "/screenshots/01-onboarding-1-snap-the-job.webp",
    alt: "SnapEnvoice onboarding \u2014 Snap the job: before and after photos go right on the invoice",
  },
  {
    src: "/screenshots/02-onboarding-2-price-it-in-seconds.webp",
    alt: "SnapEnvoice onboarding \u2014 Price it in seconds: invoice card with line items, tax and photo badge",
  },
  {
    src: "/screenshots/03-onboarding-3-send-and-get-paid.webp",
    alt: "SnapEnvoice onboarding \u2014 Send and get paid: invoice sent by WhatsApp with a green PAID stamp",
  },
] as const;

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
      className="relative bg-ink-50 py-28 sm:py-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">How it works</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight text-ink-900">
            Three taps. One clean invoice.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            You already snap the job. SnapEnvoice turns that photo into a
            professional, paid-faster invoice&nbsp;&mdash; no desk, no signal,
            no accounting degree.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {/* Connector line (desktop only) — positioned via flexbox alignment with step badges */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden md:block" style={{ top: "calc(220px * 2400 / 1080 / 2)" }}>
            <div
              ref={lineRef as React.RefObject<HTMLDivElement>}
              className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-cobalt-300/40 to-transparent"
              style={{ transformOrigin: "left", transform: "scaleX(0)" }}
            />
          </div>

          {STEPS.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.12} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <Tilt intensity={7}>
                    <PhoneShot
                      src={SCREENS[i].src}
                      alt={SCREENS[i].alt}
                      width={220}
                      light
                    />
                  </Tilt>
                  {/* Step number badge */}
                  <span className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-cobalt-600 font-display text-sm font-extrabold text-white shadow-fab ring-4 ring-ink-50">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-amber-600">
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
