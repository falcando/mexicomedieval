# How to update the website content

This guide is for people who are comfortable opening files and editing text, but who are **not** full-time programmers. If you can use a text editor and follow a pattern, you can add or change most content on this site.

---

## The big picture (in simple terms)

- The website does **not** use a separate admin panel or database for these lists. The “catalogues” (articles, books, events, and so on) are **lists written directly in project files**.
- Each list lives in a specific file (see the sections below). You usually **copy an existing item**, paste it below, and change the text and links.
- Almost everything important appears in **two languages**: **Spanish** (`es`) and **English** (`en`). When you add something, plan to fill in **both**.
- After you save your edits, someone (or you, if you have the project set up) should run **`npm run build`** once to confirm everything still works. If that command reports an error, share the message with whoever maintains the code.

You do **not** need to understand how the site is built behind the scenes to update content. You only need the right file and a careful copy of the existing format.

---

## Before you edit

1. **Make a backup** — Use “Save as” or work on a copy branch in Git if your team uses version control.
2. **Match the punctuation** — Items are separated by commas. Text must stay inside straight **quotes** `"like this"`. Curly quotes from Word `"like this"` can break the file; use the editor’s straight quotes.
3. **Copy, don’t invent the shape** — Find the last complete entry in the list (from `{` to `},`), duplicate it, then change the content. That way commas, braces, and field names stay correct.

---

## Where to find each kind of content

| What you want to change | Open this file (inside the `landing` folder) |
|-------------------------|-----------------------------------------------|
| **Home spotlight** (large feature block on the home page) | `lib/data/spotlight-config.ts` (and the matching `catalogId` on the chosen catalogue row — see below) |
| Journal articles and book chapters | `lib/data/articles.ts` |
| Books (volumes on the Books page) | `lib/data/books.ts` |
| Events (courses, festivals, etc.) | `lib/data/events.ts` |
| Academic papers and conference presentations | `lib/data/papers.ts` |
| México Medieval episodes (Apple Podcasts list) | `lib/data/podcast-mexico-medieval.ts` |
| Guest appearances on other podcasts (Spotify links) | `lib/data/podcast-spotify-guests.ts` |
| Images for podcast show cards on the podcast page | `lib/data/podcast-page-static.ts` (and image files in `public/podcasts/`) |
| Long “detail” page for a specific presentation | `data/presentations/` (one `.json` file per talk) and a small registration step in `lib/presentation-details.ts` — **ask a developer** if unsure |
| Button labels (e.g. “Read article”, “View on DOI”) | `messages/es.json` and `messages/en.json` |

Other folders (for example `lib/types` or `app/api`) are mainly for developers. You only need them if someone asks you to change a label type or fix a technical error.

---

## Home spotlight (featured block on the home page)

The spotlight is **not** edited in `messages/*.json` anymore. It is driven by catalogue data plus one small config file.

**Featured journal article (current setup):** The home page is set to highlight the same peer-reviewed article as the Articles page feature: the row with **`highlighted: true`** in `lib/data/articles.ts`. That row must have a **`catalogId`**. After moving `highlighted: true` to another article, update **`lib/data/spotlight-config.ts`** so `kind` is `journalArticle` and **`catalogId`** matches the new article’s `catalogId`.

You can instead point the spotlight at other catalogue kinds (books, events, papers, podcasts, etc.):

1. Open **`lib/data/spotlight-config.ts`**. You will see **`kind`** and **`catalogId`**.
2. Find the **`catalogId`** on the real item in the right data file (each spotlightable entry has a `catalogId` where applicable).
3. Set **`kind`** to one of: `book`, `journalArticle`, `bookChapter`, `event`, `paper`, `presentation`, or `podcast`. It must match the item’s type (for example use `journalArticle` only for rows with `documentType: "article"` in `articles.ts`).
4. After a production build, the same content is also available as static JSON: **`/api/spotlight/en`** and **`/api/spotlight/es`** (and under `out/api/spotlight/` when you run `pnpm run build`).

If the `catalogId` does not match any row, or `kind` does not match the row, the spotlight section may disappear until the config is fixed — ask a developer if you are unsure.

---

## Adding a journal article or a book chapter

**File:** `lib/data/articles.ts`

1. Scroll to the big list named `ARTICLES`.
2. Copy a **complete** existing block (from `{` through the closing `},`).
3. Paste it **before** the final `];` that closes the list (and after a comma from the previous item).
4. Update:
   - **`year`** — publication year as text, e.g. `"2024"`.
   - **`title`** — title in one language is fine for this field if it’s the official title; the rest of the text is under `information`.
   - **`documentType`** — use `"article"` for a journal article, or `"bookChapter"` for a chapter in a book.
   - **`urls`** — one or more links. Each link needs `href` (the full web address) and `ctaKey` (which button text to show — see below).
   - **`information`** — you need both **`es`** and **`en`**. Under each, set `authors`, `data` (where it was published), `topics` (a list of short tags), and `abstract` (summary).
   - **`catalogId`** (optional) — a short unique id using lowercase letters and hyphens, e.g. `"my-new-article-slug"`. Add this if the entry should be selectable for the **home spotlight** (`lib/data/spotlight-config.ts`). Ask a developer if you are unsure.

**“Featured” article on the Articles page:** For at most **one** journal article (not chapters), you can add a line `highlighted: true`. If none is marked, the site picks another rule for the Articles page feature — you can leave this to whoever maintains the site if it’s confusing. **If you change which article is highlighted and want the home spotlight to match**, update `lib/data/spotlight-config.ts` to use that article’s `catalogId` with `kind: "journalArticle"`.

**Button text (`ctaKey`):** The value looks like `"articulos.readArticle"`. That must already exist in both `messages/es.json` and `messages/en.json` under the `articulos` section. Reuse an existing key when possible. **If you need a brand-new button label**, ask a developer to add the text in both language files first.

**Order:** New journal articles and chapters are ordered by **year** (newest first). You don’t set a manual “position number”.

---

## Adding a book

**File:** `lib/data/books.ts`

1. Copy an existing book block inside `BOOKS`.
2. Set a unique **`catalogId`** (lowercase letters and hyphens) if this book should be eligible for the home spotlight.
3. Update `image` (path to the cover under the `public` folder), `alt`, `badge`, `year`, `title`, and `urls`.
4. Under **`information`**, fill **`es`** and **`en`** each with `author` and `description`.

For links, each line uses `url` and `ctaKey`. Reuse existing `ctaKey` values from neighbouring books. New link types need a developer to update the code and translations.

---

## Adding an event

**File:** `lib/data/events.ts`

1. Copy an existing event in `EVENTS`.
2. Set a unique **`catalogId`** (lowercase letters and hyphens) if this event should be eligible for the home spotlight.
3. Under **`information`**, fill **`es`** and **`en`** with at least `title`, `category`, and `description`. Optional lines: `institution`, `format`, `footerNote`.
4. **Live event with a link:** set `active: true`, add `href` with the full URL, and set `ctaKey` (for example `events.ctaDetails` or `events.ctaEnter`). You can add `ctaIcon`: `"arrow"` or `"external"` to match other cards.
5. **“Coming soon” card:** set `active: false`. You can leave out `href` or use an empty `ctaKey` `""` like the placeholder examples.

---

## Adding an academic paper or a presentation

**File:** `lib/data/papers.ts`

1. Copy an existing item in `PAPERS`.
2. Set a unique **`catalogId`** (lowercase letters and hyphens) if this row should be eligible for the home spotlight.
3. Set **`documentType`** to `"paper"` or `"presentation"`.
4. Set **`year`**, **`title`**, **`context`** (short line under the title), and **`href`** (link to the PDF, Academia.edu page, etc.).

Optional **`highlighted: true`** on one item can mark the highlighted row; the site has a fallback if you skip this.

**Full detail page on the site for one presentation:** That needs a JSON file under `data/presentations/`, a matching `presentationSlug` on the list item, and a one-line registration in `lib/presentation-details.ts`. That step is easy to get wrong without practice — **work with a developer** the first time.

---

## Adding podcast entries

### México Medieval (list from Apple Podcasts)

**File:** `lib/data/podcast-mexico-medieval.ts`

- Add rows to `MEXICO_MEDIEVAL_ITEMS` with `title`, `listenHref` (listen link), `documentType` (`appleShow` or `appleEpisode`), and `series: "mexico-medieval"`.
- Only **one** item should use `highlighted: true` at a time for the main spotlight behaviour.

### Appearances on other shows (Spotify)

**File:** `lib/data/podcast-spotify-guests.ts`

- For **Días con La Garra y Ale Garibay**, add episodes inside `DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES_EPISODES` (copy an existing line; keep the same `series` value as the other lines in that block).
- For **other podcasts**, add to the bottom list `SPOTIFY_GUEST_SPOTS` with `title`, `listenHref`, `documentType: "spotifyEpisode"`, and a short **`series`** name (a single word or hyphenated id used to group episodes). Episodes with a **new** series name may also need a **card image** added in `lib/data/podcast-page-static.ts` under `CARD_IMAGES` and a file in `public/podcasts/` — ask a developer when adding a **new** show for the first time.

---

## Quick checklist (every time)

- [ ] Spanish (`es`) **and** English (`en`) blocks are both filled in where the template has both.
- [ ] You copied the **commas and braces** from a working neighbour entry.
- [ ] Any **`ctaKey`** you used already exists in both `messages/es.json` and `messages/en.json`, or a developer added new keys.
- [ ] Run **`npm run build`** before publishing (or let CI run it) and fix any reported errors with help if needed.

---

## Optional: technical notes (for developers)

The site serves JSON from routes under `/api/...` so the pages can load lists in the browser. Data is still **authored in the repo**, not fetched from an external database at runtime. Pagination uses **10 items per page** (`lib/pagination.ts`). Route handlers live under `app/api/` and call the same lists in `lib/data/`.

Example paths (local site):

| Content | Path pattern |
|--------|----------------|
| Journal articles | `/api/articles/journal/{en or es}/{page number}` |
| Book chapters | `/api/articles/chapters/{en or es}/{page number}` |
| Books | `/api/books/{en or es}/{page number}` |
| Events | `/api/events/{en or es}/{page number}` |
| Academic papers | `/api/papers/academic/{page number}` |
| Presentations | `/api/papers/presentations/{page number}` |
| Podcast slices | `/api/podcasts/catalog/mexico-medieval` — or `dias-con-la-garra-y-ale-garibay` — or `others` |

Contributors who only update text in `lib/data` and `messages` usually **do not** need to open these URLs.

---

## More help in the repo

- **`AGENTS.md`** — notes for people working with the code editor and automated tools.
- **`README.md`** (in the `landing` folder) — how to install and run the project locally.

If something in this guide is unclear, suggest an improvement to the team so the next contributor has an easier time.
