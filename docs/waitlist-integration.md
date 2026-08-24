# Waitlist integration

The waitlist backend is **pluggable**. `lib/waitlist.ts` picks a backend based on
which environment variables are set. First match wins:

1. **Supabase** — `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`
2. **Webhook** — `WAITLIST_WEBHOOK_URL` (GetWaitlist, Zapier, Make, n8n…)
3. **Local JSON** — nothing set → `data/waitlist.local.json` (dev only)

> ⚠️ The local JSON store does **not** persist on Vercel/serverless. Use it only
> for local development. Pick option 1 or 2 for production.

---

## Option A — Supabase (recommended for a DIY backend)

1. Create a project at [supabase.com](https://supabase.com) (free tier is plenty
   — a waitlist row is ~100 bytes; 500 MB holds millions).
2. In the SQL editor, create the table:

   ```sql
   create table waitlist (
     id uuid primary key default gen_random_uuid(),
     email text unique not null,
     trade text,
     platform text,
     created_at timestamptz default now()
   );
   ```

3. Project Settings → API → copy the **Project URL** and the **service_role**
   key (server-side only — never expose it to the browser).
4. Set in `.env.local` (and in Vercel project env vars):

   ```
   SUPABASE_URL=https://xxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJ...
   ```

The count endpoint uses Supabase's exact-count header, so the scarcity badge
reflects the true number of rows. Duplicate emails are ignored gracefully (the
`email` unique constraint + `resolution=ignore-duplicates`).

---

## Option B — A dedicated waitlist SaaS (GetWaitlist)

If you'd rather not run any backend, use [GetWaitlist](https://getwaitlist.com)
or similar — they handle storage, the counter, referral loops, and emails.

Two ways to connect:

- **Simplest:** replace `WaitlistForm.tsx`'s submit with their embed/widget, or
  point the form at their API and delete `lib/waitlist.ts`.
- **Keep our UI:** set `WAITLIST_WEBHOOK_URL` to a webhook they (or Zapier)
  expose; each signup is POSTed as `{ email, trade, platform, ts }`. Note the
  live counter then reads `0` from our API — either show the SaaS's own counter
  or keep Supabase purely for the count.

---

## Option C — Confirmation emails (Resend)

To send a welcome/confirmation email on signup:

1. Create an API key at [resend.com](https://resend.com) and verify your domain.
2. Set `RESEND_API_KEY` and `RESEND_FROM` in env.
3. In `lib/waitlist.ts → addSignup()`, after a successful, non-duplicate insert,
   call Resend's `/emails` endpoint. A ready-to-paste snippet:

   ```ts
   await fetch("https://api.resend.com/emails", {
     method: "POST",
     headers: {
       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       from: process.env.RESEND_FROM,
       to: email,
       subject: "You're on the SnapEnvoice list 🎉",
       html: "<p>Snap. Price. Send. We'll email you the moment we launch — and your 3 free months of Pro are reserved.</p>",
     }),
   });
   ```

---

## Exporting your list

- **Supabase:** Table editor → `waitlist` → Export CSV. The first 500 rows by
  `created_at` are your free-Pro cohort.
- **Local dev:** `data/waitlist.local.json`.
