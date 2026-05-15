# México Medieval — landing

Next.js site for [México Medieval](https://www.mexicomedieval.org): articles, books, papers, events, podcasts, and static marketing pages. Lists and long text for those sections live in project files under `lib/data/` (not in a separate CMS). Developers wire those files to the pages you see in the browser.

## Documentation

- **[How to update the website content](docs/README.md)** — plain-language guide for contributors: which file to open, how to copy an existing entry, Spanish and English fields, and when to ask a developer. A short technical appendix describes the JSON `/api/...` routes for anyone maintaining the code.

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build (validates static params and types) |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React 19, TypeScript
- Tailwind CSS v4

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

This app is suitable for static hosting or [Vercel](https://vercel.com/new). See the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).
