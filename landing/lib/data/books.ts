import type { Book, BooksPageResponse } from "@/lib/types/book";

export const BOOKS_PAGE_SIZE = 10;

/** Sourced from static-html/libros.html (Book 1, Book 2). */
export const BOOKS: Book[] = [
  {
    image:
      "https://brill.com/coverimage?doc=%2Ftitle%2F38771&width=200&type=webp",
    alt: "Portada del libro The Making of Medieval Sardinia",
    badge: "Brill",
    year: "2021",
    title: "The Making of Medieval Sardinia",
    description: "Published by Brill",
    href: "https://brill.com/display/title/38771",
    ctaKey: "libros.ctaBrill",
  },
  {
    image: "https://media.bloomsbury.com/rep/bj/9781350133228.jpg",
    alt: "Portada del libro County and Nobility in Norman Italy",
    badge: "Bloomsbury",
    year: "2020",
    title: "County and Nobility in Norman Italy",
    description: "Published by Bloomsbury",
    href: "https://www.bloomsbury.com/uk/county-and-nobility-in-norman-italy-9781350133228/",
    ctaKey: "libros.ctaBloomsbury",
  },
];

export function getBooksTotalPages(): number {
  return Math.max(1, Math.ceil(BOOKS.length / BOOKS_PAGE_SIZE));
}

/** 1-based page. Returns null if page is out of range. */
export function getBooksPagePayload(page: number): BooksPageResponse | null {
  if (!Number.isInteger(page) || page < 1) {
    return null;
  }
  const totalPages = getBooksTotalPages();
  if (page > totalPages) {
    return null;
  }
  const start = (page - 1) * BOOKS_PAGE_SIZE;
  return {
    books: BOOKS.slice(start, start + BOOKS_PAGE_SIZE),
    pagination: { total: BOOKS.length },
  };
}

export function booksTotalPagesFromTotal(total: number): number {
  return Math.max(1, Math.ceil(total / BOOKS_PAGE_SIZE));
}
