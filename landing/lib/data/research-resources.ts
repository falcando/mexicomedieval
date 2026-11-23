export type LocalizedText = {
  es: string;
  en: string;
};

export type ResearchResource = {
  slug: string;
  href: string;
  icon: string;
  kicker: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  references?: { href: string; label: LocalizedText }[];
};

export const RESEARCH_RESOURCES: ResearchResource[] = [
  {
    slug: "invasores-o-invitados",
    href: "/recursos/invasores-o-invitados",
    icon: "history_edu",
    kicker: {
      es: "Recurso documental e historiográfico",
      en: "Documentary and historiographical resource",
    },
    title: {
      es: "¿Invasores o invitados?",
      en: "Invaders or Invitees?",
    },
    description: {
      es: "Cronología crítica sobre la intervención de las autoridades romanas en la entrada, el desplazamiento y la presencia de pueblos extranjeros, ejércitos “bárbaros” y foederati dentro del Imperio. Incluye testimonios antiguos, bibliografía y controversias historiográficas.",
      en: "A source-critical chronology of Roman decisions concerning the entry, movement and presence of foreign peoples, ‘barbarian’ armies and foederati within the Empire, with ancient testimony and historiographical debate.",
    },
  },

  {
    slug: "legislacion-indiana",
    href: "/recursos/legislacion-indiana",
    icon: "account_balance",
    kicker: {
      es: "Recurso documental e historiográfico",
      en: "Documentary and historiographical resource",
    },
    title: {
      es: "Legislación y cultura normativa en las Indias hispánicas del siglo XVI",
      en: "Legislation and normative culture in the sixteenth-century Spanish Indies",
    },
    description: {
      es: "Línea del tiempo interactiva para distinguir normas promulgadas, legislación territorial, cedularios, proyectos recopiladores y recopilaciones sancionadas, con fuentes primarias e historiografía enlazadas.",
      en: "An interactive timeline distinguishing enacted royal norms, territorial legislation, cedularies, compilation projects, and sanctioned compilations, with linked primary sources and historiography.",
    },
  },
  {
    slug: "ontologia-relacional-factoids",
    href: "/recursos/ontologia-relacional-factoids",
    icon: "account_tree",
    kicker: {
      es: "Recurso metodológico de humanidades digitales",
      en: "Digital humanities research resource",
    },
    title: {
      es: "Ontología de Prosopografía Relacional basada en Factoids (RFPO)",
      en: "Relational Factoid Prosopography Ontology (RFPO)",
    },
    description: {
      es: "La Relational Factoid Prosopography Ontology (RFPO) formaliza en RDF/OWL el modelo de prosopografía relacional desarrollado por Hervin Fernández Aceves a partir de la FPO de John Bradley. Sus antecedentes están documentados en un artículo de EPOCH (2020) y en presentaciones académicas enlazadas. Versión de trabajo 0.1.",
      en: "The Relational Factoid Prosopography Ontology (RFPO) formalises Hervin Fernández Aceves's model of relational prosopography in RDF/OWL as an extension of John Bradley's FPO. Its background is documented in an EPOCH article (2020) and linked academic presentations. Working version 0.1.",
    },
    references: [
      { href: "https://www.epoch-magazine.com/post/what-can-we-learn-from-the-semantic-web-to-revamp-our-historical-research", label: { es: "Artículo en EPOCH (2020)", en: "EPOCH article (2020)" } },
      { href: "https://www.academia.edu/24429003/The_Uncharted_Networks_of_a_Chartered_Territory_Diplomatic_Evidence_and_Relational_Sociology_for_the_Norman_Kingdom_of_Sicily", label: { es: "Presentación del modelo relacional", en: "Relational model presentation" } },
      { href: "https://www.dissinet.cz/news/events-calendar/616919u-online-lecture-an-adapted-ontology-for-a-prosopography-of-medieval-sardinia-rdf-schemes-owl-and-an-open-linked-database", label: { es: "Conferencia sobre la ontología (2022)", en: "Ontology lecture (2022)" } },
    ],
  },

];

export function getResearchResource(slug: string): ResearchResource | undefined {
  return RESEARCH_RESOURCES.find((resource) => resource.slug === slug);
}
