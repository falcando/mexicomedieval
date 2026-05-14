"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { totalPagesFromTotal } from "@/lib/pagination";
import { isBooksFilterEnabled } from "@/lib/feature-flags";
import { useBooksFilterEnabled } from "@/lib/feature-flags-hooks";
import { useBooksPageQuery } from "@/lib/queries/books";
import { Suspense, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import BookCard from "@/components/sections/BookCard";

type LibrosPageBodyProps = { booksFilterEnabled: boolean };

function LibrosPageBody({ booksFilterEnabled }: LibrosPageBodyProps) {
  const { t } = useTranslations();
  const [page, setPage] = useState(1);
  const { data, isPending, isError, isFetching } = useBooksPageQuery(page);

  const total = data?.pagination.total;
  const totalPages =
    total !== undefined ? totalPagesFromTotal(total) : 1;
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return (
    <PageContainer pretitle={t("libros.pretitle")} title={t("libros.titleLine")} subtitle={t("libros.subtitle")}>

        {booksFilterEnabled ? (
          <section
            className="border-y border-outline-variant/10 bg-surface-container px-8 py-8"
            data-testid="books-filter"
          >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap items-center gap-8">
                <div className="group">
                  <label className="font-label mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors group-hover:text-tertiary-fixed-dim">
                    {t("libros.filterCentury")}
                  </label>
                  <select
                    className="cursor-pointer border-0 border-b border-outline-variant/30 bg-transparent px-0 py-1 font-body text-sm text-on-surface focus:border-tertiary-fixed-dim focus:ring-0"
                    aria-label={t("libros.filterCenturyAria")}
                    defaultValue="all"
                  >
                    <option value="all">{t("libros.centuryAll")}</option>
                    <option>{t("libros.centuryXvi")}</option>
                    <option>{t("libros.centuryXvii")}</option>
                    <option>{t("libros.centuryXviii")}</option>
                  </select>
                </div>
                <div className="group">
                  <label className="font-label mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors group-hover:text-tertiary-fixed-dim">
                    {t("libros.filterSubject")}
                  </label>
                  <select
                    className="cursor-pointer border-0 border-b border-outline-variant/30 bg-transparent px-0 py-1 font-body text-sm text-on-surface focus:border-tertiary-fixed-dim focus:ring-0"
                    aria-label={t("libros.filterSubjectAria")}
                    defaultValue="all"
                  >
                    <option value="all">{t("libros.subjectAll")}</option>
                    <option>{t("libros.subjectCartography")}</option>
                    <option>{t("libros.subjectGenealogy")}</option>
                    <option>{t("libros.subjectLiturgical")}</option>
                    <option>{t("libros.subjectNaturalHistory")}</option>
                  </select>
                </div>
                <div className="group">
                  <label className="font-label mb-2 block text-[10px] tracking-widest text-on-surface-variant uppercase transition-colors group-hover:text-tertiary-fixed-dim">
                    {t("libros.filterRarity")}
                  </label>
                  <div className="mt-1 flex gap-2">
                    <button
                      type="button"
                      className="rounded-sm border border-outline-variant/30 px-3 py-1 text-xs transition-all hover:bg-tertiary-container hover:text-on-tertiary-container"
                    >
                      {t("libros.rarityCommon")}
                    </button>
                    <button
                      type="button"
                      className="rounded-sm border border-transparent bg-tertiary-container px-3 py-1 text-xs text-on-tertiary-container"
                    >
                      {t("libros.raritySacred")}
                    </button>
                    <button
                      type="button"
                      className="rounded-sm border border-outline-variant/30 px-3 py-1 text-xs transition-all hover:bg-tertiary-container hover:text-on-tertiary-container"
                    >
                      {t("libros.rarityUnique")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 font-label text-sm tracking-tighter text-on-surface-variant uppercase">
                <span className="opacity-60">{t("libros.displaying")}</span>
                <button
                  type="button"
                  className="material-symbols-outlined rounded-full p-2 transition-colors hover:bg-surface-container-high"
                  aria-label={t("libros.gridViewAria")}
                >
                  grid_view
                </button>
                <button
                  type="button"
                  className="material-symbols-outlined rounded-full p-2 transition-colors hover:bg-surface-container-high"
                  aria-label={t("libros.listViewAria")}
                >
                  view_list
                </button>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-8 pb-20">
          <div
            className="mx-auto flex max-w-5xl flex-col gap-16"
            aria-busy={isPending || isFetching}
          >
            {isPending && !data && (
              <p className="text-center text-on-surface-variant">
                {t("libros.booksLoading")}
              </p>
            )}
            {isError && (
              <p className="text-center text-primary" role="alert">
                {t("libros.booksLoadError")}
              </p>
            )}

            {data?.books.map((book, index) => (
              <BookCard key={book.title} book={book} imageAlign={index % 2 === 0 ? "left" : "right"} />
            ))}
          </div>

          {total !== undefined && totalPages > 1 ? (
            <div className="mt-32 flex flex-col items-center gap-6">
              <div className="manuscript-divider mb-4 w-16" />
              <div className="flex items-center gap-12 font-label text-xs tracking-[0.4em] text-on-surface-variant uppercase">
                <button
                  type="button"
                  disabled={!hasPreviousPage || isFetching}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className={`flex items-center gap-2 transition-colors ${
                    hasPreviousPage && !isFetching
                      ? "hover:text-primary"
                      : "cursor-not-allowed opacity-30"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">
                    chevron_left
                  </span>
                  {t("libros.prev")}
                </button>
                <span className="font-bold text-primary">
                  {t("libros.folio")}{" "}
                  <span className="font-headline mx-2 text-lg italic">
                    {page}
                  </span>{" "}
                  {t("libros.of")} {totalPages}
                </span>
                <button
                  type="button"
                  disabled={!hasNextPage || isFetching}
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={`flex items-center gap-2 transition-colors ${
                    hasNextPage && !isFetching
                      ? "hover:text-primary"
                      : "cursor-not-allowed opacity-30"
                  }`}
                >
                  {t("libros.next")}
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          ) : null}
        </section>

        <NewsletterSubscribeCard className="mt-20" />

    </PageContainer>
  );
}

function LibrosPageWithSearchParams() {
  const booksFilterEnabled = useBooksFilterEnabled();
  return <LibrosPageBody booksFilterEnabled={booksFilterEnabled} />;
}

export function LibrosPage() {
  return (
    <Suspense
      fallback={
        <LibrosPageBody booksFilterEnabled={isBooksFilterEnabled()} />
      }
    >
      <LibrosPageWithSearchParams />
    </Suspense>
  );
}
