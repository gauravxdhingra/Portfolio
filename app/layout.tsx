import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://gauravdhingra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gaurav Dhingra | Senior QA Engineer / SDET",
  description:
    "Portfolio for Gaurav Dhingra, a fintech-focused Senior QA Engineer and SDET specializing in backend, API, UI automation, reliability, and CI/CD quality systems.",
  applicationName: "Gaurav Dhingra Portfolio",
  keywords: [
    "Gaurav Dhingra",
    "Senior QA Engineer",
    "SDET",
    "Test Automation",
    "Playwright",
    "FinTech QA",
    "Robot Framework",
    "Chaos Engineering",
    "RAG test generation",
  ],
  authors: [{ name: "Gaurav Dhingra", url: siteUrl }],
  creator: "Gaurav Dhingra",
  openGraph: {
    title: "Gaurav Dhingra | Senior QA Engineer / SDET",
    description:
      "Fintech quality engineering, backend/API automation, reliability testing, and CI/CD test infrastructure.",
    url: siteUrl,
    siteName: "Gaurav Dhingra Portfolio",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Dhingra | Senior QA Engineer / SDET",
    description:
      "Fintech quality engineering, backend/API automation, reliability testing, and CI/CD test infrastructure.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#f6f3ea",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gaurav Dhingra",
  jobTitle: "Senior QA Engineer / SDET",
  url: siteUrl,
  email: "mailto:grvdhingra1999@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Delhi/NCR",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "ION Group",
  },
  sameAs: [
    "https://www.linkedin.com/in/gauravxdhingra/",
    "https://github.com/gauravxdhingra",
  ],
  knowsAbout: [
    "Test Automation",
    "Quality Engineering",
    "Playwright",
    "Chaos Engineering",
    "FinTech",
    "RAG Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
