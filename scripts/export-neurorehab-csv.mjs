import { readFile, writeFile } from 'node:fs/promises';

const { centers } = await import('../src/lib/data/centers.js');

function escapeCsv(value) {
  const text = String(value ?? '');
  if (/[",\n]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

function toRow(values) {
  return values.map(escapeCsv).join(',');
}

function normalizeUrl(value) {
  if (!value) return '';

  try {
    const url = new URL(value);
    url.hash = '';

    if (url.pathname !== '/') {
      url.pathname = url.pathname.replace(/\/+$/, '');
    }

    return url.toString();
  } catch {
    return String(value ?? '');
  }
}

function readJsonIfExists(path) {
  return readFile(path, 'utf8')
    .then((text) => JSON.parse(text))
    .catch(() => []);
}

const scrapeResults = await readJsonIfExists('./neurorehab-scrape.json');

const headers = [
  'country',
  'clinic_name',
  'location',
  'website',
  'source_type',
  'discovery_source',
  'review_status',
  'validation',
  'evidence'
];

const rows = new Map();
const existingKeys = new Set(
  centers.map((center) => [center.country ?? '', center.name ?? '', normalizeUrl(center.url)].join(' | '))
);
const existingUrls = new Set(centers.map((center) => normalizeUrl(center.url)).filter(Boolean));

function upsertRow(row) {
  const key = [row.country, row.clinic_name, normalizeUrl(row.website)].join(' | ');
  const existing = rows.get(key);
  if (!existing) {
    rows.set(key, { ...row });
    return;
  }

  existing.source_type = Array.from(new Set([...(existing.source_type || '').split(' | ').filter(Boolean), ...(row.source_type || '').split(' | ').filter(Boolean)])).join(' | ');
  existing.discovery_source = Array.from(new Set([...(existing.discovery_source || '').split(' | ').filter(Boolean), ...(row.discovery_source || '').split(' | ').filter(Boolean)])).join(' | ');
  existing.review_status = Array.from(new Set([...(existing.review_status || '').split(' | ').filter(Boolean), ...(row.review_status || '').split(' | ').filter(Boolean)])).join(' | ');
  existing.validation = Array.from(new Set([...(existing.validation || '').split(' | ').filter(Boolean), ...(row.validation || '').split(' | ').filter(Boolean)])).join(' | ');
  existing.evidence = Array.from(new Set([...(existing.evidence || '').split(' || ').filter(Boolean), ...(row.evidence || '').split(' || ').filter(Boolean)])).join(' || ');
  existing.location = existing.location || row.location;
}

function resultToRow(result) {
  const reviewStatus = result.reviewStatus ?? (result.qualifying ? 'candidate' : 'rejected');
  const validationTier = result.validationTier ?? 'unknown';

  return {
    country: result.country ?? '',
    clinic_name: result.name ?? '',
    location: [result.city, result.region].filter(Boolean).join(', '),
    website: result.url ?? result.finalUrl ?? '',
    source_type: result.sourceType ?? 'scrape',
    discovery_source: result.discoverySource ?? '',
    review_status: reviewStatus,
    validation: reviewStatus === 'candidate' ? `candidate (${validationTier})` : `${reviewStatus} (${validationTier})`,
    evidence: result.evidence ?? result.title ?? ''
  };
}

centers.forEach((center) => {
  upsertRow({
    country: center.country ?? '',
    clinic_name: center.name ?? '',
    location: [center.city, center.region].filter(Boolean).join(', '),
    website: center.url ?? '',
    source_type: 'curated',
    discovery_source: 'src/lib/data/centers.js',
    review_status: 'known',
    validation: 'verified in app',
    evidence: Array.isArray(center.researchHighlights) ? center.researchHighlights.join(' | ') : center.description?.en ?? ''
  });
});

scrapeResults.forEach((result) => {
  upsertRow(resultToRow(result));
});

const sortRows = (rowsArray) =>
  rowsArray.slice().sort((a, b) => `${a.country} ${a.clinic_name}`.localeCompare(`${b.country} ${b.clinic_name}`, 'en', { sensitivity: 'base' }));

const mergedRows = sortRows([...rows.values()]);
const rawRows = sortRows(scrapeResults.map(resultToRow));
const newDiscoveryRows = sortRows(
  rawRows.filter((row) => {
    const key = [row.country, row.clinic_name, normalizeUrl(row.website)].join(' | ');
    const isNew = !existingKeys.has(key);
    const hasKnownUrl = existingUrls.has(normalizeUrl(row.website));
    const isKnown = String(row.review_status ?? '').includes('known');
    const isRejected = ['rejected', 'error', 'source-error', 'unvalidated'].some((status) =>
      String(row.review_status ?? '').includes(status)
    );
    return isNew && !hasKnownUrl && !isKnown && !isRejected;
  })
);

const rawCsv = [headers, ...rawRows.map((row) => headers.map((key) => row[key]))].map(toRow).join('\n');
const reviewCsv = [headers, ...mergedRows.map((row) => headers.map((key) => row[key]))].map(toRow).join('\n');
const newDiscoveryCsv = [headers, ...newDiscoveryRows.map((row) => headers.map((key) => row[key]))].map(toRow).join('\n');

await writeFile('./neurorehab-scrape-raw.csv', `${rawCsv}\n`);
await writeFile('./neurorehab-review-candidates.csv', `${reviewCsv}\n`);
await writeFile('./neurorehab-new-discovery.csv', `${newDiscoveryCsv}\n`);

console.log(`Wrote ${rawRows.length} raw scrape rows, ${mergedRows.length} merged review rows, and ${newDiscoveryRows.length} new discovery rows.`);
