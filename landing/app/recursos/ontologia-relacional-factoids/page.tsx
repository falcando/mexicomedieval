import type { Metadata } from "next";
import { RelationalFactoidResourcePage } from "@/views/relational-factoid-resource-page";

export const metadata: Metadata = {
  title: "Ontología de Prosopografía Relacional basada en Factoids (RFPO)",
  description:
    "RFPO: ontología de prosopografía relacional basada en factoids, formalizada mediante RDF/OWL a partir de la FPO de John Bradley y disponible en GitHub.",
};

export default function Page() {
  return <RelationalFactoidResourcePage />;
}
