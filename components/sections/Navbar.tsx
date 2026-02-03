"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[16px] md:pt-[32px]"
    >
      {/* Navbar container with backdrop blur - exact Figma specs */}
      <nav
        className={cn(
          "flex items-center h-[48px] rounded-[100px] backdrop-blur-[20px]",
          "w-[361px] justify-between px-[16px] bg-[rgba(0,0,0,0.4)]",
          "md:w-auto md:justify-center md:gap-[24px] md:px-[24px] md:bg-[rgba(0,0,0,0.2)]"
        )}
      >
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] font-bold leading-[34px] text-white hover:opacity-80 transition-opacity"
          >
            Edwin
          </Link>

          {/* Desktop Navigation - each item has p-[8px] as per Figma */}
          <ul className="hidden md:flex items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "p-[8px] text-[16px] font-medium leading-[30px] text-white tracking-[-0.48px]",
                    "hover:text-[var(--color-brand-500)] transition-colors duration-200"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="fixed top-[16px] left-1/2 z-[60] w-[calc(100vw-32px)] h-[calc(100dvh-32px)] -translate-x-1/2 rounded-[16px] p-[16px] backdrop-blur-[20px] bg-[rgba(0,0,0,0.4)] md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-[20px] font-bold leading-[34px] text-white">Edwin</span>
            <button
              className="text-white p-0"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <ul className="mt-[24px] flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-[8px] text-[16px] font-medium leading-[30px] tracking-[-0.48px] text-white",
                    "hover:text-[var(--color-brand-500)] transition-colors"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
