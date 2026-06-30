"use client";

import { Star } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";

/* [A CONFIRMAR] reunir mais depoimentos reais / avaliações Google */
const depoimentos = [
  {
    texto:
      "Quero agradecer pelo trabalho prestado. O advogado André foi muito atencioso e prestativo — foi muito boa a experiência com vocês.",
    autor: "Luciano Alves",
    cargo: "Cliente",
    estrelas: 5,
  },
  // Próximos depoimentos virão aqui
];

export function Depoimentos() {
  return (
    <SectionWrapper className="bg-offwhite">
      <Section>
        <div className="text-center mb-14">
          <AnimatedText as="div">
            <SectionLabel>Avaliações</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.1}
            className="font-serif text-navy text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            O que dizem nossos clientes
          </AnimatedText>
        </div>

        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((dep) => (
            <AnimatedItem key={dep.autor}>
              <div className="bg-white border border-charcoal/8 p-8 rounded-sm shadow-sm h-full flex flex-col">
                {/* Estrelas */}
                <div className="flex gap-1 mb-5" aria-label={`${dep.estrelas} estrelas`}>
                  {Array.from({ length: dep.estrelas }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold fill-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="font-sans text-charcoal/80 text-sm leading-relaxed italic flex-1 mb-6">
                  &ldquo;{dep.texto}&rdquo;
                </blockquote>

                <div className="border-t border-charcoal/8 pt-5">
                  <p className="font-sans font-medium text-navy text-sm">{dep.autor}</p>
                  <p className="font-sans text-stone text-xs mt-0.5">{dep.cargo}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}

          {/* Placeholder para novos depoimentos */}
          <AnimatedItem>
            <div className="bg-navy/5 border border-dashed border-navy/20 p-8 rounded-sm h-full flex flex-col items-center justify-center text-center min-h-[200px]">
              <p className="font-sans text-stone text-sm leading-relaxed">
                {/* [A CONFIRMAR] Adicionar mais avaliações reais do Google ou WhatsApp */}
                Mais avaliações em breve.
              </p>
              <p className="font-sans text-xs text-stone/60 mt-2">
                [A CONFIRMAR — avaliações Google]
              </p>
            </div>
          </AnimatedItem>
        </AnimatedGroup>
      </Section>
    </SectionWrapper>
  );
}
