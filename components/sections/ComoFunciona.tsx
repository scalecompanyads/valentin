"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, MessagesSquare, SearchCheck, Lightbulb, Scale } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

const passos = [
  {
    icon: MessagesSquare,
    titulo: "Você entra em contato",
    descricao:
      "Relata o ocorrido e envia as informações básicas do seu caso pelo WhatsApp.",
  },
  {
    icon: SearchCheck,
    titulo: "Análise especializada",
    descricao:
      "Um advogado avalia sua situação com base na legislação e nos detalhes do seu caso.",
  },
  {
    icon: Lightbulb,
    titulo: "Orientação clara",
    descricao:
      "Você entende se há solução, quais são os próximos passos e o que é mais adequado para você.",
  },
  {
    icon: Scale,
    titulo: "Atuação jurídica",
    descricao:
      "Se decidir seguir, cuidamos de todo o processo com transparência e acompanhamento próximo.",
  },
];

export function ComoFunciona() {
  const prefersReduced = useReducedMotion();

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <AnimatedText as="div">
          <SectionLabel>Como funciona</SectionLabel>
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="font-serif text-navy text-4xl md:text-5xl font-medium leading-[1.15] mb-6"
        >
          Resolver seu problema pode ser mais simples do que parece
        </AnimatedText>
        <AnimatedText as="p" delay={0.2} className="font-sans text-stone text-base leading-relaxed">
          Nosso atendimento foi pensado para facilitar a vida de quem já está
          enfrentando uma dificuldade.
        </AnimatedText>
      </div>

      {/* Passos */}
      <div className="relative">
        {/* Linha conectora — visível apenas em desktop */}
        <div
          className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gold/20"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((passo, i) => (
            <motion.div
              key={passo.titulo}
              initial={prefersReduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: prefersReduced ? 0 : i * 0.12,
              }}
              whileHover={prefersReduced ? {} : { y: -4 }}
              className="group flex flex-col items-center text-center"
            >
              <motion.div
                className="relative w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-6 shadow-md"
                animate={prefersReduced ? {} : { boxShadow: ["0 4px 14px rgba(0,0,0,0.18)", "0 8px 24px rgba(0,0,0,0.28)", "0 4px 14px rgba(0,0,0,0.18)"] }}
                transition={prefersReduced ? {} : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
              >
                <passo.icon size={22} className="text-white" />
              </motion.div>
              <h3 className="font-serif text-navy text-xl font-medium mb-3">
                {passo.titulo}
              </h3>
              <p className="font-sans text-stone text-sm leading-relaxed">
                {passo.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-14">
        <motion.a
          href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-navy hover:bg-navy-dark text-white font-sans font-medium text-sm px-8 py-4 rounded-sm transition-colors shadow-md"
          whileHover={prefersReduced ? {} : { scale: 1.03 }}
          whileTap={prefersReduced ? {} : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          aria-label="Falar com o escritório pelo WhatsApp"
        >
          <MessageCircle size={18} />
          Fale com o escritório (WhatsApp)
        </motion.a>
      </div>
    </Section>
  );
}
