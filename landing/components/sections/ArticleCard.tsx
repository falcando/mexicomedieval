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
  const primaryHref = article.urls[0]?.href ?? "";

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
          {primaryHref ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-primary decoration-tertiary-fixed hover:underline"
            >
              {t("articulos.readArticle")}
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
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
