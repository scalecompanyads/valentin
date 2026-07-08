"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const badges = [
  "Atuação em todo o Brasil",
  "Atendimento humano e próximo",
  "Experiência premium",
  "Comunicação clara, sem juridiquês",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/bg-mobile-12.jpg"
        alt="Valentin Perin no escritório"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      <Image
        src="/images/desktop-valentin-23.jpg"
        alt="Valentin Perin no escritório"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[72%_center] md:block lg:object-[68%_center]"
      />

      <div
        className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/85 via-black/35 to-transparent lg:via-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_45%)]"
        aria-hidden="true"
      />

      {/* Detalhe decorativo lateral */}
      <div
        className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-white/25 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-12 xl:px-16 pb-16 md:pb-24 lg:pb-28 pt-48 md:pt-40 lg:pt-36">
        <motion.div
          variants={prefersReduced ? undefined : containerVariants}
          initial={prefersReduced ? false : "hidden"}
          animate="visible"
          className="max-w-[24rem] sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl"
        >
          {/* Sobretítulo */}
          <motion.p
            variants={prefersReduced ? undefined : itemVariants}
            className="font-sans text-[0.5625rem] sm:text-[0.625rem] md:text-xs font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase text-white/70 mb-4 md:mb-4 lg:mb-5"
          >
            Valentin Perin Advocacia
          </motion.p>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            variants={prefersReduced ? undefined : itemVariants}
            className="font-serif text-white text-[2.1rem] sm:text-[2.625rem] md:text-[2.45rem] lg:text-[2.8rem] xl:text-[3.5rem] font-medium leading-[0.98] md:leading-[1] mb-5 md:mb-5 lg:mb-6"
          >
            Defesa técnica.
            <br />
            Atendimento premium.
          </motion.h1>

          {/* Linha dourada */}
          <motion.div
            variants={prefersReduced ? undefined : itemVariants}
            className="w-14 md:w-20 h-px bg-white/45 mb-5 md:mb-5 lg:mb-6"
          />

          {/* Subtítulo */}
          <motion.p
            variants={prefersReduced ? undefined : itemVariants}
            className="font-sans text-white/80 text-[0.7875rem] sm:text-[0.875rem] md:text-base lg:text-lg leading-relaxed mb-7 md:mb-6 lg:mb-7 max-w-2xl"
          >
            Advogados em Florianópolis/SC com atuação em todo o Brasil nas
            áreas Trabalhista, Previdenciária, do Consumidor e Administrativa.
            Do primeiro contato à decisão final, você é tratado com a atenção
            que a sua causa merece.
          </motion.p>

          {/* CTA */}
          <motion.div variants={prefersReduced ? undefined : itemVariants} className="mb-8 md:mb-7 lg:mb-8">
            <motion.a
              href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 md:gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-sans font-semibold text-xs md:text-sm px-6 py-3 md:px-8 md:py-4 rounded-sm border-none transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20"
              whileHover={prefersReduced ? {} : { scale: 1.03 }}
              whileTap={prefersReduced ? {} : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label="Falar com o escritório pelo WhatsApp"
            >
              <MessageCircle size={16} className="md:w-[18px] md:h-[18px]" />
              Fale com o escritório (WhatsApp)
            </motion.a>
          </motion.div>

          {/* Badges */}
          <motion.div variants={prefersReduced ? undefined : itemVariants} className="md:hidden overflow-hidden -mx-1 pb-2">
            <motion.div
              className="flex w-max items-center gap-5"
              animate={prefersReduced ? { x: 0 } : { x: ["0%", "-50%"] }}
              transition={prefersReduced ? { duration: 0 } : { repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {[...badges, ...badges].map((badge, idx) => (
                <div
                  key={`${badge}-${idx}`}
                  className="flex items-center gap-1.5 border-b border-white/20 pb-1 whitespace-nowrap"
                >
                  <CheckCircle size={11} className="text-white shrink-0" />
                  <span className="font-sans text-[0.6125rem] text-white/80">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.ul
            variants={prefersReduced ? undefined : itemVariants}
            className="hidden md:flex flex-wrap gap-x-8 lg:gap-x-10 gap-y-3"
          >
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2.5 border-b border-white/20 pb-1.5">
                <CheckCircle size={14} className="text-white shrink-0" />
                <span className="font-sans text-sm lg:text-[0.9375rem] text-white/80">{badge}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-6 xl:bottom-8 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="font-sans text-white/40 text-xs tracking-widest uppercase">
          Role
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={prefersReduced ? {} : { scaleY: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
