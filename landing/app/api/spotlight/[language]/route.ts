import { getSpotlightPayload } from "@/lib/spotlight/get-spotlight-payload";
import { locales, normalizeLocale } from "@/lib/i18n-config";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((language) => ({ language }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ language: string }> },
) {
  const { language: rawLanguage } = await context.params;
  const language = normalizeLocale(rawLanguage);
  const payload = getSpotlightPayload(language);
  if (!payload) {
    return Response.json({ error: "Spotlight not configured" }, { status: 404 });
  }
  return Response.json(payload);
}
