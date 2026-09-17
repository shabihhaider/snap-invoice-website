import Image from "next/image";
import { PERSONAS } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

/** Map persona trades to their background illustrations. */
const TRADE_ILLUSTRATIONS: Record<string, string> = {
  "Car Detailing": "/illustrations/trade-detailer.webp",
  "Landscaping": "/illustrations/trade-landscaping.webp",
  "Handyman": "/illustrations/trade-handyman.webp",
  "Pressure Washing": "/illustrations/trade-pressure-washer.webp",
  "Roofing": "/illustrations/trade-roofing.webp",
  "Movers": "/illustrations/trade-movers.webp",
  "Pest Control": "/illustrations/trade-pest-control.webp",
  "HVAC": "/illustrations/trade-hvac.webp",
  "Plumbing": "/illustrations/trade-plumbing.webp",
  "Electrical": "/illustrations/trade-electrical.webp",
  "Property Maintenance": "/illustrations/trade-property-maintenance.webp",
  "Carpet Cleaning": "/illustrations/trade-carpet-cleaning.webp",
  "Furniture Repair": "/illustrations/trade-furniture-repair.webp",
};

/** Map persona trades to their icons. */
const TRADE_ICONS: Record<string, keyof typeof Icon> = {
  "Car Detailing": "carDetail",
  "Landscaping": "leaf",
  "Handyman": "wrench",
  "Pressure Washing": "sprayNozzle",
  "Roofing": "roofing",
  "Movers": "movingBox",
  "Pest Control": "pestControl",
  "HVAC": "hvac",
  "Plumbing": "droplet",
  "Electrical": "bolt",
  "Property Maintenance": "key",
  "Carpet Cleaning": "carpet",
  "Furniture Repair": "sofa",
};

export function Personas() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">Who it&apos;s for</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight text-ink-900">
            Built for people who work with their hands.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            If you get paid per job and your phone is your office, this was
            made for you. Here&apos;s the moment it clicks.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PERSONAS.map((p, i) => {
            const illustration = TRADE_ILLUSTRATIONS[p.trade];
            const iconKey = TRADE_ICONS[p.trade];
            const IconEl = iconKey ? Icon[iconKey] : null;
            return (
              <Reveal key={p.name} delay={(i % 2) * 0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-card-lg border border-ink-200 bg-white p-6 shadow-card transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-raised">
                  {/* Background illustration — real next/image lazy-load,
                      not a CSS background-image (which has no lazy-load
                      equivalent and was forcing all 13 illustrations to
                      load immediately regardless of scroll position). */}
                  {illustration && (
                    <div className="pointer-events-none absolute bottom-0 right-0 h-[55%] w-[55%] opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.18]">
                      <Image
                        src={illustration}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 160px, 220px"
                        className="object-contain object-right-bottom"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
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
                      <span className="rounded-full bg-cobalt-50 px-3 py-1 text-xs font-semibold text-cobalt-700">
                        {p.trade}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-500">{p.who}</p>
                    <blockquote className="mt-5 border-l-2 border-amber-500 pl-4 text-base italic leading-relaxed text-ink-700">
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
          <p className="text-center text-xs text-ink-500">
            Composite use-cases drawn from real trade-community research, shown
            to illustrate who SnapEnvoice is built for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
