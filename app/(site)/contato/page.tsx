import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { AnimatedGroup, AnimatedItem, AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Section, SectionWrapper } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Valentin Perin Advocacia pelo WhatsApp ou formulário. Atendimento em todo o Brasil, com horário estendido.",
  openGraph: {
    title: "Contato | Valentin Perin Advocacia",
    description: "Fale conosco pelo WhatsApp ou pelo formulário.",
  },
};

const canais = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    valor: siteConfig.whatsappDisplay, // [A CONFIRMAR]
    href: `https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`,
    externo: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    valor: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    externo: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    valor: siteConfig.email, // [A CONFIRMAR]
    href: `mailto:${siteConfig.email}`,
    externo: false,
  },
  {
    icon: MapPin,
    label: "Endereço",
    valor: siteConfig.enderecoDisplay, // [A CONFIRMAR]
    href: null,
    externo: false,
  },
  {
    icon: Clock,
    label: "Horário",
    valor: siteConfig.horario,
    href: null,
    externo: false,
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="bg-navy pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-20">
          <AnimatedText as="div">
            <SectionLabel light>Fale conosco</SectionLabel>
          </AnimatedText>
          <AnimatedText
            as="h1"
            delay={0.1}
            className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] max-w-3xl"
          >
            Fale com o Valentin Perin Advocacia
          </AnimatedText>
          <AnimatedText as="div" delay={0.2}>
            <div className="w-16 h-px bg-gold mt-8" />
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.3}
            className="font-sans text-white/70 text-lg leading-relaxed mt-6 max-w-2xl"
          >
            Estamos prontos para ouvir o seu caso. O primeiro contato é simples,
            acolhedor e sem compromisso — entenda seus direitos e os próximos
            passos.
          </AnimatedText>
        </div>
      </SectionWrapper>

      {/* Conteúdo */}
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Canais de contato */}
        <AnimatedGroup className="order-2 lg:order-1">
          <AnimatedItem>
            <h2 className="font-serif text-navy text-3xl font-medium mb-8">
              Canais de atendimento
            </h2>
          </AnimatedItem>

          <div className="flex flex-col gap-5">
            {canais.map((canal) => (
              <AnimatedItem key={canal.label}>
                <div className="flex items-start gap-4 p-5 bg-white border border-charcoal/8 rounded-sm hover:border-gold/30 transition-colors group">
                  <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <canal.icon size={18} className="text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold mb-1">
                      {canal.label}
                    </p>
                    {canal.href ? (
                      <a
                        href={canal.href}
                        target={canal.externo ? "_blank" : undefined}
                        rel={canal.externo ? "noopener noreferrer" : undefined}
                        className="font-sans text-sm text-charcoal/80 hover:text-navy transition-colors break-all"
                        aria-label={`${canal.label}: ${canal.valor}`}
                      >
                        {canal.valor}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-charcoal/80 break-words">
                        {canal.valor}
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* CTA WhatsApp direto */}
          <AnimatedItem>
            <div className="mt-8">
              <a
                href={`https://wa.me/${siteConfig.whatsappGeral}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-white font-sans font-medium text-sm px-7 py-3.5 rounded-sm transition-colors w-full sm:w-auto justify-center sm:justify-start"
                aria-label="Chamar diretamente no WhatsApp"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp agora
              </a>
            </div>
          </AnimatedItem>

          {/* Horário destacado */}
          <AnimatedItem>
            <div className="mt-6 p-5 bg-navy/5 border-l-2 border-gold rounded-r-sm">
              <p className="font-sans text-xs font-semibold tracking-wide uppercase text-gold mb-1">
                Horário de atendimento
              </p>
              <p className="font-sans text-sm text-charcoal/70">
                Segunda a sexta, 10h às 21h
              </p>
              <p className="font-sans text-sm text-charcoal/70">
                Sábado, 10h às 20h
              </p>
              <p className="font-sans text-xs text-stone/60 mt-2">
                Horário estendido, inclusive noturno e aos sábados, para maior
                comodidade.
              </p>
            </div>
          </AnimatedItem>
        </AnimatedGroup>

        {/* Formulário */}
        <div className="order-1 lg:order-2">
          <AnimatedText
            as="h2"
            className="font-serif text-navy text-3xl font-medium mb-8"
          >
            Envie uma mensagem
          </AnimatedText>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
