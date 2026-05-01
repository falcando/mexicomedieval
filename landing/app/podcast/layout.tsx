import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "México Medieval — Podcast Archive",
  description:
    "The Oral Archive: podcast series on the medieval Mediterranean and the early modern Americas.",
};

export default function PodcastLayout({ children }: { children: ReactNode }) {
  return children;
}
