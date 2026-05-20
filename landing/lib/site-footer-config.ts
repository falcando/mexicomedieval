import { siteNavItems } from "@/lib/site-nav-config";

export type SiteFooterLink = {
  href: string;
  labelKey: string;
  isTitleLink?: boolean;
};

/** Section routes from primary nav (excludes in-page anchors such as Teaching). */
export const footerExploreLinks: SiteFooterLink[] = siteNavItems.filter(
  (item) => item.href !== "#",
);

export const footerLegalLinks: SiteFooterLink[] = [
  { href: "/aviso-privacidad", labelKey: "footer.privacyNotice", isTitleLink: true },
];

export const creativeCommonsLicenseUrl =
  "https://creativecommons.org/licenses/by-nc-sa/4.0/";

/** Placeholder until the cancundevs project URL is confirmed. */
export const cancundevsProjectUrl = "#";
