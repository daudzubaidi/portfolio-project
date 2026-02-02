"use client";

import { JobCard } from "@/components/ui/JobCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Frontend Developer",
    period: "2025- Present",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Airbnb",
    companyLogo: (
      <div className="absolute inset-[8.33%_-0.13%_8.33%_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/logo-airbnb.svg"
          alt="Airbnb"
          className="block max-w-none size-full"
        />
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    period: "2025- Present",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Dribbble",
    companyLogo: (
      <div className="absolute inset-[18.89%_0.48%_24.39%_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/logo-dribbble.svg"
          alt="Dribbble"
          className="block max-w-none size-full"
        />
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    period: "2025- Present",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    company: "Zoom",
    companyLogo: (
      <div className="absolute bottom-1/4 left-0 right-[0.1%] top-[29.17%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/logo-zoom.svg"
          alt="Zoom"
          className="block max-w-none size-full"
        />
      </div>
    ),
  },
];

export function Experience() {
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  const maxIndex = Math.max(0, experiences.length - 1);
  const canScrollPrev = activeIndex > 0;
  const canScrollNext = activeIndex < maxIndex;
  const scrollProgress = maxIndex > 0 ? activeIndex / maxIndex : 0;

  const scroll = (direction: "prev" | "next") => {
    setActiveIndex((prev) => {
      if (direction === "prev") {
        return Math.max(0, prev - 1);
      }
      return Math.min(maxIndex, prev + 1);
    });
  };

  const updateSizes = () => {
    if (progressTrackRef.current) {
      setTrackWidth(progressTrackRef.current.offsetWidth);
    }
    if (firstCardRef.current) {
      setCardWidth(firstCardRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateSizes();
    };

    updateSizes();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="dark-section py-[80px] px-4 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[16px] w-full"
        >
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white leading-[60px] tracking-[-2.4px]">
            My Journey in Tech
          </h2>
          <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
            From small gigs to real-world challenges — each experience helped me
            grow as a builder and problem-solver.
          </p>
        </motion.div>

        {/* Experience Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-[48px]"
        >
          {/* Cards Row */}
          <div className="overflow-hidden">
            <div
              className="flex gap-[20px] transition-transform duration-300"
              style={{
                transform: `translateX(-${
                  activeIndex * (cardWidth + 20)
                }px)`,
              }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={index === 0 ? firstCardRef : undefined}
                  className="flex-shrink-0 w-[350px] lg:w-[564px]"
                >
                  <JobCard {...exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Line */}
          <div className="relative w-full h-[4px]" ref={progressTrackRef}>
            <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-px bg-[#22252b]" />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[4px] bg-[#fdfdfd] transition-transform duration-300"
              style={{
                width: `${Math.min(549, trackWidth || 0)}px`,
                transform: `translateX(${Math.max(
                  0,
                  (trackWidth - Math.min(549, trackWidth || 0)) * scrollProgress
                )}px) translateY(-50%)`,
              }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => scroll("prev")}
              disabled={!canScrollPrev}
              className={`w-[118px] h-[48px] border border-[#22252b] text-[16px] font-semibold leading-[30px] tracking-[-0.48px] flex items-center justify-center ${
                canScrollPrev ? "text-[#fdfdfd]" : "text-[#252b37]"
              }`}
            >
              Prev
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className={`w-[118px] h-[48px] border border-[#22252b] text-[16px] font-semibold leading-[30px] tracking-[-0.48px] flex items-center justify-center ${
                canScrollNext ? "text-[#fdfdfd]" : "text-[#252b37]"
              }`}
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
