import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Advocacia Trabalhista, Previdenciária e mais`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Escritório de advocacia com atuação em todo o Brasil nas áreas Trabalhista, Previdenciária, do Consumidor e Administrativa. Atendimento premium e técnico. Fale conosco.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/social-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valentin Perin Advocacia — Direito Trabalhista, Previdenciário, do Consumidor e Administrativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/social-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-offwhite text-charcoal">
        {children}
      </body>
    </html>
  );
}
