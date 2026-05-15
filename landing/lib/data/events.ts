import type { Locale } from "@/lib/i18n-config";
import type {
  EventsPageResponse,
  SiteEvent,
  SiteEventCtaIcon,
} from "@/lib/types/event";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";

type EventInformation = {
  title: string;
  description: string;
  institution?: string;
  category: string;
  format?: string;
  footerNote?: string;
};

type EventSource = {
  catalogId: string;
  active?: boolean;
  ctaIcon?: SiteEventCtaIcon;
  ctaKey: string;
  href?: string;
  information: Record<Locale, EventInformation>;
};

/** Placeholder for future event entries (talks, lectures, appearances). */
export const EVENTS: EventSource[] = [
  {
    catalogId: "cultura-poder-edad-media",
    active: true,
    ctaIcon: "arrow",
    information: {
      es: {
        title:
          "Cultura y poder en la Edad Media: Claves para una historia medieval conectada",
        category: "Curso",
        format: "Modalidad híbrida",
        description:
          "Curso híbrido que propone una visión crítica y accesible de la Edad Media como civilización diversa y conectada. A través de módulos sobre Antigüedad tardía, Mediterráneo, mundos nórdicos y eslavos, siglo XII, paralelos globales, reinos medievales y usos contemporáneos de la Edad Media, el curso busca desmontar estereotipos y ofrecer herramientas para comprender el periodo con rigor histórico.",
        institution: "El Colegio de Jalisco",
      },
      en: {
        title:
          "Culture and Power in the Middle Ages: Keys to a Connected Medieval History",
        category: "Course",
        format: "Hybrid format",
        description:
          "A hybrid course offering a critical and accessible view of the Middle Ages as a diverse and connected civilization. Through modules on late antiquity, the Mediterranean, Nordic and Slavic worlds, the twelfth century, global parallels, medieval kingdoms, and contemporary uses of the Middle Ages, the course seeks to challenge stereotypes and provide tools for understanding the period with historical rigour.",
        institution: "El Colegio de Jalisco",
      },
    },
    ctaKey: "events.ctaDetails",
    href: "https://coljal.mx/curso-cultura-y-poder-en-la-edad-media-claves-para-una-historia-medieval-conectada/",
  },
  {
    catalogId: "alejandro-magno-curso",
    active: true,
    information: {
      es: {
        title: "Alejandro Magno (o de cómo se cambia el mundo)",
        category: "Curso asincrónico",
        format: "En línea",
        description:
          "Curso asincrónico de acceso abierto sobre Alejandro Magno, su mundo y su legado histórico. Propone una entrada accesible a la figura del rey macedonio, sus campañas, la expansión helenística y la manera en que su memoria siguió transformando la cultura política e histórica durante siglos.",
        institution: "Universidad CNCI / Plataforma Incurso",
      },
      en: {
        title: "Alexander the Great, or How the World Changes",
        category: "Async course",
        format: "Online",
        description:
          "An open-access asynchronous course on Alexander the Great, his world, and his historical legacy. It offers an accessible introduction to the Macedonian king, his campaigns, Hellenistic expansion, and the ways in which his memory continued to shape political and historical culture for centuries.",
        institution: "Universidad CNCI / Incurso Platform",
      },
    },
    ctaKey: "events.ctaEnter",
    href: "https://incurso-cnci.com/course/162/alejandro-magno-o-de-como-se-cambia-el-mundo",
  },
  {
    catalogId: "festival-libro-medieval-2026",
    active: false,
    ctaKey: "",
    information: {
      es: {
        title: "Festival del Libro Medieval 2026",
        category: "Festival",
        description:
          "Entrada inicial para integrar el programa, fechas, sede y enlaces del Festival del Libro Medieval 2026 cuando estén disponibles. Esta tarjeta puede servir como espacio para anunciar actividades, presentaciones, talleres, conversaciones y encuentros vinculados con la divulgación de la Edad Media.",
        footerNote: "CDMX — Sede por confirmar",
      },
      en: {
        title: "Medieval Book Festival 2026",
        category: "Festival",
        description:
          "Initial entry for adding the programme, dates, venue, and links for the 2026 Medieval Book Festival when they become available. This card can be used to announce activities, presentations, workshops, conversations, and gatherings linked to medieval public history.",
        footerNote: "CDMX — Venue to be confirmed",
      },
    },
  },
];

export function getEventsTotalPages(): number {
  return totalPagesFromListLength(EVENTS.length);
}

/** 1-based page. Returns null if page is out of range. */
export function getEventsPagePayload(
  page: number,
  language: Locale,
): EventsPageResponse | null {
  const pageItems = slicePage(EVENTS, page);
  if (pageItems === null) {
    return null;
  }
  const events: SiteEvent[] = pageItems.map((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- internal id, not part of SiteEvent
    const { information, active: activeFlag, ctaIcon, catalogId, ...rest } =
      item;
    const info = information[language];
    return {
      ...rest,
      active: activeFlag !== false,
      ctaIcon,
      title: info.title,
      description: info.description,
      institution: info.institution,
      category: info.category,
      format: info.format,
      footerNote: info.footerNote,
    };
  });
  return {
    events,
    pagination: { total: EVENTS.length },
  };
}
