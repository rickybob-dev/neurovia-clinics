# Neurorehab Scraper

The scraper is a two-stage review pipeline. It is designed to improve European discovery without publishing unreviewed clinics into the live app dataset.

## Coverage Model

The scraper does not guarantee near-complete European coverage by itself. Coverage depends on the sources supplied to Stage A:

- official national or regional hospital directories;
- official specialist rehab directories;
- manually reviewed search results from the query templates in `scripts/data/neurorehab-official-sources.json`;
- the existing curated dataset in `src/lib/data/centers.js`.

For high recall, work country by country and add every official registry or reviewed search result to the source config before running validation.

## Commands

```bash
npm run scrape:discover
npm run scrape
npm run export:csv
```

`npm run scrape:discover` writes `neurorehab-discoveries.json` only. Use this to inspect the discovery set before any page validation.

`npm run scrape` writes:

- `neurorehab-discoveries.json` for Stage A raw discovery;
- `neurorehab-scrape.json` for Stage B validation results;
- `src/lib/data/validated-scrape.json` for reviewable rows.

`npm run export:csv` writes the manual review CSVs:

- `neurorehab-scrape-raw.csv`;
- `neurorehab-review-candidates.csv`;
- `neurorehab-new-discovery.csv`.

## Source Config Shape

Add official directory pages when they list rehabilitation services or clinics:

```json
{
  "officialDirectories": [
    {
      "country": "Example",
      "name": "Official rehab directory",
      "url": "https://example.gov/rehabilitation-directory",
      "maxLinks": 100
    }
  ]
}
```

Add reviewed search results or known official clinic pages as seed sites:

```json
{
  "seedSites": [
    {
      "country": "Example",
      "name": "Example Neurorehabilitation Centre",
      "city": "Example City",
      "region": "Example Region",
      "url": "https://example-hospital.org/neurorehabilitation",
      "sourceType": "search-reviewed",
      "discoverySource": "manual query: neurological rehabilitation Example",
      "needles": ["neurorehabilitation", "spinal cord injury", "brain injury"]
    }
  ]
}
```

## Review Statuses

- `known`: already present in the live curated dataset.
- `candidate`: strong or broad text evidence was found.
- `review`: weak evidence; inspect manually.
- `rejected`: fetched page did not contain enough evidence.
- `error` / `source-error`: fetch or source failure; inspect manually before discarding.

The live app dataset remains `src/lib/data/centers.js`. Scraper output should be treated as review input only.
