"use client";

import { useEffect, useRef, useState } from "react";

interface HighlightItem {
  label: string;
  value: string;
  description: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    label: "Experience",
    value: "1.5+ Years",
    description: "Building production web apps and distributed systems",
  },
  {
    label: "Code Standard",
    value: "Clean & Typed",
    description: "Strict TypeScript, modular patterns & robust tests",
  },
  {
    label: "Architecture",
    value: "Full-Stack",
    description: "End-to-end craft from intuitive UI to reliable APIs",
  },
  {
    label: "Focus",
    value: "Performance",
    description: "Sub-second responsiveness & accessible interfaces",
  },
];

interface PrincipleItem {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Architecture Before Code",
    description:
      "Design clear data contracts, modular boundaries, and decoupled layers before writing implementation details.",
    icon: (props) => (
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Performance by Default",
    description:
      "Every millisecond matters. Prioritize efficient rendering, optimized asset delivery, and lightweight runtime overhead.",
    icon: (props) => (
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
        <path d="m13 2-2 10h6l-4 10 2-10h-6l4-10Z" />
      </svg>
    ),
  },
  {
    title: "Type Safety & Reliability",
    description:
      "Eliminate runtime surprises with strict static typing, robust automated validation, and resilient error recovery.",
    icon: (props) => (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div
          className={`max-w-2xl transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs font-medium text-accent shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            01 // About Me
          </div>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Engineering scalable systems with{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              craft & precision
            </span>
            .
          </h2>
          {/* <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            A developer dedicated to building durable software architecture,
            fluid user experiences, and high-performance applications designed
            to stand the test of scale.
          </p> */}
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Narrative & Stats */}
          <div
            className={`space-y-8 lg:col-span-7 transition-all duration-700 delay-150 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
          >
            <div className="space-y-4 text-base leading-relaxed text-foreground-secondary">
              <p>
                I’m a Full Stack Developer focused on building scalable, responsive, and
                user-friendly web applications with modern JavaScript technologies.
              </p>
              <p>
                My core expertise lies in{" "}
                <span className="font-medium text-foreground underline decoration-1 underline-offset-4 decoration-blue-500/40 dark:decoration-blue-400/40 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors">
                  React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL
                </span>
                , with hands-on experience building applications from the ground up — from designing
                responsive interfaces and integrating APIs to implementing backend business logic,{" "}
                <span className="font-medium text-foreground underline decoration-1 underline-offset-4 decoration-blue-500/40 dark:decoration-blue-400/40 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors">
                  authentication, databases, payments, and production deployments
                </span>
                .
              </p>
              <p>
                I enjoy solving real-world engineering problems and building applications that are
                not only visually polished but also maintainable, performant, and scalable. My
                experience includes SEO optimization, REST APIs, real-time communication, state
                management, authentication, payment integrations,{" "}
                <span className="font-medium text-foreground underline decoration-1 underline-offset-4 decoration-blue-500/40 dark:decoration-blue-400/40 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors">
                  Dockerized applications, and production deployments
                </span>
                .
              </p>
              <p>
                I also work with modern engineering practices and architectures including{" "}
                <span className="font-medium text-foreground underline decoration-1 underline-offset-4 decoration-blue-500/40 dark:decoration-blue-400/40 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors">
                  Micro Frontends, Docker, Kubernetes, and CI/CD pipelines with Jenkins
                </span>
                , giving me a broader understanding of how applications are developed,
                containerized, deployed, and scaled in production environments.
              </p>
              <p>
                I’m continuously exploring better ways to{" "}
                <span className="font-medium text-foreground underline decoration-1 underline-offset-4 decoration-blue-500/40 dark:decoration-blue-400/40 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors">
                  design systems
                </span>
                , improve developer experience, and turn ideas into reliable software.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface p-4 sm:p-5 transition-all duration-200 hover:border-border-hover hover:bg-surface-hover hover:shadow-xs"
                >
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.label}
                  </span>
                  <div className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {item.value}
                  </div>
                  <p className="mt-1 text-xs text-foreground-muted sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Principles Card */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xs">
              {/* Card Window Bar */}
              <div className="flex items-center justify-between border-b border-border bg-background-secondary/60 px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80 dark:bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/60" />
                </div>
                <span className="font-mono text-xs text-foreground-muted">principles.ts</span>
                <div className="w-10" aria-hidden="true" />
              </div>

              {/* Card Body */}
              <div className="space-y-6 p-6 sm:p-7">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground-secondary">
                    Engineering Principles
                  </h3>
                </div>

                <div className="space-y-5">
                  {PRINCIPLES.map((principle) => {
                    const Icon = principle.icon;
                    return (
                      <div key={principle.title} className="flex gap-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {principle.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-foreground-secondary sm:text-sm">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Focus Pill / Footer within Card */}
                <div className="rounded-xl border border-border/70 bg-background-secondary/50 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <span className="text-accent">⚡</span> Current Focus
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-secondary">
                    Distributed web architecture, full-stack TypeScript, high-performance rendering,
                    and developer tooling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
