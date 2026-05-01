# Frontend conventions (Next.js + React)

This document is the **canonical guide** for implementing, fixing, and refactoring UI in this repository. Prefer it over ad-hoc patterns when both conflict.

**Scope:** The primary Next.js app lives under `landing/` (App Router: `app/`). Apply these rules there unless a subfolder explicitly documents exceptions.

---

## Goals

1. **Reusable components** — Extract repeated markup and behavior into named components instead of duplicating JSX across pages.
2. **Stateless by default** — Prefer **presentational** components: props in, JSX out. No local state unless the UI truly needs it.
3. **Thin pages** — Route files (`app/**/page.tsx`) should compose sections and pass data; avoid hundred-line inline layouts.
4. **Predictable structure** — Layout chrome (nav, footers, newsletter) and content blocks (hero, cards) live in dedicated files with clear names.

---

## Server vs client components (App Router)

- **Default to Server Components** — Files in `app/` are server components unless marked with `"use client"`.
- **Use `"use client"` only when required**, for example:
  - `useState`, `useReducer`, `useEffect`, or other client-only hooks
  - Browser-only APIs
  - Event handlers that need closure state (complex forms may justify a small client leaf)
- **Push `"use client"` down the tree** — Keep pages and layouts as server components when possible; isolate interactivity in small client components (e.g. `NewsletterForm`, `MobileNav`).

---

## Component taxonomy (what to extract)

Use **one component per file** (or a tight pair like `Foo` + `Foo.types.ts` if types grow). Name files in **PascalCase** matching the export (`Hero.tsx` → `export function Hero`).

### Layout & chrome

| Concern | Examples | Notes |
|--------|-----------|--------|
| **Root shell** | `SiteShell`, decorative overlays (e.g. parchment grain) | Wraps `children`; minimal logic. |
| **Navbar** | `SiteNavbar`, logo, primary links, mobile menu | Pass `navItems` and optional `activePath` from the server page or layout. |
| **Header** (page-level) | `PageHeader`, breadcrumbs, title, optional actions | Distinct from global nav: use for section intros. |
| **Footer** | `SiteFooter`, legal, secondary links | Stateless; links via props or config. |
| **Newsletter** | `NewsletterSection` + optional `NewsletterForm` (client if it submits) | Keep copy/layout in a server wrapper; form behavior in a client child if needed. |

### Marketing & content sections

| Concern | Examples | Notes |
|--------|-----------|--------|
| **Hero** | Full-bleed image, headline, CTA, optional kicker | Props: `image`, `alt`, `title`, `subtitle`, `children` for CTAs. |
| **Highlighted item / spotlight** | Single featured book, article, episode | Props: content model + `Image`/`Link` targets. |
| **Content grids / lists** | “Latest”, “Featured collection” | A thin **list** component maps data to **card** components. |

### Cards (one card type per content shape)

Prefer **separate card components** per domain so props stay honest and styling does not sprawl:

- `BookCard`
- `ArticleCard`
- `PodcastEpisodeCard`
- `VideoCard`
- `PaperCard`

Shared visual primitives (badge, meta row, media aspect ratio) can live in `components/ui/` or small shared pieces — do not force unrelated content types into one mega-card with union types unless the design is truly identical.

---

## Suggested folder layout (`landing/`)

```
landing/
  app/
    layout.tsx          # Root layout: fonts, metadata, body shell
    page.tsx            # Composes sections only
    ...
  components/
    layout/             # SiteNavbar, SiteFooter, SiteShell, PageHeader
    sections/           # Hero, NewsletterSection, SpotlightSection, ...
    cards/              # BookCard, ArticleCard, ...
    ui/                 # Button, IconButton, optional primitives
  lib/                  # Data fetching, static config, types shared by routes
```

Adjust names to match existing patterns, but **keep the separation**: layout vs sections vs cards vs primitives.

---

## Props, typing, and composition

- **Explicit props** — Use TypeScript interfaces or `type` aliases for public props; avoid `any`.
- **Compose with `children`** — For slots (e.g. hero CTAs, card actions), prefer `children` or named render props over boolean “variant soup.”
- **Data from the edge** — Fetch or import data in server `page.tsx` / `layout.tsx`, then pass serializable props into presentational components.
- **Config vs components** — Navigation items, labels, and static lists can live in `lib/` (e.g. `nav-config.ts`) and be imported by server components.

---

## Next.js specifics

- **Images:** Use `next/image` with meaningful `alt`, appropriate `sizes`, and `priority` only for above-the-fold heroes.
- **Links:** Use `next/link` for internal navigation; prefer URL objects or consistent string `href`s from config.
- **Metadata:** Define `metadata` or `generateMetadata` in server layouts/pages, not inside client components.
- **Styles:** Use Tailwind utility classes consistent with `app/globals.css` design tokens (e.g. `primary`, `surface-*`, `font-headline`). Avoid inline styles except for dynamic values that Tailwind cannot express cleanly.

---

## Accessibility & quality bar

- Semantic landmarks: `header`, `nav`, `main`, `footer`, `section` with headings where appropriate.
- Interactive controls: real `<button>` / `<a>`, visible focus, `aria-label` for icon-only controls.
- Decorative layers: `aria-hidden` where applicable (e.g. background textures).

---

## Refactoring checklist (for agents)

When touching a large `page.tsx`:

1. Identify **chrome** (nav, footer, newsletter) → move to `components/layout/` or `components/sections/`.
2. Identify **repeated card markup** → one card component per content type under `components/cards/`.
3. Remove **unnecessary** `"use client"` from the page; add it only on interactive leaves.
4. Ensure **props** carry content and URLs; avoid hard-coding the same strings in multiple files — centralize in `lib/` when shared.
5. After extraction, the page should read as a **short composition** of sections with clear names.

---

## Summary

**Prefer small, stateless, well-named components** grouped by role (layout, sections, cards, ui). **Minimize client boundaries.** Keep routes as composition layers and put shared data in `lib/`. This keeps the codebase easy for humans and agents to navigate and change safely.
