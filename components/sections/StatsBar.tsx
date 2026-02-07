"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Cost Reduction Achieved" },
  { value: 40, suffix: "%", label: "Bug Reduction" },
  { value: 30, suffix: "%", label: "Faster Load Times" },
];

export function StatsBar() {
  return (
    <section className="dark-section border-y border-[#22252b] py-[40px] lg:py-[60px]">
      <div className="mx-auto max-w-[1200px] px-[16px] lg:px-[120px]">
        <div className="grid grid-cols-2 gap-[24px] lg:grid-cols-4 lg:gap-[48px]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center gap-[8px] text-center"
            >
              <div className="relative">
                <span className="text-[40px] font-bold leading-[1.2] text-white transition-colors duration-300 group-hover:text-[#149bb0] lg:text-[56px]">
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 scale-150 bg-[#149bb0]/0 blur-2xl transition-all duration-300 group-hover:bg-[#149bb0]/20" />
              </div>
              <span className="text-[14px] font-medium text-neutral-400 lg:text-[16px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
