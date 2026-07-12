# Neurovia

An accessible, bilingual directory for discovering neurological rehabilitation centers in Italy. The current vertical MVP includes an interactive OpenStreetMap, synchronized clinic results, official source links, transparent data-completeness states, and review/new-center submissions stored locally as pending moderation items.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Quality checks

```bash
npm run check
npm run build
npm audit --omit=dev
```

## Scraper workflow

The clinic scraper is a two-stage discovery and validation pipeline. See `scripts/README-scraper.md` for the source config shape, review statuses, and coverage limits.

```bash
npm run scrape:discover
npm run scrape
npm run export:csv
```

## Trust model

Seed records link to official institutional pages. The MVP deliberately publishes no fabricated scores. Review and center submissions enter a local pending queue; production publication requires the authentication and moderation backend planned in GSD Phase 2.

## Deployment

The SvelteKit app is ready for a GitHub-backed Vercel deployment. Choose the appropriate production adapter before deploying to a specific platform.
