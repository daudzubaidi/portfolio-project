"use client";

import { JobCard } from "@/components/ui/JobCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Freelance Software Engineer (Remote)",
    period: "Mar 2025 - Present",
    description:
      "Delivered production features across 3 codebases: CFRS (Java + FE), procube-kansa-sve (Svelte), satoma-renewal (Next.js/React). Built core audit/control workflow UIs including navigation, approval queue, document list, read-only viewers, and financial analysis. Collaborated with Japan-based stakeholders, translating requirements into shippable tasks/PRs.",
    company: "LakeSuccess Co., Ltd (Japan)",
    tech: "Java, Svelte, Next.js, React, Git, Backlog",
    companyLogo: (
      <div className="absolute inset-[8.33%_-0.13%_8.33%_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/lakesuccess.png"
          alt="LakeSuccess"
          className="block size-full max-w-fit"
        />
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    period: "Jun 2021 - Feb 2025",
    description:
      "Recognized for consistently contributing to strategic projects. Supported Core Banking Migration Project achieving 95% reduction in operational costs (30% of Hijra Group's monthly revenue). Developed robust back-office dashboard for tellers and customer service using React.js and Next.js, reducing frontend error rates to <10%. Assisted in automated testing with Jest and Playwright, contributing to 40% reduction in regression issues. Led UI/UX optimizations reducing page load times by 30%.",
    company: "PT. BPRS Hijra Alami - Banking Industry",
    tech: "React.js, Next.js, Jest, Playwright",
    companyLogo: (
      <div className="absolute inset-[18.89%_0.48%_24.39%_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/hijrabank.webp"
          alt="Hijra Alami"
          className="block size-full max-w-screen"
        />
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    period: "Jan 2020 - Jun 2021",
    description:
      "Developed multiple web applications including e-commerce platform, supply chain dashboard, and advertisement websites using React.js. Built and optimized MIFX Backoffice for PT. Monex Investindo Futures using PHP YII, enhancing system stability and streamlining operational processes in the forex trading industry. Improved system performance and optimized UI/UX across projects.",
    company: "PT. Monex Investindo Futures & PT. DXTR ASIA",
    tech: "React.js, PHP YII",
    companyLogo: (
      <div className="absolute top-[29.17%] right-[0.1%] bottom-1/4 left-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/MIFX.webp"
          alt="Monex"
          className="block size-full max-w-screen"
        />
      </div>
    ),
  },
  {
    title: "Frontend Web & Android Developer",
    period: "Dec 2018 - Jan 2020",
    description:
      "Developed attendance system with geolocation tracking using Android Studio, enhancing employee monitoring accuracy. Created CRM scheduling application and reimbursement system for improved operational efficiency. Built Supply Chain Management system for DHL using .NET. Worked onsite at PT Adaro developing tracking system application.",
    company: "PT. Abishar Technology - IT Consulting",
    tech: "Android Studio, .NET, React.js",
    companyLogo: (
      <div className="absolute inset-[8.33%_-0.13%_8.33%_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/experience/abishar.png"
          alt="Abishar"
          className="block size-full max-w-screen"
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
    <section className="dark-section px-[16px] py-[40px] lg:px-[120px] lg:py-[80px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[24px] lg:gap-[48px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-[8px]"
        >
          <h2 className="text-[32px] leading-[42px] font-bold tracking-[-1.28px] text-white lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
            Professional Experience
          </h2>
          <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
            7+ years of experience across banking, forex trading, IT consulting, and e-commerce industries.
          </p>
        </motion.div>

        {/* Experience Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-[16px] lg:gap-[48px]"
        >
          {/* Cards Row */}
          <div className="overflow-hidden">
            <div
              className="flex gap-[20px] transition-transform duration-300"
              style={{
                transform: `translateX(-${activeIndex * (cardWidth + 20)}px)`,
              }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={index === 0 ? firstCardRef : undefined}
                  className="w-full flex-shrink-0 lg:w-[564px]"
                >
                  <JobCard {...exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Line */}
          <div
            className="relative hidden h-[4px] w-full lg:block"
            ref={progressTrackRef}
          >
            <div className="bg-stroke-700 absolute inset-0 top-1/2 h-px -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-[4px] -translate-y-1/2 bg-[#fdfdfd] transition-transform duration-300"
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
              className={`border-stroke-700 flex h-[40px] w-[118px] items-center justify-center border text-[14px] leading-[28px] font-semibold tracking-[-0.32px] lg:h-[48px] lg:w-[118px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px] ${
                canScrollPrev ? "text-neutral-25" : "text-neutral-800"
              }`}
            >
              Prev
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className={`border-stroke-700 flex h-[40px] w-[118px] items-center justify-center border text-[14px] leading-[28px] font-semibold tracking-[-0.32px] lg:h-[48px] lg:w-[118px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px] ${
                canScrollNext ? "text-neutral-25" : "text-neutral-800"
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
