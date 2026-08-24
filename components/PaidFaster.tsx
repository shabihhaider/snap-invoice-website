"use client";

import { Reveal } from "./Reveal";
import { PhoneShot } from "./PhoneShot";
import { Icon } from "./Icons";
import { GradientBlob } from "./GradientBlob";

const POINTS = [
  {
    n: "1",
    title: "See who owes you, in red",
    body: "Overdue invoices surface themselves \u2014 days late, amount, and a Remind button right on the invoice.",
  },
  {
    n: "2",
    title: "Friendly. Firm. Final notice.",
    body: "Pick a tone and the message is written for you. Professional every time, awkward never.",
  },
  {
    n: "3",
    title: "Every reminder, tracked",
    body: "A timeline of every nudge you\u2019ve sent, so you always know where a payment stands.",
  },
];

export function PaidFaster() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <GradientBlob color="cobalt" size={600} className="left-[15%] top-0 opacity-50" />
        <GradientBlob color="amber" size={450} className="bottom-0 right-[5%] opacity-35" />
        <div className="bg-grid-dark absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-amber-400">Get paid faster</p>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-tight">
            The polite payment chaser.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
            Unpaid work is the worst part of the job. SnapEnvoice watches your
            due dates and hands you the perfect reminder&nbsp;&mdash; one tap,
            right tone, paid sooner.
          </p>
        </Reveal>

        {/* Three phones — all visible, scaled down on mobile */}
        <div className="mt-14 flex items-end justify-center gap-2 sm:gap-6 lg:gap-8">
          <Reveal delay={0.05}>
            <div className="hidden sm:block">
              <PhoneShot
                src="/screenshots/09-invoice-detail-overdue-remind.webp"
                alt="Invoice detail with overdue banner and Remind button"
                width={190}
                className="-rotate-3 opacity-90"
              />
            </div>
            <div className="sm:hidden">
              <PhoneShot
                src="/screenshots/09-invoice-detail-overdue-remind.webp"
                alt="Invoice detail with overdue banner and Remind button"
                width={130}
                className="-rotate-3 opacity-80"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="hidden sm:block">
              <PhoneShot
                src="/screenshots/11-reminder-tone-picker-sheet.webp"
                alt="Reminder tone picker: Friendly, Firm, Final Notice"
                width={240}
                className="z-10 shadow-glow"
              />
            </div>
            <div className="sm:hidden">
              <PhoneShot
                src="/screenshots/11-reminder-tone-picker-sheet.webp"
                alt="Reminder tone picker: Friendly, Firm, Final Notice"
                width={170}
                className="z-10 shadow-glow"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="hidden sm:block">
              <PhoneShot
                src="/screenshots/10-invoice-reminders-timeline.webp"
                alt="Reminders timeline showing sent notifications"
                width={190}
                className="rotate-3 opacity-90"
              />
            </div>
            <div className="sm:hidden">
              <PhoneShot
                src="/screenshots/10-invoice-reminders-timeline.webp"
                alt="Reminders timeline showing sent notifications"
                width={130}
                className="rotate-3 opacity-80"
              />
            </div>
          </Reveal>
        </div>

        {/* Numbered points connected to phones */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 font-display text-sm font-bold text-amber-400">
                {p.n}
              </div>
              <h3 className="font-display text-lg font-extrabold">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-300">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
