import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo claro sobre direitos trabalhistas, previdenciários e do consumidor. Entenda seus direitos sem juridiquês.",
  openGraph: {
    title: "Blog | Valentin Perin Advocacia",
    description:
      "Conteúdo claro sobre seus direitos. Sem juridiquês.",
  },
};

const categorias = [
  { label: "Todos", href: "/blog" },
  { label: "Trabalhista", href: "/blog/categoria/trabalhista" },
  { label: "Previdenciário", href: "/blog/categoria/previdenciario" },
  { label: "Consumidor", href: "/blog/categoria/consumidor" },
  { label: "Administrativo", href: "/blog/categoria/administrativo" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blog Valentin Perin Advocacia",
  description: "Artigos sobre Direito Trabalhista, Previdenciário, do Consumidor e Administrativo.",
  itemListElement: blogPosts.map((post, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: `https://valentinperinadvocacia.com.br/blog/${post.slug}`,
    name: post.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* Hero */}
      <SectionWrapper className="bg-navy pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
          <AnimatedText as="div">
            <SectionLabel light>Conteúdo</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h1"
            delay={0.1}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1]"
          >
            Blog Valentin Perin
          </AnimatedText>
          <AnimatedText as="div" delay={0.2}>
            <div className="w-16 h-px bg-gold mt-8" />
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.3}
            className="font-sans text-white/70 text-lg leading-relaxed mt-6 max-w-2xl"
          >
            Informações claras e atualizadas sobre seus direitos. Conteúdo
            direto, sem juridiquês, para você entender o que está em jogo e
            tomar boas decisões.
          </AnimatedText>
        </div>
      </SectionWrapper>

      {/* Posts */}
      <Section>
        {/* Filtro de categorias (visual — implementar lógica com URL params se necessário) */}
        <div className="flex flex-wrap gap-2 mb-14" role="navigation" aria-label="Filtrar por categoria">
          {categorias.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={`font-sans text-xs font-medium px-4 py-2 rounded-sm border transition-colors
                ${cat.label === "Todos"
                  ? "bg-navy text-white border-navy"
                  : "border-charcoal/20 text-stone hover:border-navy hover:text-navy"
                }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-charcoal/8 rounded-sm overflow-hidden hover:shadow-md hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              {/* Imagem do artigo */}
              <div className="relative h-48 bg-navy/8 shrink-0">
                {post.coverImage ? (
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                      {post.category}
                    </span>
                  </div>
                )}
                {/* Badge Overlay */}
                {post.coverImage && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-navy">
                      {post.category}
                    </span>
                  </div>
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
      </Section>
    </>
  );
}
