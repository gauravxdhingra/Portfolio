import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Dhingra | Senior QA Engineer / SDET",
  description:
    "Portfolio for Gaurav Dhingra, a fintech-focused Senior QA Engineer and SDET specializing in backend, API, UI automation, reliability, and CI/CD quality systems.",
  openGraph: {
    title: "Gaurav Dhingra | Senior QA Engineer / SDET",
    description:
      "Fintech quality engineering, backend/API automation, reliability testing, and CI/CD test infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
