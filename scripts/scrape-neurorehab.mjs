import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';

import { centers } from '../src/lib/data/centers.js';

const DEFAULT_SOURCE_CONFIG = './scripts/data/neurorehab-official-sources.json';
const DEFAULT_DISCOVERY_OUT = './neurorehab-discoveries.json';
const DEFAULT_SCRAPE_OUT = './neurorehab-scrape.json';
const DEFAULT_VALIDATED_OUT = './src/lib/data/validated-scrape.json';

const explicitNeuroRehabSignals = [
  'neurorehabilitation',
  'neuro-rehabilitation',
  'neurological rehabilitation',
  'neurologic rehabilitation',
  'neurorrehabilitación',
  'rehabilitación neurológica',
  'neuroriabilitazione',
  'riabilitazione neurologica',
  'réadaptation neurologique',
  'rééducation neurologique',
  'neurologische rehabilitation',
  'neurologische revalidatie',
  'neurorevalidatie',
  'neurorehabilitace',
  'neurorehabilitacja',
  'neurorehabilitacija',
  'neurorehabilitatsioon',
  'неврологическая реабилитация',
  'нейрореабилитация'
];

const rehabSignals = [
  'rehabilitation',
  'rehab',
  'riabilitazione',
  'revalidatie',
  'rééducation',
  'réadaptation',
  'reabilitação',
  'reabilitacja',
  'rehabilitación',
  'rehabilitace',
  'rehabilitácia',
  'rehabilitacija',
  'taastusravi',
  'реабилитация'
];

const neuroSignals = [
  'neurolog',
  'neuro',
  'stroke',
  'ictus',
  'spinal cord',
  'spinal',
  'brain injury',
  'acquired brain injury',
  'cerebral palsy',
  'cerebrovascular',
  'multiple sclerosis',
  'parkinson',
  'lesion medull',
  'lesões medulares',
  'lesioni midollari',
  'dwarslaesie',
  'hersenletsel',
  'невролог',
  'инсульт',
  'черепно-мозгов',
  'рассеянный склероз',
  'паркинсон'
];

const weakInstitutionSignals = [
  'hospital',
  'clinic',
  'kliniek',
  'klinik',
  'centre',
  'center',
  'centro',
  'zentrum',
  'revalidatieziekenhuis',
  'rehabilitation hospital'
];

const directoryLinkSignals = [
  ...explicitNeuroRehabSignals,
  ...rehabSignals,
  ...neuroSignals,
  'spinal injury',
  'brain injury',
  'stroke unit'
];

const directoryLinkExclusions = [
  'facebook.com',
  'instagram.com',
  'linkedin.com',
  'twitter.com',
  'x.com',
  'youtube.com',
  'mailto:',
  'tel:',
  '.pdf',
  '.jpg',
  '.jpeg',
  '.png',
  '.svg'
];

function parseOptions(argv) {
  const options = {
    sourceConfig: DEFAULT_SOURCE_CONFIG,
    discoveryOut: DEFAULT_DISCOVERY_OUT,
    scrapeOut: DEFAULT_SCRAPE_OUT,
    validatedOut: DEFAULT_VALIDATED_OUT,
    discoverOnly: false,
    skipFetch: false,
    max: Number.POSITIVE_INFINITY,
    concurrency: 4,
    delayMs: 150
  };

  for (const arg of argv) {
    if (arg === '--discover-only') {
      options.discoverOnly = true;
      options.skipFetch = true;
    } else if (arg === '--skip-fetch') {
      options.skipFetch = true;
    } else if (arg.startsWith('--source-config=')) {
      options.sourceConfig = arg.split('=').slice(1).join('=');
    } else if (arg.startsWith('--discovery-out=')) {
      options.discoveryOut = arg.split('=').slice(1).join('=');
    } else if (arg.startsWith('--scrape-out=')) {
      options.scrapeOut = arg.split('=').slice(1).join('=');
    } else if (arg.startsWith('--validated-out=')) {
      options.validatedOut = arg.split('=').slice(1).join('=');
    } else if (arg.startsWith('--max=')) {
      options.max = Number(arg.split('=').at(-1));
    } else if (arg.startsWith('--concurrency=')) {
      options.concurrency = Math.max(1, Number(arg.split('=').at(-1)));
    } else if (arg.startsWith('--delay-ms=')) {
      options.delayMs = Math.max(0, Number(arg.split('=').at(-1)));
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

function normalizeText(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeUrl(value, baseUrl) {
  if (!value) return '';

  try {
    const url = baseUrl ? new URL(value, baseUrl) : new URL(value);
    url.hash = '';

    if (url.pathname !== '/') {
      url.pathname = url.pathname.replace(/\/+$/, '');
    }

    return url.toString();
  } catch {
    return '';
  }
}

function stripHtml(html) {
  return String(html ?? '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&[a-z]+;/gi, ' ');
}

function extractTitle(html) {
  const match = String(html ?? '').match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? stripHtml(match[1]).replace(/\s+/g, ' ').trim() : '';
}

function extractLinks(html, baseUrl) {
  const links = [];
  const anchorPattern = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = anchorPattern.exec(String(html ?? ''))) !== null) {
    const href = match[1];
    const url = normalizeUrl(href, baseUrl);
    const text = stripHtml(match[2]).replace(/\s+/g, ' ').trim();
    if (url && text) {
      links.push({ url, text });
    }
  }

  return links;
}

async function readJsonIfExists(path, fallback) {
  try {
    return JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

async function writeJson(path, value) {
  const parent = path.split('/').slice(0, -1).join('/');
  if (parent) {
    await mkdir(parent, { recursive: true });
  }

  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

async function fetchPage(url, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'accept-language': 'en,de;q=0.9',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 NeuroviaClinicsDiscovery/0.2'
      }
    });

    const contentType = response.headers.get('content-type') ?? '';
    const body = contentType.includes('text/html') || contentType.includes('text/plain')
      ? await response.text()
      : '';

    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url || url,
      contentType,
      html: body
    };
  } finally {
    clearTimeout(timeout);
  }
}

function centerToDiscovery(center) {
  return {
    name: center.name,
    country: center.country ?? '',
    city: center.city ?? '',
    region: center.region ?? '',
    url: normalizeUrl(center.url),
    sourceType: 'curated-dataset',
    discoverySource: 'src/lib/data/centers.js',
    reviewStatus: 'known',
    knownInDataset: true,
    needles: [
      ...(center.researchHighlights ?? []),
      center.description?.en,
      center.description?.it
    ].filter(Boolean)
  };
}

function configSiteToDiscovery(site) {
  return {
    name: site.name ?? site.title ?? '',
    country: site.country ?? '',
    city: site.city ?? '',
    region: site.region ?? '',
    url: normalizeUrl(site.url),
    sourceType: site.sourceType ?? 'official-seed',
    discoverySource: site.discoverySource ?? site.source ?? 'source config',
    reviewStatus: site.reviewStatus ?? 'unreviewed',
    knownInDataset: false,
    needles: Array.isArray(site.needles) ? site.needles : []
  };
}

function dedupeDiscoveries(discoveries) {
  const rows = new Map();

  for (const discovery of discoveries) {
    const url = normalizeUrl(discovery.url);
    if (!url) continue;

    const key = url.toLowerCase();
    const existing = rows.get(key);
    if (!existing) {
      rows.set(key, { ...discovery, url });
      continue;
    }

    rows.set(key, {
      ...existing,
      name: existing.name || discovery.name,
      country: existing.country || discovery.country,
      city: existing.city || discovery.city,
      region: existing.region || discovery.region,
      sourceType: mergePiped(existing.sourceType, discovery.sourceType),
      discoverySource: mergePiped(existing.discoverySource, discovery.discoverySource),
      reviewStatus: existing.reviewStatus === 'known' ? 'known' : discovery.reviewStatus || existing.reviewStatus,
      knownInDataset: Boolean(existing.knownInDataset || discovery.knownInDataset),
      needles: Array.from(new Set([...(existing.needles ?? []), ...(discovery.needles ?? [])].filter(Boolean)))
    });
  }

  return [...rows.values()].sort((a, b) =>
    `${a.country} ${a.name} ${a.url}`.localeCompare(`${b.country} ${b.name} ${b.url}`, 'en', { sensitivity: 'base' })
  );
}

function mergePiped(left, right) {
  return Array.from(new Set([left, right].flatMap((value) => String(value ?? '').split(' | ')).filter(Boolean))).join(' | ');
}

function linkLooksRelevant(link) {
  const haystack = normalizeText(`${link.text} ${link.url}`);
  const excluded = directoryLinkExclusions.some((term) => haystack.includes(normalizeText(term)));
  if (excluded) return false;

  return directoryLinkSignals.some((signal) => haystack.includes(normalizeText(signal)));
}

async function discoverFromDirectories(directories, options) {
  if (options.skipFetch || !Array.isArray(directories) || directories.length === 0) {
    return [];
  }

  const discoveries = [];

  for (const directory of directories) {
    if (!directory.url) continue;
    await sleep(options.delayMs);

    try {
      const page = await fetchPage(directory.url);
      const links = extractLinks(page.html, page.finalUrl);
      const relevantLinks = links.filter(linkLooksRelevant).slice(0, directory.maxLinks ?? 50);

      for (const link of relevantLinks) {
        discoveries.push({
          name: link.text,
          country: directory.country ?? '',
          city: '',
          region: '',
          url: link.url,
          sourceType: 'official-directory-link',
          discoverySource: `${directory.name ?? 'directory'}: ${directory.url}`,
          reviewStatus: 'unreviewed',
          knownInDataset: false,
          needles: []
        });
      }
    } catch (error) {
      discoveries.push({
        name: directory.name ?? 'Official directory fetch failed',
        country: directory.country ?? '',
        city: '',
        region: '',
        url: normalizeUrl(directory.url),
        sourceType: 'official-directory',
        discoverySource: 'directory fetch failed',
        reviewStatus: 'source-error',
        knownInDataset: false,
        discoveryError: error.message,
        needles: []
      });
    }
  }

  return discoveries;
}

async function buildDiscoverySet(options) {
  const sourceConfig = await readJsonIfExists(options.sourceConfig, {
    officialDirectories: [],
    seedSites: [],
    searchResults: []
  });

  const curatedDiscoveries = centers.map(centerToDiscovery);
  const configuredSeeds = [
    ...(sourceConfig.seedSites ?? []),
    ...(sourceConfig.searchResults ?? [])
  ].map(configSiteToDiscovery);
  const directoryDiscoveries = await discoverFromDirectories(sourceConfig.officialDirectories, options);

  return dedupeDiscoveries([
    ...curatedDiscoveries,
    ...configuredSeeds,
    ...directoryDiscoveries
  ]);
}

function collectNeedleEvidence(body, needles) {
  return (needles ?? [])
    .map((needle) => String(needle ?? '').trim())
    .filter(Boolean)
    .filter((needle) => body.includes(normalizeText(needle)));
}

function collectSignalEvidence(body, signals) {
  return signals.filter((signal) => body.includes(normalizeText(signal)));
}

function classifyValidation(discovery, page) {
  const text = normalizeText(stripHtml(page.html));
  const title = extractTitle(page.html);
  const titleText = normalizeText(title);
  const nameText = normalizeText(discovery.name);

  const needleEvidence = collectNeedleEvidence(text, discovery.needles);
  const explicitEvidence = collectSignalEvidence(text, explicitNeuroRehabSignals);
  const rehabEvidence = collectSignalEvidence(text, rehabSignals);
  const neuroEvidence = collectSignalEvidence(text, neuroSignals);
  const institutionEvidence = collectSignalEvidence(`${titleText} ${nameText} ${text.slice(0, 1000)}`, weakInstitutionSignals);

  let reviewStatus = 'rejected';
  let validationTier = 'none';

  if (!page.ok) {
    reviewStatus = 'error';
  } else if (needleEvidence.length > 0 || explicitEvidence.length > 0) {
    reviewStatus = 'candidate';
    validationTier = 'strict';
  } else if (rehabEvidence.length > 0 && neuroEvidence.length > 0) {
    reviewStatus = 'candidate';
    validationTier = 'broad';
  } else if ((rehabEvidence.length > 0 || neuroEvidence.length > 0) && institutionEvidence.length > 0) {
    reviewStatus = 'review';
    validationTier = 'weak';
  }

  const evidence = [
    ...needleEvidence,
    ...explicitEvidence,
    ...rehabEvidence.slice(0, 4),
    ...neuroEvidence.slice(0, 4),
    ...institutionEvidence.slice(0, 2)
  ];

  return {
    reviewStatus,
    validationTier,
    qualifying: reviewStatus === 'candidate',
    evidence: Array.from(new Set(evidence)).join(' | ') || 'No qualifying neurorehabilitation evidence found on fetched page.',
    matchedSignals: {
      explicitNeuroRehab: explicitEvidence,
      rehabilitation: rehabEvidence,
      neurological: neuroEvidence,
      institution: institutionEvidence
    },
    title
  };
}

async function validateDiscovery(discovery, options) {
  if (discovery.reviewStatus === 'source-error') {
    return {
      ...discovery,
      status: null,
      finalUrl: discovery.url,
      title: '',
      evidence: discovery.discoveryError ?? 'Discovery source failed.',
      qualifying: false,
      validationTier: 'none',
      reviewStatus: 'source-error',
      matchedSignals: {}
    };
  }

  await sleep(options.delayMs);

  try {
    const page = await fetchPage(discovery.url);
    const classification = classifyValidation(discovery, page);

    return {
      ...discovery,
      status: page.status,
      finalUrl: normalizeUrl(page.finalUrl) || discovery.url,
      contentType: page.contentType,
      ...classification
    };
  } catch (error) {
    return {
      ...discovery,
      status: null,
      finalUrl: discovery.url,
      title: '',
      evidence: error.message,
      qualifying: false,
      validationTier: 'none',
      reviewStatus: discovery.knownInDataset ? 'known' : 'error',
      matchedSignals: {}
    };
  }
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

const options = parseOptions(process.argv.slice(2));
const discoveries = (await buildDiscoverySet(options)).slice(0, options.max);

await writeJson(options.discoveryOut, discoveries);
console.log(`Stage A discovery wrote ${discoveries.length} rows to ${options.discoveryOut}.`);

if (options.discoverOnly) {
  process.exit(0);
}

const validationResults = options.skipFetch
  ? discoveries.map((discovery) => ({
    ...discovery,
    status: null,
    finalUrl: discovery.url,
    title: '',
    evidence: 'Validation skipped by --skip-fetch.',
    qualifying: false,
    validationTier: 'none',
    reviewStatus: discovery.reviewStatus === 'known' ? 'known' : 'unvalidated',
    matchedSignals: {}
  }))
  : await mapWithConcurrency(discoveries, options.concurrency, (discovery) => validateDiscovery(discovery, options));

const reviewableResults = validationResults.filter((result) =>
  ['candidate', 'review', 'known'].includes(result.reviewStatus)
);

await writeJson(options.scrapeOut, validationResults);
await writeJson(options.validatedOut, reviewableResults);

console.log(`Stage B validation wrote ${validationResults.length} rows to ${options.scrapeOut}.`);
console.log(`Review output wrote ${reviewableResults.length} rows to ${options.validatedOut}.`);
