import { TRADES } from "@/lib/content";
import { Icon } from "./Icons";

const TRADE_ICONS: Record<string, keyof typeof Icon> = {
  "Car Detailing": "carDetail",
  "Landscaping": "leaf",
  "Lawn Care": "mower",
  "Handyman": "wrench",
  "Pool Service": "pool",
  "Painting": "paintRoller",
  "Pressure Washing": "sprayNozzle",
  "Cleaning": "sprayBottle",
  "Junk Removal": "truck",
  "Mobile Mechanics": "gear",
};

/**
 * Dual-row scrolling marquee with trade icons.
 * Light bg strip that acts as a visual breather between dark hero and white Problem section.
 */
export function Marquee() {
  const top = [...TRADES, ...TRADES];
  const bottom = [
    ...TRADES.slice(5),
    ...TRADES.slice(0, 5),
    ...TRADES.slice(5),
    ...TRADES.slice(0, 5),
  ];

  return (
    <div className="border-y border-ink-100 bg-white py-8 sm:py-10">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400">
        Built for the trades that get paid per job
      </p>

      {/* Top row — scrolls left */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {top.map((t, i) => {
            const iconKey = TRADE_ICONS[t];
            const IconEl = iconKey ? Icon[iconKey] : null;
            return (
              <span
                key={`${t}-${i}`}
                className="flex items-center gap-2 font-display text-base font-bold text-ink-300"
              >
                {IconEl && <IconEl width={18} className="text-cobalt-400" />}
                {t}
              </span>
            );
          })}
        </div>
      </div>

      {/* Bottom row — scrolls right */}
      <div className="mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-reverse gap-10 whitespace-nowrap">
          {bottom.map((t, i) => {
            const iconKey = TRADE_ICONS[t];
            const IconEl = iconKey ? Icon[iconKey] : null;
            return (
              <span
                key={`${t}-r-${i}`}
                className="flex items-center gap-2 font-display text-base font-bold text-ink-400"
              >
                {IconEl && <IconEl width={18} className="text-amber-400" />}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
