import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { EventsPage } from "@/views/events-page";

export function generateMetadata(): Metadata {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.events,
    description: m.events.subtitle,
  };
}

export default function Page() {
  return <EventsPage />;
}

