import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export async function generateMetadata(): Promise<Metadata> {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.podcast,
    description:
      defaultLocale === "es"
        ? "El archivo oral: series de podcast sobre el Mediterráneo medieval y las Américas tempranas."
        : "The Oral Archive: podcast series on the medieval Mediterranean and the early modern Americas.",
  };
}

export default function PodcastLayout({ children }: { children: ReactNode }) {
  return children;
}
