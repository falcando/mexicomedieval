"use client";

import type { ArticleEntry } from "@/lib/types/article";
import { useId, useMemo, useState } from "react";
import { useTranslations } from "../i18n/LocaleProvider";
import { ArticleDetailsModal } from "./ArticleDetailsModal";

type BookChapterCardProps = {
  article: ArticleEntry;
};

export default function BookChapterCard({ article }: BookChapterCardProps) {
  const { t } = useTranslations();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const titleId = useId();
  const primaryHref = article.urls[0]?.href ?? "";

  const sourceLine = useMemo(() => {
    const d = article.data.trim();
    return d.length > 0 ? d : t("articulos.chapterSource");
  }, [article.data, t]);

  return (
    <>
      <div className="group flex flex-col items-start justify-between bg-surface-container-low p-6 transition-colors hover:bg-surface-container-high md:flex-row md:items-center">
        <div className="min-w-0 grow">
          <span className="mb-1 block text-xs font-bold tracking-widest text-tertiary uppercase">
            {t("articulos.chapter")} · {article.year}
          </span>
          <h5 className="font-headline text-xl font-bold text-primary">
            {article.title}
          </h5>
          <p className="mt-1 text-sm text-on-surface-variant italic">
            {sourceLine}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
            {article.abstract}
          </p>
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="mt-2 text-left text-sm font-bold text-primary underline decoration-tertiary-fixed decoration-2 underline-offset-4 hover:opacity-90"
          >
            {t("articulos.readMoreDetails")}
          </button>
        </div>
        <div className="mt-4 flex w-full shrink-0 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-end md:mt-0 md:w-auto md:pl-8">
          <span className="hidden text-sm font-medium text-on-surface-variant lg:block lg:max-w-48 lg:text-right">
            {t("articulos.publicationYear")}: {article.year}
          </span>
          {primaryHref ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border-2 border-primary px-6 py-2 text-center text-sm font-bold text-primary transition-all hover:bg-primary hover:text-on-primary sm:min-w-40"
            >
              {t("articulos.viewChapterBtn")}
            </a>
          ) : null}
        </div>
      </div>
      <ArticleDetailsModal
        article={article}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        titleId={titleId}
      />
    </>
  );
}
