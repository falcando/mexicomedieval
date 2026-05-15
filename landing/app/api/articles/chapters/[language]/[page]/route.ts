import {
  getArticleChaptersPagePayload,
  getArticleChaptersTotalPages,
} from "@/lib/data/articles";
import { locales, normalizeLocale, type Locale } from "@/lib/i18n-config";

export const dynamic = "force-static";

export function generateStaticParams() {
  const n = getArticleChaptersTotalPages();
  const params: { language: Locale; page: string }[] = [];
  for (const language of locales) {
    for (let i = 1; i <= n; i++) {
      params.push({ language, page: String(i) });
    }
  }
  return params;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ language: string; page: string }> },
) {
  const { page: raw, language: rawLanguage } = await context.params;
  const page = Number.parseInt(raw, 10);
  if (Number.isNaN(page)) {
    return Response.json({ error: "Invalid page" }, { status: 404 });
  }
  const language = normalizeLocale(rawLanguage);
  const payload = getArticleChaptersPagePayload(page, language);
  if (!payload) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
  return Response.json(payload);
}
