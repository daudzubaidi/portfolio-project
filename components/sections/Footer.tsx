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
    <footer className="dark-section py-[32px] border-t border-[#22252b]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[24px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] font-bold leading-[34px] text-white hover:text-[#149bb0] transition-colors"
          >
            Edwin
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-[24px]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-[14px] font-normal leading-[24px] text-[#717680]">
            © {currentYear} Edwin Anderson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
