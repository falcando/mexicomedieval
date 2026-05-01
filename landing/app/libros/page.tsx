"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCelkrcQ6V5XyJL6F8omWxm6qNTfUY66OqOQleD80Ij7fWT9JyBDH4CbPy788L-vUF80MQKSJdPfJ1mG0cffnFl3ErIXE_I_Z62uBbkLf5Yw0MupV9uVilgP0kJq-Lkcu1LcAQBRZtx4bkIWQVDQH6qxGCPeX1ocvMhtYl8mpEwy7iji6x48lYjLtf2w1-y3qW9DpZq_3H8fLSujaJHITjNFyA4DevF-OB0ykU02H1fG5LkTFXzsho1nFYVmjYhM_gLARE2z6VPWbF7";

/** Sourced from static-html/libros.html (Book 1, Book 2). */
const BOOKS = [
  {
    image: "https://brill.com/coverimage?doc=%2Ftitle%2F38771&width=200&type=webp",
    alt: "Portada del libro The Making of Medieval Sardinia",
    badge: "Brill",
    year: "2021",
    title: "The Making of Medieval Sardinia",
    description: "Published by Brill",
    href: "https://brill.com/display/title/38771",
    ctaKey: "libros.ctaBrill" as const,
  },
  {
    image: "https://media.bloomsbury.com/rep/bj/9781350133228.jpg",
    alt: "Portada del libro County and Nobility in Norman Italy",
    badge: "Bloomsbury",
    year: "2020",
    title: "County and Nobility in Norman Italy",
    description: "Published by Bloomsbury",
    href: "https://www.bloomsbury.com/uk/county-and-nobility-in-norman-italy-9781350133228/",
    ctaKey: "libros.ctaBloomsbury" as const,
  },
] as const;

export default function LibrosPage() {
  const { t } = useTranslations();

  return (
    <div className="min-h-full bg-background font-body text-on-background selection:bg-tertiary-fixed-dim selection:text-tertiary">
      <main>
        <section className="relative flex h-[min(614px,85dvh)] items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_IMG}
              alt={t("libros.heroAlt")}
              fill
              priority
              className="object-cover opacity-30 mix-blend-luminosity"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent" />
            <div className="parchment-grain absolute inset-0" aria-hidden />
          </div>
          <div className="relative z-10 max-w-4xl px-6 text-center">
            <span className="font-label mb-4 block text-sm tracking-[0.3em] text-tertiary-fixed-dim uppercase">
              {t("libros.heroKicker")}
            </span>
            <h1 className="font-headline mb-6 text-5xl leading-tight font-bold text-white md:text-7xl">
              {t("libros.heroTitle")}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-on-primary-container md:text-xl">
              {t("libros.heroSub")}
            </p>
            <div className="mt-10 flex justify-center">
              <div className="manuscript-divider w-32" />
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/10 bg-surface-container px-8 py-8">
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

        <section className="mx-auto max-w-7xl px-8 py-20">
          <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2 lg:grid-cols-3">
            {BOOKS.map((book) => (
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

          <div className="mt-32 flex flex-col items-center gap-6">
            <div className="manuscript-divider mb-4 w-16" />
            <div className="flex items-center gap-12 font-label text-xs tracking-[0.4em] text-on-surface-variant uppercase">
              <button
                type="button"
                disabled
                className="flex cursor-not-allowed items-center gap-2 opacity-30"
              >
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
                {t("libros.prev")}
              </button>
              <span className="font-bold text-primary">
                {t("libros.folio")}{" "}
                <span className="font-headline mx-2 text-lg italic">1</span>{" "}
                {t("libros.of")} 12
              </span>
              <button
                type="button"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                {t("libros.next")}
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </section>

        <NewsletterSubscribeCard className="mt-20" />
      </main>
    </div>
  );
}
