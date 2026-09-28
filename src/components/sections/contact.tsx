"use client";

import { useEffect, useRef, useState } from "react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Role",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vk6484412@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate async submission (ready for API integration like Formspree, Resend, or custom API route)
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Full-Time Role",
        message: "",
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="contact-heading"
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
            05 // Get in Touch
          </div>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Let&apos;s discuss your next project &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              build something exceptional
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            Have an open software engineering role, a full-stack project in mind, or want to explore
            collaboration? Reach out and I&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Contact Channels & Availability */}
          <div
            className={`space-y-6 lg:col-span-5 transition-all duration-700 delay-150 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
          >
            {/* Availability Status Card */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                  Current Status
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground">
                Available for Full-Time Roles & Opportunities
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground-secondary sm:text-sm">
                Open to full-stack, frontend, and backend software engineering positions. Remote,
                hybrid, or relocation.
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-foreground-muted">
                <span>⚡ Quick response</span>
                <span>•</span>
                <span>Within 24 hours</span>
              </div>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="group flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-accent/40 hover:bg-surface-hover">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
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
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-medium text-foreground-muted">
                      Direct Email
                    </span>
                    <a
                      href="mailto:vk6484412@gmail.com"
                      className="block text-sm font-semibold text-foreground transition-colors hover:text-accent"
                    >
                      vk6484412@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-xs font-medium text-foreground-secondary transition-colors hover:border-accent/50 hover:text-foreground"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? "Copied! ✓" : "Copy"}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent">
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
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[11px] font-medium text-foreground-muted">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-foreground">
                    Bengaluru, India <span className="font-normal text-foreground-muted">(IST • UTC+5:30)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://github.com/gitsforvikki"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:bg-surface-hover hover:shadow-xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground-secondary transition-colors group-hover:text-accent">
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
                </div>
                <div>
                  <span className="block text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
                    GitHub
                  </span>
                  <span className="font-mono text-[10px] text-foreground-muted">
                    @gitsforvikki
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vikash-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:bg-surface-hover hover:shadow-xs"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground-secondary transition-colors group-hover:text-accent">
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
                </div>
                <div>
                  <span className="block text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
                    LinkedIn
                  </span>
                  <span className="font-mono text-[10px] text-foreground-muted">
                    /in/vikash-developer
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
          >
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Send a Message
                  </h3>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Fill out the form below and I&apos;ll get in touch with you shortly.
                  </p>
                </div>
                <span className="font-mono text-xs text-accent">Direct Contact</span>
              </div>

              {/* Success Notification Banner */}
              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-600 dark:text-emerald-400"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">Message delivered successfully!</p>
                    <p className="mt-0.5 opacity-90">
                      Thank you for reaching out. I will respond to your inquiry via email as soon as
                      possible.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-600 dark:text-red-400"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0"
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
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold">Please fill out all required fields.</p>
                    <p className="mt-0.5 opacity-90">
                      Ensure your name, valid email address, and message are completed before
                      submitting.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-semibold text-foreground"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-muted transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-semibold text-foreground"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-muted transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                    />
                  </div>
                </div>

                {/* Inquiry Topic / Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs font-semibold text-foreground"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    <option value="Full-Time Role">Full-Time Software Engineering Role</option>
                    <option value="Contract / Freelance">Freelance / Contract Project</option>
                    <option value="Technical Consulting">Technical Architecture & Consulting</option>
                    <option value="General Conversation">General Conversation / Connect</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-semibold text-foreground"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project requirements, or timeline..."
                    className="w-full resize-y rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-muted transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
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
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
