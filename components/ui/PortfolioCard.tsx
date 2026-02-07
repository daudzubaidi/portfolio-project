"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  year: string;
  image: string;
  href?: string;
  tech?: string;
  client?: string;
  className?: string;
}

export function PortfolioCard({
  title,
  year,
  image,
  href = "#",
  tech,
  className,
}: PortfolioCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group focus-ring flex cursor-pointer flex-col gap-[16px]",
        className
      )}
    >
      {/* Image Container - restored original dimensions */}
      <div className="bg-stroke-700 relative h-[361px] w-[361px] overflow-hidden rounded-[8px] lg:h-[373px] lg:w-[373px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="bg-brand-500/0 group-hover:bg-brand-500/10 absolute inset-0 transition-colors duration-300" />

        {/* Tech badge - shown on hover */}
        {tech && (
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-block rounded-full bg-[#149bb0]/90 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
              {tech}
            </span>
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="flex w-full flex-col gap-[4px]">
        <h3 className="type-body-lg group-hover:text-brand-500 font-semibold text-white transition-colors lg:text-[20px] lg:leading-[34px] lg:tracking-normal">
          {title}
        </h3>
        <span className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
          {year}
        </span>
      </div>
    </motion.a>
  );
}
