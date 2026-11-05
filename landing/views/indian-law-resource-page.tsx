"use client";

import PageContainer from "@/components/layout/PageContainer";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import {
  INDIAN_LAW_CATEGORIES,
  INDIAN_LAW_CORE_HISTORIOGRAPHY,
  INDIAN_LAW_SOURCES,
  INDIAN_LAW_THEMES,
  type IndianLawCategoryKey,
  type IndianLawSourceKind,
} from "@/lib/data/indian-law-sources";
import {
  INDIAN_LAW_EVENTS,
  type IndianLawEvent,
} from "@/lib/data/indian-law-events";
import { useMemo, useState } from "react";

const sourceKindOrder: IndianLawSourceKind[] = [
  "primary",
  "edition",
  "hist",
  "reference",
];

function evidenceClass(evidence: "A" | "B" | "C") {
  if (evidence === "A") return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (evidence === "B") return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-rose-50 text-rose-800 border-rose-200";
}

function SourceList({
  sourceIds,
  labels,
}: {
  sourceIds: string[];
  labels: Record<IndianLawSourceKind, string>;
}) {
  const grouped = sourceKindOrder
    .map((kind) => ({
      kind,
      items: sourceIds.flatMap((id) => {
        const source = INDIAN_LAW_SOURCES[id];
        return source?.kind === kind ? [{ id, source }] : [];
      }),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-4">
      {grouped.map((group) => (
        <div key={group.kind}>
          <h4 className="font-label mb-2 text-[11px] font-bold tracking-[0.18em] text-on-surface-variant uppercase">
            {labels[group.kind]}
          </h4>
          <ul className="space-y-2">
            {group.items.map(({ id, source }) => (
              <li key={id}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/source inline-flex items-start gap-2 text-sm leading-relaxed text-primary underline decoration-tertiary-fixed/60 underline-offset-4 hover:decoration-primary"
                >
                  <span className="material-symbols-outlined mt-0.5 text-base" aria-hidden="true">
                    open_in_new
                  </span>
                  <span>{source.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function TimelineEventCard({
  event,
  locale,
  labels,
}: {
  event: IndianLawEvent;
  locale: "es" | "en";
  labels: {
    form: string;
    authority: string;
    scope: string;
    sanction: string;
    interpretation: string;
    archival: string;
    sources: string;
    evidence: string;
    sourceKinds: Record<IndianLawSourceKind, string>;
  };
}) {
  const category = INDIAN_LAW_CATEGORIES[event.cat];
  const title = event.title[locale];
  const summary = event.summary[locale];
  const interpretation = event.interpretation[locale];
  const form = event.form[locale];
  const scope = event.scope[locale];
  const sanction = event.sanction[locale];
  const archival = event.archivalNote?.[locale];

  return (
    <article className="relative grid gap-4 md:grid-cols-[8.5rem_minmax(0,1fr)]">
      <div className="relative md:text-right">
        <div
          className="sticky top-24 inline-flex items-center rounded-full border-2 bg-background px-3 py-1.5 font-label text-xs font-bold tracking-wide text-on-surface"
          style={{ borderColor: category.color }}
        >
          {event.year}
        </div>
      </div>

      <div
        className="relative border-l-4 bg-white p-6 shadow-sm ring-1 ring-outline-variant/20 md:p-7"
        style={{ borderLeftColor: category.color }}
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-1 font-label text-[10px] font-bold tracking-wider uppercase"
            style={{
              color: category.color,
              backgroundColor: category.color + "12",
            }}
          >
            {event.cat} · {category.label[locale]}
          </span>
          <span className="rounded-full border border-outline-variant/40 px-2.5 py-1 text-[11px] text-on-surface-variant">
            {locale === "es" ? event.theme : INDIAN_LAW_THEMES[event.theme]}
          </span>
          <span
            className={"rounded-full border px-2.5 py-1 text-[11px] font-semibold " + evidenceClass(event.evidence)}
            title={labels.evidence + ": " + event.evidence}
          >
            {labels.evidence} {event.evidence}
          </span>
        </div>

        <h3 className="font-headline text-2xl font-bold leading-snug text-primary">
          {title}
        </h3>
        <p className="mt-4 text-[15px] leading-7 text-on-surface">{summary}</p>

        <dl className="mt-6 grid gap-x-6 gap-y-3 border-y border-outline-variant/25 py-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              {labels.form}
            </dt>
            <dd className="mt-1">{form}</dd>
          </div>
          <div>
            <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              {labels.authority}
            </dt>
            <dd className="mt-1">{event.authority}</dd>
          </div>
          <div>
            <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              {labels.scope}
            </dt>
            <dd className="mt-1">{scope}</dd>
          </div>
          <div>
            <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              {labels.sanction}
            </dt>
            <dd className="mt-1">{sanction}</dd>
          </div>
        </dl>

        <div className="mt-6 rounded-md bg-surface-container-low p-5">
          <h4 className="font-label mb-2 text-xs font-bold tracking-widest text-primary uppercase">
            {labels.interpretation}
          </h4>
          <p className="text-sm leading-6 text-on-surface-variant">
            {interpretation}
          </p>
        </div>

        {archival ? (
          <div className="mt-4 border-l-2 border-tertiary-fixed-dim pl-4">
            <p className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
              {labels.archival}
            </p>
            <p className="mt-1 text-sm leading-6 text-on-surface-variant">
              {archival}
            </p>
          </div>
        ) : null}

        <details className="mt-6 border-t border-outline-variant/25 pt-4">
          <summary className="cursor-pointer list-none font-label text-xs font-bold tracking-widest text-primary uppercase">
            <span className="inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                library_books
              </span>
              {labels.sources} ({event.sources.length})
            </span>
          </summary>
          <div className="mt-5">
            <SourceList sourceIds={event.sources} labels={labels.sourceKinds} />
          </div>
        </details>
      </div>
    </article>
  );
}

export function IndianLawResourcePage() {
  const { locale, t } = useTranslations();
  const [category, setCategory] = useState<IndianLawCategoryKey | "all">("all");
  const [theme, setTheme] = useState<string>("all");
  const [query, setQuery] = useState("");

  const themes = useMemo(
    () => [...new Set(INDIAN_LAW_EVENTS.map((event) => event.theme))],
    [],
  );

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(locale);
    return INDIAN_LAW_EVENTS.filter((event) => {
      if (category !== "all" && event.cat !== category) return false;
      if (theme !== "all" && event.theme !== theme) return false;
      if (!normalizedQuery) return true;
      const searchable = [
        event.year,
        event.title[locale],
        event.summary[locale],
        event.interpretation[locale],
        event.form[locale],
        event.authority,
        event.scope[locale],
        event.sanction[locale],
        locale === "es" ? event.theme : INDIAN_LAW_THEMES[event.theme],
      ]
        .join(" ")
        .toLocaleLowerCase(locale);
      return searchable.includes(normalizedQuery);
    });
  }, [category, theme, query, locale]);

  const sourceKinds: Record<IndianLawSourceKind, string> = {
    primary: t("resources.indianLaw.sourcePrimary"),
    edition: t("resources.indianLaw.sourceEdition"),
    hist: t("resources.indianLaw.sourceHistoriography"),
    reference: t("resources.indianLaw.sourceReference"),
  };

  const labels = {
    form: t("resources.indianLaw.form"),
    authority: t("resources.indianLaw.authority"),
    scope: t("resources.indianLaw.scope"),
    sanction: t("resources.indianLaw.sanction"),
    interpretation: t("resources.indianLaw.interpretation"),
    archival: t("resources.indianLaw.archivalNote"),
    sources: t("resources.indianLaw.sources"),
    evidence: t("resources.indianLaw.evidence"),
    sourceKinds,
  };

  return (
    <PageContainer
      pretitle={t("resources.indianLaw.pretitle")}
      title={t("resources.indianLaw.title")}
      subtitle={t("resources.indianLaw.subtitle")}
    >
      <section className="mb-12 border border-outline-variant/30 bg-white p-7 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <span className="font-label text-xs font-bold tracking-[0.2em] text-tertiary-fixed-dim uppercase">
              {t("resources.indianLaw.scholarlyIdentityTitle")}
            </span>
            <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.authorLabel")}
                </dt>
                <dd className="mt-1 text-on-surface">Hervin Fernández Aceves</dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.affiliationLabel")}
                </dt>
                <dd className="mt-1 text-on-surface">El Colegio de Jalisco</dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.orcidLabel")}
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://orcid.org/0000-0002-9800-5277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-tertiary-fixed/60 underline-offset-4"
                  >
                    0000-0002-9800-5277
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.versionLabel")}
                </dt>
                <dd className="mt-1 text-on-surface">1.0.0</dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.releaseDateLabel")}
                </dt>
                <dd className="mt-1 text-on-surface">4 November 2026</dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.licenseLabel")}
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-tertiary-fixed/60 underline-offset-4"
                  >
                    CC BY 4.0
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                  {t("resources.indianLaw.doiLabel")}
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://doi.org/10.5281/zenodo.23970204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-tertiary-fixed/60 underline-offset-4"
                  >
                    {t("resources.indianLaw.doiPending")}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 border-l-4 border-primary bg-surface-container-low p-5">
              <p className="font-label text-[10px] font-bold tracking-widest text-primary uppercase">
                {t("resources.indianLaw.citeLabel")}
              </p>
              <p className="mt-2 text-sm leading-6 text-on-surface">
                {t("resources.indianLaw.citeText")}
              </p>
            </div>
          </div>

          <aside className="w-full shrink-0 border-t border-outline-variant/30 pt-5 lg:w-80 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <h2 className="font-headline text-xl font-bold text-primary">
              {t("resources.indianLaw.archivedDatasetTitle")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
              {t("resources.indianLaw.archivedDatasetBody")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/datasets/indian-law/v1.0.0/indian-law-v1.0.0.csv"
                download
                className="border border-primary px-3 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-on-primary"
              >
                {t("resources.indianLaw.downloadVersionedCsv")}
              </a>
              <a
                href="/datasets/indian-law/v1.0.0/indian-law-v1.0.0.json"
                download
                className="border border-primary px-3 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-on-primary"
              >
                {t("resources.indianLaw.downloadVersionedJson")}
              </a>
              <a
                href="/datasets/indian-law/v1.0.0/METHODOLOGY.md"
                className="border border-primary px-3 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-on-primary"
              >
                {t("resources.indianLaw.methodologyFile")}
              </a>
              <a
                href="/datasets/indian-law/v1.0.0/DATA_DICTIONARY.md"
                className="border border-primary px-3 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-on-primary"
              >
                {t("resources.indianLaw.dataDictionaryFile")}
              </a>
              <a
                href="/datasets/indian-law/v1.0.0/CITATION.cff"
                className="border border-primary px-3 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-on-primary"
              >
                {t("resources.indianLaw.citationFile")}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.75fr)]">
        <div className="border border-outline-variant/25 bg-white p-7 shadow-sm">
          <span className="font-label text-xs font-bold tracking-[0.2em] text-tertiary-fixed-dim uppercase">
            {t("resources.indianLaw.methodKicker")}
          </span>
          <h2 className="font-headline mt-2 text-2xl font-bold text-primary">
            {t("resources.indianLaw.methodTitle")}
          </h2>
          <p className="mt-4 leading-7 text-on-surface-variant">
            {t("resources.indianLaw.methodBody")}
          </p>
          <p className="mt-4 border-l-4 border-primary pl-4 font-headline text-lg italic leading-7 text-on-surface">
            {t("resources.indianLaw.rule")}
          </p>
        </div>

        <aside className="border border-outline-variant/25 bg-surface-container-low p-7">
          <h2 className="font-headline text-xl font-bold text-primary">
            {t("resources.indianLaw.evidenceTitle")}
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-on-surface-variant">
            <p><strong className="text-on-surface">A</strong> · {t("resources.indianLaw.evidenceA")}</p>
            <p><strong className="text-on-surface">B</strong> · {t("resources.indianLaw.evidenceB")}</p>
            <p><strong className="text-on-surface">C</strong> · {t("resources.indianLaw.evidenceC")}</p>
          </div>

          <div className="mt-6 border-t border-outline-variant/30 pt-5">
            <h3 className="font-headline text-lg font-bold text-primary">
              {t("resources.indianLaw.downloadsTitle")}
            </h3>
            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
              {t("resources.indianLaw.downloadsBody")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/api/resources/indian-law/csv"
                download="legislacion-indiana-siglo-xvi.csv"
                className="inline-flex items-center gap-2 border border-primary px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  table_view
                </span>
                {t("resources.indianLaw.downloadCsv")}
              </a>
              <a
                href="/api/resources/indian-law/json"
                download="legislacion-indiana-siglo-xvi.json"
                className="inline-flex items-center gap-2 border border-primary px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  data_object
                </span>
                {t("resources.indianLaw.downloadJson")}
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="mb-14 border-y border-outline-variant/30 py-7">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <label className="block">
            <span className="font-label mb-2 block text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">
              {t("resources.indianLaw.search")}
            </span>
            <div className="flex items-center gap-2 border border-outline-variant/50 bg-white px-3">
              <span className="material-symbols-outlined text-xl text-on-surface-variant" aria-hidden="true">
                search
              </span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("resources.indianLaw.searchPlaceholder")}
                className="min-h-11 w-full bg-transparent text-base outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="font-label mb-2 block text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">
              {t("resources.indianLaw.category")}
            </span>
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as IndianLawCategoryKey | "all")
              }
              className="min-h-11 w-full border border-outline-variant/50 bg-white px-3 text-base"
            >
              <option value="all">{t("resources.indianLaw.allCategories")}</option>
              {Object.entries(INDIAN_LAW_CATEGORIES).map(([key, value]) => (
                <option key={key} value={key}>
                  {key} · {value.label[locale]}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="font-label mb-2 block text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">
              {t("resources.indianLaw.theme")}
            </span>
            <select
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              className="min-h-11 w-full border border-outline-variant/50 bg-white px-3 text-base"
            >
              <option value="all">{t("resources.indianLaw.allThemes")}</option>
              {themes.map((item) => (
                <option key={item} value={item}>
                  {locale === "es" ? item : INDIAN_LAW_THEMES[item]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-4 text-sm text-on-surface-variant" aria-live="polite">
          {filteredEvents.length} {t("resources.indianLaw.results")}
        </p>
      </section>

      <section aria-labelledby="timeline-heading">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="font-label text-xs font-bold tracking-[0.2em] text-tertiary-fixed-dim uppercase">
              {t("resources.indianLaw.timelineKicker")}
            </span>
            <h2 id="timeline-heading" className="font-headline mt-2 text-3xl font-bold text-primary">
              {t("resources.indianLaw.timelineTitle")}
            </h2>
          </div>
          <span className="hidden text-sm text-on-surface-variant md:block">
            1500–1600 · 1680–1681 {t("resources.indianLaw.contrast")}
          </span>
        </div>

        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <TimelineEventCard
              key={String(event.start) + "-" + event.title.es}
              event={event}
              locale={locale}
              labels={labels}
            />
          ))}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="border border-outline-variant/30 bg-white p-8 text-center text-on-surface-variant">
            {t("resources.indianLaw.noResults")}
          </div>
        ) : null}
      </section>

      <section className="mt-20 border-t border-outline-variant/30 pt-10">
        <span className="font-label text-xs font-bold tracking-[0.2em] text-tertiary-fixed-dim uppercase">
          {t("resources.indianLaw.historiographyKicker")}
        </span>
        <h2 className="font-headline mt-2 text-3xl font-bold text-primary">
          {t("resources.indianLaw.historiographyTitle")}
        </h2>
        <p className="mt-3 max-w-3xl text-on-surface-variant">
          {t("resources.indianLaw.historiographyBody")}
        </p>
        <div className="mt-6">
          <SourceList
            sourceIds={[...INDIAN_LAW_CORE_HISTORIOGRAPHY]}
            labels={sourceKinds}
          />
        </div>
      </section>

      <section className="mt-16 rounded-md border border-outline-variant/30 bg-surface-container-low p-6 text-sm leading-6 text-on-surface-variant">
        <strong className="text-on-surface">
          {t("resources.indianLaw.scopeNoteTitle")}
        </strong>{" "}
        {t("resources.indianLaw.scopeNoteBody")}
      </section>
    </PageContainer>
  );
}
