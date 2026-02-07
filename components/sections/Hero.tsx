"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Charm } from "next/font/google";

// Text animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100,
    },
  },
};

const charm = Charm({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Mail icon component - white color as per Figma (on cyan button)
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

export function Hero() {
  return (
    <section className="relative h-[971px] w-screen overflow-hidden bg-neutral-950 lg:h-[902px] lg:w-full">
      {/* Container to center content on wide screens */}
      <div className="absolute inset-0 h-full w-full lg:relative lg:inset-auto lg:mx-auto lg:max-w-[1440px]">
        {/* ============================================
            BACKGROUND GRADIENTS - Cyan glow on upper left
            Figma: Gradient visible from top-left, brighter
            ============================================ */}

        {/* Primary gradient - upper left */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          aria-hidden="true"
          style={{
            width: "1845px",
            height: "1230px",
            left: "-1000px",
            top: "-500px",
            opacity: 0.7,
            background:
              "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.9) 0%, rgba(20, 155, 176, 0) 100%)",
          }}
        />

        {/* Secondary gradient - creates visible glow */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          aria-hidden="true"
          style={{
            width: "1845px",
            height: "1230px",
            left: "-700px",
            top: "-300px",
            opacity: 0.5,
            background:
              "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
          }}
        />

        {/* ============================================
            GRID PATTERN - + signs grid visible in upper area
            Should be visible from top of hero section
            ============================================ */}

        {/* Mobile background section */}
        <div
          className="pointer-events-none absolute lg:hidden"
          aria-hidden="true"
          style={{
            width: "100vw",
            height: "756px",
            left: "50%",
            top: "0px",
            transform: "translateX(-50%) scaleY(-1)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="absolute opacity-80"
              style={{
                width: "1845px",
                height: "1230px",
                left: "-1047px",
                top: "27px",
                background:
                  "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
              }}
            />
            <div
              className="absolute opacity-70"
              style={{
                width: "1845px",
                height: "1230px",
                left: "-76px",
                top: "112px",
                background:
                  "radial-gradient(ellipse 922.5px 615px at center, rgba(20, 155, 176, 0.7) 0%, rgba(20, 155, 176, 0) 100%)",
              }}
            />
          </div>
        </div>

        {/* Mobile Grid Vector - lines */}
        <div
          className="pointer-events-none absolute mix-blend-soft-light lg:hidden"
          aria-hidden="true"
          style={{
            left: "-283.33px",
            top: "-22.99px",
            width: "882.136px",
            height: "400.971px",
            opacity: 0.7,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-grid-mobile-lines.svg"
            alt=""
            className="h-full w-full"
          />
        </div>

        {/* Mobile Grid Vector - dots */}
        <div
          className="pointer-events-none absolute mix-blend-soft-light lg:hidden"
          aria-hidden="true"
          style={{
            left: "-289.34px",
            top: "-29px",
            width: "894.165px",
            height: "413px",
            opacity: 0.8,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-grid-mobile-dots.svg"
            alt=""
            className="h-full w-full"
          />
        </div>

        {/* Grid Vector 1 - grid lines */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          aria-hidden="true"
          style={{
            left: "-150px",
            top: "0px",
            width: "1074px",
            height: "489px",
            opacity: 0.7,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-grid-1.svg" alt="" className="h-full w-full" />
        </div>

        {/* Grid Vector 2 - + signs pattern */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          aria-hidden="true"
          style={{
            left: "-160px",
            top: "-10px",
            width: "1089px",
            height: "503px",
            opacity: 0.8,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-grid-2.svg" alt="" className="h-full w-full" />
        </div>

        {/* ============================================
            ID CARD - Exact Figma positioning
            Figma: x=968, y=0, w=341, h=671
            ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute hidden lg:block"
          style={{
            width: "341px",
            height: "671px",
            left: "968px",
            top: "0px",
          }}
        >
          {/* Layer 1: ID Card Background with lanyard */}
          {/* Figma: left=0, top=0, w=341, h=671, image positioned at left=-31.43%, top=-5.07%, w=162.27%, h=123.7% */}
          <div className="absolute top-0 left-0 h-[671px] w-[341px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/id-card-bg.png"
              alt=""
              className="absolute max-w-none"
              style={{
                width: "162.27%",
                height: "123.7%",
                left: "-31.43%",
                top: "-5.07%",
              }}
            />
          </div>

          {/* Layer 2: Brush Stroke Vector - BEHIND portrait */}
          {/* Figma: left=16, top=385, w=325, h=110 */}
          <div className="absolute top-[385px] left-[16px] h-[110px] w-[325px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brush-stroke.svg"
              alt=""
              className="block h-full w-full"
            />
          </div>

          {/* Layer 3: Portrait Photo - ON TOP of brush stroke */}
          {/* Figma: centered (left=50%-translate), top=261, w=341, h=410, rounded-bl/br=19px */}
          <div
            className="absolute top-[261px] left-1/2 h-[410px] w-[341px] -translate-x-1/2 overflow-hidden"
            style={{ borderRadius: "0 0 19px 19px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me.png"
              alt="Daud Abdilah Zubaidi - Frontend Developer"
              className="absolute top-0 h-full max-w-none"
              style={{
                width: "120.49%",
                left: "-11.31%",
              }}
            />
          </div>
        </motion.div>

        {/* ============================================
          MAIN CONTENT - Exact Figma positioning
          Figma: x=140, y=227, w=684, h=476
          ============================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute hidden flex-col lg:flex"
          style={{
            left: "140px",
            top: "227px",
            width: "684px",
            height: "476px",
            gap: "62px",
          }}
        >
          {/* Text Content Frame */}
          {/* Figma: w=684, h=358, gap=32px between children */}
          <div className="flex w-[684px] flex-col" style={{ gap: "32px" }}>
            {/* Greeting */}
            {/* Figma: font-size=20px, line-height=34px, tracking=-0.6px, color=#fdfdfd */}
            <motion.p
              variants={itemVariants}
              className="text-neutral-25 font-normal"
              style={{
                fontSize: "20px",
                lineHeight: "34px",
                letterSpacing: "-0.6px",
              }}
            >
              Hi. I&apos;m Daud Abdilah Zubaidi
            </motion.p>

            {/* Title Container */}
            {/* Figma: w=524, gap=28px, font-size=96px, line-height=68px, tracking=-5.76px */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col text-white"
              style={{
                width: "524px",
                gap: "28px",
                fontSize: "96px",
                lineHeight: "68px",
                letterSpacing: "-5.76px",
              }}
            >
              {/* FRONT + END on same line */}
              <div className="flex items-center">
                <span className="font-bold">FRONT</span>
                <span className={`${charm.className} text-gradient-animate`}>END</span>
              </div>
              {/* DEVELOPER */}
              <span className="font-bold">DEVELOPER</span>
            </motion.div>

            {/* Description */}
            {/* Figma: font-size=18px, line-height=32px, tracking=-0.54px, color=#a4a7ae, w=684 */}
            <motion.p
              variants={itemVariants}
              className="w-[684px] font-normal text-neutral-400"
              style={{
                fontSize: "18px",
                lineHeight: "32px",
                letterSpacing: "-0.54px",
              }}
            >
              Frontend Developer with 7 years of experience in banking, fintech, and healthcare industries.
              I don&apos;t just write code — I ensure what we build truly solves user problems.
              From requirements to production, I own the outcome.
            </motion.p>
          </div>

          {/* CTA Button */}
          {/* Figma: w=287, h=56, bg=#149bb0 (cyan), text=white, gap=8px, padding=8px */}
          <motion.div variants={itemVariants}>
            <Button
              variant="secondary"
              size="md"
              leftIcon={<MailIcon />}
              className="h-[56px] w-[287px] rounded-none"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* End of max-w-1440px container for desktop */}

      {/* ============================================
          MOBILE LAYOUT (< 1024px)
          ============================================ */}
      <div className="relative z-10 h-[971px] w-full lg:hidden">
        {/* Mobile ID Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-0 left-1/2 h-[496px] w-[252.066px] -translate-x-1/2"
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/id-card-bg.png"
              alt=""
              className="absolute max-w-none"
              style={{
                width: "162.27%",
                height: "123.7%",
                left: "-31.43%",
                top: "-5.07%",
              }}
            />
          </div>
          <div className="absolute top-[284.59px] left-[11.83px] h-[81.311px] w-[240.238px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brush-stroke.svg"
              alt=""
              className="block h-full w-full"
            />
          </div>
          <div className="absolute top-[192.61px] left-1/2 h-[303.394px] w-[251.797px] -translate-x-1/2 overflow-hidden rounded-b-[14.045px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/me.png"
              alt="Daud Abdilah Zubaidi - Frontend Developer"
              className="absolute top-0 h-full max-w-none"
              style={{
                width: "120.49%",
                left: "-11.31%",
              }}
            />
          </div>
        </motion.div>

        {/* Mobile Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[520px] left-1/2 flex w-[361px] -translate-x-1/2 flex-col gap-[32px]"
        >
          <div className="flex flex-col gap-[16px]">
            <p className="text-neutral-25 text-[16px] leading-[30px] font-normal tracking-[-0.48px]">
              Hi. I&apos;m Daud Abdilah Zubaidi
            </p>

            <div className="flex flex-col text-[56px] leading-[68px] tracking-[-3.36px] text-white">
              <div className="flex items-center">
                <span className="font-bold">FRONT</span>
                <span className={`${charm.className}`}>END</span>
              </div>
              <span className="font-bold">DEVELOPER</span>
            </div>

            <p className="type-body-sm font-normal text-neutral-400">
              Frontend Developer with 7 years of experience in banking, fintech, and healthcare.
              I don&apos;t just write code — I ensure what we build truly solves user problems.
            </p>
          </div>

          <Button
            variant="secondary"
            size="sm"
            leftIcon={<MailIcon />}
            className="h-[48px] w-full rounded-none text-[14px] leading-[28px] tracking-[0px]"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
