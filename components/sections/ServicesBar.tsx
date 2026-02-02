"use client";

import { motion } from "framer-motion";

const services = [
  "App Development",
  "Website Development",
  "Pixel Perfect",
  "React Expert",
];

// Pre-calculated starburst line coordinates to avoid hydration mismatch
const starburstLines = [
  { x2: 55, y2: 30 },
  { x2: 51.65, y2: 42.5 },
  { x2: 42.5, y2: 51.65 },
  { x2: 30, y2: 55 },
  { x2: 17.5, y2: 51.65 },
  { x2: 8.35, y2: 42.5 },
  { x2: 5, y2: 30 },
  { x2: 8.35, y2: 17.5 },
  { x2: 17.5, y2: 8.35 },
  { x2: 30, y2: 5 },
  { x2: 42.5, y2: 8.35 },
  { x2: 51.65, y2: 17.5 },
];

// Decorative star/burst icon
const StarIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <g opacity="0.6">
      {/* Radial lines creating a starburst effect */}
      {starburstLines.map((line, i) => (
        <line
          key={i}
          x1="30"
          y1="30"
          x2={line.x2}
          y2={line.y2}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <circle cx="30" cy="30" r="4" fill="white" />
    </g>
  </svg>
);

export function ServicesBar() {
  return (
    <section className="bg-[#149bb0] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-[14px] px-[24px] py-[24px] h-[108px] overflow-x-auto scrollbar-hide"
      >
        <div className="flex items-center gap-[14px] min-w-max mx-auto">
          {services.map((service, index) => (
            <div key={service} className="flex items-center gap-[14px]">
              {index > 0 && <StarIcon />}
              <span className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white leading-[56px] tracking-[-2px] whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
