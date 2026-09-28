"use client";

import { useTheme } from "@/components/ui/theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();

  const cycleTheme = () => {
    const order: Array<"light" | "dark" | "system"> = [
      "light",
      "dark",
      "system",
    ];
    const currentIndex = order.indexOf(theme);
    const next = order[(currentIndex + 1) % order.length];
    setTheme(next);
  };

  const label =
    theme === "system"
      ? "System theme"
      : theme === "dark"
        ? "Dark theme"
        : "Light theme";

  return (
    <button
      onClick={cycleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground-secondary transition-all duration-200 hover:bg-surface-hover hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Current: ${label}. Click to change theme.`}
      title={label}
      type="button"
    >
      {/* Sun icon */}
      <svg
        className={`h-[18px] w-[18px] transition-all duration-300 ${
          resolvedTheme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        style={{ position: resolvedTheme === "dark" ? "absolute" : "relative" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* Moon icon */}
      <svg
        className={`h-[18px] w-[18px] transition-all duration-300 ${
          resolvedTheme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
        style={{
          position: resolvedTheme === "light" ? "absolute" : "relative",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>

      {/* System indicator dot */}
      {theme === "system" && (
        <span
          className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
