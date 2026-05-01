import servosOtrasHistorias from "@/data/presentations/servos_otrashistorias.json";

export type PresentationSection = {
  order: number;
  title: string;
  description: string;
};

export type PresentationCitation = {
  roman: string;
  titleLine: string;
  description: string;
  linkLabel: string;
  href: string;
};

export type PresentationDetail = {
  slug: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  meta: {
    presenter: string;
    dateLabel: string;
    venue: string;
  };
  heroImage?: {
    src: string;
    alt: string;
  };
  summary: string;
  summaryBullets: string[];
  presentationOrderIntro: string;
  sections: PresentationSection[];
  keyPhrases: string[];
  bibliography: PresentationCitation[];
  additionalResources: {
    title: string;
    body: string;
    pdf: { label: string; href: string };
  };
  researcherNote: {
    title: string;
    body: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

const registry: Record<string, PresentationDetail> = {
  servos_otrashistorias: servosOtrasHistorias as PresentationDetail,
};

export function getPresentationBySlug(slug: string): PresentationDetail | null {
  return registry[slug] ?? null;
}

export function listPresentationSlugs(): string[] {
  return Object.keys(registry);
}
