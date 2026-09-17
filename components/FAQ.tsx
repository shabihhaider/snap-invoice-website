"use client";

import { useState } from "react";
import { FAQ as FAQ_ITEMS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-ink-50">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <p className="eyebrow text-cobalt-600">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight text-ink-900">
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
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="font-display text-base font-bold text-ink-900">
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
                  {/* Always mounted — a search crawler or AI answer engine
                      reading the rendered HTML text sees every answer, not
                      just the one currently open. The expand/collapse is a
                      pure-CSS grid-rows animation (no height measurement,
                      no conditional unmount) so nothing here gates on JS. */}
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-ink-100 px-6 pb-6 pt-4">
                        <p className="text-base leading-relaxed text-ink-600">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
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
