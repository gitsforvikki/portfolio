import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vikash — Software Developer",
    template: "%s | Vikash",
  },
  description:
    "Software developer specializing in building reliable, scalable applications with clean architecture. Experienced in TypeScript, React, Next.js, Node.js, Python, and cloud technologies.",
  keywords: [
    "software developer",
    "full stack developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "portfolio",
  ],
  authors: [{ name: "Vikash" }],
  creator: "Vikash",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Vikash — Software Developer",
    description:
      "Software developer specializing in building reliable, scalable applications with clean architecture.",
    siteName: "Vikash Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash — Software Developer",
    description:
      "Software developer specializing in building reliable, scalable applications with clean architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
