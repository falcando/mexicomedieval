import type { Metadata } from "next";
import { RelationalFactoidResourcePage } from "@/views/relational-factoid-resource-page";

export const metadata: Metadata = {
  title: "Ontología relacional de factoids (RFO)",
  description:
    "Recurso de investigación sobre prosopografía relacional y su formalización mediante RDF, RDFS y OWL, con código y documentación disponibles en GitHub.",
};

export default function Page() {
  return <RelationalFactoidResourcePage />;
}
