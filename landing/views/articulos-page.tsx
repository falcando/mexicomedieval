"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { getHighlightedArticle } from "@/lib/data/articles";
import {
  useArticleChaptersPageQuery,
  useJournalArticlesPageQuery,
} from "@/lib/queries/articles";
import { totalPagesFromTotal } from "@/lib/pagination";
import Image from "next/image";
import { useMemo, useState } from "react";

const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC36OR9bfZWebubcigMG_gSkHrqIrwGug3GKwYO587LUZVmnKxpPBAVrIN5Nsyq2_S-PwJRlpSmPmVpWbK9j3r5L1YuVIO_6X8pC6ed-sw449I49hwQ6MKjKargpx_bJp2tBRlKro2UF3beVTmwtMLbR_k8o6_1JfOZOkRddUVThvnwP-BoPQPo1bCKgyKHI4OR0u1bvjE1NrKaxgOurNYRvLcTqh1ybvSn-uvGLHbLQ0BxE-7M7dRce-I9pG8Fz73WdS5yeiSqXD3u";

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
          <span className="material-symbols-outlined text-lg">chevron_left</span>
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
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

export function ArticulosPage() {
  const { t } = useTranslations();
  const HIGHLIGHTED_ARTICLE = useMemo(() => getHighlightedArticle(), []);

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
    const excerpt = t("articulos.journalExcerpt");
    return (journalQuery.data?.journalArticles ?? []).map((a) => ({
      meta: `${t("articulos.metaPeerReviewed")} • ${a.year}`,
      title: a.title,
      excerpt,
      href: a.href,
    }));
  }, [journalQuery.data?.journalArticles, t]);

  const chapterCards = useMemo(() => {
    return (chaptersQuery.data?.chapters ?? []).map((a) => ({
      chapter: `${t("articulos.chapter")} • ${a.year}`,
      title: a.title,
      source: t("articulos.chapterSource"),
      meta: t("articulos.peerReviewedBadge"),
      bg: "low" as const,
      href: a.href,
    }));
  }, [chaptersQuery.data?.chapters, t]);

  return (
    <div className="articulos-dot-bg min-h-full font-body text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      <main className="articulos-parchment-main mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-14">
        <header className="relative z-10 mb-20 text-center">
          <div className="mb-4 inline-block bg-surface-container px-3 py-1 font-medium text-xs text-tertiary tracking-[0.2em] uppercase">
            {t("articulos.collectionKicker")}
          </div>
          <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            {t("articulos.titleLine1")}{" "}
            <span className="font-normal italic">{t("articulos.titleLine2")}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {t("articulos.subtitle")}
          </p>
        </header>

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
              <article className="group relative flex flex-col gap-10 overflow-hidden border border-outline-variant/15 bg-surface-container-lowest p-8 md:col-span-2 md:flex-row md:p-12">
                <div className="relative aspect-3/4 w-full overflow-hidden bg-surface-container md:w-1/3">
                  <Image
                    src={FEATURED_IMG}
                    alt=""
                    fill
                    className="object-cover opacity-80 mix-blend-multiply"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
                </div>
                <div className="flex grow flex-col justify-center">
                  <div className="mb-4 text-sm font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                    {t("articulos.featuredPublication")}
                  </div>
                  <h3 className="font-headline mb-6 text-4xl leading-tight font-bold text-primary">
                    {HIGHLIGHTED_ARTICLE.title}
                  </h3>
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-medium text-on-surface-variant">
                    <span>
                      {HIGHLIGHTED_ARTICLE.documentType === "article"
                        ? t("articulos.peerReviewed")
                        : t("articulos.bookChapter")}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-outline" />
                    <span>{HIGHLIGHTED_ARTICLE.year}</span>
                  </div>
                  <p className="mb-8 max-w-xl leading-relaxed text-on-surface-variant">
                    {HIGHLIGHTED_ARTICLE.documentType === "article"
                      ? t("articulos.journalExcerpt")
                      : t("articulos.chapterExcerpt")}
                  </p>
                  <div>
                    <a
                      href={HIGHLIGHTED_ARTICLE.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-semibold text-on-primary shadow-lg shadow-primary/10 transition-all hover:opacity-90"
                    >
                      {HIGHLIGHTED_ARTICLE.documentType === "article"
                        ? t("articulos.viewFullSource")
                        : t("articulos.viewChapter")}
                      <span className="material-symbols-outlined text-lg">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-2 w-24 bg-tertiary-fixed" />
              </article>
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
      </main>
    </div>
  );
}
