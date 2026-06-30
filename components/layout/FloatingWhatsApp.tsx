"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20BA5A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      initial={prefersReduced ? false : { scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 18, delay: 1.2 },
      }}
      whileHover={prefersReduced ? {} : { scale: 1.1 }}
      whileTap={prefersReduced ? {} : { scale: 0.95 }}
    >
      {/* Anel de pulse discreto */}
      {!prefersReduced && (
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"
          aria-hidden="true"
        />
      )}
      <MessageCircle size={26} strokeWidth={1.8} />
    </motion.a>
  );
}
