# Architecture

## Stack

- **Next.js 14** with the App Router (`app/` directory)
- **TypeScript** throughout
- **Tailwind CSS 3** for styling (brand tokens in `tailwind.config.ts`)
- **Framer Motion** for scroll reveals, the 3D tilt, and accordion transitions
- **next/font** self-hosts Manrope + Inter (no render-blocking font requests)

No database SDK is required — the waitlist layer talks to Supabase over plain
REST, or forwards to a webhook, or writes a local JSON file in dev.

## File map

```
website/
├─ app/
│  ├─ layout.tsx            # fonts, <head> metadata, global CSS
│  ├─ page.tsx              # composes every section; JSON-LD structured data
│  ├─ globals.css           # Tailwind layers + brand utility classes
│  └─ api/
│     └─ waitlist/
│        ├─ route.ts        # POST /api/waitlist   (add a signup)
│        └─ count/route.ts  # GET  /api/waitlist/count (live scarcity number)
├─ components/              # one file per section + shared primitives
│  ├─ WaitlistContext.tsx   # client context: live count, cap, refresh()
│  ├─ WaitlistForm.tsx      # the email form + success state
│  ├─ SpotsBadge.tsx        # "N of 500 free spots left" pill
│  ├─ PhoneMock.tsx         # 3D-tilt phone + placeholder app screens
│  ├─ Reveal.tsx            # scroll-reveal wrapper (respects reduced-motion)
│  ├─ Icons.tsx             # inline SVG icon set (no icon-font dependency)
│  └─ …section components…
├─ lib/
│  ├─ content.ts            # ALL copy + data (single source of truth)
│  └─ waitlist.ts           # pluggable storage backends
├─ public/logos/            # SnapEnvoice logomark + app icon (from Assets/)
├─ data/                    # local dev signup store (gitignored)
└─ docs/                    # you are here
```

## Data flow — the live counter

```
Page load
  └─ WaitlistProvider  ──GET──▶ /api/waitlist/count ──▶ lib/waitlist.getCount()
        │                                                   (Supabase / local)
        ▼
   count / cap / spotsRemaining  ──▶  SpotsBadge, Pricing, FinalCta

Form submit
  └─ WaitlistForm  ──POST──▶ /api/waitlist ──▶ lib/waitlist.addSignup()
        │                          returns { count, spotsRemaining, duplicate }
        ▼
   success state + context.refresh()  (badge updates everywhere)
```

The number shown is always the **real** signup count — see
[`conversion-psychology.md`](./conversion-psychology.md) on why we never fake it.

## Server vs client components

- Sections that are purely presentational (`Problem`, `Compare`, `Pricing`,
  `Personas`, `Marquee`, `Screenshots`, `Footer`) are **server components**.
- Anything interactive (`Nav`, `Hero`, `Features` hover, `FAQ`, `WaitlistForm`,
  `Countdown`, `PhoneMock`, `Reveal`, context) is a **client component**
  (`"use client"`).
