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

function readJsonIfExists(path) {
  return readFile(path, 'utf8')
    .then((text) => JSON.parse(text))
    .catch(() => []);
}

const scrapeResults = await readJsonIfExists('./neurorehab-scrape.json');

const headers = ['country', 'clinic_name', 'location', 'website', 'source_type', 'validation', 'evidence'];

const rows = new Map();
const existingKeys = new Set(
  centers.map((center) => [center.country ?? '', center.name ?? '', center.url ?? ''].join(' | '))
);
const manualDiscoveries = [
  {
    country: 'Hungary',
    clinic_name: 'National Center for Spinal Disorders',
    location: 'Budapest, Budapest',
    website: 'https://nepegeszsegugyi-egyesulet.hu/en/national-center-spinal-disorders-buda-health-center',
    source_type: 'manual',
    validation: 'official site blocked during crawl',
    evidence: 'spinal cord injury | rehabilitation | research | Buda Health Center'
  },
  {
    country: 'Belgium',
    clinic_name: 'Revalidatieziekenhuis RevArte',
    location: 'Edegem, Antwerp',
    website: 'https://www.revarte.be/',
    source_type: 'manual',
    validation: 'official site redirected during crawl',
    evidence: 'residentieel en ambulant zorgaanbod | Hersenletselkliniek | Dwarslaesiekliniek'
  },
  {
    country: 'Estonia',
    clinic_name: 'Haapsalu Neurological Rehabilitation Centre',
    location: 'Haapsalu, Lääne County',
    website: 'https://www.hnrk.ee/',
    source_type: 'manual',
    validation: 'official site confirmed',
    evidence: 'neurorehabilitatsiooni osakond | spinaalse rehabilitatsiooni osakond | statsionaarne taastusravi'
  }
];

function upsertRow(row) {
  const key = [row.country, row.clinic_name, row.website].join(' | ');
  const existing = rows.get(key);
  if (!existing) {
    rows.set(key, { ...row });
    return;
  }

  existing.source_type = Array.from(new Set([...(existing.source_type || '').split(' | ').filter(Boolean), ...(row.source_type || '').split(' | ').filter(Boolean)])).join(' | ');
  existing.validation = Array.from(new Set([...(existing.validation || '').split(' | ').filter(Boolean), ...(row.validation || '').split(' | ').filter(Boolean)])).join(' | ');
  existing.evidence = Array.from(new Set([...(existing.evidence || '').split(' || ').filter(Boolean), ...(row.evidence || '').split(' || ').filter(Boolean)])).join(' || ');
  existing.location = existing.location || row.location;
}

centers.forEach((center) => {
  upsertRow({
    country: center.country ?? '',
    clinic_name: center.name ?? '',
    location: [center.city, center.region].filter(Boolean).join(', '),
    website: center.url ?? '',
    source_type: 'curated',
    validation: 'verified in app',
    evidence: Array.isArray(center.researchHighlights) ? center.researchHighlights.join(' | ') : center.description?.en ?? ''
  });
});

scrapeResults.forEach((result) => {
  upsertRow({
    country: result.country ?? '',
    clinic_name: result.name ?? '',
    location: [result.city, result.region].filter(Boolean).join(', '),
    website: result.url ?? '',
    source_type: 'scrape',
    validation: result.qualifying ? `candidate (${result.validationTier ?? 'unknown'})` : 'rejected',
    evidence: result.evidence ?? result.title ?? ''
  });
});

const sortRows = (rowsArray) =>
  rowsArray.slice().sort((a, b) => `${a.country} ${a.clinic_name}`.localeCompare(`${b.country} ${b.clinic_name}`, 'en', { sensitivity: 'base' }));

const mergedRows = sortRows([...rows.values()]);
const rawRows = sortRows(
  scrapeResults.map((result) => ({
    country: result.country ?? '',
    clinic_name: result.name ?? '',
    location: [result.city, result.region].filter(Boolean).join(', '),
    website: result.url ?? '',
    source_type: 'scrape',
    validation: result.qualifying ? `candidate (${result.validationTier ?? 'unknown'})` : 'rejected',
    evidence: result.evidence ?? result.title ?? ''
  }))
);
const newDiscoveryRows = sortRows(
  [...rows.values(), ...manualDiscoveries].filter((row) => {
    const key = [row.country, row.clinic_name, row.website].join(' | ');
    const isNew = !existingKeys.has(key);
    const isRejected = String(row.validation ?? '').startsWith('rejected');
    return isNew && !isRejected;
  })
);

const rawCsv = [headers, ...rawRows.map((row) => headers.map((key) => row[key]))].map(toRow).join('\n');
const reviewCsv = [headers, ...mergedRows.map((row) => headers.map((key) => row[key]))].map(toRow).join('\n');
const newDiscoveryCsv = [headers, ...newDiscoveryRows.map((row) => headers.map((key) => row[key]))].map(toRow).join('\n');

await writeFile('./neurorehab-scrape-raw.csv', `${rawCsv}\n`);
await writeFile('./neurorehab-review-candidates.csv', `${reviewCsv}\n`);
await writeFile('./neurorehab-new-discovery.csv', `${newDiscoveryCsv}\n`);

console.log(`Wrote ${rawRows.length} raw scrape rows, ${mergedRows.length} merged review rows, and ${newDiscoveryRows.length} new discovery rows.`);
