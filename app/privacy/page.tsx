import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SnapEnvoice privacy policy: your invoices, clients, and photos stay on your device. No accounts, no analytics.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "August 8, 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 pb-24 pt-32 text-ink-200">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-white">
        SnapEnvoice Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink-400">Last updated: {UPDATED}</p>

      <section className="mt-10 space-y-8 leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-bold text-white">The short version</h2>
          <p className="mt-2">
            Your invoice data never leaves your device. Everything you create in the app —
            invoices, estimates, clients, photos, signatures — stays on your device. We have no
            accounts and no analytics. The app&apos;s only network activity is subscription
            validation and update checks, described below — neither involves your business data.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">What we collect</h2>
          <p className="mt-2">
            No business data. SnapEnvoice has no analytics SDK, no crash-reporting SDK, and no
            advertising SDK. Your invoices, clients, photos, and signatures are never transmitted
            to us or anyone else. The limited technical data involved in payments and app updates
            is described in the sections below.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">What stays on your device</h2>
          <p className="mt-2">
            Invoices, estimates, line items, client records (including any contacts you import),
            job photos, signatures, tax settings, and your business profile. This data lives in the
            app&apos;s private storage and is deleted when you delete the app (unless you exported a
            backup first).
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Device permissions and why</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-white">Camera / photo library</strong> — to attach job photos
              to invoices. Photos are stored on your device only.
            </li>
            <li>
              <strong className="text-white">Contacts (optional)</strong> — to import a client&apos;s
              name, phone, or email when you choose to. Contact data never leaves the device.
            </li>
            <li>
              <strong className="text-white">Notifications (optional)</strong> — to deliver
              payment-reminder notifications you schedule. Scheduled locally; no push server.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Sharing</h2>
          <p className="mt-2">
            The only time data leaves your device is when you share it: sending a PDF invoice,
            exporting a CSV, or exporting a backup file. Where it goes then (WhatsApp, email, your
            files) is governed by the app you share it to.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Backups</h2>
          <p className="mt-2">
            Backup files you export are unencrypted JSON containing your business data. Store them
            somewhere you trust; anyone with the file can read it.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Payments</h2>
          <p className="mt-2">
            Pro subscription purchases are processed by the Apple App Store or Google Play — we
            never see your card details. The app uses{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              className="text-cobalt-400 underline underline-offset-2 transition-colors hover:text-cobalt-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-400"
              rel="noopener noreferrer"
            >
              RevenueCat
            </a>{" "}
            to validate subscriptions. RevenueCat receives an anonymous, app-generated identifier
            and your purchase history — no name, no email, and none of your invoice data. See the
            stores&apos; own privacy policies for how they handle payment data.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">App updates</h2>
          <p className="mt-2">
            At launch the app checks Expo&apos;s update service (EAS Update) for bug-fix updates.
            This transmits standard request metadata (such as IP address and app version) — no
            business data.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Children</h2>
          <p className="mt-2">
            SnapEnvoice is a business tool and is not directed at children under 13.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Your rights (GDPR / CCPA)</h2>
          <p className="mt-2">
            Because we hold no data about you, requests for access, deletion, or portability are
            satisfied on-device: your data is already exclusively in your possession. Deleting the
            app deletes everything.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Changes &amp; contact</h2>
          <p className="mt-2">
            Material changes will be announced in the app&apos;s update notes and on this page.
            Questions:{" "}
            <a
              href="mailto:snapenvoice@gmail.com"
              className="text-cobalt-400 underline underline-offset-2 transition-colors hover:text-cobalt-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-400"
            >
              snapenvoice@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
