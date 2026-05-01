import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  LOCALE_COOKIE,
  pickLocaleFromAcceptLanguage,
} from "@/lib/i18n-config";

export function middleware(request: NextRequest) {
  if (request.cookies.has(LOCALE_COOKIE)) {
    return NextResponse.next();
  }
  const locale = pickLocaleFromAcceptLanguage(
    request.headers.get("accept-language"),
  );
  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
