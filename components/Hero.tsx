"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneShot } from "./PhoneShot";
import { Tilt } from "./Tilt";
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
  { value: "60s", label: "to build an invoice" },
  { value: "3\u00d7", label: "faster payments*" },
  { value: "$0", label: "to get started" },
];

const ease = [0.32, 0.72, 0, 1] as const;

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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-3.5 py-[7px] text-[12px] font-bold tracking-[0.06em] text-amber-500"
          >
            <span
              className="h-[6px] w-[6px] rounded-full bg-amber-500"
              style={{ animation: "hero-pulse-dot 2s infinite" }}
            />
            INVOICING FOR THE TRADES
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
            className="mt-6 font-display text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white"
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
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-6 max-w-[460px] text-lg leading-[1.7] text-ink-300"
          >
            The invoicing app that keeps up with your day. Photo proof on every
            invoice, prices in seconds, and smart reminders that chase
            payments&nbsp;&mdash; so you don&apos;t have to.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            id="get-the-app"
            className="mt-8 scroll-mt-28"
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
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:gap-10"
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
                  <div className="text-[11px] font-semibold leading-tight text-ink-500 sm:text-sm sm:leading-tight">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: floating phone ── */}
        <motion.div
          ref={phoneRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.21, 0.6, 0.35, 1] }}
          className="relative mx-auto flex justify-center [perspective:1200px]"
        >
          {/* Glow behind phone */}
          <div
            className="pointer-events-none absolute left-1/2 top-[10%] h-[400px] w-[400px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,.3), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <div style={{ animation: reduce ? "none" : "hero-floaty 8s ease-in-out infinite" }}>
            <Tilt intensity={10}>
              <div className="[transform:rotateY(-8deg)_rotateX(3deg)]">
                <PhoneShot
                  src="/app-screens/1-dashboard-revenue.webp"
                  alt="SnapEnvoice dashboard showing $74,817.50 collected this month, 11 total invoices, 4 estimates and recent invoice activity"
                  width={300}
                  priority
                  className="shadow-phone"
                />
              </div>
            </Tilt>

            {/* PAID chip */}
            <div
              className="absolute -left-4 top-16 rounded-[14px] border border-[rgba(74,222,128,0.3)] bg-ink-950/90 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md sm:-left-14 lg:-left-24"
              style={{ animation: reduce ? "none" : "hero-floaty-tilt 6s ease-in-out infinite" }}
            >
              <div className="text-[11px] font-bold tracking-[0.08em] text-[#4ADE80]">
                PAID ✓
              </div>
              <div className="font-display text-[16px] font-extrabold text-white">
                $47,250.00
              </div>
            </div>

            {/* REMINDER chip */}
            <div
              className="absolute -right-2 bottom-28 rounded-[14px] border border-amber-500/30 bg-ink-950/90 px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md sm:-right-12 lg:-right-24"
              style={{ animation: reduce ? "none" : "hero-floaty 5.5s ease-in-out infinite" }}
            >
              <div className="text-[11px] font-bold tracking-[0.08em] text-amber-500">
                ⚡ REMINDER SENT
              </div>
              <div className="text-[12px] font-semibold text-ink-400">
                INV-0006 · friendly tone
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative mt-12 flex justify-center lg:mt-16"
      >
        <a
          href="#how"
          className="group flex flex-col items-center gap-2 text-xs text-ink-500 transition-colors hover:text-ink-300"
        >
          See how it works
          <span className="flex h-8 w-5 items-start justify-center rounded-full border border-ink-700 p-1">
            <span className="h-1.5 w-1 animate-float rounded-full bg-ink-500 transition-colors group-hover:bg-amber-500" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
