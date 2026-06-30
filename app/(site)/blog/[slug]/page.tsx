import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowLeft, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Blog Valentin Perin`,
      description: post.summary,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Converte markdown simples (## ## ###, **bold**, listas -) em HTML básico
  const renderBody = (body: string) => {
    return body
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="font-serif text-navy text-3xl font-medium mt-10 mb-4">
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="font-serif text-navy text-2xl font-medium mt-8 mb-3">
              {block.replace("### ", "")}
            </h3>
          );
        }
        if (block.trim().startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.trim().startsWith("- "));
          return (
            <ul key={i} className="flex flex-col gap-2 my-4 pl-4">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 font-sans text-charcoal/80 text-base leading-relaxed">
                  <span className="text-gold mt-2 text-xs shrink-0">✦</span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="font-sans text-charcoal/80 text-base leading-relaxed my-4"
            dangerouslySetInnerHTML={{
              __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      });
  };

  const dateFormatted = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: `${siteConfig.url}${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteConfig.url}/sobre`,
    },
    publisher: {
      "@type": "LegalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <div className="relative pt-32 min-h-[50vh] flex items-center bg-black overflow-hidden">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-wide text-white/50 hover:text-gold transition-colors mb-8"
            aria-label="Voltar ao blog"
          >
            <ArrowLeft size={13} />
            Blog
          </Link>

          <p className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4 drop-shadow-md">
            {post.category}
          </p>

          <h1 className="font-serif text-white text-4xl md:text-5xl font-medium leading-[1.1] mb-6 drop-shadow-lg">
            {post.title}
          </h1>

          <div className="w-12 h-px bg-gold mb-6" />

          <div className="flex flex-wrap items-center gap-4 font-sans text-sm text-white/60 drop-shadow-sm">
            <Link
              href="/sobre"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
              aria-label={`Ver perfil de ${post.author}`}
            >
              <User size={13} />
              {post.author}
            </Link>
            <span aria-hidden="true">·</span>
            <span>{dateFormatted}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingTime} de leitura
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <article>
          <p className="font-sans text-stone text-lg leading-relaxed mb-8 font-medium border-l-2 border-gold pl-5">
            {post.summary}
          </p>

          <div className="prose-custom">{renderBody(post.body)}</div>
        </article>

        {/* CTA ao final do artigo */}
        <div className="mt-16 bg-navy p-8 rounded-sm text-center">
          <p className="font-serif text-white text-2xl font-medium mb-3">
            Ficou com dúvidas sobre o seu caso?
          </p>
          <p className="font-sans text-white/60 text-sm leading-relaxed mb-6">
            Fale com a nossa equipe e receba uma orientação clara.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-sans font-medium text-sm px-7 py-3.5 rounded-sm border-none transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20"
            aria-label="Falar com um advogado pelo WhatsApp"
          >
            <MessageCircle size={16} />
            Falar com um advogado (WhatsApp)
          </a>
        </div>

        {/* Link interno para a área relacionada */}
        <div className="mt-8 p-6 border border-charcoal/10 bg-offwhite flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-1">
              Saiba mais
            </p>
            <p className="font-sans text-charcoal/80 text-sm leading-relaxed">
              Veja como atuamos em {post.relatedAreaTitulo} e entenda como podemos ajudar no seu caso.
            </p>
          </div>
          <Link
            href={`/areas-de-atuacao/${post.relatedAreaSlug}`}
            className="shrink-0 inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold transition-colors whitespace-nowrap"
          >
            {post.relatedAreaTitulo}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Navegação */}
        <div className="mt-10 pt-8 border-t border-charcoal/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} />
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </>
  );
}
