import type { Locale } from "@/lib/i18n-config";
import type {
  ArticleChaptersPageResponse,
  JournalArticlesPageResponse,
} from "@/lib/types/article";

/**
 * Loads articles in the browser without calling `/api/articles/...`.
 * With `output: "export"`, App Route handlers are not served in `next dev` (404),
 * and production is static files only — same data as the `app/api/articles/...` routes.
 */
export async function fetchJournalArticlesPage(
  page: number,
  language: Locale,
): Promise<JournalArticlesPageResponse> {
  const { getJournalArticlesPagePayload } = await import("@/lib/data/articles");
  const payload = getJournalArticlesPagePayload(page, language);
  if (!payload) {
    throw new Error("Failed to load journal articles: not found");
  }
  return payload;
}

export async function fetchArticleChaptersPage(
  page: number,
  language: Locale,
): Promise<ArticleChaptersPageResponse> {
  const { getArticleChaptersPagePayload } = await import("@/lib/data/articles");
  const payload = getArticleChaptersPagePayload(page, language);
  if (!payload) {
    throw new Error("Failed to load article chapters: not found");
  }
  return payload;
}
