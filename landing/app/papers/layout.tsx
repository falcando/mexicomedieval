import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export async function generateMetadata(): Promise<Metadata> {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.papers,
    description:
      defaultLocale === "es"
        ? "Repositorio digital de investigación académica: artículos, documentos y presentaciones sobre la herencia medieval hispánica en el Nuevo Mundo."
        : "Digital repository of academic research: articles, documents, and presentations on the medieval Hispanic legacy in the New World.",
  };
}

export default function PapersLayout({ children }: { children: ReactNode }) {
  return children;
}
