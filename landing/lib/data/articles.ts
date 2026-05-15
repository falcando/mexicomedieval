import type {
  ArticleEntry,
  ArticleSource,
  ArticleChaptersPageResponse,
  JournalArticlesPageResponse,
} from "@/lib/types/article";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";
import type { Locale } from "@/lib/i18n-config";

function materializeArticle(
  source: ArticleSource,
  language: Locale,
): ArticleEntry {
  const info = source.information[language];
  return {
    year: source.year,
    title: source.title,
    documentType: source.documentType,
    urls: source.urls,
    authors: info.authors,
    data: info.data,
    topics: info.topics,
    abstract: info.abstract,
  };
}

/** Sourced from static-html/articulos.html (Article 1–9). */
export const ARTICLES: ArticleSource[] = [
  {
    year: "2026",
    title: "A Stemma of Sigurgarðs saga frækna, and a Case Study of Saga-Anthologization",
    documentType: "article",
    highlighted: true,
    information: {
      es: {
        authors:
          "Alaric Hall, Sheryl McDonald, Hervin Fernández-Aceves, Katelin Marit Parsons e Ian Simpson",
        data: "Journal of Early Medieval Northwestern Europe, vol. 22, 2026.",
        topics: [
          "Estemática",
          "Sagas islandesas",
          "Transmisión manuscrita",
          "Antologización",
          "Vikingos",
        ],
        abstract:
          "Este artículo publica el primer stemma de los manuscritos de Sigurgarðs saga frækna, romance islandés del siglo XV, a partir de 58 de los 61 testimonios conocidos. El estudio aprovecha la publicación digital para ofrecer datos abiertos y examinar la transmisión postmedieval de la saga. También analiza manuscritos producidos entre los siglos XVII y XIX en la región islandesa de Dalir para estudiar cómo los escribas construían antologías y cómo esas decisiones influyeron en compilaciones posteriores.",
      },
      en: {
        authors:
          "Alaric Hall, Sheryl McDonald, Hervin Fernández-Aceves, Katelin Marit Parsons and Ian Simpson",
        data: "Journal of Early Medieval Northwestern Europe, vol. 22, 2026. DOI: 10.5281/zenodo.18475600",
        topics: [
          "Stemmatology",
          "Icelandic sagas",
          "Manuscript transmission",
          "Anthologization",
          "Vikings",
        ],
        abstract:
          "This article publishes the first stemma of the manuscripts of Sigurgarðs saga frækna, Icelandic romance of the 15th century, from 58 of the 61 known testimonies. The study makes use of digital publication to offer open data and examine the postmedieval transmission of the saga. It also analyzes manuscripts produced between the 17th and 19th centuries in the Dalir region of Iceland to study how scribes constructed anthologies and how those decisions influenced subsequent compilations.",
      },
    },
    urls: [
      {
        href: "https://jemne.org/issues/22/halletal.php",
        ctaKey: "articulos.readArticle",
      },
      {
        href: "https://doi.org/10.5281/zenodo.18475600",
        ctaKey: "articulos.viewDOI",
      },
    ],
  },
];

const peerReviewedSorted = [...ARTICLES]
  .filter((a) => a.documentType === "article")
  .sort((a, b) => Number(b.year) - Number(a.year));

export function getHighlightedArticleSource(): ArticleSource | undefined {
  const highlightedFromData = ARTICLES.find(
    (a) => "highlighted" in a && a.highlighted === true,
  );
  return highlightedFromData ?? peerReviewedSorted[0];
}

export function getHighlightedArticle(
  language: Locale,
): ArticleEntry | undefined {
  const src = getHighlightedArticleSource();
  return src ? materializeArticle(src, language) : undefined;
}

/** Journal grid: peer-reviewed articles, excluding the featured article when it is an article. */
export function getJournalListForPagination(): ArticleSource[] {
  // const featured = getHighlightedArticleSource();
  // const featuredPrimary = featured?.urls[0]?.href;
  // return peerReviewedSorted.filter(
  //   (a) =>
  //     !(
  //       featured?.documentType === "article" &&
  //       featuredPrimary !== undefined &&
  //       a.urls[0]?.href === featuredPrimary
  //     ),
  // );
  return peerReviewedSorted;
}

export function getChapterListForPagination(): ArticleSource[] {
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
  language: Locale,
): JournalArticlesPageResponse | null {
  const list = getJournalListForPagination();
  const slice = slicePage(list, page);
  if (slice === null) {
    return null;
  }
  return {
    journalArticles: slice.map((a) => materializeArticle(a, language)),
    pagination: { total: list.length },
  };
}

export function getArticleChaptersPagePayload(
  page: number,
  language: Locale,
): ArticleChaptersPageResponse | null {
  const list = getChapterListForPagination();
  const slice = slicePage(list, page);
  if (slice === null) {
    return null;
  }
  return {
    chapters: slice.map((a) => materializeArticle(a, language)),
    pagination: { total: list.length },
  };
}
