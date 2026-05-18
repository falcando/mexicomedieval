import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { PrivacyNoticePage } from "@/views/privacy-notice-page";

export function generateMetadata(): Metadata {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.privacyNotice.title,
    description: m.privacyNotice.metaDescription,
  };
}

export default function Page() {
  return <PrivacyNoticePage />;
}
