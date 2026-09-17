/**
 * Single source of truth for all site copy + data.
 * Everything here is grounded in the SnapEnvoice product docs
 * (business-plan.md, marketing-plan.md, features-overview.md,
 * freemium-model.md, competitor-pricing-2026.md, user-scenarios.md).
 * Voice = "Field Pro": short sentences, verbs first, foreman not bank.
 */

export const BRAND = {
  name: "SnapEnvoice",
  tagline: "Snap. Price. Send.",
  promise: "Invoice with photo proof in under 60 seconds.",
  proAnnual: 89.99,
  proMonthly: 12.99,
};

/** Canonical production origin — imported everywhere a URL is built
 *  (layout metadata, JSON-LD, robots.ts, sitemap.ts) so it only lives here. */
export const SITE_URL = "https://snapenvoice.app";

/**
 * App Store link — feeds every store button on the site.
 * Update with the direct link once Apple review clears.
 */
export const APP_STORE_URL =
  "https://apps.apple.com/app/snapenvoice-invoice-maker/id6797989085";

export const NAV_LINKS = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Why us", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Trades that scroll in the marquee (belonging trigger).
 * The original 10 are the trades named elsewhere on the page (personas,
 * copy). The additions below were researched for fit against the app's
 * "photo proof of work" wedge before being added — not just assumed:
 * movers, property maintenance, pest control, carpet cleaning, roofing and
 * furniture repair all have well-documented before/after-photo practices
 * (insurance claims, deposit disputes, dedicated software features); HVAC,
 * plumbing and electrical are included as their own distinct trade
 * communities (separate from "Handyman") on the strength of general
 * liability-documentation practice, even though the dispute-photo evidence
 * for them is thinner than for the others. Left out as weak/speculative
 * fits: tow operators, tree service, window cleaners, locksmiths.
 */
export const TRADES = [
  "Car Detailing",
  "Landscaping",
  "Lawn Care",
  "Handyman",
  "Pool Service",
  "Painting",
  "Pressure Washing",
  "Cleaning",
  "Junk Removal",
  "Mobile Mechanics",
  "Roofing",
  "Movers",
  "Pest Control",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Property Maintenance",
  "Carpet Cleaning",
  "Furniture Repair",
];

/** The 3-step hero flow. */
export const STEPS = [
  {
    key: "snap",
    n: "01",
    title: "Snap",
    line: "Photograph the job.",
    body: "Before, after, progress — labelled in a tap. The photos you already take become the start of the invoice, not an attachment.",
  },
  {
    key: "price",
    n: "02",
    title: "Price",
    line: "Add your line items.",
    body: "Smart defaults, client autocomplete, tax and discounts done for you. The total lands in big, clean numerals.",
  },
  {
    key: "send",
    n: "03",
    title: "Send",
    line: "Fire off a pro PDF.",
    body: "A professional invoice with your logo and photo proof — sent by WhatsApp, iMessage or email. Fully offline. Under 60 seconds.",
  },
];

/** Feature bento — real v1 features. `flash` = amber (camera/Pro) accent. */
export const FEATURES = [
  {
    icon: "camera",
    title: "Camera-first invoicing",
    body: "Up to 10 photos per job, labelled Before / After / Progress — built into the invoice from the first tap, not bolted on after.",
    flash: true,
    span: "lg",
  },
  {
    icon: "shield",
    title: "Photo proof-of-work",
    body: "Before/after photos embedded right in the PDF. Ends “you missed a spot” and “I never got it.” Disputes over.",
    flash: true,
    span: "md",
  },
  {
    icon: "bolt",
    title: "The 60-second flow",
    body: "Snap → Price → Send. Three steps, smart defaults everywhere. Send it before you leave the driveway.",
    span: "md",
  },
  {
    icon: "wifi-off",
    title: "Works fully offline",
    body: "Basements, rural routes, parking garages — it always works. Your data never leaves your phone in v1.",
    span: "md",
  },
  {
    icon: "user-x",
    title: "No account required",
    body: "Open the app, send an invoice. No email, no password, no verification wall. Zero-friction trust.",
    span: "md",
  },
  {
    icon: "file-check",
    title: "Estimates → invoices",
    body: "Win the job first. Client signs on your phone, then convert the accepted estimate to an invoice in one tap.",
    span: "md",
  },
  {
    icon: "bell",
    title: "Overdue reminders",
    body: "Overdue invoices flag themselves the moment they're late. One tap sends a pre-written, polite reminder — you stay in control, always.",
    span: "md",
  },
  {
    icon: "layers",
    title: "5 PDF templates + CSV",
    body: "Pick a clean, print-safe template, add your logo, export everything to CSV for your tax preparer.",
    span: "md",
  },
];

/**
 * Brand manifesto — the belief behind the product, not a restatement of
 * what it does. Deliberately NOT a feature list or a competitor table:
 * PhotoProof and Features already cover the "what" (camera-first capture,
 * embedded proof, the 60-second flow), and Pricing's own subhead already
 * covers the "how much." This section's only job is the "why" — the one
 * thing nothing else on the page says. Keep it short; if a claim here
 * starts sounding like a feature or a price, it belongs in one of those
 * sections instead, not here.
 */
export const WHY_DIFFERENT = {
  eyebrow: "Why SnapEnvoice",
  heading: "The job isn't done until there's proof.",
  lead: "Every trade we build for already carries a camera — it's the phone in your pocket. We think the invoice should start there, not end with a photo bolted onto a paper form.",
  closing: "So that's the whole bet: build the proof in from the first tap, and nobody has to relitigate the work that got done.",
};

/** Free vs Pro (freemium-model.md). */
export const PLANS = {
  free: {
    name: "Free",
    price: "$0",
    note: "Forever. No card, no account.",
    features: [
      "10 invoices + 10 estimates (lifetime)",
      "Before/after job photos",
      "Professional PDF invoices",
      "Line items, tax & discounts",
      "CSV export + backup",
    ],
    footnote: "Free PDFs carry a small “Created with SnapEnvoice” mark.",
  },
  pro: {
    name: "Pro",
    price: "$89.99",
    cadence: "/year",
    alt: "or $12.99/mo",
    trial: "7 days free, then $89.99/yr on the annual plan",
    note: "Everything in Free, plus:",
    features: [
      "Unlimited invoices & estimates",
      "Brand-free PDFs",
      "Your logo on every PDF",
      "Photos embedded in the PDF",
      "All 5 premium templates",
    ],
    footnote: "7-day free trial on the annual plan. No weekly traps, ever.",
  },
};

/** "Who it's for" — persona cards from user-scenarios.md.
 *  Framed as real target users / use-cases, NOT fabricated reviews. */
export const PERSONAS = [
  {
    name: "Mobile detailers",
    who: "Solo, booked through DMs, works from the truck.",
    win: "“The before/after shots are already my marketing. Now they’re on the invoice too — and the dispute I used to dread never happens.”",
    trade: "Car Detailing",
  },
  {
    name: "Landscaping crews",
    who: "Quote first, invoice after, often with no signal.",
    win: "“I quote in the driveway, the homeowner signs on my phone, and three days later it’s an invoice in one tap. No more Sunday-night billing marathon.”",
    trade: "Landscaping",
  },
  {
    name: "Handymen",
    who: "Not technical. Big buttons, no jargon, no accounts.",
    win: "“QuickBooks made me quit. This didn’t ask for my email and my second invoice took under a minute. The branding footer’s gone once I upgrade.”",
    trade: "Handyman",
  },
  {
    name: "Weekend hustlers",
    who: "Cash flow is everything. Can’t float unpaid work.",
    win: "“The overdue reminder found an invoice I’d completely forgotten. That one notification paid for the app by itself.”",
    trade: "Pressure Washing",
  },
  {
    name: "Roofers",
    who: "Storm season is a blur of estimates, tarps and insurance calls.",
    win: "“Adjusters used to argue with my numbers. Now the invoice has the damage photos built right in — nobody disputes it twice.”",
    trade: "Roofing",
  },
  {
    name: "Moving crews",
    who: "Every job ends with someone asking what happened to the dresser.",
    win: "“I snap the condition of every piece before it goes on the truck. The one time a client called about a scratch, the invoice already had the answer.”",
    trade: "Movers",
  },
  {
    name: "Pest control techs",
    who: "Recurring routes, and customers who want proof the treatment happened.",
    win: "“Before/after shots on every stop mean nobody’s asking ‘did you actually spray?’ anymore. It’s just there on the invoice.”",
    trade: "Pest Control",
  },
  {
    name: "HVAC technicians",
    who: "Diagnoses, replacements, and the occasional ‘that’s not what broke’ pushback.",
    win: "“Photo of the failed part before I swap it, photo of the new one after. Warranty claims stopped being an argument.”",
    trade: "HVAC",
  },
  {
    name: "Plumbers",
    who: "Emergency calls, drywall opened up, and a homeowner who wants to see it.",
    win: "“Showing the leak before I cut anything ends the ‘was that really necessary’ conversation before it starts.”",
    trade: "Plumbing",
  },
  {
    name: "Electricians",
    who: "Panel swaps and code fixes nobody can see once the cover’s back on.",
    win: "“The panel’s closed up in ten minutes, but the invoice still has the wiring shot. That’s what answers inspection questions later.”",
    trade: "Electrical",
  },
  {
    name: "Property maintenance techs",
    who: "Move-in, move-out, and a security deposit riding on what the walls looked like.",
    win: "“Every unit gets photographed before and after now. The deposit disputes that used to eat my week are basically gone.”",
    trade: "Property Maintenance",
  },
  {
    name: "Carpet cleaners",
    who: "Stains that come out fine but customers are sure they won’t.",
    win: "“The before shot is half the sale — they forget how bad it was. The after shot on the invoice closes the argument.”",
    trade: "Carpet Cleaning",
  },
  {
    name: "Furniture & upholstery repair",
    who: "Restoring pieces people are precious about, one panel at a time.",
    win: "“Clients can’t picture what ‘reupholstered’ means until they see their own chair, before and after, on the same invoice.”",
    trade: "Furniture Repair",
  },
];

/** FAQ — straight answers for a live app. */
export const FAQ = [
  {
    q: "Is it free?",
    a: "Yes. The Free tier gives you 10 invoices and 10 estimates for the lifetime of the app — no credit card, no account, no countdown. If you outgrow it, Pro is $12.99/month or $89.99/year, with a 7-day free trial on the annual plan.",
  },
  {
    q: "How do I try Pro free?",
    a: "Start the 7-day free trial on the annual plan — you get everything in Pro, and you can cancel anytime in your App Store settings before the trial ends. If you stay, it's one honest price: $89.99/year.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. Open the app and send an invoice. We don't ask for your email or a password to use it. Your invoices, photos and client details stay on your phone — the only network activity is subscription validation and app updates, and neither touches your business data.",
  },
  {
    q: "Does it work without signal?",
    a: "Completely. SnapEnvoice is offline-first — basements, rural properties, parking garages. Everything works with zero bars, because nothing depends on the cloud.",
  },
  {
    q: "How do photos end up on the invoice?",
    a: "Snap up to 10 job photos and label them Before / After / Progress. They're embedded right in the PDF, so the invoice carries its own proof of work — disputes end before they start.",
  },
  {
    q: "iPhone or Android?",
    a: "iPhone today. Android is on the roadmap — the app is iOS-only for now.",
  },
  {
    q: "Are there weekly-billing traps?",
    a: "Never. Some invoice apps charge $8.99/week — that's over $460 a year if you forget to cancel. Our Pro is one honest price: $12.99/month or $89.99/year, cancel anytime in the store. Trust is the whole point.",
  },
];

export const STATS = [
  { value: "<60s", label: "to snap, price & send an invoice" },
  { value: "$0", label: "to start — no card, no account" },
  { value: "100%", label: "offline. your data stays on your phone" },
  { value: "10", label: "job photos per invoice, labelled" },
];
