import type { Metadata } from "next";
import type { ReactNode } from "react";
import { defaultLocale } from "@/lib/i18n-config";

export async function generateMetadata(): Promise<Metadata> {
  const spanish = defaultLocale === "es";
  return {
    title: spanish ? "¿Invasores o invitados?" : "Invaders or Invitees?",
    description: spanish
      ? "La agencia romana y el desplazamiento de pueblos extranjeros, ejércitos “bárbaros” y foederati hacia el Imperio romano y en su interior. Recurso de investigación."
      : "Roman Agency and the Movement of Foreign Peoples, ‘Barbarian’ Armies and Foederati into and within the Roman Empire. Source-critical research resource.",
    robots: { index: true, follow: true },
  };
}

export default function RomanInvitationsLayout({ children }: { children: ReactNode }) {
  return children;
}
