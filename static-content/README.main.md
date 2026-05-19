# Published static site (`main` branch)

> **Do not edit this branch manually.** It is updated automatically when changes are pushed to **`dev`**.

This branch contains the **built** website (HTML, assets, `_next/`) served by GitHub Pages at **[www.mexicomedieval.org](https://www.mexicomedieval.org)**.

## Where to work

| What you need | Where to go |
|---------------|-------------|
| **Source code, content, and full documentation** | [`dev` branch → `landing/`](https://github.com/falcando/mexicomedieval/tree/dev/landing) |
| **Documentation hub** | [`dev` → `landing/docs/README.md`](https://github.com/falcando/mexicomedieval/blob/dev/landing/docs/README.md) |
| **How deployment works** | [`dev` → `landing/docs/deployment.md`](https://github.com/falcando/mexicomedieval/blob/dev/landing/docs/deployment.md) |

## Workflow (summary)

1. Edit on **`dev`** (content in `landing/lib/data/`, code in `landing/`, docs in `landing/docs/`).
2. Push to **`dev`** → CI builds and replaces this branch’s root with the static export.
3. Push to **`main`** → GitHub Pages deploys the live site.

You do **not** need to copy files to `main` or run a separate deploy step for normal updates.
