import type {
  ArticleChaptersPageResponse,
  JournalArticlesPageResponse,
} from "@/lib/types/article";

export async function fetchJournalArticlesPage(
  page: number,
): Promise<JournalArticlesPageResponse> {
  const res = await fetch(`/api/articles/journal/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load journal articles: ${res.status}`);
  }
  return res.json() as Promise<JournalArticlesPageResponse>;
}

export async function fetchArticleChaptersPage(
  page: number,
): Promise<ArticleChaptersPageResponse> {
  const res = await fetch(`/api/articles/chapters/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load article chapters: ${res.status}`);
  }
  return res.json() as Promise<ArticleChaptersPageResponse>;
}
