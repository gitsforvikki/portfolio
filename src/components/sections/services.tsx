"use client";

import { useEffect, useRef, useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  technologies: string[];
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  keyDeliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    badge: "UI & Client Architecture",
    description:
      "Crafting accessible, pixel-accurate, and responsive interfaces with modern component architecture, state management, and fluid animations.",
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    keyDeliverables: [
      "Responsive web applications across all device breakpoints",
      "Typesafe React component libraries & design systems",
      "Accessible (a11y) and SEO-optimized client code",
    ],
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
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
        <path d="M2 8h20" />
      </svg>
    ),
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Development",
    badge: "End-to-End Solutions",
    description:
      "Building complete, production-grade applications connecting performant frontends to scalable server environments, authentication flows, and persistent databases.",
    technologies: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    keyDeliverables: [
      "Complete full-stack web applications from concept to deployment",
      "Relational & document database schemas with indexing",
      "Secure user authentication (JWT, OAuth) and role management",
    ],
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
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    badge: "Core Logic & Services",
    description:
      "Architecting clean RESTful APIs with strict schema validation, robust middleware, database query optimization, and resilient error-handling protocols.",
    technologies: ["REST APIs", "Node.js", "Express.js", "Zod", "Payment APIs"],
    keyDeliverables: [
      "Scalable RESTful API endpoints and middleware pipelines",
      "Third-party payment gateways (Razorpay, Cashfree)",
      "Structured validation schemas and centralized logging",
    ],
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
        <rect width="20" height="8" x="2" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
        <line x1="10" x2="18" y1="6" y2="6" />
        <line x1="10" x2="18" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    id: "performance-seo",
    title: "SEO & Web Performance",
    badge: "Speed & Visibility",
    description:
      "Auditing and enhancing website speed, Core Web Vitals, server-side rendering, code splitting, and metadata architecture for maximum search discovery.",
    technologies: ["Next.js SSR/SSG", "Core Web Vitals", "Lighthouse", "Technical SEO"],
    keyDeliverables: [
      "95+ Lighthouse performance, accessibility, and SEO scores",
      "Dynamic Open Graph tags, canonical URLs, and XML sitemaps",
      "Image/font asset optimization and bundle size minimization",
    ],
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
        <path d="M12 2v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="M12 22v-4" />
        <path d="m19.07 19.07-2.83-2.83" />
        <path d="M22 12h-4" />
        <path d="m19.07 4.93-2.83 2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "devops-deployment",
    title: "Deployment & DevOps",
    badge: "Automation & Containers",
    description:
      "Containerizing application services and building automated CI/CD deployment workflows for seamless, reproducible, and zero-downtime releases.",
    technologies: ["Docker", "Jenkins", "CI/CD", "Linux", "Kubernetes Basics"],
    keyDeliverables: [
      "Multi-stage Docker containers with minimal image footprint",
      "Automated CI/CD build, test, and release pipelines",
      "Cloud platform deployment (Vercel, Render, Cloudflare)",
    ],
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
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </svg>
    ),
  },
  {
    id: "microfrontend-dev",
    title: "Microfrontend Development",
    badge: "Modular Architecture",
    description:
      "Decoupling complex monolithic frontends into standalone, modular units that scale across teams with decoupled builds and shared runtime contracts.",
    technologies: ["Microfrontends", "Module Federation", "Clean Architecture", "Modular UI"],
    keyDeliverables: [
      "Modular web architecture with decoupled application boundaries",
      "Independent deployments without breaking host applications",
      "Shared design tokens, utilities, and global state contracts",
    ],
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
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
];

export function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="services-heading"
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
            Services &amp; Capabilities
          </div>
          <h2
            id="services-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Engineering solutions built for{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              real-world scale
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            Practical, developer-grade services focused on resilient architecture, maintainable
            codebases, high-performance web interfaces, and automated delivery.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                style={{
                  transitionDelay: isVisible ? `${index * 80 + 100}ms` : "0ms",
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl dark:hover:border-accent/30 dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                }`}
              >
                {/* Top Glowing Gradient Accent Bar on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent-subtle text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-accent-foreground shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border/70 bg-background-secondary/60 px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <ul className="mt-4 space-y-1.5 text-xs text-foreground-secondary/90">
                    {service.keyDeliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="mt-6 pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/80 bg-background-secondary/60 px-2 py-0.5 font-mono text-[11px] text-foreground-secondary transition-all duration-200 group-hover:border-accent/20 group-hover:bg-surface group-hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Banner / Project CTA */}
        <div
          className={`mt-12 rounded-2xl border border-border/80 bg-gradient-to-r from-surface via-background-secondary/30 to-surface p-6 sm:p-8 shadow-xs transition-all duration-700 delay-500 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-base font-bold text-foreground sm:text-lg">
                Have a specific project or engineering requirement?
              </h3>
              <p className="mt-1 text-sm text-foreground-secondary">
                Let&apos;s talk through your architecture, timelines, and technical goals.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-xs font-semibold text-accent-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md hover:shadow-accent/20 active:scale-98"
            >
              <span>Discuss Your Project</span>
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 hover:translate-x-0.5"
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
          </div>
        </div>
      </div>
    </section>
  );
}
