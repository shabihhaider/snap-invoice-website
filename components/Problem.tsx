import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

const OLD = [
  "\u201CHey it\u2019s $220 for the detail \ud83d\ude4f\u201D texted at a red light",
  "Client ghosts. You forget what you charged.",
  "\u201CYou never cleaned the back seats.\u201D No proof.",
  "Handwritten carbon copies that get wet and lost",
];

const NEW = [
  "A professional PDF with your logo and totals",
  "Before/after photos embedded as proof-of-work",
  "Sent on WhatsApp in under a minute, offline",
  "A dashboard that shows exactly who owes you",
];

export function Problem() {
  return (
    <section className="section-padding relative bg-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cobalt-600">Why it matters</p>
          <h2 className="mt-4 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.05] tracking-tight text-ink-900">
            Stop texting your prices.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Amateur paperwork caps your rates and drags your payments. The way
            you bill is the last thing a customer sees&nbsp;&mdash; make it
            look like you mean it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Old way */}
          <Reveal>
            <div className="group h-full rounded-card-lg border border-ink-200 bg-ink-50 p-8 transition-shadow duration-500 hover:shadow-card">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-danger-soft px-3.5 py-1.5 text-sm font-semibold text-danger-strong">
                <Icon.x width={15} /> The old way
              </div>
              <ul className="space-y-4">
                {OLD.map((t, i) => (
                  <li key={t} className="flex items-start gap-2 text-ink-500">
                    <Reveal delay={0.06 * i} y={12} className="flex items-start gap-2">
                      <Icon.x
                        width={17}
                        className="mt-0.5 flex-none text-danger/60"
                      />
                      <span className="text-base leading-snug line-through decoration-danger/30">
                        {t}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* SnapEnvoice way */}
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-card-lg border border-cobalt-300/50 bg-gradient-to-br from-cobalt-600 via-cobalt-700 to-cobalt-800 p-8 text-white shadow-glow transition-shadow duration-500 hover:shadow-glow-lg">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <Icon.check width={15} /> The SnapEnvoice way
              </div>
              <ul className="space-y-4">
                {NEW.map((t, i) => (
                  <li key={t} className="flex items-start gap-2">
                    <Reveal delay={0.08 + 0.06 * i} y={12} className="flex items-start gap-2">
                      <Icon.check
                        width={17}
                        className="mt-0.5 flex-none text-amber-400"
                      />
                      <span className="text-base font-medium leading-snug">
                        {t}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>
              {/* Ambient glow blob */}
              <div className="pointer-events-none absolute -bottom-20 -right-14 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cobalt-400/20 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
