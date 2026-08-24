# Branding — "Field Pro"

The site mirrors the SnapEnvoice app brand (`snap-invoice/theme/tokens.ts` and
`docs/brand-kit.md`). Same palette, same fonts, same voice — the website should
feel like the app.

## Brand idea

> A precision tool for people who work with their hands. Solid, fast,
> trustworthy — never like accounting software.

**Tagline:** *Snap. Price. Send.*
**Voice:** Short sentences. Verbs first. Foreman, not a bank.
("Get paid faster", not "Optimize your receivables workflow.")

## Color system (in `tailwind.config.ts`)

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary | `cobalt-600` | `#2563EB` | Trust, actions, brand |
| Primary (dark) | `cobalt-500` | `#3564F0` | On dark surfaces |
| Accent "flash" | `amber-500` | `#F59E0B` | Camera/snap moments, Pro, scarcity |
| Success | `success` | `#059669` | Paid / money-in / confirmations |
| Danger | `danger` | `#DC2626` | The "old way", errors |
| Ink neutrals | `ink-0…950` | slate scale | Surfaces & text |

**Rules (kept from the app):**
- Amber is reserved for the snap moment, Pro, and the free-spots offer — never a
  generic highlight.
- Success green is reserved for money/paid/confirmed states.
- One primary action per screen.

## Typography

- **Manrope** (ExtraBold/Bold) — headings, hero, big numbers. `font-display`.
- **Inter** (Regular/Medium/SemiBold) — body & UI. `font-sans`.

Both are free, open-source (OFL), loaded via `next/font/google` and self-hosted.

## Motion language

- **Aurora glows** drift slowly behind dark sections.
- **Scroll reveals** fade + rise content as it enters the viewport.
- **3D tilt** on the phone mockups responds to the pointer.
- **Amber flash** pulses on the camera shutter.
- Everything collapses gracefully under `prefers-reduced-motion`.

## Logo assets

Copied from `SnapEnvoice/Assets/aperture-icon-assets/` into `public/logos/`:

- `logomark.svg` — the amber aperture "S" mark (used in nav + footer)
- `app-icon.svg` / `app-icon-192.svg` — full app icon
- `favicon-32.svg` — browser tab icon

To update the logo, drop new files in `public/logos/` with the same names.
