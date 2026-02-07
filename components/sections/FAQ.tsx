"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

const profileImage =
  "/figma-assets/0fc6018c3052221941b352de43dc34d8a88c400e.png";
const messageIcon =
  "/figma-assets/690fcb570bc73da69435a3a447c6f5dd914b2741.svg";
const messageIconActive =
  "/figma-assets/c04c2f130ab8b9bfe8dd80a91547f87d6eea2988.svg";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do you ensure projects ship on time?",
    answer:
      "I break down work into measurable milestones and communicate blockers early — not when it's too late. At Hijra Alami, I delivered a core banking migration that saved 95% operational costs, on schedule.",
  },
  {
    question: "How do you handle remote collaboration?",
    answer:
      "Currently working with a Japan-based team at LakeSuccess Co., Ltd. I'm disciplined with async communication, clear documentation, and making sure nothing blocks progress across timezones.",
  },
  {
    question: "What if requirements change mid-project?",
    answer:
      "It happens. I focus on understanding the WHY behind changes, then propose solutions that balance new needs with existing architecture. No drama, just problem-solving.",
  },
  {
    question: "How much supervision do you need?",
    answer:
      "Minimal. Give me the problem and context, I'll figure out the solution. I ask smart questions upfront, then execute independently. You'll get updates, not excuses.",
  },
  {
    question: "What makes you different?",
    answer:
      "I've shipped production systems in regulated industries — banking, fintech, healthcare. I understand that code is just a means to an end. The real job is solving business problems.",
  },
  {
    question: "Can you handle the entire development process?",
    answer:
      "Yes. From understanding requirements, translating Figma to code, API integration, testing with Jest & Playwright, to deployment. I own the full cycle, not just pieces of it.",
  },
  {
    question: "What's your track record?",
    answer:
      "95% cost reduction at Hijra Alami. 40% fewer bugs through automated testing. 30% faster page loads. These aren't just numbers — they're business impact I delivered.",
  },
  {
    question: "Why should I hire you over other developers?",
    answer:
      "Because I don't just write code — I understand your users, your business constraints, and what success looks like. 7 years across banking, fintech & healthcare taught me that.",
  },
];

export function FAQ() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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
    const gapValue = parseFloat(styles.columnGap || styles.gap || "0") || 0;
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
      className="dark-section px-[20px] py-[40px] lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[24px] lg:gap-[48px]">
        {/* Header */}
        <div className="flex w-full flex-col justify-between gap-[25px] lg:flex-row lg:items-center lg:gap-0">
          <div className="flex w-full flex-col gap-[8px] lg:w-[534.5px]">
            <h2 className="type-display-mobile font-bold text-white lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
              Still Got Questions?
            </h2>
            <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
              I&apos;ve listed answers to questions I often get as a frontend
              developer.
            </p>
          </div>

          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              onClick={() => scroll("prev")}
              disabled={!canScrollPrev}
              className={`border-stroke-700 flex h-[40px] w-[118px] items-center justify-center border p-[8px] text-[14px] leading-[28px] font-semibold lg:h-[48px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px] ${
                canScrollPrev ? "text-neutral-25" : "text-neutral-800"
              }`}
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              disabled={!canScrollNext}
              className={`border-stroke-700 flex h-[40px] w-[118px] items-center justify-center border p-[8px] text-[14px] leading-[28px] font-semibold lg:h-[48px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px] ${
                canScrollNext ? "text-neutral-25" : "text-neutral-800"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className="flex w-full items-start gap-[20px] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] md:flex-row md:flex-wrap md:items-stretch md:justify-start lg:flex-nowrap lg:items-center [&::-webkit-scrollbar]:hidden"
        >
          {faqs.map((faq, index) =>
            index === activeIndex ? (
              <div
                key={faq.question}
                className="border-stroke-700 flex h-[356px] w-full shrink-0 flex-col items-start justify-between border bg-[#075864] p-[15px] transition-all duration-300 sm:w-[379px] lg:h-[466px] lg:w-[379px] lg:p-[20px]"
              >
                <div className="flex w-full items-start justify-between">
                  <div className="bg-brand-500 relative size-[80px] shrink-0 overflow-hidden rounded-[100px]">
                    <div className="absolute top-[4px] left-[calc(50%+3px)] h-[90px] w-[74.694px] -translate-x-1/2">
                      <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <img
                          src={profileImage}
                          alt=""
                          className="absolute top-0 left-[-11.31%] h-full w-[120.49%] max-w-none"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative size-[40px] shrink-0">
                    <img
                      src={messageIconActive}
                      alt=""
                      className="block size-full"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="text-neutral-25 flex w-full flex-col items-start justify-center gap-[10px] lg:gap-[12px]">
                  <h3 className="w-full text-[24px] leading-[36px] font-semibold tracking-[-0.96px] lg:text-[28px] lg:leading-[38px] lg:tracking-[-1.12px]">
                    {faq.question}
                  </h3>
                  <p className="w-full text-[14px] leading-[28px] font-medium lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ) : (
              <button
                type="button"
                key={faq.question}
                onClick={() => setActiveIndex(index)}
                className="border-stroke-700 flex h-[356px] w-full shrink-0 cursor-pointer flex-col items-start justify-between border p-[15px] text-left transition-all duration-300 hover:border-[#149bb0]/50 hover:bg-[#075864]/20 sm:w-[252px] lg:h-[466px] lg:w-[252px] lg:p-[20px]"
              >
                <div className="relative size-[40px] shrink-0">
                  <img
                    src={messageIcon}
                    alt=""
                    className="block size-full"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex w-full flex-col items-start justify-center">
                  <h3 className="text-neutral-25 w-full text-[24px] leading-[36px] font-semibold tracking-[-0.96px] lg:text-[28px] lg:leading-[38px] lg:tracking-[-1.12px]">
                    {faq.question}
                  </h3>
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
