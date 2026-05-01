"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import { useMemo } from "react";

const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC36OR9bfZWebubcigMG_gSkHrqIrwGug3GKwYO587LUZVmnKxpPBAVrIN5Nsyq2_S-PwJRlpSmPmVpWbK9j3r5L1YuVIO_6X8pC6ed-sw449I49hwQ6MKjKargpx_bJp2tBRlKro2UF3beVTmwtMLbR_k8o6_1JfOZOkRddUVThvnwP-BoPQPo1bCKgyKHI4OR0u1bvjE1NrKaxgOurNYRvLcTqh1ybvSn-uvGLHbLQ0BxE-7M7dRce-I9pG8Fz73WdS5yeiSqXD3u";

/** Sourced from static-html/articulos.html (Article 1–9). */
const ARTICLES = [
  {
    year: "2020",
    title:
      "The Making of Medieval Sardinia: A Historiographical Introduction",
    href: "https://doi.org/10.1163/9789004467545_002",
    documentType: "article",
    highlighted: true,
  },
  {
    year: "2020",
    title:
      "Discovery, Invention, and Supposition: Three Case Studies from Medieval Sardinia",
    href: "https://doi.org/10.1163/9789004467545_003",
    documentType: "bookChapter",
  },
  {
    year: "2020",
    title: "Rome Awards, Power and Society in Medieval Sardinia",
    href: "https://www.cambridge.org/core/journals/papers-of-the-british-school-at-rome/article/rome-awards-power-and-society-in-medieval-sardinia/A5E8FB6A67CB0CB452C1751CB0017CB1",
    documentType: "article",
  },
  {
    year: "2019",
    title:
      "La Cerdeña Medieval vista desde la modernidad. Un epítome historiográfico de la supuesta conectividad mediterránea",
    href: "https://revistascientificas.uach.mx/index.php/qvadrata/article/view/114",
    documentType: "article",
  },
  {
    year: "2019",
    title:
      "Royal comestabuli and Military Control in the Sicilian Kingdom: A Prosopographical Contribution to the Study of Italo-Norman Aristocracy",
    href: "https://scholarworks.wmich.edu/medpros/vol34/iss1/2/",
    documentType: "article",
  },
  {
    year: "2016",
    title:
      "Social Network Analysis and Narrative Structures: Measuring Communication and Influence in a Medieval Source on the Kingdom of Sicily",
    href: "https://doi.org/10.55555/IS.14.148",
    documentType: "article",
  },
  {
    year: "2016",
    title:
      "The Re-Arrangement of the Nobility Under the Hauteville Monarchy: The Creation of the South Italian Counties",
    href: "https://sites.exeter.ac.uk/exhistoria/archive/volume-8-2016/",
    documentType: "article",
  },
  {
    year: "2014",
    title: "Social Positions in the Liber de Regno Sicilie",
    href: "https://ams.ceu.edu/2014.htm",
    documentType: "article",
  },
  {
    year: "2009",
    title:
      "Modernidad política en la Edad Media: la experiencia y las instituciones normandas",
    href: "https://agora.colmex.mx/numero-6-2/",
    documentType: "article",
  },
] as const;

const PEER_REVIEWED_ARTICLES = [...ARTICLES]
  .filter((a) => a.documentType === "article")
  .sort((a, b) => Number(b.year) - Number(a.year));

const highlightedFromData = [...ARTICLES].find(
  (a) => "highlighted" in a && a.highlighted === true,
);

const HIGHLIGHTED_ARTICLE =
  highlightedFromData ?? PEER_REVIEWED_ARTICLES[0];

export default function ArticulosPage() {
  const { t } = useTranslations();

  const journalArticles = useMemo(() => {
    const excerpt = t("articulos.journalExcerpt");
    return PEER_REVIEWED_ARTICLES.filter(
      (a) =>
        !(
          HIGHLIGHTED_ARTICLE?.documentType === "article" &&
          a.href === HIGHLIGHTED_ARTICLE.href
        ),
    ).map((a) => ({
      meta: `${t("articulos.metaPeerReviewed")} • ${a.year}`,
      title: a.title,
      excerpt,
      href: a.href,
    }));
  }, [t]);

  const bookChapters = useMemo(() => {
    return [...ARTICLES]
      .filter((a) => a.documentType === "bookChapter")
      .sort((a, b) => Number(b.year) - Number(a.year))
      .map((a) => ({
        chapter: `${t("articulos.chapter")} • ${a.year}`,
        title: a.title,
        source: t("articulos.chapterSource"),
        meta: t("articulos.peerReviewedBadge"),
        bg: "low" as const,
        href: a.href,
      }));
  }, [t]);

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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {journalArticles.map((a) => (
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
        </section>

        <section className="relative z-10 mb-24">
          <div className="mb-12 flex items-center gap-6">
            <h2 className="font-headline shrink-0 text-3xl font-bold whitespace-nowrap text-primary">
              {t("articulos.bookChapters")}
            </h2>
            <div className="h-px w-full bg-outline-variant/30" />
          </div>
          <div className="space-y-6">
            {bookChapters.map((item) => (
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
        </section>

        <NewsletterSubscribeCard className="mt-24" />
      </main>
    </div>
  );
}
