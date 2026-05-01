"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Link from "next/link";

const SITE_ORIGIN = "https://www.mexicomedieval.org";

type PaperEntry = {
  year: string;
  title: string;
  context: string;
  href: string;
  documentType: "paper" | "presentation";
  highlighted?: boolean;
  presentationSlug?: string;
};

/** Sourced from static-html/papers.html (Paper 1–3). */
const PAPERS: readonly PaperEntry[] = [
  {
    year: "2025",
    title:
      "Al límite de la esclavitud: los servos y la inmovilidad social de la Cerdeña medieval (siglos XI–XII)",
    context: "Presentado en el V Coloquio Internacional Las Otras Historias",
    href: `${SITE_ORIGIN}/servos_otrashistorias.html`,
    documentType: "presentation",
    highlighted: true,
    presentationSlug: "servos_otrashistorias",
  },
  {
    year: "2017",
    title: "A Border Within Borders: The Abruzzo and the Kingdom of Sicily",
    context: "Paper académico",
    href: "https://www.academia.edu/36800703/A_border_within_borders_the_Abruzzo_and_the_kingdom_of_Sicily_in_the_twelfth_century",
    documentType: "paper",
  },
  {
    year: "2015",
    title: "Counts and Counties in the Norman Mezzogiorno",
    context: "Paper académico",
    href: "https://www.academia.edu/14145287/Counts_and_Counties_in_the_Norman_Mezzogiorno_The_Arrangement_of_the_Nobility_under_the_Hauteville_Monarchy",
    documentType: "paper",
  },
];

const highlightedFromData = [...PAPERS].find(
  (p) => "highlighted" in p && p.highlighted === true,
);

const byYearDesc = <T extends { year: string }>(items: T[]) =>
  [...items].sort((a, b) => Number(b.year) - Number(a.year));

const PAPERS_ONLY = byYearDesc(
  [...PAPERS].filter((p) => p.documentType === "paper"),
);

const PRESENTATIONS_ONLY = byYearDesc(
  [...PAPERS].filter((p) => p.documentType === "presentation"),
);

const HIGHLIGHTED =
  highlightedFromData ?? PAPERS_ONLY[0] ?? PRESENTATIONS_ONLY[0];

const ACADEMIC_PAPERS = PAPERS_ONLY.filter(
  (p) =>
    !(
      HIGHLIGHTED?.documentType === "paper" && p.href === HIGHLIGHTED.href
    ),
);

const SPEAKER_PRESENTATIONS = PRESENTATIONS_ONLY.filter(
  (p) =>
    !(
      HIGHLIGHTED?.documentType === "presentation" &&
      p.href === HIGHLIGHTED.href
    ),
);

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function PresentationDetailsLink({
  slug,
  href,
  className,
  children,
}: {
  slug?: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (slug) {
    return (
      <Link href={`/papers/presentations/${slug}/details`} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  );
}

export default function PapersPage() {
  const { t } = useTranslations();

  return (
    <div className="relative min-h-full bg-[#fdf8ef] font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:px-12 md:pt-14">
        <section className="mb-20 text-center">
          <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            {t("papers.title")}
          </h1>
          <p className="font-body mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {t("papers.subtitle")}
          </p>
          <div className="mx-auto mt-12 max-w-md">
            <div className="manuscript-divider-fleuron w-full" />
          </div>
        </section>

        <section id="academic-papers" className="mb-32 scroll-mt-28">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-primary-container/20 p-3">
              <span className="material-symbols-outlined text-3xl text-primary">
                auto_stories
              </span>
            </div>
            <div>
              <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                {t("papers.researchPortal")}
              </span>
              <h2 className="font-headline text-3xl font-bold text-primary">
                {t("papers.academicPapers")}
              </h2>
            </div>
            <div className="ml-8 hidden h-px min-w-0 grow bg-outline-variant/30 md:block" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {HIGHLIGHTED?.documentType === "paper" ? (
              <div className="group relative overflow-hidden border border-outline-variant/20 bg-white p-8 shadow-sm transition-shadow hover:shadow-md md:col-span-7">
                <div className="relative z-10">
                  <span className="font-label text-xs font-bold text-tertiary-fixed-dim uppercase">
                    {HIGHLIGHTED.year}
                  </span>
                  <h3 className="font-headline mt-3 mb-4 text-2xl leading-snug text-primary">
                    {HIGHLIGHTED.title}
                  </h3>
                  <p className="font-body mb-8 text-sm text-on-surface-variant italic">
                    {HIGHLIGHTED.context}
                  </p>
                  <ExternalLink
                    href={HIGHLIGHTED.href}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors hover:bg-primary-container"
                  >
                    {t("papers.viewPaper")}
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </ExternalLink>
                </div>
              </div>
            ) : null}

            <div
              className={`flex flex-col gap-6 ${HIGHLIGHTED?.documentType === "paper" ? "md:col-span-5" : "md:col-span-12 md:flex-row md:flex-wrap"}`}
            >
              {ACADEMIC_PAPERS.map((item) => (
                <div
                  key={item.href}
                  className={`border border-outline-variant/20 bg-white p-6 shadow-sm transition-colors hover:bg-surface-container-lowest ${HIGHLIGHTED?.documentType === "paper" ? "" : "md:min-w-[280px] md:flex-1"}`}
                >
                  <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                    {item.year}
                  </span>
                  <h3 className="font-headline mt-2 mb-2 text-xl text-primary">
                    {item.title}
                  </h3>
                  <p className="font-body mb-6 text-sm text-on-surface-variant">
                    {item.context}
                  </p>
                  <ExternalLink
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-bold text-primary decoration-tertiary-fixed underline-offset-4 hover:underline"
                  >
                    {t("papers.viewPaper")}{" "}
                    <span className="material-symbols-outlined text-xs">
                      arrow_forward
                    </span>
                  </ExternalLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="speaker-presentations" className="scroll-mt-28">
          <div className="mb-12 flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-tertiary-fixed/30 p-3">
              <span className="material-symbols-outlined text-3xl text-primary">
                history_edu
              </span>
            </div>
            <div>
              <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                {t("papers.liveEvents")}
              </span>
              <h2 className="font-headline text-3xl font-bold text-primary">
                {t("papers.speakerPresentations")}
              </h2>
            </div>
            <div className="ml-8 hidden h-px min-w-0 grow bg-outline-variant/30 md:block" />
          </div>

          <div className="space-y-6">
            {HIGHLIGHTED?.documentType === "presentation" ? (
              <div className="group flex flex-col items-center gap-8 border border-outline-variant/20 bg-white p-8 shadow-sm transition-all hover:shadow-md md:flex-row">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed/20">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    mic
                  </span>
                </div>
                <div className="min-w-0 grow text-center md:text-left">
                  <div className="mb-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <span className="bg-tertiary-fixed px-3 py-1 text-[10px] font-bold tracking-widest text-on-tertiary-fixed uppercase">
                      {HIGHLIGHTED.year}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {t("papers.colloquium")}
                    </span>
                  </div>
                  <h3 className="font-headline mb-1 text-2xl font-bold text-primary">
                    {HIGHLIGHTED.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {HIGHLIGHTED.context}
                  </p>
                </div>
                <div className="w-full shrink-0 md:w-auto">
                  <PresentationDetailsLink
                    slug={HIGHLIGHTED.presentationSlug}
                    href={HIGHLIGHTED.href}
                    className="flex w-full items-center justify-center gap-2 border border-primary bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-on-primary md:w-auto"
                  >
                    {t("papers.viewDetails")}
                    <span className="material-symbols-outlined text-sm">
                      {HIGHLIGHTED.presentationSlug
                        ? "arrow_forward"
                        : "open_in_new"}
                    </span>
                  </PresentationDetailsLink>
                </div>
              </div>
            ) : null}

            {SPEAKER_PRESENTATIONS.map((item) => (
              <div
                key={item.href}
                className="group flex flex-col items-center gap-8 border border-outline-variant/20 bg-white p-8 shadow-sm transition-all hover:shadow-md md:flex-row"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed/20">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    mic
                  </span>
                </div>
                <div className="min-w-0 grow text-center md:text-left">
                  <div className="mb-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <span className="bg-tertiary-fixed px-3 py-1 text-[10px] font-bold tracking-widest text-on-tertiary-fixed uppercase">
                      {item.year}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {t("papers.colloquium")}
                    </span>
                  </div>
                  <h3 className="font-headline mb-1 text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {item.context}
                  </p>
                </div>
                <div className="w-full shrink-0 md:w-auto">
                  <PresentationDetailsLink
                    slug={item.presentationSlug}
                    href={item.href}
                    className="flex w-full items-center justify-center gap-2 border border-primary bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-on-primary md:w-auto"
                  >
                    {t("papers.viewDetails")}
                    <span className="material-symbols-outlined text-sm">
                      {item.presentationSlug ? "arrow_forward" : "open_in_new"}
                    </span>
                  </PresentationDetailsLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        <NewsletterSubscribeCard className="mt-24" />
      </main>
    </div>
  );
}
