export const conditionLabels = {
  stroke: { it: 'Ictus', en: 'Stroke' },
  tbi: { it: 'Trauma cranico', en: 'Brain injury' },
  spinal: { it: 'Lesioni midollari', en: 'Spinal cord injury' },
  ms: { it: 'Sclerosi multipla', en: 'Multiple sclerosis' },
  parkinson: { it: 'Parkinson', en: "Parkinson's" },
  neuromuscular: { it: 'Malattie neuromuscolari', en: 'Neuromuscular conditions' },
  pediatric: { it: 'Età evolutiva', en: 'Pediatric rehabilitation' },
  neuromotor: { it: 'Riabilitazione neuromotoria', en: 'Neuromotor rehabilitation' },
  cognitive: { it: 'Riabilitazione cognitiva', en: 'Cognitive rehabilitation' }
};

export const technologyLabels = {
  robotics: { it: 'Robotica', en: 'Robotics' },
  exoskeleton: { it: 'Esoscheletri', en: 'Exoskeletons' },
  vr: { it: 'Realtà virtuale', en: 'Virtual reality' },
  bci: { it: 'Interfacce cervello-computer', en: 'Brain-computer interfaces' },
  tele: { it: 'Teleriabilitazione', en: 'Telerehabilitation' },
  gait: { it: 'Analisi del cammino', en: 'Gait analysis' },
  prosthetics: { it: 'Protesica avanzata', en: 'Advanced prosthetics' }
};

export const centers = [
  {
    id: 'santa-lucia-roma',
    name: 'Fondazione Santa Lucia IRCCS',
    country: 'Italy',
    city: 'Roma', region: 'Lazio', lat: 41.8456, lng: 12.5037,
    address: 'Via Ardeatina 306, 00179 Roma', phone: '+39 06 515011',
    url: 'https://www.hsantalucia.it/servizi-sanitari/riabilitazione-neuromotoria',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson'],
    technologies: ['robotics', 'exoskeleton', 'vr', 'bci', 'gait'],
    modes: ['inpatient', 'day-hospital'], access: ['SSN', 'private'],
    disciplines: ['Fisiatria', 'Neurologia', 'Neuropsicologia', 'Logopedia', 'Terapia occupazionale'],
    completeness: 96,
    description: {
      it: 'Ospedale ad alta specializzazione per neuroriabilitazione motoria e cognitiva, con percorsi multidisciplinari e tecnologie avanzate.',
      en: 'A highly specialized hospital for motor and cognitive neurorehabilitation, with multidisciplinary pathways and advanced technology.'
    }
  },
  {
    id: 'montecatone-imola',
    name: 'Montecatone Rehabilitation Institute',
    country: 'Italy',
    city: 'Imola', region: 'Emilia-Romagna', lat: 44.3485, lng: 11.7076,
    address: 'Via Montecatone 37, 40026 Imola', phone: '+39 0542 632811',
    url: 'https://www.montecatone.com/',
    conditions: ['tbi', 'spinal'], technologies: ['robotics', 'gait', 'tele'],
    modes: ['inpatient', 'outpatient'], access: ['SSN'],
    disciplines: ['Fisiatria', 'Neurologia', 'Psicologia', 'Terapia occupazionale', 'Servizio sociale'],
    completeness: 91,
    description: {
      it: 'Centro di alta specialità per la riabilitazione intensiva di lesioni midollari e cerebrali acquisite.',
      en: 'A highly specialized center for intensive rehabilitation after spinal cord and acquired brain injuries.'
    }
  },
  {
    id: 'don-gnocchi-milano',
    name: 'IRCCS S. Maria Nascente — Don Gnocchi',
    country: 'Italy',
    city: 'Milano', region: 'Lombardia', lat: 45.4711, lng: 9.1273,
    address: 'Via Alfonso Capecelatro 66, 20148 Milano', phone: '+39 02 403081',
    url: 'https://www.dongnocchi.it/@strutture/centro-irccs-s-maria-nascente',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular'],
    technologies: ['robotics', 'vr', 'gait'], modes: ['inpatient', 'outpatient'], access: ['SSN', 'private'],
    disciplines: ['Fisiatria', 'Neurologia', 'Logopedia', 'Neuropsicologia'], completeness: 88,
    description: {
      it: 'Unità di riabilitazione intensiva neurologica per patologie cerebrovascolari, neurodegenerative, spinali e neuromuscolari.',
      en: 'An intensive neurological rehabilitation unit for cerebrovascular, neurodegenerative, spinal and neuromuscular conditions.'
    }
  },
  {
    id: 'bonino-pulejo-messina',
    name: 'IRCCS Centro Neurolesi Bonino Pulejo',
    country: 'Italy',
    city: 'Messina', region: 'Sicilia', lat: 38.1787, lng: 15.5212,
    address: 'S.S. 113, Contrada Casazza, 98124 Messina', phone: '+39 090 60128111',
    url: 'https://www.irccsme.it/servizi/riabilitazione-robotica/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson'], technologies: ['robotics', 'vr', 'gait'],
    modes: ['inpatient', 'day-hospital', 'outpatient'], access: ['SSN'],
    disciplines: ['Neurologia', 'Neurofisiologia', 'Psicologia', 'Logopedia', 'Fisioterapia'], completeness: 90,
    description: {
      it: 'Centro di alta specializzazione con riabilitazione neuromotoria, cognitiva e robotica, inclusa un’unità per gravi cerebrolesioni.',
      en: 'A highly specialized center for neuromotor, cognitive and robotic rehabilitation, including severe brain injury care.'
    }
  },
  {
    id: 'cris-rovigo',
    name: 'CRiS — Città di Rovigo',
    country: 'Italy',
    city: 'Rovigo', region: 'Veneto', lat: 45.0665, lng: 11.7905,
    address: 'Via G. Falcone e P. Borsellino 69, 45100 Rovigo', phone: '+39 0425 426111',
    url: 'https://cris.cittadirovigo.it/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson'], technologies: ['robotics', 'tele'],
    modes: ['inpatient', 'outpatient'], access: ['SSN', 'private'],
    disciplines: ['Fisiatria', 'Neurologia', 'Neuropsicologia', 'Fisioterapia'], completeness: 84,
    description: {
      it: 'Clinica dedicata alla riabilitazione fisica e cognitiva delle malattie del sistema nervoso, anche in tele-riabilitazione.',
      en: 'A clinic for physical and cognitive rehabilitation of nervous system disorders, including telerehabilitation.'
    }
  },
  {
    id: 'medea-bosisio',
    name: 'IRCCS Eugenio Medea',
    country: 'Italy',
    city: 'Bosisio Parini', region: 'Lombardia', lat: 45.8035, lng: 9.2914,
    address: 'Via Don Luigi Monza 20, 23842 Bosisio Parini', phone: '+39 031 877111',
    url: 'https://emedea.it/',
    conditions: ['pediatric', 'tbi', 'neuromuscular'], technologies: ['robotics', 'vr', 'gait'],
    modes: ['inpatient', 'outpatient'], access: ['SSN'],
    disciplines: ['Neuropsichiatria infantile', 'Fisiatria', 'Psicologia', 'Logopedia'], completeness: 86,
    description: {
      it: 'IRCCS dedicato alla ricerca, cura e riabilitazione delle disabilità neurologiche e neuropsichiatriche in età evolutiva.',
      en: 'An IRCCS focused on research, care and rehabilitation for neurological and neuropsychiatric disabilities in children.'
    }
  },
  {
    id: 'villa-beretta-costa-masnaga',
    name: 'Centro di riabilitazione Villa Beretta',
    country: 'Italy',
    city: 'Costa Masnaga', region: 'Lombardia', lat: 45.7883, lng: 9.2755,
    address: 'Via Nazario Sauro 17, 23845 Costa Masnaga', phone: '+39 031 856111',
    url: 'https://www.valduce.it/it/chi-siamo/centro-di-riabilitazione-villa-beretta',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor'],
    technologies: ['robotics', 'vr'], modes: ['inpatient', 'outpatient'], access: ['SSN'],
    disciplines: ['Neurologia', 'Neuropsicologia', 'Fisiatria', 'Psicologia', 'Bioingegneria'], completeness: 93,
    description: {
      it: 'Centro di riabilitazione specializzato nelle lesioni del sistema nervoso centrale, con approccio interdisciplinare e tecnologie avanzate.',
      en: 'A rehabilitation center specialized in central nervous system injuries, with an interdisciplinary model and advanced technology.'
    }
  },
  {
    id: 'auxologico-meda-riabilitazione',
    name: 'Auxologico Meda Riabilitazione',
    country: 'Italy',
    city: 'Meda', region: 'Lombardia', lat: 45.6612, lng: 9.1552,
    address: 'Corso della Resistenza 23, 20821 Meda', phone: '+39 02 619112500',
    url: 'https://www.auxologico.it/sedi/auxologico-meda-riabilitazione',
    conditions: ['neuromotor', 'cognitive'],
    technologies: [], modes: ['outpatient'], access: ['private', 'insurance'],
    disciplines: ['Fisiatria', 'Neurologia', 'Fisioterapia', 'Neuropsicologia'], completeness: 82,
    description: {
      it: 'Centro riabilitativo ambulatoriale con presa in carico multidisciplinare per bisogni neuromotori, cognitivi e di prevenzione.',
      en: 'An outpatient rehabilitation center with multidisciplinary care for neuromotor, cognitive and prevention needs.'
    }
  },
  {
    id: 'maugeri-montescano',
    name: 'IRCCS Maugeri Montescano',
    country: 'Italy',
    city: 'Montescano', region: 'Lombardia', lat: 45.0402, lng: 9.2834,
    address: 'Via per Montescano 1, 27040 Montescano', phone: '+39 0385 2471',
    url: 'https://www.icsmaugeri.it/dove-siamo/irccs-montescano',
    conditions: ['neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['SSN'],
    disciplines: ['Medicina fisica e riabilitativa', 'Neurofisiologia', 'Riabilitazione neuromotoria', 'Cardiologia riabilitativa'], completeness: 85,
    description: {
      it: 'IRCCS con forte vocazione riabilitativa, inclusa la riabilitazione neuromotoria e la neurofisiologia.',
      en: 'An IRCCS with a strong rehabilitation focus, including neuromotor rehabilitation and neurophysiology.'
    }
  },
  {
    id: 'maugeri-pavia',
    name: 'IRCCS Maugeri Pavia',
    country: 'Italy',
    city: 'Pavia', region: 'Lombardia', lat: 45.1847, lng: 9.1582,
    address: 'Via Salvatore Maugeri 4, 27100 Pavia', phone: '+39 0382 5931',
    url: 'https://www.icsmaugeri.it/dove-siamo/irccs-pavia',
    conditions: ['neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['SSN'],
    disciplines: ['Medicina fisica e riabilitativa', 'Fisioterapia', 'Neurologia'], completeness: 83,
    description: {
      it: 'Sede IRCCS orientata alla riabilitazione neuromotoria e ai percorsi multidisciplinari di recupero funzionale.',
      en: 'An IRCCS site oriented toward neuromotor rehabilitation and multidisciplinary functional recovery pathways.'
    }
  },
  {
    id: 'maugeri-castel-goffredo',
    name: 'IRCCS Maugeri Castel Goffredo',
    country: 'Italy',
    city: 'Castel Goffredo', region: 'Lombardia', lat: 45.2967, lng: 10.4836,
    address: 'Via dei Gelsi 5, 46042 Castel Goffredo', phone: '+39 0376 7751',
    url: 'https://www.icsmaugeri.it/dove-siamo/irccs-castel-goffredo',
    conditions: ['neuromotor'], technologies: [], modes: ['outpatient'], access: ['SSN'],
    disciplines: ['Neurologia', 'Medicina fisica e riabilitativa', 'Psicologia', 'Riabilitazione neuromotoria'], completeness: 80,
    description: {
      it: 'Sede con specialità neurologiche e riabilitazione neuromotoria nel percorso di presa in carico funzionale.',
      en: 'A site with neurological specialties and neuromotor rehabilitation in the functional care pathway.'
    }
  },
  {
    id: 'maugeri-veruno',
    name: 'IRCCS Maugeri Veruno',
    country: 'Italy',
    city: 'Gattico-Veruno', region: 'Piemonte', lat: 45.7381, lng: 8.5212,
    address: 'Via per Revislate 13, 28013 Gattico-Veruno', phone: '+39 0322 832111',
    url: 'https://www.icsmaugeri.it/dove-siamo/irccs-veruno',
    conditions: ['neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['SSN'],
    disciplines: ['Neurologia', 'Medicina fisica e riabilitativa', 'Fisioterapia'], completeness: 79,
    description: {
      it: 'Istituto con neurologia e medicina fisica e riabilitativa, adatto a percorsi di recupero neuromotorio.',
      en: 'An institute with neurology and physical rehabilitation suited to neuromotor recovery pathways.'
    }
  },
  {
    id: 'centro-giusti-firenze',
    name: 'Centro Giusti Firenze',
    country: 'Italy',
    city: 'Florence', region: 'Tuscany', lat: 43.7680, lng: 11.2320,
    address: 'Via del Gelsomino 60-64, 50125 Firenze', phone: '+39 055 2322698',
    url: 'https://www.centrogiusti.eu/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'pediatric', 'neuromotor'],
    technologies: ['robotics', 'gait'], modes: ['outpatient'], access: ['private', 'insurance'],
    disciplines: ['Riabilitazione', 'Fisioterapia', 'Fisiatria', 'Medicina riabilitativa', 'Infermieristica'],
    completeness: 86,
    researchHighlights: ['Official site explicitly targets neurological patients and spinal cord lesions', 'RIC pathway for neurological patients', 'HAL exoskeleton and other robotic rehabilitation tools'],
    robotNotes: ['HAL exoskeleton and other technology-supported gait rehabilitation'],
    description: {
      it: 'Centro fiorentino di riabilitazione con percorsi per pazienti neurologici, lesioni midollari, ictus e sclerosi multipla, con esoscheletro HAL.',
      en: 'A Florence rehabilitation center for neurological patients, spinal cord lesions, stroke, and multiple sclerosis, with HAL exoskeleton support.'
    }
  },
  {
    id: 'guttmann-badalona',
    name: 'Institut Guttmann',
    country: 'Spain',
    city: 'Badalona', region: 'Catalonia', lat: 41.4462, lng: 2.2247,
    address: 'Carrer de Garcilaso 57, 08916 Badalona', phone: '+34 93 497 77 00',
    url: 'https://www.guttmann.com/es',
    conditions: ['stroke', 'tbi', 'spinal', 'pediatric', 'neuromotor', 'cognitive'],
    technologies: ['prosthetics', 'vr', 'gait'], modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Neurologia', 'Neuropsicologia', 'Fisiatria', 'Logopedia', 'Terapia occupazionale'], completeness: 94,
    researchHighlights: ['Hospital de Neurorrehabilitación', 'Investigación e Innovación', 'Más de 4.500 personas atendidas al año'],
    robotNotes: ['Programa di protesica avanzata e neuroriabilitazione'],
    description: {
      it: 'Ospedale di neuroriabilitazione altamente specializzato con approccio interdisciplinare, salute cerebrale e area pediatrica.',
      en: 'A highly specialized neurorehabilitation hospital with an interdisciplinary model, brain health focus and pediatric care.'
    }
  },
  {
    id: 'hospital-nacional-paraplejicos-toledo',
    name: 'Hospital Nacional de Parapléjicos',
    country: 'Spain',
    city: 'Toledo', region: 'Castilla-La Mancha', lat: 39.8749, lng: -4.0526,
    address: 'Toledo', phone: 'Unknown',
    url: 'http://www.infomedula.org/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['hydrotherapy', 'electrostimulation'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitación', 'Neurología', 'Fisioterapia', 'Enfermería', 'Espasticidad'],
    completeness: 92,
    researchHighlights: ['Official site of the National Spinal Cord Injury Hospital', 'Rehabilitation, pediatric rehab and functional electrostimulation are listed on the official service pages', 'Research foundation and translational neuroscience activity'],
    features: ['spinal-cord', 'research'],
    description: {
      it: 'Centro pubblico di riferimento per la lesione midollare a Toledo, con riabilitazione integrale e forte attività di ricerca.',
      en: 'A public reference center for spinal cord injury in Toledo, with comprehensive rehabilitation and a strong research profile.'
    }
  },
  {
    id: 'quiron-miguel-dominguez-pontevedra',
    name: 'Hospital Quirónsalud Miguel Domínguez',
    country: 'Spain',
    city: 'Pontevedra', region: 'Galicia', lat: 42.4295, lng: -8.6443,
    address: 'Rúa Frei Xoán de Navarrete, 9, 36001 Pontevedra', phone: '986 856 800',
    url: 'https://www.quironsalud.com/migueldominguez',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive'],
    technologies: ['robotics', 'vr', 'gait'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Unidad de Neuro-Rehabilitación', 'Fisioterapia', 'Neurología', 'Traumatología', 'Rehabilitación'],
    completeness: 84,
    researchHighlights: ['Official neuro-rehabilitation unit on the hospital site', 'Exoskeletons, robotics and virtual reality for neurological patients', 'Modern private hospital with dedicated neuro-rehab content'],
    features: ['robotics', 'vr', 'neurology'],
    description: {
      it: 'Ospedale privato di Pontevedra con unità di neuro-riabilitazione ufficiale, esoscheletri, realtà virtuale e focus sui pazienti neurologici.',
      en: 'A private hospital in Pontevedra with an official neuro-rehabilitation unit, exoskeletons, virtual reality, and a neurological patient focus.'
    }
  },
  {
    id: 'vithas-aguas-vivas',
    name: 'Hospital Vithas Aguas Vivas',
    country: 'Spain',
    city: 'Carcaixent', region: 'Valencia', lat: 39.1205, lng: -0.4488,
    address: 'Carcaixent, Valencia', phone: 'Unknown',
    url: 'https://vithas.es/centro/vithas-hospital-aguas-vivas/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive', 'pediatric'],
    technologies: ['robotics', 'vr', 'pool'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Unidad de Neurorrehabilitación y Daño Cerebral', 'Neurología', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 90,
    researchHighlights: ['Official page states neurorrehabilitation and brain injury unit', 'Pool and robotic / virtual-reality rehabilitation equipment', 'Adult and pediatric inpatient and outpatient pathways'],
    robotNotes: ['Robotics and VR mentioned on the official hospital page'],
    description: {
      it: 'Ospedale privato con unità ufficiale di neuroriabilitazione e danno cerebrale, piscina terapeutica e tecnologie robotiche/RV.',
      en: 'A private hospital with an official neurorehabilitation and brain-injury unit, therapeutic pool, and robotic/VR rehabilitation technology.'
    }
  },
  {
    id: 'vithas-sevilla',
    name: 'Hospital Vithas Sevilla',
    country: 'Spain',
    city: 'Seville', region: 'Andalusia', lat: 37.3891, lng: -5.9845,
    address: 'Seville, Andalusia', phone: 'Unknown',
    url: 'https://vithas.es/centro/vithas-hospital-sevilla/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Unidad de Neurorrehabilitación', 'Unidad hospitalaria de daño cerebral', 'Neurología', 'Fisioterapia', 'Logopedia'],
    completeness: 82,
    researchHighlights: ['Official hospital page lists a neurorrehabilitation unit', 'Official page also highlights a brain-injury unit', 'Part of the Vithas IRENEA rehabilitation model'],
    description: {
      it: 'Ospedale privato di Siviglia con unità di neuroriabilitazione e unità ospedaliera per il danno cerebrale sul sito ufficiale.',
      en: 'A private Seville hospital listing a neurorrehabilitation unit and a brain-injury unit on its official site.'
    }
  },
  {
    id: 'vithas-xanit-internacional',
    name: 'Hospital Vithas Xanit Internacional',
    country: 'Spain',
    city: 'Benalmádena', region: 'Andalusia', lat: 36.5929, lng: -4.5750,
    address: 'Benalmádena, Málaga', phone: 'Unknown',
    url: 'https://vithas.es/centro/vithas-hospital-xanit-internacional/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Unidad de Neurorrehabilitación', 'Neurología', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 80,
    researchHighlights: ['Official hospital page lists a neurorrehabilitation unit', 'Part of the Vithas hospital network with the IRENEA model', 'Suitable as a southern Spain coverage point'],
    description: {
      it: 'Ospedale privato a Benalmádena con unità di neuroriabilitazione elencata sul sito ufficiale.',
      en: 'A private Benalmádena hospital listing a neurorrehabilitation unit on its official site.'
    }
  },
  {
    id: 'vithas-valencia-consuelo',
    name: 'Hospital Vithas Valencia Consuelo',
    country: 'Spain',
    city: 'Valencia', region: 'Valencia', lat: 39.4699, lng: -0.3763,
    address: 'Valencia, Valencian Community', phone: 'Unknown',
    url: 'https://vithas.es/centro/vithas-hospital-valencia-consuelo/',
    conditions: ['pediatric', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['outpatient'], access: ['private', 'insurance'],
    disciplines: ['Unidad de Neurorrehabilitación Pediátrica - CDIAT', 'Neurología', 'Fisioterapia', 'Logopedia', 'Terapia ocupacional'],
    completeness: 78,
    researchHighlights: ['Official hospital page lists a pediatric neurorrehabilitation unit', 'Useful coverage for pediatric neurological rehabilitation in Valencia'],
    description: {
      it: 'Ospedale privato di Valencia con unità pediatrica di neuroriabilitazione e CDIAT sul sito ufficiale.',
      en: 'A private Valencia hospital with a pediatric neurorrehabilitation unit and CDIAT on its official site.'
    }
  },
  {
    id: 'vithas-vigo',
    name: 'Hospital Vithas Vigo',
    country: 'Spain',
    city: 'Vigo', region: 'Galicia', lat: 42.2406, lng: -8.7207,
    address: 'Vigo, Galicia', phone: 'Unknown',
    url: 'https://vithas.es/centro/vithas-hospital-vigo/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Unidad de Neurorrehabilitación', 'Neurología', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 80,
    researchHighlights: ['Official hospital page lists a neurorrehabilitation unit', 'Adds north-west Spain coverage'],
    description: {
      it: 'Ospedale privato di Vigo con unità di neuroriabilitazione elencata sul sito ufficiale.',
      en: 'A private Vigo hospital listing a neurorrehabilitation unit on its official site.'
    }
  },
  {
    id: 'schmieder-heidelberg',
    name: 'Kliniken Schmieder Heidelberg',
    country: 'Germany',
    city: 'Heidelberg', region: 'Baden-Württemberg', lat: 49.3988, lng: 8.6724,
    address: 'Speyererhof 1, 69124 Heidelberg', phone: '+49 6221 6530',
    url: 'https://kliniken-schmieder.com/hospital/heidelberg/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive'],
    technologies: ['robotics', 'gait', 'tele'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologia', 'Fisiatria', 'Neuropsicologia', 'Logopedia'],
    completeness: 87,
    researchHighlights: ['Own research institute', 'University hospital cooperation', 'Measurable outcomes from admission to discharge'],
    robotNotes: ['Armeo', 'SaeboFlex', 'Gait training systems'],
    description: {
      it: 'Clinica neurologica e di neuroriabilitazione con ricerca interna, collaborazione accademica e percorsi intensivi per diversi livelli di gravità.',
      en: 'A neurological rehabilitation clinic with in-house research, academic cooperation and intensive pathways across severity levels.'
    }
  },
  {
    id: 'schmieder-network',
    name: 'Kliniken Schmieder',
    country: 'Germany',
    city: 'Heidelberg', region: 'Baden-Württemberg', lat: 49.3988, lng: 8.6724,
    address: 'Speyererhof 1, 69124 Heidelberg', phone: '+49 6221 6530',
    url: 'https://kliniken-schmieder.com/hospital/konstanz/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive'],
    technologies: ['robotics', 'gait', 'tele'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Fisiatria', 'Neuropsicologia', 'Logopedia'],
    completeness: 87,
    researchHighlights: ['Network umbrella page for neurological rehabilitation clinics', 'Own research institute', 'University hospital cooperation and measurable outcomes'],
    robotNotes: ['Armeo', 'SaeboFlex', 'Gait training systems'],
    description: {
      it: 'Rete tedesca di neuroriabilitazione con ricerca interna, cooperazione accademica e percorsi intensivi nelle varie sedi.',
      en: 'A German neurological rehabilitation network with in-house research, academic cooperation and intensive pathways across multiple sites.'
    }
  },
  {
    id: 'uri-soca-ljubljana',
    name: 'URI Soča',
    country: 'Slovenia',
    city: 'Ljubljana', region: 'Ljubljana', lat: 46.0569, lng: 14.5058,
    address: 'Linhartova 51, 1000 Ljubljana', phone: '+386 1 4758 100',
    url: 'https://www.uri-soca.si/en/',
    conditions: ['stroke', 'spinal', 'neuromuscular', 'cognitive'],
    technologies: ['prosthetics', 'tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitacijska medicina', 'Fizioterapija', 'Terapija occupazionale', 'Psihologija', 'Logopedia'],
    completeness: 84,
    researchHighlights: ['Tertiary-level health institution with scientific research', 'Comprehensive rehab for central and peripheral nervous system disorders', 'Training center for rehabilitation professionals'],
    description: {
      it: 'Istituto universitario sloveno per la riabilitazione medica, con riabilitazione completa per disturbi del sistema nervoso centrale e periferico.',
      en: 'Slovenia’s university rehabilitation institute, offering comprehensive medical rehabilitation for central and peripheral nervous system disorders.'
    }
  },
  {
    id: 'schmieder-konstanz',
    name: 'Kliniken Schmieder Konstanz',
    country: 'Germany',
    city: 'Konstanz', region: 'Baden-Württemberg', lat: 47.6779, lng: 9.1732,
    address: 'Zum Tafelholz 8, 78464 Konstanz', phone: '+49 7531 8030',
    url: 'https://kliniken-schmieder.com/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive'],
    technologies: ['tele', 'gait'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologia', 'Fisiatria', 'Neuropsicologia', 'Logopedia'],
    completeness: 85,
    researchHighlights: ['Lurija Institute for rehabilitation sciences and health research', 'Network of specialized neurological rehabilitation clinics', 'University-linked continuing education'],
    description: {
      it: 'Sede della rete Schmieder per la neuroriabilitazione, con focus neurologico, ricerca e percorsi riabilitativi intensivi.',
      en: 'A Schmieder network site for neurological rehabilitation, with research and intensive recovery pathways.'
    }
  },
  {
    id: 'schmieder-allensbach',
    name: 'Kliniken Schmieder Allensbach',
    country: 'Germany',
    city: 'Allensbach', region: 'Baden-Württemberg', lat: 47.7212, lng: 9.0682,
    address: 'Zum Tafelholz 1, 78476 Allensbach', phone: '+49 7533 8080',
    url: 'https://kliniken-schmieder.com/hospital/allensbach/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['gait', 'tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Physiotherapie', 'Logopädie', 'Ergotherapie'],
    completeness: 86,
    researchHighlights: ['Phase-based neurological rehabilitation', 'Part of the Schmieder research network', 'Early rehabilitation and day care'],
    features: ['research'],
    description: {
      it: 'Centro della rete Schmieder con riabilitazione neurologica per i diversi stadi clinici e integrazione con ricerca e day clinic.',
      en: 'A Schmieder network center for phase-based neurological rehabilitation with research integration and day clinic care.'
    }
  },
  {
    id: 'schmieder-gerlingen',
    name: 'Kliniken Schmieder Gerlingen',
    country: 'Germany',
    city: 'Gerlingen', region: 'Baden-Württemberg', lat: 48.8007, lng: 9.0614,
    address: 'Wildgarten 1, 70839 Gerlingen', phone: '+49 7156 9630',
    url: 'https://kliniken-schmieder.com/hospital/gerlingen/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['gait', 'tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Logopädie', 'Physiotherapie', 'Ergotherapie'],
    completeness: 85,
    researchHighlights: ['Neurological rehab across phases A-E', 'Part of the Schmieder research network'],
    features: ['research'],
    description: {
      it: 'Centro neurologico della rete Schmieder con percorsi riabilitativi completi e forte integrazione di team multidisciplinare.',
      en: 'A Schmieder neurological center with complete rehabilitation pathways and a strong multidisciplinary team.'
    }
  },
  {
    id: 'schmieder-stuttgart',
    name: 'Kliniken Schmieder Stuttgart',
    country: 'Germany',
    city: 'Stuttgart', region: 'Baden-Württemberg', lat: 48.7784, lng: 9.1800,
    address: 'Rosenbergstraße 38, 70176 Stuttgart', phone: '+49 711 20570',
    url: 'https://kliniken-schmieder.com/hospital/stuttgart/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive'],
    technologies: ['tele'], modes: ['outpatient', 'day clinic'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Physiotherapie', 'Logopädie', 'Ergotherapie', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Day-clinic and outpatient neurological rehabilitation', 'Part of the Schmieder research network'],
    features: ['research'],
    description: {
      it: 'Sede urbana della rete Schmieder con riabilitazione neurologica ambulatoriale e in day clinic.',
      en: 'An urban Schmieder site offering outpatient and day-clinic neurological rehabilitation.'
    }
  },
  {
    id: 'chu-nantes-saint-jacques',
    name: 'Service universitaire de MPR neurologique — CHU de Nantes',
    country: 'France',
    city: 'Nantes', region: 'Pays de la Loire', lat: 47.1978, lng: -1.5367,
    address: '85 rue Saint-Jacques, 44093 Nantes', phone: '+33 2 40 08 33 33',
    url: 'https://www.chu-nantes.fr/medecine-physique-et-de-readaptation-neurologique',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive'],
    technologies: ['tele', 'gait'],
    modes: ['inpatient', 'outpatient', 'day clinic'], access: ['public'],
    disciplines: ['Médecine physique', 'Neurologie', 'Kinésithérapie', 'Ergothérapie', 'Orthophonie', 'Neuropsychologie'],
    completeness: 91,
    researchHighlights: ['Official university neuro-rehab service for severe neurological handicap', 'Rehab for spinal cord injury and severe brain injury', 'Post-ICU neurorehab pathway and movement analysis'],
    features: ['research', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Servizio universitario di neuroriabilitazione con presa in carico dei grandi handicap neurologici, lesioni midollari e cerebrolesioni gravi.',
      en: 'A university neurological rehabilitation service focused on severe neurological disability, spinal cord injury, and severe brain injury.'
    }
  },
  {
    id: 'maritime-berck',
    name: 'Hôpital Maritime de Berck — AP-HP',
    country: 'France',
    city: 'Berck', region: 'Hauts-de-France', lat: 50.4021, lng: 1.5648,
    address: 'Rue du Docteur Menard, 62608 Berck',
    url: 'https://maritimeberck.aphp.fr/presentation-de-lhopital-maritime-de-berck/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'disorder'],
    technologies: ['hydro', 'tele'],
    modes: ['inpatient'], access: ['public'],
    disciplines: ['Médecine physique', 'Kinésithérapie', 'Ergothérapie', 'Psychomotricité', 'Appareillage'],
    completeness: 89,
    researchHighlights: ['Official AP-HP page calls it a reference for neurological rehabilitation', 'Sea-water balneotherapy and dedicated rehab plateau', 'Adult inpatient SMR with 91 neurorehab beds'],
    features: ['pool', 'water-therapy'],
    description: {
      it: 'Ospedale AP-HP di riferimento per la riabilitazione neurologica con balneoterapia in acqua di mare e piattaforma tecnica dedicata.',
      en: 'An AP-HP reference hospital for neurological rehabilitation with sea-water balneotherapy and a dedicated rehab platform.'
    }
  },
  {
    id: 'henry-gabrielle',
    name: 'Hôpital Henry Gabrielle — HCL',
    country: 'France',
    city: 'Saint-Genis-Laval', region: 'Auvergne-Rhône-Alpes', lat: 45.6895, lng: 4.7898,
    address: '20 route de Vourles, 69230 Saint-Genis-Laval', phone: '+33 4 72 11 80 88',
    url: 'https://www.chu-lyon.fr/hopital-henry-gabrielle',
    conditions: ['stroke', 'tbi', 'spinal', 'parkinson', 'cognitive'],
    technologies: ['gait', 'tele'],
    modes: ['inpatient', 'outpatient', 'day clinic'], access: ['public'],
    disciplines: ['Médecine physique', 'Neurologie', 'Kinésithérapie', 'Ergothérapie', 'Orthophonie', 'Neuropsychologie'],
    completeness: 92,
    researchHighlights: ['Nationally recognized neurological rehabilitation center', 'Post-stroke, spinal cord injury and traumatic brain injury pathways', 'Piscine, gymnasium and movement-analysis laboratory'],
    features: ['research', 'pool', 'water-therapy'],
    description: {
      it: 'Centro HCL di riferimento nazionale per la riabilitazione delle affezioni neurologiche, con piscina e laboratorio di analisi del movimento.',
      en: 'A nationally recognized HCL center for neurological rehabilitation, with a pool and movement-analysis lab.'
    }
  },
  {
    id: 'cmra-alcoitao',
    name: 'Centro de Medicina de Reabilitação de Alcoitão',
    country: 'Portugal',
    city: 'Alcoitão', region: 'Lisbon District', lat: 38.7198, lng: -9.3869,
    address: 'Rua Conde Barão – Alcoitão, 2649-506 Alcabideche', phone: '+351 214 608 300',
    url: 'https://cmra.scml.pt/',
    conditions: ['stroke', 'spinal', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Medicina Física e de Reabilitação', 'Fisioterapia', 'Terapia Ocupacional', 'Terapia da Fala', 'Enfermagem'],
    completeness: 83,
    researchHighlights: ['Official Portuguese rehabilitation center with multidisciplinary services', 'Inpatient programs and rehab pathways listed on the official site', 'Longstanding rehabilitation institution serving the Lisbon area'],
    features: ['rehabilitation'],
    description: {
      it: 'Centro portoghese di riabilitazione multidisciplinare ad Alcoitão, vicino a Cascais, con ricovero e ambulatori.',
      en: 'A Portuguese multidisciplinary rehabilitation center in Alcoitão, near Cascais, with inpatient and outpatient care.'
    }
  },
  {
    id: 'roessingh-enschede',
    name: 'Roessingh',
    country: 'Netherlands',
    city: 'Enschede', region: 'Overijssel', lat: 52.2227, lng: 6.8936,
    address: 'Roessinghsbleekweg 33B, 7522 AH Enschede', phone: '+31 053 487 58 75',
    url: 'https://www.roessingh.nl/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromuscular', 'pediatric'],
    technologies: ['gait', 'tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Logopedie', 'Ergotherapie', 'Psychologie'],
    completeness: 88,
    researchHighlights: ['Innovatie & onderzoek', 'Patient satisfaction published on the official site', 'Specialist care for NAH, MS and Parkinson'],
    features: ['research', 'patient-satisfaction'],
    description: {
      it: 'Centro di riabilitazione olandese specializzato in disturbi neurologici complessi, con ricerca e misurazione della soddisfazione dei pazienti.',
      en: 'A Dutch rehabilitation center for complex neurological conditions, with research and published patient satisfaction metrics.'
    }
  },
  {
    id: 'inkendaal-vlezenbeek',
    name: 'Inkendaal',
    country: 'Belgium',
    city: 'Vlezenbeek', region: 'Flemish Brabant', lat: 50.8242, lng: 4.2134,
    address: 'Inkendaalstraat 1, 1602 Vlezenbeek', phone: '+32 2 531 51 11',
    url: 'https://www.inkendaal.be/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'pediatric', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Kinesitherapie', 'Logopedie', 'Ergotherapie', 'Psychologie', 'Artsen'],
    completeness: 84,
    researchHighlights: ['Reference center for several rehabilitation specialties', 'Official quality model and accreditation history'],
    features: ['pool', 'water-therapy'],
    description: {
      it: 'Ospedale di riabilitazione con team multidisciplinare, percorsi per adulti e bambini e attività extramurali inclusa la piscina.',
      en: 'A rehabilitation hospital with multidisciplinary teams, adult and pediatric pathways, and extramural activities including a pool.'
    }
  },
  {
    id: 'revarte-edegem',
    name: 'Revalidatieziekenhuis RevArte',
    country: 'Belgium',
    city: 'Edegem', region: 'Antwerp', lat: 51.1568, lng: 4.4443,
    address: 'Drie Eikenstraat 659, 2650 Edegem', phone: '+32 3 443 17 00',
    url: 'https://www.mkl.be/mkl/revalidatieziekenhuis-revarte/',
    conditions: ['tbi', 'spinal', 'stroke', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiegeneeskunde', 'Kinesitherapie', 'Logopedie', 'Ergotherapie', 'Verpleegkunde'],
    completeness: 78,
    researchHighlights: ['Hersenletselkliniek on the official site', 'Dwarslaesiekliniek on the official site', 'Residentieel and ambulant rehab pathways'],
    features: ['brain-injury', 'spinal-cord'],
    description: {
      it: 'Ospedale di riabilitazione a Edegem con cliniche dedicate a lesioni cerebrali e lesioni midollari, sia in regime residenziale sia ambulatoriale.',
      en: 'A rehabilitation hospital in Edegem with dedicated brain-injury and spinal cord pathways, both inpatient and outpatient.'
    }
  },
  {
    id: 'bdh-elzach',
    name: 'BDH-Klinik Elzach',
    country: 'Germany',
    city: 'Elzach', region: 'Baden-Württemberg', lat: 48.1769, lng: 8.0731,
    address: 'Am Tannwald 1–3, 79215 Elzach', phone: '+49 7682 8010',
    url: 'https://www.bdh-klinik-elzach.de/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'cognitive'],
    technologies: ['tele'], modes: ['inpatient'], access: ['public', 'private'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Physiotherapie', 'Logopädie', 'Pflege'],
    completeness: 86,
    researchHighlights: ['Zentrum für NeuroRehabilitation', 'Forschung und Lehre listed in the official navigation'],
    features: ['early-rehab'],
    description: {
      it: 'Centro tedesco di neuroriabilitazione e riabilitazione precoce con forte componente neurologica e intensiva.',
      en: 'A German center for neurorehabilitation and early rehabilitation with a strong neurological and intensive-care component.'
    }
  },
  {
    id: 'bdh-greifswald',
    name: 'BDH-Klinik Greifswald',
    country: 'Germany',
    city: 'Greifswald', region: 'Mecklenburg-Vorpommern', lat: 54.0939, lng: 13.3948,
    address: 'Rostocker Chaussee 70, 17489 Greifswald', phone: '+49 3834 8710',
    url: 'https://www.bdh-klinik-greifswald.de/',
    conditions: ['tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient'], access: ['public', 'private'],
    disciplines: ['Neurologie', 'Physiotherapie', 'Logopädie', 'Neuropsychologie'],
    completeness: 85,
    researchHighlights: ['Zentrum für Neurorehabilitation', 'Schwerst schädelhirngeschädigte Patienten'],
    features: ['early-rehab'],
    description: {
      it: 'Centro specializzato in neuroriabilitazione precoce e trattamento di pazienti con gravi lesioni cranio-cerebrali.',
      en: 'A specialized center for early neurorehabilitation and treatment of severe brain-injured patients.'
    }
  },
  {
    id: 'bdh-braunfels',
    name: 'BDH-Klinik Braunfels',
    country: 'Germany',
    city: 'Braunfels', region: 'Hesse', lat: 50.5159, lng: 8.3899,
    address: 'Braunfels, Hesse', phone: 'Unknown',
    url: 'https://www.bdh-klinik-braunfels.de/bdh-klinik-braunfels',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Stroke Unit', 'Neuropsychologie', 'Therapie', 'Pflege'],
    completeness: 82,
    researchHighlights: ['Official site matched stroke unit and neurological rehabilitation signals', 'Part of the BDH neurological rehabilitation network', 'Relevant for stroke, brain injury and complex neurological recovery'],
    features: ['early-rehab', 'stroke-unit'],
    description: {
      it: 'Clinica BDH in Assia con profilo neurologico, stroke unit e riabilitazione neurologica specialistica.',
      en: 'A BDH clinic in Hesse with a neurological profile, stroke unit, and specialist neurological rehabilitation.'
    }
  },
  {
    id: 'bdh-hessisch-oldendorf',
    name: 'BDH-Klinik Hessisch Oldendorf',
    country: 'Germany',
    city: 'Hessisch Oldendorf', region: 'Lower Saxony', lat: 52.1727, lng: 9.2498,
    address: 'Hessisch Oldendorf, Lower Saxony', phone: 'Unknown',
    url: 'https://www.bdh-klinik-hessisch-oldendorf.de/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Physiotherapie', 'Logopädie', 'Ergotherapie'],
    completeness: 82,
    researchHighlights: ['Official site matched neurological rehabilitation and medical-vocational rehabilitation signals', 'BDH network clinic for complex neurological rehabilitation', 'Relevant for stroke and acquired neurological injuries'],
    features: ['early-rehab', 'medical-vocational-rehab'],
    description: {
      it: 'Clinica BDH in Bassa Sassonia con riabilitazione neurologica e percorsi medico-professionali.',
      en: 'A BDH clinic in Lower Saxony with neurological rehabilitation and medical-vocational rehabilitation pathways.'
    }
  },
  {
    id: 'bdh-vallendar',
    name: 'BDH-Klinik Vallendar',
    country: 'Germany',
    city: 'Vallendar', region: 'Rhineland-Palatinate', lat: 50.3957, lng: 7.6243,
    address: 'Vallendar, Rhineland-Palatinate', phone: 'Unknown',
    url: 'https://www.bdh-klinik-vallendar.de/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Beatmungsmedizin', 'Rehabilitation', 'Therapie', 'Pflege'],
    completeness: 82,
    researchHighlights: ['Official site matched neurological rehab and respiratory medicine signals', 'Part of the BDH rehabilitation network', 'Suitable for complex neurological rehabilitation review'],
    features: ['early-rehab', 'respiratory-care'],
    description: {
      it: 'Clinica BDH in Renania-Palatinato con riabilitazione neurologica e competenze respiratorie per casi complessi.',
      en: 'A BDH clinic in Rhineland-Palatinate with neurological rehabilitation and respiratory-care expertise for complex cases.'
    }
  },
  {
    id: 'schoen-bad-aibling-harthausen',
    name: 'Schön Klinik Bad Aibling Harthausen',
    country: 'Germany',
    city: 'Bad Aibling', region: 'Bavaria', lat: 47.8628, lng: 12.0127,
    address: 'Bad Aibling, Bavaria', phone: '+49 8061 903-0',
    url: 'https://www.schoen-klinik.de/bad-aibling-harthausen',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromotor', 'cognitive'],
    technologies: ['robotics', 'gait', 'tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Frührehabilitation', 'Neurogeriatrie', 'Pflege', 'Therapie'],
    completeness: 88,
    researchHighlights: ['Neurological early rehabilitation and acute neurology', 'Official research and teaching section', 'Robotics listed as part of the treatment standard'],
    robotNotes: ['robot-assisted therapies'],
    features: ['research', 'robotics', 'stroke-unit'],
    description: {
      it: 'Clinica neurologica e di neuroriabilitazione con stroke unit, neuroriabilitazione precoce, ricerca e terapie robotiche.',
      en: 'A neurological and neurorehabilitation clinic with stroke unit, early rehabilitation, research, and robot-assisted therapies.'
    }
  },
  {
    id: 'hegau-jugendwerk-gailingen',
    name: 'Hegau-Jugendwerk Gailingen',
    country: 'Germany',
    city: 'Gailingen am Hochrhein', region: 'Baden-Württemberg', lat: 47.6978, lng: 8.7531,
    address: 'Gailingen am Hochrhein, Baden-Württemberg', phone: '+49 7734 939-0',
    url: 'https://hegau-jugendwerk.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'pediatric', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neuropädiatrie', 'Physiotherapie', 'Ergotherapie', 'Logopädie', 'Psychologie'],
    completeness: 84,
    researchHighlights: ['Neurologisches Krankenhaus und Rehabilitationszentrum', 'Covers rehabilitation phases B, C, D and E', 'Special focus on children, adolescents and young adults'],
    features: ['pediatric-neuro', 'education'],
    description: {
      it: 'Centro neurologico per bambini, adolescenti e giovani adulti con riabilitazione completa e tutte le fasi di neuroriabilitazione.',
      en: 'A neurological center for children, adolescents and young adults with comprehensive rehabilitation across all neurorehabilitation phases.'
    }
  },
  {
    id: 'schmieder-gailingen',
    name: 'Kliniken Schmieder Gailingen',
    country: 'Germany',
    city: 'Gailingen am Hochrhein', region: 'Baden-Württemberg', lat: 47.6978, lng: 8.7531,
    address: 'Gailingen am Hochrhein, Baden-Württemberg', phone: 'Unknown',
    url: 'https://kliniken-schmieder.com/hospital/gailingen/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['gait', 'tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Physiotherapie', 'Logopädie', 'Ergotherapie'],
    completeness: 84,
    researchHighlights: ['Official Schmieder location page matched neurological rehabilitation evidence', 'Part of the Schmieder neurological rehabilitation network', 'Relevant for stroke, brain injury, MS and Parkinson pathways'],
    features: ['research'],
    description: {
      it: 'Sede Schmieder a Gailingen per riabilitazione neurologica specialistica all’interno della rete tedesca Schmieder.',
      en: 'A Schmieder site in Gailingen for specialist neurological rehabilitation within the German Schmieder network.'
    }
  },
  {
    id: 'asklepios-schaufling',
    name: 'Asklepios Klinik Schaufling',
    country: 'Germany',
    city: 'Schaufling', region: 'Bavaria', lat: 48.8502, lng: 13.0665,
    address: 'Schaufling, Bavaria', phone: 'Unknown',
    url: 'https://www.asklepios.com/schaufling',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Rehabilitation', 'Therapie', 'Pflege'],
    completeness: 81,
    researchHighlights: ['Official Asklepios site matched neurology and neuropsychology signals', 'Specialist rehabilitation clinic rather than generic physiotherapy', 'Relevant for neurological and neuropsychological rehabilitation review'],
    features: ['neuropsychology'],
    description: {
      it: 'Clinica specialistica Asklepios in Baviera con segnali ufficiali di neurologia, neuropsicologia e riabilitazione.',
      en: 'An Asklepios specialist clinic in Bavaria with official neurology, neuropsychology and rehabilitation signals.'
    }
  },
  {
    id: 'asklepios-bad-salzhausen',
    name: 'Asklepios Neurologische Klinik Bad Salzhausen',
    country: 'Germany',
    city: 'Bad Salzhausen', region: 'Hesse', lat: 50.4179, lng: 8.9839,
    address: 'Bad Salzhausen, Hesse', phone: 'Unknown',
    url: 'https://www.asklepios.com/bad-salzhausen',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neurologische Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official Asklepios site matched neurological clinic and neurological rehabilitation signals', 'Relevant for stroke and broader neurological rehabilitation', 'Private specialist neurology provider'],
    features: ['neurology'],
    description: {
      it: 'Clinica neurologica Asklepios in Assia con segnali ufficiali di riabilitazione neurologica specialistica.',
      en: 'An Asklepios neurological clinic in Hesse with official signals for specialist neurological rehabilitation.'
    }
  },
  {
    id: 'rehanova-koeln',
    name: 'RehaNova Köln',
    country: 'Germany',
    city: 'Cologne', region: 'North Rhine-Westphalia', lat: 50.9375, lng: 6.9603,
    address: 'Cologne, North Rhine-Westphalia', phone: 'Unknown',
    url: 'https://www.rehanova.de/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Neurologisch-neurochirurgische Rehabilitation', 'Neurologie', 'Neuropsychologie', 'Therapie', 'Pflege'],
    completeness: 86,
    researchHighlights: ['Official site describes a neurological-neurosurgical rehabilitation clinic', 'Matched phase B-D, stroke, MS and Parkinson signals', 'Strong candidate for complex inpatient neurorehabilitation'],
    features: ['early-rehab'],
    description: {
      it: 'Clinica di riabilitazione neurologico-neurochirurgica a Colonia con percorsi fase B-D e focus su ictus, MS e Parkinson.',
      en: 'A neurological-neurosurgical rehabilitation clinic in Cologne with phase B-D pathways and focus on stroke, MS and Parkinson.'
    }
  },
  {
    id: 'johanniter-godeshoehe-bonn',
    name: 'Johanniter-Klinik Godeshöhe',
    country: 'Germany',
    city: 'Bonn', region: 'North Rhine-Westphalia', lat: 50.7045, lng: 7.1536,
    address: 'Bonn, North Rhine-Westphalia', phone: 'Unknown',
    url: 'https://www.godeshoehe.de/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Intensivmedizin', 'Neurologische Frührehabilitation', 'Neuropsychologie', 'Therapie', 'Pflege'],
    completeness: 85,
    researchHighlights: ['Official page matched neurological intensive medicine and early rehabilitation', 'Matched MS and Parkinson evidence', 'Relevant for severe acquired neurological injuries and stroke'],
    features: ['early-rehab', 'intensive-care'],
    description: {
      it: 'Clinica Johanniter a Bonn con medicina intensiva neurologica, neuroriabilitazione precoce e percorsi per MS e Parkinson.',
      en: 'A Johanniter clinic in Bonn with neurological intensive medicine, early neurorehabilitation and pathways for MS and Parkinson.'
    }
  },
  {
    id: 'mi-bad-heilbrunn',
    name: 'm&i-Fachklinik Bad Heilbrunn',
    country: 'Germany',
    city: 'Bad Heilbrunn', region: 'Bavaria', lat: 47.7460, lng: 11.4590,
    address: 'Bad Heilbrunn, Bavaria', phone: 'Unknown',
    url: 'https://www.fachklinik-bad-heilbrunn.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 76,
    researchHighlights: ['Official clinic page matched rehabilitation and neurological signals', 'Part of the m&i specialist rehabilitation clinic group', 'Broad candidate requiring normal manual confirmation depth'],
    features: ['rehabilitation'],
    description: {
      it: 'Fachklinik m&i in Baviera con segnali di riabilitazione e neurologia, da mantenere come candidato specialistico approvato.',
      en: 'An m&i specialist clinic in Bavaria with rehabilitation and neurology signals, retained as an approved specialist candidate.'
    }
  },
  {
    id: 'mi-bad-liebenstein',
    name: 'm&i-Fachklinik Bad Liebenstein',
    country: 'Germany',
    city: 'Bad Liebenstein', region: 'Thuringia', lat: 50.8150, lng: 10.3520,
    address: 'Bad Liebenstein, Thuringia', phone: 'Unknown',
    url: 'https://www.fachklinik-bad-liebenstein.de/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Weaning', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official site matched neurorehabilitation and weaning evidence', 'm&i specialist rehabilitation clinic', 'Relevant for complex neurological rehabilitation and respiratory transition care'],
    features: ['early-rehab', 'respiratory-care'],
    description: {
      it: 'Fachklinik m&i in Turingia con neuroriabilitazione e weaning per pazienti neurologici complessi.',
      en: 'An m&i specialist clinic in Thuringia with neurorehabilitation and weaning for complex neurological patients.'
    }
  },
  {
    id: 'mi-enzensberg',
    name: 'm&i-Fachklinik Enzensberg',
    country: 'Germany',
    city: 'Füssen', region: 'Bavaria', lat: 47.5696, lng: 10.7004,
    address: 'Füssen, Bavaria', phone: 'Unknown',
    url: 'https://www.fachklinik-enzensberg.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Phase B Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 82,
    researchHighlights: ['Official site matched phase B and neurological rehabilitation signals', 'm&i specialist clinic in Bavaria', 'Relevant for staged neurological rehabilitation'],
    features: ['early-rehab'],
    description: {
      it: 'Fachklinik m&i a Füssen con segnali di riabilitazione neurologica fase B e percorsi specialistici.',
      en: 'An m&i specialist clinic in Füssen with phase B neurological rehabilitation signals and specialist pathways.'
    }
  },
  {
    id: 'mi-herzogenaurach',
    name: 'm&i-Fachklinik Herzogenaurach',
    country: 'Germany',
    city: 'Herzogenaurach', region: 'Bavaria', lat: 49.5680, lng: 10.8830,
    address: 'Herzogenaurach, Bavaria', phone: 'Unknown',
    url: 'https://www.fachklinik-herzogenaurach.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 76,
    researchHighlights: ['Official clinic page matched rehabilitation and neurological signals', 'Part of the m&i specialist rehabilitation group', 'Broad approved candidate for neurological rehabilitation review'],
    features: ['rehabilitation'],
    description: {
      it: 'Fachklinik m&i in Baviera con segnali ufficiali di neurologia e riabilitazione specialistica.',
      en: 'An m&i specialist clinic in Bavaria with official neurology and specialist rehabilitation signals.'
    }
  },
  {
    id: 'mi-ichenhausen',
    name: 'm&i-Fachklinik Ichenhausen',
    country: 'Germany',
    city: 'Ichenhausen', region: 'Bavaria', lat: 48.3710, lng: 10.3070,
    address: 'Ichenhausen, Bavaria', phone: 'Unknown',
    url: 'https://www.fachklinik-ichenhausen.de/',
    conditions: ['stroke', 'tbi', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Parkinson Rehabilitation', 'Neuropsychologie', 'Therapie', 'Pflege'],
    completeness: 82,
    researchHighlights: ['Official site matched neurology and Parkinson evidence', 'm&i specialist rehabilitation clinic', 'Relevant for Parkinson and acquired neurological rehabilitation'],
    features: ['parkinson'],
    description: {
      it: 'Fachklinik m&i in Baviera con segnali ufficiali di neurologia e percorsi rilevanti per Parkinson.',
      en: 'An m&i specialist clinic in Bavaria with official neurology signals and relevant Parkinson pathways.'
    }
  },
  {
    id: 'mi-hohenurach',
    name: 'm&i-Fachkliniken Hohenurach',
    country: 'Germany',
    city: 'Bad Urach', region: 'Baden-Württemberg', lat: 48.4910, lng: 9.4000,
    address: 'Bad Urach, Baden-Württemberg', phone: 'Unknown',
    url: 'https://www.fachkliniken-hohenurach.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Therapie', 'Pflege', 'Rehabilitation'],
    completeness: 82,
    researchHighlights: ['Official site matched neuropsychology and stroke evidence', 'm&i specialist rehabilitation clinic', 'Relevant for stroke and cognitive-neurological rehabilitation'],
    features: ['neuropsychology', 'stroke'],
    description: {
      it: 'Fachkliniken m&i a Bad Urach con focus su neuropsicologia, ictus e riabilitazione specialistica.',
      en: 'm&i specialist clinics in Bad Urach with focus on neuropsychology, stroke and specialist rehabilitation.'
    }
  },
  {
    id: 'marcus-klinik-bad-driburg',
    name: 'Marcus Klinik Bad Driburg',
    country: 'Germany',
    city: 'Bad Driburg', region: 'North Rhine-Westphalia', lat: 51.7350, lng: 9.0190,
    address: 'Bad Driburg, North Rhine-Westphalia', phone: 'Unknown',
    url: 'https://www.marcus-klinik.de/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Parkinson Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 82,
    researchHighlights: ['Official site matched neurology and Parkinson evidence', 'Rehabilitation clinic rather than generic physiotherapy', 'Relevant for neurological rehabilitation review'],
    features: ['parkinson'],
    description: {
      it: 'Clinica di riabilitazione a Bad Driburg con segnali ufficiali di neurologia e Parkinson.',
      en: 'A rehabilitation clinic in Bad Driburg with official neurology and Parkinson signals.'
    }
  },
  {
    id: 'mediclin-rhein-ruhr-essen',
    name: 'MediClin Fachklinik Rhein/Ruhr',
    country: 'Germany',
    city: 'Essen', region: 'North Rhine-Westphalia', lat: 51.4556, lng: 7.0116,
    address: 'Essen, North Rhine-Westphalia', phone: 'Unknown',
    url: 'https://www.fachklinik-rheinruhr.de/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official site matched neurology, stroke and multiple sclerosis evidence', 'MediClin specialist rehabilitation provider', 'Relevant for neurological rehabilitation in North Rhine-Westphalia'],
    features: ['stroke'],
    description: {
      it: 'Fachklinik MediClin nell’area Reno-Ruhr con segnali ufficiali per neurologia, ictus e sclerosi multipla.',
      en: 'A MediClin specialist clinic in the Rhein-Ruhr area with official signals for neurology, stroke and multiple sclerosis.'
    }
  },
  {
    id: 'moritz-klinik-bad-klosterlausnitz',
    name: 'Moritz Klinik Bad Klosterlausnitz',
    country: 'Germany',
    city: 'Bad Klosterlausnitz', region: 'Thuringia', lat: 50.9160, lng: 11.8610,
    address: 'Bad Klosterlausnitz, Thuringia', phone: 'Unknown',
    url: 'https://www.moritz-klinik.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 82,
    researchHighlights: ['Official site matched neurology, rehabilitation and stroke evidence', 'Specialist rehabilitation clinic in Thuringia', 'Relevant for neurological and stroke rehabilitation'],
    features: ['stroke'],
    description: {
      it: 'Clinica di riabilitazione in Turingia con segnali ufficiali di neurologia, riabilitazione e ictus.',
      en: 'A rehabilitation clinic in Thuringia with official neurology, rehabilitation and stroke signals.'
    }
  },
  {
    id: 'srh-kurpfalzkrankenhaus-heidelberg',
    name: 'SRH Kurpfalzkrankenhaus Heidelberg',
    country: 'Germany',
    city: 'Heidelberg', region: 'Baden-Württemberg', lat: 49.4020, lng: 8.6720,
    address: 'Heidelberg, Baden-Württemberg', phone: 'Unknown',
    url: 'https://www.kurpfalzkrankenhaus.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neurologische Frührehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 81,
    researchHighlights: ['Official hospital page matched neurology signals', 'Seeded as a specialist neurology hospital with early rehabilitation relevance', 'Adds Heidelberg neurorehabilitation coverage beyond the Schmieder network'],
    features: ['early-rehab'],
    description: {
      it: 'Ospedale SRH a Heidelberg con profilo neurologico e rilevanza per neuroriabilitazione precoce.',
      en: 'An SRH hospital in Heidelberg with a neurological profile and relevance for early neurorehabilitation.'
    }
  },
  {
    id: 'dr-becker-neurozentrum-niedersachsen',
    name: 'Dr. Becker Neurozentrum Niedersachsen',
    country: 'Germany',
    city: 'Bad Essen', region: 'Lower Saxony', lat: 52.3217, lng: 8.3370,
    address: 'Bad Essen, Lower Saxony', phone: 'Unknown',
    url: 'https://www.dbkg.de/kliniken/dr-becker-neurozentrum-niedersachsen/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 76,
    researchHighlights: ['Approved after second-pass review', 'Official page matched neuro and center signals', 'Specialist neurology rehabilitation provider in the Dr. Becker network'],
    features: ['neurology'],
    description: {
      it: 'Neurozentrum Dr. Becker in Bassa Sassonia, approvato per la mappa come centro specialistico di riabilitazione neurologica.',
      en: 'A Dr. Becker neuro center in Lower Saxony, approved for the map as a specialist neurological rehabilitation center.'
    }
  },
  {
    id: 'median-berlin-kladow',
    name: 'MEDIAN Klinik Berlin-Kladow',
    country: 'Germany',
    city: 'Berlin', region: 'Berlin', lat: 52.4540, lng: 13.1440,
    address: 'Berlin-Kladow, Berlin', phone: 'Unknown',
    url: 'https://www.median-kliniken.de/de/median-klinik-berlin-kladow/',
    conditions: ['stroke', 'tbi', 'ms', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Neurologie', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 84,
    researchHighlights: ['Official page matched neurological rehabilitation evidence', 'Second-pass candidate approved for Berlin coverage', 'Relevant for stroke and acquired neurological rehabilitation'],
    features: ['neurological-rehab'],
    description: {
      it: 'Clinica MEDIAN a Berlino-Kladow con riabilitazione neurologica ufficialmente rilevata e focus su ictus e lesioni neurologiche.',
      en: 'A MEDIAN clinic in Berlin-Kladow with official neurological rehabilitation evidence and focus on stroke and acquired neurological injuries.'
    }
  },
  {
    id: 'median-nrz-magdeburg',
    name: 'MEDIAN Klinik NRZ Magdeburg',
    country: 'Germany',
    city: 'Magdeburg', region: 'Saxony-Anhalt', lat: 52.1205, lng: 11.6276,
    address: 'Magdeburg, Saxony-Anhalt', phone: 'Unknown',
    url: 'https://www.median-kliniken.de/de/median-klinik-nrz-magdeburg/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologisches Rehabilitationszentrum', 'Neurologie', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 85,
    researchHighlights: ['Official page matched neurological rehabilitation and neurorehabilitation evidence', 'NRZ specialist neurorehabilitation profile', 'Relevant for stroke and complex neurological recovery'],
    features: ['neurological-rehab', 'early-rehab'],
    description: {
      it: 'Centro MEDIAN NRZ a Magdeburgo con profilo di neuroriabilitazione e percorsi per recupero neurologico complesso.',
      en: 'A MEDIAN NRZ center in Magdeburg with a neurorehabilitation profile and pathways for complex neurological recovery.'
    }
  },
  {
    id: 'median-flechtingen',
    name: 'MEDIAN Klinik Flechtingen',
    country: 'Germany',
    city: 'Flechtingen', region: 'Saxony-Anhalt', lat: 52.3308, lng: 11.2414,
    address: 'Flechtingen, Saxony-Anhalt', phone: 'Unknown',
    url: 'https://www.median-kliniken.de/de/median-klinik-flechtingen/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Phase B Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 82,
    researchHighlights: ['Official page matched neurology and phase B evidence', 'MEDIAN specialist rehabilitation provider', 'Relevant for early and staged neurological rehabilitation'],
    features: ['early-rehab'],
    description: {
      it: 'Clinica MEDIAN a Flechtingen con segnali ufficiali di neurologia e riabilitazione fase B.',
      en: 'A MEDIAN clinic in Flechtingen with official neurology and phase B rehabilitation signals.'
    }
  },
  {
    id: 'median-gyhum',
    name: 'MEDIAN Klinik Gyhum',
    country: 'Germany',
    city: 'Gyhum', region: 'Lower Saxony', lat: 53.2160, lng: 9.3150,
    address: 'Gyhum, Lower Saxony', phone: 'Unknown',
    url: 'https://www.median-kliniken.de/de/median-klinik-gyhum/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 82,
    researchHighlights: ['Official page matched neurology and rehabilitation evidence', 'Second-pass MEDIAN candidate approved for Lower Saxony coverage', 'Relevant for neurological rehabilitation review'],
    features: ['neurology'],
    description: {
      it: 'Clinica MEDIAN in Bassa Sassonia con segnali ufficiali di neurologia e riabilitazione.',
      en: 'A MEDIAN clinic in Lower Saxony with official neurology and rehabilitation signals.'
    }
  },
  {
    id: 'median-kalbe',
    name: 'MEDIAN Klinik Kalbe',
    country: 'Germany',
    city: 'Kalbe', region: 'Saxony-Anhalt', lat: 52.6560, lng: 11.3880,
    address: 'Kalbe, Saxony-Anhalt', phone: 'Unknown',
    url: 'https://www.median-kliniken.de/de/median-klinik-kalbe/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 82,
    researchHighlights: ['Official page matched neurology and rehabilitation evidence', 'MEDIAN specialist rehabilitation provider', 'Adds Saxony-Anhalt neurological rehab coverage'],
    features: ['neurology'],
    description: {
      it: 'Clinica MEDIAN a Kalbe con segnali ufficiali di neurologia e riabilitazione specialistica.',
      en: 'A MEDIAN clinic in Kalbe with official neurology and specialist rehabilitation signals.'
    }
  },
  {
    id: 'median-wilhelmshaven',
    name: 'MEDIAN Klinik Wilhelmshaven',
    country: 'Germany',
    city: 'Wilhelmshaven', region: 'Lower Saxony', lat: 53.5323, lng: 8.1069,
    address: 'Wilhelmshaven, Lower Saxony', phone: 'Unknown',
    url: 'https://www.median-kliniken.de/de/median-klinik-wilhelmshaven/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official page matched neurology, rehabilitation, stroke and neurorehabilitation evidence', 'Second-pass MEDIAN candidate approved for coastal Lower Saxony coverage', 'Relevant for neurological rehabilitation review'],
    features: ['stroke', 'neurology'],
    description: {
      it: 'Clinica MEDIAN a Wilhelmshaven con segnali ufficiali di neurologia, ictus e neuroriabilitazione.',
      en: 'A MEDIAN clinic in Wilhelmshaven with official neurology, stroke and neurorehabilitation signals.'
    }
  },
  {
    id: 'passauer-wolf-bad-goegging',
    name: 'Passauer Wolf Bad Gögging',
    country: 'Germany',
    city: 'Bad Gögging', region: 'Bavaria', lat: 48.8160, lng: 11.7850,
    address: 'Bad Gögging, Bavaria', phone: 'Unknown',
    url: 'https://www.passauerwolf.de/standorte/bad-goegging/',
    conditions: ['stroke', 'tbi', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official page matched neurology, stroke and Parkinson evidence', 'Passauer Wolf specialist rehabilitation provider', 'Relevant for neurological and Parkinson rehabilitation pathways'],
    features: ['parkinson', 'stroke'],
    description: {
      it: 'Sede Passauer Wolf a Bad Gögging con segnali ufficiali di neurologia, ictus e Parkinson.',
      en: 'A Passauer Wolf site in Bad Gögging with official neurology, stroke and Parkinson signals.'
    }
  },
  {
    id: 'passauer-wolf-bad-griesbach',
    name: 'Passauer Wolf Bad Griesbach',
    country: 'Germany',
    city: 'Bad Griesbach', region: 'Bavaria', lat: 48.4510, lng: 13.1940,
    address: 'Bad Griesbach, Bavaria', phone: 'Unknown',
    url: 'https://www.passauerwolf.de/standorte/bad-griesbach/',
    conditions: ['stroke', 'tbi', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official page matched neurology, stroke and Parkinson evidence', 'Passauer Wolf specialist rehabilitation provider', 'Relevant for neurological rehabilitation in Bavaria'],
    features: ['parkinson', 'stroke'],
    description: {
      it: 'Sede Passauer Wolf a Bad Griesbach con segnali ufficiali di neurologia, ictus e Parkinson.',
      en: 'A Passauer Wolf site in Bad Griesbach with official neurology, stroke and Parkinson signals.'
    }
  },
  {
    id: 'passauer-wolf-nittenau',
    name: 'Passauer Wolf Nittenau',
    country: 'Germany',
    city: 'Nittenau', region: 'Bavaria', lat: 49.1940, lng: 12.2680,
    address: 'Nittenau, Bavaria', phone: 'Unknown',
    url: 'https://www.passauerwolf.de/standorte/nittenau/',
    conditions: ['stroke', 'tbi', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 83,
    researchHighlights: ['Official page matched neurology, stroke and Parkinson evidence', 'Passauer Wolf specialist rehabilitation provider', 'Relevant for neurological and Parkinson rehabilitation pathways'],
    features: ['parkinson', 'stroke'],
    description: {
      it: 'Sede Passauer Wolf a Nittenau con segnali ufficiali di neurologia, ictus e Parkinson.',
      en: 'A Passauer Wolf site in Nittenau with official neurology, stroke and Parkinson signals.'
    }
  },
  {
    id: 'srh-fachkrankenhaus-neresheim',
    name: 'SRH Fachkrankenhaus Neresheim',
    country: 'Germany',
    city: 'Neresheim', region: 'Baden-Württemberg', lat: 48.7530, lng: 10.3310,
    address: 'Neresheim, Baden-Württemberg', phone: 'Unknown',
    url: 'https://www.fachkrankenhaus-neresheim.de/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Intensivmedizin', 'Neurologische Frührehabilitation', 'Therapie', 'Pflege', 'Neuropsychologie'],
    completeness: 84,
    researchHighlights: ['Official page matched intensive medicine and neurological evidence', 'Specialist hospital seeded for neurological early rehabilitation', 'Relevant for severe brain injury and early recovery pathways'],
    features: ['early-rehab', 'intensive-care'],
    description: {
      it: 'Fachkrankenhaus SRH a Neresheim con profilo di medicina intensiva e neuroriabilitazione precoce.',
      en: 'An SRH specialist hospital in Neresheim with intensive medicine and early neurorehabilitation profile.'
    }
  },
  {
    id: 'vitrea-hattingen',
    name: 'Vitrea Klinik Hattingen',
    country: 'Germany',
    city: 'Hattingen', region: 'North Rhine-Westphalia', lat: 51.3980, lng: 7.1850,
    address: 'Hattingen, North Rhine-Westphalia', phone: 'Unknown',
    url: 'https://www.vitrea-gesundheit.de/reha/hattingen/',
    conditions: ['stroke', 'tbi', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologie', 'Neurochirurgie', 'Neuropädiatrie', 'Rehabilitation', 'Therapie'],
    completeness: 85,
    researchHighlights: ['Official page matched neurology, neurosurgery and rehabilitation evidence', 'Relevant for adult and pediatric neurological rehabilitation review', 'Specialist neurorehabilitation provider in North Rhine-Westphalia'],
    features: ['early-rehab', 'pediatric-neuro'],
    description: {
      it: 'Clinica Vitrea a Hattingen con profilo di riabilitazione neurologica, neurochirurgica e neuropediatrica.',
      en: 'A Vitrea clinic in Hattingen with neurological, neurosurgical and neuropediatric rehabilitation profile.'
    }
  },
  {
    id: 'rhn-putney',
    name: 'Royal Hospital for Neuro-disability',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.4635, lng: -0.2265,
    address: 'West Hill, Putney, London SW15 3SW', phone: '+44 20 8780 4500',
    url: 'https://www.rhn.org.uk/',
    conditions: ['tbi', 'stroke', 'ms', 'parkinson', 'cognitive', 'neuromuscular'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['private', 'charity'],
    disciplines: ['Rehabilitation medicine', 'Neuropsychology', 'Speech and language therapy', 'Physiotherapy', 'Nursing'],
    completeness: 86,
    researchHighlights: ['Dedicated brain injury unit', 'Research and education page on the official site', 'Transitional rehabilitation pathways'],
    features: ['research', 'brain-injury'],
    description: {
      it: 'Centro di riabilitazione per disabilità neurologiche complesse con forte focus su lesioni cerebrali, ricerca e percorsi di transizione.',
      en: 'A rehabilitation center for complex neurological disability with a strong focus on brain injury, research, and transitional pathways.'
    }
  },
  {
    id: 'swiss-paraplegic-centre-nottwil',
    name: 'Swiss Paraplegic Centre',
    country: 'Switzerland',
    city: 'Nottwil', region: 'Lucerne', lat: 47.1355, lng: 8.1385,
    address: 'Guido A. Zäch Strasse 1, 6207 Nottwil', phone: '+41 41 939 54 54',
    url: 'https://www.paraplegie.ch/en/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['research', 'assistive-tech'], modes: ['inpatient', 'outpatient'], access: ['insurance'],
    disciplines: ['Medicine', 'Rehabilitation', 'Research', 'Assistive technologies'],
    completeness: 90,
    researchHighlights: ['Comprehensive rehabilitation for people with spinal cord injuries', 'Globally unique network of services', 'Medicine, research, innovation and lifelong assistance under one group'],
    features: ['research', 'spinal-cord'],
    description: {
      it: 'Centro svizzero di riferimento per la riabilitazione delle lesioni midollari, integrato in una rete globale di servizi e ricerca.',
      en: 'A Swiss reference centre for spinal cord injury rehabilitation within a globally unique network of services and research.'
    }
  },
  {
    id: 'balgrist-university-hospital-zurich',
    name: 'Balgrist University Hospital',
    country: 'Switzerland',
    city: 'Zurich', region: 'Zurich', lat: 47.3490, lng: 8.5824,
    address: 'Forchstrasse 340, 8008 Zürich', phone: '+41 44 386 11 11',
    url: 'https://www.balgrist.ch/en/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['research', 'physio', 'nursing'],
    modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Spinal Cord Injury Center', 'Physiotherapy', 'Nursing care', 'Neuro-Urology', 'Occupational therapy'],
    completeness: 89,
    researchHighlights: ['Official site explicitly lists a Spinal Cord Injury Center', 'Comprehensive medical care for spinal cord injuries', 'Strong research and teaching environment at the University of Zurich'],
    features: ['research', 'spinal-cord'],
    description: {
      it: 'Ospedale universitario di Zurigo con centro per lesioni midollari, fisioterapia, nursing e ricerca accademica.',
      en: 'A Zurich university hospital with a spinal cord injury center, physiotherapy, nursing care, and academic research.'
    }
  },
  {
    id: 'rnoh-london-spinal-cord-injury-centre',
    name: 'London Spinal Cord Injury Centre',
    country: 'United Kingdom',
    city: 'Stanmore', region: 'Greater London', lat: 51.6108, lng: -0.3079,
    address: 'Brockley Hill, Stanmore, Middlesex HA7 4LP', phone: '+44 20 3947 0100',
    url: 'https://www.rnoh.nhs.uk/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['orthotics', 'prosthetics'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Spinal Cord Injury Centre', 'Rehabilitation and therapy', 'Orthotics', 'Prosthetic Rehabilitation'],
    completeness: 89,
    researchHighlights: ['London Spinal Cord Injury Centre listed on the official RNOH site', 'Comprehensive neuro-musculoskeletal care including acute spinal injury', 'Specialist rehabilitation and therapy services'],
    features: ['spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro spinale di RNOH a Stanmore con presa in carico per lesioni spinali e riabilitazione specialistica.',
      en: 'RNOH’s spinal cord injury centre in Stanmore, providing specialist care and rehabilitation for spinal injury.'
    }
  },
  {
    id: 'zihlschlacht',
    name: 'Rehaklinik Zihlschlacht',
    country: 'Switzerland',
    city: 'Zihlschlacht', region: 'Thurgau', lat: 47.5277, lng: 9.1797,
    address: 'Hauptstrasse 2, 8588 Zihlschlacht', phone: '+41 71 424 33 33',
    url: 'https://www.rehaklinik-zihlschlacht.ch/',
    conditions: ['stroke', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'neuromodulation', 'vr'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Parkinsonzentrum', 'Multiple Sklerose', 'Frührehabilitation', 'Therapie'],
    completeness: 91,
    researchHighlights: ['One of the leading centers for neurorehabilitation in Switzerland', 'One of the most modern robotics centers in Europe', 'Center of Excellence recognition in rehabilitation robotics'],
    features: ['research', 'robotics', 'parkinson'],
    description: {
      it: 'Uno dei principali centri svizzeri di neuroriabilitazione, con robotica avanzata, Parkinsonzentrum e forte esperienza su MS.',
      en: 'One of Switzerland’s leading neurorehabilitation centers, with advanced robotics, a Parkinson center, and deep expertise in multiple sclerosis.'
    }
  },
  {
    id: 'tschugg',
    name: 'Rehaklinik Tschugg',
    country: 'Switzerland',
    city: 'Tschugg', region: 'Bern', lat: 47.0248, lng: 7.1368,
    address: 'Bethesda 6, 3233 Tschugg', phone: '+41 32 338 44 44',
    url: 'https://www.rehaklinik-tschugg.ch/',
    conditions: ['stroke', 'parkinson', 'epilepsy', 'cognitive', 'neuromotor'],
    technologies: ['vr', 'gait'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Parkinsonzentrum', 'Epileptologie', 'Therapie', 'Interdisziplinäres Team'],
    completeness: 88,
    researchHighlights: ['Neurologische Rehabilitation, Parkinsonzentrum and Epilepsy Center on the official site', 'Brain Health Symposium', 'Clinical testing of Skywalk gait-support system'],
    features: ['brain-health', 'vr', 'gait-training'],
    description: {
      it: 'Clinica svizzera con neuroriabilitazione, centro Parkinson ed epilettologia, orientata a percorsi personalizzati e innovazione clinica.',
      en: 'A Swiss clinic combining neurorehabilitation, a Parkinson center, and epileptology with personalized care and clinical innovation.'
    }
  },
  {
    id: 'valens-network',
    name: 'Klinik Valens',
    country: 'Switzerland',
    city: 'Valens', region: 'St. Gallen', lat: 47.0108, lng: 9.4583,
    address: 'Valens, 7317 Valens', phone: '+41 58 511 11 11',
    url: 'https://www.klinik-valens.ch/',
    conditions: ['stroke', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Therapie', 'Pflege', 'Ärzte'],
    completeness: 83,
    researchHighlights: ['Official Klinik Valens site for neurological rehabilitation', 'Scientifically grounded programs', 'Research-oriented clinic group'],
    features: ['research'],
    description: {
      it: 'Sito principale della Klinik Valens per la neuroriabilitazione, con programmi sviluppati in modo scientifico.',
      en: 'The main Klinik Valens site for neurological rehabilitation, with scientifically grounded programs.'
    }
  },
  {
    id: 'sankt-rochus-bad-schonborn',
    name: 'Sankt Rochus Kliniken',
    country: 'Germany',
    city: 'Bad Schönborn', region: 'Baden-Württemberg', lat: 49.2197, lng: 8.6685,
    address: 'Sankt-Rochus-Allee 1–11, 76669 Bad Schönborn', phone: '+49 7253 82-0',
    url: 'https://www.sankt-rochus-kliniken.de/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Logopädie', 'Physiotherapie', 'Ergotherapie'],
    completeness: 88,
    researchHighlights: ['Neurological early rehabilitation phase B/C/D', 'Official studies and research section', 'Ambulatory rehabilitation and neurology department'],
    features: ['early-rehab'],
    description: {
      it: 'Centro di riabilitazione con neurologia, riabilitazione precoce e fase D, plus team multidisciplinare e ambulatoriale.',
      en: 'A rehabilitation center with neurology, early rehabilitation, phase D care, and a multidisciplinary outpatient offer.'
    }
  },
  {
    id: 'klinik-bavaria-kreischa',
    name: 'KLINIK BAVARIA Kreischa',
    country: 'Germany',
    city: 'Kreischa', region: 'Saxony', lat: 50.9556, lng: 13.7688,
    address: 'An der Wolfshöhle 1, 01731 Kreischa', phone: '+49 35206 6 0',
    url: 'https://www.klinik-bavaria.de/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Neurologie', 'Neuropsychologie', 'Intensivrehabilitation', 'Therapie', 'Pflege'],
    completeness: 89,
    researchHighlights: ['Intensive rehab including early rehabilitation', 'Motor and cognitive rehabilitation starts immediately', 'Neurology is part of the medical spectrum'],
    features: ['early-rehab'],
    description: {
      it: 'Fachkrankenhaus tedesco con riabilitazione intensiva e precoce, avvio immediato della riabilitazione motoria e cognitiva e neurologia nel profilo medico.',
      en: 'A German specialist hospital with intensive and early rehabilitation, immediate motor and cognitive rehab, and neurology in its medical profile.'
    }
  },
  {
    id: 'brandys-nad-orlici',
    name: 'Rehabilitační ústav Brandýs nad Orlicí',
    country: 'Czech Republic',
    city: 'Brandýs nad Orlicí', region: 'Pardubice Region', lat: 50.0020, lng: 16.2820,
    address: 'Lázeňská 58, 561 12 Brandýs nad Orlicí', phone: '+420 465 544 207',
    url: 'https://www.rehabilitacniustav.cz/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'hydrotherapy', 'gait'],
    modes: ['inpatient'], access: ['public', 'insurance'],
    disciplines: ['Rehabilitační péče', 'Ergoterapie', 'Logopedie', 'Ošetřovatelská péče', 'Robotická rehabilitace'],
    completeness: 87,
    researchHighlights: ['Robotická rehabilitace a neurorehabilitace on the official site', 'Hydrotherapy and pool services', 'Specialist rehab stays and high bed capacity'],
    features: ['robotics', 'hydrotherapy', 'speech'],
    description: {
      it: 'Centro ceco di riabilitazione con robotica e neuroriabilitazione esplicitamente indicate sul sito ufficiale, oltre a idroterapia e piscina.',
      en: 'A Czech rehabilitation center with robotic rehabilitation and neurorehabilitation explicitly listed on the official site, plus hydrotherapy and a pool.'
    }
  },
  {
    id: 'hnrk-haapsalu',
    name: 'Haapsalu Neurological Rehabilitation Centre',
    country: 'Estonia',
    city: 'Haapsalu', region: 'Lääne County', lat: 58.9435, lng: 23.5419,
    address: 'Sadama 16, 90502 Haapsalu', phone: '+372 4725 400',
    url: 'https://www.hnrk.ee/',
    conditions: ['stroke', 'tbi', 'spinal', 'pediatric', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public'],
    disciplines: ['Taastusarst', 'Füsioteraapia', 'Tegevusteraapia', 'Logopeedia', 'Õendus'],
    completeness: 81,
    researchHighlights: ['Neurorehabilitatsiooni osakond is listed on the official site', 'Spinaalse rehabilitatsiooni osakond is listed on the official site', 'Statsionaarne and ambulatory rehab services'],
    features: ['research', 'spinal-cord'],
    description: {
      it: 'Centro estone di neuroriabilitazione a Haapsalu con reparti per riabilitazione neuro e spinale, oltre a percorsi residenziali e ambulatoriali.',
      en: 'An Estonian neurorehabilitation centre in Haapsalu with dedicated neuro and spinal rehabilitation units, plus inpatient and outpatient pathways.'
    }
  },
  {
    id: 'buda-spinal-disorders-budapest',
    name: 'National Center for Spinal Disorders',
    country: 'Hungary',
    city: 'Budapest', region: 'Budapest', lat: 47.4979, lng: 19.0402,
    address: 'Budapest', phone: 'Unknown',
    url: 'https://nepegeszsegugyi-egyesulet.hu/en/national-center-spinal-disorders-buda-health-center',
    conditions: ['spinal'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Rehabilitation', 'Neurology', 'Physiotherapy', 'Nursing'],
    completeness: 72,
    researchHighlights: ['Official site is a spinal-disorders reference page', 'Crawling was blocked, so this is a manual official-source fallback'],
    features: ['spinal-cord'],
    description: {
      it: 'Centro ungherese di riferimento per disturbi spinali a Budapest, aggiunto come fallback manuale da fonte ufficiale bloccata.',
      en: 'A Hungarian reference center for spinal disorders in Budapest, added as a manual fallback from a blocked official source.'
    }
  },
  {
    id: 'kbc-zagreb',
    name: 'University Hospital Centre Zagreb',
    country: 'Croatia',
    city: 'Zagreb', region: 'City of Zagreb', lat: 45.8245534, lng: 16.0061157,
    address: 'Kišpatićeva ulica 12, 10 000 Zagreb',
    phone: '+385 1 2388 888',
    url: 'https://www.kbc-zagreb.hr/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurologija', 'Neurokirurgija', 'Rehabilitacija i ortopedska pomagala', 'Fizikalna medicina', 'Sestrinstvo'],
    completeness: 82,
    researchHighlights: ['Official hospital site lists neurology, neurosurgery and rehabilitation services', 'Multiple campus locations including the rehabilitation facility at Božidarevićeva 11'],
    features: ['rehabilitation', 'neurology'],
    description: {
      it: 'Grande centro ospedaliero universitario di Zagabria con neurologia, neurochirurgia e un servizio di riabilitazione e ausili ortopedici.',
      en: 'A major university hospital in Zagreb with neurology, neurosurgery and a rehabilitation and orthopaedic aids service.'
    }
  },
  {
    id: 'uclh-queen-square-london',
    name: 'National Hospital for Neurology and Neurosurgery',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.5237, lng: -0.1228,
    address: 'Queen Square, London WC1N 3BG', phone: '+44 20 3456 7890',
    url: 'https://www.uclh.nhs.uk/our-services/find-service/neurology-and-neurosurgery',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurology', 'Neurorehabilitation', 'Therapy', 'Nursing', 'Research'],
    completeness: 81,
    researchHighlights: ['Official neurorehabilitation and therapy services listing', 'Specialist brain and spine care hospital', 'Major neuro research environment at Queen Square'],
    features: ['research', 'therapy'],
    description: {
      it: 'Ospedale neurologico di Queen Square con servizi espliciti di neuro-riabilitazione e terapia, oltre a un forte contesto di ricerca.',
      en: 'A Queen Square neurological hospital with explicit neurorehabilitation and therapy services, within a strong research environment.'
    }
  },
  {
    id: 'mildmay-hospital-london',
    name: 'Mildmay Hospital',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.5265, lng: -0.0666,
    address: '19 Tabernacle Gardens, London E2 7DZ', phone: '+44 20 7613 6300',
    url: 'https://www.mildmay.nhs.uk/',
    conditions: ['cognitive', 'neuromotor', 'disorder'],
    technologies: ['tele'], modes: ['inpatient'], access: ['public'],
    disciplines: ['Rehabilitation', 'Nursing', 'Medical team', 'Psychology', 'Social care'],
    completeness: 82,
    researchHighlights: ['Specialist rehabilitation for HIV-associated neurological disorders (HAND)', 'Leading centre in Europe for HAND rehabilitation', 'Step-down rehabilitation and care for complex needs'],
    features: ['research', 'neurocognitive'],
    description: {
      it: 'Ospedale caritatevole di Londra con riabilitazione per disturbi neurocognitivi associati all’HIV e altri bisogni complessi.',
      en: 'A London charitable hospital providing rehabilitation for HIV-associated neurological disorders (HAND) and other complex needs.'
    }
  },
  {
    id: 'st-georges-neurorehab-london',
    name: 'Atkinson Morley Regional Neurosciences Centre — St George’s Hospital',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.4259, lng: -0.1788,
    address: 'Blackshaw Road, Tooting, London SW17 0QT', phone: '+44 20 8672 1255',
    url: 'https://www.stgeorges.nhs.uk/services/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['gait', 'fes', 'tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurology', 'Neurosurgery', 'Neurorehabilitation', 'Stroke services', 'Therapies'],
    completeness: 88,
    researchHighlights: ['Official services page lists a Neurosciences Centre with neurorehabilitation and stroke services', 'Rehabilitation services include gait lab and FES support for neuro-rehabilitation', 'Major neurosciences hub in southwest London'],
    features: ['research', 'gait-training', 'stroke'],
    description: {
      it: 'Centro neuroscientifico di St George’s con neuro-riabilitazione, stroke services e supporto con gait lab/FES.',
      en: 'St George’s neurosciences centre with neurorehabilitation, stroke services, and gait lab / FES support.'
    }
  },
  {
    id: 'queen-marys-rehabilitation-london',
    name: 'Rehabilitation services — Queen Mary’s Hospital',
    country: 'United Kingdom',
    city: 'Roehampton', region: 'Greater London', lat: 51.4589, lng: -0.2516,
    address: 'Roehampton Lane, Roehampton, London SW15 5PN', phone: '+44 20 8487 6000',
    url: 'https://www.stgeorges.nhs.uk/service/rehabilitation-service/',
    conditions: ['amputation', 'spinal', 'neuromotor', 'cognitive'],
    technologies: ['gait', 'fes'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitation', 'Prosthetics', 'Physiotherapy', 'Spasticity management', 'Gait laboratory'],
    completeness: 84,
    researchHighlights: ['Official rehab service offers gait analysis and functional electrical stimulation for neuro-rehabilitation', 'Specialist spasticity management service', 'Douglas Bader Rehabilitation Centre at Queen Mary’s Hospital'],
    features: ['gait-training', 'spasticity', 'prosthetics'],
    description: {
      it: 'Servizio di riabilitazione di Queen Mary’s con gait lab, FES e gestione della spasticità a supporto della neuro-riabilitazione.',
      en: 'Queen Mary’s rehabilitation service with gait lab, FES, and spasticity management supporting neuro-rehabilitation.'
    }
  },
  {
    id: 'kessler-west-orange',
    name: 'Kessler Institute for Rehabilitation',
    country: 'United States',
    city: 'West Orange', region: 'New Jersey', lat: 40.7987, lng: -74.2390,
    address: 'West Orange, NJ', phone: '888.KESSLER',
    url: 'https://www.kessler-rehab.com/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'cognitive'],
    technologies: ['tele', 'gait'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Physician-led care', 'Therapy', 'Research', 'Education', 'Interdisciplinary teams'],
    completeness: 85,
    researchHighlights: ['Neurologic rehabilitation is listed on the official site', 'Brain injury and spinal cord rehabilitation programs', 'Research & Innovation and education sections'],
    features: ['research', 'education'],
    description: {
      it: 'Kessler è un importante centro di riabilitazione statunitense con programmi neurologici, ricerca e team interdisciplinari.',
      en: 'Kessler is a major U.S. rehabilitation center with neurologic programs, research, and interdisciplinary care teams.'
    }
  },
  {
    id: 'shepherd-atlanta',
    name: 'Shepherd Center',
    country: 'United States',
    city: 'Atlanta', region: 'Georgia', lat: 33.8092, lng: -84.3827,
    address: '2020 Peachtree Road NW, Atlanta, GA 30309-1465', phone: '404-352-2020',
    url: 'https://www.shepherd.org/',
    conditions: ['tbi', 'stroke', 'spinal', 'ms', 'neuromuscular', 'cognitive'],
    technologies: ['assistive-tech', 'tele', 'aquatic'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Rehabilitation medicine', 'Neuropsychology', 'Therapy', 'Nursing', 'Research'],
    completeness: 89,
    researchHighlights: ['World leader in advanced rehabilitation treatment and research', 'Model Systems of Care', 'Dedicated brain injury and spinal cord injury programs'],
    features: ['research', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Centro statunitense di riferimento per lesioni cerebrali e midollari, con ricerca, programmi intensivi e approccio multidisciplinare.',
      en: 'A U.S. reference center for brain and spinal cord injury, with research, intensive programs, and multidisciplinary care.'
    }
  },
  {
    id: 'spaulding-boston',
    name: 'Spaulding Rehabilitation Hospital Boston',
    country: 'United States',
    city: 'Boston', region: 'Massachusetts', lat: 42.3765, lng: -71.0576,
    address: '300 1st Avenue, Boston, MA 02129', phone: '+1 617-952-5000',
    url: 'https://www.spauldingrehab.org/',
    conditions: ['brain-injury', 'stroke', 'spinal', 'neuromotor', 'cognitive'],
    technologies: ['aquatic', 'tele', 'assistive-tech'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Physical Medicine and Rehabilitation', 'Neurological Rehabilitation', 'Nursing', 'Research', 'Therapy'],
    completeness: 90,
    researchHighlights: ['World leader in advanced rehabilitation treatment and research', 'Official teaching partner of Harvard Medical School PM&R', 'Spaulding Rehabilitation Hospital Boston ranked #2 in the nation'],
    features: ['research', 'teaching', 'nursing'],
    description: {
      it: 'Ospedale di riabilitazione di Boston con forte profilo neuro, ricerca avanzata e collegamento accademico con Harvard.',
      en: 'A Boston rehabilitation hospital with a strong neuro profile, advanced research, and an academic partnership with Harvard.'
    }
  },
  {
    id: 'craig-englewood',
    name: 'Craig Hospital',
    country: 'United States',
    city: 'Englewood', region: 'Colorado', lat: 39.6497, lng: -104.9815,
    address: '3425 S. Clarkson Street, Englewood, CO 80113', phone: '303-789-8000',
    url: 'https://craighospital.org/',
    conditions: ['brain-injury', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['assistive-tech', 'tele', 'research'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['PM&R', 'Nursing', 'Therapy', 'Research', 'Education'],
    completeness: 91,
    researchHighlights: ['Exclusively specializes in neurorehabilitation and research', 'Brain injury and spinal cord injury rehabilitation', 'Model systems and long-term follow-up'],
    features: ['research', 'education', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Ospedale di riferimento per neuroriabilitazione e ricerca, specializzato in lesioni cerebrali e midollari con percorsi inpatient e outpatient.',
      en: 'A reference hospital for neurorehabilitation and research, specializing in brain and spinal cord injury with inpatient and outpatient pathways.'
    }
  },
  {
    id: 'shirley-ryan-chicago',
    name: 'Shirley Ryan AbilityLab',
    country: 'United States',
    city: 'Chicago', region: 'Illinois', lat: 41.8977, lng: -87.6219,
    address: '355 E Erie St, Chicago, IL 60611', phone: '+1 312-238-1000',
    url: 'https://www.sralab.org/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromotor', 'cognitive'],
    technologies: ['robotics', 'gait', 'tele', 'assistive-tech'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Physical Medicine and Rehabilitation', 'Nursing', 'Therapy', 'Research', 'Education'],
    completeness: 92,
    researchHighlights: ['Rehabilitation research hospital', 'Brain and spinal cord innovation centers', 'Strong academic links and fellowship programs'],
    features: ['research', 'education', 'robotics'],
    description: {
      it: 'Ospedale di riabilitazione e ricerca a Chicago con forti programmi su cervello, midollo, robotica e collaborazione accademica.',
      en: 'A Chicago rehabilitation research hospital with strong brain, spinal cord, robotics, and academic partnership programs.'
    }
  },
  {
    id: 'brooks-jacksonville',
    name: 'Brooks Rehabilitation',
    country: 'United States',
    city: 'Jacksonville', region: 'Florida', lat: 30.2672, lng: -81.6000,
    address: '3599 University Blvd S, Jacksonville, FL 32216', phone: '+1 904-345-7300',
    url: 'https://brooksrehab.org/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromotor'],
    technologies: ['robotics', 'gait', 'tele'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Physical Medicine and Rehabilitation', 'Therapy', 'Nursing', 'Research', 'Education'],
    completeness: 89,
    researchHighlights: ['Brain, stroke and spinal cord injury expertise on the official site', 'Research and innovation focus', 'Regional rehabilitation network'],
    features: ['research', 'robotics', 'stroke'],
    description: {
      it: 'Centro statunitense con focus su ictus, lesioni cerebrali e spinali, robotica e rete riabilitativa regionale.',
      en: 'A U.S. center focused on stroke, brain and spinal injuries, robotics, and a regional rehabilitation network.'
    }
  },
  {
    id: 'sunnaas-bjornemyr',
    name: 'Sunnaas sykehus HF',
    country: 'Norway',
    city: 'Bjørnemyr', region: 'Akershus', lat: 59.7889, lng: 10.7063,
    address: 'Bjørnemyrveien 11, 1453 Bjørnemyr', phone: '+47 66 96 90 00',
    url: 'https://www.sunnaas.no/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor', 'neuromuscular'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitering', 'Forskning', 'Tverrfaglig team', 'Nevrologi', 'Fysioterapi'],
    completeness: 84,
    researchHighlights: ['Largest specialized hospital in physical medicine and rehabilitation in Norway', 'Own research department', 'Rehabilitation and research are central parts of the trust'],
    features: ['research'],
    description: {
      it: 'Ospedale norvegese specializzato in riabilitazione e ricerca con team multidisciplinare e forte attenzione ai disturbi neurologici.',
      en: 'A Norwegian specialist rehabilitation hospital with multidisciplinary care and a strong focus on neurological conditions.'
    }
  }
];
