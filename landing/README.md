# México Medieval — landing

Next.js site for [México Medieval](https://www.mexicomedieval.org): articles, books, papers, events, podcasts, and static marketing pages. Lists and long text for those sections live in project files under `lib/data/` (not in a separate CMS).

## Documentation

Full documentation is on the **`dev`** branch under **[`docs/`](docs/README.md)**:

| Guide | Description |
|-------|-------------|
| [**Documentation hub**](docs/README.md) | Start here — branch model and links to all guides |
| [How to update website content](docs/updating-content.md) | Plain-language guide for contributors |
| [Deployment and branches](docs/deployment.md) | `dev` → `main` → GitHub Pages |
| [Local development](docs/local-development.md) | Install, scripts, CI |
| [Frontend conventions](docs/frontend-conventions.md) | UI patterns for developers |

## Getting started

See [Local development](docs/local-development.md). Short version:

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

- [Next.js](https://nextjs.org) (App Router), React 19, TypeScript, Tailwind CSS v4
