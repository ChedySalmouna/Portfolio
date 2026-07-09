# Portfolio

Personal portfolio: About, Education, Volunteering, and a Projects showcase.

## Stack

React + Vite, plain CSS, `react-router-dom` for the two routes (`/` home, `/projects` projects).

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Content

- `src/content/profile.js` — name, bio, education, volunteering entries.
- `src/content/projects.json` — one entry per project (title, description, tags, media).
- `public/projects/<project-id>/` — screenshots/GIFs referenced by `projects.json`.

## Deployment

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. In the repo's Settings → Pages, set **Source** to "GitHub Actions".
