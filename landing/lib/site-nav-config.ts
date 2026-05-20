export type SiteNavItem = {
  href: string;
  labelKey: string;

  // Hides the link from the navbar and shows it in the footer.
  isFooterLink?: boolean;
};

/** Primary navigation — single source of truth for `SiteNavbar` and footer explore links. */
export const siteNavItems: SiteNavItem[] = [
  { href: "/libros", labelKey: "nav.books" },
  { href: "/articulos", labelKey: "nav.articles" },
  { href: "/podcast", labelKey: "nav.podcast" },
  { href: "/eventos", labelKey: "nav.events" },
  { href: "/papers", labelKey: "nav.papers" },
  { href: "/quienes-somos", labelKey: "nav.about" },
  { href: "/contacto", labelKey: "nav.contactCta", isFooterLink: true },
];

export function isNavItemActive(pathname: string, href: string): boolean {
  if (!href || href === "#") return false;
  const base = href.split("#")[0] ?? "";
  if (!base) return false;
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}
