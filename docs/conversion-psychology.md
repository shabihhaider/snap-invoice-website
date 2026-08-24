# Conversion psychology — every trigger, and why

This page documents the persuasion techniques built into the page, where each
one lives, and the rule we follow: **every trigger is honest.** Fake scarcity and
fabricated social proof convert once and burn trust forever — exactly the
opposite of SnapEnvoice's "on your side" brand.

## The triggers in play

| # | Trigger | Where | How it's implemented |
|---|---|---|---|
| 1 | **Scarcity** | `SpotsBadge`, Hero, Pricing, Final CTA | "N of 500 free spots left" — a **real** count from the backend, not a random number. As people join, it genuinely drops. |
| 2 | **Loss aversion** | Hero, Pricing | Framing the offer as something to *lose* ("when they're gone, they're gone") rather than merely gain. |
| 3 | **Anchoring** | Pricing, Compare | Pro's real $89.99/yr value is stated, then given free — the price anchors the value. Competitor weekly prices ($8.99/wk ≈ $460/yr) anchor us as the honest choice. |
| 4 | **Specificity** | Hero, Video, mockups | "Under 60 seconds", "0:58", "INV-0027", "$220.00". Concrete numbers read as true; round claims read as marketing. |
| 5 | **Social proof (belonging)** | `Marquee`, `Personas` | The trades marquee and persona cards say "people like you already use this." Framed as target users, **not** fake 5-star reviews. |
| 6 | **Reciprocity** | Offer + generous free tier | Give first (3 free months, a real free tier) and asking for an email feels fair. |
| 7 | **Authority / trust** | Trust chips, Compare, Footer | "No account", "works offline", "no data collected" — trust *is* the differentiator, so it's stated plainly and repeatedly. |
| 8 | **Commitment (micro-yes)** | `WaitlistForm` | A single email field is a tiny commitment. The platform toggle (iOS/Android) is an easy second micro-yes that increases investment. |
| 9 | **Urgency** | `Countdown` | A live launch countdown adds time pressure alongside the quantity pressure of the spots badge. |
| 10 | **Curiosity / open loop** | Video ("58-second driveway invoice"), Hero | Poses the scene and makes you want to see it resolve. |
| 11 | **Identity** | "Built for people who work with their hands" | Speaks to who the user *is*, not just what they get — the strongest kind of fit. |
| 12 | **Contrast / problem-agitation** | `Problem` | The messy "old way" (struck through, red) next to the clean "SnapEnvoice way" makes the value visceral. |
| 13 | **Friction reduction** | Whole funnel | No signup wall, one primary CTA, sticky nav CTA, three form entry points (hero, pricing, final). |
| 14 | **Peak-end** | `FinalCta` | The last thing before the footer restates the offer + countdown, so the visit ends on the strongest note. |

## Rules we keep (so triggers stay ethical)

1. **The counter is real.** It reads the actual signup count. Do not seed it with
   a fake starting number. Genuine scarcity is honest scarcity.
2. **No fabricated testimonials.** Persona cards are labelled as composite
   use-cases from research, not quotes from named real customers.
3. **Honest pricing.** We call out weekly-billing traps *because* we don't use
   them. If that ever changes, this copy has to change too.
4. **The offer is genuinely limited.** If you promise 500 free-Pro spots, honour
   exactly 500. `NEXT_PUBLIC_WAITLIST_CAP` controls the number everywhere.

## Want more lift?

- **Referral loop** ("give a month, get a month") roughly doubles waitlist growth
  per ad dollar. It needs signup attribution — pair with a waitlist SaaS or add a
  referral code column in Supabase. Parked for post-launch (see the app's
  `marketing-plan.md §6`).
- **A/B the hero headline.** Vercel supports edge/middleware experiments; test
  "Invoice a job before you leave the driveway" vs "Get paid before you pack up."
