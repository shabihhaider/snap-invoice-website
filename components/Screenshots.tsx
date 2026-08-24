"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PhoneShot } from "./PhoneShot";

const SHOTS = [
  {
    src: "/screenshots/04-welcome-get-started-free.webp",
    alt: "SnapEnvoice welcome screen \u2014 Snap. Price. Send.",
    head: "Snap. Price. Send.",
    sub: "First invoice in 60 seconds \u2014 no account needed",
  },
  {
    src: "/screenshots/05-dashboard-home-monthly-revenue.webp",
    alt: "SnapEnvoice home dashboard with $47,250 monthly revenue",
    head: "Know your month at a glance.",
    sub: "Revenue, pending, estimates & overdue \u2014 one screen",
  },
  {
    src: "/screenshots/12-invoice-detail-paid-stamp.webp",
    alt: "Invoice detail with satisfying green PAID stamp",
    head: "The best four letters.",
    sub: "See PAID on every settled invoice",
  },
  {
    src: "/screenshots/19-estimate-pdf-preview-classic-template.webp",
    alt: "Professional estimate PDF with Classic template",
    head: "PDFs that win the job.",
    sub: "Clean, print-safe templates with your branding",
  },
  {
    src: "/screenshots/13-invoice-pdf-preview-bold-template.webp",
    alt: "Branded invoice PDF with Bold template",
    head: "Your brand on every invoice.",
    sub: "5 premium templates, your logo & colors",
  },
  {
    src: "/screenshots/25-settings-appearance-reminder-tone.webp",
    alt: "SnapEnvoice settings \u2014 currency, themes, reminder schedule",
    head: "Your rules, on autopilot.",
    sub: "Auto reminder schedule, currency, dark mode",
  },
] as const;

export function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });

  useEffect(() => {
    function calc() {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (!container || !inner) return;
      const overflow = inner.scrollWidth - container.clientWidth;
      setDragBounds({ left: -Math.max(overflow, 0), right: 0 });
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section id="screens" className="bg-ink-50 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-cobalt-600">A look inside</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight text-ink-900">
            Every screen earns its place.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Straight from the app &mdash; the dashboard, one-tap reminders and
            the PDFs your clients will actually see.
          </p>
        </Reveal>
      </div>

      {/* Draggable carousel */}
      <div ref={containerRef} className="mt-12 overflow-hidden">
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={dragBounds}
          dragElastic={0.08}
          className="flex cursor-grab gap-5 px-5 pb-6 active:cursor-grabbing sm:gap-6"
        >
          {/* Left spacer */}
          <div className="hidden w-[max(0px,calc((100vw-72rem)/2-1.25rem))] flex-none lg:block" />

          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} y={20}>
              <figure className="w-[260px] flex-none select-none rounded-card-lg bg-white p-5 shadow-card transition-shadow duration-500 hover:shadow-raised sm:w-[280px]">
                <div className="flex justify-center">
                  <PhoneShot src={s.src} alt={s.alt} width={210} light />
                </div>
                <figcaption className="mt-5">
                  <div className="font-display text-[17px] font-extrabold text-ink-900">
                    {s.head}
                  </div>
                  <div className="mt-1 text-[13px] text-ink-500">{s.sub}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          <div className="w-4 flex-none" />
        </motion.div>
      </div>

      {/* Drag hint */}
      <p className="mt-2 text-center text-[13px] font-medium text-ink-400">
        <span className="inline-flex items-center gap-1.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Drag to explore
        </span>
      </p>
    </section>
  );
}
