"use client";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portofolio 1",
    year: "2025",
    image: "/images/portfolio/project1.jpg",
    href: "#",
  },
  {
    title: "Portofolio 2",
    year: "2025",
    image: "/images/portfolio/project2.jpg",
    href: "#",
  },
  {
    title: "Portofolio 3",
    year: "2025",
    image: "/images/portfolio/project3.jpg",
    href: "#",
  },
];

export function Portfolio() {
  return (
    <section id="projects" className="dark-section py-[80px] px-4 lg:px-[120px]">
      <div className="flex flex-col gap-[48px] items-center max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center flex flex-col gap-[16px]"
        >
          <h2 className="text-[48px] font-bold text-white leading-[60px] tracking-[-2.4px]">
            Bridging Design and Development
          </h2>
          <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
            These are real projects where I implemented frontend interfaces with
            precision and attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="flex flex-col md:flex-row gap-[20px]">
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
