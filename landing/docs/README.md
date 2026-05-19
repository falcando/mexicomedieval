# México Medieval — documentation

> **Important:** All website and documentation changes happen on the **`dev`** branch. You **never** need to edit **`main`** by hand. When you push to `dev`, GitHub Actions builds the site, updates `main` with the static export, and deploys to [www.mexicomedieval.org](https://www.mexicomedieval.org). See [Deployment and branches](deployment.md) for the full picture.

**Live site:** [https://www.mexicomedieval.org](https://www.mexicomedieval.org)

---

## Guides

| Guide | Who it’s for |
|-------|----------------|
| [How to update website content](updating-content.md) | Contributors editing articles, books, events, papers, podcasts, and translations (no coding background required) |
| [Deployment and branches](deployment.md) | Anyone who needs to understand `dev` vs `main`, CI, and GitHub Pages |
| [Local development](local-development.md) | Developers installing and running the Next.js app locally |
| [Frontend conventions](frontend-conventions.md) | Developers and agents working on UI components and pages |

---

## Quick links (source on `dev`)

Browse or edit these paths on the **`dev`** branch:

| Resource | Path on `dev` |
|----------|----------------|
| Next.js app | [`landing/`](https://github.com/falcando/mexicomedieval/tree/dev/landing) |
| Content data (articles, books, …) | [`landing/lib/data/`](https://github.com/falcando/mexicomedieval/tree/dev/landing/lib/data) |
| Translations | [`landing/messages/`](https://github.com/falcando/mexicomedieval/tree/dev/landing/messages) |
| GitHub Actions | [`.github/workflows/`](https://github.com/falcando/mexicomedieval/tree/dev/.github/workflows) |

---

## If you landed on the `main` branch

The **`main`** branch only holds the **published static site** (HTML at the repo root), not the source code. Switch to **`dev`** or read the short [README on `main`](https://github.com/falcando/mexicomedieval/blob/main/README.md) for pointers back here.
