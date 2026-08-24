import { PERSONAS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

/** Map persona trades to their background illustrations. */
const TRADE_ILLUSTRATIONS: Record<string, string> = {
  "Car Detailing": "/illustrations/trade-detailer.png",
  "Landscaping": "/illustrations/trade-landscaping.png",
  "Handyman": "/illustrations/trade-handyman.png",
  "Pressure Washing": "/illustrations/trade-pressure-washer.png",
};

/** Map persona trades to their icons. */
const TRADE_ICONS: Record<string, keyof typeof Icon> = {
  "Car Detailing": "carDetail",
  "Landscaping": "leaf",
  "Handyman": "wrench",
  "Pressure Washing": "sprayNozzle",
};

export function Personas() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">Who it&apos;s for</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight text-ink-900">
            Built for people who work with their hands.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            If you get paid per job and your phone is your office, this was
            made for you. Here&apos;s the moment it clicks.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PERSONAS.map((p, i) => {
            const illustration = TRADE_ILLUSTRATIONS[p.trade];
            const iconKey = TRADE_ICONS[p.trade];
            const IconEl = iconKey ? Icon[iconKey] : null;
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-card-lg border border-ink-200 bg-white p-7 shadow-card transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-raised">
                  {/* Background illustration */}
                  {illustration && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-right-bottom bg-no-repeat opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.18]"
                      style={{
                        backgroundImage: `url(${illustration})`,
                        backgroundSize: "55%",
                        backgroundPosition: "92% 85%",
                      }}
                    />
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Trade icon avatar */}
                        {IconEl && (
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt-50 text-cobalt-600">
                            <IconEl width={18} />
                          </div>
                        )}
                        <h3 className="font-display text-lg font-extrabold text-ink-900">
                          {p.name}
                        </h3>
                      </div>
                      <span className="rounded-pill bg-cobalt-50 px-3 py-1 text-xs font-semibold text-cobalt-700">
                        {p.trade}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-500">{p.who}</p>
                    <blockquote className="mt-5 border-l-2 border-amber-500 pl-4 text-[15px] italic leading-relaxed text-ink-700">
                      <span className="text-amber-500">&ldquo;</span>
                      {p.win.replace(/[\u201C\u201D]/g, "")}
                      <span className="text-amber-500">&rdquo;</span>
                    </blockquote>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8">
          <p className="text-center text-xs text-ink-400">
            Composite use-cases drawn from real trade-community research, shown
            to illustrate who SnapEnvoice is built for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
