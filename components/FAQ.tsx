"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ as FAQ_ITEMS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <p className="eyebrow text-cobalt-600">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight text-ink-900">
            Straight answers.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-card border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-cobalt-200 shadow-card"
                      : "border-ink-200 hover:border-ink-300"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[16px] font-bold text-ink-900">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-cobalt-600 text-white"
                          : "bg-ink-100 text-ink-500"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <div className="border-t border-ink-100 px-6 pb-6 pt-4">
                          <p className="text-[15px] leading-relaxed text-ink-600">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-500">
            Still wondering something?{" "}
            <a
              href="mailto:snapenvoice@gmail.com"
              className="font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700 hover:underline"
            >
              snapenvoice@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
