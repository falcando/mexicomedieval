import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export async function generateMetadata(): Promise<Metadata> {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.articles,
    description:
      defaultLocale === "es"
        ? "Investigación revisada por pares, artículos de revista y capítulos de libro sobre los fundamentos medievales de la Nueva España."
        : "Curated peer-reviewed research, journal articles, and book chapters on the medieval foundations of New Spain.",
  };
}

export default function ArticulosLayout({ children }: { children: ReactNode }) {
  return children;
}
