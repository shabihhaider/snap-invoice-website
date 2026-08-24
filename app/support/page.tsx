import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with SnapEnvoice — the camera-first invoicing app for tradespeople and freelancers.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 text-ink-200">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-white">
        Support
      </h1>
      <p className="mt-2 text-sm text-ink-400">
        We&apos;re here to help you get the most out of SnapEnvoice.
      </p>

      <section className="mt-10 space-y-8 leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-bold text-white">
            Contact us
          </h2>
          <p className="mt-2">
            For any questions, issues, or feedback, email us at{" "}
            <a
              href="mailto:snapenvoice@gmail.com"
              className="text-cobalt-400 underline underline-offset-2 hover:text-cobalt-300"
            >
              snapenvoice@gmail.com
            </a>
            . We typically respond within 24 hours.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">
            Common questions
          </h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="font-semibold text-white">
                How do I create my first invoice?
              </h3>
              <p className="mt-1 text-sm">
                Open the app, tap the &ldquo;+&rdquo; button or &ldquo;Snap
                Job&rdquo; on the home screen, add your client and line items,
                then tap Save. Your invoice is ready to share as a professional
                PDF.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                How do I attach photos to an invoice?
              </h3>
              <p className="mt-1 text-sm">
                While creating an invoice, scroll to the Photos section and tap
                to add before/after photos from your camera or gallery. They
                appear in the PDF automatically.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                How do I restore a backup?
              </h3>
              <p className="mt-1 text-sm">
                Go to Settings &rarr; Data &amp; Backup &rarr; Import Backup,
                then select your backup file. All your invoices, estimates,
                clients, and settings will be restored.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                How do I cancel my Pro subscription?
              </h3>
              <p className="mt-1 text-sm">
                Open your iPhone&apos;s Settings &rarr; tap your name &rarr;
                Subscriptions &rarr; SnapEnvoice &rarr; Cancel Subscription. You
                keep Pro features until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                Is my data safe?
              </h3>
              <p className="mt-1 text-sm">
                Yes. All your data stays on your device — we don&apos;t collect
                or store your invoices, photos, or client information. Use the
                backup feature to save a copy to your Files app.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">
            App information
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <span className="text-ink-400">App:</span>{" "}
              <span className="text-white">SnapEnvoice: Invoice Maker</span>
            </li>
            <li>
              <span className="text-ink-400">Platform:</span> iOS (iPhone)
            </li>
            <li>
              <span className="text-ink-400">Developer:</span> Arham Amjad
            </li>
            <li>
              <span className="text-ink-400">Email:</span>{" "}
              <a
                href="mailto:snapenvoice@gmail.com"
                className="text-cobalt-400 underline underline-offset-2 hover:text-cobalt-300"
              >
                snapenvoice@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
