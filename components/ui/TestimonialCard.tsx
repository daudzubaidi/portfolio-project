"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialCardProps {
  stat?: string;
  statLabel?: string;
  rating?: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
  variant?: "large" | "medium" | "small";
  className?: string;
}

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={filled ? "#F59E0B" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1L12.39 6.26L18 7.27L14 11.14L14.76 17L10 14.27L5.24 17L6 11.14L2 7.27L7.61 6.26L10 1Z"
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 16H8V28H16V36H8C8 36 8 28 8 28"
      stroke="#717680"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
    />
    <path
      d="M40 16H28V28H36V36H28C28 36 28 28 28 28"
      stroke="#717680"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
    />
  </svg>
);

export function TestimonialCard({
  stat,
  statLabel,
  rating = 5,
  quote,
  authorName,
  authorRole,
  authorImage,
  variant = "medium",
  className,
}: TestimonialCardProps) {
  const isLarge = variant === "large";
  const isSmall = variant === "small";

  return (
    <div
      className={cn(
        "flex flex-col p-5 rounded-xl border border-[var(--color-neutral-800)]",
        "bg-[var(--color-neutral-950)]/50 backdrop-blur-sm",
        isLarge && "row-span-2",
        className
      )}
    >
      {/* Stat (if provided) */}
      {stat && (
        <div className="mb-3">
          <span className="text-4xl font-bold text-white">{stat}</span>
          {statLabel && (
            <p className="text-lg font-medium text-white mt-1">{statLabel}</p>
          )}
        </div>
      )}

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < rating} />
        ))}
      </div>

      {/* Quote */}
      <p
        className={cn(
          "text-[var(--color-neutral-400)] leading-relaxed flex-grow",
          isSmall ? "text-sm" : "text-base"
        )}
      >
        {quote}
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          {authorImage ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={authorImage}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-[var(--color-neutral-700)] flex items-center justify-center">
              <span className="text-white font-medium">
                {authorName.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="text-base font-medium text-white">{authorName}</p>
            <p className="text-sm text-[var(--color-neutral-500)]">
              {authorRole}
            </p>
          </div>
        </div>
        <QuoteIcon />
      </div>
    </div>
  );
}
