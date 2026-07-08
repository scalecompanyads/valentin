"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const areaCards = [
  {
    label: "Direito Trabalhista",
    href: "/areas-de-atuacao/trabalhista",
    description: "Verbas rescisórias, horas extras e vínculo empregatício.",
    image: "/images/Frame 1707483076.jpg",
    imagePosition: "object-[30%_center]",
  },
  {
    label: "Direito Previdenciário",
    href: "/areas-de-atuacao/previdenciario",
    description: "Aposentadorias, auxílios, BPC/LOAS e revisões de benefício.",
    image: "/images/Frame 1707483077.jpg",
    imagePosition: "object-center",
  },
  {
    label: "Direito do Consumidor",
    href: "/areas-de-atuacao/consumidor",
    description: "Cobranças indevidas, negativação injusta e contratos abusivos.",
    image: "/images/Frame 1707483078.jpg",
    imagePosition: "object-[70%_center]",
  },
  {
    label: "Direito Administrativo",
    href: "/areas-de-atuacao/administrativo",
    description: "Concursos, servidores e processos administrativos.",
    image: "/images/Frame 1707483079.jpg",
    imagePosition: "object-[55%_center]",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  {
    label: "Áreas de Atuação",
    href: "/areas-de-atuacao",
    children: areaCards,
  },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu ao navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Trava scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = pathname === "/";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-10 pt-4"
    >
      <div
        className={`relative max-w-[1600px] mx-auto h-18 px-6 md:px-8 lg:px-10 flex items-center justify-between bg-white border border-black/10 transition-shadow duration-300 ${
          scrolled || !isHome ? "shadow-[0_10px_30px_rgba(0,0,0,0.12)]" : "shadow-none"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Valentin Perin Advocacia — página inicial"
        >
          <Image
            src="/images/logo-valentin-perin.svg"
            alt="Logo Valentin Perin Advocacia"
            width={210}
            height={62}
            priority
            className="h-auto w-[119px] md:w-[190px]"
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.href} className="group static">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 font-sans text-sm tracking-wide transition-colors duration-150 ${
                    pathname === link.href
                      ? "text-black font-semibold"
                      : "text-black/70 hover:text-black"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-full opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                  <div className="w-full bg-white border border-black/10 shadow-[0_14px_40px_rgba(0,0,0,0.16)] p-3">
                    <div className="grid grid-cols-4 gap-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group/card relative block min-h-[350px] overflow-hidden"
                      >
                        <Image
                          src={child.image}
                          alt={child.label}
                          fill
                          sizes="360px"
                          className={`object-cover transition-transform duration-400 group-hover/card:scale-[1.03] ${child.imagePosition}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end">
                          <p className="font-serif text-white text-xl leading-tight mb-1.5">
                            {child.label}
                          </p>
                          <p className="font-sans text-white/80 text-xs leading-relaxed">
                            {child.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm tracking-wide transition-colors duration-150
                  ${pathname === link.href
                    ? "text-black font-semibold"
                    : "text-black/70 hover:text-black"
                  }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-sans font-medium text-sm px-5 py-2.5 rounded-none transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20 border-none"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={16} />
          Fale Conosco
        </a>

        {/* Hambúrguer mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-black p-2 -mr-2"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-black/10"
          >
            <nav
              className="flex flex-col px-6 py-6 gap-1"
              aria-label="Navegação mobile"
            >
              {navLinks.map((link) => (
                link.children ? (
                  <details key={link.href} className="border-b border-black/10 py-1 group">
                    <summary
                      className={`list-none cursor-pointer flex items-center justify-between font-sans text-base py-2.5 transition-colors ${
                        pathname === link.href ? "text-black font-semibold" : "text-black/75"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={16} className="transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="pl-4 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 font-sans text-sm text-black/70 hover:text-black transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-sans text-base py-3 border-b border-black/10 transition-colors
                      ${pathname === link.href
                        ? "text-black font-semibold"
                        : "text-black/75 hover:text-black"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <a
                href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[position:right_center] text-black font-sans font-medium text-sm px-5 py-3 rounded-none transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20 border-none"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle size={16} />
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
