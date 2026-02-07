"use client";

import { motion } from "framer-motion";

const skills = [
  "Full Project Ownership (Requirement → Production)",
  "7+ Years in High-Stakes Industries",
  "I Deliver Outcomes, Not Just Code",
  "Proven: 95% Cost Reduction Achieved",
  "User-Focused: I Build What Users Need",
  "Quality Track Record: 40% Fewer Bugs",
  "Clear Communication Across Teams",
];

// Check icon - EXACT from Figma SVG export
const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={`size-[32px] lg:size-[40px] ${className}`}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.5735 30.426C39.3316 25.138 39.7132 16.184 34.4257 10.4259C29.1383 4.66784 20.1841 4.28616 14.426 9.57368C8.66789 14.8612 8.28621 23.8154 13.5737 29.5735C18.8612 35.3316 27.8154 35.7132 33.5735 30.426Z"
      fill="white"
    />
    <rect
      width="17.3096"
      height="17.3096"
      transform="translate(16.0664 11.54)"
      fill="white"
    />
    <path
      d="M30.4909 15.8672L22.5573 23.8008L18.9512 20.1947"
      stroke="#075864"
      strokeWidth="2.09813"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Cross icon - EXACT from Figma SVG export
const CrossIcon = ({ className = "" }: { className?: string }) => (
  <div className={`relative size-[40px] ${className}`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/skills/other-cross-bg.svg"
      alt=""
      className="absolute top-[5.85px] left-[5.85px] size-[28.31px]"
    />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/skills/other-cross-x.svg"
      alt=""
      className="absolute top-[14px] left-[14px] size-[10.5px]"
    />
  </div>
);

export function SkillsGrid() {
  return (
    <section className="dark-section relative px-[16px] py-[40px] lg:px-[120px] lg:py-[80px]">
      {/* Mobile background - Figma node 25448:630 */}
      <div
        className="pointer-events-none absolute top-[95px] left-0 h-[756px] w-full overflow-hidden lg:hidden"
        aria-hidden="true"
      >
        <div
          className="absolute"
          style={{
            width: "1845px",
            height: "1230px",
            left: "-1047px",
            top: "27px",
            opacity: 0.8,
            background:
              "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "1845px",
            height: "1230px",
            left: "-76px",
            top: "112px",
            opacity: 0.7,
            background:
              "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
          }}
        />
        <div
          className="absolute mix-blend-soft-light"
          style={{
            left: "-196.64px",
            top: "520.36px",
            width: "786.016px",
            height: "357.28px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/skills-grid-mobile-lines.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div
          className="absolute mix-blend-soft-light"
          style={{
            left: "-202px",
            top: "515px",
            width: "796.735px",
            height: "367.999px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/skills-grid-mobile-dots.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Desktop background Section with gradient and grid - from Figma node 25448:627 */}
      <div
        className="pointer-events-none absolute top-[182px] left-0 hidden h-[756px] w-[1440px] overflow-hidden lg:block"
        aria-hidden="true"
      >
        {/* Gradient 1 - left=-1047, top=27, opacity=0.8 */}
        <div
          className="absolute"
          style={{
            width: "1845px",
            height: "1230px",
            left: "-1047px",
            top: "27px",
            opacity: 0.8,
            background:
              "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
          }}
        />
        {/* Gradient 2 - left=-76, top=112, opacity=0.7 */}
        <div
          className="absolute"
          style={{
            width: "1845px",
            height: "1230px",
            left: "-76px",
            top: "112px",
            opacity: 0.7,
            background:
              "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
          }}
        />
        {/* Grid vectors */}
        <div
          className="absolute mix-blend-soft-light"
          style={{
            left: "-572px",
            top: "228px",
            width: "1361px",
            height: "618px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/skills-grid-1.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div
          className="absolute mix-blend-soft-light"
          style={{
            left: "-581px",
            top: "219px",
            width: "1379px",
            height: "637px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/skills-grid-2.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-[24px] lg:gap-[48px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-[8px] text-center lg:gap-[16px]"
        >
          <h2 className="type-display-mobile font-bold text-white lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
            Why Work With Me
          </h2>
          <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
            7+ years of experience delivering high-quality web and mobile applications
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-stroke-700 w-full border bg-black p-[12px] lg:p-[24px]"
        >
          <div className="flex">
            {/* Column 1 - Skills (black bg) */}
            <div className="flex flex-1 flex-col bg-black">
              {/* Header */}
              <div className="border-stroke-700 flex h-[72px] items-center border-r border-b px-[12px] py-[4px] lg:px-[24px] lg:py-[8px]">
                <span className="type-body-md text-neutral-25 flex-1 font-semibold lg:text-[18px] lg:leading-[32px] lg:font-normal lg:tracking-[-0.54px]">
                  Skill
                </span>
              </div>
              {/* Skills list */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`border-stroke-700 flex h-[72px] items-center border-r px-[12px] py-[4px] lg:px-[24px] lg:py-[8px] ${
                    index === skills.length - 1
                      ? ""
                      : "border-stroke-700 border-b"
                  }`}
                >
                  <span className="type-body-sm text-neutral-25 flex-1 font-normal lg:text-[18px] lg:leading-[32px] lg:tracking-[-0.54px]">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Column 2 - With Me (Cyan bg #149bb0) */}
            <div className="lg:bg-brand-500 flex w-[66px] flex-col bg-neutral-950 lg:w-auto lg:flex-1">
              {/* Header */}
              <div className="flex h-[72px] items-center justify-center border-r border-b border-white/40 bg-[#075864] px-[12px] py-[8px] lg:bg-transparent lg:px-[24px] lg:py-[8px]">
                <span className="text-neutral-25 flex-1 text-[14px] leading-[28px] font-semibold lg:text-[18px] lg:leading-[32px] lg:font-normal lg:tracking-[-0.54px]">
                  With Me
                </span>
              </div>
              {/* Check icons */}
              {skills.map((skill, index) => (
                <motion.div
                  key={`check-${skill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex h-[72px] items-center justify-left border-r border-white/40 bg-[#075864] px-[12px] py-[8px] lg:bg-transparent lg:px-[24px] lg:py-[8px] ${
                    index === skills.length - 1
                      ? ""
                      : "border-b border-white/40"
                  }`}
                >
                  <CheckIcon />
                </motion.div>
              ))}
            </div>

            {/* Column 3 - Other (Figma black background) */}
            <div className="bg-stroke-700 flex w-[66px] flex-col lg:w-auto lg:flex-1 lg:bg-black">
              {/* Header - text aligned left like Figma */}
              <div className="border-stroke-700 flex h-[72px] items-center justify-center border-b bg-black px-[12px] py-[8px] lg:px-[24px] lg:py-[8px]">
                <span className="text-neutral-25 flex-1 text-[14px] leading-[28px] font-semibold lg:text-[24px] lg:leading-[36px] lg:font-normal lg:tracking-[-0.96px]">
                  Other
                </span>
              </div>
              {/* Cross icons */}
              {skills.map((skill, index) => (
                <motion.div
                  key={`cross-${skill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex h-[72px] items-center justify-left bg-black px-[12px] py-[8px] ${
                    index === skills.length - 1
                      ? ""
                      : "border-stroke-700 border-b"
                  } lg:px-[24px] lg:py-[8px]`}
                >
                  <CrossIcon className="scale-[0.8] lg:scale-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
