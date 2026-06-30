"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Shield, ShoppingCart, Building2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionWrapper } from "@/components/ui/Section";

const areas = [
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    slug: "trabalhista",
    description:
      "Defesa dos direitos de quem trabalha: verbas rescisórias, horas extras, reconhecimento de vínculo, assédio e demissões irregulares.",
    image: "/images/Frame 1707483076.jpg",
    imagePosition: "object-[30%_center]",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    slug: "previdenciario",
    description:
      "Aposentadorias, auxílios, BPC/LOAS, revisões e benefícios indeferidos pelo INSS.",
    image: "/images/Frame 1707483077.jpg",
    imagePosition: "object-center",
  },
  {
    icon: ShoppingCart,
    title: "Direito do Consumidor",
    slug: "consumidor",
    description:
      "Cobranças indevidas, negativação injusta, contratos abusivos e problemas com produtos, serviços e instituições financeiras.",
    image: "/images/Frame 1707483078.jpg",
    imagePosition: "object-[70%_center]",
  },
  {
    icon: Building2,
    title: "Direito Administrativo",
    slug: "administrativo",
    description:
      "Questões envolvendo o poder público, servidores, concursos, processos e atos administrativos.",
    image: "/images/Frame 1707483079.jpg",
    imagePosition: "object-[55%_center]",
  },
];

function AreaCard({
  icon: Icon,
  title,
  description,
  slug,
  image,
  imagePosition,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  slug: string;
  image: string;
  imagePosition: string;
}) {
  return (
    <div className="group w-full shrink-0 basis-full md:basis-1/2 xl:basis-1/3 px-2 md:px-3">
      <Link
        href={`/areas-de-atuacao/${slug}`}
        className="relative block min-h-[360px] md:min-h-[420px] overflow-hidden"
        aria-label={`Saiba mais sobre ${title}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${imagePosition}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <div className="w-12 h-12 rounded-none bg-white/10 backdrop-blur-[1px] border border-white/30 flex items-center justify-center mb-6">
            <Icon size={22} className="text-white" />
          </div>

          <h3 className="font-serif text-white text-3xl md:text-4xl font-medium mb-4 leading-tight">
            {title}
          </h3>

          <div className="w-10 h-px bg-white/55 mb-4" />

          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed mb-5 max-w-xl">
            {description}
          </p>

          <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white group-hover:text-white/90 transition-colors">
            Saiba mais
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </div>
  );
}

export function AreasGrid() {
  const prefersReduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
        return;
      }
      if (window.innerWidth < 1280) {
        setCardsPerView(2);
        return;
      }
      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, areas.length - cardsPerView);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <SectionWrapper className="bg-black py-20 md:py-28">
      <div className="w-full px-4 md:px-8 lg:px-10">
        <div className="mb-12 md:mb-16 flex items-end justify-between gap-6">
          <div className="text-left max-w-4xl">
            <AnimatedText as="p" className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/65 mb-4">
              O que fazemos
            </AnimatedText>
            <AnimatedText
              as="h2"
              delay={0.1}
              className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-6"
            >
              Áreas de atuação
            </AnimatedText>
            <AnimatedText as="p" delay={0.2} className="font-sans text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              Oferecemos assessoria e atuação jurídica em quatro grandes áreas,
              sempre com técnica, estratégia e atenção ao cliente.
            </AnimatedText>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={goPrev}
              className="h-11 w-11 inline-flex items-center justify-center border border-white/25 text-white hover:bg-white/10 transition-colors"
              aria-label="Card anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="h-11 w-11 inline-flex items-center justify-center border border-white/25 text-white hover:bg-white/10 transition-colors"
              aria-label="Próximo card"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="-mx-2 md:-mx-3 flex"
            animate={{ x: `calc(-${activeIndex} * (100% / ${cardsPerView}))` }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {areas.map((area) => (
              <AreaCard key={area.slug} {...area} />
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="h-11 w-11 inline-flex items-center justify-center border border-white/25 text-white hover:bg-white/10 transition-colors"
            aria-label="Card anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={`mobile-step-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 w-7 transition-colors ${index === activeIndex ? "bg-white" : "bg-white/30"}`}
                aria-label={`Ir para card ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="h-11 w-11 inline-flex items-center justify-center border border-white/25 text-white hover:bg-white/10 transition-colors"
            aria-label="Próximo card"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-6 hidden md:flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={`desktop-step-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 w-8 transition-colors ${index === activeIndex ? "bg-white" : "bg-white/30"}`}
              aria-label={`Ir para card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
