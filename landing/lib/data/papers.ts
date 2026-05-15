import type {
  PaperEntry,
  AcademicPapersPageResponse,
  PresentationsPageResponse,
} from "@/lib/types/paper";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";

const SITE_ORIGIN = "https://www.mexicomedieval.org";

/** Sourced from static-html/papers.html (Paper 1–3). */
export const PAPERS: PaperEntry[] = [
  {
    catalogId: "al-limite-esclavitud-sardinia",
    year: "2025",
    title:
      "Al límite de la esclavitud: los servos y la inmovilidad social de la Cerdeña medieval (siglos XI–XII)",
    context: "Presentado en el V Coloquio Internacional Las Otras Historias",
    href: `${SITE_ORIGIN}/servos_otrashistorias.html`,
    documentType: "presentation",
    highlighted: true,
    presentationSlug: "servos_otrashistorias",
  },
  {
    catalogId: "border-within-borders-abruzzo",
    year: "2017",
    title: "A Border Within Borders: The Abruzzo and the Kingdom of Sicily",
    context: "Paper académico",
    href: "https://www.academia.edu/36800703/A_border_within_borders_the_Abruzzo_and_the_kingdom_of_Sicily_in_the_twelfth_century",
    documentType: "paper",
  },
  {
    catalogId: "counts-counties-norman-mezzogiorno",
    year: "2015",
    title: "Counts and Counties in the Norman Mezzogiorno",
    context: "Paper académico",
    href: "https://www.academia.edu/14145287/Counts_and_Counties_in_the_Norman_Mezzogiorno_The_Arrangement_of_the_Nobility_under_the_Hauteville_Monarchy",
    documentType: "paper",
  },
];

const byYearDesc = <T extends { year: string }>(items: T[]) =>
  [...items].sort((a, b) => Number(b.year) - Number(a.year));

const papersOnly = () =>
  byYearDesc(PAPERS.filter((p) => p.documentType === "paper"));

const presentationsOnly = () =>
  byYearDesc(PAPERS.filter((p) => p.documentType === "presentation"));

export function getHighlightedPaper(): PaperEntry | undefined {
  const highlightedFromData = PAPERS.find(
    (p) => "highlighted" in p && p.highlighted === true,
  );
  const pOnly = papersOnly();
  const presOnly = presentationsOnly();
  return highlightedFromData ?? pOnly[0] ?? presOnly[0];
}

export function getAcademicPapersListForPagination(): PaperEntry[] {
  const highlighted = getHighlightedPaper();
  return papersOnly().filter(
    (p) =>
      !(
        highlighted?.documentType === "paper" && p.href === highlighted.href
      ),
  );
}

/** Full presentations catalog for the API (includes the highlighted entry). */
export function getPresentationsListForPagination(): PaperEntry[] {
  return presentationsOnly();
}

export function getAcademicPapersTotalPages(): number {
  return totalPagesFromListLength(
    getAcademicPapersListForPagination().length,
  );
}

export function getPresentationsTotalPages(): number {
  return totalPagesFromListLength(
    getPresentationsListForPagination().length,
  );
}

export function getAcademicPapersPagePayload(
  page: number,
): AcademicPapersPageResponse | null {
  const list = getAcademicPapersListForPagination();
  const papers = slicePage(list, page);
  if (papers === null) {
    return null;
  }
  return {
    papers,
    pagination: { total: list.length },
  };
}

export function getPresentationsPagePayload(
  page: number,
): PresentationsPageResponse | null {
  const list = getPresentationsListForPagination();
  const presentations = slicePage(list, page);
  if (presentations === null) {
    return null;
  }
  return {
    presentations,
    pagination: { total: list.length },
  };
}
