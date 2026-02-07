"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const STAR_ICON = "/images/testimonials/star.svg";
const QUOTE_ICON = "/images/testimonials/quote.svg";

const testimonialContent = {
  heading: "Trusted Voices",
  subheading:
    "Here's what people say about working with me — across projects, teams, and timelines.",
  cards: {
    large: {
      stat: "95%",
      statLabel: "Core Banking Migration: Automation Testing, Code Review, and Stability at Scale",
      quote:
        "I consistently relied on his technical proficiency and dedication. Daud played a crucial role in the successful Core Banking migration project. His contributions included creating comprehensive automation tests and conducting thorough code reviews, ensuring the quality and stability of the migrated systems. This project was a significant undertaking, and Daud's efforts were instrumental in completing it within a tight six-month timeframe. The project resulted in a remarkable 95% reduction in core banking expenses, translating to roughly 30% of Hijra Group's overall revenue. His expertise in this area has been invaluable to the team.",
      author: {
        name: "Head of Engineering - Hijra Bank",
        role: "PT. BPRS Hijra Alami",
        avatar: "/images/testimonials/avatar1.png",
      },
    },
    medium: {
      stat: "",
      statLabel: "Turning Ambiguous UI Requirements into “Perfect” Client Mockups",
      quote:
        "Your output was prompt and had few bugs, though my instructions were sometimes hard to imagine from a UI perspective. \n Our client always wanted a 'perfect' mock-up, and your output helped me respond to their requirements.",
      author: {
        name: "Yonemori San",
        role: "LakeSuccess Co., Ltd",
        avatar: "/images/testimonials/avatar2.png",
      },
    },
    small: [
      {
        quote:
          "Daud's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
        author: {
          name: "Head of infrastructure",
          role: "PT. Bukalapak",
          avatar: "/images/testimonials/avatar3.png",
        },
      },
      {
        quote:
          "Daud is a genuine force multiplier. He is highly dependable and technically strong. I strongly recommend him for roles that require excellence in execution, strong collaboration, and proactive leadership.",
        author: {
          name: "Senior Frontend Engineer",
          role: "PT. 99 Group",
          avatar: "/images/testimonials/avatar4.png",
        },
      },
    ],
  },
};

const Rating = () => (
  <div className="flex items-center gap-[4px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="size-[24px]">
        <img src={STAR_ICON} alt="" className="block size-full max-w-none" />
      </div>
    ))}
  </div>
);

const QuoteIcon = () => (
  <div className="size-[48px]">
    <img src={QUOTE_ICON} alt="" className="block size-full max-w-none" />
  </div>
);

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <div className="size-[48px]">
    <img src={src} alt={alt} className="block size-full max-w-none" />
  </div>
);

const AuthorInfo = ({ name, role }: { name: string; role: string }) => (
  <div className="text-neutral-25 flex w-full flex-col items-center text-[16px] leading-[30px] tracking-[-0.48px]">
    <p className="w-full font-semibold">{name}</p>
    <p className="w-full font-normal">{role}</p>
  </div>
);

export function Testimonials() {
  return (
    <section className="dark-section px-4 py-[80px] lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[48px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex w-full max-w-[655px] flex-col items-center gap-[16px] text-center"
        >
          <h2 className="text-[48px] leading-[60px] font-bold tracking-[-2.4px] text-white">
            {testimonialContent.heading}
          </h2>
          <p className="type-body-md font-normal text-neutral-400">
            {testimonialContent.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col gap-[20px] lg:flex-row"
        >
          {/* Left large card */}
          <div className="w-full lg:h-[751px] lg:w-[448px]">
            <div
              className="flex h-full w-full flex-col items-start justify-between border border-[#149bb0] bg-neutral-950 p-[20px]"
              style={{
                backgroundImage:
                  "linear-gradient(-45deg, rgba(20, 155, 176, 0) 31.86%, rgba(20, 155, 176, 0.14) 83.82%)",
              }}
            >
              <div className="flex w-full flex-col gap-[8px]">
                <p className="text-[36px] leading-[44px] font-bold tracking-[-0.72px] text-white">
                  {testimonialContent.cards.large.stat}
                </p>
                <p className="text-neutral-25 text-[24px] leading-[36px] font-bold">
                  {testimonialContent.cards.large.statLabel}
                </p>
                <Rating />
                <p className="type-body-md font-normal text-neutral-400">
                  {testimonialContent.cards.large.quote}
                </p>
              </div>

              <div className="flex w-full items-end justify-center gap-[113px]">
                <div className="flex flex-1 flex-col items-start justify-center gap-[16px]">
                  <Avatar
                    src={testimonialContent.cards.large.author.avatar}
                    alt={testimonialContent.cards.large.author.name}
                  />
                  <AuthorInfo
                    name={testimonialContent.cards.large.author.name}
                    role={testimonialContent.cards.large.author.role}
                  />
                </div>
                <QuoteIcon />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex w-full flex-1 flex-col gap-[20px] lg:w-[732px]">
            {/* Top medium card */}
            <div className="border-stroke-700 flex h-auto w-full flex-col items-start justify-between border bg-neutral-950 p-[20px] lg:h-[367px] lg:w-[732px]">
              <div className="flex w-full flex-col gap-[8px]">
                <p className="text-[36px] leading-[44px] font-bold tracking-[-0.72px] text-white">
                  {testimonialContent.cards.medium.stat}
                </p>
                <p className="type-body-lg text-neutral-25 font-semibold">
                  {testimonialContent.cards.medium.statLabel}
                </p>
                <Rating />
                <p className="type-body-md font-normal text-neutral-400">
                  {testimonialContent.cards.medium.quote}
                </p>
              </div>

              <div className="flex w-full items-end justify-center">
                <div className="flex flex-1 flex-col items-start justify-center gap-[16px]">
                  <Avatar
                    src={testimonialContent.cards.medium.author.avatar}
                    alt={testimonialContent.cards.medium.author.name}
                  />
                  <AuthorInfo
                    name={testimonialContent.cards.medium.author.name}
                    role={testimonialContent.cards.medium.author.role}
                  />
                </div>
                <QuoteIcon />
              </div>
            </div>

            {/* Bottom small cards */}
            <div className="flex w-full flex-col gap-[20px] lg:w-[732px] lg:flex-row">
              {testimonialContent.cards.small.map((card, index) => (
                <div
                  key={card.quote}
                  className="border-stroke-700 flex h-auto w-full flex-1 flex-col items-start justify-between border bg-neutral-950 p-[20px] lg:h-[364px] lg:w-[356px] lg:flex-none"
                >
                  <div className="flex w-full flex-col gap-[12px]">
                    <Rating />
                    <p className="type-body-md font-normal text-neutral-400">
                      {card.quote}
                    </p>
                  </div>

                  <div
                    className={`flex items-end justify-center ${
                      index === 0 ? "w-full" : "w-[326px]"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-start justify-center gap-[16px] ${
                        index === 0 ? "w-[278px]" : "flex-1"
                      }`}
                    >
                      <Avatar src={card.author.avatar} alt={card.author.name} />
                      <AuthorInfo
                        name={card.author.name}
                        role={card.author.role}
                      />
                    </div>
                    <QuoteIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
