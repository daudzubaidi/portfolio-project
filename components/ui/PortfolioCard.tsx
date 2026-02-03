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
      <div className="relative w-[361px] h-[361px] rounded-[8px] overflow-hidden bg-[#22252b] lg:w-[373px] lg:h-[373px]">
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
        <h3 className="text-[18px] font-semibold leading-[32px] tracking-[-0.54px] text-white group-hover:text-[#149bb0] transition-colors lg:text-[20px] lg:leading-[34px] lg:tracking-normal">
          {title}
        </h3>
        <span className="text-[14px] font-normal leading-[28px] text-[#a4a7ae] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
          {year}
        </span>
      </div>
    </motion.a>
  );
}
