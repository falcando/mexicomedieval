import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export async function generateMetadata(): Promise<Metadata> {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.about,
    description:
      defaultLocale === "es"
        ? "México Medieval: archivo digital de investigación y divulgación sobre mundos hispánicos medievales, con el Dr. Hervin Fernández Aceves (FRHistS)."
        : "México Medieval: digital archive of research and outreach on medieval Hispanic worlds, with Dr. Hervin Fernández Aceves (FRHistS).",
  };
}

export default function QuienesSomosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
