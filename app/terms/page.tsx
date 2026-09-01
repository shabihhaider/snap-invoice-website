import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SnapEnvoice terms of service.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "August 8, 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 text-ink-200">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-white">
        SnapEnvoice Terms of Service
      </h1>
      <p className="mt-2 text-sm text-ink-400">Last updated: {UPDATED}</p>

      <section className="mt-10 space-y-8 leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-bold text-white">1. The service</h2>
          <p className="mt-2">
            SnapEnvoice is a mobile app for creating invoices, estimates, and related business
            documents. It runs entirely on your device. By using the app you agree to these terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">
            2. Your content and responsibility
          </h2>
          <p className="mt-2">
            You own everything you create. You are solely responsible for the accuracy and legality
            of documents you generate — including tax rates, amounts, and any legal requirements for
            invoices in your jurisdiction. SnapEnvoice is a document tool, not an accounting, tax,
            or legal service, and its output does not constitute tax or legal advice.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">3. Data and backups</h2>
          <p className="mt-2">
            Your data is stored only on your device. You are responsible for backups. We are not
            liable for data lost through device loss, deletion, failed OS updates, or backup files
            that were not exported.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">4. Subscriptions</h2>
          <p className="mt-2">
            SnapEnvoice Pro is an auto-renewable subscription billed through the Apple App Store or
            Google Play under their terms. Two options are offered: <strong className="text-white">
            $12.99 per month</strong>, or <strong className="text-white">$89.99 per year with a
            7-day free trial</strong> on the annual plan. Prices shown in-app at purchase time
            govern; local prices may vary by region.
          </p>
          <p className="mt-2">
            Payment is charged to your Apple ID (or Google account) at confirmation of purchase —
            or, for the annual plan&apos;s free trial, when the trial ends unless you cancel first.
            Subscriptions renew automatically unless auto-renew is turned off at least 24 hours
            before the end of the current period; the renewal charge is applied within 24 hours
            prior to the end of the current period. You can manage or cancel your subscription in
            your App Store (or Google Play) account settings; access continues until the end of the
            paid period. Any unused portion of a free trial is forfeited when you purchase a
            subscription. Promotional access is granted at our discretion and expires as
            communicated.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">5. Acceptable use</h2>
          <p className="mt-2">
            Don&apos;t use SnapEnvoice to create fraudulent, deceptive, or unlawful documents, and
            don&apos;t attempt to reverse-engineer or redistribute the app outside store terms.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">
            6. Warranty disclaimer &amp; liability
          </h2>
          <p className="mt-2">
            The app is provided &quot;as is&quot; without warranties of any kind. To the maximum
            extent permitted by law, our total liability for any claim is limited to the amount you
            paid us in the 12 months before the claim.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">7. Changes &amp; termination</h2>
          <p className="mt-2">
            We may update these terms; material changes will be announced in update notes. Continued
            use after changes is acceptance. You can stop using the app at any time; deleting it
            removes your data from the device.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">8. Contact</h2>
          <p className="mt-2">
            <a href="mailto:snapenvoice@gmail.com" className="text-cobalt-400 underline">
              snapenvoice@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
