"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

const profileImage =
  "/figma-assets/0fc6018c3052221941b352de43dc34d8a88c400e.png";
const messageIcon = "/figma-assets/690fcb570bc73da69435a3a447c6f5dd914b2741.svg";
const messageIconActive =
  "/figma-assets/c04c2f130ab8b9bfe8dd80a91547f87d6eea2988.svg";

interface FAQItem {
  question: string;
  answer: string;
  active?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I'm open to freelance and remote opportunities. I enjoy working with clients globally and can adapt to different time zones and communication styles.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    active: true,
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely! I specialize in pixel-perfect conversion from design files to responsive, production-ready code. I pay close attention to spacing, typography, and animations.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Yes, I work well with backend developers and cross-functional teams. I'm familiar with REST APIs, GraphQL, and can integrate frontend with various backend services.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "I'm currently open to both full-time positions and contract work. Feel free to reach out to discuss your specific needs and how I can contribute to your team.",
  },
  {
    question: "Do you help with website maintenance after launch?",
    answer:
      "Yes, I can provide ongoing support, updates, and performance monitoring to keep your site healthy after release.",
  },
  {
    question: "How do you handle handoff from design to code?",
    answer:
      "I translate designs into clean, reusable components with careful attention to spacing, typography, and responsive behavior.",
  },
  {
    question: "Can you optimize existing pages for better performance?",
    answer:
      "Absolutely. I focus on Core Web Vitals, asset optimization, and code improvements to boost speed and UX.",
  },
];

export function FAQ() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const firstCard = container.firstElementChild as HTMLElement | null;
    const styles = window.getComputedStyle(container);
    const gapValue =
      parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const cardWidth = firstCard?.offsetWidth ?? 0;
    const scrollAmount = cardWidth + gapValue;

    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    window.setTimeout(updateScrollState, 150);
  };

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="faq"
      className="dark-section px-[20px] py-[40px] lg:py-[80px] lg:px-[120px]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[24px] lg:gap-[48px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[25px] lg:gap-0 w-full">
          <div className="flex flex-col gap-[8px] w-full lg:w-[534.5px]">
            <h2 className="text-[32px] font-bold text-white leading-[42px] tracking-[-1.28px] lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
              Still Got Questions?
            </h2>
            <p className="text-[14px] font-normal leading-[28px] text-[#a4a7ae] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
              I&apos;ve listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>

          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              onClick={() => scroll("prev")}
              disabled={!canScrollPrev}
              className={`w-[118px] h-[40px] border border-[#22252b] text-[14px] font-semibold leading-[28px] flex items-center justify-center p-[8px] lg:h-[48px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px] ${
                canScrollPrev ? "text-[#fdfdfd]" : "text-[#252b37]"
              }`}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className={`w-[118px] h-[40px] border border-[#22252b] text-[14px] font-semibold leading-[28px] flex items-center justify-center p-[8px] lg:h-[48px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px] ${
                canScrollNext ? "text-[#fdfdfd]" : "text-[#252b37]"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className="flex w-full gap-[20px] items-start overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-row md:flex-wrap md:items-stretch md:justify-start lg:flex-nowrap lg:items-center"
        >
          {faqs.map((faq) =>
            faq.active ? (
              <div
                key={faq.question}
                className="bg-[#075864] border border-[#22252b] flex flex-col h-[356px] items-start justify-between p-[15px] shrink-0 w-full sm:w-[379px] lg:h-[466px] lg:p-[20px] lg:w-[379px]"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="relative rounded-[100px] shrink-0 size-[80px] bg-[#149bb0] overflow-hidden">
                    <div className="absolute left-[calc(50%+3px)] top-[4px] h-[90px] w-[74.694px] -translate-x-1/2">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src={profileImage}
                          alt=""
                          className="absolute h-full left-[-11.31%] max-w-none top-0 w-[120.49%]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[40px]">
                    <img
                      src={messageIconActive}
                      alt=""
                      className="block size-full"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[10px] items-start justify-center w-full text-[#fdfdfd] lg:gap-[12px]">
                  <h3 className="text-[24px] font-semibold leading-[36px] tracking-[-0.96px] w-full lg:text-[28px] lg:leading-[38px] lg:tracking-[-1.12px]">
                    {faq.question}
                  </h3>
                  <p className="text-[14px] font-medium leading-[28px] w-full lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={faq.question}
                className="border border-[#22252b] flex flex-col h-[356px] items-start justify-between p-[15px] shrink-0 w-full sm:w-[252px] lg:h-[466px] lg:p-[20px] lg:w-[252px]"
              >
                <div className="relative shrink-0 size-[40px]">
                  <img
                    src={messageIcon}
                    alt=""
                    className="block size-full"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col items-start justify-center w-full">
                  <h3 className="text-[24px] font-semibold leading-[36px] tracking-[-0.96px] text-[#fdfdfd] w-full lg:text-[28px] lg:leading-[38px] lg:tracking-[-1.12px]">
                    {faq.question}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
