"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const NAV_ITEMS = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Skills", href: "#skills" },
  { number: "03", label: "Experience", href: "#experience" },
  { number: "04", label: "Projects", href: "#projects" },
  { number: "05", label: "Education", href: "#education" },
  { number: "06", label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Playpen Sans Gradient Logo */}
        <a
          href="#"
          className="group flex items-center transition-transform duration-200 active:scale-95"
          aria-label="Vikash — Go to top"
        >
          <span className="font-playpen text-2xl sm:text-[28px] font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_2px_10px_rgba(99,102,241,0.3)]">
            Vikash
            <span className="inline-block text-violet-500 dark:text-purple-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110">
              .
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-3 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-1 left-3 right-3 h-[2px] scale-x-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
          <div className="ml-3 border-l border-border pl-3">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground-secondary transition-all duration-200 hover:border-accent/40 hover:text-foreground active:scale-95"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            type="button"
          >
            {/* Animated Hamburger Icon */}
            <div className="relative flex h-4 w-4.5 flex-col justify-between" aria-hidden="true">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          className="border-t border-border bg-background/95 backdrop-blur-2xl md:hidden shadow-2xl animate-fade-in"
          aria-label="Mobile navigation"
        >
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-5 py-6 space-y-6">
            {/* Current Status Pill */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-3.5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-medium text-foreground">
                  Available for opportunities
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase text-accent font-semibold">
                Online
              </span>
            </div>

            {/* Navigation Links Grid */}
            <div className="space-y-1.5">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground-muted mb-2 px-1">
                Navigation
              </span>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between rounded-xl border border-border/70 bg-surface/70 px-4 py-3 text-sm font-semibold text-foreground transition-all duration-200 active:scale-98 hover:border-accent/40 hover:bg-surface hover:text-accent"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {item.number}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <svg
                    className="h-4 w-4 text-foreground-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Social Links & Direct Action in Drawer */}
            <div className="pt-4 border-t border-border/70 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-foreground-muted">Connect with me</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/gitsforvikki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground-secondary transition-colors hover:text-accent hover:border-accent/40"
                    aria-label="GitHub Profile"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/vikash-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground-secondary transition-colors hover:text-accent hover:border-accent/40"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Direct CTA button in Mobile Drawer */}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-xs font-semibold text-white shadow-xs transition-transform active:scale-98"
              >
                <span>Let&apos;s Talk</span>
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
