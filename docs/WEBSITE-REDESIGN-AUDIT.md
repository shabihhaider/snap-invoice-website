# SnapEnvoice Website Redesign — Audit & Asset Plan

> Creative Direction: Premium product launch website.
> Reference tier: Apple product pages, Linear, Stripe, Vercel, Raycast, Arc Browser.
> Style direction: **Dark luxury meets field-grade utility** — cinematic depth, restrained motion, cobalt & amber palette, craft typography, alive but never noisy.

---

## PART 1 — SECTION-BY-SECTION AUDIT

### 1. Nav

**Current state**: Floating pill with glass effect, scroll-triggered backdrop. Hamburger morph. Good foundation.

**Issues**:
- No active section highlighting — user has no sense of position on the page
- Glass transition is binary (scrolled/not) — no progressive blur/opacity ramp
- Mobile sheet uses `max-h` toggle which can clip on small screens
- CTA button "Get the app" competes with nav links visually
- No scroll-progress indicator

**Redesign direction**:
- Progressive glass backdrop: opacity/blur ramps from 0→100% over first 100px of scroll
- Active nav link indicator: tiny dot or underline driven by ScrollTrigger intersection
- Mobile drawer: full-height sheet with spring physics (Framer Motion `AnimatePresence` + `drag`)
- Subtle horizontal progress bar (1px amber line at bottom of nav, width = scroll%)
- Nav shrinks slightly after scroll (h-14 → h-12) for more content breathing room

---

### 2. Hero

**Current state**: Dark section with radial gradients, masked grid, ticker text, floating phone with Tilt, PAID/REMINDER chips. Framer Motion reveal cascade. Strong concept.

**Issues**:
- Grid backdrop is static — feels flat despite the gradient layers
- Floating phone uses CSS keyframe `hero-floaty` (simple translateY bounce) — reads as cheap loop, not premium float
- Ticker animation is CSS-only (no scroll connection) — disconnected from page rhythm
- PAID and REMINDER chips are hidden on mobile (`hidden sm:block`) — mobile users miss key social proof
- Stats row wraps poorly on narrow screens (3 columns with `gap-9` overflows)
- App Store button is plain white rectangle — doesn't match Apple's official badge visual language
- No scroll-driven exit parallax — hero just scrolls away flat

**Redesign direction**:
- **Ambient gradient motion**: Replace static radial gradients with slow-drifting aurora blobs (GSAP timeline, 20s cycle, GPU-composited transforms only)
- **Scroll parallax exit**: Hero content fades + scales down as user scrolls past (ScrollTrigger pin or scrub)
- **Phone entrance**: Spring-physics reveal from below with slight rotation resolve, then subtle idle float via GSAP `to()` yoyo (not CSS keyframe)
- **Chips visible on mobile**: Stack them horizontally below the phone on small screens
- **Stats row**: Responsive — 3-col on md+, stacked or 2+1 on mobile
- **Apple badge**: Use official "Download on the App Store" SVG badge (black, 120×40)
- **Grain + depth**: Keep the grain overlay but add a soft vignette gradient around hero edges

---

### 3. Marquee

**Current state**: Simple scrolling trade names. White bg, border-y. Functional but forgettable.

**Issues**:
- Just text — no visual differentiation between trades
- Single speed, single direction — monotonous
- No connection to the product (these are jobs, they could be more vivid)
- Abrupt visual break between dark hero and white marquee

**Redesign direction**:
- Add small trade-specific icons or emojis before each trade name (wrench, leaf, car, etc.)
- Dual-row marquee: top row scrolls left, bottom row scrolls right (different speeds) — creates depth
- Semi-transparent dark background (ink-950) with reduced opacity text — blends hero→content transition
- Or: eliminate the standalone marquee and integrate trades into a more compelling social proof strip

---

### 4. Problem ("Stop texting your prices")

**Current state**: 2-col before/after cards. Effective copy. Clean layout.

**Issues**:
- Cards are static — no micro-interaction, no progressive reveal per list item
- "The old way" and "The SnapEnvoice way" cards are same height/rhythm — no visual tension
- Right card gradient is standard `from-cobalt-600 to-cobalt-800` — could be richer
- Amber glow blob in right card is purely decorative (doesn't respond to interaction)
- Section sits on plain white — feels disconnected from the dark hero above

**Redesign direction**:
- **Staggered list reveal**: Each list item fades in with 80ms delay as the card enters viewport
- **Old way card**: Subtle red/danger tint with crosshatch or noise texture — feels "rough"
- **SnapEnvoice card**: Deeper gradient with animated border glow (subtle conic-gradient rotation)
- **Visual tension**: Old card slightly smaller/recessed, new card slightly elevated/larger
- Consider a scroll-driven "swipe away" interaction where the old way card slides left/fades as the new way card grows

---

### 5. HowItWorks (3-step flow)

**Current state**: 3 phone screenshots in a grid with step numbers, connector line, and descriptions. Good structure.

**Issues**:
- Connector line is a simple 1px gradient — doesn't convey progression
- All 3 phones same size — no focal hierarchy
- Grid layout is static — misses the opportunity for a narrative scroll sequence
- On mobile, arrow dividers between steps are generic
- Step numbers (01, 02, 03) in cobalt circles are small and don't stand out

**Redesign direction**:
- **Scroll-driven horizontal storytelling**: On desktop, pin the section and scrub through steps horizontally as user scrolls vertically (GSAP ScrollTrigger horizontal scroll)
- **Progressive connector**: Animated SVG path that draws itself as the user scrolls through
- **Phone focus**: Center phone is 20% larger, flanking phones have reduced opacity + slight rotation
- **Step counter animation**: Numbers count up with a flip/roll effect as each step enters
- On mobile: vertical stack with connecting animated line that draws downward

---

### 6. Features (Bento grid)

**Current state**: 3-col bento grid with hover effects, icon backgrounds, "Our moat" badges. Glass-like cards on dark bg.

**Issues**:
- All cards are same visual weight — no hierarchy between "Our moat" features and regular ones
- Hover effect is subtle (`-translate-y-0.5`) — barely perceptible
- Icon circles are small (h-11 w-11) — don't anchor the card visually
- Stat strip at bottom is just numbers in a box — could be more impactful
- Cards are all same height (`auto-rows-[1fr]`) — bento should break the grid

**Redesign direction**:
- **Variable card heights**: "Our moat" cards are taller with larger icons and possibly an inline screenshot or illustration
- **Hover depth**: Cards lift more (`-translate-y-1`), gain a gradient border glow, and show a subtle background shimmer
- **Icon animation**: Icons have a micro-animation on scroll-enter (camera icon does a subtle shutter click, bolt icon sparks, etc.)
- **Stat strip**: Animate numbers with a counting-up effect on scroll-enter (0 → 60s, 0 → 10, etc.)
- **Stagger**: Cards reveal in a masonry-like cascade, not all at once

---

### 7. Screenshots (Horizontal gallery)

**Current state**: Horizontal snap-scroll gallery with 5 phone cards. White cards on light bg. Captions below each.

**Issues**:
- Gallery is basic CSS snap-scroll — no drag momentum, no visual feedback
- No indication to the user that it's scrollable (no scroll hint, no arrow buttons)
- Cards are uniform — no featured/enlarged card
- PhoneShot width is fixed 190px in 240px cards — very small
- No parallax or depth between cards

**Redesign direction**:
- **Drag-enabled carousel**: Use Framer Motion `drag="x"` with constraints for fluid drag interaction
- **Perspective depth**: Cards closest to center are full opacity/scale, edges fade and shrink (CSS perspective or JS-driven)
- **Scroll hint**: Subtle animated arrow or "drag to explore" indicator on first visit
- **Larger cards**: Phone width 260px in 320px cards — more readable
- **Parallax**: Phone images have slight Y-offset parallax relative to card container on drag

---

### 8. PaidFaster (Payment reminder spotlight)

**Current state**: 3 phones (overdue, tone picker, timeline) with side phones rotated, center elevated. 3-point description below.

**Issues**:
- Side phones hidden on mobile (`hidden sm:block`) — mobile users only see the center phone
- Rotation is static (-3deg, +3deg) — no interaction
- Three description columns below are standard text — could tie more directly to the phones above
- No storytelling sequence (these 3 screens tell a story: see overdue → pick tone → track reminder)

**Redesign direction**:
- **Scroll-driven sequence**: As user scrolls, phones transition from left to center to right, telling the story sequentially
- **Mobile**: Show all 3 phones in a mini horizontal scroll or stacked cards
- **Connected narrative**: Number each step (1→2→3) and draw a connecting line/arrow between the description cards
- **Highlight interaction**: When a description card is in view, the corresponding phone has a subtle glow or scale-up

---

### 9. Compare (Competitor table)

**Current state**: HTML table with sticky first column, SnapEnvoice column highlighted in cobalt. Checkmarks/X icons.

**Issues**:
- Classic comparison table layout — functional but boring, seen on every SaaS page
- Requires horizontal scroll on mobile — poor UX
- SnapEnvoice column blends with the cobalt of other sections — doesn't feel special enough
- No visual celebration of SnapEnvoice's wins (all "yes" cells look the same)

**Redesign direction**:
- **Card-based comparison**: Instead of a table, show feature rows as cards where SnapEnvoice's advantage is visually celebrated (larger checkmark, glow, or a "winner" ribbon)
- **Mobile-first**: Stack as accordion or card layout on mobile (each feature = expandable card showing all competitors)
- **Progressive reveal**: Rows reveal one-by-one as user scrolls, with SnapEnvoice's column animating slightly ahead (builds anticipation)
- **Win counter**: "SnapEnvoice leads in 5 of 6 categories" summary badge

---

### 10. Pricing

**Current state**: 2-col cards (Free vs Pro). Pro has amber border and trial badge. Standard layout.

**Issues**:
- Cards are white on light bg (ink-50) — low contrast, feels washed out
- Pro card has a badge but doesn't feel meaningfully different from Free
- CTA buttons are identical on both cards ("Download free") — should differentiate
- Trial info is in a small amber box — could be more prominent
- No toggle (monthly/annual) — just shows annual with "or $12.99/mo" text

**Redesign direction**:
- **Dark section**: Move pricing to dark bg for dramatic contrast
- **Pro card glow**: Animated gradient border + elevated shadow — obviously the recommended choice
- **Price toggle**: Animated pill switch between monthly/annual with price morphing (number flip animation)
- **Differentiated CTAs**: Free = "Start free" (secondary button), Pro = "Try Pro free" (amber primary button)
- **Savings callout**: "Save 42%" badge on annual toggle
- **Glass cards**: Semi-transparent with backdrop blur on dark background

---

### 11. Personas

**Current state**: 2×2 grid of cards with trade badges, descriptions, and blockquotes. Clean but static.

**Issues**:
- Cards are visually identical — no personality or warmth
- No photos or avatars — feels impersonal for a "who it's for" section
- Blockquotes are text-only — could use more visual treatment
- "Composite use-cases" disclaimer at bottom is necessary but deflating

**Redesign direction**:
- **Trade-specific background illustrations**: Each card gets a subtle, desaturated background illustration of the trade (truck, mower, toolbox, pressure washer)
- **Avatar placeholders**: Illustrated avatar icons or trade-specific silhouettes (not stock photos — stay honest)
- **Quote styling**: Larger opening quotation mark, slightly different bg tint per card
- **Scroll stagger**: Cards rotate in from slightly different angles for visual interest

---

### 12. FAQ

**Current state**: Accordion with plus→X rotation, Framer Motion expand/collapse. Single expansion. Solid.

**Issues**:
- Accordion is standard — nothing wrong, nothing memorable
- Plus icon is small (h-7 w-7) — could be more tappable on mobile
- No section intro beyond "Straight answers" — could set tone better

**Redesign direction**:
- Mostly fine — refine the expand/collapse spring physics
- Add a subtle left-border indicator on the open item (amber accent line)
- Slightly larger tap targets on mobile
- Consider showing first FAQ open by default (already done — good)

---

### 13. FinalCTA

**Current state**: Dark section with aurora blobs, amber gradient text, App Store button. Clean closer.

**Issues**:
- Aurora blobs are slow-moving but don't feel connected to user action
- Same App Store button style as hero — no progression
- No urgency or social proof (no count, no trust signals)
- Section is short — scrolls by quickly

**Redesign direction**:
- **Cinematic closer**: Larger section height, centered phone mockup or app icon as visual anchor
- **Scroll-triggered glow**: Aurora blobs intensify as user reaches this section (reward for scrolling)
- **Trust strip**: Small row of trust signals (privacy badge, "No account needed", "Works offline", star rating)
- **Sticky behavior**: Consider making this section sticky briefly so it "catches" the user before footer

---

### 14. Footer

**Current state**: Dark, logo + tagline + nav links + socials. Privacy indicator. Clean.

**Issues**:
- Social links point to "#" — dead links
- Layout is standard 2-column — no craft
- No App Store badge in footer (common pattern for app marketing sites)

**Redesign direction**:
- Add App Store download badge
- Refine typography hierarchy
- Add subtle grid or line texture background
- Keep it clean and minimal — footer shouldn't compete for attention

---

## PART 2 — VISUAL ASSET & EXPERIENCE PLAN

Every asset below is tagged with **where it goes**, **exact specs**, and an **AI-generation prompt** you can use to create it.

### A. HERO SECTION ASSETS

#### A1. Ambient Aurora Gradient Texture
- **What**: Soft, organic gradient blob texture for hero background animation
- **Where**: Hero section background, behind the grid mask
- **Specs**: 1920×1080px PNG with transparency, soft-edge blobs in cobalt blue (#2563EB at 30% opacity) and amber (#F59E0B at 15% opacity)
- **How used**: CSS/GSAP animated via `transform: translate()` and `scale()` — no filter animation
- **Note**: Can be generated purely in CSS/SVG (no raster asset needed). I'll implement this with layered radial gradients animated via GSAP.

#### A2. Apple App Store Badge (Official)
- **What**: Official "Download on the App Store" black badge
- **Where**: Hero CTA area, FinalCTA, Footer
- **Specs**: SVG, standard Apple dimensions (120×40 @1x). Download from Apple's official marketing resources.
- **AI prompt**: N/A — must use Apple's official asset. Download from: https://developer.apple.com/app-store/marketing/guidelines/
- **Action**: Download the official SVG badge and place at `public/badges/app-store-badge.svg`

#### A3. Hero Phone Glow/Shadow Layer
- **What**: A pre-rendered radial glow that sits behind the phone mockup for depth
- **Where**: Behind the floating phone in the hero
- **Specs**: 600×800px PNG, transparent, soft cobalt-blue radial glow (#2563EB at 40% center, fading to transparent)
- **AI prompt**: N/A — generate with CSS `radial-gradient` or a simple Figma export
- **Note**: Better implemented as pure CSS (already partially done). Will enhance with GSAP opacity animation tied to scroll.

#### A4. "Google Play Coming Soon" Badge (Optional)
- **What**: Muted "Coming soon to Google Play" badge
- **Where**: Next to App Store badge in hero
- **Specs**: SVG, matching height to App Store badge, desaturated/grey treatment
- **AI prompt**: N/A — create in SVG/CSS with the Google Play icon + "Coming Soon" text in muted grey

---

### B. TRADE/PERSONA ILLUSTRATION ASSETS

#### B1. Trade Icon Set (10 icons)
- **What**: Minimal line icons for each trade in the marquee
- **Where**: Marquee section, optionally in Personas cards
- **Specs**: 24×24px SVG each, 1.5px stroke, `currentColor`, matching the existing Icon component style
- **Trades**: Car Detailing (car + sparkle), Landscaping (leaf/tree), Lawn Care (mower), Handyman (wrench), Pool Service (water/wave), Painting (roller), Pressure Washing (spray nozzle), Cleaning (spray bottle), Junk Removal (truck), Mobile Mechanics (engine/gear)
- **AI prompt for each icon style reference**:
  > "Minimal line icon, 24x24 pixel grid, 1.5px stroke weight, rounded line caps and joins, single path, no fill, designed for a professional invoicing app. Subject: [TRADE TOOL]. Style: matches Lucide/Feather icon family. Monochrome, transparent background."
- **Action**: Create as SVG paths in the existing `Icons.tsx` component

#### B2. Trade Background Illustrations (4 illustrations for Personas)
- **What**: Subtle, desaturated background illustrations for each persona card
- **Where**: Personas section, as `background-image` on each card at 5-8% opacity
- **Specs**: 400×300px PNG, transparent background, monochrome line art in cobalt-blue (#2563EB), depicting the trade environment
- **AI prompts**:
  1. **Mobile Detailer**: "Minimal line illustration of a professional car detailing setup — a sedan with a detailing spray gun, microfiber cloth, and a mobile detailing van in the background. Monochrome cobalt blue (#2563EB) on transparent background. Thin elegant linework, no shading, architectural blueprint style. 400x300px."
  2. **Landscaping Crew**: "Minimal line illustration of a landscaping scene — a neat yard with a mower track pattern, hedge trimmer, wheelbarrow, and a pickup truck with trailer. Monochrome cobalt blue (#2563EB) on transparent background. Blueprint style, thin lines. 400x300px."
  3. **Handyman**: "Minimal line illustration of handyman tools — a toolbox, drill, measuring tape, level, and a house doorway being repaired. Monochrome cobalt blue (#2563EB) on transparent background. Blueprint style, thin elegant lines. 400x300px."
  4. **Pressure Washer**: "Minimal line illustration of a pressure washing scene — a pressure washer machine, spray wand cleaning a driveway, and a work van. Monochrome cobalt blue (#2563EB) on transparent background. Blueprint style, thin lines. 400x300px."

---

### C. PRODUCT SCREENSHOT ENHANCEMENTS

#### C1. Additional App Screenshots Needed
- **Current**: 11 screenshots in `public/screenshots/`, 26 in `Assets/Screenshots/organized/`
- **What's missing**: The organized folder has all 26 screens. The website only uses 11. Several key screens are missing from the website:
  - `06-dashboard-quick-create-fab.png` — Shows the FAB (floating action button) — great for demonstrating speed
  - `12-invoice-detail-paid-stamp.png` — Shows the satisfying "PAID" stamp — great for emotional payoff
  - `20-client-detail-lifetime-revenue.png` — Shows client management
  - `22-settings-business-info-payments.png` — Shows customization
- **Action**: Convert these 4 PNGs to WebP and add to `public/screenshots/`:
  ```
  06-dashboard-quick-create-fab.webp
  12-invoice-detail-paid-stamp.webp
  20-client-detail-lifetime-revenue.webp
  22-settings-business-info-payments.webp
  ```
- **Specs**: WebP, quality 85, maintain original aspect ratio (1080×2400)

#### C2. Hero Phone Screenshot Selection
- **Current**: Uses `05-dashboard-home-monthly-revenue.webp` (dashboard)
- **Recommendation**: Keep — it's the strongest hero shot. The $47,250 figure is immediately compelling. Consider rotating between 2-3 screenshots with a crossfade.

---

### D. SECTION BACKGROUND TEXTURES

#### D1. Dot Grid Pattern (Enhanced)
- **What**: Refined dot grid background for light sections
- **Where**: HowItWorks, Screenshots, FAQ sections
- **Specs**: CSS-generated via `radial-gradient` — no raster asset needed
- **Enhancement**: Increase dot spacing from 28px to 40px, reduce opacity, add radial mask to fade at edges. Already implemented in CSS — just needs tuning.

#### D2. Noise/Grain Texture
- **What**: Film grain overlay
- **Where**: Global `::after` on body (already implemented)
- **Current**: SVG feTurbulence at 2.8% opacity — good
- **Enhancement**: Reduce to 2% opacity for a more subtle effect. Consider switching to a static PNG grain tile (8KB, 256×256) for better mobile GPU performance than inline SVG filter

#### D3. Mesh Gradient Background for Pricing Section
- **What**: Rich, multi-point mesh gradient for the pricing section background
- **Where**: Pricing section (moving to dark bg)
- **Specs**: CSS-only — 3 overlapping radial gradients (cobalt, amber, deep navy) with blur
- **Note**: Pure CSS implementation, no asset needed

---

### E. MOTION & INTERACTION ASSETS

#### E1. Lottie: Camera Shutter Click (Feature card micro-interaction)
- **What**: A 1-second camera shutter animation for the "Camera-first invoicing" feature card
- **Where**: Features bento grid, plays on scroll-enter for the camera card
- **Specs**: Lottie JSON, 120×120px canvas, 24fps, 1s duration, loops: false
- **AI prompt**: "Lottie animation of a camera aperture/shutter — 6 blades opening and closing in a smooth, satisfying click motion. Cobalt blue (#2563EB) blades on transparent background. Professional, minimal, 1 second duration."
- **Alternative**: Can be implemented as a CSS animation of an SVG aperture (6 rotating trapezoids). This avoids a Lottie dependency — better for bundle size.

#### E2. SVG: Animated Connection Line (HowItWorks)
- **What**: An SVG path that draws itself between the 3 steps
- **Where**: HowItWorks section, connecting Step 1 → Step 2 → Step 3
- **Specs**: SVG, 100% width of the 3-col grid, stroke-dasharray animation driven by ScrollTrigger
- **Note**: Pure SVG + CSS — no external asset. Generated in code.

#### E3. Number Counter Animation (Stats)
- **What**: Animated counting numbers (0→60, 0→10, 0→100, $0→$0)
- **Where**: Features stat strip, Hero stats row
- **Specs**: JavaScript animation using `requestAnimationFrame` or a lightweight counter hook
- **Note**: Pure code — no asset. Numbers count up when the element enters the viewport.

---

### F. OG & SOCIAL ASSETS

#### F1. Open Graph Image (Refresh)
- **What**: Updated OG image reflecting the new design direction
- **Where**: `public/og.png`, referenced in metadata
- **Specs**: 1200×630px PNG, dark background (ink-950), featuring:
  - SnapEnvoice logo (left or top)
  - Hero phone mockup (right or center)
  - Tagline "Snap. Price. Send."
  - Cobalt + amber gradient accent
- **AI prompt**: "Professional app marketing open graph image, 1200x630px, dark navy background (#0A0F1E), featuring an iPhone showing an invoicing app dashboard with $47,250 revenue. Left side: 'SnapEnvoice' logo in white, 'Snap. Price. Send.' tagline in amber gradient. Subtle cobalt blue glow around the phone. Professional, premium, minimal. No text other than the logo and tagline."

#### F2. Twitter Card Image
- **Same as F1** — the 1200×630 OG image works for Twitter summary_large_image

---

### G. FAVICON & APP ICON

- **Current**: SVG favicon (`favicon-32.svg`), SVG app icons in `/logos/`
- **Status**: Good — no changes needed unless brand refresh occurs
- **Optional**: Add a 16×16 and 32×32 PNG favicon for legacy browser support

---

## PART 3 — EXPERIENCE ARCHITECTURE

### Scroll Choreography Map

```
SCROLL POSITION    SECTION              MOTION EVENT
─────────────────────────────────────────────────────────
0%                 Hero                 Ambient aurora drift begins
                                        Staggered content reveal cascade
                                        Phone springs in from below
                                        Chips float with parallax

0% → 8%           Hero exit            Content fades + subtle scale-down
                                        Phone parallaxes upward slower

8%                 Marquee              Trade names scroll, icons pulse
                                        Smooth transition from dark → light

12%                Problem              Cards reveal with stagger
                                        List items cascade (80ms each)
                                        "Old way" card has slight shake

18%                HowItWorks           Section pins (desktop)
                                        Horizontal scroll through 3 steps
                                        Connection line draws progressively
                                        Step numbers flip-count

30%                Features             Bento cards stagger-reveal (masonry)
                                        Icon micro-animations trigger
                                        Stat numbers count up

42%                Screenshots          Drag carousel enters
                                        Cards scale-up from 90% → 100%
                                        Parallax between card layers

52%                PaidFaster           Phones sequence in (L→C→R)
                                        Glow intensifies on center phone
                                        Description cards connect to phones

62%                Compare              Rows reveal one-by-one
                                        SnapEnvoice column pulses on each win
                                        Win counter animates

70%                Pricing              Glass cards reveal with depth
                                        Pro card has gradient border animation
                                        Price numbers flip-animate

78%                Personas             Cards stagger-reveal with slight rotation
                                        Background illustrations fade in

85%                FAQ                  Accordion items cascade-reveal
                                        First item auto-expands

92%                FinalCTA             Aurora blobs intensify
                                        CTA elements reveal with drama
                                        Phone/icon visual anchor enters

98%                Footer               Simple fade-in, clean close
```

### Performance Budget

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.0s | Priority hero image, self-hosted fonts, no render-blocking |
| INP | < 150ms | Compositor-only animations, passive scroll listeners |
| CLS | < 0.05 | Explicit image dimensions, font-display: swap |
| FCP | < 1.2s | Minimal critical CSS, preloaded hero assets |
| JS bundle | < 200KB gzip | Tree-shake GSAP (only ScrollTrigger), code-split Framer Motion |
| Total page weight | < 1.5MB | WebP screenshots, SVG icons, no video autoplay |

### Accessibility Commitments

- `prefers-reduced-motion: reduce` → all animations collapse to instant or gentle fade
- All scroll-driven animations have fallback static states
- Keyboard navigation works through all interactive elements
- ARIA labels on all buttons and interactive elements
- Color contrast ratio ≥ 4.5:1 for all text
- Focus indicators visible on all focusable elements
- No content hidden behind motion-only reveals

### Technology Choices

| Tool | Purpose | Bundle Impact |
|------|---------|---------------|
| **GSAP + ScrollTrigger** | Scroll choreography, pinning, scrub animations | ~28KB gzip (tree-shaken) |
| **Lenis** | Smooth scroll normalization | ~5KB gzip |
| **Framer Motion** (existing) | Component-level animations, gestures, drag | Already in bundle |
| **CSS animations** | Simple loops (aurora, float, marquee, shimmer) | 0KB — already in CSS |
| **IntersectionObserver** | Lazy loading, viewport-triggered counters | Native API — 0KB |

### New File Structure

```
components/
├── Hero.tsx              ← rewritten
├── Nav.tsx               ← rewritten
├── Marquee.tsx           ← enhanced
├── Problem.tsx           ← enhanced
├── HowItWorks.tsx        ← rewritten (horizontal scroll)
├── Features.tsx          ← rewritten (interactive bento)
├── Screenshots.tsx       ← rewritten (drag carousel)
├── PaidFaster.tsx        ← enhanced (scroll sequence)
├── Compare.tsx           ← rewritten (card-based)
├── Pricing.tsx           ← rewritten (dark, glass, toggle)
├── Personas.tsx          ← enhanced
├── FAQ.tsx               ← refined
├── FinalCta.tsx          ← enhanced
├── Footer.tsx            ← refined
├── PhoneShot.tsx         ← keep (solid)
├── Tilt.tsx              ← keep (solid)
├── Reveal.tsx            ← keep + enhance with GSAP option
├── Icons.tsx             ← extend (trade icons)
├── Logo.tsx              ← keep
├── SmoothScroll.tsx      ← NEW (Lenis provider)
├── ScrollProgress.tsx    ← NEW (nav progress bar)
├── NumberCounter.tsx     ← NEW (animated counter)
├── DragCarousel.tsx      ← NEW (reusable drag scroll)
└── GradientBlob.tsx      ← NEW (animated aurora blob)
```

---

## PART 4 — ASSET CHECKLIST

### Assets You Need to Create/Provide

| # | Asset | Priority | Method | Status |
|---|-------|----------|--------|--------|
| 1 | Apple App Store badge SVG | HIGH | Download from Apple | ⬜ Needed |
| 2 | Additional screenshots (4 screens → WebP) | HIGH | Convert from Assets/organized/ | ⬜ Needed |
| 3 | Trade icons (10 SVGs) | MEDIUM | Create in Icons.tsx | ⬜ Will implement in code |
| 4 | Trade background illustrations (4) | LOW | AI-generate with prompts above | ⬜ Optional |
| 5 | Updated OG image | MEDIUM | AI-generate or Figma | ⬜ Needed |
| 6 | Google Play "Coming Soon" badge | LOW | Create in SVG/CSS | ⬜ Optional |
| 7 | Static grain texture PNG | LOW | Export from Figma/Photoshop | ⬜ Optional (CSS works fine) |

### Assets I'll Implement in Code (No External Files Needed)

| # | Asset | Method |
|---|-------|--------|
| 1 | Aurora gradient blobs | CSS radial-gradient + GSAP transform |
| 2 | Animated connection SVG line | SVG stroke-dasharray + ScrollTrigger |
| 3 | Number counter animation | React hook + requestAnimationFrame |
| 4 | Dot grid backgrounds | CSS radial-gradient (existing, tuned) |
| 5 | Mesh gradient (pricing bg) | CSS layered radial-gradients |
| 6 | Glass card effects | CSS backdrop-filter (existing, enhanced) |
| 7 | Phone glow layers | CSS radial-gradient (existing, enhanced) |
| 8 | Scroll progress bar | CSS width + JS scroll listener |
| 9 | Camera shutter animation | CSS keyframe on SVG paths |

---

## PART 5 — IMPLEMENTATION PRIORITY

### Phase 1 — Foundation (Tasks 2-4)
Install dependencies, upgrade design tokens, build scroll infrastructure.

### Phase 2 — Hero + Nav (Tasks 5-6)
The first impression. Cinematic hero, premium nav. These set the tone.

### Phase 3 — Core Sections (Tasks 7-9)
Problem, HowItWorks, Features, Screenshots, PaidFaster, Compare — the storytelling body.

### Phase 4 — Conversion Sections (Task 10)
Pricing, Personas, FAQ, FinalCTA, Footer — the conversion funnel.

### Phase 5 — Polish (Task 11)
Performance, accessibility, responsive QA, reduced-motion, lazy loading.

---

*This document is the creative brief. Implementation begins after your review of the asset needs above. The code changes will preserve all existing content, brand identity, and SEO — we're transforming the experience, not the message.*
