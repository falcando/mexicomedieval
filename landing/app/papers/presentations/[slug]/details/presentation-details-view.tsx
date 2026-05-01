"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import type { PresentationDetail } from "@/lib/presentation-details";
import Image from "next/image";
import Link from "next/link";

export function PresentationDetailsView({
  data,
}: {
  data: PresentationDetail;
}) {
  const { t } = useTranslations();

  return (
    <div className="relative min-h-full bg-[#f9f7f2] font-body text-on-background selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:px-12 md:pt-14">
        <nav className="mb-10">
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            {t("presentation.backLink")}
          </Link>
        </nav>

        <section className="mb-14 grid gap-10 lg:grid-cols-[1fr_min(380px,40%)] lg:items-start lg:gap-14">
          <div>
            <p className="mb-4 inline-block bg-primary px-3 py-1.5 font-label text-[10px] font-bold tracking-widest text-on-primary uppercase">
              {data.badge}
            </p>
            <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
              {data.titleLine1}
              <span className="mt-1 block text-[0.92em] font-normal text-secondary italic md:text-[0.95em]">
                {data.titleLine2}
              </span>
            </h1>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="flex gap-3">
                <span className="material-symbols-outlined shrink-0 text-tertiary-fixed-dim">
                  person
                </span>
                <div>
                  <p className="font-label text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">
                    {t("presentation.presenter")}
                  </p>
                  <p className="font-body text-sm font-medium text-on-background">
                    {data.meta.presenter}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined shrink-0 text-tertiary-fixed-dim">
                  calendar_month
                </span>
                <div>
                  <p className="font-label text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">
                    {t("presentation.date")}
                  </p>
                  <p className="font-body text-sm font-medium text-on-background">
                    {data.meta.dateLabel}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:col-span-1">
                <span className="material-symbols-outlined shrink-0 text-tertiary-fixed-dim">
                  location_on
                </span>
                <div>
                  <p className="font-label text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">
                    {t("presentation.event")}
                  </p>
                  <p className="font-body text-sm font-medium text-on-background">
                    {data.meta.venue}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 max-w-3xl">
              <p className="font-body text-base leading-relaxed text-on-surface-variant">
                {data.summary}
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 font-body text-sm text-on-surface-variant">
                {data.summaryBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {data.heroImage ? (
            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-outline-variant/25 bg-surface-container-low shadow-[0_12px_40px_-12px_rgba(54,9,53,0.35)]">
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 380px"
                  priority
                />
              </div>
            </div>
          ) : null}
        </section>

        <div className="mx-auto mb-20 max-w-3xl">
          <div className="manuscript-divider-fleuron w-full bg-[#f9f7f2]" />
        </div>

        <section className="mb-24">
          <h2 className="font-headline relative mb-3 inline-block text-2xl font-bold text-primary md:text-3xl">
            {t("presentation.orderHeading")}
            <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-tertiary-fixed-dim" />
          </h2>
          <p className="font-body mb-10 max-w-3xl text-sm leading-relaxed text-on-surface-variant md:text-base">
            {data.presentationOrderIntro}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {data.sections.map((section) => (
              <article
                key={section.order}
                className="relative overflow-hidden border border-outline-variant/20 border-t-[3px] border-t-primary bg-white p-6 shadow-sm"
              >
                <span
                  className="pointer-events-none absolute -right-1 -bottom-3 font-headline text-7xl font-bold text-outline-variant/15 select-none"
                  aria-hidden
                >
                  {String(section.order).padStart(2, "0")}
                </span>
                <h3 className="font-headline relative z-10 mb-3 text-lg font-bold text-primary">
                  {section.title}
                </h3>
                <p className="font-body relative z-10 text-sm leading-relaxed text-on-surface-variant">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-headline relative mb-8 inline-block text-2xl font-bold text-primary md:text-3xl">
              {t("presentation.bibliographyHeading")}
              <span className="absolute -bottom-1 left-0 h-0.5 w-12 bg-tertiary-fixed-dim" />
            </h2>
            <ul className="space-y-6">
              {data.bibliography.map((item) => (
                <li
                  key={item.roman}
                  className="flex gap-4 border border-outline-variant/15 bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-surface-container font-headline text-lg font-semibold text-on-surface-variant">
                    {item.roman}
                  </div>
                  <div className="min-w-0">
                    <p className="font-headline text-base font-bold text-primary">
                      {item.titleLine}
                    </p>
                    <p className="font-body mt-2 text-sm leading-relaxed text-on-surface-variant">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-label text-[10px] font-bold tracking-widest text-tertiary-container uppercase underline-offset-4 hover:underline"
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-lg border border-outline-variant/20 bg-surface-container-low/80 p-6">
              <h3 className="font-headline mb-3 text-lg font-semibold text-primary">
                {t("presentation.keyPhrasesHeading")}
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                {data.keyPhrases.map((phrase) => (
                  <p
                    key={phrase}
                    className="border-l-[3px] border-tertiary-fixed-dim pl-3 font-body text-sm italic text-on-surface-variant"
                  >
                    {phrase}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-1">
            <div className="bg-primary p-6 text-on-primary shadow-md">
              <h3 className="font-headline text-xl font-bold">
                {data.additionalResources.title}
              </h3>
              <p className="font-body mt-3 text-sm leading-relaxed text-on-primary/90">
                {data.additionalResources.body}
              </p>
              <a
                href={data.additionalResources.pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-tertiary-fixed px-4 py-3 font-label text-sm font-semibold tracking-wide text-on-tertiary-fixed transition-opacity hover:opacity-90"
              >
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                {data.additionalResources.pdf.label}
              </a>
            </div>

            <div className="relative border border-outline-variant/25 bg-[#f0ede4] p-6 pl-8 shadow-sm">
              <span
                className="absolute top-0 bottom-0 left-0 w-1 bg-tertiary-fixed-dim"
                aria-hidden
              />
              <h3 className="font-headline text-lg font-bold text-primary">
                {data.researcherNote.title}
              </h3>
              <p className="font-body mt-3 text-sm leading-relaxed text-on-surface-variant">
                {data.researcherNote.body}
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
