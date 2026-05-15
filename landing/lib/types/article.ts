import type { Locale } from "@/lib/i18n-config";

export type ArticleDocumentType = "article" | "bookChapter";

export type ArticleInformation = {
  authors: string;
  data: string;
  topics: string[];
  abstract: string;
};

/** Authoring shape: locale-keyed copy merged per request (see books). */
export type ArticleSource = {
  /** Stable id for home spotlight / cross-references (see `lib/data/spotlight-config.ts`). */
  catalogId?: string;
  year: string;
  title: string;
  documentType: ArticleDocumentType;
  highlighted?: boolean;
  urls: {
    href: string;
    ctaKey: string;
  }[];
  information: Record<Locale, ArticleInformation>;
};

/** Serialized article for a chosen locale (no `information` map). */
export type ArticleEntry = {
  year: string;
  title: string;
  documentType: ArticleDocumentType;
  urls: ArticleSource["urls"];
} & ArticleInformation;

export type JournalArticlesPageResponse = {
  journalArticles: ArticleEntry[];
  pagination: { total: number };
};

export type ArticleChaptersPageResponse = {
  chapters: ArticleEntry[];
  pagination: { total: number };
};
