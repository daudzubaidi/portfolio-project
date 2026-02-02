"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-[6px]">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[14px] font-normal leading-[28px] text-[#fdfdfd]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full h-[48px] px-[16px] py-[8px] rounded-none",
            "bg-transparent border border-[#22252b]",
            "text-[16px] font-medium leading-[30px] tracking-[-0.48px] text-[#fdfdfd]",
            "placeholder:text-[16px] placeholder:font-medium placeholder:leading-[30px] placeholder:tracking-[-0.48px] placeholder:text-[#535862]",
            "focus:outline-none focus:border-[#149bb0]",
            "transition-colors duration-200",
            error && "border-[var(--color-error-primary)]",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-sm text-[var(--color-error-primary)]">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
