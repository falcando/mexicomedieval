import type { BooksPageResponse } from "@/lib/types/book";

export async function fetchBooksPage(page: number): Promise<BooksPageResponse> {
  const res = await fetch(`/api/books/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load books: ${res.status}`);
  }
  return res.json() as Promise<BooksPageResponse>;
}
