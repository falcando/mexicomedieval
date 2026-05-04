/** Keys into messages for the book CTA label (locale-agnostic API). */
export type BookCtaKey = "libros.ctaBrill" | "libros.ctaBloomsbury";

export type Book = {
  image: string;
  alt: string;
  badge: string;
  year: string;
  title: string;
  description: string;
  href: string;
  ctaKey: BookCtaKey;
};

/** Paginated books payload; `pagination.total` is the full catalog size. */
export type BooksPageResponse = {
  books: Book[];
  pagination: {
    total: number;
  };
};
