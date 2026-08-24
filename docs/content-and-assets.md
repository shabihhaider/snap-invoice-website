# Swapping in real content & assets

Everything is placeholder-friendly. Here's exactly what to replace before launch
and where it lives.

## 1. Copy & data → `lib/content.ts`

This one file holds all text: brand strings, nav, trades, steps, features,
comparison table, plans, personas, FAQ, stats. Edit here; components read from
it. Keep the **Field Pro voice**: short sentences, verbs first (see
`branding.md`).

Key knobs:

- `BRAND.waitlistCap` — the number of free-Pro spots (default 500). Controlled by
  `NEXT_PUBLIC_WAITLIST_CAP`; drives the badge, pricing, and copy everywhere.
- `BRAND.launchDate` — powers the countdown (`NEXT_PUBLIC_LAUNCH_DATE`).
- `BRAND.proMonthly` / `proAnnual` — pricing shown across the page.

## 2. App screenshots → `components/PhoneMock.tsx`

Right now the phone shows **branded placeholder screens** drawn in code
(`CaptureScreen`, `PriceScreen`, `InvoiceScreen`). When you have real screenshots:

- Easiest: drop PNGs in `public/screens/` and replace each screen's JSX with
  `<img src="/screens/capture.png" className="h-full w-full object-cover" />`.
- The phone frame, notch, and 3D tilt stay — only the inner screen changes.

`Screenshots.tsx` reuses the same `PhoneMock`, so updating the mock updates the
gallery too.

## 3. Demo video → `components/VideoSection.tsx`

Set the `VIDEO_ID` constant to your YouTube ID:

```ts
const VIDEO_ID = "dQw4w9WgXcQ";
```

The placeholder play button then loads the embed on click. For Vimeo or a
self-hosted file, swap the `<iframe src>` accordingly. (Follow the app's
`marketing-plan.md §2` 30-second script.)

## 4. Logo → `public/logos/`

Replace `logomark.svg`, `app-icon.svg`, `app-icon-192.svg`, `favicon-32.svg`
with new files of the same name. Sourced from
`SnapEnvoice/Assets/aperture-icon-assets/`.

## 5. Open Graph / social preview image

Create `public/og.png` (1200×630) — the image shown when the link is shared on
social. Then add to `app/layout.tsx`:

```ts
openGraph: { images: [{ url: "/og.png", width: 1200, height: 630 }] }
```

Use the app's screenshot direction: device frames on a Cobalt gradient, a
4-word benefit headline, the amber aperture logo.

## 6. Real testimonials (post-beta)

The `Personas` section is deliberately **not** fake reviews. Once beta testers
give you permission (the plan targets 10+ quotes — see `marketing-plan.md §1`),
add a real testimonials section with names, trades, and — on brand — their
before/after job photos.
