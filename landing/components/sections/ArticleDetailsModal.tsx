"use client";

import type { ArticleEntry } from "@/lib/types/article";
import {
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "../i18n/LocaleProvider";
import { LabeledTagList } from "./LabeledTagList";

type ArticleDetailsModalProps = {
  article: ArticleEntry;
  open: boolean;
  onClose: () => void;
  titleId: string;
};

export function ArticleDetailsModal({
  article,
  open,
  onClose,
  titleId,
}: ArticleDetailsModalProps) {
  const { t } = useTranslations();
  const panelRef = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onKeyDown]);

  useEffect(() => {
    if (!open) return;
    const node = panelRef.current;
    const focusable = node?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();
  }, [open]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  const primaryHref = article.urls[0]?.href ?? "";

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 transition-opacity"
        aria-label={t("articulos.modalClose")}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 grid max-h-[80vh] w-full max-w-[80vw] grid-rows-[auto_minmax(0,1fr)] rounded-t-2xl border border-outline-variant/20 bg-surface-container-lowest shadow-2xl sm:rounded-2xl"
        tabIndex={-1}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-outline-variant/15 px-6 py-5 sm:px-8">
          <h2
            id={titleId}
            className="font-headline min-w-0 text-xl leading-snug font-bold text-primary sm:text-2xl"
          >
            {article.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={t("articulos.modalClose")}
          >
            <span
              className="material-symbols-outlined text-2xl leading-none select-none"
              aria-hidden
            >
              close
            </span>
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
          <p className="mb-1 font-label text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">
            {t("articulos.publicationYear")}: {article.year}
          </p>
          <p className="font-label mb-6 text-xs leading-relaxed tracking-wide text-on-surface-variant uppercase">
            {article.authors}
          </p>
          <p className="mb-6 text-sm italic text-on-surface-variant">
            {article.data}
          </p>
          <LabeledTagList
            heading={t("articulos.topicsHeading")}
            items={article.topics}
          />
          <h3 className="mb-2 font-label text-[10px] font-bold tracking-widest text-on-surface-variant/70 uppercase">
            {t("articulos.abstractHeading")}
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-on-surface-variant sm:text-base">
            {article.abstract}
          </p>
          {article.urls.length > 0 ? (
            <div className="flex flex-col gap-2 border-t border-outline-variant/15 pt-6">
              {article.urls.map((url) => (
                <a
                  key={url.href}
                  href={url.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-tertiary-fixed underline-offset-4 hover:opacity-90"
                >
                  {t(url.ctaKey)}
                  <span className="material-symbols-outlined text-base">
                    open_in_new
                  </span>
                </a>
              ))}
            </div>
          ) : primaryHref ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              {article.documentType === "bookChapter"
                ? t("articulos.viewChapterBtn")
                : t("articulos.readArticle")}
              <span className="material-symbols-outlined text-base">
                open_in_new
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
