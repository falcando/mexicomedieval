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
];

export function getResearchResource(slug: string): ResearchResource | undefined {
  return RESEARCH_RESOURCES.find((resource) => resource.slug === slug);
}
