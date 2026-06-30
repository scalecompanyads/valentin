import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/lib/blog-data";

export function BlogChamada() {
  const posts = blogPosts.slice(0, 3);

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <SectionLabel>Blog</SectionLabel>
          <AnimatedText
            as="h2"
            className="font-serif text-navy text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            Informações claras sobre seus direitos
          </AnimatedText>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold transition-colors shrink-0"
          aria-label="Ver todos os artigos do blog"
        >
          Ler todos os artigos
          <ArrowRight size={15} />
        </Link>
      </div>

      <AnimatedText
        as="p"
        delay={0.15}
        className="font-sans text-stone text-base leading-relaxed mb-12 max-w-2xl"
      >
        Conteúdo direto e atualizado sobre direitos trabalhistas,
        previdenciários, do consumidor e mais — sem linguagem complicada.
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-charcoal/8 rounded-sm overflow-hidden hover:shadow-md hover:border-gold/30 transition-all duration-300"
          >
            {/* Imagem do artigo */}
            <div className="relative h-40 bg-navy/8">
              {post.coverImage ? (
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
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
            <div className="p-6">
              <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
                {post.category}
              </p>
              <h3 className="font-serif text-navy text-xl font-medium leading-snug mb-3 group-hover:text-navy-dark transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-stone text-sm leading-relaxed mb-4 line-clamp-2">
                {post.summary}
              </p>
              <span className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors">
                Ler mais <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
