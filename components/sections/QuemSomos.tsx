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
    <SectionWrapper className="bg-offwhite overflow-hidden">
      <section className="w-full lg:flex lg:items-stretch">
        <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[78vh] lg:w-1/2 shrink-0 bg-beige overflow-hidden">
          <Image
            src="/images/closeup-building-with-columns-neoclassical-style 1 copiar.webp"
            alt="Colunas em arquitetura neoclássica"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-left-top lg:object-left"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:flex lg:items-center lg:min-h-[78vh]">
          <div className="w-full max-w-4xl px-5 sm:px-6 md:px-8 lg:pl-8 lg:pr-16 xl:pl-10 xl:pr-20 py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20">
            <AnimatedGroup>
              <AnimatedItem>
                <h2 className="font-serif text-navy text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.2] mb-5 sm:mb-6">
                  Uma advocacia que une experiência de alto nível e proximidade com o
                  cliente.
                </h2>
              </AnimatedItem>

              <AnimatedItem>
                <div className="w-12 h-px bg-gold mb-6 sm:mb-8" />
              </AnimatedItem>

              <AnimatedItem>
                <p className="font-sans text-stone text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Fundado pelo advogado André Valentin Perin — com trajetória na
                  Procuradoria, na Assessoria Jurídica da Aeronáutica e em projeto do
                  Banco Interamericano de Desenvolvimento (BID) — o escritório nasceu
                  do compromisso de entregar uma advocacia técnica, estratégica e
                  profundamente respeitosa com cada pessoa que atendemos.
                </p>
              </AnimatedItem>

              <AnimatedItem>
                <ul className="flex flex-col gap-2.5 sm:gap-3 mb-8 sm:mb-10">
                  {destaques.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                      <span className="font-sans text-sm text-charcoal/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedItem>

              <AnimatedItem>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link
                    href="/sobre"
                    className="inline-flex items-center justify-center gap-2 bg-navy text-white font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-navy-dark transition-colors w-full sm:w-auto"
                  >
                    Conheça o escritório
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/areas-de-atuacao"
                    className="inline-flex items-center justify-center gap-2 border border-navy text-navy font-sans font-medium text-sm px-6 py-3 rounded-sm hover:bg-navy hover:text-white transition-colors w-full sm:w-auto"
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
