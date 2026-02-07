"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useId } from "react";

const SUCCESS_GRID_LINES = "/images/contact/grid-lines.svg";
const SUCCESS_GRID_DOTS = "/images/contact/grid-dots.svg";
const SUCCESS_CHECK = "/images/contact/success-check.svg";
const ERROR_GRID_LINES = "/images/contact/grid-lines.svg";

const ErrorBadge = () => (
  <svg
    width="147.625"
    height="147.625"
    viewBox="0 0 147.625 147.625"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="73.8125" cy="73.8125" r="73.8125" fill="#EE1D52" />
    <path
      d="M92.2891 55.3359L55.3359 92.2891M55.3359 55.3359L92.2891 92.2891"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  message: string;
}

export function Modal({ isOpen, onClose, type, title, message }: ModalProps) {
  const isSuccess = type === "success";
  const titleId = useId();
  const messageId = useId();

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)]"
          />

          {/* Modal - Click inside won't close */}
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`border-stroke-700 pointer-events-auto relative w-full border bg-[#000000] ${
                isSuccess
                  ? "max-w-[520px] overflow-hidden"
                  : "max-w-[518px] rounded-lg shadow-xl"
              }`}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={messageId}
            >
              {isSuccess ? (
                <div className="flex w-full flex-col">
                  <div className="relative flex w-full items-center justify-center overflow-hidden px-[8px] py-[40px]">
                    <div className="absolute top-[7px] left-[-4px] h-[246px] w-[532.602px] opacity-80 mix-blend-soft-light">
                      <img
                        src={SUCCESS_GRID_DOTS}
                        alt=""
                        className="block h-full w-full max-w-none"
                      />
                    </div>
                    <div className="absolute top-[10.58px] left-[-0.42px] h-[238.835px] w-[525.437px] opacity-70 mix-blend-soft-light">
                      <img
                        src={SUCCESS_GRID_LINES}
                        alt=""
                        className="block h-full w-full max-w-none"
                      />
                    </div>
                    <div className="absolute top-[-245px] left-1/2 h-[457px] w-[685.944px] -translate-x-1/2 -scale-y-100 opacity-80">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(ellipse at center, rgba(20, 155, 176, 0.8) 0%, rgba(20, 155, 176, 0) 100%)",
                        }}
                      />
                    </div>
                    <div className="relative flex items-center rounded-[100px] border border-[rgba(255,255,255,0.1)] p-[8px]">
                      <div className="flex items-center rounded-[1000px] border border-[rgba(255,255,255,0.1)] p-[8px]">
                        <div className="flex items-center rounded-[100px] border border-[rgba(255,255,255,0.1)]">
                          <img
                            src={SUCCESS_CHECK}
                            alt=""
                            className="block h-[147.625px] w-[147.625px] max-w-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center gap-[32px] px-[32px] pt-[32px] pb-[40px] text-center">
                    <div className="flex w-full flex-col items-center gap-[8px]">
                      <p
                        id={titleId}
                        className="text-neutral-25 text-[24px] leading-[36px] font-bold"
                      >
                        {title}
                      </p>
                      <p
                        id={messageId}
                        className="type-body-md font-medium text-neutral-400"
                      >
                        {message}
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-brand-500 flex h-[48px] w-full items-center justify-center gap-[4px] rounded-full text-[14px] leading-[28px] font-bold text-white"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex w-full flex-col">
                  <div className="relative flex w-full items-center justify-center overflow-hidden px-[8px] py-[40px]">
                    <div className="absolute top-[10.58px] left-[-0.42px] h-[238.835px] w-[525.437px] opacity-70 mix-blend-soft-light">
                      <img
                        src={ERROR_GRID_LINES}
                        alt=""
                        className="block h-full w-full max-w-none"
                      />
                    </div>
                    <div className="absolute top-[-245px] left-1/2 h-[457px] w-[685.944px] -translate-x-1/2 -scale-y-100 opacity-80">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(ellipse at center, rgba(133, 16, 46, 0.9) 0%, rgba(0, 0, 0, 0) 70%)",
                        }}
                      />
                    </div>
                    <div className="relative">
                      <ErrorBadge />
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center gap-[32px] px-[32px] pt-[32px] pb-[40px] text-center">
                    <div className="flex w-full flex-col items-center gap-[8px]">
                      <p
                        id={titleId}
                        className="text-neutral-25 text-[24px] leading-[36px] font-bold"
                      >
                        {title}
                      </p>
                      <p
                        id={messageId}
                        className="type-body-md font-medium text-neutral-400"
                      >
                        {message}
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-brand-500 flex h-[48px] w-full items-center justify-center gap-[4px] rounded-full text-[14px] leading-[28px] font-bold text-white"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
