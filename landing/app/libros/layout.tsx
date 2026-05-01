import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Digital Scriptorium | México Medieval",
  description:
    "Archive of Books: illuminated annals, sacred liturgies, and maps that defined New Spain.",
};

export default function LibrosLayout({ children }: { children: ReactNode }) {
  return children;
}
