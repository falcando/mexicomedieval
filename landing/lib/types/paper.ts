export type PaperDocumentType = "paper" | "presentation";

export type PaperEntry = {
  catalogId?: string;
  /**
   * Optional image for the home spotlight block (path under `public/`, e.g. `/images/foo.webp`).
   * When omitted, the spotlight uses the site default hero image.
   */
  spotlightImage?: string;
  /** Alt text for `spotlightImage`; defaults to `title` when omitted. */
  spotlightImageAlt?: string;
  year: string;
  title: string;
  context: string;
  href: string;
  documentType: PaperDocumentType;
  highlighted?: boolean;
  presentationSlug?: string;
};

export type AcademicPapersPageResponse = {
  papers: PaperEntry[];
  pagination: { total: number };
};

export type PresentationsPageResponse = {
  presentations: PaperEntry[];
  pagination: { total: number };
};
