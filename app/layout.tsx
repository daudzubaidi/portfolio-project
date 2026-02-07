import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daud Abdilah Zubaidi | Frontend Developer",
  description:
    "Frontend Developer with approximately 7 years of experience, specializing in web and mobile development using React.js, Vue.js, Next.js, and Nuxt.js. Committed to creating applications that perform well and provide meaningful value to users.",
  keywords: [
    "frontend developer",
    "web developer",
    "react",
    "next.js",
    "vue.js",
    "nuxt.js",
    "typescript",
    "portfolio",
    "mobile development",
    "react native",
  ],
  authors: [{ name: "Daud Abdilah Zubaidi" }],
  openGraph: {
    title: "Daud Abdilah Zubaidi | Frontend Developer",
    description:
      "Frontend Developer with 7+ years of experience, specializing in web and mobile development using React.js, Vue.js, Next.js, and Nuxt.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daud Abdilah Zubaidi | Frontend Developer",
    description:
      "Frontend Developer with 7+ years of experience, specializing in web and mobile development using React.js, Vue.js, Next.js, and Nuxt.js.",
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
