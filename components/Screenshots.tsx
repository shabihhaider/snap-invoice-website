"use client";

import { useRef, useState, useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
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

/** Gap between cards, matching `gap-4` on the rail. */
const CARD_GAP = 16;

export function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reduce = useReducedMotion();

  /* Drag offset, so the left edge-fade only appears once the rail has actually
     been pulled. A permanently-on left mask washes out the first card. */
  const x = useMotionValue(0);
  const leftFadeOpacity = useTransform(x, [-48, 0], [1, 0]);

  /*
   * Bounds have to be remeasured whenever the rail's content box changes, not
   * just on window resize: the cards below the fold load lazily, so measuring
   * once on mount can capture a scrollWidth that is still settling and leave
   * the rail draggable past its last card.
   */
  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const calc = () => {
      const overflow = inner.scrollWidth - container.clientWidth;
      setDragBounds({ left: -Math.max(overflow, 0), right: 0 });
    };
    calc();

    const ro = new ResizeObserver(calc);
    ro.observe(container);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  /* Arrow enabled-state tracks the live drag offset, so dragging by hand and
     stepping with the arrows stay in sync. */
  useEffect(() => {
    const sync = (v: number) => {
      setAtStart(v >= -1);
      setAtEnd(v <= dragBounds.left + 1);
    };
    sync(x.get());
    return x.on("change", sync);
  }, [x, dragBounds.left]);

  /* One card + gap per press, clamped to the same bounds the drag uses. */
  function step(direction: 1 | -1) {
    const card = innerRef.current?.children[0] as HTMLElement | undefined;
    const delta = (card?.getBoundingClientRect().width ?? 250) + CARD_GAP;
    const target = Math.min(
      0,
      Math.max(dragBounds.left, x.get() - direction * delta),
    );
    animate(x, target, {
      duration: reduce ? 0 : 0.55,
      ease: [0.32, 0.72, 0, 1],
    });
  }

  return (
    <section
      id="screens"
      className="section-padding relative overflow-hidden bg-ink-50"
    >
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
          style={{ x }}
          className="flex cursor-grab gap-4 px-5 pb-8 active:cursor-grabbing"
        >
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

        {/* Edge fade masks — the left one fades in only once dragged */}
        <motion.div
          aria-hidden
          style={{ opacity: leftFadeOpacity }}
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-50 to-transparent"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-50 to-transparent" />

        {/* Arrow controls — pointer devices only. Touch gets the drag gesture,
            which beats hunting for a 44px target mid-swipe. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-4 md:flex">
          <ArrowButton
            direction="prev"
            onClick={() => step(-1)}
            disabled={atStart}
          />
          <ArrowButton
            direction="next"
            onClick={() => step(1)}
            disabled={atEnd}
          />
        </div>
      </div>

      {/* Hint — the affordance differs by input, so the copy does too */}
      <p className="mt-2 text-center text-sm font-medium text-ink-400">
        <span className="inline-flex items-center gap-2">
          <svg
            aria-hidden
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
          <span className="md:hidden">Swipe to explore</span>
          <span className="hidden md:inline">Drag, or use the arrows</span>
        </span>
      </p>
    </section>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous screenshots" : "Next screenshots"}
      className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-cobalt-600 shadow-raised transition-all duration-300 ease-premium hover:border-cobalt-300 hover:text-cobalt-700 hover:shadow-raised-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50 disabled:pointer-events-none disabled:opacity-0 ${
        isPrev ? "" : "ml-auto"
      }`}
    >
      <svg
        aria-hidden
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isPrev ? "-ml-0.5 rotate-180" : "-mr-0.5"}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}
