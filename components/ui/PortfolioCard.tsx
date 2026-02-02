"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  year: string;
  image: string;
  href?: string;
  className?: string;
}

export function PortfolioCard({
  title,
  year,
  image,
  href = "#",
  className,
}: PortfolioCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group flex flex-col gap-[16px] cursor-pointer focus-ring",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative w-[373px] h-[373px] rounded-[8px] overflow-hidden bg-[#22252b]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#149bb0]/0 group-hover:bg-[#149bb0]/10 transition-colors duration-300" />
      </div>

      {/* Card Info */}
      <div className="flex flex-col gap-[4px] w-full">
        <h3 className="text-[20px] font-semibold leading-[34px] text-white group-hover:text-[#149bb0] transition-colors">
          {title}
        </h3>
        <span className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
          {year}
        </span>
      </div>
    </motion.a>
  );
}
