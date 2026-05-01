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
  { href: "#", labelKey: "footer.archivistsCircle" },
  { href: "#", labelKey: "footer.manuscriptRights" },
  { href: "#", labelKey: "footer.scholarlyEthics" },
  { href: "/contacto", labelKey: "footer.contactScribe" },
];
