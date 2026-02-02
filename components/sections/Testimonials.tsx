"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const STAR_ICON = "/images/testimonials/star.svg";
const QUOTE_ICON = "/images/testimonials/quote.svg";

const testimonialContent = {
  heading: "Trusted Voices",
  subheading:
    "Here’s what people say about working with me — across projects, teams, and timelines.",
  cards: {
    large: {
      stat: "8X",
      statLabel: "More users converted after redesign",
      quote:
        "Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
      author: {
        name: "Pablo Stanley",
        role: "Product Manager at Finovate",
        avatar: "/images/testimonials/avatar-1.png",
      },
    },
    medium: {
      stat: "3X",
      statLabel: "Improved user engagement and sign-ups",
      quote:
        "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing. ",
      author: {
        name: "Pablo Stanley",
        role: "Product Manager at Finovate",
        avatar: "/images/testimonials/avatar-2.png",
      },
    },
    small: [
      {
        quote:
          "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
        author: {
          name: "Pablo Stanley",
          role: "Product Manager at Finovate",
          avatar: "/images/testimonials/avatar-3.png",
        },
      },
      {
        quote:
          "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
        author: {
          name: "Pablo Stanley",
          role: "Product Manager at Finovate",
          avatar: "/images/testimonials/avatar-4.png",
        },
      },
    ],
  },
};

const Rating = () => (
  <div className="flex items-center gap-[4px]">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="size-[24px]">
        <img
          src={STAR_ICON}
          alt=""
          className="block max-w-none size-full"
        />
      </div>
    ))}
  </div>
);

const QuoteIcon = () => (
  <div className="size-[48px]">
    <img
      src={QUOTE_ICON}
      alt=""
      className="block max-w-none size-full"
    />
  </div>
);

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <div className="size-[48px]">
    <img src={src} alt={alt} className="block max-w-none size-full" />
  </div>
);

const AuthorInfo = ({ name, role }: { name: string; role: string }) => (
  <div className="flex w-full flex-col items-center text-[16px] leading-[30px] tracking-[-0.48px] text-[#fdfdfd]">
    <p className="font-semibold w-full">{name}</p>
    <p className="font-normal w-full">{role}</p>
  </div>
);

export function Testimonials() {
  return (
    <section className="dark-section py-[80px] px-4 lg:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[48px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex w-full max-w-[655px] flex-col items-center gap-[16px] text-center"
        >
          <h2 className="text-[48px] font-bold leading-[60px] tracking-[-2.4px] text-white">
            {testimonialContent.heading}
          </h2>
          <p className="text-[16px] font-normal leading-[30px] tracking-[-0.48px] text-[#a4a7ae]">
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
              className="flex h-full w-full flex-col items-start justify-between border border-[#149bb0] bg-[#0a0d12] p-[20px]"
              style={{
                backgroundImage:
                  "linear-gradient(-45deg, rgba(20, 155, 176, 0) 31.86%, rgba(20, 155, 176, 0.14) 83.82%)",
              }}
            >
              <div className="flex w-full flex-col gap-[8px]">
                <p className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-white">
                  {testimonialContent.cards.large.stat}
                </p>
                <p className="text-[24px] font-bold leading-[36px] text-[#fdfdfd]">
                  {testimonialContent.cards.large.statLabel}
                </p>
                <Rating />
                <p className="text-[16px] font-normal leading-[30px] tracking-[-0.48px] text-[#a4a7ae]">
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
            <div className="flex h-auto w-full flex-col items-start justify-between border border-[#22252b] bg-[#0a0d12] p-[20px] lg:h-[367px] lg:w-[732px]">
              <div className="flex w-full flex-col gap-[8px]">
                <p className="text-[36px] font-bold leading-[44px] tracking-[-0.72px] text-white">
                  {testimonialContent.cards.medium.stat}
                </p>
                <p className="text-[18px] font-semibold leading-[32px] tracking-[-0.54px] text-[#fdfdfd]">
                  {testimonialContent.cards.medium.statLabel}
                </p>
                <Rating />
                <p className="text-[16px] font-normal leading-[30px] tracking-[-0.48px] text-[#a4a7ae]">
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
                  className="flex h-auto w-full flex-1 flex-col items-start justify-between border border-[#22252b] bg-[#0a0d12] p-[20px] lg:h-[364px] lg:w-[356px] lg:flex-none"
                >
                  <div className="flex w-full flex-col gap-[12px]">
                    <Rating />
                    <p className="text-[16px] font-normal leading-[30px] tracking-[-0.48px] text-[#a4a7ae]">
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
