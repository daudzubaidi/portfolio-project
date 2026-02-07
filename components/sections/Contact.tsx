"use client";
/* eslint-disable @next/next/no-img-element */

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import { motion } from "framer-motion";
import { useState } from "react";

const mailIcon = "/figma-assets/b31c04cae2eb86c2c2951285b8d67b99105ed0ca.svg";
const lineDivider =
  "/figma-assets/00d82643ad8035b396128a00eb2672c1c992361a.svg";

const socialLinks = [
  {
    href: "https://linkedin.com/in/daud-abdilah-zubaidi",
    alt: "LinkedIn",
    src: "/figma-assets/ac50851306f497748af72e411dbef2db6b08f907.svg",
    inset: "30.23% 29.16% 29.73% 29%",
  },
  {
    href: "mailto:daud.developer@gmail.com",
    alt: "Email",
    src: "/figma-assets/1dc171d97d53fbd46a9e54a2e685d158dacd3022.svg",
    inset: "25.1% 24.97% 24.85% 25%",
  },
  {
    href: "https://instagram.com",
    alt: "Instagram",
    src: "/figma-assets/1dc171d97d53fbd46a9e54a2e685d158dacd3022.svg",
    inset: "25.1% 24.97% 24.85% 25%",
  },
  {
    href: "https://facebook.com",
    alt: "Facebook",
    src: "/figma-assets/98f2408fd396a23508b0ec689fa6e4e35a0c822c.svg",
    inset: "25.11% 35.93% 24.85% 37%",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        // Success
        setModalState({
          isOpen: true,
          type: "success",
          title: "Thanks for Reaching Out!",
          message:
            "I've received your message and will get back to you shortly.",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Error from API
        setModalState({
          isOpen: true,
          type: "error",
          title: "Message Not Sent",
          message: "Something broke along the way. Let's try resending it.",
        });
      }
    } catch (error) {
      // Network or other error
      console.error("Error:", error);
      setModalState({
        isOpen: true,
        type: "error",
        title: "Message Not Sent",
        message: "Something broke along the way. Let's try resending it.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-[20px] py-[40px] lg:h-[955px] lg:bg-neutral-950 lg:px-[120px] lg:pt-[80px] lg:pb-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(27, 178, 201, 0) 32.786%, #1bb2c9 109.81%)",
      }}
    >
      {/* Background glass board effect */}
      <div
        className="pointer-events-none absolute top-[415px] left-[calc(50%+31.7px)] h-[calc(100%-415px)] w-[1276.407px] -translate-x-1/2 lg:top-[245px] lg:left-0 lg:h-[757px] lg:w-full lg:translate-x-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex">
          {[...Array(19)].map((_, i) => (
            <div key={i} className="relative h-full flex-1">
              <div
                className="absolute inset-0 backdrop-blur-[44.32px]"
                style={{
                  backgroundImage:
                    "linear-gradient(269.847deg, rgba(22, 22, 24, 0.4) 1.069%, rgba(0, 0, 0, 0.4) 17.356%, rgba(26, 26, 29, 0.004) 98.788%)",
                  boxShadow:
                    "inset 0px 1.773px 3.546px 0px rgba(255, 255, 255, 0.16)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0px_1.773px_3.546px_0px_rgba(255,255,255,0.16)]" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-[465.357px] w-[1276.407px] bg-[linear-gradient(180deg,black_15.443%,rgba(0,0,0,0)_104.67%)] lg:inset-0 lg:h-full lg:w-full" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-[24px] lg:flex-row lg:gap-[40px]">
        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-stroke-700 flex min-w-0 flex-1 flex-col gap-[24px] border bg-black p-[16px] lg:w-[580px] lg:gap-[31px] lg:px-[24px] lg:py-[40px]"
        >
          <div className="flex flex-col gap-[8px] lg:gap-[16px]">
            <h2 className="type-display-mobile font-bold text-white lg:text-[48px] lg:leading-[60px] lg:tracking-[-2.4px]">
              Let’s <span className="text-[#149bb0]">Build Something</span>{" "}
              Great
            </h2>
            <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
              Got an idea, a project, or just want to connect? I’m always open
              to new conversations.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[16px] lg:gap-[20px]"
          >
            <Input
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Textarea
              label="Message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-[48px] w-full items-center justify-center gap-[8px] bg-white p-[8px] text-[14px] leading-[28px] font-semibold text-[#0a0d12] disabled:opacity-50 lg:h-[56px] lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]"
            >
              <span className="relative h-[24px] w-[24px] overflow-hidden">
                <span className="absolute" style={{ inset: "17.71% 5.21%" }}>
                  <img
                    src={mailIcon}
                    alt=""
                    className="block h-full w-full"
                    aria-hidden="true"
                  />
                </span>
              </span>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex min-w-0 flex-1 flex-col justify-between self-stretch lg:w-[580px]"
        >
          <div className="flex w-full flex-col gap-[24px]">
            {/* Address */}
            <div className="flex flex-col gap-[2px] lg:gap-[12px]">
              <h3 className="text-neutral-25 text-[16px] leading-[30px] font-bold tracking-[-0.32px] lg:text-[20px] lg:leading-[34px] lg:font-semibold lg:tracking-normal">
                Address
              </h3>
              <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
                Bandung, Indonesia
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full">
              <img
                src={lineDivider}
                alt=""
                className="block h-full w-full"
                aria-hidden="true"
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-[2px] lg:gap-[12px]">
              <h3 className="text-neutral-25 text-[16px] leading-[30px] font-bold tracking-[-0.32px] lg:text-[20px] lg:leading-[34px] lg:font-semibold lg:tracking-normal">
                Contact
              </h3>
              <p className="type-body-sm font-normal text-neutral-400 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
                +6285624205570
              </p>
              <a href="mailto:daud.developer@gmail.com" className="type-body-sm font-normal text-[#149bb0] hover:underline lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.48px]">
                daud.developer@gmail.com
              </a>
            </div>

            {/* Divider */}
            <div className="h-px w-full">
              <img
                src={lineDivider}
                alt=""
                className="block h-full w-full"
                aria-hidden="true"
              />
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-[16px] lg:gap-[20px]">
              <h3 className="text-neutral-25 text-[16px] leading-[30px] font-bold tracking-[-0.32px] lg:text-[20px] lg:leading-[34px] lg:font-semibold lg:tracking-normal">
                Social Media
              </h3>
              <div className="flex h-[40px] w-[208px] items-center gap-[12px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border border-[rgba(253,253,253,0.1)] lg:border-[#252b37]"
                    aria-label={link.alt}
                  >
                    <div className="relative h-[40px] w-[40px]">
                      <div className="absolute" style={{ inset: link.inset }}>
                        <img
                          src={link.src}
                          alt=""
                          className="block h-full w-full"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* GET IN TOUCH Large Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-[40px] leading-[56px] font-bold tracking-[-2px] text-white lg:text-[56px] lg:leading-[68px] lg:tracking-[-1.12px]">
              GET IN TOUCH
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        title={modalState.title}
        message={modalState.message}
      />
    </section>
  );
}
