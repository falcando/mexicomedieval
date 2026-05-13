"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { getHighlightedPaper } from "@/lib/data/papers";
import {
  useAcademicPapersPageQuery,
  usePresentationsPageQuery,
} from "@/lib/queries/papers";
import { totalPagesFromTotal } from "@/lib/pagination";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import PageContainer from "@/components/layout/PageContainer";

function PaginationFolio({
  page,
  totalPages,
  isFetching,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  folioLabel,
  ofLabel,
}: {
  page: number;
  totalPages: number;
  isFetching: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
  folioLabel: string;
  ofLabel: string;
}) {
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;
  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      <div className="manuscript-divider mb-4 w-16" />
      <div className="flex items-center gap-12 font-label text-xs tracking-[0.4em] text-on-surface-variant uppercase">
        <button
          type="button"
          disabled={!hasPreviousPage || isFetching}
          onClick={onPrev}
          className={`flex items-center gap-2 transition-colors ${
            hasPreviousPage && !isFetching
              ? "hover:text-primary"
              : "cursor-not-allowed opacity-30"
          }`}
        >
          <span className="material-symbols-outlined text-lg">
            chevron_left
          </span>
          {prevLabel}
        </button>
        <span className="font-bold text-primary">
          {folioLabel}{" "}
          <span className="font-headline mx-2 text-lg italic">{page}</span>{" "}
          {ofLabel} {totalPages}
        </span>
        <button
          type="button"
          disabled={!hasNextPage || isFetching}
          onClick={onNext}
          className={`flex items-center gap-2 transition-colors ${
            hasNextPage && !isFetching
              ? "hover:text-primary"
              : "cursor-not-allowed opacity-30"
          }`}
        >
          {nextLabel}
          <span className="material-symbols-outlined text-lg">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
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
  children: ReactNode;
}) {
  if (slug) {
    return (
      <Link
        href={`/papers/presentations/${slug}/details`}
        className={className}
      >
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

export function PapersPage() {
  const { t } = useTranslations();
  const HIGHLIGHTED = useMemo(() => getHighlightedPaper(), []);

  const [pageAcademic, setPageAcademic] = useState(1);
  const [pagePresentations, setPagePresentations] = useState(1);

  const academicQuery = useAcademicPapersPageQuery(pageAcademic);
  const presentationsQuery = usePresentationsPageQuery(pagePresentations);

  const academicTotal = academicQuery.data?.pagination.total;
  const presentationsTotal = presentationsQuery.data?.pagination.total;

  const academicTotalPages =
    academicTotal !== undefined ? totalPagesFromTotal(academicTotal) : 1;
  const presentationsTotalPages =
    presentationsTotal !== undefined
      ? totalPagesFromTotal(presentationsTotal)
      : 1;

  const academicPapers = academicQuery.data?.papers ?? [];
  const speakerPresentations = useMemo(() => {
    const raw = presentationsQuery.data?.presentations ?? [];
    if (HIGHLIGHTED?.documentType === "presentation") {
      return raw.filter((p) => p.href !== HIGHLIGHTED.href);
    }
    return raw;
  }, [presentationsQuery.data?.presentations, HIGHLIGHTED]);

  return (
    <PageContainer pretitle={t("papers.pretitle")} title={t("papers.title")} subtitle={t("papers.subtitle")}>
      <section id="speaker-presentations" className="mb-32 scroll-mt-28">
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

        {presentationsQuery.isPending && !presentationsQuery.data && (
          <p className="mb-6 text-center text-on-surface-variant">
            {t("papers.listLoading")}
          </p>
        )}
        {presentationsQuery.isError && (
          <p className="mb-6 text-center text-primary" role="alert">
            {t("papers.listLoadError")}
          </p>
        )}

        <div className="space-y-6" aria-busy={presentationsQuery.isFetching}>
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

          {speakerPresentations.map((item) => (
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
        {presentationsTotalPages > 1 ? (
          <PaginationFolio
            page={pagePresentations}
            totalPages={presentationsTotalPages}
            isFetching={presentationsQuery.isFetching}
            onPrev={() => setPagePresentations((p) => Math.max(1, p - 1))}
            onNext={() =>
              setPagePresentations((p) =>
                Math.min(presentationsTotalPages, p + 1),
              )
            }
            prevLabel={t("papers.prev")}
            nextLabel={t("papers.next")}
            folioLabel={t("papers.folio")}
            ofLabel={t("papers.of")}
          />
        ) : null}
      </section>

      <section id="academic-papers" className="scroll-mt-28">
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

        {academicQuery.isPending && !academicQuery.data && (
          <p className="mb-6 text-center text-on-surface-variant">
            {t("papers.listLoading")}
          </p>
        )}
        {academicQuery.isError && (
          <p className="mb-6 text-center text-primary" role="alert">
            {t("papers.listLoadError")}
          </p>
        )}

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
            aria-busy={academicQuery.isFetching}
          >
            {academicPapers.map((item) => (
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
        {academicTotalPages > 1 ? (
          <PaginationFolio
            page={pageAcademic}
            totalPages={academicTotalPages}
            isFetching={academicQuery.isFetching}
            onPrev={() => setPageAcademic((p) => Math.max(1, p - 1))}
            onNext={() =>
              setPageAcademic((p) => Math.min(academicTotalPages, p + 1))
            }
            prevLabel={t("papers.prev")}
            nextLabel={t("papers.next")}
            folioLabel={t("papers.folio")}
            ofLabel={t("papers.of")}
          />
        ) : null}
      </section>

      <NewsletterSubscribeCard className="mt-24" />
    </PageContainer>
  );
}
