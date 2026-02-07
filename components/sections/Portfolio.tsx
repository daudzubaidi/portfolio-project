"use client";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Puskesmas Dashboard Backoffice",
    year: "2025",
    image: "/images/portfolio/porto1.png",
    href: "#",
    tech: "Vue.js, Nuxt.js, Tailwind",
  },
  {
    title: "Eiger E-commerce & Back-office",
    year: "2023",
    image: "/images/portfolio/porto2.png",
    href: "#",
    tech: "Vue.js, Nuxt.js, Tailwind",
  },
  {
    title: "Laundry Back-office System",
    year: "2022",
    image: "/images/portfolio/porto3.png",
    href: "#",
    tech: "React.js",
  },
  {
    title: "Coffee Machine Company Profile",
    year: "2021",
    image: "/images/portfolio/porto4.png",
    href: "#",
    tech: "PHP CodeIgniter",
  },
  {
    title: "School Landing Page",
    year: "2020",
    image: "/images/portfolio/porto5.jpg",
    href: "#",
    tech: "HTML, Bootstrap",
  },
];

export function Portfolio() {
  return (
    <section
      id="projects"
      className="dark-section px-[20px] py-[40px] lg:px-[120px] lg:py-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[24px] lg:gap-[48px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-[8px] text-center lg:gap-[16px]"
        >
          <h2 className="type-display-mobile font-bold italic text-white lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
            Bridging Design and Development
          </h2>
          <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
            These are real projects where I implemented frontend interfaces with precision and attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid - 3 columns on desktop, wraps to show all 5 projects */}
        <div className="flex flex-wrap justify-center gap-[20px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
