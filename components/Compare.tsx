import { WHY_DIFFERENT } from "@/lib/content";
import { Reveal } from "./Reveal";

/**
 * Brand manifesto — a deliberate pause, not another claims list.
 * Features and PhotoProof already carry the "what"; Pricing carries the
 * "how much." This section exists only to state the belief behind the
 * product, so it stays text-only and roomy rather than reaching for a
 * bento grid or icon set that would just restate those sections.
 */
export function Compare() {
  const { eyebrow, heading, lead, closing } = WHY_DIFFERENT;
  return (
    <section id="compare" className="section-padding bg-white">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="eyebrow text-cobalt-600">{eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.08] tracking-tight text-ink-900">
            {heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-ink-500">
            {lead}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-8 h-px w-12 bg-ink-200" />
          <p className="mx-auto mt-8 max-w-xl font-display text-xl font-bold leading-snug text-ink-900">
            {closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
