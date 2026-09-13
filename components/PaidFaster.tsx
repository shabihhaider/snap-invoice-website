"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
import { PhoneShot } from "./PhoneShot";
import { Icon } from "./Icons";
import { GradientBlob } from "./GradientBlob";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    n: "1",
    title: "See who owes you, in red",
    body: "Overdue invoices surface themselves — days late, amount, and a Remind button right on the invoice.",
  },
  {
    n: "2",
    title: "Friendly. Firm. Final notice.",
    body: "Pick a tone and the message is written for you. Professional every time, awkward never.",
  },
  {
    n: "3",
    title: "Every reminder, tracked",
    body: "A timeline of every nudge you’ve sent, so you always know where a payment stands.",
  },
];

export function PaidFaster() {
  const sectionRef = useRef<HTMLElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    const phones = phonesRef.current;
    if (!section || !phones) return;

    const ctx = gsap.context(() => {
      gsap.from(phones, {
        y: 60,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <GradientBlob color="cobalt" size={600} className="left-[15%] top-0 opacity-50" />
        <GradientBlob color="amber" size={450} className="bottom-0 right-[5%] opacity-35" />
        <div className="bg-grid-dark absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-amber-400">Get paid faster</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight">
            The polite payment chaser.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
            Unpaid work is the worst part of the job. SnapEnvoice watches your
            due dates and hands you the perfect reminder&nbsp;&mdash; one tap,
            right tone, paid sooner.
          </p>
        </Reveal>

        {/* Three phones with scroll-driven entrance */}
        <div ref={phonesRef as React.RefObject<HTMLDivElement>} className="mt-14 flex items-end justify-center gap-2 sm:gap-6">
          <Reveal delay={0.05}>
            <div className="hidden sm:block">
              <PhoneShot
                src="/app-screens/3-invoice-detail.webp"
                alt="Invoice INV-0013 detail for $47.50, marked paid, with Share, Edit, Mark Paid and Preview PDF actions"
                width={190}
                className="-rotate-3 opacity-90 transition-transform duration-700 ease-premium hover:rotate-0 hover:opacity-100"
              />
            </div>
            <div className="sm:hidden">
              <PhoneShot
                src="/app-screens/3-invoice-detail.webp"
                alt="Invoice INV-0013 detail for $47.50, marked paid, with Share, Edit, Mark Paid and Preview PDF actions"
                width={130}
                className="-rotate-3 opacity-80"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="hidden sm:block">
              <PhoneShot
                src="/app-screens/7-automatic-reminders.webp"
                alt="Automatic reminder settings: remind after 3, 7, 14 or 30 days with a Friendly, Firm or Final tone, and a confirmation that a payment reminder was sent"
                width={240}
                className="z-10 shadow-glow"
              />
            </div>
            <div className="sm:hidden">
              <PhoneShot
                src="/app-screens/7-automatic-reminders.webp"
                alt="Automatic reminder settings: remind after 3, 7, 14 or 30 days with a Friendly, Firm or Final tone, and a confirmation that a payment reminder was sent"
                width={170}
                className="z-10 shadow-glow"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hidden sm:block">
              <PhoneShot
                src="/app-screens/4-invoice-history.webp"
                alt="Invoice history filtered by All, Outstanding, Overdue and Paid, listing paid, sent and overdue invoices with their amounts"
                width={190}
                className="rotate-3 opacity-90 transition-transform duration-700 ease-premium hover:rotate-0 hover:opacity-100"
              />
            </div>
            <div className="sm:hidden">
              <PhoneShot
                src="/app-screens/4-invoice-history.webp"
                alt="Invoice history filtered by All, Outstanding, Overdue and Paid, listing paid, sent and overdue invoices with their amounts"
                width={130}
                className="rotate-3 opacity-80"
              />
            </div>
          </Reveal>
        </div>

        {/* Numbered points */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 font-display text-sm font-bold text-amber-400 transition-transform duration-500 ease-premium hover:scale-110">
                {p.n}
              </div>
              <h3 className="font-display text-lg font-extrabold">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-300">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
