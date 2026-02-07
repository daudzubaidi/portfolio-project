"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className = "",
  animate = true,
}: GradientTextProps) {
  if (animate) {
    return (
      <motion.span
        className={`bg-gradient-to-r from-[#149bb0] via-[#1dd3f0] to-[#149bb0] bg-[length:200%_auto] bg-clip-text text-transparent ${className}`}
        animate={{
          backgroundPosition: ["0% center", "200% center"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span
      className={`bg-gradient-to-r from-[#149bb0] to-[#1dd3f0] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
