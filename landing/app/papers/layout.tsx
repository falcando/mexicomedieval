import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Papers y presentaciones — México Medieval",
  description:
    "Repositorio digital de investigación académica: artículos, documentos y presentaciones sobre la herencia medieval hispánica en el Nuevo Mundo.",
};

export default function PapersLayout({ children }: { children: ReactNode }) {
  return children;
}
