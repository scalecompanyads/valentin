import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Atuação em Direito Trabalhista, Previdenciário, do Consumidor e Administrativo, com atendimento em todo o Brasil. Conheça como podemos ajudar.",
  openGraph: {
    title: "Áreas de Atuação | Valentin Perin Advocacia",
    description:
      "Atuação em todo o Brasil: Trabalhista, Previdenciário, Consumidor e Administrativo.",
  },
};

const areas = [
  {
    id: "trabalhista",
    titulo: "Direito Trabalhista",
    intro:
      "Foi demitido e ficou com a sensação de que algo não foi feito corretamente? Muitos trabalhadores deixam de receber valores e direitos a que têm direito simplesmente por não saberem que podem reivindicá-los.",
    servicos: [
      "Verbas rescisórias não pagas ou pagas a menos",
      "Horas extras, adicionais e intervalos não respeitados",
      "Reconhecimento de vínculo empregatício",
      "Assédio moral e condições irregulares de trabalho",
      "Rescisão indireta e demissões irregulares",
    ],
    destaque:
      "Se você foi demitido, vale a pena entender o que ainda pode ser seu.",
    cta: "Analisar meu caso trabalhista (WhatsApp)",
  },
  {
    id: "previdenciario",
    titulo: "Direito Previdenciário",
    intro:
      "Teve um benefício indeferido pelo INSS? A negativa não significa que você não tem direito. Em muitos casos, é possível reverter a decisão com a documentação e a estratégia corretas.",
    servicos: [
      "Benefícios indeferidos pelo INSS",
      "Aposentadorias (por idade, tempo de contribuição e outras)",
      "Auxílio-doença e auxílio por incapacidade",
      "BPC/LOAS (benefício assistencial)",
      "Revisões de benefícios",
    ],
    destaque:
      "Se o seu pedido foi indeferido, o caminho ainda pode estar aberto.",
    cta: "Analisar meu caso previdenciário (WhatsApp)",
  },
  {
    id: "consumidor",
    titulo: "Direito do Consumidor",
    intro:
      "Relações de consumo desequilibradas geram prejuízo e desgaste. Atuamos para que seus direitos sejam respeitados diante de empresas, bancos e prestadores de serviço.",
    servicos: [
      "Cobranças indevidas e negativação injusta",
      "Contratos e cláusulas abusivas",
      "Produtos ou serviços que não cumpriram o prometido",
      "Problemas com bancos e instituições financeiras",
    ],
    destaque: null,
    cta: "Falar sobre meu caso (WhatsApp)",
  },
  {
    id: "administrativo",
    titulo: "Direito Administrativo",
    intro:
      "Questões que envolvem o poder público exigem técnica e atenção a prazos e procedimentos. Acompanhamos você em diferentes situações junto à Administração.",
    servicos: [
      "Direitos de servidores públicos",
      "Concursos públicos",
      "Processos e atos administrativos",
      "Relações com órgãos e autarquias",
    ],
    destaque: null,
    cta: "Falar sobre meu caso (WhatsApp)",
  },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="bg-navy pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
          <AnimatedText as="div">
            <SectionLabel light>O que fazemos</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h1"
            delay={0.1}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] max-w-3xl"
          >
            Áreas de Atuação
          </AnimatedText>
          <AnimatedText as="div" delay={0.2}>
            <div className="w-16 h-px bg-gold mt-8" />
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.3}
            className="font-sans text-white/70 text-lg leading-relaxed mt-6 max-w-2xl"
          >
            Atuamos com foco em Direito Trabalhista e Previdenciário, e também
            em Direito do Consumidor e Administrativo. Em cada área, unimos
            técnica e estratégia para buscar o melhor resultado para você.
          </AnimatedText>
        </div>
      </SectionWrapper>

      {/* Áreas */}
      {areas.map((area, idx) => (
        <SectionWrapper
          key={area.id}
          id={area.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-offwhite"}
        >
          <Section>
            <AnimatedGroup className="max-w-3xl">
              <AnimatedItem>
                <SectionLabel>{area.titulo}</SectionLabel>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="font-serif text-navy text-4xl md:text-5xl font-medium leading-[1.15] mb-6">
                  {area.titulo}
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <div className="w-12 h-px bg-gold mb-8" />
              </AnimatedItem>
              <AnimatedItem>
                <p className="font-sans text-stone text-base leading-relaxed mb-8">
                  {area.intro}
                </p>
              </AnimatedItem>

              {/* Serviços */}
              <AnimatedItem>
                <div className="bg-offwhite border border-charcoal/8 p-6 rounded-sm mb-8">
                  <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-4">
                    Como podemos ajudar
                  </p>
                  <ul className="flex flex-col gap-3">
                    {area.servicos.map((s) => (
                      <li key={s} className="flex items-start gap-3 font-sans text-sm text-charcoal/80">
                        <span className="text-gold mt-1.5 text-xs shrink-0">✦</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedItem>

              {/* Destaque */}
              {area.destaque && (
                <AnimatedItem>
                  <p className="font-serif text-navy text-xl italic mb-8">
                    &ldquo;{area.destaque}&rdquo;
                  </p>
                </AnimatedItem>
              )}

              {/* CTAs */}
              <AnimatedItem>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-white font-sans font-medium text-sm px-7 py-3.5 rounded-sm transition-colors"
                    aria-label={`${area.cta} — ${area.titulo}`}
                  >
                    <MessageCircle size={16} />
                    {area.cta}
                  </a>
                  <Link
                    href={`/areas-de-atuacao/${area.id}`}
                    className="inline-flex items-center gap-2 font-sans text-sm text-charcoal/70 hover:text-charcoal transition-colors"
                    aria-label={`Ver página completa de ${area.titulo}`}
                  >
                    Ver página completa
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedItem>
            </AnimatedGroup>
          </Section>
        </SectionWrapper>
      ))}

      {/* Nota PJ — [A CONFIRMAR] */}
      {/* Se atendimento a empresas PJ for confirmado, descomentar:
      <SectionWrapper className="bg-offwhite border-t border-charcoal/8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-8">
          <p className="font-sans text-stone text-sm text-center">
            Atendimento a empresas (PJ) na região de Florianópolis e Grande Florianópolis.
          </p>
        </div>
      </SectionWrapper>
      */}

      <CTAFinal />
    </>
  );
}
