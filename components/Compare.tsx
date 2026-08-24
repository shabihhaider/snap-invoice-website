"use client";

import { COMPARE } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

function Cell({ value, hero }: { value: string; hero: boolean }) {
  if (value === "yes")
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 ${
          hero
            ? "bg-success text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]"
            : "bg-success-soft text-success"
        }`}
      >
        <Icon.check width={15} />
      </span>
    );
  if (value === "no")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 text-ink-300">
        <Icon.x width={14} />
      </span>
    );
  if (value === "partial")
    return (
      <span className="rounded-pill bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-600">
        partial
      </span>
    );
  return (
    <span
      className={`text-[13px] font-medium ${hero ? "text-white" : "text-ink-600"}`}
    >
      {value}
    </span>
  );
}

export function Compare() {
  const { columns, rows } = COMPARE;
  return (
    <section id="compare" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">How we compare</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight text-ink-900">
            The photo-first one. Without the traps.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Others bolt photos onto a form or bill you $8.99 a week. We lead
            with the camera and price it honestly.
          </p>
        </Reveal>

        {/* Win counter */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-pill bg-cobalt-50 px-4 py-2 text-sm font-semibold text-cobalt-700">
            <Icon.check width={16} className="text-cobalt-600" />
            SnapEnvoice leads in 5 of 6 categories
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="overflow-x-auto rounded-card-lg border border-ink-200 bg-white shadow-card">
            <table className="w-full min-w-[720px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-[26%] p-4 text-left" />
                  {columns.map((c, i) => {
                    const hero = i === 0;
                    return (
                      <th
                        key={c}
                        className={`p-4 text-center align-bottom ${
                          hero
                            ? "rounded-t-[23px] bg-cobalt-600 text-white"
                            : "text-ink-500"
                        }`}
                      >
                        <span
                          className={`font-display text-sm font-bold ${hero ? "" : "text-ink-700"}`}
                        >
                          {c}
                        </span>
                        {hero && (
                          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                            That&apos;s us
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={row.label} className="transition-colors duration-300 hover:bg-ink-50/50">
                    <td className="border-t border-ink-100 p-4 text-sm font-semibold text-ink-800">
                      {row.label}
                    </td>
                    {row.values.map((v, ci) => {
                      const hero = ci === 0;
                      const last = ri === rows.length - 1;
                      return (
                        <td
                          key={ci}
                          className={`border-t p-4 text-center ${
                            hero
                              ? `border-cobalt-500/20 bg-cobalt-600 ${last ? "rounded-b-[23px]" : ""}`
                              : "border-ink-100"
                          }`}
                        >
                          <Cell value={v} hero={hero} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-ink-400">
            Pricing verified July 2026 from vendor sites. Competitor names are
            trademarks of their owners; comparison is for reference only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
