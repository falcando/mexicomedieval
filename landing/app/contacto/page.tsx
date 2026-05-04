"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import Link from "next/link";

export default function ContactoPage() {
  const { t } = useTranslations();

  return (
    <div className="relative min-h-full bg-[#fdf8ef] font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:px-12 md:pt-14">
        <header className="mb-16 text-center">
          <span className="font-label mb-4 inline-block text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
            {t("contact.kicker")}
          </span>
          <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            {t("contact.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {t("contact.body")}
          </p>
          <div className="mx-auto mt-12 max-w-md">
            <div className="manuscript-divider-fleuron w-full" />
          </div>
        </header>

        <p className="text-center">
          <Link
            href="/quienes-somos"
            className="text-sm font-medium text-tertiary-fixed-dim underline-offset-4 hover:underline"
          >
            {t("nav.about")}
          </Link>
        </p>
      </main>
    </div>
  );
}
