
# SEO Analyser

A lightweight SEO analysis toolkit for crawling, parsing and scoring website pages. This repository contains a Node.js backend that crawls and analyzes sites and a Vite + React frontend UI to run analyses and view results.

## Key Features

- Crawl a site and fetch pages using a configurable crawler.
- Parse HTML and run accessibility / SEO rules (titles, meta, headings, images, links).
- Aggregate page-level issues and compute a site-wide score and summary.
- Generate actionable recommendations based on detected issues.
- Frontend dashboard to start analyses and view reports (in `seo-frontend`).

## Repo Structure

- `src/` — Backend source (crawler, analyser, rules, utils). The API server is `src/server.js`.
- `seo-frontend/` — React + Vite frontend for running analyses and viewing reports.
- `rules/` — Rule definitions used by the analyser (title, meta, heading, link, image).

## Requirements

- Node.js 18+ (or a recent LTS)
- npm (or yarn)

## Quick Start

1. Install backend dependencies and run the API server:

```bash
cd seo-analyser
npm install
node src/server.js
```

The server listens on port `4000` by default (`PORT` env var to override).

2. Install and run the frontend UI:

```bash
cd seo-analyser/seo-frontend
npm install
npm run dev
```

Open the frontend served by Vite (usually at `http://localhost:5173`) and use the UI to start a site analysis. The frontend communicates with the backend API at `http://localhost:4000` by default.

## Backend API

- `GET /` — health check returning a short running message.
- `POST /analyze/site` — run a full site analysis. Body: `{ "url": "https://example.com" }`.

Response includes `summary`, `pages` (URL + score), aggregated `issues`, and `recommendations`.

## Development Notes

- The crawler is in `src/crawler/`.
- The analyser and rule runner are in `src/analyser/` and `rules/`.
- Logs include helpful emojis and counts to make local debugging easier.

If you plan to extend the project, consider adding a `start` script to the root `package.json`, for example:

```json
"scripts": {
	"start": "node src/server.js",
	"test": "echo \"Error: no test specified\" && exit 1"
}
```

## How I did the project?

- The first step was to analyse the functionality of Woorank which is the tool this projetc is inspired from.
- The second step was a make a solid backend while maintaining SEO factors considered.
- The third step was to make a correspondind froentend with proper style.
- The final step was to deploy the application. The frontend is deployed on Vercel and backend is Render.
- The website is mobile friendly as well.

## License

This project is provided under the ISC license (see `package.json`).

## Contact

If you need help or want to collaborate, open an issue or PR on the repository.
