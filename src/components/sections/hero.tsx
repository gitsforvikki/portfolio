/** Reusable status indicator dot with a gentle pulse ring. */
function StatusDot() {
  return (
    <span className="relative mr-2 flex h-2.5 w-2.5" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-[2000ms]" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>
  );
}

/** Subtle grid pattern for visual depth. */
function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade from center-top */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl dark:bg-accent/8" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 pt-16 sm:px-8"
      aria-label="Introduction"
    >
      <GridBackground />

      <div className="relative z-10 mx-auto w-full max-w-3xl py-20 sm:py-28 lg:py-32">
        {/* Availability Badge */}
        <div className="mb-8 flex justify-center sm:justify-start animate-fade-in-down">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-foreground-secondary shadow-sm sm:text-sm">
            <StatusDot />
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-left sm:text-5xl lg:text-6xl animate-fade-in-up">
          Hi, I&apos;m{" "}
          <span className="text-accent">Vikash</span>
          <br />
          <span className="text-foreground-secondary">
            Software Developer
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-foreground-secondary sm:mx-0 sm:text-left sm:text-lg sm:leading-relaxed animate-fade-in-up delay-200">
          I build reliable, scalable software with clean architecture
          and thoughtful design. Focused on creating solutions that are
          performant, maintainable, and genuinely useful.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start animate-fade-in-up delay-400">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-7 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-200 hover:bg-accent-hover hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in Touch
          </a>

          {/* Secondary CTA */}
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-surface px-7 text-sm font-semibold text-foreground transition-all duration-200 hover:border-border-hover hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Projects
          </a>
        </div>

        {/* Tech Hint Row */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:items-center animate-fade-in delay-600">
          <span className="text-xs font-medium uppercase tracking-widest text-foreground-muted">
            Tech I work with
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-surface px-3 py-1 font-mono text-xs text-foreground-secondary transition-colors hover:border-border-hover hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-widest text-foreground-muted">
            Scroll
          </span>
          <svg
            className="h-4 w-4 animate-bounce text-foreground-muted"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
