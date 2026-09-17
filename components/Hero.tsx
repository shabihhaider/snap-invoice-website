"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Icon } from "./Icons";
import { AppStoreBadge } from "./AppStoreBadge";
import { GradientBlob } from "./GradientBlob";

gsap.registerPlugin(ScrollTrigger);

const TICKER_LINES = [
  "Send the invoice.",
  "Get paid faster.",
  "Ditch paperwork.",
  "Look professional.",
];

const STATS = [
  { value: "<60s", label: "to build an invoice" },
  { value: "10", label: "job photos, built in" },
  { value: "$0", label: "to get started" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  /* Scroll-driven parallax exit: content fades/scales, phone drifts up */
  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    const content = contentRef.current;
    const phone = phoneRef.current;
    if (!section || !content || !phone) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: -60,
        opacity: 0,
        scale: 0.97,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      gsap.to(phone, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink-950 px-5 pb-20 pt-32 text-white lg:min-h-[92svh]"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating brand-shape cluster — same full-bleed backdrop role as
            FinalCta's jobsite plate, tuned down in opacity since this is an
            abstract 3D render, not a photo: it needs to read as ambience
            behind the copy, not compete with it. The shutter cluster (an
            echo of the logomark) is weighted toward the phone-mockup side
            via object-position so it doesn't sit under the headline. */}
        <Image
          src="/backgrounds/hero-shapes.webp"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          priority
          className="object-cover object-[85%_78%] opacity-[0.10] mix-blend-screen lg:object-[62%_45%] lg:opacity-[0.20]"
        />
        {/* Scrim — same flat-tint move as FinalCta's jobsite plate, so the
            shape cluster reads as ambience, never competes with the copy. */}
        <div className="absolute inset-0 bg-ink-950/[0.75]" />

        {/* Masked grid */}
        <div className="hero-grid-masked absolute inset-0" />

        {/* Aurora blobs */}
        <GradientBlob
          color="cobalt"
          size={800}
          className="-top-40 right-[-10%] opacity-70"
        />
        <GradientBlob
          color="amber"
          size={500}
          className="left-[-5%] top-[15%] opacity-50"
        />

        {/* Slow-spinning dashed circle */}
        <div
          className="absolute -right-32 -top-44 h-[560px] w-[560px] rounded-full border border-dashed border-amber-500/20"
          style={{ animation: "hero-spin-slow 60s linear infinite" }}
        />

        {/* Vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/80" />
      </div>

      {/* ── Content grid ── */}
      <div className="relative mx-auto grid grid-cols-1 max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* ── Left: copy ── */}
        <div ref={contentRef}>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-3.5 py-[7px] text-[12px] font-bold tracking-[0.06em] text-amber-500"
            style={{ animation: "hero-fade-up 0.6s cubic-bezier(0.32,0.72,0,1) both" }}
          >
            <span
              className="h-[6px] w-[6px] rounded-full bg-amber-500"
              style={{ animation: "hero-pulse-dot 2s infinite" }}
            />
            INVOICING FOR THE TRADES
          </div>

          {/* Headline */}
          <h1
            className="mt-6 font-display text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white"
            style={{ animation: "hero-fade-up 0.8s cubic-bezier(0.32,0.72,0,1) 0.05s both" }}
          >
            Snap the job.
            <br />
            <span className="hero-ticker-window">
              <span className="hero-ticker-reel">
                {TICKER_LINES.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span>{TICKER_LINES[0]}</span>
              </span>
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-6 max-w-[460px] text-lg leading-[1.7] text-ink-300"
            style={{ animation: "hero-fade-up 0.7s cubic-bezier(0.32,0.72,0,1) 0.12s both" }}
          >
            The invoicing app that keeps up with your day. Photo proof on every
            invoice, prices in seconds, and smart reminders that chase
            payments&nbsp;&mdash; so you don&apos;t have to.
          </p>

          {/* CTA */}
          <div
            id="get-the-app"
            className="mt-8 scroll-mt-28"
            style={{ animation: "hero-fade-up 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <AppStoreBadge />
              <p className="text-sm font-medium text-ink-400">
                Free on iPhone.
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                Android coming soon.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:gap-10"
            style={{ animation: "hero-fade-in 0.8s ease 0.35s both" }}
          >
            {STATS.map((s, i) => (
              <div key={s.value} className="flex gap-4 sm:gap-10">
                {i > 0 && (
                  <div className="hidden w-px bg-gradient-to-b from-transparent via-cobalt-600/30 to-transparent sm:block" />
                )}
                <div>
                  {/* leading repeated at the breakpoint: a responsive named
                      text-* utility ships its own line-height in a later
                      @media block and would otherwise override leading-*. */}
                  <div className="font-display text-2xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-3xl sm:leading-[1.05]">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-semibold leading-tight text-ink-400 sm:text-sm sm:leading-tight">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: stacked App Store cards ── */}
        <div
          ref={phoneRef}
          className="relative mx-auto flex justify-center"
          style={{ animation: "hero-fade-up-lg 1s cubic-bezier(0.21,0.6,0.35,1) 0.15s both" }}
        >
          {/* Glow behind the stack */}
          <div
            className="pointer-events-none absolute left-1/2 top-[10%] h-[460px] w-[460px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,.3), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/*
           * Two App Store cards, the smaller breaking out of the larger one's
           * bottom-right corner.
           *
           * The container carries the aspect of the WHOLE composition
           * (543x920 in the reference), and both cards are positioned as
           * percentages inside it. That keeps the overhang from spilling past
           * the column at any width -- an absolutely positioned card with
           * `left:79%; width:56%` would reach 135% and push the page sideways
           * on small screens.
           */}
          {/*
           * Explicit sizes, never `w-full`: this sits inside a shrink-wrapping
           * flex/motion parent where a percentage width resolves to 0 and the
           * whole stack collapses -- the same trap PhoneShot documents.
           *
           * From `lg` the size is driven by viewport HEIGHT, not width. The
           * composition is tall (543:920), so a width-derived 480px card came
           * out 813px high and ran past the fold. The hero reserves 128px top
           * and 80px bottom, so capping at 72svh keeps the whole stack inside
           * the first screen while still growing on taller displays.
           */}
          <div
            className="relative mx-auto aspect-[543/920] w-[280px] max-w-full sm:w-[340px] lg:h-[min(72svh,700px)] lg:w-auto"
            style={{ animation: reduce ? "none" : "hero-floaty 8s ease-in-out infinite" }}
          >
            {/* Back card — 73.7% of the composition, flush top-left */}
            <div className="absolute left-0 top-0 w-[73.7%]">
              <Image
                src="/app-screenshots/1-dashboard-revenue.webp"
                alt="See Your Revenue Clearly — the SnapEnvoice dashboard tracking income, outstanding and growth in one place"
                width={900}
                height={1947}
                sizes="(max-width: 639px) 207px, (max-width: 1023px) 251px, 262px"
                quality={88}
                priority
                className="h-auto w-full rounded-[22px] shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Front card — overlaps the back card's lower-right, and extends
                past both its right and bottom edges. The dark ring separates
                the two where they overlap, since both are the same blue. */}
            <div className="absolute left-[58.6%] top-[47.6%] w-[41.4%]">
              <Image
                src="/app-screenshots/3-invoice-detail.webp"
                alt="Track Every Payment — an invoice detail view showing what is paid and what is still due"
                width={900}
                height={1947}
                sizes="(max-width: 639px) 116px, (max-width: 1023px) 141px, 147px"
                quality={88}
                priority
                className="h-auto w-full rounded-[16px] ring-1 ring-ink-950/70 shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="relative mt-12 flex justify-center lg:mt-16"
        style={{ animation: "hero-fade-in 1s ease 1.2s both" }}
      >
        <a
          href="#how"
          className="group flex flex-col items-center gap-2 text-xs text-ink-400 transition-colors hover:text-ink-300"
        >
          See how it works
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-ink-700 p-1">
            <span className="h-1.5 w-1 animate-float rounded-full bg-ink-500 transition-colors group-hover:bg-amber-500" />
          </span>
        </a>
      </div>
    </section>
  );
}
