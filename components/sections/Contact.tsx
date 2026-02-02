"use client";
/* eslint-disable @next/next/no-img-element */

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import { motion } from "framer-motion";
import { useState } from "react";

const mailIcon =
  "/figma-assets/b31c04cae2eb86c2c2951285b8d67b99105ed0ca.svg";
const lineDivider =
  "/figma-assets/00d82643ad8035b396128a00eb2672c1c992361a.svg";

const socialLinks = [
  {
    href: "https://facebook.com",
    alt: "Facebook",
    src: "/figma-assets/98f2408fd396a23508b0ec689fa6e4e35a0c822c.svg",
    inset: "25.11% 35.93% 24.85% 37%",
  },
  {
    href: "https://instagram.com",
    alt: "Instagram",
    src: "/figma-assets/1dc171d97d53fbd46a9e54a2e685d158dacd3022.svg",
    inset: "25.1% 24.97% 24.85% 25%",
  },
  {
    href: "https://linkedin.com",
    alt: "LinkedIn",
    src: "/figma-assets/ac50851306f497748af72e411dbef2db6b08f907.svg",
    inset: "30.23% 29.16% 29.73% 29%",
  },
  {
    href: "https://tiktok.com",
    alt: "TikTok",
    src: "/figma-assets/5e9afde6c4f2a45f512943150fec87213664b9b2.svg",
    inset: "25.12% 29.01% 25.73% 28.4%",
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

      const data = await response.json();

      if (response.ok) {
        // Success
        setModalState({
          isOpen: true,
          type: "success",
          title: "Thanks for Reaching Out!",
          message: "I've received your message and will get back to you shortly.",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Error from API
        setModalState({
          isOpen: true,
          type: "error",
          title: "Message Not Sent",
          message:
            "Something broke along the way. Let's try resending it.",
        });
      }
    } catch (error) {
      // Network or other error
      console.error("Error:", error);
      setModalState({
        isOpen: true,
        type: "error",
        title: "Message Not Sent",
        message:
          "Something broke along the way. Let's try resending it.",
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
      className="relative overflow-hidden bg-[#0a0d12] pt-[80px] pb-[120px] px-4 lg:px-[120px] lg:h-[955px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(27, 178, 201, 0) 32.786%, #1bb2c9 139.81%)",
      }}
    >
      {/* Background glass board effect */}
      <div
        className="absolute inset-x-0 top-[245px] h-[757px] w-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 flex">
          {[...Array(19)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full backdrop-blur-[50px]"
              style={{
                backgroundImage:
                  "linear-gradient(269.847deg, rgba(22, 22, 24, 0.4) 1.069%, rgba(0, 0, 0, 0.4) 17.356%, rgba(26, 26, 29, 0.004) 98.788%)",
                boxShadow: "inset 0px 2px 4px 0px rgba(255, 255, 255, 0.16)",
              }}
            />
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, black 15.443%, rgba(0, 0, 0, 0) 104.67%)",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[40px] relative z-10">
        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-[580px] flex-1 min-w-0 bg-black border border-[#22252b] px-[24px] py-[40px] flex flex-col gap-[31px]"
        >
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[48px] font-bold text-white leading-[60px] tracking-[-2.4px]">
              Let’s{" "}
              <span className="text-[#149bb0]">Build Something</span> Great
            </h2>
            <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
              Got an idea, a project, or just want to connect? I’m always
              open to new conversations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
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
              className="w-full h-[56px] bg-white text-[#0a0d12] text-[16px] font-semibold leading-[30px] tracking-[-0.48px] flex items-center justify-center gap-[8px] p-[8px] disabled:opacity-50"
            >
              <span className="relative w-[24px] h-[24px] overflow-hidden">
                <span
                  className="absolute"
                  style={{ inset: "17.71% 5.21%" }}
                >
                  <img
                    src={mailIcon}
                    alt=""
                    className="block w-full h-full"
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
          className="lg:w-[580px] flex-1 min-w-0 flex flex-col justify-between self-stretch"
        >
          <div className="flex flex-col gap-[20px] w-full">
            {/* Address */}
            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[20px] font-semibold leading-[34px] text-[#fdfdfd]">
                Address
              </h3>
              <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
                Jakarta, Indonesia
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px">
              <img
                src={lineDivider}
                alt=""
                className="block w-full h-full"
                aria-hidden="true"
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[20px] font-semibold leading-[34px] text-[#fdfdfd]">
                Contact
              </h3>
              <p className="text-[16px] font-normal leading-[30px] text-[#a4a7ae] tracking-[-0.48px]">
                (+62) 1234567890
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px">
              <img
                src={lineDivider}
                alt=""
                className="block w-full h-full"
                aria-hidden="true"
              />
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[20px] font-semibold leading-[34px] text-[#fdfdfd]">
                Social Media
              </h3>
              <div className="flex items-center gap-[12px] h-[40px] w-[208px]">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#252b37] overflow-hidden"
                    aria-label={link.alt}
                  >
                    <div className="relative w-[40px] h-[40px]">
                      <div className="absolute" style={{ inset: link.inset }}>
                        <img
                          src={link.src}
                          alt=""
                          className="block w-full h-full"
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
            <h2 className="text-[56px] font-bold text-white leading-[68px] tracking-[-1.12px]">
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
