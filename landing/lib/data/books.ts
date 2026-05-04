import type { Book, BooksPageResponse } from "@/lib/types/book";
import {
  ENTITY_PAGE_SIZE,
  slicePage,
  totalPagesFromListLength,
} from "@/lib/pagination";

/** @deprecated Use ENTITY_PAGE_SIZE from @/lib/pagination */
export const BOOKS_PAGE_SIZE = ENTITY_PAGE_SIZE;

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
  return totalPagesFromListLength(BOOKS.length);
}

/** 1-based page. Returns null if page is out of range. */
export function getBooksPagePayload(page: number): BooksPageResponse | null {
  const books = slicePage(BOOKS, page);
  if (books === null) {
    return null;
  }
  return {
    books,
    pagination: { total: BOOKS.length },
  };
}
