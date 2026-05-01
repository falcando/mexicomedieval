import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PresentationDetailsView } from "./presentation-details-view";
import { defaultLocale } from "@/lib/i18n-config";
import {
  getPresentationBySlug,
  listPresentationSlugs,
} from "@/lib/presentation-details";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listPresentationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getPresentationBySlug(slug);
  if (!data) {
    const title =
      defaultLocale === "es"
        ? es.presentation.notFoundTitle
        : en.presentation.notFoundTitle;
    return { title };
  }
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function PresentationDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getPresentationBySlug(slug);
  if (!data) {
    notFound();
  }

  return <PresentationDetailsView data={data} />;
}
