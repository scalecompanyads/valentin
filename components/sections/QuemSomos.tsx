"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionWrapper } from "@/components/ui/Section";

const destaques = [
  "Atuação consolidada em diferentes áreas do Direito",
  "Atendimento premium e personalizado",
  "Atuação nacional",
];

export function QuemSomos() {
  return (
    <SectionWrapper className="bg-offwhite">
      <section className="w-full lg:flex lg:items-stretch lg:min-h-[78vh]">
        <div className="relative w-full aspect-[5/4] lg:h-[78vh] lg:w-1/2 shrink-0 bg-beige">
          <Image
            src="/images/closeup-building-with-columns-neoclassical-style 1 copiar.webp"
            alt="Colunas em arquitetura neoclássica"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-left-top"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:h-[78vh] lg:flex lg:items-center">
          <div className="w-full max-w-4xl px-6 md:px-8 lg:pl-8 lg:pr-16 xl:pl-10 xl:pr-20 pt-6 pb-10 md:py-20 lg:py-0">
            <AnimatedGroup>
              <AnimatedItem>
                <h2 className="font-serif text-navy text-4xl md:text-5xl font-medium leading-[1.15] mb-6">
                  Uma advocacia que une experiência de alto nível e proximidade com o
                  cliente.
                </h2>
              </AnimatedItem>

              <AnimatedItem>
                <div className="w-12 h-px bg-gold mb-8" />
              </AnimatedItem>

              <AnimatedItem>
                <p className="font-sans text-stone text-base leading-relaxed mb-8">
                  Fundado pelo advogado André Valentin Perin — com trajetória na
                  Procuradoria, na Assessoria Jurídica da Aeronáutica e em projeto do
                  Banco Interamericano de Desenvolvimento (BID) — o escritório nasceu
                  do compromisso de entregar uma advocacia técnica, estratégica e
                  profundamente respeitosa com cada pessoa que atendemos.
                </p>
              </AnimatedItem>

              <AnimatedItem>
                <ul className="flex flex-col gap-3 mb-10">
                  {destaques.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                      <span className="font-sans text-sm text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedItem>

              <AnimatedItem>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/sobre"
                    className="inline-flex items-center gap-2 bg-navy text-white font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-navy-dark transition-colors"
                  >
                    Conheça o escritório
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/areas-de-atuacao"
                    className="inline-flex items-center gap-2 border border-navy text-navy font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-navy hover:text-white transition-colors"
                  >
                    Ver áreas de atuação
                  </Link>
                </div>
              </AnimatedItem>
            </AnimatedGroup>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
