"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionWrapper } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export function CTAFinal() {
  const prefersReduced = useReducedMotion();

  return (
    <SectionWrapper className="bg-navy relative overflow-hidden">
      {/* Detalhe decorativo */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-full h-px bg-gold/30"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 lg:px-16 py-24 md:py-32 text-center">
        <AnimatedText
          as="h2"
          className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6"
        >
          Sua causa merece atenção de verdade.
        </AnimatedText>

        <AnimatedText as="div" delay={0.1}>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
        </AnimatedText>

        <AnimatedText
          as="p"
          delay={0.2}
          className="font-sans text-white/70 text-lg leading-relaxed mb-10"
        >
          Fale com nossa equipe pelo WhatsApp, sem compromisso, e entenda os
          próximos passos do seu caso.
        </AnimatedText>

        <AnimatedText as="div" delay={0.3}>
          <motion.a
            href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-sans font-medium text-base px-10 py-4 rounded-sm border-none transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20"
            whileHover={prefersReduced ? {} : { scale: 1.04 }}
            whileTap={prefersReduced ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            aria-label="Falar com o escritório pelo WhatsApp"
          >
            <MessageCircle size={20} />
            Fale com o escritório (WhatsApp)
          </motion.a>
        </AnimatedText>
      </div>
    </SectionWrapper>
  );
}
