import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { siteConfig } from "@/lib/site-config";

/* JSON-LD — LegalService schema */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.name,
  description:
    "Escritório de advocacia com atuação em todo o Brasil nas áreas Trabalhista, Previdenciária, do Consumidor e Administrativa.",
  url: siteConfig.url,
  telephone: siteConfig.whatsappDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.endereco,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  areaServed: { "@type": "Country", name: "Brasil" },
  sameAs: [siteConfig.instagram],
  founder: {
    "@type": "Attorney",
    name: siteConfig.fundador,
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
