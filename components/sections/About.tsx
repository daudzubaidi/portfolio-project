"use client";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5473 8.03997C25.6729 7.56918 25.6103 7.06798 25.3727 6.64254C25.1352 6.21711 24.7413 5.90086 24.2746 5.76079C23.8079 5.62071 23.305 5.66782 22.8725 5.89213C22.4399 6.11643 22.1117 6.50032 21.9573 6.96247L14.4573 31.9625C14.3351 32.4323 14.3999 32.9311 14.638 33.3541C14.8761 33.7771 15.269 34.0913 15.734 34.2305C16.1991 34.3698 16.7 34.3233 17.1314 34.1008C17.5628 33.8782 17.8911 33.4971 18.0473 33.0375L25.5473 8.03997ZM11.3273 12.425C11.6784 12.7765 11.8756 13.2531 11.8756 13.75C11.8756 14.2468 11.6784 14.7234 11.3273 15.075L6.40226 20L11.3273 24.925C11.6585 25.2804 11.8388 25.7505 11.8302 26.2363C11.8216 26.722 11.6248 27.1855 11.2813 27.529C10.9378 27.8726 10.4743 28.0693 9.98856 28.0779C9.50281 28.0865 9.03269 27.9062 8.67726 27.575L2.42726 21.325C2.07613 20.9734 1.87891 20.4968 1.87891 20C1.87891 19.5031 2.07613 19.0265 2.42726 18.675L8.67726 12.425C9.02882 12.0738 9.50538 11.8766 10.0023 11.8766C10.4991 11.8766 10.9757 12.0738 11.3273 12.425ZM28.6773 27.575C28.3261 27.2234 28.1289 26.7468 28.1289 26.25C28.1289 25.7531 28.3261 25.2765 28.6773 24.925L33.6023 20L28.6773 15.075C28.3461 14.7195 28.1657 14.2494 28.1743 13.7637C28.1829 13.2779 28.3797 12.8144 28.7232 12.4709C29.0667 12.1274 29.5302 11.9306 30.016 11.922C30.5017 11.9135 30.9718 12.0938 31.3273 12.425L37.5773 18.675C37.9284 19.0265 38.1256 19.5031 38.1256 20C38.1256 20.4968 37.9284 20.9734 37.5773 21.325L31.3273 27.575C30.9757 27.9261 30.4991 28.1233 30.0023 28.1233C29.5054 28.1233 29.0288 27.9261 28.6773 27.575Z"
          fill="#149BB0"
        />
      </svg>
    ),
    title: "Frontend Development",
    description:
      "I build responsive, accessible, and scalable websites using modern frontend tools and best practices.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.2673 23.333C27.4007 22.233 27.5007 21.133 27.5007 19.9997C27.5007 18.8663 27.4007 17.7663 27.2673 16.6663H32.9007C33.1673 17.733 33.334 18.8497 33.334 19.9997C33.334 21.1497 33.1673 22.2663 32.9007 23.333M24.3173 32.5997C25.3173 30.7497 26.084 28.7497 26.6173 26.6663H31.534C29.9193 29.4468 27.3575 31.553 24.3173 32.5997ZM23.9007 23.333H16.1007C15.934 22.233 15.834 21.133 15.834 19.9997C15.834 18.8663 15.934 17.7497 16.1007 16.6663H23.9007C24.0507 17.7497 24.1673 18.8663 24.1673 19.9997C24.1673 21.133 24.0507 22.233 23.9007 23.333ZM20.0007 33.2663C18.6173 31.2663 17.5007 29.0497 16.8173 26.6663H23.184C22.5007 29.0497 21.384 31.2663 20.0007 33.2663ZM13.334 13.333H8.46732C10.0651 10.5447 12.6251 8.43508 15.6673 7.39967C14.6673 9.24967 13.9173 11.2497 13.334 13.333ZM8.46732 26.6663H13.334C13.9173 28.7497 14.6673 30.7497 15.6673 32.5997C12.6311 31.5535 10.0745 29.4467 8.46732 26.6663ZM7.10065 23.333C6.83398 22.2663 6.66732 21.1497 6.66732 19.9997C6.66732 18.8497 6.83398 17.733 7.10065 16.6663H12.734C12.6007 17.7663 12.5007 18.8663 12.5007 19.9997C12.5007 21.133 12.6007 22.233 12.734 23.333M20.0007 6.71634C21.384 8.71634 22.5007 10.9497 23.184 13.333H16.8173C17.5007 10.9497 18.6173 8.71634 20.0007 6.71634ZM31.534 13.333H26.6173C26.0949 11.269 25.3225 9.27652 24.3173 7.39967C27.384 8.44967 29.934 10.5663 31.534 13.333ZM20.0007 3.33301C10.784 3.33301 3.33398 10.833 3.33398 19.9997C3.33398 24.4199 5.08993 28.6592 8.21554 31.7848C9.76318 33.3324 11.6005 34.5601 13.6226 35.3977C15.6447 36.2352 17.812 36.6663 20.0007 36.6663C24.4209 36.6663 28.6602 34.9104 31.7858 31.7848C34.9114 28.6592 36.6673 24.4199 36.6673 19.9997C36.6673 17.811 36.2362 15.6437 35.3986 13.6216C34.5611 11.5995 33.3334 9.7622 31.7858 8.21456C30.2381 6.66692 28.4008 5.43926 26.3787 4.60168C24.3566 3.7641 22.1893 3.33301 20.0007 3.33301Z"
          fill="#149BB0"
        />
      </svg>
    ),
    title: "Web Performance",
    description:
      "I optimize websites for speed and efficiency to ensure smooth experiences across all devices.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2338 4.08953C18.7026 3.62136 19.338 3.3584 20.0005 3.3584C20.663 3.3584 21.2984 3.62136 21.7672 4.08953L26.4838 8.80287C26.7162 9.03503 26.9004 9.3107 27.0262 9.61412C27.1519 9.91754 27.2166 10.2428 27.2166 10.5712C27.2166 10.8996 27.1519 11.2249 27.0262 11.5283C26.9004 11.8317 26.7162 12.1074 26.4838 12.3395L21.7672 17.0529C21.2984 17.521 20.663 17.784 20.0005 17.784C19.338 17.784 18.7026 17.521 18.2338 17.0529L13.5172 12.3395C13.2849 12.1074 13.1006 11.8317 12.9748 11.5283C12.8491 11.2249 12.7844 10.8996 12.7844 10.5712C12.7844 10.2428 12.8491 9.91754 12.9748 9.61412C13.1006 9.3107 13.2849 9.03503 13.5172 8.80287L18.2338 4.08953ZM20.0005 7.0362L16.4655 10.5712L20.0005 14.1062L23.5355 10.5729L20.0005 7.0362ZM27.6605 13.5179C27.8927 13.2856 28.1683 13.1013 28.4718 12.9755C28.7752 12.8498 29.1004 12.7851 29.4288 12.7851C29.7573 12.7851 30.0825 12.8498 30.3859 12.9755C30.6893 13.1013 30.965 13.2856 31.1972 13.5179L35.9105 18.2312C36.1428 18.4634 36.3271 18.739 36.4529 19.0425C36.5786 19.3459 36.6433 19.6711 36.6433 19.9995C36.6433 20.328 36.5786 20.6532 36.4529 20.9566C36.3271 21.26 36.1428 21.5357 35.9105 21.7679L31.1972 26.4812C30.965 26.7135 30.6893 26.8978 30.3859 27.0235C30.0825 27.1493 29.7573 27.214 29.4288 27.214C29.1004 27.214 28.7752 27.1493 28.4718 27.0235C28.1683 26.8978 27.8927 26.7135 27.6605 26.4812L22.9472 21.7679C22.7149 21.5357 22.5306 21.26 22.4048 20.9566C22.2791 20.6532 22.2144 20.328 22.2144 19.9995C22.2144 19.6711 22.2791 19.3459 22.4048 19.0425C22.5306 18.739 22.7149 18.4634 22.9472 18.2312L27.6605 13.5179ZM29.4272 16.4645L25.8938 19.9979L29.4272 23.5345L32.9655 19.9995L29.4272 16.4645ZM8.80551 13.5162C9.03767 13.2839 9.31334 13.0996 9.61676 12.9739C9.92018 12.8481 10.2454 12.7834 10.5738 12.7834C10.9023 12.7834 11.2275 12.8481 11.5309 12.9739C11.8343 13.0996 12.11 13.2839 12.3422 13.5162L17.0555 18.2295C17.2878 18.4617 17.4721 18.7374 17.5979 19.0408C17.7236 19.3442 17.7883 19.6694 17.7883 19.9979C17.7883 20.3263 17.7236 20.6515 17.5979 20.9549C17.4721 21.2584 17.2878 21.534 17.0555 21.7662L12.3422 26.4795C12.11 26.7118 11.8343 26.8961 11.5309 27.0219C11.2275 27.1476 10.9023 27.2123 10.5738 27.2123C10.2454 27.2123 9.92018 27.1476 9.61676 27.0219C9.31334 26.8961 9.03767 26.7118 8.80551 26.4795L4.09217 21.7662C3.85986 21.534 3.67557 21.2584 3.54983 20.9549C3.42409 20.6515 3.35938 20.3263 3.35938 19.9979C3.35938 19.6694 3.42409 19.3442 3.54983 19.0408C3.67557 18.7374 3.85986 18.4617 4.09217 18.2295L8.80551 13.5162ZM10.5738 16.4629L7.03884 19.9962L10.5738 23.5329L14.1072 19.9995L10.5738 16.4629ZM18.2338 22.9445C18.466 22.7122 18.7417 22.5279 19.0451 22.4022C19.3485 22.2765 19.6737 22.2117 20.0022 22.2117C20.3306 22.2117 20.6558 22.2765 20.9593 22.4022C21.2627 22.5279 21.5383 22.7122 21.7705 22.9445L26.4838 27.6579C26.9525 28.1267 27.2158 28.7625 27.2158 29.4254C27.2158 30.0883 26.9525 30.724 26.4838 31.1929L21.7705 35.9079C21.5383 36.1402 21.2627 36.3245 20.9593 36.4502C20.6558 36.576 20.3306 36.6407 20.0022 36.6407C19.6737 36.6407 19.3485 36.576 19.0451 36.4502C18.7417 36.3245 18.466 36.1402 18.2338 35.9079L13.5205 31.1929C13.0523 30.7241 12.7894 30.0887 12.7894 29.4262C12.7894 28.7637 13.0523 28.1283 13.5205 27.6595L18.2338 22.9445ZM20.0005 25.8912L16.4655 29.4279L20.0005 32.9629L23.5355 29.4279L20.0005 25.8912Z"
          fill="#149BB0"
        />
      </svg>
    ),
    title: "Component Based UI",
    description:
      "I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_25422_1578)">
          <path
            d="M27.8617 0H10.4704C8.38341 0 6.66602 1.73048 6.66602 3.83333V34.5C6.66602 36.6029 8.38341 38.3333 10.4704 38.3333H27.8617C29.9486 38.3333 31.666 36.6029 31.666 34.5V3.83333C31.666 1.73048 29.9486 0 27.8617 0ZM28.4051 34.5C28.4051 34.8067 28.166 35.0476 27.8617 35.0476H10.4704C10.166 35.0476 9.92689 34.8067 9.92689 34.5V3.83333C9.92689 3.52667 10.166 3.28571 10.4704 3.28571H27.8617C28.166 3.28571 28.4051 3.52667 28.4051 3.83333V34.5ZM21.3399 27.9286C21.3399 29.1333 20.3617 30.119 19.166 30.119C17.9704 30.119 16.9921 29.1333 16.9921 27.9286C16.9921 26.7238 17.9704 25.7381 19.166 25.7381C20.3617 25.7381 21.3399 26.7238 21.3399 27.9286Z"
            fill="#149BB0"
          />
        </g>
        <defs>
          <clipPath id="clip0_25422_1578">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Responsive Design",
    description:
      "I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.",
  },
];

const socialLinks = [
  { platform: "facebook" as const, href: "https://facebook.com" },
  { platform: "instagram" as const, href: "https://instagram.com" },
  { platform: "linkedin" as const, href: "https://linkedin.com" },
  { platform: "tiktok" as const, href: "https://tiktok.com" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section
      id="about"
      className="dark-section py-[40px] px-0 lg:py-[80px] lg:px-[120px]"
    >
      <div className="max-w-[393px] lg:max-w-[1440px] mx-auto flex flex-col gap-[24px] lg:gap-[48px] px-[16px] lg:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between gap-[24px] lg:gap-8"
        >
          <h2 className="text-[32px] font-bold text-white leading-[42px] tracking-[-1.28px] lg:text-[40px] lg:leading-[56px] lg:tracking-[-2px] max-w-[756px]">
            I turn ideas and designs into functional, accessible, and performant
            websites{" "}
            <span className="text-[#149bb0]">
              using modern frontend technologies
            </span>
            .
          </h2>

          <div className="flex flex-col items-start gap-[16px] lg:items-end lg:gap-[116px] w-full lg:w-[208px] shrink-0">
            <span className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px] lg:text-[18px] lg:leading-[32px] lg:tracking-[-0.54px]">
              About Me
            </span>
            <div className="flex items-center gap-[16px] h-[40px]">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.platform}
                  platform={link.platform}
                  href={link.href}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-[#22252b]" />

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[41px]">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[361px] h-[409px] lg:w-[453px] lg:h-[513px] shrink-0 overflow-hidden"
          >
            <Image
              src="/images/about.png"
              alt="Edwin Anderson working on laptop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 361px, 453px"
            />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-[24px] lg:gap-[40px]"
          >
            {/* Mobile list */}
            <div className="flex flex-col gap-[24px] lg:hidden">
              {skills.map((skill, index) => (
                <div key={skill.title} className="flex flex-col gap-[24px]">
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-[12px]"
                  >
                    <div className="shrink-0 w-[40px] h-[40px]">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="text-[18px] font-bold leading-[32px] text-white">
                        {skill.title}
                      </h3>
                      <p className="text-[14px] font-normal leading-[28px] text-[#a4a7ae]">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                  {index < skills.length - 1 && (
                    <div className="w-full h-px bg-[#22252b]" />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop grid */}
            <div className="hidden lg:flex lg:flex-col lg:gap-[40px]">
              <div className="flex flex-col sm:flex-row gap-[24px] lg:gap-[48px]">
                {skills.slice(0, 2).map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    className="flex-1 flex flex-col gap-[16px] lg:gap-[24px]"
                  >
                    <div className="shrink-0 w-[40px] h-[40px]">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="text-[20px] font-bold leading-[34px] text-white">
                        {skill.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-[24px] lg:gap-[48px]">
                {skills.slice(2, 4).map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    className="flex-1 flex flex-col gap-[16px] lg:gap-[24px]"
                  >
                    <div className="shrink-0 w-[40px] h-[40px]">
                      {skill.icon}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="text-[20px] font-bold leading-[34px] text-white">
                        {skill.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
