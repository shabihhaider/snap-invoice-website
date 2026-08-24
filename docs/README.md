# SnapEnvoice — Waitlist Website

A single-page, pre-launch landing site for **SnapEnvoice** — the camera-first
invoicing app for tradespeople. Built to collect waitlist signups before launch,
with a genuine scarcity offer: **the first 500 people get 3 months of Pro free.**

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.**

---

## Quick start

```bash
cd website
npm install
cp .env.example .env.local   # optional — works with zero config in dev
npm run dev                  # http://localhost:3000
```

With no `.env.local`, signups are stored in `data/waitlist.local.json` so you can
test the whole flow locally. For production, wire up a real backend — see
[`waitlist-integration.md`](./waitlist-integration.md).

```bash
npm run build   # production build
npm run start   # serve the production build
```

---

## What's in the box

| Section | Component | Purpose |
|---|---|---|
| Sticky nav | `Nav.tsx` | Transparent → solid on scroll, live "join" CTA |
| Hero | `Hero.tsx` | Headline, waitlist form, 3D tilt phone, scarcity badge |
| Trades marquee | `Marquee.tsx` | Belonging trigger (detailing, landscaping, …) |
| Problem | `Problem.tsx` | "Stop texting your prices" — old vs new |
| How it works | `HowItWorks.tsx` | Snap → Price → Send, 3 device screens |
| Features | `Features.tsx` | Bento grid of real v1 features + stat strip |
| Screenshots | `Screenshots.tsx` | Horizontal gallery (placeholder device screens) |
| Video | `VideoSection.tsx` | Demo placeholder, swap in a YouTube ID |
| Compare | `Compare.tsx` | vs Joist / Invoice Simple / Bookipi / Invoice Fly |
| Pricing | `Pricing.tsx` | Free vs Pro + the free-Pro offer |
| Who it's for | `Personas.tsx` | Target-user cards (honest, not fake reviews) |
| FAQ | `FAQ.tsx` | Accordion answering the real objections |
| Final CTA | `FinalCta.tsx` | Countdown + waitlist form |
| Footer | `Footer.tsx` | Links, socials, privacy promise |

All copy and data live in **`lib/content.ts`** — edit there, not in components.

---

## Docs index

- [`architecture.md`](./architecture.md) — file structure & how it fits together
- [`branding.md`](./branding.md) — the "Field Pro" brand system
- [`waitlist-integration.md`](./waitlist-integration.md) — Supabase / GetWaitlist / Resend
- [`deployment.md`](./deployment.md) — ship it on Vercel
- [`conversion-psychology.md`](./conversion-psychology.md) — every trigger, and why
- [`content-and-assets.md`](./content-and-assets.md) — swapping in real screenshots, video, logo
- [`launch-checklist.md`](./launch-checklist.md) — do this before you drive traffic
