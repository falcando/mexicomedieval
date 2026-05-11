"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { totalPagesFromTotal } from "@/lib/pagination";
import { isBooksFilterEnabled } from "@/lib/feature-flags";
import { useBooksFilterEnabled } from "@/lib/feature-flags-hooks";
import { useBooksPageQuery } from "@/lib/queries/books";
import Image from "next/image";
import { Suspense, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";

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
    <PageContainer title={t("libros.titleLine")} subtitle={t("libros.subtitle")}>

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

        <section className="mx-auto max-w-7xl px-8 py-20">
          <div
            className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 lg:grid-cols-3"
            aria-busy={isPending || isFetching}
          >
            {isPending && !data && (
              <p className="col-span-full text-center text-on-surface-variant md:col-span-2 lg:col-span-3">
                {t("libros.booksLoading")}
              </p>
            )}
            {isError && (
              <p
                className="col-span-full text-center text-primary md:col-span-2 lg:col-span-3"
                role="alert"
              >
                {t("libros.booksLoadError")}
              </p>
            )}
            {data?.books.map((book) => (
              <article
                key={book.title}
                className="group flex h-full min-h-0 flex-col border-t-2 border-tertiary-fixed/30 bg-surface-container-low p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="relative aspect-3/4 w-full shrink-0 overflow-hidden bg-surface-dim">
                  <Image
                    src={book.image}
                    alt={book.alt}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 px-3 py-1 font-label text-[10px] tracking-widest text-tertiary-fixed-dim uppercase">
                    {book.badge}
                  </div>
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-8">
                  <span className="font-label mb-2 shrink-0 text-xs tracking-widest text-tertiary-fixed-dim uppercase">
                    {book.year}
                  </span>
                  <h3 className="font-headline mb-4 min-h-18 shrink-0 text-2xl leading-tight font-bold text-primary wrap-anywhere line-clamp-4">
                    {book.title}
                  </h3>
                  <p className="min-h-12 flex-1 text-sm leading-relaxed font-light text-on-surface-variant">
                    {book.description}
                  </p>
                  <div className="mt-auto shrink-0 border-t border-outline-variant/10 pt-6">
                    <a
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex w-full items-center justify-between border-b border-primary px-1 py-3 transition-all duration-300 hover:border-tertiary-fixed-dim"
                    >
                      <span className="font-label text-xs tracking-widest text-primary uppercase transition-colors group-hover/btn:text-tertiary-fixed-dim">
                        {t(book.ctaKey)}
                      </span>
                      <span className="material-symbols-outlined text-primary transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-tertiary-fixed-dim">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
              </article>
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
