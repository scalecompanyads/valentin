import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, CheckCircle } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Valentin Perin Advocacia e seu fundador, André Valentin Perin. Advocacia técnica, atendimento premium e atuação em todo o Brasil.",
  openGraph: {
    title: "Sobre | Valentin Perin Advocacia",
    description: "Conheça o escritório e seu fundador, André Valentin Perin.",
  },
};

const valores = [
  "Atenção e respeito ao cliente",
  "Excelência técnica",
  "Transparência",
  "Comunicação simples e honesta",
  "Ética inegociável",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fundador,
  jobTitle: "Advogado e Sócio-Fundador",
  worksFor: {
    "@type": "LegalService",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  url: `${siteConfig.url}/sobre`,
  sameAs: [siteConfig.instagram],
  knowsAbout: [
    "Direito Trabalhista",
    "Direito Previdenciário",
    "Direito do Consumidor",
    "Direito Administrativo",
  ],
};

export default function SobrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      {/* Hero da página */}
      <SectionWrapper className="bg-navy pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
          <AnimatedText as="div">
            <SectionLabel light>O escritório</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h1"
            delay={0.1}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] max-w-3xl"
          >
            Conheça o Valentin Perin Advocacia
          </AnimatedText>
          <AnimatedText as="div" delay={0.2}>
            <div className="w-16 h-px bg-gold mt-8" />
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.3}
            className="font-sans text-white/70 text-lg leading-relaxed mt-6 max-w-2xl"
          >
            Mais do que um escritório de advocacia, somos um time comprometido
            com a atenção, o respeito e a entrega de uma experiência premium a
            todos que confiam suas causas a nós.
          </AnimatedText>
        </div>
      </SectionWrapper>

      {/* Fundador */}
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Imagem placeholder */}
        <AnimatedText as="div">
          <div
            className="relative aspect-[4/5] bg-navy/8 rounded-sm overflow-hidden"
            aria-label="Foto de André Valentin Perin"
          >
            <Image
              src="/images/valentin-pic.jpg"
              alt="André Valentin Perin, advogado e fundador do escritório Valentin Perin Advocacia"
              fill
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/80 to-transparent"
            >
              <div>
                <p className="font-serif text-white text-2xl font-medium">
                  André Valentin Perin
                </p>
                <p className="font-sans text-gold text-sm mt-1">Sócio-Fundador</p>
                <p className="font-sans text-white/50 text-xs mt-1.5">
                  {siteConfig.oab.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </AnimatedText>

        {/* Bio */}
        <AnimatedGroup className="pt-0 lg:pt-8">
          <AnimatedItem>
            <SectionLabel>Nosso Sócio-Fundador</SectionLabel>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-serif text-navy text-4xl font-medium leading-[1.15] mb-6">
              {siteConfig.fundador}
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <div className="w-12 h-px bg-gold mb-8" />
          </AnimatedItem>
          <AnimatedItem>
            <p className="font-sans text-stone text-base leading-relaxed mb-5">
              O advogado André Valentin Perin é paraense de Belém e um dos
              primeiros advogados de sua família. Antes de se tornar CEO e
              sócio-fundador do escritório, foi Procurador Autárquico, tendo
              exercido a chefia da Procuradoria, Assessor Jurídico da Aeronáutica
              e Advogado Sênior para projeto do Banco Interamericano de
              Desenvolvimento (BID), entre outras atuações relevantes.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <p className="font-sans text-stone text-base leading-relaxed mb-8">
              Atua também como escritor, palestrante, professor e consultor. Com
              espírito empreendedor e comprometimento, está à frente de um
              escritório empenhado na atenção e no respeito ao cliente e em
              entregar uma experiência premium a todos que confiam suas causas a
              nós.
            </p>
          </AnimatedItem>

          {/* Na mídia */}
          <AnimatedItem>
            <div className="bg-offwhite border border-charcoal/10 p-6 rounded-sm">
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
                Na mídia
              </p>
              <p className="font-sans text-charcoal/80 text-sm leading-relaxed mb-4">
                Em reportagem do portal ND Mais, André Valentin Perin analisou a
                proposta da chamada &ldquo;PEC da Liberdade de Expressão&rdquo;
                em tramitação no Congresso.
              </p>
              <a
                href={siteConfig.ndMaisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold transition-colors"
                aria-label="Ler reportagem no ND Mais"
              >
                Leia a reportagem
                <ExternalLink size={13} />
              </a>
            </div>
          </AnimatedItem>
        </AnimatedGroup>
      </Section>

      {/* Missão, Visão e Valores */}
      <SectionWrapper className="bg-navy">
        <Section>
          <div className="text-center mb-14">
            <AnimatedText as="p" className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              Nossa essência
            </AnimatedText>
            <AnimatedText
              as="h2"
              delay={0.1}
              className="font-serif text-white text-4xl md:text-5xl font-medium leading-[1.15]"
            >
              Missão, Visão e Valores
            </AnimatedText>
          </div>

          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full">
                <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4">
                  Missão
                </h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">
                  Defender os direitos de nossos clientes com clareza, estratégia
                  e dedicação, transformando momentos difíceis em soluções
                  concretas.
                </p>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full">
                <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4">
                  Visão
                </h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed">
                  Ser referência em advocacia, mostrando que excelência técnica
                  e atendimento humano caminham juntos.
                </p>
              </div>
            </AnimatedItem>

            <AnimatedItem>
              <div className="bg-white/5 border border-white/10 p-8 rounded-sm h-full">
                <h3 className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4">
                  Valores
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {valores.map((v) => (
                    <li key={v} className="flex items-start gap-2.5 font-sans text-sm text-white/70">
                      <CheckCircle size={13} className="text-gold mt-0.5 shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          </AnimatedGroup>
        </Section>
      </SectionWrapper>

      <CTAFinal />
    </>
  );
}
