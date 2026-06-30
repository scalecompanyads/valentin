import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const areaLinks = [
  { label: "Direito Trabalhista", href: "/areas-de-atuacao/trabalhista" },
  { label: "Direito Previdenciário", href: "/areas-de-atuacao/previdenciario" },
  { label: "Direito do Consumidor", href: "/areas-de-atuacao/consumidor" },
  { label: "Direito Administrativo", href: "/areas-de-atuacao/administrativo" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 font-sans">
      {/* Linha dourada decorativa */}
      <div className="h-px bg-gold/40 w-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1 — Identidade */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-valentin-perin.svg"
              alt="Logo Valentin Perin Advocacia"
              width={220}
              height={65}
              className="h-auto w-[180px] md:w-[210px] mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Advocacia técnica e atendimento premium em todo o Brasil, com
              atenção e respeito a cada cliente.
            </p>
          </div>

          {/* Coluna 2 — Links rápidos */}
          <div>
            <h3 className="font-sans text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Navegação
            </h3>
            <nav aria-label="Rodapé — links rápidos">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <h3 className="font-sans text-white text-xs font-semibold tracking-[0.15em] uppercase mt-8 mb-5">
              Áreas de Atuação
            </h3>
            <nav aria-label="Rodapé — áreas de atuação">
              <ul className="flex flex-col gap-2.5">
                {areaLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="font-sans text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">
              Contato
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-gold-light transition-colors"
                  aria-label="WhatsApp do escritório"
                >
                  <MessageCircle size={15} className="mt-0.5 shrink-0" />
                  {/* [A CONFIRMAR] número */}
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-gold-light transition-colors"
                  aria-label="Instagram do escritório"
                >
                  <InstagramIcon size={15} className="mt-0.5 shrink-0" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-gold-light transition-colors"
                  aria-label="E-mail do escritório"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  {/* [A CONFIRMAR] e-mail */}
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                {/* [A CONFIRMAR] endereço completo */}
                <span>{siteConfig.enderecoDisplay}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock size={15} className="mt-0.5 shrink-0" />
                <span>{siteConfig.horario}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Valentin Perin Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="text-xs text-white/30">
              {siteConfig.oab.join(" · ")}
            </p>
            <a
              href="https://scalecompany.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Desenvolvido por Scale Company
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
