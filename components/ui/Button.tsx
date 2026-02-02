"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-[8px] font-semibold rounded-full transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-white text-black hover:bg-neutral-100 active:bg-neutral-200",
      secondary:
        "bg-[#149bb0] text-white hover:bg-[#0e8a9d] active:bg-[#0a7a8a]",
      outline:
        "border border-[#414651] bg-transparent text-[#a4a7ae] hover:border-white hover:text-white",
      ghost:
        "bg-transparent text-[#535862] hover:bg-neutral-100 hover:text-[#181d27]",
    };

    const sizes = {
      sm: "h-[48px] px-[16px] text-[14px] leading-[24px] tracking-[-0.42px]",
      md: "h-[56px] p-[8px] text-[16px] leading-[30px] tracking-[-0.48px]",
      lg: "h-[64px] px-[24px] text-[18px] leading-[32px] tracking-[-0.54px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
