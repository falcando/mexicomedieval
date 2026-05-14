"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { useEventsPageQuery } from "@/lib/queries/events";
import { totalPagesFromTotal } from "@/lib/pagination";
import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import { EventCard } from "@/components/sections/EventCard";

export function EventsPage() {
  const { t } = useTranslations();
  const [page, setPage] = useState(1);
  const { data, isPending, isError, isFetching } = useEventsPageQuery(page);

  const total = data?.pagination.total ?? 0;
  const hasEvents = total > 0;
  const totalPages = totalPagesFromTotal(total);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return (
    <PageContainer pretitle={t("events.pretitle")} title={t("events.titleLine")} subtitle={t("events.subtitle")}>
      <section aria-label={t("events.catalogAria")}>
        {isPending && !data && (
          <p className="text-center text-on-surface-variant">{t("events.listLoading")}</p>
        )}

        {isError && (
          <p className="text-center text-primary" role="alert">
            {t("events.listLoadError")}
          </p>
        )}

        {hasEvents ? (
          <>
            <ul
              className="grid gap-6 md:grid-cols-2"
              aria-busy={isPending || isFetching}
            >
              {data?.events.map((event, index) => (
                <li key={`${event.title}-${index}`}>
                  <EventCard event={event} />
                </li>
              ))}
            </ul>

            {totalPages > 1 ? (
              <div className="mt-16 flex flex-col items-center gap-6">
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
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                    {t("events.prev")}
                  </button>

                  <span className="font-bold text-primary">
                    {t("events.folio")}{" "}
                    <span className="font-headline mx-2 text-lg italic">{page}</span>{" "}
                    {t("events.of")} {totalPages}
                  </span>

                  <button
                    type="button"
                    disabled={!hasNextPage || isFetching}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className={`flex items-center gap-2 transition-colors ${
                      hasNextPage && !isFetching
                        ? "hover:text-primary"
                        : "cursor-not-allowed opacity-30"
                    }`}
                  >
                    {t("events.next")}
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            ) : null}
          </>
        ) : (
          !isPending &&
          !isError && (
            <div className="mx-auto max-w-xl border border-outline-variant/20 bg-white/80 px-8 py-16 text-center shadow-sm md:px-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/25">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  aria-hidden
                >
                  smart_display
                </span>
              </div>

              <h2 className="font-headline mb-3 text-2xl font-bold text-primary">
                {t("events.emptyTitle")}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">{t("events.emptyBody")}</p>
            </div>
          )
        )}
      </section>

      <NewsletterSubscribeCard className="mt-24" />
    </PageContainer>
  );
}

