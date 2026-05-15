import type { Metadata } from "next";
import { defaultLocale, type Locale } from "@/lib/i18n-config";
import { getSpotlightPayload } from "@/lib/spotlight/get-spotlight-payload";
import type { SpotlightPayload } from "@/lib/types/spotlight";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { HomePage } from "@/views/home-page";

const meta = defaultLocale === "es" ? es.metadata : en.metadata;

export const metadata: Metadata = {
  title: { absolute: "México Medieval" },
  description: meta.siteDescription,
};

export default function Page() {
  const spotlightByLocale: Record<Locale, SpotlightPayload | null> = {
    en: getSpotlightPayload("en"),
    es: getSpotlightPayload("es"),
  };

  return <HomePage spotlightByLocale={spotlightByLocale} />;
}
