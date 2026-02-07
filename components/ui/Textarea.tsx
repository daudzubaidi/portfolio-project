"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-[6px]">
        {label && (
          <label
            htmlFor={textareaId}
            className="type-body-sm text-neutral-25 font-normal"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "h-[134px] min-h-[134px] w-full resize-none rounded-none px-[16px] py-[8px]",
            "border-stroke-700 border bg-transparent",
            "type-body-md text-neutral-25 font-medium",
            "placeholder:text-[16px] placeholder:leading-[30px] placeholder:font-medium placeholder:tracking-[-0.48px] placeholder:text-neutral-600",
            "focus:border-brand-500 focus:outline-none",
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

Textarea.displayName = "Textarea";

export { Textarea };
