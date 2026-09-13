"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Reveal";

const SHOWCASE = [
  {
    src: "/app-screenshots/1-dashboard-revenue.webp",
    alt: "See Your Revenue Clearly — Track income, outstanding and growth in one place",
  },
  {
    src: "/app-screenshots/2-pdf-photo-proof.webp",
    alt: "Proof on Every Job — Attach before and after photos to every invoice",
  },
  {
    src: "/app-screenshots/3-invoice-detail.webp",
    alt: "Professional invoice detail view with line items, tax, and payment status",
  },
  {
    src: "/app-screenshots/4-invoice-history.webp",
    alt: "Complete invoice history with payment status and smart filtering",
  },
  {
    src: "/app-screenshots/5-send-estimates.webp",
    alt: "Send professional estimates and convert to invoices in one tap",
  },
  {
    src: "/app-screenshots/6-manage-clients.webp",
    alt: "Manage clients with contact details and lifetime revenue tracking",
  },
  {
    src: "/app-screenshots/7-automatic-reminders.webp",
    alt: "Automatic payment reminders with customizable tone and schedule",
  },
] as const;

export function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
  const reduce = useReducedMotion();

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
    <section id="screens" className="section-padding relative overflow-hidden bg-ink-50">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">A look inside</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight text-ink-900">
            Every screen earns its place.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Designed for the field &mdash; big buttons, clear numbers, zero
            clutter. Here&rsquo;s what you&rsquo;ll see from day one.
          </p>
        </Reveal>
      </div>

      {/* Draggable screenshot carousel */}
      <div ref={containerRef} className="relative mt-14 overflow-hidden">
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={dragBounds}
          dragElastic={0.08}
          className="flex cursor-grab gap-4 px-5 pb-8 active:cursor-grabbing"
        >
          {/* Left spacer */}
          <div className="hidden w-[max(0px,calc((100vw-72rem)/2-1.25rem))] flex-none lg:block" />

          {SHOWCASE.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} y={20}>
              <div className="group relative w-[200px] flex-none select-none sm:w-[230px] lg:w-[250px]">
                <div
                  className={`overflow-hidden rounded-2xl shadow-raised transition-all duration-700 ease-premium ${
                    reduce
                      ? ""
                      : "group-hover:-translate-y-1.5 group-hover:shadow-raised-lg"
                  }`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={900}
                    height={1947}
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 230px, 250px"
                    quality={85}
                    className="h-auto w-full"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </Reveal>
          ))}

          <div className="w-4 flex-none" />
        </motion.div>

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-50 to-transparent" />
      </div>

      {/* Drag hint */}
      <p className="mt-2 text-center text-sm font-medium text-ink-400">
        <span className="inline-flex items-center gap-2">
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
