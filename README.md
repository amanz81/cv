# assafmanzur.com

Personal portfolio / CV site for **Assaf Manzur** — Senior Platform & DevOps Tech Lead.

Built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS. Deployed to Netlify at [assafmanzur.com](https://assafmanzur.com).

## Structure

- `src/app/page.tsx` — main single-page portfolio (navigation, summary, experience, skills, contact).
- `src/app/cv/page.tsx` — print-friendly CV version (`/cv`, use the browser "Print / Save as PDF").
- `src/data/resume.ts` — **single source of truth** for all CV content (profile, summary, experience, skills). Edit here to update the site.
- `src/components/` — presentational components.
- `public/contact.html` — static Netlify Forms blueprint so the contact form is detected at build time.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy

Pushing to `master` triggers an automatic Netlify production deploy. Contact-form submissions and email notifications are configured in the Netlify dashboard (see `NETLIFY_DEPLOYMENT.md`).

## Update CV content

All content lives in `src/data/resume.ts`. Update it, commit, and push — no admin UI or backend required.
