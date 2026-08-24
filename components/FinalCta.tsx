"use client";

import { Reveal } from "./Reveal";
import { AppStoreBadge } from "./AppStoreBadge";
import { GradientBlob } from "./GradientBlob";
import { Icon } from "./Icons";

const TRUST = [
  { icon: "shield" as const, text: "No data collected" },
  { icon: "wifi-off" as const, text: "Works offline" },
  { icon: "user-x" as const, text: "No account needed" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 text-white sm:py-36">
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0">
        <GradientBlob color="cobalt" size={700} className="-left-[15%] top-[-10%] opacity-60" />
        <GradientBlob color="amber" size={500} className="-right-[10%] bottom-[-10%] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(30px,5vw,52px)] font-extrabold leading-tight tracking-tight">
            The job&apos;s done.
            <br />
            <span className="text-gradient-amber">Now get paid for it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
            Snap the job, price it, send it&nbsp;&mdash; photo proof and
            all&nbsp;&mdash; before you leave the driveway. Free to start, no
            account, works offline.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap justify-center gap-4">
            <AppStoreBadge />
          </div>
          <p className="mt-4 text-[13px] font-medium text-ink-400">
            Free on iPhone. Android coming soon.
          </p>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={0.2} className="mt-12">
          <div className="inline-flex flex-wrap justify-center gap-4 rounded-pill border border-white/[0.06] bg-white/[0.03] px-6 py-3">
            {TRUST.map((t, i) => {
              const IconEl = Icon[t.icon];
              return (
                <span
                  key={t.text}
                  className="flex items-center gap-2 text-[13px] font-medium text-ink-400"
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
    </section>
  );
}
