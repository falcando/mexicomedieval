import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { VideosPage } from "@/views/videos-page";

export function generateMetadata(): Metadata {
  const m = defaultLocale === "es" ? es : en;
  return {
    title: m.nav.videos,
    description: m.videos.subtitle,
  };
}

export default function Page() {
  return <VideosPage />;
}
