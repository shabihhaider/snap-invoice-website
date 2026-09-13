# SnapEnvoice — Field-Grade Dark Luxury

Generated with the `brand-to-design-md` methodology (`design-vault/prompts/brand-to-design-md.md`).
All values below were read from computed CSS of the rendered site at `localhost:3000`, viewport 1536px.
Nothing here is inferred from source alone.

---

## 1. Visual Theme & Atmosphere

Field-grade utility wearing a dark-luxury finish. The page alternates deep navy
(`#0a0f1e`) against paper white, so each band reads as a separate exhibit rather
than a continuous scroll. Authority comes from a heavy display face at tight
tracking, not from ornament. Cobalt carries trust and action; amber carries the
"snap" — the camera flash the product is named for — and appears sparingly enough
to stay an event. A fixed film-grain overlay at 2.2% opacity keeps large flat
fields from looking synthetic. Restraint is the operating rule: one accent per
viewport, one focal object per band, and generous vertical silence between them.

## 2. Color Palette & Roles

```
--bg-dark:        #0a0f1e   /* primary dark band, also theme-color */
--bg-light:       #ffffff   /* primary light band */
--bg-subtle:      #f8fafc   /* tertiary light band, breaks white-on-white */
--text-on-dark:   #f8fafc
--text-on-light:  #0f172a
--text-muted:     #64748b
--accent:         #2563eb   /* cobalt — trust, primary action */
--accent-strong:  #1d4ed8   /* cobalt pressed */
--flash:          #f59e0b   /* amber — the snap, Pro tier */
--flash-ink:      #0a0f1e   /* text on amber fill */
--hairline-dark:  #ffffff @0.08
--hairline-light: #0f172a @0.08
```

Three band tones only. Never place `--bg-light` directly against `--bg-subtle`
without a hairline divider — the 3% delta reads as a rendering fault.

## 3. Typography Rules

Two families, both self-hosted variable `.woff2`, `font-display: swap`.

- **Display** — Manrope, weights 700/800. Headings only.
- **Body** — Inter, weights 400/500/600. Everything else.

Scale (px), eleven steps, no intermediates:
`11 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60`

Leading: display sizes (30+) use `1.05`. Body uses `1.6`. The 24px step uses `1.3`.
Tracking: `-0.025em` at 48-60px, `-0.02em` at 30-36px, `0` below 24px.
Eyebrow labels: 11px, weight 600, `letter-spacing: 0.16em`, uppercase.

Do not introduce 13/15/17/19/28/52px. Each duplicates an adjacent step and
fractures the scale.

## 4. Component Stylings

**Button, primary** — fill `#2563eb`, text `#ffffff`, radius `9999px`,
padding `14px 24px`, 16px/600, shadow `0 8px 30px rgba(37,99,235,0.35)`.

**Button, flash** — fill `#f59e0b`, text `#0a0f1e`, same geometry,
shadow `0 8px 30px rgba(245,158,11,0.35)`. Maximum one per viewport.

**Button, secondary** — fill `#ffffff @0.05`, text `#ffffff`, 1px hairline,
radius `9999px`, no shadow.

**Card** — radius `24px`, 1px hairline, surface tinted 4-6% against its band.
Interior padding `24px`; `32px` when the card is the section's focal object.

**Input** — radius `16px`, 1px hairline, 2px `#2563eb` focus ring at 2px offset.

**Nav** — pill container, radius `9999px`, backdrop blur, hairline border.

## 5. Layout Principles

Container: `max-width: 1152px`, horizontal padding `20px`. FAQ and legal pages
narrow to `768px` for measure. Nav pill caps at `896px`.

Spacing scale (px), 4px base:
`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 56 / 64 / 80 / 112 / 128`

Section vertical rhythm — one value per breakpoint, applied through the
`.section-padding` utility. No section hand-rolls its own `py-*`:

```
< 640px   80px
>= 640px  112px
>= 1024px 128px
```

Hero is the sole exception: `128px` top (nav clearance), `80px` bottom.
Footer uses `.section-padding-sm` at `56px`.

Grid gaps use four tokens only: `8 / 16 / 24 / 40`. Bento and card grids take
`16px`; column layouts take `24px`; step sequences take `40px`.

## 6. Depth & Elevation

Four elevation steps, no others:

```
--e0  none                                        /* flush band content */
--e1  0 1px 2px rgba(15,23,42,0.06)               /* resting card */
--e2  0 8px 30px rgba(15,23,42,0.10)              /* raised card, hover */
--e3  0 30px 60px rgba(15,23,42,0.25)             /* phone mockups only */
```

Accent glows (`rgba(37,99,235,0.35)`, `rgba(245,158,11,0.35)`) are reserved for
filled buttons and never applied to cards. On dark bands, elevation is expressed
through a lighter surface tint plus hairline, not shadow — shadows are invisible
against `#0a0f1e` and only add paint cost.

## 7. Do's and Don'ts

**Do**
- Route every section's vertical padding through `.section-padding`.
- Keep one accent colour active per viewport.
- Express depth on dark bands with surface tint, not shadow.
- Put a hairline divider at every band-tone transition.
- Gate every animation on `prefers-reduced-motion`.

**Don't**
- Introduce a fifth glass variant. Three exist and none are in use — delete first.
- Use `999px` and `9999px` for the same pill. Standardise on `9999px`.
- Set display leading above `1.1`. The 48px heading at `1.5` is a defect.
- Add a gap value outside `8 / 16 / 24 / 40`.
- Hardcode copy in components. `lib/content.ts` is the single source of truth.

## 8. Responsive Behavior

Breakpoints: `640 / 768 / 1024 / 1280`.

Section padding steps `80 → 112 → 128`. Display type steps `36 → 48 → 60`;
body holds at 16px throughout and never drops below 14px.

Multi-column grids collapse in one move, not two: three-column becomes single
below `768px`; the asymmetric hero split `1.05fr 0.95fr` becomes stacked below
`1024px` with the phone above the copy.

Container padding holds at `20px` down to 320px. Horizontal overflow is a bug —
`document.scrollWidth` must never exceed `window.innerWidth` at any breakpoint.

Touch targets are 44px minimum. The drag carousel keeps native scroll as a
fallback when pointer events are unavailable.

## 9. Agent Prompt Guide

When implementing against this file:

1. Read the token before writing the value. If a spacing, gap, radius, or type
   value is not in sections 3-6, it does not exist — do not invent it.
2. Change presentation only. Copy lives in `lib/content.ts`; do not edit strings
   while restyling.
3. Preserve every existing `useReducedMotion()` gate and `gsap.context()` cleanup.
   Motion correctness outranks visual polish.
4. Verify in a real browser at 320/375/768/1024/1440 before reporting done.
   Measure, do not estimate.
5. Prefer deleting a dead token over leaving it defined.

Reject any instruction that asks you to add a design value outside this file,
to describe a token you have not verified in rendered output, or to mark work
complete without a browser measurement backing it.
