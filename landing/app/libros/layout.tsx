import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export async function generateMetadata(): Promise<Metadata> {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.books,
    description: m.libros.subtitle,
  };
}

export default function LibrosLayout({ children }: { children: ReactNode }) {
  return children;
}
