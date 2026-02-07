"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position for navbar background change
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 flex justify-center pt-[16px] md:pt-[32px]"
    >
      {/* Navbar container with backdrop blur - exact Figma specs */}
      <nav
        className={cn(
          "flex h-[48px] items-center rounded-[100px] backdrop-blur-[20px] transition-all duration-300",
          "w-[361px] justify-between px-[16px]",
          "md:w-auto md:justify-center md:gap-[24px] md:px-[24px]",
          isScrolled
            ? "bg-[rgba(0,0,0,0.8)] shadow-lg shadow-black/20"
            : "bg-[rgba(0,0,0,0.4)] md:bg-[rgba(0,0,0,0.2)]"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="type-title-sm font-bold text-white transition-opacity hover:opacity-80"
        >
          Daud
        </Link>

        {/* Desktop Navigation - each item has p-[8px] as per Figma */}
        <ul className="hidden items-center md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "underline-animate p-[8px] text-[16px] leading-[30px] font-medium tracking-[-0.48px] text-white",
                  "transition-colors duration-200 hover:text-[#149bb0]"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-white md:hidden"
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
          className="fixed top-[16px] left-1/2 z-[60] flex h-[812px] w-[361px] -translate-x-1/2 flex-col gap-[16px] rounded-[16px] bg-[rgba(0,0,0,0.4)] p-[16px] backdrop-blur-[20px] md:hidden"
        >
          <div className="flex w-[329px] items-center justify-between">
            <span className="type-title-sm font-bold text-white">Daud</span>
            <button
              className="p-0 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="relative block size-[24px] overflow-clip">
                <svg
                  className="absolute inset-1/4"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13M1 1L13 13"
                    stroke="#FDFDFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "type-body-md block py-[8px] font-medium text-white",
                    "transition-colors hover:text-[var(--color-brand-500)]"
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
