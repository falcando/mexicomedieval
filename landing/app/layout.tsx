import type { Metadata } from "next";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const meta = defaultLocale === "es" ? es.metadata : en.metadata;
  return {
    title: {
      default: "México Medieval",
      template: "México Medieval | %s",
    },
    description: meta.siteDescription,
    icons: {
      icon: "/icon.png"
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} className="h-full antialiased">
      <head>
        {/* Google Fonts load at runtime (not via next/font) so `output: "export"` builds without fetching fonts. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- runtime stylesheet fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed bg-background text-on-background">
        <LocaleProvider initialLocale={defaultLocale}>
          <QueryProvider>
            <SiteNavbar />
            <div className="flex flex-1 flex-col">{children}</div>
            <SiteFooter />
          </QueryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
