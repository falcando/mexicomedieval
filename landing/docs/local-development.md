# Local development

[← Back to documentation hub](README.md)

How to install and run the Next.js app in `landing/` on your machine. All work happens on the **`dev`** branch; see [Deployment and branches](deployment.md) before pushing.

---

## Prerequisites

- **Node.js** — use the version in [`landing/.nvmrc`](https://github.com/falcando/mexicomedieval/blob/dev/landing/.nvmrc) (or the repo root [`.nvmrc`](https://github.com/falcando/mexicomedieval/blob/dev/.nvmrc) if present).
- **pnpm** — version 9 (CI uses `pnpm/action-setup@v4` with version 9).

---

## Getting started

From the repository root:

```bash
cd landing
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The app uses Next.js **static export** (`output: "export"` in `next.config.ts`). API routes under `/api/...` are pre-rendered at build time; in `pnpm run dev` those paths may 404 until you run a production build — see comments in `lib/api/*.ts` if you hit that.

---

## Scripts

| Command | Description |
|--------|-------------|
| `pnpm run dev` | Development server |
| `pnpm run build` | Production static export (validates types and static params) |
| `pnpm run start` | Serve the production build locally |
| `pnpm run lint` | ESLint |

---

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19, TypeScript
- Tailwind CSS v4

---

## CI

Pull requests run lint and build in `landing/` via [`.github/workflows/ci.yml`](https://github.com/falcando/mexicomedieval/blob/dev/.github/workflows/ci.yml). Fix any failures before merging to **`dev`**.

After merge to **`dev`**, the publish workflow builds and updates **`main`** automatically — you do not deploy from your laptop unless you are debugging the pipeline itself.

---

## Related guides

- [Documentation hub](README.md)
- [How to update website content](updating-content.md) — editing `lib/data/` and translations
- [Frontend conventions](frontend-conventions.md) — UI patterns for developers
- [Deployment and branches](deployment.md)
