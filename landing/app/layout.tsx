import type { Metadata } from "next";
import { Noto_Serif, Work_Sans } from "next/font/google";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { defaultLocale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const meta = defaultLocale === "es" ? es.metadata : en.metadata;
  return {
    title: meta.siteTitle,
    description: meta.siteDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`light ${notoSerif.variable} ${workSans.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body selection:bg-tertiary-fixed-dim selection:text-on-tertiary-fixed bg-background text-on-background">
        <LocaleProvider key={defaultLocale} initialLocale={defaultLocale}>
          <SiteNavbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
