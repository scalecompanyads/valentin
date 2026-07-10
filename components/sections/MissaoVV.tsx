"use client";

import { Target, Eye, Heart } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { Section, SectionWrapper } from "@/components/ui/Section";

const valores = [
  "Atenção e respeito ao cliente",
  "Excelência técnica",
  "Transparência",
  "Comunicação simples e honesta",
  "Ética inegociável",
];

const cards = [
  {
    icon: Target,
    label: "Missão",
    text: "Defender os direitos de nossos clientes com clareza, estratégia e dedicação, transformando momentos difíceis em soluções concretas.",
  },
  {
    icon: Eye,
    label: "Visão",
    text: "Ser referência em advocacia, mostrando que excelência técnica e atendimento humano caminham juntos.",
  },
  {
    icon: Heart,
    label: "Valores",
    list: valores,
  },
];

/* Números de prova social — [A CONFIRMAR] */
const numeros = [
  { valor: "1000+", label: "Clientes atendidos" },
  { valor: "XX", label: "Anos de atuação" },
  { valor: "4.9/5", label: "Avaliação média" },
  { valor: "100%", label: "Atendimento digital" },
];

export function MissaoVV() {
  return (
    <SectionWrapper className="bg-navy">
      <Section>
        {/* Título */}
        <div className="text-center mb-16">
          <AnimatedText
            as="h2"
            className="font-serif text-white text-4xl md:text-5xl font-medium leading-[1.15] mb-4"
          >
            Uma trajetória construída resolvendo problemas reais de pessoas reais
          </AnimatedText>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Cards Missão / Visão / Valores */}
        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card) => (
            <AnimatedItem key={card.label}>
              <div className="group h-full bg-gradient-to-b from-white/[0.10] to-white/[0.04] border border-white/15 p-8 rounded-sm hover:border-white/30 hover:-translate-y-0.5 hover:bg-white/[0.09] transition-all duration-300">
                <div className="w-11 h-11 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                  <card.icon size={20} className="text-white" />
                </div>
                <h3 className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55 mb-3">
                  {card.label}
                </h3>
                <div className="w-10 h-px bg-gold/70 mb-4" />
                {card.text ? (
                  <p className="font-sans text-white/82 text-sm leading-relaxed">
                    {card.text}
                  </p>
                ) : (
                  <ul className="flex flex-col gap-2">
                    {card.list?.map((v) => (
                      <li key={v} className="flex items-start gap-2 font-sans text-sm text-white/82">
                        <span className="text-white mt-1.5 text-xs">✦</span>
                        {v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedGroup>

        {/* Números — [A CONFIRMAR] */}
        <div className="border-t border-white/10 pt-16">
          <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-white/45 text-center mb-10">
            Números do escritório
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {numeros.map((n) => (
              <div key={n.label} className="text-center border border-white/10 bg-white/[0.03] py-6 px-3">
                <p className="font-serif text-white text-5xl font-medium leading-none mb-2">{n.valor}</p>
                <p className="font-sans text-white/60 text-sm">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </SectionWrapper>
  );
}
