import {
  getAllPodcastSlugs,
  getPodcastBySlug,
} from "@/lib/podcast-episodes";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PodcastDetailView } from "./podcast-detail-view";

type PageProps = {
  params: Promise<{ "podcast-id": string }>;
};

export async function generateStaticParams() {
  return getAllPodcastSlugs().map((podcastId) => ({
    "podcast-id": podcastId,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { "podcast-id": podcastId } = await params;
  const episode = getPodcastBySlug(podcastId);
  const fallbackTitle =
    defaultLocale === "es"
      ? es.podcastDetail.fallbackTitle
      : en.podcastDetail.fallbackTitle;
  if (!episode) {
    return { title: fallbackTitle };
  }
  return {
    title: episode.metaTitle,
    description: episode.metaDescription,
  };
}

export default async function PodcastDetailPage({ params }: PageProps) {
  const { "podcast-id": podcastId } = await params;
  const episode = getPodcastBySlug(podcastId);
  if (!episode) {
    notFound();
  }
  return <PodcastDetailView episode={episode} />;
}
