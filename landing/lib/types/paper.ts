export type PaperDocumentType = "paper" | "presentation";

export type PaperEntry = {
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
