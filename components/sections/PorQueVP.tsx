"use client";

import { Globe, Users, Star, Award } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";

const diferenciais = [
  {
    icon: Award,
    titulo: "Atuação consolidada",
    descricao:
      "Trabalhista, Previdenciário, Consumidor e Administrativo, com técnica e estratégia em cada área.",
  },
  {
    icon: Users,
    titulo: "Atendimento humano",
    descricao:
      "Você entende seu caso do início ao fim, sem termos complicados.",
  },
  {
    icon: Globe,
    titulo: "Atuação nacional",
    descricao:
      "Atendemos clientes em todo o Brasil, de forma ágil e sem deslocamentos desnecessários.",
  },
  {
    icon: Star,
    titulo: "Experiência de alto nível",
    descricao:
      "Trajetória do fundador na advocacia pública e privada, em projetos de grande porte.",
  },
];

export function PorQueVP() {
  return (
    <SectionWrapper className="bg-navy">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Texto */}
          <div>
            <AnimatedText as="div">
              <SectionLabel light>Por que o Valentin Perin</SectionLabel>
            </AnimatedText>
            <AnimatedText
              as="h2"
              delay={0.1}
              className="font-serif text-white text-4xl md:text-5xl font-medium leading-[1.15] mb-6"
            >
              Advocacia premium para questões que mudam a vida das pessoas
            </AnimatedText>
            <AnimatedText as="div" delay={0.2}>
              <div className="w-12 h-px bg-gold" />
            </AnimatedText>
          </div>

          {/* Diferenciais */}
          <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciais.map((d) => (
              <AnimatedItem key={d.titulo}>
                <div className="group p-6 border border-white/10 rounded-sm hover:border-gold/40 hover:bg-white/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                    <d.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-white text-xl font-medium mb-2">
                    {d.titulo}
                  </h3>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">
                    {d.descricao}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedGroup>
        </div>
      </Section>
    </SectionWrapper>
  );
}
