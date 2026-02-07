"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface JobCardProps {
  title: string;
  period: string;
  description: string;
  company: string;
  tech?: string;
  companyLogo?: React.ReactNode;
  className?: string;
}

const WorkIcon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/images/experience/icon-work.svg"
    alt=""
    className="h-[24px] w-[24px]"
  />
);

export function JobCard({
  title,
  period,
  description,
  company,
  tech,
  companyLogo,
  className,
}: JobCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(20, 155, 176, 0.5)" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "border-stroke-700 group relative flex flex-col gap-[20px] border bg-neutral-950/50 p-[16px] backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900/50 lg:p-[20px]",
        className
      )}
    >
      {/* Accent bar with glow effect */}
      <div className="absolute top-[23px] left-[-1px] h-[68px] w-[3px] overflow-visible">
        <div className="h-full w-full bg-[#149bb0]" />
        <div className="absolute inset-0 bg-[#149bb0] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
      </div>

      {/* Header */}
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex flex-1 flex-col gap-[4px]">
          <h3 className="text-neutral-25 text-[16px] leading-[30px] font-bold tracking-[-0.32px] transition-colors duration-300 group-hover:text-[#149bb0] lg:text-[20px] lg:leading-[34px] lg:tracking-normal">
            {title}
          </h3>
          <p className="type-body-sm text-[#149bb0] font-medium lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
            {period}
          </p>
        </div>
        <div className="h-[24px] w-[24px] transition-transform duration-300 group-hover:scale-110">
          <WorkIcon />
        </div>
      </div>

      {/* Company name */}
      <div className="flex items-center gap-2">
        <span className="text-[14px] font-semibold text-white">{company}</span>
      </div>

      {/* Divider */}
      <div className="bg-stroke-700 h-px w-full transition-colors duration-300 group-hover:bg-[#149bb0]/30" />

      {/* Description */}
      <p className="type-body-sm min-w-full font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
        {description}
      </p>

      {/* Tech Stack */}
      {tech && (
        <div className="flex flex-wrap gap-2">
          {tech.split(", ").map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#149bb0]/30 bg-[#149bb0]/10 px-3 py-1 text-[12px] font-medium text-[#149bb0] transition-all duration-300 group-hover:border-[#149bb0]/50 group-hover:bg-[#149bb0]/20"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Company Logo */}
      <div className="relative h-[48px] w-[128px] overflow-clip">
        {companyLogo || null}
      </div>
    </motion.div>
  );
}
