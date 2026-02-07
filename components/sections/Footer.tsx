"use client";

import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-section border-stroke-700 border-t py-[32px]">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-[24px] md:flex-row">
          {/* Logo */}
          <Link
            href="/"
            className="type-title-sm hover:text-brand-500 font-bold text-white transition-colors"
          >
            Daud
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-[24px]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] leading-[30px] font-normal tracking-[-0.48px] text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-[14px] leading-[24px] font-normal text-[#717680]">
            © {currentYear} Daud Abdilah Zubaidi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
