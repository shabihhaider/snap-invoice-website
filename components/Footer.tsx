import { Logo } from "./Logo";
import { NAV_LINKS, BRAND } from "@/lib/content";
import { AppStoreBadge } from "./AppStoreBadge";

export function Footer() {
  return (
    <footer className="section-padding-sm border-t border-white/[0.06] bg-ink-950 text-ink-400">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo invert />
            <p className="mt-4 text-sm leading-relaxed">
              {BRAND.tagline} The camera-first invoicing app for people who
              work with their hands. Photo proof, offline, no account.
            </p>
            <div className="mt-5">
              <AppStoreBadge className="opacity-70 hover:opacity-100" />
            </div>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink-400">
              <span className="h-2 w-2 rounded-full bg-success-bright" />
              Your invoices stay on your phone &middot; no account required
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                Explore
              </div>
              <ul className="-my-3 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="flex min-h-11 items-center rounded-full transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                Contact
              </div>
              <ul className="-my-3 text-sm">
                <li>
                  <a
                    href="mailto:snapenvoice@gmail.com"
                    className="flex min-h-11 items-center rounded-full transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    Email Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 text-xs sm:flex-row">
          <span>&copy; {new Date().getFullYear()} SnapEnvoice. All rights reserved.</span>
          <div className="-my-3 flex gap-4">
            <a
              href="/support"
              className="inline-flex min-h-11 items-center rounded-full transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Support
            </a>
            <a
              href="/privacy"
              className="inline-flex min-h-11 items-center rounded-full transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="inline-flex min-h-11 items-center rounded-full transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
