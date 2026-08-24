"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PLANS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { GradientBlob } from "./GradientBlob";

export function Pricing() {
  const { free, pro } = PLANS;
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <GradientBlob color="cobalt" size={600} className="left-[30%] top-[-10%] opacity-40" />
        <GradientBlob color="amber" size={400} className="bottom-[-5%] right-[10%] opacity-30" />
        <div className="bg-grid-dark absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-amber-400">Simple, honest pricing</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight">
            Free to start. Pro when you grow.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-300">
            No credit card for the free tier. No weekly-billing traps. One Pro
            price, cancel anytime.
          </p>
        </Reveal>

        {/* Annual / Monthly toggle */}
        <Reveal className="mt-10 flex flex-col items-center gap-3">
          <div className="inline-flex items-center rounded-pill border border-white/10 bg-white/[0.04] p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-pill px-6 py-2 text-sm font-semibold transition-all duration-500 ease-premium ${
                !annual
                  ? "bg-cobalt-600 text-white shadow-fab"
                  : "text-ink-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-pill px-6 py-2 text-sm font-semibold transition-all duration-500 ease-premium ${
                annual
                  ? "bg-cobalt-600 text-white shadow-fab"
                  : "text-ink-400 hover:text-white"
              }`}
            >
              Annual
            </button>
          </div>
          <motion.span
            initial={false}
            animate={{ opacity: annual ? 1 : 0, y: annual ? 0 : -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-pill bg-amber-500/15 px-3 py-1 text-[11px] font-semibold text-amber-400"
          >
            Save 42% with annual
          </motion.span>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free */}
          <Reveal>
            <div className="flex h-full flex-col rounded-card-lg border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-extrabold">
                {free.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">
                  {free.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-400">{free.note}</p>
              <ul className="mt-6 space-y-3.5">
                {free.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[15px] text-ink-200"
                  >
                    <Icon.check
                      width={17}
                      className="mt-0.5 flex-none text-cobalt-400"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-500">{free.footnote}</p>
              <a
                href="#get-the-app"
                className="btn-secondary mt-8 justify-center"
              >
                Start free
              </a>
            </div>
          </Reveal>

          {/* Pro */}
          <Reveal delay={0.1}>
            <div className="gradient-border relative flex h-full flex-col rounded-card-lg bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8 shadow-[0_0_80px_rgba(245,158,11,0.1)] backdrop-blur-sm ring-1 ring-amber-500/20">
              {/* Trial badge */}
              <div className="absolute right-5 top-5 z-10 rounded-pill bg-amber-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                7-day free trial
              </div>

              <h3 className="font-display text-xl font-extrabold">
                {pro.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={annual ? "annual" : "monthly"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-5xl font-extrabold"
                  >
                    {annual ? "$89.99" : "$12.99"}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm text-ink-400">
                  {annual ? "/year" : "/month"}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-400">{pro.note}</p>
              <ul className="mt-6 space-y-3.5">
                {pro.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[15px] text-ink-100"
                  >
                    <Icon.check
                      width={17}
                      className="mt-0.5 flex-none text-amber-500"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Trial info box */}
              <div className="mt-6 rounded-xl bg-amber-500/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                  <Icon.spark width={15} />
                  {annual
                    ? "7 days free, then $89.99/yr"
                    : "No trial on monthly \u2014 switch to annual for 7 days free"}
                </div>
                <p className="mt-1 text-xs text-amber-400/70">
                  Cancel anytime in your App Store settings.
                </p>
              </div>
              <p className="mt-4 text-xs text-ink-500">{pro.footnote}</p>
              <a
                href="#get-the-app"
                className="btn-amber mt-8 justify-center"
              >
                Try Pro free <Icon.arrow width={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
