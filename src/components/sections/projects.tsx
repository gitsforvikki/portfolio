"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live";
}

interface Project {
  title: string;
  category: string;
  badge: string;
  isFeatured?: boolean;
  description: string;
  features: string[];
  techStack: string[];
  links: ProjectLink[];
}

const PROJECTS: Project[] = [
  {
    title: "ShopHub — Next.js Full-Stack E-Commerce Platform",
    category: "Full-Stack Next.js 16",
    badge: "Flagship Project",
    isFeatured: true,
    description:
      "A modern, production-grade e-commerce application built with Next.js 16 App Router, React 19, and TypeScript. Features complete checkout flows, role-protected routes, and automated media handling.",
    features: [
      "End-to-end Cashfree payment gateway integration with secure server-side webhook verification.",
      "Protected private routes with authentication state restoration after login redirects.",
      "Cloudinary media integration for automated product image upload and optimization.",
      "Dynamic catalog browsing, faceted filtering, and persistent cart state managed via Zustand.",
      "Strict schema validation using Zod and type-safe server actions with MongoDB / Mongoose.",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Zustand",
      "Zod",
      "Tailwind CSS",
      "Cashfree",
      "Cloudinary",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://shophub-online.vercel.app/",
        type: "live",
      },
      {
        label: "Source Code",
        url: "https://github.com/gitsforvikki/e-commerce-app",
        type: "github",
      },
    ],
  },
  {
    title: "CodeBuddy — Real-Time Developer Collaboration",
    category: "Real-Time Full-Stack",
    badge: "Flagship Project",
    isFeatured: true,
    description:
      "A full-stack developer networking and real-time collaboration platform featuring instant messaging, subscription memberships, and automated background task scheduling.",
    features: [
      "Bidirectional real-time messaging and connection status powered by WebSockets & Socket.IO.",
      "Razorpay payment gateway integration for premium developer tier subscriptions.",
      "Automated background cron jobs with node-cron and transactional emails via Nodemailer.",
      "Robust security architecture with HTTP-only cookies, JWT verification, and Bcrypt password hashing.",
      "Centralized state management with Redux Toolkit for seamless real-time message stream updates.",
    ],
    techStack: [
      "React 19",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Redux Toolkit",
      "Razorpay",
      "Tailwind CSS",
      "node-cron",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://codebuddydev.vercel.app/",
        type: "live",
      },
      {
        label: "Frontend Code",
        url: "https://github.com/gitsforvikki/codeBuddy-web",
        type: "github",
      },
      {
        label: "Backend Code",
        url: "https://github.com/gitsforvikki/codeBuddy",
        type: "github",
      },
    ],
  },
];

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="projects-heading"
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
            04 // Featured Projects
          </div>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Selected work &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              production applications
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            Full-stack web platforms and real-time systems designed with clean architecture, type
            safety, and high-performance user experiences.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const delayClass = index === 0 ? "delay-150" : "delay-300";

            return (
              <article
                key={project.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs transition-all duration-700 ease-out hover:border-border-hover hover:shadow-md ${delayClass} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                }`}
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-subtle/50 px-2.5 py-0.5 font-mono text-xs font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {project.badge}
                    </div>
                    <span className="font-mono text-xs text-foreground-muted">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                      Key Engineering Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground-secondary"
                        >
                          <span
                            className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                            aria-hidden="true"
                          >
                            <svg
                              className="h-2 w-2"
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
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Tech Stack & Actions */}
                <div className="mt-8 pt-6 border-t border-border/70 space-y-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.links.map((link) => {
                      if (link.type === "live") {
                        return (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label={`View live demo for ${project.title}`}
                          >
                            {/* Animated light reflection shimmer */}
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />

                            {/* Live Pulsing Dot */}
                            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            <span className="relative tracking-wide">{link.label}</span>

                            {/* External Link Arrow with hover translation */}
                            <svg
                              className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M7 17 17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </a>
                        );
                      }

                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/git inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:border-accent/50 hover:bg-surface-hover hover:text-accent hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring"
                          aria-label={`View ${link.label} for ${project.title}`}
                        >
                          <svg
                            className="h-4 w-4 text-foreground-secondary transition-colors group-hover/git:text-accent"
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
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
