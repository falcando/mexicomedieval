import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

export async function generateMetadata(): Promise<Metadata> {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.resources.indianLaw.title,
    description: m.resources.indianLaw.metaDescription,
  };
}

export default function IndianLawResourceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
