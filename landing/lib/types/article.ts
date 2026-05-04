export type ArticleDocumentType = "article" | "bookChapter";

export type ArticleEntry = {
  year: string;
  title: string;
  href: string;
  documentType: ArticleDocumentType;
  highlighted?: boolean;
};

export type JournalArticlesPageResponse = {
  journalArticles: ArticleEntry[];
  pagination: { total: number };
};

export type ArticleChaptersPageResponse = {
  chapters: ArticleEntry[];
  pagination: { total: number };
};
