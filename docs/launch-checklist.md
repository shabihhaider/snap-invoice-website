# Launch checklist

Work top to bottom. Don't drive paid or social traffic until the ✅ block is done.

## Content
- [ ] Replace placeholder app screens with real screenshots (`content-and-assets.md §2`)
- [ ] Add the 30-second demo video (`VIDEO_ID` in `VideoSection.tsx`)
- [ ] Proofread all copy in `lib/content.ts` (Field Pro voice)
- [ ] Confirm the offer number is right everywhere (`NEXT_PUBLIC_WAITLIST_CAP`)
- [ ] Set the real `NEXT_PUBLIC_LAUNCH_DATE`

## Backend
- [ ] Choose a waitlist backend (Supabase or SaaS) — `waitlist-integration.md`
- [ ] Set env vars in Vercel (URL + service role key, or webhook URL)
- [ ] Wire the confirmation email (Resend) — optional but recommended
- [ ] Submit a test signup on the **production** URL; confirm it's stored
- [ ] Confirm the spots counter shows the real number and drops on signup

## SEO & sharing
- [ ] Add `public/og.png` (1200×630) + reference in `layout.tsx`
- [ ] Update `SITE_URL` in `layout.tsx` to the final domain
- [ ] Add `public/favicon-32.svg` (done) and check the browser tab
- [ ] Verify the JSON-LD (FAQ + SoftwareApplication) with Google's Rich Results test

## Analytics & pixels (add before traffic)
- [ ] Meta Pixel (for IG/FB retargeting) — the app's `marketing-plan.md §5`
- [ ] TikTok Pixel and/or Google tag
- [ ] A privacy-friendly analytics tool (Plausible / GA4) for traffic
- [ ] Fire a "Lead" / conversion event on successful signup

> Add pixels in `app/layout.tsx` via `next/script` with
> `strategy="afterInteractive"`. Keep them out of the app itself — the app's
> "no data collected" promise is a separate, protected asset.

## Performance & QA
- [ ] `npm run build` passes with no errors
- [ ] Test on a real phone (most social traffic is mobile)
- [ ] Test the form: valid, invalid, and duplicate email
- [ ] Check `prefers-reduced-motion` (animations calm down)
- [ ] Lighthouse pass (aim ≥90 perf / 100 a11y / 100 SEO)
- [ ] Check the shared-link preview on WhatsApp, iMessage, X, FB

## Go live
- [ ] Custom domain connected and HTTPS green
- [ ] Create the social accounts (TikTok, IG, YouTube) — link them in `Footer.tsx`
- [ ] Soft-share with beta testers first; fix anything they hit
- [ ] Then open the taps: short-video content + community posts (`marketing-plan.md`)
