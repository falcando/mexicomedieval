"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { useEventsPageQuery } from "@/lib/queries/events";
import PageContainer from "@/components/layout/PageContainer";
import { EventCard } from "@/components/sections/EventCard";

export function EventsPage() {
  const { t } = useTranslations();
  const { data, isPending, isError, isFetching } = useEventsPageQuery(1);

  const total = data?.pagination.total ?? 0;
  const hasEvents = total > 0;

  const events = data?.events ?? [];

  const isCourseEvent = (event: (typeof events)[number]) => {
    const category = event.category.toLowerCase();
    return category.includes("curso") || category.includes("course");
  };

  // Dates with no stated end time last until the end of that day in Guadalajara.
  const eventEnd = (event: (typeof events)[number]) => {
    if (event.endsAt) return new Date(event.endsAt).getTime();
    const day = event.endDate ?? event.date;
    return day ? new Date(`${day}T23:59:59-06:00`).getTime() : null;
  };
  const eventStart = (event: (typeof events)[number]) => {
    const start = event.startsAt ?? (event.date ? `${event.date}T00:00:00-06:00` : null);
    return start ? new Date(start).getTime() : null;
  };
  const now = Date.now();
  const isPast = (event: (typeof events)[number]) => {
    const end = eventEnd(event);
    return end == null ? event.active : end < now;
  };
  // Dated events first, nearest date first. Undated announcements last.
  const upcomingEvents = events
    .filter((event) => !isCourseEvent(event) && !isPast(event))
    .sort((a, b) => (eventStart(a) ?? Infinity) - (eventStart(b) ?? Infinity));
  const courseEvents = events.filter(isCourseEvent);
  const pastEvents = events
    .filter((event) => !isCourseEvent(event) && isPast(event))
    .sort((a, b) => (eventEnd(b) ?? 0) - (eventEnd(a) ?? 0));

  const renderEventSection = (
    title: string,
    sectionEvents: typeof events,
  ) => {
    if (sectionEvents.length === 0) {
      return null;
    }

    return (
      <section>
        <h2 className="font-label mb-6 text-xs font-bold tracking-[0.3em] text-tertiary-fixed-dim uppercase">
          {title}
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {sectionEvents.map((event, index) => (
            <li key={`${event.title}-${index}`}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      </section>
    );
  };

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
            <div
              aria-busy={isPending || isFetching}
              className="space-y-16"
            >
              {renderEventSection(t("events.upcomingEventsHeading"), upcomingEvents)}
              {renderEventSection(t("events.coursesHeading"), courseEvents)}
              {renderEventSection(t("events.pastEventsHeading"), pastEvents)}
            </div>


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
