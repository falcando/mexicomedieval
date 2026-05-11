import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { ContactoPage } from "@/views/contacto-page";

export function generateMetadata(): Metadata {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.contact.title,
    description: m.contact.body,
  };
}

export default function Page() {
  return <ContactoPage />;
}
