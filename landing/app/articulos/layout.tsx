import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Articles | The Digital Manuscript — México Medieval",
  description:
    "Curated peer-reviewed research, journal articles, and book chapters on the medieval foundations of New Spain.",
};

export default function ArticulosLayout({ children }: { children: ReactNode }) {
  return children;
}
