"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export function NaMidia() {
  return (
    <SectionWrapper className="bg-offwhite border-t border-charcoal/8">
      <Section className="text-center">
        <AnimatedText as="div">
          <SectionLabel>Autoridade e Presença</SectionLabel>
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="font-serif text-navy text-4xl md:text-5xl font-medium leading-[1.15] mb-4"
        >
          Reconhecimento e presença na imprensa
        </AnimatedText>
        <AnimatedText as="p" delay={0.2} className="font-sans text-stone text-base leading-relaxed max-w-2xl mx-auto mb-14">
          Nosso fundador é fonte e comentarista em temas jurídicos de relevância
          pública, o que reforça a autoridade técnica do escritório.
        </AnimatedText>

        {/* Card de mídia */}
        <AnimatedText as="div" delay={0.3}>
          <div className="inline-block text-left bg-white border border-charcoal/10 p-8 md:p-10 rounded-sm shadow-sm max-w-xl w-full">
            <div className="relative w-full h-56 mb-6 overflow-hidden rounded-sm">
              <Image
                src="/images/andre-valentin-perin.jpg"
                alt="André Valentin Perin"
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover object-center"
              />
            </div>
            <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4">
              ND Mais
            </p>
            <h3 className="font-serif text-navy text-2xl font-medium leading-snug mb-4">
              André Valentin Perin comenta a chamada &ldquo;PEC da Liberdade de
              Expressão&rdquo;
            </h3>
            <p className="font-sans text-stone text-sm leading-relaxed mb-6">
              Em reportagem do portal ND Mais, André Valentin Perin analisou a
              proposta da chamada &ldquo;PEC da Liberdade de Expressão&rdquo; em
              tramitação no Congresso Nacional.
            </p>
            <a
              href={siteConfig.ndMaisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold transition-colors"
              aria-label="Ler reportagem no ND Mais (abre em nova aba)"
            >
              Leia a reportagem
              <ExternalLink size={14} />
            </a>
          </div>
        </AnimatedText>
      </Section>
    </SectionWrapper>
  );
}
