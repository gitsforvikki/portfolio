"use client";

import { useState } from "react";

/** Reusable live status indicator dot with a pulse ring. */
function StatusDot() {
  return (
    <span className="relative mr-2 flex h-2.5 w-2.5" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-[2000ms]" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
    </span>
  );
}

/** Animated ambient shining background with drifting glow orbs. */
function ShiningBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Primary glow orb — blue, top-right drift */}
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] animate-shine-1 rounded-full bg-blue-500/12 blur-[110px] dark:bg-blue-500/18" />
      {/* Secondary glow orb — violet, bottom-left drift */}
      <div className="absolute -bottom-40 -left-32 h-[480px] w-[480px] animate-shine-2 rounded-full bg-violet-500/10 blur-[100px] dark:bg-violet-500/15" />
      {/* Tertiary glow orb — indigo, center float */}
      <div className="absolute top-1/3 left-1/2 h-[380px] w-[380px] -translate-x-1/2 animate-shine-3 rounded-full bg-indigo-500/8 blur-[90px] dark:bg-indigo-500/12" />
    </div>
  );
}

const TECH_LIST = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "mongoDB",
  "Docker",
  "Jenkins",
] as const;

type ConsoleTab = "profile" | "architecture" | "terminal";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<ConsoleTab>("profile");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 pt-20 pb-16 sm:px-8 sm:pt-24 lg:pt-28"
      aria-label="Introduction"
    >
      <ShiningBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ─── Left Column: Headline & Content (7 Cols) ─── */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-7">
            {/* Status Pills */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start animate-fade-in-down">
              <span className="inline-flex items-center rounded-full border border-border bg-surface/90 px-3.5 py-1 text-xs font-medium tracking-wide text-foreground-secondary shadow-xs backdrop-blur-sm">
                <StatusDot />
                Available for opportunities
              </span>
              <span className="hidden items-center rounded-full border border-border/70 bg-surface/60 px-3 py-1 font-mono text-[11px] text-foreground-muted sm:inline-flex">
                📍 Remote & Relocation
              </span>
            </div>

            {/* Headline with Playpen Sans Gradient */}
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[58px] animate-fade-in-up">
              Hi, I&apos;m{" "}
              <span className="font-playpen inline-block font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                Vikash
              </span>
              <br />
              <span className="text-foreground-secondary font-medium text-3xl sm:text-4xl lg:text-[46px]">
                Software Developer
              </span>
            </h1>

            {/* Subtitle / Narrative */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg sm:leading-relaxed animate-fade-in-up delay-200">
              I design and build reliable, scalable full-stack applications with clean architecture
              and thoughtful user experiences. Experienced in creating production-grade software
              with modern web stacks.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row sm:items-start animate-fade-in-up delay-300">
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group relative inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 sm:w-auto active:scale-98"
              >
                <span>Get in Touch</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

              {/* Secondary CTA */}
              <a
                href="#projects"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-surface/90 px-7 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface hover:text-accent sm:w-auto active:scale-98"
              >
                View Projects
              </a>

              {/* GitHub Link Button */}
              <a
                href="https://github.com/gitsforvikki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface/70 text-foreground-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent active:scale-95"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <svg
                  className="h-5 w-5"
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
            </div>

            {/* Tech Stack Ribbon */}
            <div className="mt-10 w-full animate-fade-in delay-500">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground-muted mb-2.5">
                Core Technologies
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                {TECH_LIST.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface/80 px-2.5 py-1 font-mono text-xs text-foreground-secondary transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-accent/50 hover:bg-surface hover:text-accent shadow-2xs"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right Column: Interactive Developer Graphic (5 Cols) ─── */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end animate-scale-in delay-200">
            {/* Ambient Background Glow behind graphic */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-violet-500/20 blur-2xl dark:from-blue-500/15 dark:via-purple-500/10 dark:to-violet-500/15" />

            {/* ─── Main Glassmorphic Dev Console ─── */}
            <div className="relative w-full max-w-[460px] rounded-2xl border border-border/80 bg-surface/90 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-surface/85">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 bg-background-secondary/50 rounded-t-2xl">
                {/* 3 Colorful macOS Window Buttons */}
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-2xs" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-2xs" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-2xs" />
                </div>

                {/* Interactive Console Tabs */}
                <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-surface/70 p-0.5 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-all ${
                      activeTab === "profile"
                        ? "bg-accent text-accent-foreground shadow-2xs"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-all ${
                      activeTab === "architecture"
                        ? "bg-accent text-accent-foreground shadow-2xs"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    arch.json
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-all ${
                      activeTab === "terminal"
                        ? "bg-accent text-accent-foreground shadow-2xs"
                        : "text-foreground-secondary hover:text-foreground"
                    }`}
                  >
                    live.log
                  </button>
                </div>

                {/* Git Branch Badge */}
                <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-foreground-muted">
                  <svg
                    className="h-3 w-3 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="6" x2="6" y1="3" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                  <span>main</span>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-hidden min-h-[260px] flex flex-col justify-center">
                {activeTab === "profile" && (
                  <div className="space-y-1 animate-fade-in">
                    <div className="text-foreground-muted/70 text-[11px] italic">
                      {"// Full-stack engineering profile"}
                    </div>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">
                        const
                      </span>{" "}
                      <span className="text-blue-600 dark:text-sky-300 font-bold">developer</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-400">Engineer</span> =
                      &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-foreground-secondary">name:</span>{" "}
                      <span className="text-amber-600 dark:text-amber-300">&quot;Vikash&quot;</span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-foreground-secondary">role:</span>{" "}
                      <span className="text-amber-600 dark:text-amber-300">
                        &quot;Full Stack Software Dev&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-foreground-secondary">focus:</span>{" "}
                      <span className="text-amber-600 dark:text-amber-300">
                        &quot;Scalable Web Architectures&quot;
                      </span>
                      ,
                    </div>

                    <div className="pl-4">
                      <span className="text-foreground-secondary">coreStack:</span> [
                      <span className="text-emerald-600 dark:text-emerald-300">
                        &quot;React&quot;
                      </span>
                      ,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">
                        &quot;Next.js&quot;
                      </span>
                      ,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">
                        &quot;Node&quot;
                      </span>
                      ,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">
                        &quot;Docker&quot;
                      </span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-foreground-secondary">status:</span>{" "}
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        &quot;ready_to_deploy&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-600 dark:text-purple-400">build</span>: () =&gt;{" "}
                      <span className="text-accent">&quot;high-impact &amp; clean-code&quot;</span>
                    </div>
                    <div>&#125;;</div>
                  </div>
                )}

                {activeTab === "architecture" && (
                  <div className="space-y-2.5 animate-fade-in text-[11px]">
                    <div className="text-foreground-muted/70 italic">
                      {"// System Architecture Pillars"}
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="rounded-lg border border-border/70 bg-surface/70 p-2.5 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-accent font-semibold">
                          <span>⚛</span> Frontend
                        </div>
                        <p className="mt-1 text-[10px] text-foreground-secondary">
                          Next.js, React, Tailwind, SSR, Clean UI
                        </p>
                      </div>
                      <div className="rounded-lg border border-border/70 bg-surface/70 p-2.5 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <span>⚡</span> Backend &amp; APIs
                        </div>
                        <p className="mt-1 text-[10px] text-foreground-secondary">
                          Node.js, Express, REST APIs, Microservices
                        </p>
                      </div>
                      <div className="rounded-lg border border-border/70 bg-surface/70 p-2.5 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold">
                          <span>🗄</span> Data Layer
                        </div>
                        <p className="mt-1 text-[10px] text-foreground-secondary">
                          PostgreSQL, MongoDB, Relational Schemas
                        </p>
                      </div>
                      <div className="rounded-lg border border-border/70 bg-surface/70 p-2.5 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-semibold">
                          <span>🐳</span> DevOps &amp; Cloud
                        </div>
                        <p className="mt-1 text-[10px] text-foreground-secondary">
                          Docker, Jenkins, Git CI/CD, Linux
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "terminal" && (
                  <div className="space-y-2 animate-fade-in text-[11px]">
                    <div className="flex items-center gap-2 text-foreground-secondary">
                      <span className="text-accent">$</span>
                      <span>bun test --coverage</span>
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400">
                      ✓ 32 unit tests passed (0 bugs)
                    </div>
                    <div className="flex items-center gap-2 text-foreground-secondary">
                      <span className="text-accent">$</span>
                      <span>docker compose up -d --build</span>
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-400">
                      ✓ Container [portfolio-app] Healthy
                    </div>
                    <div className="flex items-center gap-2 text-foreground-secondary">
                      <span className="text-accent">$</span>
                      <span>next build &amp;&amp; deploy</span>
                    </div>
                    <div className="text-blue-600 dark:text-sky-400">
                      ✓ Static optimization 100% complete
                    </div>
                    <div className="flex items-center gap-1 text-foreground-muted pt-1">
                      <span className="text-emerald-500">●</span> Ready on port :3000
                      <span className="inline-block h-3.5 w-1.5 bg-accent animate-pulse ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Window Footer Status Bar */}
              <div className="flex items-center justify-between border-t border-border/70 px-4 py-2 bg-background-secondary/40 rounded-b-2xl font-mono text-[10px] text-foreground-muted">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Typescript 5.0</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-accent font-medium">100% Validated</span>
                </div>
              </div>
            </div>

            {/* ─── Floating Satellite Graphics (Cool Badges) ─── */}

            {/* Satellite 1 (Top-Right): Clean Architecture & High Speed */}
            <div className="absolute -top-6 -right-3 sm:-right-6 animate-float rounded-xl border border-border/80 bg-surface/95 px-3 py-2 shadow-xl backdrop-blur-md transition-transform hover:scale-105 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 text-white shadow-xs">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Clean Architecture</div>
                  <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    ⚡ High Performance
                  </div>
                </div>
              </div>
            </div>

            {/* Satellite 2 (Bottom-Left): Full Stack Experience & Production */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 animate-float-delayed rounded-xl border border-border/80 bg-surface/95 px-3 py-2 shadow-xl backdrop-blur-md transition-transform hover:scale-105 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-purple-600 text-white shadow-xs">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20" />
                    <path d="m17 5-5-3-5 3" />
                    <path d="m17 19-5 3-5-3" />
                    <path d="M2 12h20" />
                    <path d="m5 7-3 5 3 5" />
                    <path d="m19 7 3 5-3 5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Full Stack Ready</div>
                  <div className="font-mono text-[10px] text-foreground-muted">
                    🚀 2+ Years Production
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in delay-700 flex flex-col items-center gap-1.5 group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest text-foreground-muted group-hover:text-foreground transition-colors uppercase">
          Explore
        </span>
        <div className="h-6 w-3.5 rounded-full border border-foreground-muted/50 p-0.5 flex justify-center group-hover:border-accent transition-colors">
          <div className="h-1.5 w-1 rounded-full bg-accent animate-bounce" />
        </div>
      </a>
    </section>
  );
}
