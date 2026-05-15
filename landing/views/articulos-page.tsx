"use client";

import { useI18n, useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { getHighlightedArticle } from "@/lib/data/articles";
import {
  useArticleChaptersPageQuery,
  useJournalArticlesPageQuery,
} from "@/lib/queries/articles";
import { totalPagesFromTotal } from "@/lib/pagination";
import { useMemo, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import HighlightedArticle from "@/components/sections/HighlightedArticle";


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

export function ArticulosPage() {
  const { t } = useTranslations();
  const { locale } = useI18n();
  const HIGHLIGHTED_ARTICLE = useMemo(
    () => getHighlightedArticle(locale),
    [locale],
  );

  const [pageJournal, setPageJournal] = useState(1);
  const [pageChapters, setPageChapters] = useState(1);

  const journalQuery = useJournalArticlesPageQuery(pageJournal);
  const chaptersQuery = useArticleChaptersPageQuery(pageChapters);

  const journalTotal = journalQuery.data?.pagination.total;
  const chaptersTotal = chaptersQuery.data?.pagination.total;

  const journalTotalPages =
    journalTotal !== undefined ? totalPagesFromTotal(journalTotal) : 1;
  const chaptersTotalPages =
    chaptersTotal !== undefined ? totalPagesFromTotal(chaptersTotal) : 1;

  const journalCards = useMemo(() => {
    return (journalQuery.data?.journalArticles ?? []).map((a) => ({
      meta: `${t("articulos.publicationYear")}: ${a.year}`,
      title: a.title,
      excerpt: a.abstract,
      href: a.urls[0]?.href ?? "",
    }));
  }, [journalQuery.data?.journalArticles, t]);

  const chapterCards = useMemo(() => {
    return (chaptersQuery.data?.chapters ?? []).map((a) => ({
      chapter: `${t("articulos.chapter")} • ${a.year}`,
      title: a.title,
      source: a.data.trim() ? a.data : t("articulos.chapterSource"),
      meta: t("articulos.peerReviewedBadge"),
      bg: "low" as const,
      href: a.urls[0]?.href ?? "",
    }));
  }, [chaptersQuery.data?.chapters, t]);

  return (
    <PageContainer
      // pretitle={t("articulos.pretitle")}
      title={t("articulos.titleLine")}
      subtitle={t("articulos.subtitle")}
    >
      <section className="relative z-10 mb-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-headline text-3xl font-bold text-primary">
            {t("articulos.recentResearch")}
          </h2>
          <div className="mx-8 h-0.5 min-w-0 grow bg-outline-variant/20" />
          <span className="font-label shrink-0 text-sm text-on-surface-variant italic">
            {HIGHLIGHTED_ARTICLE
              ? `${t("articulos.latest")} • ${HIGHLIGHTED_ARTICLE.year}`
              : "—"}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {HIGHLIGHTED_ARTICLE ? (
            <HighlightedArticle article={HIGHLIGHTED_ARTICLE} />
          ) : null}
        </div>
      </section>

      <section className="relative z-10 mb-24">
        <div className="mb-12 flex items-center gap-6">
          <h2 className="font-headline shrink-0 text-3xl font-bold whitespace-nowrap text-primary">
            {t("articulos.journalArticles")}
          </h2>
          <div className="h-px w-full bg-outline-variant/30" />
        </div>
        {journalQuery.isPending && !journalQuery.data && (
          <p className="text-center text-on-surface-variant">
            {t("articulos.listLoading")}
          </p>
        )}
        {journalQuery.isError && (
          <p className="text-center text-primary" role="alert">
            {t("articulos.listLoadError")}
          </p>
        )}
        <div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          aria-busy={journalQuery.isFetching}
        >
          {journalCards.map((a) => (
            <div
              key={a.href}
              className="flex h-full flex-col border-t-2 border-tertiary-fixed bg-surface-container-low p-8"
            >
              <div className="mb-4 text-xs font-bold tracking-tighter text-on-surface-variant/60 uppercase">
                {a.meta}
              </div>
              <h4 className="font-headline mb-4 grow text-xl leading-snug font-bold text-primary">
                {a.title}
              </h4>
              <p className="mb-8 line-clamp-3 text-sm text-on-surface-variant">
                {a.excerpt}
              </p>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-primary decoration-tertiary-fixed hover:underline"
              >
                {t("articulos.readArticle")}
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
        {journalTotalPages > 1 ? (
          <PaginationFolio
            page={pageJournal}
            totalPages={journalTotalPages}
            isFetching={journalQuery.isFetching}
            onPrev={() => setPageJournal((p) => Math.max(1, p - 1))}
            onNext={() =>
              setPageJournal((p) => Math.min(journalTotalPages, p + 1))
            }
            prevLabel={t("articulos.prev")}
            nextLabel={t("articulos.next")}
            folioLabel={t("articulos.folio")}
            ofLabel={t("articulos.of")}
          />
        ) : null}
      </section>

      <section className="relative z-10 mb-24">
        <div className="mb-12 flex items-center gap-6">
          <h2 className="font-headline shrink-0 text-3xl font-bold whitespace-nowrap text-primary">
            {t("articulos.bookChapters")}
          </h2>
          <div className="h-px w-full bg-outline-variant/30" />
        </div>
        {chaptersQuery.isPending && !chaptersQuery.data && (
          <p className="text-center text-on-surface-variant">
            {t("articulos.listLoading")}
          </p>
        )}
        {chaptersQuery.isError && (
          <p className="text-center text-primary" role="alert">
            {t("articulos.listLoadError")}
          </p>
        )}
        <div className="space-y-6" aria-busy={chaptersQuery.isFetching}>
          {chapterCards.map((item) => (
            <div
              key={item.href}
              className={`group flex flex-col items-start justify-between p-6 transition-colors md:flex-row md:items-center ${
                item.bg === "low"
                  ? "bg-surface-container-low hover:bg-surface-container-high"
                  : "bg-surface hover:bg-surface-container-high"
              }`}
            >
              <div className="min-w-0 grow">
                <span className="mb-1 block text-xs font-bold tracking-widest text-tertiary uppercase">
                  {item.chapter}
                </span>
                <h5 className="font-headline text-xl font-bold text-primary">
                  {item.title}
                </h5>
                <p className="mt-1 text-sm text-on-surface-variant italic">
                  {item.source}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-8 md:mt-0">
                <span className="hidden font-medium text-on-surface-variant lg:block">
                  {item.meta}
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary px-6 py-2 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-on-primary"
                >
                  {t("articulos.viewChapterBtn")}
                </a>
              </div>
            </div>
          ))}
        </div>
        {chaptersTotalPages > 1 ? (
          <PaginationFolio
            page={pageChapters}
            totalPages={chaptersTotalPages}
            isFetching={chaptersQuery.isFetching}
            onPrev={() => setPageChapters((p) => Math.max(1, p - 1))}
            onNext={() =>
              setPageChapters((p) => Math.min(chaptersTotalPages, p + 1))
            }
            prevLabel={t("articulos.prev")}
            nextLabel={t("articulos.next")}
            folioLabel={t("articulos.folio")}
            ofLabel={t("articulos.of")}
          />
        ) : null}
      </section>

      <NewsletterSubscribeCard className="mt-24" />
    </PageContainer>
  );
}
