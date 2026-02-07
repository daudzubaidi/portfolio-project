"use client";

import { Button } from "@/components/ui/Button";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const tools = [
  // Frontend Development
  { name: "React.js", percentage: 95, icon: "/images/tech-react.svg", category: "Frontend" },
  { name: "Next.js", percentage: 90, icon: "/images/tech-nextjs.svg", category: "Frontend" },
  { name: "Vue.js", percentage: 90, icon: "/images/tech-vue.svg", category: "Frontend" },
  { name: "Nuxt.js", percentage: 85, icon: "/images/tech-vue.svg", category: "Frontend" },
  { name: "Tailwind CSS", percentage: 95, icon: "/images/tech-tailwind.svg", category: "Frontend" },
  { name: "Chakra UI", percentage: 85, icon: "/images/tech-react.svg", category: "Frontend" },
  { name: "Bootstrap", percentage: 90, icon: "/images/tech-css-new.svg", category: "Frontend" },
  // Backend Development
  { name: "Java Spring", percentage: 75, icon: "/images/tech-js-new.svg", category: "Backend" },
  { name: "PHP CodeIgniter", percentage: 80, icon: "/images/tech-html-new.svg", category: "Backend" },
  { name: "Node.js", percentage: 80, icon: "/images/tech-nodejs.svg", category: "Backend" },
  // Mobile Development
  { name: "React Native", percentage: 80, icon: "/images/tech-react.svg", category: "Mobile" },
  { name: "Android Studio", percentage: 75, icon: "/images/tech-js-new.svg", category: "Mobile" },
  // Testing & Debugging
  { name: "Jest", percentage: 85, icon: "/images/tech-ts-new.svg", category: "Testing" },
  { name: "Playwright", percentage: 80, icon: "/images/tech-ts-new.svg", category: "Testing" },
  { name: "Sentry", percentage: 80, icon: "/images/tech-js-new.svg", category: "Testing" },
  { name: "GCP Logging", percentage: 75, icon: "/images/tech-nodejs.svg", category: "Testing" },
  // Databases
  { name: "MySQL", percentage: 80, icon: "/images/tech-mongodb-new.svg", category: "Database" },
  { name: "SQLite", percentage: 75, icon: "/images/tech-mongodb-new.svg", category: "Database" },
  // Version Control
  { name: "Git", percentage: 95, icon: "/images/tech-nodejs.svg", category: "Version Control" },
  { name: "SVN", percentage: 70, icon: "/images/tech-nodejs.svg", category: "Version Control" },
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
          className={`pointer-events-none absolute inset-0 flex items-center gap-[3px] transition-opacity duration-300 ${
            isInView ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="flex w-full items-center gap-[3px]">
            <div className="flex items-center gap-[3px]">
              <div className="flex h-[60px] w-[60px] items-center justify-center p-[10px]">
                <div className="h-[40px] w-[40px] animate-pulse rounded-full bg-neutral-800" />
              </div>
              <div className="h-[14px] w-[120px] animate-pulse rounded-full bg-neutral-800" />
            </div>
            <div className="flex flex-1 justify-end">
              <div className="h-[14px] w-[48px] animate-pulse rounded-full bg-neutral-800" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          <div className="flex w-full items-center gap-[3px]">
            <div className="flex items-center gap-[3px]">
              {/* Icon without circle border - per Figma */}
              <div className="flex h-[60px] w-[60px] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-[35px] w-[35px] object-contain lg:h-[44px] lg:w-[44px]"
                />
              </div>
              <span className="text-center text-[16px] leading-[30px] font-normal tracking-[-0.48px] text-white lg:text-[20px] lg:leading-[34px] lg:tracking-[-0.6px]">
                {tool.name}
              </span>
            </div>
            <span className="flex-1 text-right text-[16px] leading-[30px] font-bold tracking-[-0.32px] text-white lg:text-[20px] lg:leading-[34px] lg:tracking-normal">
              {tool.percentage}%
            </span>
          </div>
        </motion.div>
      </div>

      {index < tools.length - 1 && (
        <div className="mt-[15px] h-px w-full bg-neutral-800" />
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
    <section
      id="skills"
      className="dark-section px-4 py-[40px] lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[191px]">
          {/* Left Column - Title & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex shrink-0 flex-col gap-[24px] lg:w-[367px] lg:justify-between lg:gap-0"
          >
            <div className="flex max-w-[367px] flex-col gap-[8px] lg:gap-[16px]">
              <h2 className="type-display-mobile font-bold text-white lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
                Technical Skills
              </h2>
              <p className="type-body-sm font-normal tracking-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
                Frontend, backend, and mobile technologies I&apos;ve mastered over 7+ years of professional experience.
              </p>
            </div>

            <Button
              variant="secondary"
              size="md"
              leftIcon={<MailIcon />}
              className="mt-0 h-[48px] w-full rounded-none p-[8px] text-[14px] leading-[28px] lg:h-[56px] lg:text-[16px] lg:leading-[30px]"
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
            className="flex flex-1 gap-[24px]"
          >
            {/* Vertical scroll indicator on left (desktop only) - from Figma */}
            <div className="hidden shrink-0 lg:block">
              <div className="relative h-[529px] w-[4px]">
                <div className="absolute top-0 left-1/2 h-[508px] w-[1px] -translate-x-1/2 bg-neutral-800" />
                <div
                  className="absolute left-1/2 h-[193px] w-[4px] -translate-x-1/2 bg-white transition-all duration-200"
                  style={{ top: `${indicatorTop}px` }}
                />
              </div>
            </div>

            {/* Scrollable container with fixed height - per Figma 510px */}
            <div
              ref={scrollContainerRef}
              className="flex w-full flex-col gap-[15px] lg:h-[510px] lg:w-[618px] lg:overflow-y-auto lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden"
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
