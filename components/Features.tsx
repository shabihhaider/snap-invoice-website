"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURES, STATS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { GradientBlob } from "./GradientBlob";

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (blobRef1.current) {
        gsap.to(blobRef1.current, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
      if (blobRef2.current) {
        gsap.to(blobRef2.current, {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-padding relative overflow-hidden bg-ink-950 text-white"
    >
      {/* Background blobs with parallax */}
      <div className="pointer-events-none absolute inset-0">
        <div ref={blobRef1 as React.RefObject<HTMLDivElement>}>
          <GradientBlob
            color="cobalt"
            size={500}
            className="right-[-5%] top-[20%] opacity-60"
          />
        </div>
        <div ref={blobRef2 as React.RefObject<HTMLDivElement>}>
          <GradientBlob
            color="amber"
            size={400}
            className="-left-[8%] bottom-[10%] opacity-40"
          />
        </div>
        <div className="bg-grid-dark absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-amber-400">What you get</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight">
            One thing, done fast.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            Not accounting software wearing a mobile costume. A precision tool
            that gets you paid&nbsp;&mdash; and settles disputes before they
            start.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const IconEl = Icon[f.icon as keyof typeof Icon];
            const wide = f.span === "lg";
            const isMoat = f.flash;

            return (
              <Reveal
                key={f.title}
                delay={(i % 3) * 0.08}
                className={wide ? "sm:col-span-2" : ""}
              >
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-card-lg border p-6 transition-all duration-500 ease-premium ${
                    isMoat
                      ? "border-amber-500/25 bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.02] hover:border-amber-500/40 hover:from-amber-500/[0.12] hover:to-amber-500/[0.04]"
                      : "border-white/[0.08] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
                  } hover:-translate-y-1`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isMoat
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-cobalt-500/15 text-cobalt-300"
                    }`}
                  >
                    {IconEl ? <IconEl width={22} /> : null}
                  </div>

                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-300">
                    {f.body}
                  </p>

                  {isMoat && (
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                      <Icon.spark width={12} />
                      Our moat
                    </span>
                  )}

                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-opacity duration-700 ${
                      isMoat
                        ? "bg-amber-500/0 group-hover:bg-amber-500/15"
                        : "bg-cobalt-500/0 group-hover:bg-cobalt-500/15"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stats strip */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-4 rounded-card-lg border border-white/[0.06] bg-white/[0.02] p-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-extrabold leading-[1.05] text-white">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs leading-tight text-ink-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
