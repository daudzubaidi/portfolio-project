"use client";

import { cn } from "@/lib/utils";

interface JobCardProps {
  title: string;
  period: string;
  description: string;
  company: string;
  companyLogo?: React.ReactNode;
  className?: string;
}

const WorkIcon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/images/experience/icon-work.svg"
    alt=""
    className="w-[24px] h-[24px]"
  />
);

export function JobCard({
  title,
  period,
  description,
  company,
  companyLogo,
  className,
}: JobCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-[20px] p-[20px] border border-[#22252b]",
        className
      )}
    >
      {/* Accent bar */}
      <div className="absolute left-[-1px] top-[23px] w-[3px] h-[68px] bg-[#149bb0]" />

      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-[4px] w-[194px]">
          <h3 className="text-[20px] font-bold leading-[34px] text-[#fdfdfd]">
            {title}
          </h3>
          <p className="text-[16px] font-normal leading-[30px] text-[#fdfdfd] tracking-[-0.48px]">
            {period}
          </p>
        </div>
        <div className="w-[24px] h-[24px]">
          <WorkIcon />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#22252b]" />

      {/* Description */}
      <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px] min-w-full">
        {description}
      </p>

      {/* Company Logo */}
      <div className="relative w-[128px] h-[48px] overflow-clip">
        {companyLogo || (
          <span className="text-2xl font-bold text-white">{company}</span>
        )}
      </div>
    </div>
  );
}
