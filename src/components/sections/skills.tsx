"use client";

import { useEffect, useRef, useState } from "react";

interface SkillItem {
  name: string;
  isCore?: boolean;
}

interface SkillCategory {
  title: string;
  description: string;
  badge: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  skills: SkillItem[];
}

const CORE_STACK = [
  { name: "JavaScript", role: "The Language of the Web" },
  { name: "TypeScript", role: "Type Safety & Scale" },
  { name: "React.js", role: "Component Architecture" },
  { name: "Next.js", role: "SSR & Full Stack" },
  { name: "Node.js", role: "Backend Runtime" },
  { name: "Express.js", role: "REST APIs" },
  { name: "Tailwind CSS", role: "Design Systems" },
  { name: "MongoDB", role: "NoSQL Database" },
  { name: "PostgreSQL", role: "Relational Database" },
  { name: "Docker", role: "Containerization" },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    badge: "Primary Focus",
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
    skills: [
      { name: "React.js", isCore: true },
      { name: "Next.js", isCore: true },
      { name: "TypeScript", isCore: true },
      { name: "JavaScript (ES6+)", isCore: true },
      { name: "Tailwind CSS", isCore: true },
      { name: "Redux Toolkit" },
      { name: "React Router" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Responsive Design" },
      { name: "SEO" },
      { name: "Web Accessibility (a11y)" },
    ],
  },
  {
    title: "Backend Engineering",
    description: "Developing robust APIs, authentication protocols, and real-time services.",
    badge: "Server & APIs",
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
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    skills: [
      { name: "Node.js", isCore: true },
      { name: "Express.js", isCore: true },
      { name: "REST APIs", isCore: true },
      { name: "JWT Authentication", isCore: true },
      { name: "Authorization (RBAC)" },
      { name: "HTTP-only Cookies" },
      { name: "WebSockets" },
      { name: "Socket.IO" },
    ],
  },
  {
    title: "Database & Storage",
    description: "Data modeling, indexing strategies, and optimized querying.",
    badge: "Persistence",
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
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    skills: [
      { name: "MongoDB", isCore: true },
      { name: "Mongoose", isCore: true },
      { name: "PostgreSQL", isCore: true },
      { name: "SQL", isCore: true },
      { name: "Database Indexing" },
      { name: "Aggregation Framework" },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "Architecture & Systems",
    description: "Designing maintainable patterns, decoupled modules, and scalable solutions.",
    badge: "System Design",
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
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    skills: [
      { name: "Full Stack Development", isCore: true },
      { name: "Micro Frontends", isCore: true },
      { name: "Server-Side Rendering (SSR)" },
      { name: "React Server Components" },
      { name: "API Architecture" },
      { name: "State Management" },
      { name: "Scalable Application Architecture" },
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Containerization, automated build workflows, and deployment infrastructure.",
    badge: "Delivery",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    skills: [
      { name: "Docker", isCore: true },
      { name: "Docker Compose", isCore: true },
      { name: "Git", isCore: true },
      { name: "GitHub" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "CI/CD Pipelines" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
  {
    title: "Integrations & Services",
    description: "Third-party APIs, payment gateways, media management, and CMS integration.",
    badge: "Ecosystem",
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
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
        <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
        <circle cx="8" cy="12" r="2" />
        <path d="m21 12-4-3v6Z" />
      </svg>
    ),
    skills: [
      { name: "Razorpay", isCore: true },
      { name: "Cashfree", isCore: true },
      { name: "Cloudinary" },
      { name: "Strapi" },
      { name: "Brevo" },
    ],
  },
];

export function SkillsSection() {
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
        threshold: 0.1,
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
      id="skills"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="skills-heading"
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
            02 // Skills & Tech Stack
          </div>
          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Technologies I use to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              build production systems
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            A specialized full-stack toolkit focused on modern TypeScript architectures,
            responsive frontend engineering, resilient APIs, and reliable cloud deployments.
          </p>
        </div>

        {/* Core Stack Highlight Bar */}
        <div
          className={`mt-12 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs transition-all duration-700 delay-150 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
              </span>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">
                Primary Core Stack
              </h3>
            </div>
            <span className="font-mono text-xs text-foreground-muted">
              Full Stack Focus
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
            {CORE_STACK.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-3.5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-hover hover:shadow-md hover:shadow-accent/10 active:scale-95"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60 transition-all duration-200 group-hover:scale-125 group-hover:bg-accent" />
                </div>
                <span className="mt-1 text-[11px] text-foreground-muted">
                  {item.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const delayClass =
              index === 0
                ? "delay-200"
                : index === 1
                ? "delay-250"
                : index === 2
                ? "delay-300"
                : index === 3
                ? "delay-350"
                : index === 4
                ? "delay-400"
                : "delay-450";

            return (
              <div
                key={category.title}
                className={`group/card flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-hover hover:shadow-md ${delayClass} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-accent transition-transform duration-300 group-hover/card:scale-110 group-hover/card:border-accent/40">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border/80 bg-background-secondary/60 px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground-secondary transition-colors group-hover/card:border-accent/30 group-hover/card:text-accent">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-foreground transition-colors group-hover/card:text-accent">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] active:scale-95 ${
                          skill.isCore
                            ? "border-accent/30 bg-accent-subtle/50 text-foreground font-semibold hover:border-accent hover:bg-accent-subtle hover:shadow-xs"
                            : "border-border bg-background text-foreground-secondary hover:border-accent/40 hover:bg-surface-hover hover:text-foreground"
                        }`}
                      >
                        {skill.isCore && (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-foreground-muted">
                  <span>{category.skills.length} skills</span>
                  <span className="text-accent/80">Production tested</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
