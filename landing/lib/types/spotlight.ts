/** Which catalogue list to resolve for the home spotlight. */
export type SpotlightCatalogKind =
  | "book"
  | "journalArticle"
  | "bookChapter"
  | "event"
  | "paper"
  | "presentation"
  | "podcast";

/** Editorial selection: must match `catalogId` on the corresponding source row. */
export type SpotlightTarget = {
  kind: SpotlightCatalogKind;
  catalogId: string;
};

export type SpotlightPayload = {
  image: { src: string; alt: string };
  kicker: string;
  title: string;
  body: string;
  yearBadge: string;
  cta: { href: string; label: string };
};
