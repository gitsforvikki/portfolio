"use client";

import { useEffect, useRef, useState } from "react";

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  highlights: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  duration?: string;
  badge: string;
  description: string;
  topics: string[];
  credentialUrl?: string;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Maharaja Ranjit Singh Punjab Technical University",
    period: "Sep 2017 – Jun 2021",
    location: "Punjab, India",
    grade: "7.76 CGPA",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, DBMS, and Object-Oriented Design.",
      "Comprehensive training in Operating Systems, Computer Networks, and Software Engineering.",
      "Hands-on engineering projects applying full-stack web and database principles.",
    ],
  },
];

const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "MERN Stack Industrial Training",
    issuer: "Naresh IT Technologies",
    duration: "90 Days Intensive",
    badge: "Full-Stack Specialization",
    description:
      "Comprehensive hands-on training building production full-stack applications with MongoDB, Express.js, React.js, and Node.js, focusing on scalable REST APIs and secure authentication.",
    topics: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "UI & Frontend Architecture Training",
    issuer: "Naresh IT Technologies",
    duration: "45 Days Intensive",
    badge: "Frontend Engineering",
    description:
      "In-depth technical program centered on modern frontend engineering, component systems, advanced CSS/Responsive design, and cross-browser performance.",
    topics: ["Modern JavaScript", "HTML5 & CSS3", "Component Systems", "DOM Optimization"],
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    badge: "Verified Certification",
    description:
      "Developer certification verifying expertise in responsive web principles, Flexbox, CSS Grid, media queries, and modern web accessibility (a11y) standards.",
    topics: ["Responsive Design", "CSS Grid", "Flexbox", "Web Accessibility (a11y)"],
  },
];

export function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="relative border-t border-border bg-background py-24 sm:py-32"
      aria-labelledby="education-heading"
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
            05 // Education & Credentials
          </div>
          <h2
            id="education-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Academic background &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              continuous training
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-secondary sm:text-lg">
            A strong engineering foundation in Information Technology combined with dedicated
            industrial training in full-stack web architectures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Formal Degree */}
          <div
            className={`space-y-6 lg:col-span-5 transition-all duration-700 delay-150 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-accent">
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
                  <path d="M21.42 10.922a1 1 0 0 0-.019-.838L12.83 2.18a2 2 0 0 0-1.66 0L2.6 10.084a1 1 0 0 0 0 1.832l8.57 7.908a2 2 0 0 0 1.66 0l8.57-7.908a1 1 0 0 0 .02-.994Z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </span>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                Formal Education
              </h3>
            </div>

            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.degree}
                className="group rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-xs transition-all duration-200 hover:border-border-hover hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 border-b border-border/70 pb-4">
                  <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-xs font-medium text-accent">
                    {edu.period}
                  </span>
                  {edu.grade && (
                    <span className="rounded-md border border-accent/30 bg-accent-subtle/50 px-2.5 py-0.5 font-mono text-xs font-semibold text-accent">
                      {edu.grade}
                    </span>
                  )}
                </div>

                <div className="mt-5 space-y-1">
                  <h4 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-foreground-secondary">{edu.field}</p>
                  <p className="font-mono text-xs text-foreground-muted pt-1">{edu.institution}</p>
                  <p className="font-mono text-xs text-foreground-muted">{edu.location}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60 space-y-2.5">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground">
                    Core Focus & Curriculum
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Industrial Certifications & Training */}
          <div
            className={`space-y-6 lg:col-span-7 transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-accent">
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
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </span>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                Specialized Training & Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.title}
                  className="group rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-border-hover hover:shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="font-mono text-xs font-medium text-accent">
                        {cert.badge}
                      </span>
                      <h4 className="mt-1 text-base font-bold text-foreground transition-colors group-hover:text-accent">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs text-foreground-muted">
                        {cert.issuer} {cert.duration ? `• ${cert.duration}` : ""}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground-secondary">
                    {cert.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-foreground-secondary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
