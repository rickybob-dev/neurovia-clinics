import { Configuration, PlaywrightCrawler } from 'crawlee';
import { writeFile } from 'node:fs/promises';

Configuration.getGlobalConfig().set('persistStorage', false);
Configuration.getGlobalConfig().set('systemInfoV2', false);
Configuration.getGlobalConfig().set('memoryMbytes', 1024);

const targets = [
  {
    country: 'Italy',
    name: 'Centro Giusti Firenze',
    url: 'https://www.centrogiusti.eu/',
    needles: ['pazienti neurologici', 'lesioni midollari', 'esoscheletro', 'ictus', 'sclerosi multipla', 'riabilitazione intensa e continuativa']
  },
  {
    country: 'Spain',
    name: 'Institut Guttmann',
    url: 'https://www.guttmann.com/es',
    needles: ['neurorrehabilitación', 'neurorehabilitation', 'rehabilitación neurológica', 'investigación']
  },
  {
    country: 'Spain',
    name: 'Hospital Nacional de Parapléjicos',
    url: 'http://www.infomedula.org/',
    needles: ['lesión medular', 'rehabilitación integral', 'espasticidad', 'electroestimulación funcional', 'investigación']
  },
  {
    country: 'Spain',
    name: 'Hospital Quirónsalud Miguel Domínguez',
    url: 'https://www.quironsalud.com/migueldominguez',
    needles: ['unidad de neuro-rehabilitación', 'neuro-rehabilitación', 'exoesqueletos robóticos', 'realidad virtual', 'pacientes neurológicos']
  },
  {
    country: 'Spain',
    name: 'Hospital Vithas Aguas Vivas',
    url: 'https://vithas.es/centro/vithas-hospital-aguas-vivas/',
    needles: ['unidad de neurorrehabilitación y daño cerebral', 'neurorrehabilitación especializada', 'piscina', 'tecnología robótica', 'rv']
  },
  {
    country: 'Spain',
    name: 'Hospital Vithas Sevilla',
    url: 'https://vithas.es/centro/vithas-hospital-sevilla/',
    needles: ['unidad de neurorrehabilitación', 'unidad hospitalaria de daño cerebral', 'irenea', 'recuperación funcional']
  },
  {
    country: 'Spain',
    name: 'Hospital Vithas Xanit Internacional',
    url: 'https://vithas.es/centro/vithas-hospital-xanit-internacional/',
    needles: ['unidad de neurorrehabilitación', 'irenea', 'daño cerebral', 'recuperación funcional']
  },
  {
    country: 'Spain',
    name: 'Hospital Vithas Valencia Consuelo',
    url: 'https://vithas.es/centro/vithas-hospital-valencia-consuelo/',
    needles: ['unidad de neurorrehabilitación pediátrica', 'cdiat', 'unidad de neurorrehabilitación']
  },
  {
    country: 'Spain',
    name: 'Hospital Vithas Vigo',
    url: 'https://vithas.es/centro/vithas-hospital-vigo/',
    needles: ['unidad de neurorrehabilitación', 'irenea']
  },
  {
    country: 'Germany',
    name: 'Kliniken Schmieder',
    url: 'https://kliniken-schmieder.com/',
    needles: ['neurological rehabilitation', 'neurorehabilitation', 'rehabilitation']
  },
  {
    country: 'France',
    name: 'Service universitaire de MPR neurologique — CHU de Nantes',
    url: 'https://www.chu-nantes.fr/medecine-physique-et-de-readaptation-neurologique',
    needles: ['handicap neurologique lourd', 'cerebrolésions', 'lésions médullaires', 'rééducation-réadaptation']
  },
  {
    country: 'France',
    name: 'Hôpital Maritime de Berck — AP-HP',
    url: 'https://maritimeberck.aphp.fr/presentation-de-lhopital-maritime-de-berck/',
    needles: ['rééducation neurologique', 'balnéothérapie en eau de mer', 'atelier fauteuils roulants', 'plateau de rééducation']
  },
  {
    country: 'France',
    name: 'Hôpital Henry Gabrielle — HCL',
    url: 'https://www.chu-lyon.fr/hopital-henry-gabrielle',
    needles: ['rééducation des affections neurologiques', 'blessures médullaires', 'traumatismes crâniens', 'suivis post-avc']
  },
  {
    country: 'Portugal',
    name: 'Centro de Medicina de Reabilitação de Alcoitão',
    url: 'https://cmra.scml.pt/',
    needles: ['medicina física e reabilitação', 'lesões medulares', 'reabilitação', 'terapia da fala', 'ortoprotesia']
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
    name: 'Swiss Paraplegic Centre',
    url: 'https://www.paraplegie.ch/en/',
    needles: ['spinal cord injuries', 'spinal cord injury', 'rehabilitation', 'research', 'innovation']
  },
  {
    country: 'Switzerland',
    name: 'Balgrist University Hospital',
    url: 'https://www.balgrist.ch/en/',
    needles: ['spinal cord injury centre', 'spinal cord injuries', 'physiotherapy', 'nursing care', 'research']
  },
  {
    country: 'United Kingdom',
    name: 'London Spinal Cord Injury Centre',
    url: 'https://www.rnoh.nhs.uk/',
    needles: ['spinal cord injury centre', 'acute spinal injury', 'rehabilitation and therapy', 'neuro-musculoskeletal']
  },
  {
    country: 'United Kingdom',
    name: 'Mildmay Hospital',
    url: 'https://www.mildmay.nhs.uk/',
    needles: ['hiv-associated neurological disorders', 'hand rehabilitation', 'specialist rehabilitation', 'neurocognitive']
  },
  {
    country: 'United Kingdom',
    name: 'Atkinson Morley Regional Neurosciences Centre — St George’s Hospital',
    url: 'https://www.stgeorges.nhs.uk/services/',
    needles: ['neurorehabilitation', 'stroke services', 'rehabilitation services', 'gait laboratory', 'functional electrical stimulation']
  },
  {
    country: 'United Kingdom',
    name: 'Rehabilitation services — Queen Mary’s Hospital',
    url: 'https://www.stgeorges.nhs.uk/service/rehabilitation-service/',
    needles: ['neuro-rehabilitation', 'functional electrical stimulation', 'spasticity management', 'gait lab']
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
    country: 'Croatia',
    name: 'University Hospital Centre Zagreb',
    url: 'http://www.kbc-zagreb.hr/',
    needles: ['klinika za neurologiju', 'klinički zavod za rehabilitaciju i ortopedska pomagala', 'rehabilitacija', 'neurokirurgija']
  },
  {
    country: 'United Kingdom',
    name: 'National Hospital for Neurology and Neurosurgery',
    url: 'https://www.uclh.nhs.uk/our-services/find-service/neurology-and-neurosurgery',
    needles: ['neurorehabilitation and therapy services', 'neurorehabilitation', 'rehabilitation']
  },
  {
    country: 'Ireland',
    name: 'National Rehabilitation Hospital',
    city: 'Dún Laoghaire',
    region: 'Dublin',
    url: 'https://www.nrh.ie/',
    needles: ['complex specialist rehabilitation services', 'rehabilitation services', 'research']
  },
  {
    country: 'Denmark',
    name: 'Marselisborgcentret',
    city: 'Aarhus',
    region: 'Central Denmark',
    url: 'https://www.marselisborgcentret.dk/',
    needles: ['rehabilitering', 'forskning', 'udvikling']
  },
  {
    country: 'Netherlands',
    name: 'Heliomare',
    city: 'Wijk aan Zee',
    region: 'North Holland',
    url: 'https://www.heliomare.nl/',
    needles: ['hersenletsel', 'dwarslaesie', 'multiple sclerose', 'revalidatie', 'onderzoek en innovatie']
  },
  {
    country: 'Netherlands',
    name: 'Kempenhaeghe',
    city: 'Heeze',
    region: 'North Brabant',
    url: 'https://www.kempenhaeghe.nl/',
    needles: ['neurologische leer- en ontwikkelstoornissen', 'wetenschap', 'innovatie', 'epilepsie']
  },
  {
    country: 'Austria',
    name: 'Neuromed Campus — Kepler Universitätsklinikum',
    city: 'Linz',
    region: 'Upper Austria',
    url: 'https://www.kepleruniklinikum.at/services/fuer-patientinnen-und-patienten/aufenthalt-am-neuromed-campus/',
    needles: ['neurologie', 'forschung', 'rehabilitation']
  },
  {
    country: 'Hungary',
    name: 'National Center for Spinal Disorders',
    city: 'Budapest',
    region: 'Budapest',
    url: 'https://nepegeszsegugyi-egyesulet.hu/en/national-center-spinal-disorders-buda-health-center',
    needles: ['spinal cord injury', 'rehabilitation', 'research', 'buda health center']
  },
  {
    country: 'Lithuania',
    name: 'Eglės sanatorija',
    city: 'Druskininkai',
    region: 'Alytus County',
    url: 'https://sanatorija.lt/',
    needles: ['medicinal rehabilitation', 'physical medicine', 'rehabilitation', 'medical rehabilitation', 'reabilitacijos centrai', 'fizinės medicinos ir reabilitacijos', 'sanatorinis gydymas']
  },
  {
    country: 'Estonia',
    name: 'Haapsalu Neurological Rehabilitation Centre',
    city: 'Haapsalu',
    region: 'Lääne County',
    url: 'https://www.hnrk.ee/',
    needles: ['neurorehabilitatsiooni osakond', 'spinaalse rehabilitatsiooni osakond', 'statsionaarne taastusravi', 'haapsalu neuroloogilise rehabilitatsioonikeskuse']
  },
  {
    country: 'Netherlands',
    name: 'Roessingh',
    city: 'Enschede',
    region: 'Overijssel',
    url: 'https://www.roessingh.nl/',
    needles: ['revalidatie', 'onderzoek', 'parkinson', 'na-aangeboren hersenletsel']
  },
  {
    country: 'Belgium',
    name: 'Inkendaal',
    city: 'Vlezenbeek',
    region: 'Flemish Brabant',
    url: 'https://www.inkendaal.be/',
    needles: ['revalidatie', 'neurologische', 'zwembad']
  },
  {
    country: 'Belgium',
    name: 'Revalidatieziekenhuis RevArte',
    city: 'Edegem',
    region: 'Antwerp',
    url: 'https://www.revarte.be/',
    needles: ['hersenletselkliniek', 'dwarslaesiekliniek', 'residentieel en ambulant zorgaanbod', 'revalidatieziekenhuis']
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

function collectEvidence(body, needles) {
  const matches = needles.filter((needle) => body.includes(normalize(needle)));
  return matches.join(' | ');
}

const rehabSignals = [
  'rehabilitation',
  'rehab',
  'riabilitazione',
  'revalidatie',
  'rééducation',
  'reabilitazione',
  'reabilitação',
  'reabilitacja',
  'rehabilitación',
  'rehabilitace',
  'rehabilitácia',
  'rehabilitacija'
];

const neuroSignals = [
  'neurolog',
  'neuro',
  'stroke',
  'ictus',
  'spinal cord',
  'spinal',
  'brain injury',
  'cerebral',
  'neurological injuries',
  'neurological disorders',
  'multiple sclerosis',
  'parkinson',
  'lesion medull',
  'lesões medulares',
  'lesioni midollari'
];

function hasBroaderNeurologicalRehab(body) {
  const hasRehab = rehabSignals.some((signal) => body.includes(normalize(signal)));
  const hasNeuro = neuroSignals.some((signal) => body.includes(normalize(signal)));
  return hasRehab && hasNeuro;
}

const results = new Map();

const crawler = new PlaywrightCrawler({
  maxConcurrency: 3,
  maxRequestRetries: 2,
  requestHandlerTimeoutSecs: 60,
  async requestHandler({ request, response, page, log }) {
    const target = request.userData.target;
    const status = response?.status() ?? null;
    const title = await page.title().catch(() => '');
    const body = normalize(await page.textContent('body').catch(() => ''));
    const evidence = collectEvidence(body, target.needles);
    const broader = hasBroaderNeurologicalRehab(body);
    const qualifying = Boolean(evidence) || broader;
    const validationTier = evidence ? 'strict' : broader ? 'broad' : 'none';

    log.info(`Scraped ${target.name} (${status ?? 'no status'})`);
    results.set(target.url, {
      name: target.name,
      country: target.country,
      city: target.city ?? '',
      region: target.region ?? '',
      url: target.url,
      status,
      title,
      evidence: evidence || 'No direct keyword match found on first pass.',
      qualifying,
      validationTier
    });
  },
  failedRequestHandler({ request, log }) {
    const target = request.userData.target;
    log.warning(`Failed ${target.name}: ${request.errorMessages?.[0] ?? 'unknown error'}`);
    results.set(target.url, {
      name: target.name,
      country: target.country,
      city: target.city ?? '',
      region: target.region ?? '',
      url: target.url,
      status: null,
      title: '',
      evidence: request.errorMessages?.[0] ?? 'Unknown error',
      qualifying: false,
      validationTier: 'none'
    });
  }
});

await crawler.run(
  targets.map((target) => ({
    url: target.url,
    uniqueKey: `${target.country}:${target.name}:${target.url}`,
    userData: { target }
  }))
);

const orderedResults = targets.map((target) => results.get(target.url) ?? {
  name: target.name,
  country: target.country,
  url: target.url,
  status: null,
  title: '',
  evidence: 'Missing result from crawler.',
  qualifying: false,
  validationTier: 'none'
});

const validatedResults = orderedResults.filter((result) => result.qualifying);

await writeFile('neurorehab-scrape.json', JSON.stringify(orderedResults, null, 2));
await writeFile('src/lib/data/validated-scrape.json', JSON.stringify(validatedResults, null, 2));
console.log(JSON.stringify(orderedResults, null, 2));
