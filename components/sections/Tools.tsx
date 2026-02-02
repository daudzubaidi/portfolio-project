"use client";

import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const tools = [
  { name: "HTML", percentage: 100, icon: "/images/tech-html-new.svg" },
  { name: "CSS", percentage: 90, icon: "/images/tech-css-new.svg" },
  { name: "Javascripct", percentage: 90, icon: "/images/tech-js-new.svg" },
  { name: "Typescript", percentage: 80, icon: "/images/tech-ts-new.svg" },
  { name: "React", percentage: 85, icon: "/images/tech-react.svg" },
  { name: "Next.js", percentage: 85, icon: "/images/tech-nextjs.svg" },
  { name: "Vue", percentage: 75, icon: "/images/tech-vue.svg" },
  { name: "Svelte", percentage: 70, icon: "/images/tech-svelte.svg" },
  { name: "Tailwind CSS", percentage: 90, icon: "/images/tech-tailwind.svg" },
  { name: "Node.js", percentage: 80, icon: "/images/tech-nodejs.svg" },
  { name: "Sequalize", percentage: 80, icon: "/images/tech-sequelize-new.svg" },
  { name: "Mongo DB", percentage: 75, icon: "/images/tech-mongodb-new.svg" },
];

type ToolItem = (typeof tools)[number];

function ToolRow({ tool, index }: { tool: ToolItem; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.4 });

  return (
    <div>
      <div ref={rowRef} className="relative">
        {/* Loading skeleton shown before the row animates in */}
        <div
          className={`absolute inset-0 flex items-center gap-[3px] transition-opacity duration-300 pointer-events-none ${
            isInView ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="flex items-center gap-[3px] w-full">
            <div className="flex items-center gap-[3px]">
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#252b37] animate-pulse" />
              </div>
              <div className="h-[14px] w-[120px] rounded-full bg-[#252b37] animate-pulse" />
            </div>
            <div className="flex-1 flex justify-end">
              <div className="h-[14px] w-[48px] rounded-full bg-[#252b37] animate-pulse" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          <div className="flex items-center gap-[3px] w-full">
            <div className="flex items-center gap-[3px]">
              {/* Icon without circle border - per Figma */}
              <div className="w-[60px] h-[60px] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-[44px] h-[44px] object-contain"
                />
              </div>
              <span className="text-[20px] font-normal leading-[34px] text-white tracking-[-0.6px] text-center">
                {tool.name}
              </span>
            </div>
            <span className="flex-1 text-[20px] font-bold leading-[34px] text-white text-right">
              {tool.percentage}%
            </span>
          </div>
        </motion.div>
      </div>

      {index < tools.length - 1 && (
        <div className="w-full h-px bg-[#252b37] mt-[15px]" />
      )}
    </div>
  );
}

// Mail icon - white color for teal button (from Figma screenshot)
const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Tools() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const percentage = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollPercentage(percentage);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Calculate scroll indicator position
  const trackHeight = 508; // Total track height
  const indicatorHeight = 193; // Indicator height
  const maxScroll = trackHeight - indicatorHeight; // 315px max movement
  const indicatorTop = scrollPercentage * maxScroll;

  return (
    <section id="skills" className="dark-section py-[80px] px-4 lg:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[80px] lg:gap-[191px]">
          {/* Left Column - Title & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between shrink-0 lg:w-[367px]"
          >
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-white leading-[60px] tracking-[-2.4px]">
                Tools I Use to Build
              </h2>
              <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
                From code to design — here&apos;s the tech that helps me turn
                ideas into real products.
              </p>
            </div>

            <Button
              variant="secondary"
              size="md"
              leftIcon={<MailIcon />}
              className="w-full h-[56px] mt-8 lg:mt-0 rounded-none"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Send Message
            </Button>
          </motion.div>

          {/* Right Column - Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-[24px] flex-1"
          >
            {/* Vertical scroll indicator on left (desktop only) - from Figma */}
            <div className="hidden lg:block shrink-0">
              <div className="relative h-[529px] w-[4px]">
                <div className="absolute left-1/2 top-0 h-[508px] w-[1px] -translate-x-1/2 bg-[#252b37]" />
                <div 
                  className="absolute left-1/2 h-[193px] w-[4px] -translate-x-1/2 bg-white transition-all duration-200"
                  style={{ top: `${indicatorTop}px` }}
                />
              </div>
            </div>

            {/* Scrollable container with fixed height - per Figma 510px */}
            <div 
              ref={scrollContainerRef}
              className="flex flex-col gap-[15px] w-full lg:w-[618px] lg:h-[510px] lg:overflow-y-auto lg:[scrollbar-width:none] lg:[-ms-overflow-style:none] lg:[&::-webkit-scrollbar]:hidden"
            >
              {tools.map((tool, index) => (
                <ToolRow key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
