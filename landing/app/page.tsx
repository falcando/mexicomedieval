import type { Metadata } from "next";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import { HomePage } from "@/views/home-page";

const meta = defaultLocale === "es" ? es.metadata : en.metadata;

export const metadata: Metadata = {
  title: { absolute: "México Medieval" },
  description: meta.siteDescription,
};

export default function Page() {
  return <HomePage />;
}
