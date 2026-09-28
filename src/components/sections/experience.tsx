"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  companySubtext?: string;
  period: string;
  location: string;
  workType: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "React.js / Full Stack Developer",
    company: "Essentials International",
    companySubtext: "Australian Client Project",
    period: "Recent",
    location: "Remote",
    workType: "Client Engagement",
    description:
      "Spearheaded frontend integration and backend services for a high-traffic medical e-commerce platform, ensuring seamless communication between catalog services and customer checkout flows.",
    achievements: [
      "Architected and integrated robust RESTful APIs using Node.js and Express.js to facilitate secure, high-speed data exchange for critical healthcare products.",
      "Engineered centralized, predictable state management using Redux Toolkit to streamline multi-step checkout, cart persistence, and dynamic catalog filters.",
      "Formulated server-side business logic, request validation schemas, and resilient error-handling middleware for zero-downtime client interactions.",
      "Collaborated cross-functionally across frontend and backend units to debug complex API bottlenecks and elevate overall system responsiveness.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "REST APIs",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "State Management",
    ],
  },
  {
    role: "React.js / Next.js Frontend Developer",
    company: "Webelight Solution Pvt. Ltd",
    period: "May 2024 – Aug 2025",
    location: "India",
    workType: "Full-Time",
    description:
      "Owned the core web applications and platform architecture, translating complex Figma design systems into responsive, accessible, and SEO-optimized production interfaces.",
    achievements: [
      "Engineered and maintained high-performance web applications leveraging React.js, Next.js, and Tailwind CSS with modern component architecture.",
      "Implemented comprehensive on-page SEO strategies, dynamic Open Graph meta tags, structured data, and asset optimization, significantly improving search rankings and page speeds.",
      "Partnered closely with product designers to bridge UX concepts into pixel-perfect, accessible (a11y) interfaces across all device breakpoints.",
      "Conducted internal engineering workshops on React Hooks, modern state patterns, and performant web animations to upskill team members.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO Optimization",
      "Micro Frontends",
      "Core Web Vitals",
      "Docker",
    ],
  },
];

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="experience-heading"
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
            03 // Work Experience
          </div>
          <h2
            id="experience-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Where I&apos;ve contributed &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              engineered solutions
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            A track record of engineering scalable frontend architectures, dependable REST APIs, and
            high-visibility web applications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-16 sm:mt-20">
          {/* Vertical Timeline Guide Line */}
          <div
            className="absolute top-4 bottom-4 left-4 hidden w-[2px] bg-gradient-to-b from-accent/50 via-border to-border md:left-8 md:block"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, index) => {
              const delayClass = index === 0 ? "delay-150" : "delay-300";

              return (
                <div
                  key={exp.company}
                  className={`relative grid grid-cols-1 md:grid-cols-12 md:gap-8 transition-all duration-700 ease-out ${delayClass} ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                  }`}
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div
                    className="absolute left-8 top-6 z-10 hidden -translate-x-1/2 md:flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-surface shadow-xs"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </div>

                  {/* Left Column / Metadata on Desktop */}
                  <div className="md:col-span-4 md:pl-16 space-y-2">
                    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs font-semibold text-accent">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {exp.company}
                    </h3>
                    {exp.companySubtext && (
                      <p className="font-mono text-xs text-foreground-muted">
                        {exp.companySubtext}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-foreground-muted">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.workType}</span>
                    </div>
                  </div>

                  {/* Right Column / Experience Details Card */}
                  <div className="mt-4 md:mt-0 md:col-span-8">
                    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs transition-all duration-200 hover:border-border-hover hover:shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/70 pb-4">
                        <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                        <span className="font-mono text-xs font-medium text-accent">
                          Production Engineering
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                        {exp.description}
                      </p>

                      {/* Key Achievements Bullet Points */}
                      <div className="mt-5 space-y-3">
                        <h5 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                          Key Contributions & Impact
                        </h5>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-foreground-secondary"
                            >
                              <span
                                className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent"
                                aria-hidden="true"
                              >
                                <svg
                                  className="h-2.5 w-2.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="mt-6 pt-5 border-t border-border/60">
                        <span className="block font-mono text-[11px] font-medium uppercase tracking-wider text-foreground-muted mb-2.5">
                          Technologies Used
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground-secondary transition-colors hover:border-accent/40 hover:text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
