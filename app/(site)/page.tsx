import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { AreasGrid } from "@/components/sections/AreasGrid";
import { MissaoVV } from "@/components/sections/MissaoVV";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { PorQueVP } from "@/components/sections/PorQueVP";
import { BlogChamada } from "@/components/sections/BlogChamada";
import { NaMidia } from "@/components/sections/NaMidia";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = {
  title: {
    absolute:
      "Valentin Perin Advocacia | Advogado Trabalhista e Previdenciário em Florianópolis",
  },
  description:
    "Escritório de advocacia em Florianópolis/SC com atuação em todo o Brasil. Direito Trabalhista, Previdenciário, do Consumidor e Administrativo. Atendimento premium e técnico.",
  openGraph: {
    title: "Valentin Perin Advocacia | Advogado em Florianópolis",
    description:
      "Direito Trabalhista, Previdenciário, do Consumidor e Administrativo. Atendimento em todo o Brasil.",
    url: "https://valentinperinadvocacia.com.br",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <AreasGrid />
      <MissaoVV />
      <ComoFunciona />
      <Depoimentos />
      <PorQueVP />
      <BlogChamada />
      <NaMidia />
      <CTAFinal />
    </>
  );
}
