"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/content";
import { Icon } from "./Icons";

const MOBILE_MENU_ID = "nav-mobile-menu";

/**
 * Premium floating island nav with progressive glass backdrop,
 * active section highlighting, and spring-physics mobile drawer.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Progressive glass on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Escape closes the mobile sheet and returns focus to the toggle */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav
        className={`mx-auto flex h-14 max-w-4xl items-center justify-between rounded-full border px-3 pl-5 transition-all duration-600 ease-premium ${
          scrolled
            ? "border-white/10 bg-ink-950/80 shadow-raised backdrop-blur-2xl"
            : "border-white/5 bg-white/[0.03] backdrop-blur-xl"
        }`}
      >
        <a
          href="#top"
          aria-label="SnapEnvoice home"
          className="inline-flex min-h-11 shrink-0 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        >
          <Logo invert priority />
        </a>

        {/* Desktop nav links with active indicator */}
        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((l) => {
            const sectionId = l.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                  isActive
                    ? "text-white"
                    : "text-ink-400 hover:text-ink-200"
                }`}
              >
                {l.label}
                {/* Active dot indicator */}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-500 ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#get-the-app"
            className="group hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:inline-flex"
          >
            <span className="btn-primary min-h-11 gap-2 py-2 pl-5 pr-1.5 text-sm">
              Get the app
              <span className="btn-orb">
                <Icon.arrow width={14} />
              </span>
            </span>
          </a>

          {/* Hamburger → X morph */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls={MOBILE_MENU_ID}
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-all duration-500 ease-premium ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] bg-current transition-all duration-500 ease-premium ${
                open ? "w-5 -rotate-45" : "w-3.5 translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id={MOBILE_MENU_ID}
        aria-hidden={!open}
        className={`mx-auto mt-2 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ink-950/95 backdrop-blur-2xl transition-all duration-500 ease-premium md:hidden ${
          open
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 p-4">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              tabIndex={open ? undefined : -1}
              style={{ transitionDelay: open ? `${60 + i * 50}ms` : "0ms" }}
              className={`flex min-h-11 items-center rounded-2xl px-4 py-3 text-base font-medium text-ink-200 transition-all duration-500 ease-premium hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#get-the-app"
            onClick={closeMenu}
            tabIndex={open ? undefined : -1}
            className="btn-primary group mt-3 min-h-11 gap-2 py-3 text-sm"
          >
            Get the app
            <span className="btn-orb">
              <Icon.arrow width={14} />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
