import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Edwin Anderson | Frontend Developer",
  description:
    "Passionate about frontend development, I focus on crafting digital products that are visually polished, performance-optimized, and deliver a consistent experience across all platforms.",
  keywords: [
    "frontend developer",
    "web developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Edwin Anderson" }],
  openGraph: {
    title: "Edwin Anderson | Frontend Developer",
    description:
      "Passionate about frontend development, crafting digital products that are visually polished and performance-optimized.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edwin Anderson | Frontend Developer",
    description:
      "Passionate about frontend development, crafting digital products that are visually polished and performance-optimized.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
