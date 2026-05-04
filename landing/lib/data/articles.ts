import type {
  ArticleEntry,
  ArticleChaptersPageResponse,
  JournalArticlesPageResponse,
} from "@/lib/types/article";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";

/** Sourced from static-html/articulos.html (Article 1–9). */
export const ARTICLES: ArticleEntry[] = [
  {
    year: "2020",
    title:
      "The Making of Medieval Sardinia: A Historiographical Introduction",
    href: "https://doi.org/10.1163/9789004467545_002",
    documentType: "article",
    highlighted: true,
  },
  {
    year: "2020",
    title:
      "Discovery, Invention, and Supposition: Three Case Studies from Medieval Sardinia",
    href: "https://doi.org/10.1163/9789004467545_003",
    documentType: "bookChapter",
  },
  {
    year: "2020",
    title: "Rome Awards, Power and Society in Medieval Sardinia",
    href: "https://www.cambridge.org/core/journals/papers-of-the-british-school-at-rome/article/rome-awards-power-and-society-in-medieval-sardinia/A5E8FB6A67CB0CB452C1751CB0017CB1",
    documentType: "article",
  },
  {
    year: "2019",
    title:
      "La Cerdeña Medieval vista desde la modernidad. Un epítome historiográfico de la supuesta conectividad mediterránea",
    href: "https://revistascientificas.uach.mx/index.php/qvadrata/article/view/114",
    documentType: "article",
  },
  {
    year: "2019",
    title:
      "Royal comestabuli and Military Control in the Sicilian Kingdom: A Prosopographical Contribution to the Study of Italo-Norman Aristocracy",
    href: "https://scholarworks.wmich.edu/medpros/vol34/iss1/2/",
    documentType: "article",
  },
  {
    year: "2016",
    title:
      "Social Network Analysis and Narrative Structures: Measuring Communication and Influence in a Medieval Source on the Kingdom of Sicily",
    href: "https://doi.org/10.55555/IS.14.148",
    documentType: "article",
  },
  {
    year: "2016",
    title:
      "The Re-Arrangement of the Nobility Under the Hauteville Monarchy: The Creation of the South Italian Counties",
    href: "https://sites.exeter.ac.uk/exhistoria/archive/volume-8-2016/",
    documentType: "article",
  },
  {
    year: "2014",
    title: "Social Positions in the Liber de Regno Sicilie",
    href: "https://ams.ceu.edu/2014.htm",
    documentType: "article",
  },
  {
    year: "2009",
    title:
      "Modernidad política en la Edad Media: la experiencia y las instituciones normandas",
    href: "https://agora.colmex.mx/numero-6-2/",
    documentType: "article",
  },
];

const peerReviewedSorted = [...ARTICLES]
  .filter((a) => a.documentType === "article")
  .sort((a, b) => Number(b.year) - Number(a.year));

export function getHighlightedArticle(): ArticleEntry | undefined {
  const highlightedFromData = ARTICLES.find(
    (a) => "highlighted" in a && a.highlighted === true,
  );
  return highlightedFromData ?? peerReviewedSorted[0];
}

/** Journal grid: peer-reviewed articles, excluding the featured article when it is an article. */
export function getJournalListForPagination(): ArticleEntry[] {
  const featured = getHighlightedArticle();
  return peerReviewedSorted.filter(
    (a) =>
      !(
        featured?.documentType === "article" && a.href === featured.href
      ),
  );
}

export function getChapterListForPagination(): ArticleEntry[] {
  return [...ARTICLES]
    .filter((a) => a.documentType === "bookChapter")
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function getJournalArticlesTotalPages(): number {
  return totalPagesFromListLength(getJournalListForPagination().length);
}

export function getArticleChaptersTotalPages(): number {
  return totalPagesFromListLength(getChapterListForPagination().length);
}

export function getJournalArticlesPagePayload(
  page: number,
): JournalArticlesPageResponse | null {
  const list = getJournalListForPagination();
  const journalArticles = slicePage(list, page);
  if (journalArticles === null) {
    return null;
  }
  return {
    journalArticles,
    pagination: { total: list.length },
  };
}

export function getArticleChaptersPagePayload(
  page: number,
): ArticleChaptersPageResponse | null {
  const list = getChapterListForPagination();
  const chapters = slicePage(list, page);
  if (chapters === null) {
    return null;
  }
  return {
    chapters,
    pagination: { total: list.length },
  };
}
