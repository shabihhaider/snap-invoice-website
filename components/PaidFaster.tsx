"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "./Reveal";
import { PhoneShot } from "./PhoneShot";
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

/*
 * Phone widths are fluid rather than stepped. Two fixed sets (130/170/130 below
 * `sm`, 190/240/190 above) overflowed the container in two separate bands —
 * 97px at 320px and, because the `sm` jump outgrew the space it gained, 45px
 * again at 640px — clipping the outer two phones through their content. A
 * `min()` width keeps the trio inside `100vw - 40px` at every width and settles
 * on the intended 190/240/190 composition from ~790px up, so one instance now
 * does the work of the two that were being swapped with `hidden`/`sm:hidden`.
 * The `!` is required: PhoneShot sets its width as an inline style.
 */
const PHONES = [
  {
    src: "/app-screens/invoice-overdue-remind.webp",
    alt: "Invoice INV-0006 for $47,250.00 flagged Payment Overdue, eight days past due, with a red Remind button",
    width: 190,
    delay: 0.05,
    className:
      "!w-[min(190px,24vw)] -rotate-3 opacity-90 transition-transform duration-700 ease-premium hover:rotate-0 hover:opacity-100",
  },
  {
    src: "/app-screens/reminder-tone-picker.webp",
    alt: "Choose Reminder Tone sheet offering Friendly, Firm and Final Notice, with Final Notice suggested",
    width: 240,
    delay: 0.12,
    className: "!w-[min(240px,30.3vw)] z-10 shadow-glow",
  },
  {
    src: "/app-screens/reminders-timeline.webp",
    alt: "Reminders timeline on invoice INV-0006 listing five sent reminders with tone and date, above a Send Reminder button",
    width: 190,
    delay: 0.2,
    className:
      "!w-[min(190px,24vw)] rotate-3 opacity-90 transition-transform duration-700 ease-premium hover:rotate-0 hover:opacity-100",
  },
] as const;

/**
 * Below `sm` the fanned 190/240/190 trio (see PHONES comment) technically
 * never overflows, but it shrinks every phone to ~100-130px wide -- too
 * small for the dense app UI inside each screenshot to read as anything
 * but a blur, which people reasonably perceive as "cut off" even though
 * nothing is clipped. Mobile gets a different composition entirely: one
 * phone at a time, full-size and legible, paired with its own step copy
 * as a single swipeable card -- the same native scroll-snap + edge-peek
 * language as the screenshot carousel elsewhere on the page, just without
 * the drag physics (three slides don't need momentum scrolling).
 */
const STORY_SLIDES = POINTS.map((p, i) => ({ ...p, phone: PHONES[i] }));

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

        {/* Mobile (< sm): one phone at a time, full-size, swipeable */}
        <div className="mt-12 sm:hidden">
          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[12vw] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="How reminders work, step by step"
          >
            {STORY_SLIDES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.08}
                className="flex w-[76vw] max-w-[280px] flex-none snap-center flex-col items-center text-center"
              >
                <PhoneShot
                  src={s.phone.src}
                  alt={s.phone.alt}
                  width={230}
                  priority={i === 0}
                  className="!w-full shadow-glow"
                />
                <div className="mx-auto mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 font-display text-sm font-bold text-amber-400">
                  {s.n}
                </div>
                <h3 className="mt-3 font-display text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-1 px-5 text-center text-sm font-medium text-ink-400">
            <span className="inline-flex items-center gap-2">
              <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Swipe through all 3 steps
            </span>
          </p>
        </div>

        {/* Tablet+: fanned trio, entrance driven by scroll */}
        <div
          ref={phonesRef as React.RefObject<HTMLDivElement>}
          className="mt-14 hidden items-end justify-center gap-6 sm:flex"
        >
          {PHONES.map((p) => (
            <Reveal key={p.src} delay={p.delay}>
              <PhoneShot
                src={p.src}
                alt={p.alt}
                width={p.width}
                className={p.className}
              />
            </Reveal>
          ))}
        </div>

        {/* Tablet+: numbered points below the trio (mobile gets them inline per-slide above) */}
        <div className="mt-14 hidden grid-cols-3 gap-6 sm:grid">
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
