/** Keys into messages for the book CTA label (locale-agnostic API). */
export type BookCtaKey = "libros.ctaBrill" | "libros.ctaBloomsbury" | "libros.ctaDOI" | "libros.ctaGoogleBooks" | "libros.ctaAmazonMX" | "libros.ctaConsulta";

export type BookUrl = {
  url: string;
  ctaKey: BookCtaKey;
}

export type Book = {
  image: string;
  alt: string;
  badge: string;
  year: string;
  title: string;
  /** Locale-specific subtitle when present in catalog data. */
  subtitle?: string;
  description: string;
  author: string;
  urls: BookUrl[];
};

/** Paginated books payload; `pagination.total` is the full catalog size. */
export type BooksPageResponse = {
  books: Book[];
  pagination: {
    total: number;
  };
};
