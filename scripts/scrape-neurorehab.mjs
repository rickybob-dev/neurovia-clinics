import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const targets = [
  {
    country: 'Spain',
    name: 'Institut Guttmann',
    url: 'https://www.guttmann.com/es',
    needles: ['neurorrehabilitación', 'neurorehabilitation', 'rehabilitación neurológica', 'investigación']
  },
  {
    country: 'Spain',
    name: 'Hospital Quirónsalud Miguel Domínguez',
    url: 'https://www.quironsalud.com/migueldominguez',
    needles: ['unidad de neuro-rehabilitación', 'neuro-rehabilitación', 'exoesqueletos robóticos', 'realidad virtual', 'pacientes neurológicos']
  },
  {
    country: 'Germany',
    name: 'Kliniken Schmieder',
    url: 'https://kliniken-schmieder.com/',
    needles: ['neurological rehabilitation', 'neurorehabilitation', 'rehabilitation']
  },
  {
    country: 'France',
    name: 'Hôpital Saint-Jacques — CHU de Nantes',
    url: 'https://www.chu-nantes.fr/etablissements-du-chu-hopital-saint-jacques-11381.kjsp',
    needles: ['rééducation neurologique', 'neurological rehabilitation', 'réadaptation']
  },
  {
    country: 'Slovenia',
    name: 'URI Soča',
    url: 'https://www.uri-soca.si/en/',
    needles: ['rehabilitation', 'neurological', 'research']
  },
  {
    country: 'Netherlands',
    name: 'Roessingh',
    url: 'https://www.roessingh.nl/',
    needles: ['neurologische revalidatie', 'niet-aangeboren hersenletsel', 'multiple sclerose', 'parkinson', 'patiënttevredenheid']
  },
  {
    country: 'Belgium',
    name: 'Inkendaal',
    url: 'https://www.inkendaal.be/',
    needles: ['neurologische beperkingen', 'zwembad', 'gehospitaliseerde', 'ambulante']
  },
  {
    country: 'Germany',
    name: 'BDH-Klinik Elzach',
    url: 'https://www.bdh-klinik-elzach.de/',
    needles: ['neurologische rehabilitation', 'neurologische intensivmedizin', 'frührehabilitation']
  },
  {
    country: 'Germany',
    name: 'BDH-Klinik Greifswald',
    url: 'https://www.bdh-klinik-greifswald.de/',
    needles: ['zentrum für neurorehabilitation', 'frührehabilitation', 'rehabilitation schwerst schädelhirngeschädigter patienten']
  },
  {
    country: 'Germany',
    name: 'Schön Klinik Bad Aibling Harthausen',
    url: 'https://www.schoen-klinik.de/bad-aibling-harthausen',
    needles: ['neurologische frührehabilitation', 'robotergestützte', 'schlaganfall', 'stroke unit']
  },
  {
    country: 'Germany',
    name: 'Hegau-Jugendwerk Gailingen',
    url: 'https://hegau-jugendwerk.de/',
    needles: ['neurologische rehabilitation', 'rehabilitationsphasen b, c, d und e', 'kinder', 'jugendliche', 'junge erwachsene']
  },
  {
    country: 'Germany',
    name: 'Kliniken Schmieder Allensbach',
    url: 'https://kliniken-schmieder.com/hospital/allensbach/',
    needles: ['neurological rehabilitation', 'research', 'day care', 'phase-based']
  },
  {
    country: 'Germany',
    name: 'Kliniken Schmieder Gerlingen',
    url: 'https://kliniken-schmieder.com/hospital/gerlingen/',
    needles: ['neurological rehabilitation', 'phase b', 'research', 'day care']
  },
  {
    country: 'Germany',
    name: 'Kliniken Schmieder Stuttgart',
    url: 'https://kliniken-schmieder.com/hospital/stuttgart/',
    needles: ['neurological rehabilitation', 'outpatient', 'day clinic', 'research']
  },
  {
    country: 'Switzerland',
    name: 'Rehaklinik Zihlschlacht',
    url: 'https://www.rehaklinik-zihlschlacht.ch/',
    needles: ['neurorehabilitation', 'robotics', 'parkinson', 'multiple sclerosis']
  },
  {
    country: 'Switzerland',
    name: 'Rehaklinik Tschugg',
    url: 'https://www.rehaklinik-tschugg.ch/',
    needles: ['neurological rehabilitation', 'parkinson', 'epilepsy', 'brain health']
  },
  {
    country: 'Norway',
    name: 'Sunnaas sykehus HF',
    url: 'https://www.sunnaas.no/',
    needles: ['rehabilitering', 'forskning', 'tverrfaglig', 'nevrologi']
  },
  {
    country: 'United Kingdom',
    name: 'Royal Hospital for Neuro-disability',
    url: 'https://www.rhn.org.uk/',
    needles: ['rehab', 'neuro-disability', 'brain injury', 'research']
  },
  {
    country: 'Switzerland',
    name: 'Klinik Valens',
    url: 'https://www.klinik-valens.ch/',
    needles: ['neurorehabilitation', 'neurological rehabilitation', 'rehabilitation']
  },
  {
    country: 'Germany',
    name: 'Sankt Rochus Kliniken',
    url: 'https://www.sankt-rochus-kliniken.de/',
    needles: ['neurologische frührehabilitation', 'neurologische rehabilitation', 'phase b', 'phase c', 'phase d']
  },
  {
    country: 'Germany',
    name: 'KLINIK BAVARIA Kreischa',
    url: 'https://www.klinik-bavaria.de/',
    needles: ['intensiv-reha', 'frührehabilitation', 'neurologie', 'motorische rehabilitation', 'kognitive rehabilitation']
  },
  {
    country: 'Czech Republic',
    name: 'Rehabilitační ústav Brandýs nad Orlicí',
    url: 'https://www.rehabilitacniustav.cz/',
    needles: ['robotická rehabilitace', 'neurorehabilitace', 'bazén', 'hydroterapie']
  },
  {
    country: 'United Kingdom',
    name: 'National Hospital for Neurology and Neurosurgery',
    url: 'https://www.uclh.nhs.uk/our-services/find-service/neurology-and-neurosurgery',
    needles: ['neurorehabilitation and therapy services', 'neurorehabilitation', 'rehabilitation']
  },
  {
    country: 'United States',
    name: 'Shepherd Center',
    url: 'https://www.shepherd.org/',
    needles: ['brain injury', 'spinal cord injury', 'rehabilitation', 'research']
  },
  {
    country: 'United States',
    name: 'Spaulding Rehabilitation Hospital Boston',
    url: 'https://www.spauldingrehab.org/',
    needles: ['brain injury', 'neurological rehabilitation', 'research', 'rehabilitation hospital']
  },
  {
    country: 'United States',
    name: 'Craig Hospital',
    url: 'https://craighospital.org/',
    needles: ['neurorehabilitation', 'brain injury rehabilitation', 'spinal cord rehabilitation', 'research']
  },
  {
    country: 'United States',
    name: 'Shirley Ryan AbilityLab',
    url: 'https://www.sralab.org/',
    needles: ['brain injury', 'spinal cord injury', 'rehabilitation', 'research']
  },
  {
    country: 'United States',
    name: 'Brooks Rehabilitation',
    url: 'https://brooksrehab.org/',
    needles: ['brain injury', 'spinal cord injury', 'neurological rehabilitation', 'research']
  }
];

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, ' ').trim();
}

async function collect(page, target) {
  const response = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const status = response?.status() ?? null;
  const title = await page.title().catch(() => '');
  const content = normalize(await page.textContent('body').catch(() => ''));
  const matches = target.needles.filter((needle) => content.includes(normalize(needle)));
  const snippet = matches.length ? matches.join(' | ') : '';
  return {
    name: target.name,
    country: target.country,
    url: target.url,
    status,
    title,
    evidence: snippet || 'No direct keyword match found on first pass.',
    qualifying: matches.length > 0
  };
}

const browser = await chromium.launch({ headless: true });
const results = [];

for (const target of targets) {
  const page = await browser.newPage();
  try {
    results.push(await collect(page, target));
  } catch (error) {
    results.push({
      name: target.name,
      country: target.country,
      url: target.url,
      status: null,
      title: '',
      evidence: String(error.message || error),
      qualifying: false
    });
  } finally {
    await page.close().catch(() => {});
  }
}

await browser.close();

await writeFile('neurorehab-scrape.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
