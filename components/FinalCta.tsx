"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { AppStoreBadge } from "./AppStoreBadge";
import { GradientBlob } from "./GradientBlob";
import { Icon } from "./Icons";

const TRUST = [
  { icon: "shield" as const, text: "Your data stays on your phone" },
  { icon: "wifi-off" as const, text: "Works offline" },
  { icon: "user-x" as const, text: "No account needed" },
];

export function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden bg-ink-950 text-white">
      {/* ── Jobsite backdrop ──
          Photoreal daylight plate, scrimmed twice so it reads as atmosphere,
          never as a photo. Flat 82% ink + a vertical seal to full #0A0F1E at
          both seams; the lightest possible composite under any text is
          ~#23273 4, which keeps ink-300 body copy near 10:1 and the muted
          ink-400 trust strip above 5:1. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/mascot/jobsite-van.webp"
          alt=""
          width={1536}
          height={1024}
          sizes="100vw"
          quality={70}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-950/[0.82]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/40 to-ink-950" />

        {/* Aurora blobs sit above the plate so the band still reads as ours */}
        <GradientBlob color="cobalt" size={700} className="-left-[15%] top-[-10%] opacity-60" />
        <GradientBlob color="amber" size={500} className="-right-[10%] bottom-[-10%] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ── Copy ── */}
          <div className="text-center lg:text-left">
            <Reveal>
              <h2 className="font-display text-[clamp(30px,5vw,48px)] font-extrabold leading-[1.05] tracking-tight">
                The job&apos;s done.
                <br />
                <span className="text-gradient-amber">Now get paid for it.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-300 lg:mx-0">
                Snap the job, price it, send it&nbsp;&mdash; photo proof and
                all&nbsp;&mdash; before you leave the driveway. Free to start, no
                account, works offline.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <AppStoreBadge />
              </div>
              <p className="mt-4 text-sm font-medium text-ink-400">
                Free on iPhone. Android coming soon.
              </p>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={0.2} className="mt-12">
              <div className="inline-flex flex-wrap justify-center gap-4 rounded-full border border-white/[0.06] bg-white/[0.03] px-6 py-3">
                {TRUST.map((t, i) => {
                  const IconEl = Icon[t.icon];
                  return (
                    <span
                      key={t.text}
                      className="flex items-center gap-2 text-sm font-medium text-ink-400"
                    >
                      {i > 0 && <span className="inline-block h-3 w-px bg-white/15" />}
                      <IconEl width={14} className="text-cobalt-400" />
                      {t.text}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* ── Companion figure: the payoff ── */}
          <Reveal delay={0.15} y={24} className="order-first lg:order-none">
            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[380px]">
              {/* Surface-tint spotlight (dark bands express depth with tint,
                  not shadow — DESIGN.md §6) */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.22), transparent 65%)",
                }}
              />
              {/* Ground contact so the figure stands on the driveway */}
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-4 rounded-full bg-ink-950/70 blur-xl" />

              <div
                className="relative"
                style={{
                  animation: reduce ? "none" : "hero-floaty 7s ease-in-out infinite",
                }}
              >
                <Image
                  src="/mascot/celebrate-paid.webp"
                  alt="The SnapEnvoice mascot fist-pumping with a phone in hand as a PAID receipt pops out"
                  width={820}
                  height={1230}
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 380px"
                  quality={85}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
