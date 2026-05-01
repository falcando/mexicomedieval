import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Quiénes somos — México Medieval",
  description:
    "México Medieval: archivo digital de investigación y divulgación sobre mundos hispánicos medievales, con el Dr. Hervin Fernández Aceves (FRHistS).",
};

export default function QuienesSomosLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
