import { siteNavItems } from "@/lib/site-nav-config";

export type SiteFooterLink = {
  href: string;
  labelKey: string;
};

/** Section routes from primary nav (excludes in-page anchors such as Teaching). */
export const footerExploreLinks: SiteFooterLink[] = siteNavItems.filter(
  (item) => item.href !== "#",
);

export const footerLegalLinks: SiteFooterLink[] = [
  { href: "/privacy-notice", labelKey: "footer.privacyNotice" },
  { href: "/contacto", labelKey: "nav.contactCta" },
];

export const creativeCommonsLicenseUrl =
  "https://creativecommons.org/licenses/by-nc-sa/4.0/";

/** Placeholder until the cancundevs project URL is confirmed. */
export const cancundevsProjectUrl = "#";
