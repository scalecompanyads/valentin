import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { siteConfig } from "@/lib/site-config";
import { areasData, getAreaBySlug } from "@/lib/areas-data";

export function generateStaticParams() {
  return areasData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  const titleMap: Record<string, string> = {
    trabalhista: "Advogado Trabalhista em Florianópolis",
    previdenciario: "Advogado Previdenciário em Florianópolis",
    consumidor: "Advogado do Consumidor em Florianópolis",
    administrativo: "Advogado Administrativo em Florianópolis",
  };
  const pageTitle = `${titleMap[area.slug] ?? area.titulo} | Valentin Perin Advocacia`;

  return {
    title: { absolute: pageTitle },
    description: area.metaDescription,
    openGraph: {
      title: pageTitle,
      description: area.metaDescription,
      images: [{ url: area.image, alt: area.titulo }],
    },
    twitter: { images: [area.image] },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de tirar uma dúvida sobre ${area.titulo}.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappGeral}?text=${whatsappMessage}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.titulo,
    description: area.metaDescription,
    provider: {
      "@type": "LegalService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.whatsappDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.endereco,
        addressLocality: "Florianópolis",
        addressRegion: "SC",
        addressCountry: "BR",
      },
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    url: `${siteConfig.url}/areas-de-atuacao/${area.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Áreas de Atuação", item: `${siteConfig.url}/areas-de-atuacao` },
      { "@type": "ListItem", position: 3, name: area.titulo, item: `${siteConfig.url}/areas-de-atuacao/${area.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: { "@type": "Answer", text: item.resposta },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="relative pt-32 min-h-[50vh] flex flex-col justify-end bg-black overflow-hidden">
        {area.image && (
          <Image
            src={area.image}
            alt={area.titulo}
            fill
            sizes="100vw"
            className={`object-cover opacity-40 mix-blend-luminosity ${area.imagePosition || "object-center"}`}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-8 pb-12 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-sans text-xs text-white/50">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true"><ChevronRight size={11} /></li>
              <li><Link href="/areas-de-atuacao" className="hover:text-gold transition-colors">Áreas de Atuação</Link></li>
              <li aria-hidden="true"><ChevronRight size={11} /></li>
              <li className="text-white/80" aria-current="page">{area.titulo}</li>
            </ol>
          </nav>

          <AnimatedText as="div">
            <SectionLabel light>{area.subtitulo}</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h1"
            delay={0.1}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.08] max-w-3xl drop-shadow-lg"
          >
            {area.titulo}
          </AnimatedText>
          <AnimatedText as="div" delay={0.2}>
            <div className="w-14 h-px bg-gold mt-8 mb-8" />
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.3}
            className="font-sans text-white/80 text-lg leading-relaxed max-w-2xl mb-10 drop-shadow-sm"
          >
            {area.heroDesc}
          </AnimatedText>
          <AnimatedText as="div" delay={0.4}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-sans font-medium text-sm px-8 py-4 rounded-sm border-none transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20"
              aria-label={area.cta}
            >
              <MessageCircle size={17} />
              {area.cta}
            </a>
          </AnimatedText>
        </div>
      </div>

      {/* A situacao */}
      <SectionWrapper className="bg-white">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedGroup>
              <AnimatedItem>
                <SectionLabel>O problema</SectionLabel>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-6">
                  {area.situacao.titulo}
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <div className="w-12 h-px bg-gold mb-8" />
              </AnimatedItem>
              <AnimatedItem>
                <p className="font-sans text-stone text-base leading-relaxed">
                  {area.situacao.intro}
                </p>
              </AnimatedItem>
            </AnimatedGroup>

            <AnimatedGroup stagger={0.08}>
              <AnimatedItem>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-charcoal/50 mb-5">
                  Situações comuns
                </p>
              </AnimatedItem>
              <ul className="flex flex-col gap-4">
                {area.situacao.sinais.map((sinal) => (
                  <AnimatedItem key={sinal}>
                    <li className="flex items-start gap-4">
                      <CheckCircle2
                        size={18}
                        className="text-gold shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-charcoal/80 text-base leading-relaxed">
                        {sinal}
                      </span>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </AnimatedGroup>
          </div>
        </Section>
      </SectionWrapper>

      {/* Como atuamos */}
      <SectionWrapper className="bg-navy">
        <Section>
          <AnimatedGroup className="mb-14">
            <AnimatedItem>
              <SectionLabel light>Nosso processo</SectionLabel>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] max-w-2xl">
                {area.processo.titulo}
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <div className="w-12 h-px bg-gold mt-6" />
            </AnimatedItem>
          </AnimatedGroup>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {area.processo.etapas.map((etapa, idx) => (
              <AnimatedText
                key={etapa.numero}
                as="div"
                delay={idx * 0.1}
                className="border-t border-white/15 pt-8 pb-8 pr-8"
              >
                <span className="block font-serif text-gold/60 text-4xl font-medium mb-6 leading-none">
                  {etapa.numero}
                </span>
                <h3 className="font-serif text-white text-xl font-medium mb-3 leading-snug">
                  {etapa.titulo}
                </h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">
                  {etapa.descricao}
                </p>
              </AnimatedText>
            ))}
          </div>
        </Section>
      </SectionWrapper>

      {/* Servicos */}
      <SectionWrapper className="bg-offwhite">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedGroup>
              <AnimatedItem>
                <SectionLabel>Cobertura</SectionLabel>
              </AnimatedItem>
              <AnimatedItem>
                <h2 className="font-serif text-navy text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-6">
                  {area.servicos.titulo}
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <div className="w-12 h-px bg-gold mb-8" />
              </AnimatedItem>
              <AnimatedItem>
                <p className="font-sans text-stone text-base leading-relaxed">
                  Cada caso é analisado individualmente. As situações abaixo
                  representam os temas mais frequentes com que atuamos nessa
                  área, mas nossa análise cobre outras hipóteses que possam
                  surgir.
                </p>
              </AnimatedItem>
            </AnimatedGroup>

            <AnimatedGroup stagger={0.07}>
              <ul className="flex flex-col gap-3">
                {area.servicos.lista.map((servico) => (
                  <AnimatedItem key={servico}>
                    <li className="flex items-start gap-4 bg-white border border-charcoal/8 px-5 py-4">
                      <span
                        className="text-gold text-xs mt-1.5 shrink-0"
                        aria-hidden="true"
                      >
                        ✦
                      </span>
                      <span className="font-sans text-charcoal/85 text-sm leading-relaxed">
                        {servico}
                      </span>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </AnimatedGroup>
          </div>
        </Section>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white">
        <Section className="max-w-4xl mx-auto">
          <AnimatedGroup className="mb-12">
            <AnimatedItem>
              <SectionLabel>Dúvidas frequentes</SectionLabel>
            </AnimatedItem>
            <AnimatedItem>
              <h2 className="font-serif text-navy text-3xl md:text-4xl font-medium leading-[1.15]">
                Perguntas frequentes
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <div className="w-12 h-px bg-gold mt-6" />
            </AnimatedItem>
          </AnimatedGroup>

          <div className="flex flex-col gap-0">
            {area.faq.map((item, idx) => (
              <AnimatedText key={item.pergunta} as="div" delay={idx * 0.07}>
                <details className="group border-b border-charcoal/12 py-1">
                  <summary className="list-none cursor-pointer flex items-start justify-between gap-6 py-5 font-sans font-medium text-charcoal text-base leading-snug select-none">
                    <span>{item.pergunta}</span>
                    <span className="shrink-0 w-5 h-5 border border-charcoal/25 flex items-center justify-center mt-0.5 text-charcoal/60 group-open:rotate-45 transition-transform duration-200 text-sm leading-none">
                      +
                    </span>
                  </summary>
                  <p className="font-sans text-stone text-sm leading-relaxed pb-6 pr-11">
                    {item.resposta}
                  </p>
                </details>
              </AnimatedText>
            ))}
          </div>

          {/* Destaque */}
          {area.destaque && (
            <AnimatedText
              as="p"
              delay={0.3}
              className="font-serif text-navy text-2xl italic text-center mt-14"
            >
              &ldquo;{area.destaque}&rdquo;
            </AnimatedText>
          )}
        </Section>
      </SectionWrapper>

      <CTAFinal />
    </>
  );
}
