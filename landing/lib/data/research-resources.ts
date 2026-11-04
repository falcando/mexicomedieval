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
};

export const RESEARCH_RESOURCES: ResearchResource[] = [
  {
    slug: "legislacion-indiana",
    href: "/recursos/legislacion-indiana",
    icon: "account_balance",
    kicker: {
      es: "Recurso documental e historiográfico",
      en: "Documentary and historiographical resource",
    },
    title: {
      es: "Legislación y cultura normativa de las Indias en el siglo XVI",
      en: "Legislation and normative culture in the sixteenth-century Indies",
    },
    description: {
      es: "Línea del tiempo interactiva para distinguir normas promulgadas, legislación territorial, cedularios, proyectos recopiladores y recopilaciones sancionadas, con fuentes primarias e historiografía enlazadas.",
      en: "An interactive timeline distinguishing enacted royal norms, territorial legislation, cedularies, compilation projects, and sanctioned compilations, with linked primary sources and historiography.",
    },
  },
];

export function getResearchResource(slug: string): ResearchResource | undefined {
  return RESEARCH_RESOURCES.find((resource) => resource.slug === slug);
}
