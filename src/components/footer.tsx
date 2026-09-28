"use client";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/gitsforvikki",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
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
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/vikash-developer/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
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
    ),
  },
  {
    name: "Email",
    href: "mailto:vk6484412@gmail.com",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-border bg-background pt-16 pb-12 sm:pt-20 sm:pb-16"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand & Narrative */}
          <div className="space-y-4 md:col-span-5">
            <a
              href="#"
              className="inline-block text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
              aria-label="Vikash — Go to top"
            >
              Vikash<span className="text-accent">.</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-secondary">
              Full Stack Developer specializing in responsive interfaces, scalable backend systems,
              and maintainable software architectures.
            </p>

            {/* Status Indicator */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs font-medium text-foreground-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to new opportunities
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3 md:col-span-4 md:col-start-7">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground-secondary transition-colors duration-150 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="space-y-3 md:col-span-2 md:col-start-11">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2.5 text-sm text-foreground-secondary transition-colors duration-150 hover:text-accent"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-surface text-foreground-secondary transition-colors group-hover:border-accent/40 group-hover:bg-surface-hover group-hover:text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="mt-14 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-foreground-muted">
              © {new Date().getFullYear()} Vikash. Engineered with Next.js, TypeScript & Tailwind CSS.
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              type="button"
              className="group inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground-secondary transition-all duration-200 hover:border-border-hover hover:bg-surface-hover hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
