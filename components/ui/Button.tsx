"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
  pulse?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  pulse = false,
}: ButtonProps) {
  const prefersReduced = useReducedMotion();

  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm font-sans font-medium text-sm tracking-wide transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] text-black border-none hover:bg-[position:right_center] focus-visible:outline-[#D4AF37] shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-500",
    secondary:
      "bg-black text-white border border-white/70 hover:bg-neutral-800 focus-visible:outline-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]",
    outline:
      "border border-white text-white hover:bg-white hover:text-black focus-visible:outline-white",
  };

  const hoverScale = prefersReduced ? 1 : 1.03;

  const Tag = motion.create(Link);

  return (
    <Tag
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${pulse && !prefersReduced ? "animate-pulse-slow" : ""} ${className}`}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: prefersReduced ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </Tag>
  );
}
