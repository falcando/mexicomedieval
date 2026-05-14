import type { Locale } from "@/lib/i18n-config";
import type { BooksPageResponse } from "@/lib/types/book";

/**
 * Loads books in the browser without calling `/api/books/...`.
 * With `output: "export"`, App Route handlers are not served in `next dev` (404),
 * and production is static files only — same data as `app/api/books/[language]/[page]/route.ts`.
 */
export async function fetchBooksPage(
  page: number,
  language: Locale,
): Promise<BooksPageResponse> {
  const { getBooksPagePayload } = await import("@/lib/data/books");
  const payload = getBooksPagePayload(page, language);
  if (!payload) {
    throw new Error("Failed to load books: not found");
  }
  return payload;
}
