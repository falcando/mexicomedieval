"use client";

import type { ArticleEntry } from "@/lib/types/article";
import { useId, useState } from "react";
import { useTranslations } from "../i18n/LocaleProvider";
import { ArticleDetailsModal } from "./ArticleDetailsModal";

type ArticleCardProps = {
  article: ArticleEntry;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { t } = useTranslations();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <div className="flex h-full flex-col border-t-2 border-tertiary-fixed bg-surface-container-low p-8">
        <div className="mb-4 text-xs font-bold tracking-tighter text-on-surface-variant/60 uppercase">
          {t("articulos.publicationYear")}: {article.year}
        </div>
        <h4 className="font-headline mb-3 grow text-xl leading-snug font-bold text-primary">
          {article.title}
        </h4>
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-on-surface-variant">
          {article.abstract}
        </p>
        <div className="mt-auto flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="self-start text-left text-sm font-bold text-primary underline decoration-tertiary-fixed decoration-2 underline-offset-4 hover:opacity-90"
          >
            {t("articulos.readMoreDetails")}
          </button>
          {article.urls.length > 0 ? (
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {article.urls.map((url, index) => (
                <a
                  key={url.href}
                  href={url.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    index === 0
                      ? "inline-flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-center text-sm font-semibold text-on-primary shadow-md shadow-primary/10 transition-all hover:opacity-90 sm:justify-start"
                      : "inline-flex items-center justify-center gap-2 border-2 border-primary px-4 py-2 text-center text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-on-primary sm:justify-start"
                  }
                >
                  {t(url.ctaKey)}
                  <span className="material-symbols-outlined text-base">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
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
