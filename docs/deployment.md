# Deployment (Vercel)

Vercel is the natural home for a Next.js app — free tier, custom domain, global
CDN, serverless API routes.

## 1. Push to Git

```bash
cd website
git init          # if this folder isn't already a repo
git add .
git commit -m "SnapEnvoice waitlist site"
# create a repo on GitHub and:
git remote add origin git@github.com:you/snapenvoice-website.git
git push -u origin main
```

> The parent `snap-invoice` app already has its own git repo. Keep the website as
> its **own** repo (or a separate Vercel "root directory") so the two deploy
> independently.

## 2. Import into Vercel

1. [vercel.com/new](https://vercel.com/new) → import the repo.
2. Framework preset: **Next.js** (auto-detected).
3. If the website isn't at the repo root, set **Root Directory** to `website`.
4. Add environment variables (Settings → Environment Variables):
   - `NEXT_PUBLIC_WAITLIST_CAP` = `500`
   - `NEXT_PUBLIC_LAUNCH_DATE` = your launch datetime (ISO)
   - `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (or `WAITLIST_WEBHOOK_URL`)
   - `RESEND_API_KEY` + `RESEND_FROM` (optional)
5. Deploy.

## 3. Custom domain

- Buy `snapenvoice.app` (Namecheap/Cloudflare, ~$10–20/yr).
- Vercel → Project → Settings → Domains → add it, follow the DNS instructions.
- Update `SITE_URL` in `app/layout.tsx` to the final domain (used for OG tags).

## 4. Before you drive traffic

- Add **Meta Pixel** and **Google/TikTok** tags (see `launch-checklist.md`) so
  your social ads can retarget visitors who don't sign up.
- Create an **Open Graph image** (`public/og.png`, 1200×630) and reference it in
  `app/layout.tsx` `openGraph.images` — it's what shows when the link is shared.
- Test the form end-to-end on the production URL (serverless ≠ local).

## Costs

- Vercel Hobby: **$0**
- Supabase free tier: **$0** (a waitlist never approaches the limits)
- Domain: **~$10–20/yr**

So: essentially just the domain until launch.
