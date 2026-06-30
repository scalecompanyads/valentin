import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

const categorias: Record<string, { label: string; description: string; areaSlug: string }> = {
  trabalhista: {
    label: "Trabalhista",
    description: "Artigos sobre Direito Trabalhista: verbas rescisórias, horas extras, vínculo empregatício e demissões. Entenda seus direitos como trabalhador.",
    areaSlug: "trabalhista",
  },
  previdenciario: {
    label: "Previdenciário",
    description: "Artigos sobre Direito Previdenciário: aposentadorias, auxílio-doença, BPC/LOAS e benefícios negados pelo INSS. Saiba como reverter indeferimentos.",
    areaSlug: "previdenciario",
  },
  consumidor: {
    label: "Consumidor",
    description: "Artigos sobre Direito do Consumidor: cobranças indevidas, negativação injusta, contratos abusivos e problemas com bancos.",
    areaSlug: "consumidor",
  },
  administrativo: {
    label: "Administrativo",
    description: "Artigos sobre Direito Administrativo: direitos de servidores públicos, concursos e processos administrativos.",
    areaSlug: "administrativo",
  },
};

export function generateStaticParams() {
  return Object.keys(categorias).map((categoria) => ({ categoria }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const cat = categorias[categoria];
  if (!cat) return {};
  return {
    title: { absolute: `${cat.label} | Blog Valentin Perin Advocacia` },
    description: cat.description,
    openGraph: {
      title: `Artigos sobre Direito ${cat.label} | Valentin Perin Advocacia`,
      description: cat.description,
    },
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const cat = categorias[categoria];
  if (!cat) notFound();

  const posts = blogPosts.filter(
    (p) => p.category.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-") === categoria
      || p.category.toLowerCase() === cat.label.toLowerCase()
  );

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Artigos sobre Direito ${cat.label} — Valentin Perin Advocacia`,
    itemListElement: posts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteConfig.url}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <SectionWrapper className="bg-navy pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-wide text-white/50 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={13} />
            Todas as categorias
          </Link>
          <AnimatedText as="div">
            <SectionLabel light>Categoria</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h1"
            delay={0.1}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1]"
          >
            Direito {cat.label}
          </AnimatedText>
          <AnimatedText as="div" delay={0.2}>
            <div className="w-16 h-px bg-gold mt-8" />
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.3}
            className="font-sans text-white/70 text-lg leading-relaxed mt-6 max-w-2xl"
          >
            {cat.description}
          </AnimatedText>
        </div>
      </SectionWrapper>

      {/* Posts */}
      <Section>
        {posts.length === 0 ? (
          <p className="font-sans text-stone text-base">Nenhum artigo publicado nesta categoria ainda.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-charcoal/8 rounded-sm overflow-hidden hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 bg-navy/8 shrink-0">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-sans text-xs text-stone/60">
                      <Clock size={11} />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-navy text-xl font-medium leading-snug mb-3 group-hover:text-navy-dark transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="font-sans text-stone text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors mt-auto">
                    Ler mais <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 pt-10 border-t border-charcoal/10">
          <p className="font-sans text-sm text-stone mb-4">
            Precisa de orientação em {cat.label.toLowerCase()}?
          </p>
          <Link
            href={`/areas-de-atuacao/${cat.areaSlug}`}
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            Ver nossa atuação em Direito {cat.label}
            <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <CTAFinal />
    </>
  );
}
