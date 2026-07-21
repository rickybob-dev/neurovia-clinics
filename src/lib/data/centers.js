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
    id: 'san-camillo-irccs-venezia',
    name: 'Ospedale San Camillo IRCCS',
    country: 'Italy',
    city: 'Venezia Lido', region: 'Veneto', lat: 45.3540, lng: 12.3190,
    address: 'Via Alberoni 70, 30126 Venezia Lido', phone: 'Unknown',
    url: 'https://hsancamillo.it/ospedale-irccs-san-camillo-di-venezia',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'cognitive', 'neuromotor'],
    technologies: ['tele', 'gait'], modes: ['inpatient', 'outpatient'], access: ['SSN', 'private'],
    disciplines: ['Neuroriabilitazione motoria', 'Neuroriabilitazione della comunicazione', 'Neuroriabilitazione del comportamento', 'Mielolesioni', 'Sclerosi multipla'],
    completeness: 92,
    researchHighlights: ['Official IRCCS page states specialization in neuroriabilitazione', 'Matched brain lesion, ischemic lesion, spinal cord injury and multiple sclerosis evidence', 'Official page lists motor, communication and behavioral neurorehabilitation'],
    features: ['brain-injury', 'spinal-cord', 'research'],
    description: {
      it: 'IRCCS veneziano specializzato in neuroriabilitazione motoria, della comunicazione e del comportamento, inclusi percorsi per mielolesioni e sclerosi multipla.',
      en: 'A Venice IRCCS specialized in motor, communication and behavioral neurorehabilitation, including spinal cord injury and multiple sclerosis pathways.'
    }
  },
  {
    id: 'neuromed-neuroriabilitazione-pozzilli',
    name: 'IRCCS Neuromed - Neuroriabilitazione',
    country: 'Italy',
    city: 'Pozzilli', region: 'Molise', lat: 41.5116, lng: 14.0623,
    address: 'Via Atinense 18, 86077 Pozzilli', phone: 'Unknown',
    url: 'https://neuromed.it/reparti/neuroriabilitazione',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'gait'], modes: ['inpatient', 'outpatient'], access: ['SSN', 'private'],
    disciplines: ['Neuroriabilitazione', 'Neurologia', 'Fisiatria', 'Neuropsicologia', 'Logopedia', 'Terapia occupazionale'],
    completeness: 92,
    researchHighlights: ['Official department page is dedicated to neuroriabilitazione', 'Matched intensive rehabilitation codes 75 and 56', 'Official page lists multiple sclerosis, Parkinson and robotic rehabilitation evidence'],
    robotNotes: ['Official page references robotic rehabilitation equipment for neurological recovery.'],
    features: ['robotics', 'parkinson', 'research'],
    description: {
      it: 'Reparto IRCCS di neuroriabilitazione intensiva per lesioni acquisite, sclerosi multipla, Parkinson e disturbi neurologici progressivi, con supporto robotico.',
      en: 'An IRCCS intensive neurorehabilitation department for acquired lesions, multiple sclerosis, Parkinson and progressive neurological disorders, with robotic support.'
    }
  },
  {
    id: 'maugeri-telese-terme',
    name: 'IRCCS Maugeri Telese Terme',
    country: 'Italy',
    city: 'Telese Terme', region: 'Campania', lat: 41.2198, lng: 14.5263,
    address: 'Telese Terme, Benevento', phone: 'Unknown',
    url: 'https://www.icsmaugeri.it/dove-siamo/irccs-telese',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['SSN', 'private'],
    disciplines: ['Riabilitazione neuromotoria', 'Neurologia riabilitativa', 'Gravi cerebrolesioni', 'Riabilitazione spinale', 'Stati vegetativi persistenti'],
    completeness: 91,
    researchHighlights: ['Official Maugeri page lists riabilitazione neuromotoria', 'Official page lists gravi cerebrolesioni and riabilitazione spinale', 'Official specialty evidence includes Parkinson and sclerosi multipla'],
    features: ['brain-injury', 'spinal-cord', 'parkinson'],
    description: {
      it: 'Sede IRCCS Maugeri con percorsi di riabilitazione neuromotoria, gravi cerebrolesioni, stati vegetativi persistenti e riabilitazione spinale.',
      en: 'A Maugeri IRCCS site with neuromotor rehabilitation, severe brain injury, persistent vegetative state and spinal rehabilitation pathways.'
    }
  },
  {
    id: 'prosperius-villa-cherubini-neuro',
    name: 'Prosperius Villa Cherubini - Riabilitazione Neurologica',
    country: 'Italy',
    city: 'Firenze', region: 'Toscana', lat: 43.7797, lng: 11.2530,
    address: 'Firenze', phone: 'Unknown',
    url: 'https://prosperius.it/riabilitazione/riabilitazione-neurologica',
    conditions: ['stroke', 'ms', 'parkinson', 'neuromuscular', 'neuromotor'],
    technologies: ['robotics', 'gait'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Riabilitazione neurologica', 'Riabilitazione robotica', 'Fisioterapia', 'Terapia locomotoria', 'Ricovero ordinario'],
    completeness: 87,
    researchHighlights: ['Official page is dedicated to riabilitazione neurologica', 'Matched stroke, multiple sclerosis and Parkinson evidence', 'Official page lists robotic rehabilitation and inpatient/outpatient pathways'],
    robotNotes: ['Official page references Lokomat and robotic rehabilitation for neurological patients.'],
    features: ['robotics', 'gait-training', 'parkinson'],
    description: {
      it: 'Clinica fiorentina con riabilitazione neurologica per esiti di ictus e patologie neurodegenerative come sclerosi multipla e Parkinson, anche con robotica.',
      en: 'A Florence clinic offering neurological rehabilitation after stroke and for neurodegenerative conditions such as multiple sclerosis and Parkinson, including robotic rehabilitation.'
    }
  },
  {
    id: 'fondazione-turati-vieste-riabilitazione',
    name: 'Fondazione Turati - Centro di Riabilitazione di Vieste',
    country: 'Italy',
    city: 'Vieste', region: 'Puglia', lat: 41.8584, lng: 16.1620,
    address: 'Localita Macchia di Mauro, Vieste', phone: '+39 0884 708827',
    url: 'https://fondazioneturati.it/centri-di-riabilitazione-e-terapia-fisica/centro-di-riabilitazione-a-vieste-della-fondazione-turati',
    conditions: ['neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['SSN', 'private'],
    disciplines: ['Riabilitazione neurologica', 'Riabilitazione neuromotoria', 'Riabilitazione residenziale', 'Riabilitazione ambulatoriale', 'Terapia fisica'],
    completeness: 82,
    researchHighlights: ['Official page lists neurological and neuromotor rehabilitation', 'Official page lists residential and outpatient rehabilitation', 'Official page states access through the Italian National Health Service and private care'],
    features: ['rehabilitation'],
    description: {
      it: 'Centro di riabilitazione in Puglia con percorsi residenziali e ambulatoriali per bisogni neurologici e neuromotori, in convenzione SSN e privato.',
      en: 'A rehabilitation centre in Puglia with residential and outpatient neurological and neuromotor pathways, available through SSN and private access.'
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
    id: 'ceadac-madrid',
    name: 'CEADAC - Centro de Referencia Estatal de Atención al Daño Cerebral',
    country: 'Spain',
    city: 'Madrid', region: 'Community of Madrid', lat: 40.4815, lng: -3.7110,
    address: 'Madrid, Community of Madrid',
    url: 'https://ceadac.imserso.es/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [],
    modes: ['outpatient', 'day clinic'], access: ['public'],
    disciplines: ['Rehabilitación', 'Neuropsicología', 'Fisioterapia', 'Terapia ocupacional', 'Logopedia'],
    completeness: 88,
    researchHighlights: ['Official Imserso state reference centre for acquired brain injury', 'Official page describes comprehensive rehabilitation for people with brain injury', 'Public reference centre with direct-care services'],
    features: ['brain-injury', 'research', 'rehabilitation'],
    description: {
      it: 'Centro statale di riferimento Imserso a Madrid per il danno cerebrale acquisito e la riabilitazione integrale.',
      en: 'An Imserso state reference centre in Madrid for acquired brain injury and comprehensive rehabilitation.'
    }
  },
  {
    id: 'lescer-madrid',
    name: 'LESCER Centro de Neurorehabilitación',
    country: 'Spain',
    city: 'Madrid', region: 'Community of Madrid', lat: 40.4168, lng: -3.7038,
    address: 'Madrid, Community of Madrid',
    url: 'https://www.lescer.es/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Fisioterapia', 'Terapia ocupacional', 'Logopedia', 'Neuropsicología'],
    completeness: 89,
    researchHighlights: ['Official specialist neurorehabilitation centre page', 'Matched brain injury, stroke, traumatic brain injury, spinal cord injury, MS and Parkinson evidence', 'Official site lists hospitalization and neurological rehabilitation'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro madrileno di neuroriabilitazione per danno cerebrale, ictus, trauma cranico, lesione midollare, sclerosi multipla e Parkinson.',
      en: 'A Madrid neurorehabilitation centre for brain injury, stroke, traumatic brain injury, spinal cord injury, multiple sclerosis, and Parkinson disease.'
    }
  },
  {
    id: 'clinica-san-vicente-madrid',
    name: 'Clínica San Vicente',
    country: 'Spain',
    city: 'Madrid', region: 'Community of Madrid', lat: 40.4168, lng: -3.7038,
    address: 'Madrid, Community of Madrid',
    url: 'https://www.clinicasanvicente.es/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Rehabilitación', 'Fisioterapia', 'Logopedia', 'Neuropsicología', 'Terapia ocupacional'],
    completeness: 82,
    researchHighlights: ['Official neurorehabilitation clinic page', 'Matched brain injury, stroke and hospitalization evidence', 'Dedicated Madrid clinic candidate for neurological rehabilitation'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Clinica madrilena con evidenze ufficiali per riabilitazione del danno cerebrale, ictus e ricovero riabilitativo.',
      en: 'A Madrid clinic with official evidence for brain-injury rehabilitation, stroke care, and rehabilitation hospitalization.'
    }
  },
  {
    id: 'beata-maria-ana-dano-cerebral',
    name: 'Hospital Beata María Ana - Unidad de Daño Cerebral Rehabilitable',
    country: 'Spain',
    city: 'Madrid', region: 'Community of Madrid', lat: 40.4168, lng: -3.6696,
    address: 'Madrid, Community of Madrid',
    url: 'https://fundacionhospitalariasmadrid.org/que-hacemos/unidades-especializadas/unidad-de-dano-cerebral-rehabilitable/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Medicina física', 'Fisioterapia', 'Terapia ocupacional', 'Logopedia', 'Neuropsicología'],
    completeness: 88,
    researchHighlights: ['Official Fundación Hospitalarias Madrid brain-injury unit page', 'Matched neurorehabilitation, stroke, traumatic brain injury, spinal cord injury and hospitalization evidence', 'Specialized rehabilitable brain-injury unit'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Unità madrilena di danno cerebrale riabilitabile con evidenze per ictus, trauma cranioencefalico, lesione midollare e ricovero.',
      en: 'A Madrid rehabilitable brain-injury unit with evidence for stroke, traumatic brain injury, spinal cord injury, and inpatient care.'
    }
  },
  {
    id: 'hospital-los-madronos-neurorrehabilitacion',
    name: 'Hospital Los Madroños - Unidad Avanzada de Neurorrehabilitación',
    country: 'Spain',
    city: 'Brunete', region: 'Community of Madrid', lat: 40.4055, lng: -3.9980,
    address: 'Brunete, Community of Madrid',
    url: 'https://hospitallosmadronos.es/unidades-especializadas/unidad-avanzada-de-neurorrehabilitacion/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Neurología', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 87,
    researchHighlights: ['Official hospital advanced neurorehabilitation unit page', 'Matched neurological rehabilitation, brain injury, stroke, TBI, spinal cord injury, MS and Parkinson evidence', 'Hospital-based advanced neurorehabilitation unit near Madrid'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Unità avanzata di neuroriabilitazione ospedaliera a Brunete, con evidenze per ictus, trauma cranico, lesione midollare, sclerosi multipla e Parkinson.',
      en: 'A hospital advanced neurorehabilitation unit in Brunete, with evidence for stroke, traumatic brain injury, spinal cord injury, multiple sclerosis, and Parkinson disease.'
    }
  },
  {
    id: 'casaverde-alicante',
    name: 'Hospital Casaverde Alicante',
    country: 'Spain',
    city: 'Mutxamel', region: 'Valencian Community', lat: 38.4154, lng: -0.4455,
    address: 'Mutxamel, Valencian Community',
    url: 'https://casaverdeneuro.com/centros/alicante/hospital-casaverde/',
    conditions: ['stroke', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Rehabilitación neurológica', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 83,
    researchHighlights: ['Official Casaverde Neuro hospital page', 'Matched neurorrehabilitation, neurological rehabilitation, stroke and Parkinson evidence', 'Hospital site within the Casaverde neurological rehabilitation network'],
    features: ['rehabilitation'],
    description: {
      it: 'Ospedale Casaverde a Mutxamel con evidenze ufficiali di neuroriabilitazione, riabilitazione neurologica, ictus e Parkinson.',
      en: 'A Casaverde hospital in Mutxamel with official evidence for neurorehabilitation, neurological rehabilitation, stroke, and Parkinson disease.'
    }
  },
  {
    id: 'casaverde-extremadura',
    name: 'Hospital Casaverde Extremadura',
    country: 'Spain',
    city: 'Mérida', region: 'Extremadura', lat: 38.9161, lng: -6.3437,
    address: 'Mérida, Extremadura',
    url: 'https://casaverdeneuro.com/centros/extremadura/hospital-casaverde-extremadura/',
    conditions: ['stroke', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Rehabilitación neurológica', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 83,
    researchHighlights: ['Official Casaverde Neuro hospital page', 'Matched neurorrehabilitation, neurological rehabilitation, stroke and Parkinson evidence', 'Hospital site within the Casaverde neurological rehabilitation network'],
    features: ['rehabilitation'],
    description: {
      it: 'Ospedale Casaverde in Estremadura con evidenze ufficiali di neuroriabilitazione, riabilitazione neurologica, ictus e Parkinson.',
      en: 'A Casaverde hospital in Extremadura with official evidence for neurorehabilitation, neurological rehabilitation, stroke, and Parkinson disease.'
    }
  },
  {
    id: 'casaverde-madrid',
    name: 'Centro Casaverde Madrid',
    country: 'Spain',
    city: 'Madrid', region: 'Community of Madrid', lat: 40.4168, lng: -3.7038,
    address: 'Madrid, Community of Madrid',
    url: 'https://casaverdeneuro.com/centros/madrid/centro-casaverde-madrid/',
    conditions: ['stroke', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['outpatient', 'day clinic'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Rehabilitación neurológica', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 81,
    researchHighlights: ['Official Casaverde Neuro centre page', 'Matched neurorrehabilitation, neurological rehabilitation, stroke and Parkinson evidence', 'Madrid centre within the Casaverde neurological rehabilitation network'],
    features: ['rehabilitation'],
    description: {
      it: 'Centro Casaverde a Madrid con evidenze ufficiali di neuroriabilitazione, riabilitazione neurologica, ictus e Parkinson.',
      en: 'A Casaverde centre in Madrid with official evidence for neurorehabilitation, neurological rehabilitation, stroke, and Parkinson disease.'
    }
  },
  {
    id: 'casaverde-valladolid',
    name: 'Hospital Casaverde Valladolid',
    country: 'Spain',
    city: 'Valladolid', region: 'Castile and León', lat: 41.6523, lng: -4.7245,
    address: 'Valladolid, Castile and León',
    url: 'https://casaverdeneuro.com/centros/valladolid/hospital-casaverde-valladolid/',
    conditions: ['stroke', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorrehabilitación', 'Rehabilitación neurológica', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 82,
    researchHighlights: ['Official Casaverde Neuro hospital page', 'Matched neurological rehabilitation, stroke and Parkinson evidence', 'Hospital site within the Casaverde neurological rehabilitation network'],
    features: ['rehabilitation'],
    description: {
      it: 'Ospedale Casaverde a Valladolid con evidenze ufficiali di riabilitazione neurologica, ictus e Parkinson.',
      en: 'A Casaverde hospital in Valladolid with official evidence for neurological rehabilitation, stroke, and Parkinson disease.'
    }
  },
  {
    id: 'aita-menni-hospital-arrasate',
    name: 'Ospitalarioak Fundazioa Euskadi - Hospital Aita Menni',
    country: 'Spain',
    city: 'Arrasate/Mondragón', region: 'Basque Country', lat: 43.0644, lng: -2.4898,
    address: 'Barrio Gesalibar 15, 20500 Arrasate/Mondragón',
    url: 'https://ospitalarioakfundazioaeuskadi.org/es/centro/hospital-aita-menni/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Neurorrehabilitación', 'Rehabilitación multidisciplinar', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 90,
    researchHighlights: ['Official Ospitalarioak brain-injury centre page', 'Hospitalization unit for multidisciplinary rehabilitation of severe neurological sequelae', 'Page lists brain injury, stroke, cranial trauma and outpatient neurological rehabilitation'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Ospedale Aita Menni ad Arrasate/Mondragón con unità di ricovero e riabilitazione ambulatoriale per danno cerebrale, ictus e trauma cranico.',
      en: 'Aita Menni hospital in Arrasate/Mondragón with inpatient and outpatient rehabilitation for brain injury, stroke, and cranial trauma.'
    }
  },
  {
    id: 'aita-menni-musakola',
    name: 'Ospitalarioak Fundazioa Euskadi - Centro Musakola',
    country: 'Spain',
    city: 'Arrasate/Mondragón', region: 'Basque Country', lat: 43.0644, lng: -2.4898,
    address: 'C/ Notario Etxagibel 1, 20500 Arrasate/Mondragón',
    url: 'https://ospitalarioakfundazioaeuskadi.org/es/centro/centro-musakola/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['day clinic', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Neurorrehabilitación', 'Centro de día de daño cerebral', 'Fisioterapia', 'Terapia ocupacional', 'Neuropsicología'],
    completeness: 84,
    researchHighlights: ['Official Ospitalarioak filtered brain-injury centre list', 'Centre page states 30 day-centre places for people with brain injury', 'Official page lists a Centro de Día de Daño Cerebral'],
    features: ['brain-injury', 'day-clinic'],
    description: {
      it: 'Centro Musakola ad Arrasate/Mondragón con centro diurno per persone con danno cerebrale e neuroriabilitazione.',
      en: 'Centro Musakola in Arrasate/Mondragón with a day centre for people with brain injury and neurorehabilitation.'
    }
  },
  {
    id: 'aita-menni-bilbao-neurorrehab',
    name: 'Ospitalarioak Fundazioa Euskadi - Centro de Neurorrehabilitación Bilbao',
    country: 'Spain',
    city: 'Bilbao', region: 'Basque Country', lat: 43.2583, lng: -2.9375,
    address: 'Calle Egaña 10, 48010 Bilbao', phone: '+34 944 434 927',
    url: 'https://ospitalarioakfundazioaeuskadi.org/es/centro/centro-dano-cerebral-aita-menni-bilbao/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['outpatient', 'day clinic'], access: ['public', 'private'],
    disciplines: ['Neurorrehabilitación', 'Rehabilitación ambulatoria', 'Rehabilitación infantil', 'Fisioterapia', 'Logopedia', 'Neuropsicología'],
    completeness: 91,
    researchHighlights: ['Official Bilbao neurorehabilitation centre page', 'Specialized in rehabilitation of sequelae caused by acquired brain injury', 'Page lists stroke, cranioencephalic trauma, Parkinson, MS, ALS and child rehabilitation'],
    features: ['brain-injury', 'pediatric', 'rehabilitation'],
    description: {
      it: 'Centro di neuroriabilitazione di Bilbao specializzato nel danno cerebrale acquisito, ictus, trauma cranico, malattie neurodegenerative e riabilitazione infantile.',
      en: 'A Bilbao neurorehabilitation centre specializing in acquired brain injury, stroke, cranioencephalic trauma, neurodegenerative disease, and child rehabilitation.'
    }
  },
  {
    id: 'aita-menni-san-sebastian-neurorrehab',
    name: 'Ospitalarioak Fundazioa Euskadi - Centro de Neurorrehabilitación San Sebastián',
    country: 'Spain',
    city: 'San Sebastián', region: 'Basque Country', lat: 43.3060, lng: -2.0140,
    address: 'Parque Empresarial Zuatzu, Edificio Oria, C/ Zuatzu 8, 20018 San Sebastián', phone: '+34 943 224 401',
    url: 'https://ospitalarioakfundazioaeuskadi.org/es/centro/centro-dano-cerebral-aita-menni-san-sebastian/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['day clinic', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Neurorrehabilitación', 'Centro de día de daño cerebral', 'Fisioterapia', 'Terapia ocupacional', 'Neuropsicología'],
    completeness: 86,
    researchHighlights: ['Official San Sebastián neurorehabilitation centre page', 'Official page lists neurorehabilitation and brain injury', 'Centre page describes a day centre for people with neurological disability and personalized care programs'],
    features: ['brain-injury', 'day-clinic'],
    description: {
      it: 'Centro di neuroriabilitazione a San Sebastián con centro diurno per danno cerebrale e programmi personalizzati per disabilità neurologica.',
      en: 'A San Sebastián neurorehabilitation centre with a brain-injury day centre and personalized programs for neurological disability.'
    }
  },
  {
    id: 'bekoetxe-ifas-dano-cerebral',
    name: 'IFAS - Centro de Día de Daño Cerebral Bekoetxe',
    country: 'Spain',
    city: 'Bilbao', region: 'Basque Country', lat: 43.2630, lng: -2.9350,
    address: 'Calle Doctor Ornilla 1 B, 48004 Bilbao', phone: '+34 944 000 066',
    url: 'https://ospitalarioakfundazioaeuskadi.org/es/centro/centro-dano-cerebral-bekoetxe-ifas/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['day clinic'], access: ['public'],
    disciplines: ['Neurorrehabilitación', 'Centro de día de daño cerebral', 'Neuropsicología', 'Fisioterapia', 'Terapia ocupacional'],
    completeness: 82,
    researchHighlights: ['Official Bekoetxe brain-injury day-centre page', 'Matched neurorehabilitation, brain injury and neuropsychology evidence', 'IFAS day-centre candidate in Bilbao'],
    features: ['brain-injury', 'day-clinic'],
    description: {
      it: 'Centro diurno IFAS Bekoetxe a Bilbao per persone con danno cerebrale, con evidenze di neuroriabilitazione e neuropsicologia.',
      en: 'The IFAS Bekoetxe day centre in Bilbao for people with brain injury, with evidence of neurorehabilitation and neuropsychology.'
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
    url: 'https://www.uri-soca.si/en/medical-rehabilitation/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['prosthetics', 'tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitation medicine', 'Physiotherapy', 'Occupational therapy', 'Psychology', 'Speech therapy', 'Rehabilitation nursing'],
    completeness: 92,
    researchHighlights: ['Official medical rehabilitation page describes comprehensive rehabilitation for central and peripheral nervous-system disorders', 'Dedicated departments cover traumatic brain injury, multiple sclerosis, stroke and spinal lesions', 'Services include inpatient and outpatient rehabilitation plus physiotherapy, occupational therapy, psychology and speech therapy'],
    features: ['stroke', 'spinal-cord', 'brain-injury'],
    description: {
      it: 'Istituto universitario sloveno per la riabilitazione medica, con reparti per ictus, trauma cranico, sclerosi multipla, lesioni spinali e riabilitazione pediatrica.',
      en: 'Slovenia’s university rehabilitation institute, with departments for stroke, traumatic brain injury, multiple sclerosis, spinal lesions and paediatric rehabilitation.'
    }
  },
  {
    id: 'center-korak-kranj-brain-injury',
    name: 'Center Korak',
    country: 'Slovenia',
    city: 'Kranj', region: 'Upper Carniola', lat: 46.2520, lng: 14.3493,
    address: 'Kidričeva cesta 53, 4000 Kranj', phone: '+386 4 281 8611',
    url: 'https://center-korak.si/zdravstvene-storitve/',
    conditions: ['tbi', 'cognitive', 'neuromotor'],
    technologies: [],
    modes: ['outpatient'], access: ['public'],
    disciplines: ['Dolgotrajna rehabilitacija', 'Nevrofizioterapija', 'Delovna terapija', 'Logopedske storitve', 'Psihiatrija'],
    completeness: 82,
    researchHighlights: ['Official site defines Center Korak for people with acquired brain injury', 'Official health-services page states long-term rehabilitation for acquired brain injury', 'Official page lists neurophysiotherapy, occupational therapy and speech therapy'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro sloveno a Kranj per la riabilitazione a lungo termine di persone con lesione cerebrale acquisita, con neurofisioterapia, terapia occupazionale e logopedia.',
      en: 'A Slovenian Kranj centre for long-term rehabilitation after acquired brain injury, with neurophysiotherapy, occupational therapy and speech therapy.'
    }
  },
  {
    id: 'center-naprej-maribor-brain-injury',
    name: 'Center Naprej',
    country: 'Slovenia',
    city: 'Maribor', region: 'Styria', lat: 46.5591, lng: 15.6624,
    address: 'Ulica heroja Jevtiča 9, 2000 Maribor', phone: '+386 591 23 001',
    url: 'https://www.center-naprej.si/rehabilitacija',
    conditions: ['tbi', 'cognitive', 'neuromotor'],
    technologies: ['robotics'],
    modes: ['outpatient'], access: ['public'],
    disciplines: ['Dolgotrajna rehabilitacija', 'Nevrofizioterapija', 'Delovna terapija', 'Rehabilitacijska zdravstvena nega', 'Psihologija in psihiatrija'],
    completeness: 86,
    researchHighlights: ['Official site defines Center Naprej as a centre for people with acquired brain injury', 'Official rehabilitation page describes long-term interdisciplinary rehabilitation after acquired brain injury', 'Official neurophysiotherapy page lists neurorehabilitation, Bobath, PNF, motor relearning and robotic arm rehabilitation'],
    robotNotes: ['Official neurophysiotherapy page references robotic equipment for hand rehabilitation and FitMi.'],
    features: ['brain-injury', 'robotics', 'rehabilitation'],
    description: {
      it: 'Centro sloveno a Maribor per la riabilitazione sanitaria e psicosociale a lungo termine dopo lesione cerebrale acquisita, con neurofisioterapia, terapia occupazionale e tecnologie per la mano.',
      en: 'A Slovenian Maribor centre for long-term health and psychosocial rehabilitation after acquired brain injury, with neurophysiotherapy, occupational therapy and hand-rehabilitation technology.'
    }
  },
  {
    id: 'thermana-lasko-stroke-rehabilitation',
    name: 'Thermana Laško',
    country: 'Slovenia',
    city: 'Laško', region: 'Savinja', lat: 46.1601, lng: 15.2271,
    address: 'Zdraviliška cesta 6, 3270 Laško', phone: '+386 3 423 2100',
    url: 'https://www.thermana.si/sl/program-po-mozganski-kapi',
    conditions: ['stroke', 'cognitive', 'neuromotor'],
    technologies: [],
    modes: ['outpatient'], access: ['private'],
    disciplines: ['Fizioterapija', 'Delovna terapija', 'Fizikalna in rehabilitacijska medicina', 'Logopedija'],
    completeness: 78,
    researchHighlights: ['Official programme page is dedicated to rehabilitation after stroke', 'Official text states comprehensive rehabilitation and multidisciplinary cooperation after stroke', 'Official package includes physiotherapist consultation and Bobath treatment'],
    features: ['stroke', 'rehabilitation'],
    description: {
      it: 'Programma riabilitativo sloveno a Laško per il recupero dopo ictus, con approccio multidisciplinare, fisioterapia e trattamenti Bobath.',
      en: 'A Slovenian Laško rehabilitation programme for recovery after stroke, with multidisciplinary care, physiotherapy and Bobath treatment.'
    }
  },
  {
    id: 'cirius-kamnik-pediatric-neurorehabilitation',
    name: 'CIRIUS Kamnik',
    country: 'Slovenia',
    city: 'Kamnik', region: 'Upper Carniola', lat: 46.2189, lng: 14.6112,
    address: 'Novi trg 43a, 1241 Kamnik', phone: '+386 1 830 1300',
    url: 'https://www.cirius-kamnik.si/zdravstvo/medicinska-rehabilitacija/fizioterapija/',
    conditions: ['pediatric', 'neuromuscular', 'neuromotor', 'cognitive'],
    technologies: ['fes'],
    modes: ['outpatient'], access: ['public'],
    disciplines: ['Medicinska rehabilitacija', 'Nevrofizioterapija', 'Delovna terapija', 'Logopedija', 'Klinična psihologija'],
    completeness: 84,
    researchHighlights: ['Official presentation describes CIRIUS Kamnik as Slovenia’s central state education-rehabilitation institution for physically disabled children and adolescents', 'Official physiotherapy page states neurophysiotherapy is central for children and adolescents and treats central nervous-system damage and injury', 'Official page lists RNO, Bobath, PNF, hipotherapy, Halliwick water therapy and TheraSuit for neuromuscular impairments'],
    features: ['pediatric', 'neuromuscular', 'rehabilitation'],
    description: {
      it: 'Centro statale sloveno a Kamnik per bambini e adolescenti con disabilità motorie, con riabilitazione medica, neurofisioterapia, terapia occupazionale e logopedia.',
      en: 'A Slovenian state centre in Kamnik for children and adolescents with motor disabilities, offering medical rehabilitation, neurophysiotherapy, occupational therapy and speech therapy.'
    }
  },
  {
    id: 'cirius-vipava-pediatric-neurorehabilitation',
    name: 'CIRIUS Vipava',
    country: 'Slovenia',
    city: 'Vipava', region: 'Littoral-Inner Carniola', lat: 45.8412, lng: 13.9620,
    address: 'Vojkova ulica 33, 5271 Vipava', phone: '+386 5 365 5200',
    url: 'https://www.cirius-vipava.si/fizioterapija/',
    conditions: ['pediatric', 'neuromuscular', 'neuromotor', 'cognitive'],
    technologies: [],
    modes: ['outpatient'], access: ['public'],
    disciplines: ['Medicinska (re)habilitacija', 'Nevrofizioterapija', 'Delovna terapija', 'Logopedija', 'Hipoterapija'],
    completeness: 84,
    researchHighlights: ['Official therapy page describes a team medical habilitation and rehabilitation programme for children and adolescents', 'Official physiotherapy page lists neurophysiotherapy for neurological-system diseases and injuries affecting brain, spinal cord and nerves', 'Official page lists RNO, Bobath, PNF, TheraSuit, hipotherapy and Halliwick hydrotherapy, including use in cerebral palsy'],
    features: ['pediatric', 'neuromuscular', 'rehabilitation'],
    description: {
      it: 'Centro sloveno a Vipava per bambini e adolescenti con bisogni speciali, con programma medico di abilitazione/riabilitazione e neurofisioterapia.',
      en: 'A Slovenian Vipava centre for children and adolescents with special needs, with medical habilitation/rehabilitation and neurophysiotherapy.'
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
    id: 'propara-montpellier',
    name: 'Centre Propara',
    country: 'France',
    city: 'Montpellier', region: 'Occitanie', lat: 43.6108, lng: 3.8767,
    address: 'Montpellier, Occitanie',
    url: 'https://www.propara.fr/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['gait'],
    modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie', 'Soins infirmiers'],
    completeness: 84,
    researchHighlights: ['Official spinal cord injury rehabilitation centre seed', 'Matched neurological rehabilitation and spinal cord injury evidence'],
    features: ['spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro specializzato nella riabilitazione delle lesioni midollari e dei percorsi neuromotori a Montpellier.',
      en: 'A Montpellier centre specialized in spinal cord injury rehabilitation and neuromotor recovery pathways.'
    }
  },
  {
    id: 'chu-bordeaux-mpr',
    name: 'CHU Bordeaux - Médecine physique et de réadaptation',
    country: 'France',
    city: 'Bordeaux', region: 'Nouvelle-Aquitaine', lat: 44.8378, lng: -0.5792,
    address: 'Bordeaux, Nouvelle-Aquitaine',
    url: 'https://www.chu-bordeaux.fr/Les-services/Service-de-m%C3%A9decine-physique-et-de-r%C3%A9adaptation/',
    conditions: ['stroke', 'spinal', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie'],
    completeness: 82,
    researchHighlights: ['Official CHU MPR service page', 'Matched medicine physique et réadaptation and neurological evidence'],
    features: ['rehabilitation'],
    description: {
      it: 'Servizio universitario di medicina fisica e riadattamento del CHU di Bordeaux con presa in carico neurologica.',
      en: 'A Bordeaux university hospital physical medicine and rehabilitation service with neurological rehabilitation coverage.'
    }
  },
  {
    id: 'chu-grenoble-institut-readucation',
    name: 'CHU Grenoble Alpes - Institut de rééducation',
    country: 'France',
    city: 'Échirolles', region: 'Auvergne-Rhône-Alpes', lat: 45.1437, lng: 5.7183,
    address: 'Échirolles, Auvergne-Rhône-Alpes',
    url: 'https://www.chu-grenoble.fr/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Médecine physique', 'Neurologie', 'Rééducation', 'Kinésithérapie'],
    completeness: 80,
    researchHighlights: ['CHU seed for institute of rehabilitation', 'Official site matched neurology and rehabilitation evidence'],
    features: ['rehabilitation'],
    description: {
      it: 'Istituto di riabilitazione del CHU Grenoble Alpes con copertura neurologica e riabilitativa.',
      en: 'A CHU Grenoble Alpes rehabilitation institute with neurological and rehabilitation coverage.'
    }
  },
  {
    id: 'chu-toulouse-mpr',
    name: 'CHU Toulouse - Médecine physique et de réadaptation',
    country: 'France',
    city: 'Toulouse', region: 'Occitanie', lat: 43.6047, lng: 1.4442,
    address: 'Toulouse, Occitanie',
    url: 'https://www.chu-toulouse.fr/-medecine-physique-et-de-readaptation-',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie', 'Neuropsychologie'],
    completeness: 88,
    researchHighlights: ['Official CHU MPR service page', 'Matched AVC, traumatic brain injury, spinal cord injury and neurological rehabilitation evidence'],
    features: ['stroke', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Servizio MPR del CHU di Tolosa con evidenze per ictus, trauma cranico, lesioni midollari e riabilitazione neurologica.',
      en: 'A Toulouse university hospital MPR service with evidence for stroke, traumatic brain injury, spinal cord injury, and neurological rehabilitation.'
    }
  },
  {
    id: 'fondation-hopale-jacques-calve',
    name: 'Fondation Hopale - Centre Jacques Calvé',
    country: 'France',
    city: 'Berck', region: 'Hauts-de-France', lat: 50.4070, lng: 1.5917,
    address: 'Berck, Hauts-de-France',
    url: 'https://www.fondation-hopale.org/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie'],
    completeness: 83,
    researchHighlights: ['Specialist rehabilitation centre seed from Fondation Hopale', 'Matched rehabilitation centre evidence'],
    features: ['rehabilitation'],
    description: {
      it: 'Centro di riabilitazione specialistica della Fondation Hopale a Berck, adatto a percorsi neurologici complessi.',
      en: 'A Fondation Hopale specialist rehabilitation centre in Berck suited to complex neurological rehabilitation pathways.'
    }
  },
  {
    id: 'pole-saint-helier-rennes',
    name: 'Pôle Saint-Hélier',
    country: 'France',
    city: 'Rennes', region: 'Brittany', lat: 48.1099, lng: -1.6693,
    address: 'Rennes, Brittany',
    url: 'https://www.pole-sthelier.fr/',
    conditions: ['stroke', 'spinal', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient', 'day clinic'], access: ['public', 'private'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie', 'Orthophonie'],
    completeness: 86,
    researchHighlights: ['Official rehabilitation centre seed', 'Matched AVC, neurological rehabilitation and spinal cord injury evidence'],
    features: ['stroke', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro di riabilitazione di Rennes con percorsi per ictus, lesioni midollari e riabilitazione neurologica.',
      en: 'A Rennes rehabilitation centre with pathways for stroke, spinal cord injuries, and neurological rehabilitation.'
    }
  },
  {
    id: 'albert-chenevier-neurolocomoteur',
    name: 'Hôpital Albert-Chenevier - SMR neurolocomoteur',
    country: 'France',
    city: 'Créteil', region: 'Île-de-France', lat: 48.7904, lng: 2.4556,
    address: '40 rue de Mesly, 94000 Créteil', phone: '+33 1 49 81 24 98',
    url: 'https://www.aphp.fr/albert-chenevier/service-de-soins-medicaux-et-de-readaptation-neurolocomoteur',
    conditions: ['stroke', 'spinal', 'neuromotor'],
    technologies: ['gait'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Médecine physique', 'Neurologie', 'Kinésithérapie', 'Ergothérapie'],
    completeness: 87,
    researchHighlights: ['Official AP-HP service for neurolocomotor SMR', 'AP-HP page lists neurology, paraplegia and movement analysis expertise'],
    features: ['spinal-cord', 'gait-analysis'],
    description: {
      it: 'Servizio AP-HP di SMR neurolocomotore a Créteil, con competenze in neurologia, paraplegia e analisi del movimento.',
      en: 'An AP-HP neurolocomotor SMR service in Créteil, with neurology, paraplegia, and movement-analysis expertise.'
    }
  },
  {
    id: 'hopital-marin-hendaye-huntington',
    name: 'Hôpital marin de Hendaye - SMR Maladies Rares Neurologiques',
    country: 'France',
    city: 'Hendaye', region: 'Nouvelle-Aquitaine', lat: 43.3717, lng: -1.7741,
    address: 'Route de la Corniche BP 40139, 64701 Hendaye cedex', phone: '+33 5 59 48 08 00',
    url: 'https://www.aphp.fr/hendaye/service-de-smr-maladies-rares-neurologiques-crmr-huntington',
    conditions: ['neuromotor', 'cognitive'],
    technologies: [],
    modes: ['inpatient'], access: ['public'],
    disciplines: ['Médecine physique', 'Rééducation motrice', 'Rééducation cognitive', 'Orthophonie', 'Psychologie'],
    completeness: 86,
    researchHighlights: ['Official AP-HP SMR for rare neurological diseases and Huntington', 'National specialist pathway with motor, cognitive and social rehabilitation'],
    features: ['rare-neurology', 'rehabilitation'],
    description: {
      it: 'Servizio AP-HP specializzato nelle malattie neurologiche rare, in particolare Huntington, con riabilitazione motoria e cognitiva.',
      en: 'An AP-HP service specializing in rare neurological diseases, especially Huntington disease, with motor and cognitive rehabilitation.'
    }
  },
  {
    id: 'raymond-poincare-pediatric-mpr',
    name: 'Hôpital Raymond-Poincaré - Neurologie et MPR pédiatrique',
    country: 'France',
    city: 'Garches', region: 'Île-de-France', lat: 48.8422, lng: 2.1878,
    address: '104 boulevard Raymond-Poincaré, 92380 Garches', phone: '+33 1 47 10 76 31',
    url: 'https://www.aphp.fr/raymond-poincare/service-de-neurologie-et-reanimation-pediatrique-medecine-physique-et-de',
    conditions: ['pediatric', 'spinal', 'neuromuscular', 'neuromotor', 'cognitive'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurologie pédiatrique', 'Médecine physique', 'Rééducation', 'Orthophonie', 'Neuropsychologie'],
    completeness: 88,
    researchHighlights: ['Official AP-HP pediatric neurology and pediatric MPR service', 'Covers neuromuscular, cerebral and spinal pathologies in children'],
    features: ['pediatric', 'neuromuscular', 'spinal-cord'],
    description: {
      it: 'Servizio pediatrico AP-HP che associa neurologia, rianimazione e MPR per patologie neuromuscolari, cerebrali e midollari.',
      en: 'An AP-HP pediatric service combining neurology, intensive care, and MPR for neuromuscular, cerebral, and spinal conditions.'
    }
  },
  {
    id: 'san-salvadour-smr-systeme-nerveux',
    name: 'Hôpital San Salvadour - SMR affections du système nerveux',
    country: 'France',
    city: 'Hyères', region: 'Provence-Alpes-Côte d’Azur', lat: 43.0849, lng: 6.1501,
    address: '4312 route de Almanarre, 83400 Hyères', phone: '+33 4 94 38 09 27',
    url: 'https://www.aphp.fr/san-salvadour/service-de-soins-medicaux-et-de-readaptation-smr-affections-du-systeme-nerveux',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromotor', 'cognitive'],
    technologies: [],
    modes: ['inpatient', 'day clinic'], access: ['public'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie', 'Orthophonie'],
    completeness: 92,
    researchHighlights: ['Official AP-HP adult nervous-system SMR service', 'Lists post-AVC, MS, Parkinson, spinal cord injury and traumatic brain injury rehabilitation'],
    features: ['stroke', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Servizio AP-HP per adulti con affezioni del sistema nervoso, inclusi ictus, trauma cranico, sclerosi multipla, Parkinson e lesioni midollari.',
      en: 'An AP-HP adult nervous-system rehabilitation service covering stroke, traumatic brain injury, multiple sclerosis, Parkinson disease, and spinal cord injury.'
    }
  },
  {
    id: 'centre-mutualiste-kerpape-mpr-neuro',
    name: 'Centre Mutualiste de Kerpape',
    country: 'France',
    city: 'Ploemeur', region: 'Brittany', lat: 47.7248, lng: -3.4304,
    address: '100 rue de l’Anse du Stole, 56270 Ploemeur', phone: '+33 2 97 82 60 60',
    url: 'https://centre-kerpape.fr/mpr-neuro/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive'],
    technologies: ['robotics', 'gait'],
    modes: ['inpatient', 'outpatient', 'day clinic'], access: ['public'],
    disciplines: ['Médecine physique', 'Rééducation', 'Kinésithérapie', 'Ergothérapie', 'Orthophonie', 'Neuropsychologie'],
    completeness: 93,
    researchHighlights: ['Official adult neurological MPR service at Kerpape', 'Covers acquired brain injury, stroke, traumatic brain injury, MS, Parkinsonian syndromes and neuromuscular disease', 'Dedicated post-resuscitation neurorehab unit, conventional rehab unit and day hospital'],
    features: ['brain-injury', 'spinal-cord', 'research'],
    description: {
      it: 'Centro mutualistico di MPR neurologica adulta a Ploemeur, con percorsi per ictus, trauma cranico, sclerosi multipla, Parkinson e malattie neuromuscolari.',
      en: 'A Ploemeur adult neurological MPR centre covering stroke, traumatic brain injury, multiple sclerosis, Parkinsonian syndromes, and neuromuscular disease.'
    }
  },
  {
    id: 'chu-rouen-neuropediatrie-mpr',
    name: 'CHU Rouen - Neuropédiatrie et MPR pédiatrique',
    country: 'France',
    city: 'Rouen', region: 'Normandy', lat: 49.4429, lng: 1.1095,
    address: '1 rue de Germont, 76031 Rouen Cedex', phone: '+33 2 32 88 89 90',
    url: 'https://www.chu-rouen.fr/services/pediatrie-neonatale-et-reanimation-neuropediatrie/neuropediatrie-medecine-physique-readaptation-pediatrique/',
    conditions: ['pediatric', 'neuromuscular', 'neuromotor', 'cognitive'],
    technologies: [],
    modes: ['outpatient', 'day clinic'], access: ['public'],
    disciplines: ['Neuropédiatrie', 'Médecine physique', 'Rééducation', 'Kinésithérapie', 'Orthophonie', 'Neuropsychologie'],
    completeness: 87,
    researchHighlights: ['Official CHU Rouen neuropediatrics and pediatric MPR service', 'Covers central nervous system, spinal, nerve and muscle conditions in children', 'Includes neuropediatric day hospital, MPR day hospital and multidisciplinary follow-up'],
    features: ['pediatric', 'neuromuscular', 'rehabilitation'],
    description: {
      it: 'Servizio di neuropediatria e MPR pediatrica del CHU di Rouen per patologie del sistema nervoso, neuromuscolari e disabilità motorie infantili.',
      en: 'A CHU Rouen neuropediatrics and pediatric MPR service for nervous-system, neuromuscular, and motor-disability conditions in children.'
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
    id: 'centro-reabilitacao-norte-valadares',
    name: 'Centro de Reabilitação do Norte',
    country: 'Portugal',
    city: 'Valadares', region: 'Porto District', lat: 41.0945, lng: -8.6419,
    address: 'Valadares, Vila Nova de Gaia', phone: '',
    url: 'https://www.ulsge.min-saude.pt/PORTALCRN',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive', 'pediatric'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Medicina Física e Reabilitação', 'Reabilitação AVC', 'Reabilitação de lesões medulares', 'Reabilitação de traumatismo crânio-encefálico', 'Reabilitação pediátrica'],
    completeness: 84,
    researchHighlights: ['Official CRN subportal menu lists inpatient units for stroke, spinal cord injuries, pediatric rehabilitation and traumatic brain injury', 'The same official menu lists outpatient/ambulatory services and a rehabilitation programme for users and caregivers', 'CRN is the Centro de Reabilitação do Norte within ULS Gaia/Espinho, part of the public health network'],
    features: ['stroke-rehab', 'spinal-cord', 'brain-injury', 'pediatric-rehab'],
    description: {
      it: 'Centro pubblico di riabilitazione neurologica a Valadares per ictus, lesioni midollari, trauma cranico-encefalico e riabilitazione pediatrica.',
      en: 'A public neurorehabilitation centre in Valadares for stroke, spinal cord injury, traumatic brain injury and pediatric rehabilitation.'
    }
  },
  {
    id: 'neurovida-neurotriad-lisboa',
    name: 'NeuroVida NeuroTriad',
    country: 'Portugal',
    city: 'Lisboa', region: 'Lisbon District', lat: 38.7136, lng: -9.2294,
    address: 'Edifício Atlas III, Av. José Gomes Ferreira 13, Piso 0, 1495-139 Lisboa', phone: '+351 21 406 42 91',
    url: 'https://neurovida.pt/pt/servicos-e-programas/programas/neurotriad-lesao-cerebral-adquirida/',
    conditions: ['stroke', 'tbi', 'parkinson', 'neuromotor', 'cognitive'],
    technologies: ['tms', 'tdcs'], modes: ['outpatient', 'day clinic'], access: ['private'],
    disciplines: ['Reabilitação neurológica intensiva', 'Fisioterapia neurológica', 'Terapia ocupacional', 'Terapia da fala', 'Neuropsicologia', 'Estimulação cognitiva'],
    completeness: 84,
    researchHighlights: ['Official NeuroTriad page describes intensive neurological rehabilitation in Lisbon for acquired brain injury, AVC, TCE, Parkinson and other neurological changes', 'Official acquired brain injury page lists personalized neurological rehabilitation, neurological physiotherapy, occupational therapy, speech therapy and NeuroTriad', 'Official contact information identifies NeuroVida at Av. José Gomes Ferreira 13 with phone +351 21 406 42 91'],
    features: ['intensive-neurorehab', 'brain-injury', 'stroke-rehab', 'neuromodulation'],
    description: {
      it: 'Programma privato di riabilitazione neurologica intensiva a Lisbona per lesione cerebrale acquisita, ictus, TCE, Parkinson e deficit cognitivi o motori.',
      en: 'A private intensive neurological rehabilitation programme in Lisbon for acquired brain injury, stroke, TBI, Parkinson and cognitive or motor deficits.'
    }
  },
  {
    id: 'roessingh-enschede',
    name: 'Roessingh',
    country: 'Netherlands',
    city: 'Enschede', region: 'Overijssel', lat: 52.2227, lng: 6.8936,
    address: 'Roessinghsbleekweg 33B, 7522 AH Enschede', phone: '+31 053 487 58 75',
    url: 'https://www.roessingh.nl/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait', 'tele'], modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Logopedie', 'Ergotherapie', 'Psychologie'],
    completeness: 92,
    researchHighlights: ['Official site lists adult pathways for spinal cord injury, MS, neuromuscular conditions, acquired brain injury and Parkinson', 'Official site lists child pathways for neurological problems, neuromuscular conditions, spina bifida and acquired brain injury', 'Innovation and research are highlighted on the official site'],
    features: ['research', 'patient-satisfaction', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Centro di riabilitazione olandese a Enschede per patologie neurologiche complesse, incluse lesioni midollari, NAH, SM, Parkinson e patologie neuromuscolari.',
      en: 'A Dutch rehabilitation center in Enschede for complex neurological conditions, including spinal cord injury, acquired brain injury, MS, Parkinson and neuromuscular disorders.'
    }
  },
  {
    id: 'basalt-den-haag-neurological-rehabilitation',
    name: 'Basalt',
    country: 'Netherlands',
    city: 'The Hague', region: 'South Holland', lat: 52.0411, lng: 4.267,
    address: 'Vrederustlaan 180, 2543 SW Den Haag', phone: '+31 70 359 3593',
    url: 'https://basaltrevalidatie.nl/volwassenen/neurologische-revalidatie/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Neuropsychologie', 'Verpleegkunde'],
    completeness: 89,
    researchHighlights: ['Official page is dedicated to neurological rehabilitation', 'Covers stroke, spinal cord injury, MS, ALS, neuromuscular disorders, cerebral palsy and Parkinson', 'Offers clinical and outpatient neurological rehabilitation at Den Haag and other locations'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro di riabilitazione specialistica a L’Aia con neurorevalidatie clinica e ambulatoriale per ictus, lesioni midollari, SM, Parkinson e patologie neuromuscolari.',
      en: 'A specialist rehabilitation centre in The Hague with inpatient and outpatient neurorehabilitation for stroke, spinal cord injury, MS, Parkinson and neuromuscular disease.'
    }
  },
  {
    id: 'rijndam-rotterdam-neurorehabilitation',
    name: 'Rijndam Revalidatie',
    country: 'Netherlands',
    city: 'Rotterdam', region: 'South Holland', lat: 51.9121, lng: 4.4756,
    address: 'Westersingel 300, 3015 LJ Rotterdam', phone: '+31 10 241 2412',
    url: 'https://www.rijndam.nl/specialismen-behandelingen/revalidatie/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie'],
    completeness: 88,
    researchHighlights: ['Official adult rehabilitation page lists spinal cord injury, MS, acquired brain injury, Parkinson and muscle diseases', 'Official pediatric navigation lists cerebral palsy, spinal cord injury, acquired brain injury, muscle diseases and spina bifida', 'Rijndam publishes research and innovation content for rehabilitation'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Grande centro di riabilitazione a Rotterdam con percorsi adulti e pediatrici per NAH, lesioni midollari, SM, Parkinson, paralisi cerebrale e malattie muscolari.',
      en: 'A major Rotterdam rehabilitation centre with adult and pediatric pathways for acquired brain injury, spinal cord injury, MS, Parkinson, cerebral palsy and muscle diseases.'
    }
  },
  {
    id: 'de-hoogstraat-utrecht-neurorehabilitation',
    name: 'De Hoogstraat Revalidatie',
    country: 'Netherlands',
    city: 'Utrecht', region: 'Utrecht', lat: 52.087, lng: 5.1473,
    address: 'Rembrandtkade 10, 3583 TM Utrecht', phone: '+31 30 256 1211',
    url: 'https://www.dehoogstraat.nl/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie'],
    completeness: 88,
    researchHighlights: ['Official site lists adult diagnoses including spinal cord injury, GBS, locked-in syndrome, MS and acquired brain injury', 'Official pediatric sections include cerebral palsy, spinal cord injury, acquired brain injury, muscle diseases and spina bifida', 'Official site highlights intensive treatment, technical adaptations, research and innovation'],
    features: ['brain-injury', 'spinal-cord', 'pediatric', 'research'],
    description: {
      it: 'Centro di riabilitazione a Utrecht per adulti, bambini e ragazzi, con percorsi per lesioni midollari, NAH, SM, GBS, locked-in syndrome e patologie pediatriche neurologiche.',
      en: 'A Utrecht rehabilitation centre for adults, children and young people, with pathways for spinal cord injury, acquired brain injury, MS, GBS, locked-in syndrome and pediatric neurological conditions.'
    }
  },
  {
    id: 'klimmendaal-arnhem-neurorehabilitation',
    name: 'Klimmendaal',
    country: 'Netherlands',
    city: 'Arnhem', region: 'Gelderland', lat: 51.991, lng: 5.8781,
    address: 'Heijenoordseweg 5, 6813 GG Arnhem', phone: '+31 26 352 6100',
    url: 'https://www.klimmendaal.nl/volwassenen/behandelingen/niet-aangeboren-hersenletsel',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait', 'vr', 'robotics'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie', 'Verpleegkunde'],
    completeness: 88,
    researchHighlights: ['Official treatment pages include acquired brain injury, stroke, MS, Parkinson, neuromuscular disorders and ALS', 'Official navigation lists clinical admission plus movement lab, GRAIL, gait lab, neuropsychological assessment and Parkinson observation centre', 'Arnhem Heijenoordseweg location supports adults, clinical admission and children/youth'],
    features: ['brain-injury', 'gait-lab', 'research'],
    description: {
      it: 'Centro di riabilitazione ad Arnhem con presa in carico neurologica per NAH, ictus, SM, Parkinson, ALS e patologie neuromuscolari, incluso ricovero clinico.',
      en: 'An Arnhem rehabilitation centre with neurological pathways for acquired brain injury, stroke, MS, Parkinson, ALS and neuromuscular conditions, including inpatient admission.'
    }
  },
  {
    id: 'heliomare-wijk-aan-zee-neurorehabilitation',
    name: 'Heliomare',
    country: 'Netherlands',
    city: 'Wijk aan Zee', region: 'North Holland', lat: 52.4974, lng: 4.5936,
    address: 'Relweg 51, 1949 EC Wijk aan Zee', phone: '+31 88 920 8888',
    url: 'https://www.heliomare.nl/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie', 'Bewegingsagogie'],
    completeness: 86,
    researchHighlights: ['Official site describes medical specialist rehabilitation for children, young people and adults', 'Official expertise areas include brain injury, spinal cord injury aftercare and MS rehabilitation', 'Official contact page lists a specialist brain-injury treatment centre network in addition to the Wijk aan Zee rehabilitation centre'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Centro di riabilitazione specialistica a Wijk aan Zee con percorsi clinici e ambulatoriali, esperienza su lesioni cerebrali, lesioni midollari, SM e riabilitazione pediatrica.',
      en: 'A specialist rehabilitation centre in Wijk aan Zee with inpatient and outpatient care, and expertise in brain injury, spinal cord injury, MS and pediatric rehabilitation.'
    }
  },
  {
    id: 'sint-maartenskliniek-nijmegen-neurorehabilitation',
    name: 'Sint Maartenskliniek',
    country: 'Netherlands',
    city: 'Nijmegen', region: 'Gelderland', lat: 51.8329, lng: 5.8997,
    address: 'Hengstdal 3, 6574 NA Ubbergen', phone: '+31 24 365 9400',
    url: 'https://www.maartenskliniek.nl/revalidatiegeneeskunde',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiegeneeskunde', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie'],
    completeness: 87,
    researchHighlights: ['Official rehabilitation medicine page covers adults after spinal cord injury, brain disorders and nerve/muscle diseases', 'Official navigation lists stroke, traumatic brain injury, cerebral palsy, MS, GBS and other muscle diseases', 'Official page includes pediatric rehabilitation for disorders of the musculoskeletal or nervous system'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Ospedale specialistico di riabilitazione a Nijmegen/Ubbergen con percorsi per lesioni midollari, ictus, trauma cranico, SM, malattie nervose e muscolari e riabilitazione pediatrica.',
      en: 'A specialist rehabilitation hospital in Nijmegen/Ubbergen with pathways for spinal cord injury, stroke, traumatic brain injury, MS, nerve and muscle diseases, and pediatric rehabilitation.'
    }
  },
  {
    id: 'revant-breda-neurological-rehabilitation',
    name: 'Revant Revalidatiecentrum Breda',
    country: 'Netherlands',
    city: 'Breda', region: 'North Brabant', lat: 51.5886, lng: 4.7902,
    address: 'Brabantlaan 1, 4817 JW Breda', phone: '+31 88 735 8000',
    url: 'https://www.revant.nl/neurologischerevalidatie',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Cognitief-linguïstisch team'],
    completeness: 89,
    researchHighlights: ['Official page is dedicated to neurological rehabilitation', 'Covers brain, nerve and muscle conditions after accident, spinal cord injury, stroke, MS, Parkinson or ALS', 'Breda provides both clinical and outpatient neurological rehabilitation and gait-analysis facilities'],
    features: ['brain-injury', 'spinal-cord', 'gait-lab'],
    description: {
      it: 'Centro Revant a Breda con riabilitazione neurologica clinica e ambulatoriale per ictus, lesioni midollari, SM, Parkinson, ALS e NAH.',
      en: 'Revant’s Breda centre provides inpatient and outpatient neurological rehabilitation for stroke, spinal cord injury, MS, Parkinson, ALS and acquired brain injury.'
    }
  },
  {
    id: 'merem-hilversum-neurorehabilitation',
    name: 'Merem Medische Revalidatie',
    country: 'Netherlands',
    city: 'Hilversum', region: 'North Holland', lat: 52.2128, lng: 5.2023,
    address: 'Soestdijkerstraatweg 129, 1213 VX Hilversum', phone: '+31 35 688 1411',
    url: 'https://www.merem.nl/voor-patienten/volwassenen/niet-aangeboren-hersenletsel',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie', 'Bewegingsagogie'],
    completeness: 88,
    researchHighlights: ['Official acquired-brain-injury page describes clinical and outpatient team rehabilitation', 'Official site lists Merem programmes for stroke, ALS, cerebral palsy, spinal cord injury, MS, muscle diseases, acquired brain injury and Parkinson', 'Hilversum is the listed inpatient location for clinical admission'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Centro di riabilitazione medica a Hilversum con ricovero e ambulatorio, forte sui percorsi per NAH, ictus, SM, Parkinson, lesioni midollari e patologie neuromuscolari.',
      en: 'A Hilversum medical rehabilitation centre with inpatient and outpatient care, strong in acquired brain injury, stroke, MS, Parkinson, spinal cord injury and neuromuscular pathways.'
    }
  },
  {
    id: 'revalidatie-friesland-lyndenstein-neurorehabilitation',
    name: 'Revalidatie Friesland - Lyndenstein',
    country: 'Netherlands',
    city: 'Beetsterzwaag', region: 'Friesland', lat: 53.0598, lng: 6.0735,
    address: 'Hoofdstraat 3, 9244 CL Beetsterzwaag', phone: '+31 88 580 1580',
    url: 'https://www.revalidatie-friesland.nl/',
    conditions: ['tbi', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie', 'Verpleegkunde'],
    completeness: 82,
    researchHighlights: ['Official site describes Revalidatie Friesland as a specialist rehabilitation provider for children, youth and adults', 'Official site identifies expertise in acquired brain injury and spasticity', 'Lyndenstein Beetsterzwaag offers clinical rehabilitation with adult and child/youth departments'],
    features: ['brain-injury', 'pediatric', 'rehabilitation'],
    description: {
      it: 'Sede Lyndenstein di Revalidatie Friesland a Beetsterzwaag, con riabilitazione clinica e ambulatoriale per adulti, bambini e giovani, inclusa competenza in NAH e spasticità.',
      en: 'Revalidatie Friesland’s Lyndenstein site in Beetsterzwaag provides inpatient and outpatient rehabilitation for adults, children and young people, including acquired brain injury and spasticity expertise.'
    }
  },
  {
    id: 'libra-blixembosch-eindhoven-neurorehabilitation',
    name: 'Libra Revalidatiecentrum Blixembosch',
    country: 'Netherlands',
    city: 'Eindhoven', region: 'North Brabant', lat: 51.4901, lng: 5.454,
    address: 'Toledolaan 2, 5629 CC Eindhoven', phone: '+31 88 313 2000',
    url: 'https://www.libranet.nl/behandelprogrammas/vroege-intensieve-neurorevalidatie-vin-langdurige-bewustzijnsstoornis-coma/',
    conditions: ['tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie'],
    completeness: 87,
    researchHighlights: ['Official programme page covers early intensive neurorehabilitation for prolonged disorders of consciousness and coma', 'Official sitemap lists programmes for spinal cord injury, MS, neuromuscular disorders, acquired brain injury, Parkinson and pediatric neuromuscular disorders', 'Blixembosch Eindhoven is an official rehabilitation centre with inpatient visiting hours and therapy facilities'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Centro Libra Blixembosch a Eindhoven, con programmi neurologici specialistici inclusa neurorevalidatie intensiva precoce, NAH, lesioni midollari, SM, Parkinson e patologie neuromuscolari.',
      en: 'Libra’s Blixembosch centre in Eindhoven has specialist neurological programmes including early intensive neurorehabilitation, acquired brain injury, spinal cord injury, MS, Parkinson and neuromuscular conditions.'
    }
  },
  {
    id: 'vogellanden-zwolle-neurorehabilitation',
    name: 'Vogellanden',
    country: 'Netherlands',
    city: 'Zwolle', region: 'Overijssel', lat: 52.5027, lng: 6.117,
    address: 'Hyacinthstraat 66A, 8013 XZ Zwolle', phone: '+31 38 498 1111',
    url: 'https://www.vogellanden.nl/revalidatie/aandoeningen',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['vr'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Psychologie', 'Verpleegkunde'],
    completeness: 87,
    researchHighlights: ['Official sitemap lists rehabilitation pages for stroke/CVA, spinal cord injury, MS, traumatic brain injury and acquired brain injury', 'Official contact page lists adult inpatient rehabilitation and adult outpatient rehabilitation at Hyacinthstraat Zwolle', 'Official news pages reference virtual rehabilitation for brain injury and participation in stroke recovery research'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Centro di riabilitazione a Zwolle con percorsi per CVA/ictus, lesioni midollari, SM, trauma cranico e NAH, con ricovero e ambulatorio.',
      en: 'A Zwolle rehabilitation centre with pathways for stroke/CVA, spinal cord injury, MS, traumatic brain injury and acquired brain injury, including inpatient and outpatient care.'
    }
  },
  {
    id: 'libra-leijpark-tilburg-neurorehabilitation',
    name: 'Libra Revalidatiecentrum Leijpark',
    country: 'Netherlands',
    city: 'Tilburg', region: 'North Brabant', lat: 51.5415, lng: 5.1035,
    address: 'Prof. Stoltehof 3, 5022 KE Tilburg', phone: '+31 88 313 2000',
    url: 'https://www.libranet.nl/service-menu/locaties/libra-revalidatiecentrum-leijpark-tilburg/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Physician assistant', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Verpleegkunde'],
    completeness: 86,
    researchHighlights: ['Official location page identifies Vroege Intensieve Neurorevalidatie (VIN) as a specialised Leijpark department', 'VIN is described for severe brain injury including stroke, traumatic brain injury and other neurological conditions', 'Leijpark has clinical and outpatient rehabilitation, 35 inpatient beds and VIN-specific visiting hours'],
    features: ['brain-injury', 'early-rehab'],
    description: {
      it: 'Sede Libra Leijpark a Tilburg con reparto VIN per neurorevalidatie intensiva precoce dopo gravi lesioni cerebrali, ictus, trauma cranico e altre patologie neurologiche.',
      en: 'Libra’s Leijpark centre in Tilburg has a VIN early intensive neurorehabilitation department for severe brain injury, stroke, traumatic brain injury and other neurological conditions.'
    }
  },
  {
    id: 'basalt-leiden-neurological-rehabilitation',
    name: 'Basalt Leiden',
    country: 'Netherlands',
    city: 'Leiden', region: 'South Holland', lat: 52.1707, lng: 4.4691,
    address: 'Wassenaarseweg 501, 2333 AL Leiden', phone: '+31 71 519 5195',
    url: 'https://basaltrevalidatie.nl/volwassenen/neurologische-revalidatie/locaties/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiearts', 'Fysiotherapie', 'Ergotherapie', 'Logopedie', 'Neuropsychologie', 'Verpleegkunde'],
    completeness: 85,
    researchHighlights: ['Official Basalt neurological rehabilitation locations page lists Leiden as a clinic and outpatient neurorehabilitation location', 'Official Leiden page lists Volwassenen Neuro/Ortho/Pijn and a clinical ward contact', 'Basalt neurological rehabilitation covers stroke, spinal cord injury, MS, ALS, neuromuscular disorders, cerebral palsy and Parkinson'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Sede Basalt di Leiden per neurorevalidatie clinica e ambulatoriale, collegata ai percorsi Basalt per ictus, lesioni midollari, SM, Parkinson, ALS e patologie neuromuscolari.',
      en: 'Basalt’s Leiden site provides inpatient and outpatient neurorehabilitation, linked to Basalt pathways for stroke, spinal cord injury, MS, Parkinson, ALS and neuromuscular conditions.'
    }
  },
  {
    id: 'inkendaal-vlezenbeek',
    name: 'Inkendaal',
    country: 'Belgium',
    city: 'Vlezenbeek', region: 'Flemish Brabant', lat: 50.8242, lng: 4.2134,
    address: 'Inkendaalstraat 1, 1602 Vlezenbeek', phone: '+32 2 531 51 11',
    url: 'https://www.inkendaal.be/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Kinesitherapie', 'Logopedie', 'Ergotherapie', 'Psychologie', 'Artsen'],
    completeness: 88,
    researchHighlights: ['Official site describes rehabilitation for severe locomotor, neurological and cardiopulmonary conditions', 'Aims to improve quality of life and independence for people with complex neurological disabilities', 'Offers individual inpatient and outpatient rehabilitation programmes for children and adults'],
    features: ['pool', 'water-therapy'],
    description: {
      it: 'Ospedale di riabilitazione a Vlezenbeek per bambini e adulti con disabilità neurologiche complesse, con ricovero, ambulatorio e team multidisciplinari.',
      en: 'A Vlezenbeek rehabilitation hospital for children and adults with complex neurological disabilities, offering inpatient, outpatient and multidisciplinary care.'
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
    completeness: 86,
    researchHighlights: ['Official site lists brain-injury, spinal-cord-injury and polyneuropathy clinics', 'Provides residential and outpatient rehabilitation care', 'Official page describes hospitalised rehabilitation and rehabilitation without overnight stay'],
    features: ['brain-injury', 'spinal-cord'],
    description: {
      it: 'Ospedale di riabilitazione a Edegem con cliniche dedicate a lesioni cerebrali e lesioni midollari, sia in regime residenziale sia ambulatoriale.',
      en: 'A rehabilitation hospital in Edegem with dedicated brain-injury and spinal cord pathways, both inpatient and outpatient.'
    }
  },
  {
    id: 'william-lennox-ottignies-neurorehabilitation',
    name: 'Centre Hospitalier Neurologique William Lennox',
    country: 'Belgium',
    city: 'Ottignies', region: 'Walloon Brabant', lat: 50.6786, lng: 4.5916,
    address: 'Allée de Clerlande 6, 1340 Ottignies', phone: '+32 10 430 211',
    url: 'https://www.cnwl.be/',
    conditions: ['stroke', 'tbi', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['vr'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurologie', 'Réadaptation fonctionnelle', 'Kinésithérapie', 'Ergothérapie', 'Logopédie', 'Neuropsychologie'],
    completeness: 89,
    researchHighlights: ['Official site describes a 179-bed neurological hospital devoted to rehabilitation and care for adults and children with neurological disorders', 'Covers stroke, traumatic brain injury, epilepsy, disorders of consciousness and developmental cognitive disorders', 'Hospital has adult neurology and neuropediatrics departments plus specialist consultations'],
    features: ['brain-injury', 'pediatric', 'research'],
    description: {
      it: 'Ospedale neurologico di riabilitazione a Ottignies per adulti e bambini con ictus, trauma cranico, disturbi della coscienza, epilessia e disturbi cognitivi dello sviluppo.',
      en: 'A neurological rehabilitation hospital in Ottignies for adults and children with stroke, traumatic brain injury, disorders of consciousness, epilepsy and developmental cognitive disorders.'
    }
  },
  {
    id: 'nationaal-ms-centrum-melsbroek',
    name: 'Nationaal MS Centrum',
    country: 'Belgium',
    city: 'Melsbroek', region: 'Flemish Brabant', lat: 50.9183, lng: 4.4788,
    address: 'Vereeckenstraat 44, 1820 Melsbroek', phone: '+32 2 597 80 00',
    url: 'https://www.mscenter.be/',
    conditions: ['ms', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurologie', 'Revalidatiegeneeskunde', 'Kinesitherapie', 'Ergotherapie', 'Psychologie', 'Verpleegkunde'],
    completeness: 86,
    researchHighlights: ['Official site describes consultation, treatment, rehabilitation, guidance and scientific research', 'Provides integrated specialist care pathways for people with MS and other chronic neurological disorders', 'Official navigation includes MS-related pathology such as neuromyelitis optica'],
    features: ['ms-specialist', 'research'],
    description: {
      it: 'Centro nazionale MS a Melsbroek con percorsi integrati per sclerosi multipla e altre patologie neurologiche croniche, includendo trattamento, riabilitazione e ricerca.',
      en: 'A national MS centre in Melsbroek with integrated pathways for multiple sclerosis and other chronic neurological disorders, including treatment, rehabilitation and research.'
    }
  },
  {
    id: 'noorderhart-revalidatie-ms-pelt',
    name: 'Noorderhart Revalidatie & MS',
    country: 'Belgium',
    city: 'Pelt', region: 'Limburg', lat: 51.1916, lng: 5.3882,
    address: 'Boemerangstraat 2, 3900 Pelt', phone: '+32 11 80 91 00',
    url: 'https://www.noorderhart.be/nl/revalidatie-ms/',
    conditions: ['ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurologie', 'Revalidatiegeneeskunde', 'Kinesitherapie', 'Ergotherapie', 'Psychologie', 'Verpleegkunde'],
    completeness: 82,
    researchHighlights: ['Official site identifies a dedicated Revalidatie & MS campus and Universitair MS Centrum', 'Official metadata describes Revalidatie & MS as a rehabilitation centre and MS clinic', 'Official page lists a dedicated Revalidatie & MS reception and address at Boemerangstraat 2'],
    features: ['ms-specialist', 'rehabilitation'],
    description: {
      it: 'Centro Noorderhart Revalidatie & MS a Pelt, con campus dedicato alla riabilitazione e alla sclerosi multipla e collegamento al centro universitario MS.',
      en: 'Noorderhart Revalidatie & MS in Pelt is a dedicated rehabilitation and MS campus linked to a university MS centre.'
    }
  },
  {
    id: 'trainm-antwerp-neurorehabilitation',
    name: 'TRAINM Clinics Antwerp',
    country: 'Belgium',
    city: 'Antwerp', region: 'Antwerp', lat: 51.2162, lng: 4.4159,
    address: 'Quellinstraat 38, 2018 Antwerp', phone: '+32 3 283 0223',
    url: 'https://www.trainm.com/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'vr', 'gait'], modes: ['outpatient'], access: ['private'],
    disciplines: ['Doctors', 'Physiotherapy', 'Occupational therapy', 'Neuropsychology', 'Speech and swallowing therapy'],
    completeness: 87,
    researchHighlights: ['Official site describes TRAINM as a neurorehabilitation clinic for children and adults with neurological disabilities', 'Covers stroke, acquired brain injury, cerebral palsy, spinal cord injury, MS, Parkinson, speech/swallow/language and cognitive deficits', 'Technology mix includes robotics, non-invasive neuromodulation, VR, neurogaming, BCI and AI'],
    features: ['robotics', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Clinica privata di neuro-riabilitazione ad Anversa per adulti e bambini, con robotica, VR e neuromodulazione per ictus, ABI, lesioni midollari, SM, Parkinson e paralisi cerebrale.',
      en: 'A private neurorehabilitation clinic in Antwerp for adults and children, using robotics, VR and neuromodulation for stroke, ABI, spinal cord injury, MS, Parkinson and cerebral palsy.'
    }
  },
  {
    id: 'uz-leuven-pellenberg-rehabilitation-centre',
    name: 'UZ Leuven Revalidatiecentrum Pellenberg',
    country: 'Belgium',
    city: 'Pellenberg', region: 'Flemish Brabant', lat: 50.8600, lng: 4.7984,
    address: 'Weligerveld 1, 3212 Pellenberg', phone: '+32 16 33 87 00',
    url: 'https://www.uzleuven.be/nl/revalidatiecentrum-pellenberg',
    conditions: ['tbi', 'spinal', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Revalidatiegeneeskunde', 'Kinesitherapie', 'Ergotherapie', 'Logopedie', 'Psychologie', 'Verpleegkunde'],
    completeness: 88,
    researchHighlights: ['Official UZ Leuven page identifies Revalidatiecentrum Pellenberg and its rehabilitation programmes', 'Programmes include acquired brain injury, spinal cord injury/paraplegia and peripheral nervous system injuries', 'Hospitalisation rehabilitation A covers adults with acquired brain injury; rehabilitation B covers spinal cord injury and peripheral nervous system disorders'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Revalidatiecentrum Pellenberg di UZ Leuven offre programmi di riabilitazione per lesioni cerebrali acquisite, lesioni midollari/dwarslaesie e lesioni del sistema nervoso periferico, con ricovero e percorsi terapeutici multidisciplinari.',
      en: 'UZ Leuven Revalidatiecentrum Pellenberg provides rehabilitation programmes for acquired brain injury, spinal cord injury/paraplegia and peripheral nervous system injuries, with inpatient and multidisciplinary therapy pathways.'
    }
  },
  {
    id: 'trainm-ghent-south-zottegem-neurorehabilitation',
    name: 'TRAINM Clinics Ghent-South',
    country: 'Belgium',
    city: 'Zottegem', region: 'East Flanders', lat: 50.8963, lng: 3.8054,
    address: 'Balegemstraat 2, 9620 Zottegem', phone: '+32 3 283 0223',
    url: 'https://www.trainm.com/who/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'vr', 'gait'], modes: ['outpatient'], access: ['private'],
    disciplines: ['Doctors', 'Physiotherapy', 'Occupational therapy', 'Neuropsychology', 'Speech and swallowing therapy'],
    completeness: 84,
    researchHighlights: ['Official TRAINM indications page lists the Ghent-South clinic branch at Balegemstraat 2 in Zottegem', 'Official site describes TRAINM as a neurorehabilitation clinic for children and adults with neurological disabilities', 'Covers stroke, acquired brain injury, spinal cord injury, MS, Parkinson and cognitive deficits'],
    features: ['robotics', 'brain-injury', 'spinal-cord'],
    description: {
      it: 'Sede TRAINM Ghent-South a Zottegem, clinica privata di neuro-riabilitazione con robotica, VR e neuromodulazione per ictus, ABI, lesioni midollari, SM, Parkinson e paralisi cerebrale.',
      en: 'TRAINM’s Ghent-South branch in Zottegem is a private neurorehabilitation clinic using robotics, VR and neuromodulation for stroke, ABI, spinal cord injury, MS, Parkinson and cerebral palsy.'
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
    id: 'national-rehabilitation-centre-nottingham',
    name: 'National Rehabilitation Centre',
    country: 'United Kingdom',
    city: 'Nottingham', region: 'Nottinghamshire', lat: 52.8050, lng: -1.1460,
    address: 'Nottinghamshire', phone: 'Unknown',
    url: 'https://nationalrehabilitationcentre.nhs.uk/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurorehabilitation', 'Rehabilitation medicine', 'Therapies', 'Nursing', 'Research'],
    completeness: 86,
    researchHighlights: ['Official NHS National Rehabilitation Centre page', 'Matched neurorehabilitation, inpatient rehabilitation and stroke evidence', 'National NHS rehabilitation programme with research orientation'],
    features: ['research', 'rehabilitation'],
    description: {
      it: 'Centro nazionale NHS per la riabilitazione nel Nottinghamshire, con evidenze per neuroriabilitazione, ricovero e ictus.',
      en: 'An NHS national rehabilitation centre in Nottinghamshire with evidence for neurorehabilitation, inpatient care, and stroke rehabilitation.'
    }
  },
  {
    id: 'walkergate-park-neurorehabilitation',
    name: 'Walkergate Park Centre for Neurorehabilitation and Neuropsychiatry',
    country: 'United Kingdom',
    city: 'Newcastle upon Tyne', region: 'Tyne and Wear', lat: 54.9970, lng: -1.5720,
    address: 'Walkergate Park, Newcastle upon Tyne', phone: 'Unknown',
    url: 'https://www.cntw.nhs.uk/locations/walkergate-park',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurorehabilitation', 'Neuropsychiatry', 'Therapies', 'Nursing', 'Rehabilitation medicine'],
    completeness: 88,
    researchHighlights: ['Official NHS location page for Walkergate Park', 'Page matched neurorehabilitation, inpatient and outpatient evidence', 'Specialist centre for neurorehabilitation and neuropsychiatry in Newcastle'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro NHS di Newcastle per neuroriabilitazione e neuropsichiatria, con percorsi di ricovero e ambulatoriali.',
      en: 'An NHS Newcastle centre for neurorehabilitation and neuropsychiatry with inpatient and outpatient pathways.'
    }
  },
  {
    id: 'stoke-mandeville-national-spinal-injuries',
    name: 'National Spinal Injuries Centre - Stoke Mandeville Hospital',
    country: 'United Kingdom',
    city: 'Aylesbury', region: 'Buckinghamshire', lat: 51.7930, lng: -0.8070,
    address: 'Stoke Mandeville Hospital, Aylesbury', phone: 'Unknown',
    url: 'https://www.buckshealthcare.nhs.uk/wards/national-spinal-injuries-centre/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Spinal injuries', 'Rehabilitation', 'Therapies', 'Nursing', 'Outpatient services'],
    completeness: 90,
    researchHighlights: ['Official Buckinghamshire Healthcare NHS spinal injuries centre page', 'Matched spinal cord, inpatient and outpatient evidence', 'National specialist spinal injuries centre at Stoke Mandeville Hospital'],
    features: ['spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro nazionale NHS per lesioni spinali allo Stoke Mandeville Hospital, con percorsi di ricovero e ambulatoriali.',
      en: 'An NHS national spinal injuries centre at Stoke Mandeville Hospital with inpatient and outpatient rehabilitation pathways.'
    }
  },
  {
    id: 'salisbury-spinal-treatment-centre',
    name: 'Salisbury Spinal Treatment Centre',
    country: 'United Kingdom',
    city: 'Salisbury', region: 'Wiltshire', lat: 51.0688, lng: -1.7945,
    address: 'Salisbury District Hospital, Salisbury', phone: 'Unknown',
    url: 'https://www.salisbury.nhs.uk/wards-departments/departments/spinal-treatment-centre/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Spinal treatment', 'Rehabilitation', 'Therapies', 'Nursing', 'Outpatient services'],
    completeness: 89,
    researchHighlights: ['Official Salisbury NHS spinal treatment centre page', 'Matched spinal cord, spinal injury, inpatient and outpatient rehabilitation evidence', 'Specialist NHS spinal injury rehabilitation centre'],
    features: ['spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro NHS di Salisbury per trattamento e riabilitazione delle lesioni spinali, con percorsi di ricovero e ambulatoriali.',
      en: 'An NHS Salisbury centre for spinal injury treatment and rehabilitation, with inpatient and outpatient pathways.'
    }
  },
  {
    id: 'childrens-trust-tadworth',
    name: "The Children's Trust",
    country: 'United Kingdom',
    city: 'Tadworth', region: 'Surrey', lat: 51.2910, lng: -0.2350,
    address: 'Tadworth, Surrey', phone: 'Unknown',
    url: 'https://www.thechildrenstrust.org.uk/',
    conditions: ['pediatric', 'stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public', 'charity'],
    disciplines: ['Pediatric neurorehabilitation', 'Neurodisability', 'Therapies', 'Education', 'Nursing'],
    completeness: 89,
    researchHighlights: ['Official pediatric brain-injury rehabilitation charity page', 'Matched children with brain injury, acquired brain injury, neurodisability and rehabilitation evidence', 'Specialist pediatric rehabilitation centre in Surrey'],
    features: ['pediatric', 'brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro pediatrico nel Surrey per bambini con danno cerebrale acquisito, neuroriabilitazione e neurodisabilità.',
      en: 'A Surrey pediatric centre for children with acquired brain injury, neurorehabilitation needs, and neurodisability.'
    }
  },
  {
    id: 'steps-rehabilitation-sheffield',
    name: 'STEPS Rehabilitation',
    country: 'United Kingdom',
    city: 'Sheffield', region: 'South Yorkshire', lat: 53.3811, lng: -1.4701,
    address: 'Sheffield, South Yorkshire', phone: 'Unknown',
    url: 'https://stepsrehabilitation.co.uk/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech and language therapy', 'Neuropsychology'],
    completeness: 88,
    researchHighlights: ['Official specialist rehabilitation centre page', 'Matched brain injury, spinal cord, stroke, MS and Parkinson evidence', 'Specialist private rehabilitation centre in Sheffield'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro specialistico di riabilitazione a Sheffield con evidenze per danno cerebrale, lesione midollare, ictus, sclerosi multipla e Parkinson.',
      en: 'A specialist rehabilitation centre in Sheffield with evidence for brain injury, spinal cord injury, stroke, multiple sclerosis, and Parkinson disease.'
    }
  },
  {
    id: 'royal-buckinghamshire-hospital',
    name: 'Royal Buckinghamshire Hospital',
    country: 'United Kingdom',
    city: 'Aylesbury', region: 'Buckinghamshire', lat: 51.8168, lng: -0.8148,
    address: 'Aylesbury, Buckinghamshire', phone: 'Unknown',
    url: 'https://www.royalbucks.co.uk/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Rehabilitation', 'Brain injury rehabilitation', 'Spinal cord injury rehabilitation', 'Physiotherapy', 'Nursing'],
    completeness: 86,
    researchHighlights: ['Official specialist rehabilitation hospital page', 'Matched brain injury, spinal cord, stroke, inpatient and outpatient evidence', 'Specialist rehabilitation hospital in Aylesbury'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Ospedale specialistico di riabilitazione ad Aylesbury con evidenze per danno cerebrale, lesione midollare e ictus.',
      en: 'A specialist rehabilitation hospital in Aylesbury with evidence for brain injury, spinal cord injury, and stroke rehabilitation.'
    }
  },
  {
    id: 'hobbs-rehabilitation-winchester',
    name: 'Hobbs Rehabilitation',
    country: 'United Kingdom',
    city: 'Winchester', region: 'Hampshire', lat: 51.0629, lng: -1.3160,
    address: 'Winchester, Hampshire', phone: 'Unknown',
    url: 'https://hobbsrehabilitation.co.uk/',
    conditions: ['stroke', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurological rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech and language therapy', 'Neuropsychology'],
    completeness: 84,
    researchHighlights: ['Official specialist neurological rehabilitation provider page', 'Matched neurological rehabilitation, spinal cord, stroke, inpatient and outpatient evidence', 'Specialist neurorehabilitation provider based in Hampshire'],
    features: ['spinal-cord', 'rehabilitation'],
    description: {
      it: 'Provider specialistico di riabilitazione neurologica nell’Hampshire con evidenze per ictus, lesione midollare, ricovero e ambulatorio.',
      en: 'A specialist neurological rehabilitation provider in Hampshire with evidence for stroke, spinal cord injury, inpatient and outpatient care.'
    }
  },
  {
    id: 'wellington-hospital-rehabilitation',
    name: 'The Wellington Hospital - Rehabilitation Centre',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.5310, lng: -0.1740,
    address: 'London, Greater London', phone: 'Unknown',
    url: 'https://www.hcahealthcare.co.uk/locations/hospitals/the-wellington-hospital',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neuro-rehabilitation', 'Neurological rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech and language therapy'],
    completeness: 87,
    researchHighlights: ['Official HCA UK hospital page', 'Matched neurological rehabilitation, acquired brain injury, spinal cord, stroke, MS and Parkinson evidence', 'Private London hospital with rehabilitation centre evidence'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Ospedale privato londinese con evidenze per neuroriabilitazione, danno cerebrale acquisito, lesione midollare, ictus, MS e Parkinson.',
      en: 'A private London hospital with evidence for neurorehabilitation, acquired brain injury, spinal cord injury, stroke, MS, and Parkinson disease.'
    }
  },
  {
    id: 'hollanden-park-renovo',
    name: 'Hollanden Park Hospital - Renovo Care Group',
    country: 'United Kingdom',
    city: 'Hildenborough', region: 'Kent', lat: 51.2160, lng: 0.2280,
    address: 'Hildenborough, Kent', phone: 'Unknown',
    url: 'https://hollandenparkhospital.co.uk/',
    conditions: ['tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorehabilitation', 'Neurological care', 'Complex care', 'Therapies', 'Nursing'],
    completeness: 83,
    researchHighlights: ['Official Renovo Care Group hospital page', 'Matched neurorehabilitation, acquired brain injury, spinal injury and neurological care evidence', 'Specialist rehabilitation and neurological care hospital in Kent'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Ospedale Renovo Care nel Kent con evidenze per neuroriabilitazione, danno cerebrale acquisito, lesione spinale e cure neurologiche.',
      en: 'A Renovo Care hospital in Kent with evidence for neurorehabilitation, acquired brain injury, spinal injury, and neurological care.'
    }
  },
  {
    id: 'midland-centre-spinal-injuries-oswestry',
    name: 'Midland Centre for Spinal Injuries - RJAH',
    country: 'United Kingdom',
    city: 'Oswestry', region: 'Shropshire', lat: 52.8853, lng: -3.0340,
    address: 'The Robert Jones and Agnes Hunt Orthopaedic Hospital, Oswestry', phone: 'Unknown',
    url: 'https://www.rjah.nhs.uk/our-services/midland-centre-for-spinal-injuries',
    conditions: ['spinal', 'pediatric', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Spinal injuries', 'Rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech and language therapy'],
    completeness: 90,
    researchHighlights: ['Official RJAH NHS spinal injuries centre page', 'Matched spinal cord injury and active rehabilitation programme evidence', 'Specialist inpatient rehabilitation beds and outpatient spinal injury pathways'],
    features: ['spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro NHS a Oswestry per lesioni midollari, con programma attivo di riabilitazione e percorsi di ricovero e ambulatoriali.',
      en: 'An NHS spinal injuries centre in Oswestry with an active rehabilitation programme and inpatient and outpatient pathways.'
    }
  },
  {
    id: 'glasgow-ins-national-spinal-unit',
    name: 'Institute of Neurological Sciences and Queen Elizabeth National Spinal Injuries Unit',
    country: 'United Kingdom',
    city: 'Glasgow', region: 'Scotland', lat: 55.8620, lng: -4.3370,
    address: 'Queen Elizabeth University Hospital, Glasgow', phone: 'Unknown',
    url: 'https://www.nhsggc.scot/hospitals-services/institute-of-neurological-sciences-and-spinal-unit',
    conditions: ['stroke', 'tbi', 'spinal', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurorehabilitation', 'Neurology', 'Neurosurgery', 'Neuropsychology', 'Spinal injuries'],
    completeness: 90,
    researchHighlights: ['Official NHS Greater Glasgow and Clyde neurosciences and spinal unit page', 'Page lists neurorehabilitation and the Queen Elizabeth National Spinal Injuries Unit', 'Specialist neurological sciences and spinal injury services at Queen Elizabeth University Hospital'],
    features: ['spinal-cord', 'brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro NHS di Glasgow con Institute of Neurological Sciences, neuroriabilitazione e National Spinal Injuries Unit.',
      en: 'A Glasgow NHS neurosciences centre with neurorehabilitation and the Queen Elizabeth National Spinal Injuries Unit.'
    }
  },
  {
    id: 'musgrave-park-regional-neurorehabilitation',
    name: 'Regional Neurorehabilitation Services - Musgrave Park Hospital',
    country: 'United Kingdom',
    city: 'Belfast', region: 'Northern Ireland', lat: 54.5680, lng: -5.9750,
    address: 'Musgrave Park Hospital, Belfast', phone: 'Unknown',
    url: 'https://belfasttrust.hscni.net/service/regional-neurorehabilitation-services',
    conditions: ['tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Regional Acquired Brain Injury Unit', 'Spinal Cord Injury Unit', 'Neurology Unit', 'Rehabilitation medicine', 'Specialist seating'],
    completeness: 89,
    researchHighlights: ['Official Belfast Trust regional neurorehabilitation service page', 'Page lists acquired brain injury and spinal cord injury units at Musgrave Park Hospital', 'Provides inpatient and outpatient rehabilitation under regional rehabilitation services'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Servizio regionale a Musgrave Park Hospital per neuroriabilitazione, danno cerebrale acquisito e lesione midollare.',
      en: 'A Musgrave Park Hospital regional service for neurorehabilitation, acquired brain injury, and spinal cord injury rehabilitation.'
    }
  },
  {
    id: 'chislehurst-neurological-rehabilitation-centre',
    name: 'Chislehurst Neurological Rehabilitation Centre',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.4184, lng: 0.0586,
    address: '15 Selby Close, Chislehurst, London BR7 5RU', phone: 'Unknown',
    url: 'https://activecaregroup.co.uk/location/chislehurst-rehabilitation-centre',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurological rehabilitation', 'Cognitive rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech and language therapy', 'Psychology'],
    completeness: 86,
    researchHighlights: ['Official Active Care Group neurological rehabilitation centre page', 'Matched brain injury, stroke, progressive neurological conditions and cognitive rehabilitation evidence', 'Specialist post-acute rehabilitation and long-term neurological care in southeast London'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro Active Care Group a Chislehurst per riabilitazione neurologica, danno cerebrale, ictus e condizioni neurologiche progressive.',
      en: 'An Active Care Group centre in Chislehurst for neurological rehabilitation, brain injury, stroke, and progressive neurological conditions.'
    }
  },
  {
    id: 'blackheath-brain-injury-rehabilitation-centre',
    name: 'Blackheath Brain Injury Rehabilitation Centre',
    country: 'United Kingdom',
    city: 'London', region: 'Greater London', lat: 51.4720, lng: -0.0175,
    address: '80-82 Blackheath Hill, London', phone: 'Unknown',
    url: 'https://activecaregroup.co.uk/location/blackheath-rehabilitation-centre',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor', 'neuromuscular'],
    technologies: ['rehab'],
    modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Brain injury rehabilitation', 'Neurological rehabilitation', 'Rehabilitation medicine', 'Therapies', 'Nursing'],
    completeness: 87,
    researchHighlights: ['Official Active Care Group brain injury rehabilitation centre page', 'Matched acquired brain injury and complex neurological condition evidence', 'Specialist inpatient Level 1 and Level 2 rehabilitation profile'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro Active Care Group a Blackheath per riabilitazione specialistica in ricovero dopo danno cerebrale e condizioni neurologiche complesse.',
      en: 'An Active Care Group centre in Blackheath for specialist inpatient rehabilitation after brain injury and complex neurological conditions.'
    }
  },
  {
    id: 'frenchay-brain-injury-rehabilitation-centre',
    name: 'Frenchay Brain Injury Rehabilitation Centre',
    country: 'United Kingdom',
    city: 'Bristol', region: 'South Gloucestershire', lat: 51.4988, lng: -2.5222,
    address: 'Briggs Road, Frenchay, Winterbourne', phone: 'Unknown',
    url: 'https://activecaregroup.co.uk/location/frenchay-rehabilitation-centre',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['rehab'],
    modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Brain injury rehabilitation', 'Neurological rehabilitation', 'Rehabilitation medicine', 'Therapies', 'Nursing'],
    completeness: 88,
    researchHighlights: ['Official Active Care Group Frenchay neurological rehabilitation centre page', 'Matched acquired or traumatic brain injury and complex stroke evidence', 'Specialist Level 1 and Level 2 rehabilitation profile in Bristol'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Centro Active Care Group a Bristol per neuroriabilitazione dopo danno cerebrale acquisito o traumatico e ictus complesso.',
      en: 'An Active Care Group centre in Bristol for neurorehabilitation after acquired or traumatic brain injury and complex stroke.'
    }
  },
  {
    id: 'hothfield-neurological-rehabilitation-centre',
    name: 'Hothfield Neurological Rehabilitation Centre',
    country: 'United Kingdom',
    city: 'Hothfield', region: 'Kent', lat: 51.1656, lng: 0.8119,
    address: 'Hothfield, Kent', phone: 'Unknown',
    url: 'https://activecaregroup.co.uk/location/hothfield-rehabilitation-centre',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: ['rehab', 'assistive-tech'],
    modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurological rehabilitation', 'Neurorehabilitation', 'Brain injury rehabilitation', 'Therapies', 'Nursing'],
    completeness: 86,
    researchHighlights: ['Official Active Care Group Hothfield neurological rehabilitation centre page', 'Matched brain injury, spinal injury, stroke and neurological condition evidence', 'Specialist neurological rehabilitation and residential care centre in Kent'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro Active Care Group nel Kent per neuroriabilitazione, danno cerebrale, lesione spinale e ictus.',
      en: 'An Active Care Group centre in Kent for neurorehabilitation, brain injury, spinal injury, and stroke.'
    }
  },
  {
    id: 'murdostoun-brain-injury-rehabilitation-centre',
    name: 'Murdostoun Brain Injury Rehabilitation and Neurological Care Centre',
    country: 'United Kingdom',
    city: 'Wishaw', region: 'North Lanarkshire', lat: 55.7948, lng: -3.8751,
    address: 'Newmains, Wishaw, North Lanarkshire', phone: 'Unknown',
    url: 'https://activecaregroup.co.uk/location/murdostoun-rehabilitation-centre',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor', 'neuromuscular'],
    technologies: ['rehab'],
    modes: ['inpatient'], access: ['private', 'insurance'],
    disciplines: ['Brain injury rehabilitation', 'Neurological rehabilitation', 'Specialist inpatient rehabilitation', 'Therapies', 'Nursing'],
    completeness: 87,
    researchHighlights: ['Official Active Care Group Murdostoun neurological rehabilitation centre page', 'Matched brain injury, spinal cord injury, stroke and specialist inpatient rehabilitation evidence', 'North Lanarkshire service for brain injury and complex neurological rehabilitation'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro Active Care Group in North Lanarkshire per riabilitazione neurologica in ricovero, danno cerebrale, lesione midollare e ictus.',
      en: 'An Active Care Group centre in North Lanarkshire for inpatient neurological rehabilitation, brain injury, spinal cord injury, and stroke.'
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
    id: 'rehab-basel-neurorehabilitation',
    name: 'REHAB Basel',
    country: 'Switzerland',
    city: 'Basel', region: 'Basel-Stadt', lat: 47.5708, lng: 7.5596,
    address: 'Im Burgfelderhof 40, 4055 Basel', phone: '+41 61 325 00 00',
    url: 'https://www.rehab.ch/en/medical-services/neurorehabilitation',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public', 'insurance'],
    disciplines: ['Neurorehabilitation', 'Neurological rehabilitation', 'Paraplegiology', 'Neuropsychology', 'Speech therapy'],
    completeness: 93,
    researchHighlights: ['Official REHAB Basel neurorehabilitation page', 'Matched traumatic or illness-related brain damage, motor, speech and mental ability evidence', 'Clinic describes itself as a clinic for neurorehabilitation and paraplegiology'],
    features: ['brain-injury', 'spinal-cord', 'early-rehab'],
    description: {
      it: 'Clinica di Basilea per neuroriabilitazione e paraplegiologia, con presa in carico di danni cerebrali traumatici o da malattia e servizi ambulatoriali.',
      en: 'A Basel clinic for neurorehabilitation and paraplegiology, treating traumatic or illness-related brain damage with inpatient and outpatient pathways.'
    }
  },
  {
    id: 'crr-suva-sion-neuroreadaptation',
    name: 'Clinique romande de réadaptation',
    country: 'Switzerland',
    city: 'Sion', region: 'Valais', lat: 46.2314, lng: 7.3860,
    address: 'Avenue Grand-Champsec 90, 1950 Sion', phone: '+41 27 603 30 30',
    url: 'https://www.crr-suva.ch/clinique-readaptation/readaptation-neurologie-118.html',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neuroréadaptation', 'Physiothérapie', 'Ergothérapie', 'Logopédie', 'Neuropsychologie', 'Réadaptation professionnelle'],
    completeness: 90,
    researchHighlights: ['Official CRR Sion neuroréadaptation page', 'Matched central and peripheral nervous-system rehabilitation evidence', 'Official page lists therapy, neuropsychology and brain-injury care evidence'],
    features: ['brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Clinica romanda di riadattamento a Sion con neuroriabilitazione per lesioni cerebrali e disturbi del sistema nervoso centrale o periferico.',
      en: 'A Sion rehabilitation clinic with neurorehabilitation for brain lesions and central or peripheral nervous-system conditions.'
    }
  },
  {
    id: 'klinik-lengg-zurich',
    name: 'Klinik Lengg',
    country: 'Switzerland',
    city: 'Zurich', region: 'Zurich', lat: 47.3530, lng: 8.5760,
    address: 'Bleulerstrasse 60, 8008 Zürich', phone: '+41 44 387 67 67',
    url: 'https://kliniklengg.ch/',
    conditions: ['stroke', 'ms', 'parkinson', 'epilepsy', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'neuromodulation'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Epileptologie', 'Neuropsychologie', 'Medizinische Therapien', 'Robotikzentrum'],
    completeness: 90,
    researchHighlights: ['Official site calls Klinik Lengg a Zurich competence centre for epileptology and neurological rehabilitation', 'Official navigation lists Hirnschlag, multiple sclerosis and Parkinson services', 'Official page lists a Robotikzentrum within medical therapies'],
    features: ['robotics', 'parkinson', 'epilepsy'],
    description: {
      it: 'Centro zurighese per epilettologia e riabilitazione neurologica, con Zürcher RehaZentrum Lengg, servizi per ictus, sclerosi multipla, Parkinson e robotica.',
      en: 'A Zurich centre for epileptology and neurological rehabilitation, with services for stroke, multiple sclerosis, Parkinson and rehabilitation robotics.'
    }
  },
  {
    id: 'cereneo-vitznau',
    name: 'cereneo',
    country: 'Switzerland',
    city: 'Vitznau', region: 'Lucerne', lat: 47.0106, lng: 8.4848,
    address: 'Seestrasse 18, 6354 Vitznau', phone: '+41 41 399 67 00',
    url: 'https://cereneo.ch/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'vr', 'tele', 'gait'], modes: ['inpatient', 'outpatient', 'home'], access: ['private', 'insurance'],
    disciplines: ['Neurorehabilitation', 'Neurology', 'Inpatient rehabilitation', 'Home rehabilitation', 'Online rehabilitation', 'Therapy'],
    completeness: 91,
    researchHighlights: ['Official cereneo page describes a Swiss neurorehabilitation clinic', 'Matched stroke, Parkinson, multiple sclerosis and traumatic brain injury evidence', 'Official page lists inpatient, home and online rehabilitation'],
    robotNotes: ['Official page references robotics, VR games and technology-supported treatment methods.'],
    features: ['robotics', 'tele-rehab', 'research'],
    description: {
      it: 'Clinica svizzera di neurorehabilitation con sedi sul Lago dei Quattro Cantoni, programmi personalizzati per ictus, Parkinson, MS e trauma cranico, anche a casa e online.',
      en: 'A Swiss neurorehabilitation clinic on Lake Lucerne with personalized programmes for stroke, Parkinson, MS and traumatic brain injury, including home and online rehabilitation.'
    }
  },
  {
    id: 'clinica-hildebrand-brissago',
    name: 'Clinica Hildebrand Centro di riabilitazione Brissago',
    country: 'Switzerland',
    city: 'Brissago', region: 'Ticino', lat: 46.1206, lng: 8.7095,
    address: 'Via Crodolo 18, 6614 Brissago', phone: '+41 91 786 86 86',
    url: 'https://www.clinica-hildebrand.ch/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Riabilitazione neurologica', 'Fisioterapia', 'Ergoterapia', 'Logopedia', 'Neuropsicologia'],
    completeness: 89,
    researchHighlights: ['Official Clinica Hildebrand site lists riabilitazione neurologica', 'Matched stroke, traumatic brain injury, multiple sclerosis, Parkinson and spinal cord pathology evidence', 'Official page distinguishes neurological rehabilitation from orthopaedic rehabilitation'],
    features: ['brain-injury', 'spinal-cord', 'parkinson'],
    description: {
      it: 'Centro ticinese di riabilitazione neurologica per ictus, trauma cranico, sclerosi multipla, Parkinson, patologie del midollo spinale e neuropatie.',
      en: 'A Ticino neurological rehabilitation centre for stroke, brain injury, multiple sclerosis, Parkinson, spinal cord pathologies and neuropathies.'
    }
  },
  {
    id: 'rehaklinik-bellikon-neuro',
    name: 'Rehaklinik Bellikon',
    country: 'Switzerland',
    city: 'Bellikon', region: 'Aargau', lat: 47.3898, lng: 8.3446,
    address: 'Mutschellenstrasse 2, 5454 Bellikon', phone: '+41 56 485 51 11',
    url: 'https://www.rehabellikon.ch/neurologische-rehabilitation',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Traumatische Hirnverletzung', 'Schlaganfall/Hirnblutung', 'Tages-Rehabilitation', 'Neuropsychologisches Assessment'],
    completeness: 88,
    researchHighlights: ['Official Rehaklinik Bellikon neurological rehabilitation page', 'Matched brain injury, traumatic brain injury and stroke/brain haemorrhage evidence', 'Official page lists inpatient, day-rehabilitation and outpatient specialist consultation pathways'],
    features: ['brain-injury', 'stroke', 'vocational-reintegration'],
    description: {
      it: 'Clinica riabilitativa in Argovia con riabilitazione neurologica per lesioni cerebrali, trauma cranico, ictus/emorragia cerebrale e reintegrazione.',
      en: 'An Aargau rehabilitation clinic with neurological rehabilitation for brain injury, traumatic brain injury, stroke/brain haemorrhage and reintegration.'
    }
  },
  {
    id: 'clinique-valmont-glion',
    name: 'Clinique Valmont',
    country: 'Switzerland',
    city: 'Glion sur Montreux', region: 'Vaud', lat: 46.4263, lng: 6.9309,
    address: 'Route de Valmont, 1823 Glion sur Montreux', phone: '+41 21 962 35 35',
    url: 'https://www.swissmedical.net/fr/hopitaux/valmont',
    conditions: ['stroke', 'ms', 'parkinson', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'gait'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Rééducation neurologique', 'Neurologie', 'Neuropsychologie', 'Ergothérapie', 'Logopédie', 'Physiothérapie'],
    completeness: 88,
    researchHighlights: ['Official Swiss Medical Network page lists rééducation neurologique', 'Matched AVC, Parkinson and neuropsychology evidence', 'Official structured data lists neurological rehabilitation services and devices including MindMotion, REAplan and Lyra Gait'],
    robotNotes: ['Official structured data lists MindMotion, REAplan and Lyra Gait.'],
    features: ['robotics', 'gait-training', 'parkinson'],
    description: {
      it: 'Clinica di riabilitazione a Glion con rieducazione neurologica per AVC, Parkinson, sclerosi multipla e neuropsicologia, con tecnologie di supporto al cammino e agli arti superiori.',
      en: 'A Glion rehabilitation clinic with neurological rehabilitation for stroke, Parkinson, multiple sclerosis and neuropsychology, supported by gait and upper-limb technologies.'
    }
  },
  {
    id: 'repty-gcr-tarnowskie-gory',
    name: 'Górnośląskie Centrum Rehabilitacji "Repty"',
    country: 'Poland',
    city: 'Tarnowskie Góry', region: 'Silesian Voivodeship', lat: 50.4386, lng: 18.8289,
    address: 'ul. Śniadeckiego 1, 42-600 Tarnowskie Góry', phone: '+48 32 390 14 14',
    url: 'https://repty.pl/',
    conditions: ['stroke', 'ms', 'cognitive', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public'],
    disciplines: ['Rehabilitacja neurologiczna', 'Rehabilitacja poszpitalna', 'Poradnia rehabilitacyjna', 'Ośrodek rehabilitacji dziennej', 'Fizjoterapia'],
    completeness: 88,
    researchHighlights: ['Official hospital site lists neurological rehabilitation and post-hospital rehabilitation', 'Official metadata matches neurology, stroke-like conditions, multiple sclerosis, paralysis and paresis', 'Site navigation lists inpatient departments, rehabilitation clinic and day rehabilitation centre'],
    features: ['stroke', 'rehabilitation'],
    description: {
      it: 'Ospedale riabilitativo pubblico in Slesia con riabilitazione neurologica, post-ospedaliera, ambulatoriale e diurna.',
      en: 'A public rehabilitation hospital in Silesia with neurological, post-hospital, outpatient and day rehabilitation pathways.'
    }
  },
  {
    id: 'ckr-konstancin',
    name: 'Centrum Kompleksowej Rehabilitacji Konstancin',
    country: 'Poland',
    city: 'Konstancin-Jeziorna', region: 'Masovian Voivodeship', lat: 52.0766, lng: 21.1246,
    address: 'ul. Gąsiorowskiego 12/14, 05-510 Konstancin-Jeziorna', phone: '+48 22 703 08 88',
    url: 'https://ckr.pl/rehabilitacja/',
    conditions: ['stroke', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'neuromotor'],
    technologies: ['exoskeleton', 'gait'],
    modes: ['inpatient', 'outpatient', 'home'], access: ['public', 'private'],
    disciplines: ['Oddział rehabilitacyjny', 'Rehabilitacja neurologiczna', 'Przychodnia rehabilitacyjna', 'Rehabilitacja domowa', 'Egzoszkielet'],
    completeness: 91,
    researchHighlights: ['Official site states rehabilitation for stroke, neurosurgery, multiple sclerosis, Parkinson and polyneuropathies', 'Official exoskeleton page references lower-limb paresis/paralysis including complete spinal cord interruption', 'Official contact and service pages list NFZ and paid rehabilitation beds'],
    robotNotes: ['Official CKR pages list an exoskeleton package for gait support.'],
    features: ['spinal-cord', 'parkinson', 'gait-training'],
    description: {
      it: 'Centro riabilitativo a Konstancin-Jeziorna con ricovero, ambulatorio, NFZ e percorsi privati per ictus, lesione midollare, MS e Parkinson.',
      en: 'A Konstancin-Jeziorna rehabilitation centre with inpatient, outpatient, NFZ-funded and private pathways for stroke, spinal injury, MS and Parkinson.'
    }
  },
  {
    id: 'origin-otwock',
    name: 'Centrum Origin Otwock',
    country: 'Poland',
    city: 'Otwock', region: 'Masovian Voivodeship', lat: 52.1041, lng: 21.2621,
    address: 'ul. Bernardyńska 13, 05-400 Otwock', phone: 'Unknown',
    url: 'https://www.originpolska.com/placowka/centrum-origin-otwock/',
    conditions: ['stroke', 'tbi', 'spinal', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'gait'],
    modes: ['inpatient', 'outpatient'], access: ['private'],
    disciplines: ['Rehabilitacja neurologiczna', 'Udar mózgu', 'Urazy rdzenia kręgowego', 'Urazy mózgowo-czaszkowe', 'Choroba Parkinsona', 'Robotyka rehabilitacyjna'],
    completeness: 89,
    researchHighlights: ['Official Origin Polska site describes private neurological and post-accident rehabilitation in Otwock and Kraków', 'Official programme navigation lists stroke, spinal cord injury, traumatic brain injury, Parkinson and neuropathy programmes', 'Official site lists rehabilitation robotics including ReoAmbulator and upper-limb robotic therapy'],
    robotNotes: ['Official Origin Polska content references ReoAmbulator gait re-education and Reo-Go upper-limb robotic therapy.'],
    features: ['robotics', 'spinal-cord', 'brain-injury'],
    description: {
      it: 'Centro Origin a Otwock per riabilitazione neurologica privata, con programmi per ictus, trauma cranico, lesione midollare, Parkinson e robotica.',
      en: 'Origin’s Otwock centre for private neurological rehabilitation, with programmes for stroke, brain injury, spinal cord injury, Parkinson and robotics.'
    }
  },
  {
    id: 'origin-krakow',
    name: 'Centrum Origin Kraków',
    country: 'Poland',
    city: 'Kraków', region: 'Lesser Poland Voivodeship', lat: 50.0660, lng: 20.0169,
    address: 'Osiedle Młodości 10, 31-908 Kraków', phone: 'Unknown',
    url: 'https://www.originpolska.com/placowka/centrum-origin-krakow/',
    conditions: ['stroke', 'tbi', 'spinal', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'gait'],
    modes: ['inpatient', 'outpatient'], access: ['private'],
    disciplines: ['Rehabilitacja neurologiczna', 'Udar mózgu', 'Urazy rdzenia kręgowego', 'Urazy mózgowo-czaszkowe', 'Choroba Parkinsona', 'Robotyka rehabilitacyjna'],
    completeness: 89,
    researchHighlights: ['Official Origin Polska site describes private neurological and post-accident rehabilitation in Otwock and Kraków', 'Official programme navigation lists stroke, spinal cord injury, traumatic brain injury, Parkinson and neuropathy programmes', 'Official map data lists the Kraków rehabilitation centre address and coordinates'],
    robotNotes: ['Official Origin Polska content references ReoAmbulator gait re-education and Reo-Go upper-limb robotic therapy.'],
    features: ['robotics', 'spinal-cord', 'brain-injury'],
    description: {
      it: 'Centro Origin a Cracovia per riabilitazione neurologica privata, con programmi per ictus, trauma cranico, lesione midollare, Parkinson e neuropatie.',
      en: 'Origin’s Kraków centre for private neurological rehabilitation, with programmes for stroke, brain injury, spinal cord injury, Parkinson and neuropathy.'
    }
  },
  {
    id: 'constance-care-kierszek',
    name: 'Constance Care',
    country: 'Poland',
    city: 'Kierszek', region: 'Masovian Voivodeship', lat: 52.0970, lng: 21.0734,
    address: 'ul. Działkowa 125, 05-500 Kierszek', phone: '+48 22 123 92 83',
    url: 'https://constancecare.pl/pl/rehabilitacja-neurologiczna',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromotor', 'cognitive'],
    technologies: ['rehab'],
    modes: ['inpatient'], access: ['private'],
    disciplines: ['Rehabilitacja neurologiczna', 'Rehabilitacja po udarze', 'Rehabilitacja po urazie rdzenia kręgowego', 'Neuropsychologia', 'Neurologopedia'],
    completeness: 88,
    researchHighlights: ['Official site describes Constance Care as a private neurological and post-stroke rehabilitation centre', 'Official pages list rehabilitation after stroke, traumatic brain injury, spinal cord injury, neurological operations, MS and Parkinson', 'Official contact page provides centre address, phone and map coordinates'],
    features: ['stroke', 'spinal-cord', 'brain-injury'],
    description: {
      it: 'Centro privato vicino a Konstancin-Jeziorna per riabilitazione neurologica intensiva, post-ictus, trauma cranico, lesione midollare, MS e Parkinson.',
      en: 'A private centre near Konstancin-Jeziorna for intensive neurological, post-stroke, brain injury, spinal injury, MS and Parkinson rehabilitation.'
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
    id: 'rehabilitacni-ustav-kladruby',
    name: 'Rehabilitační ústav Kladruby',
    country: 'Czech Republic',
    city: 'Kladruby u Vlašimi', region: 'Central Bohemian Region', lat: 49.7339, lng: 14.9568,
    address: 'Kladruby 30, 257 62 Kladruby u Vlašimi', phone: '+420 317 881 111',
    url: 'https://www.rehabilitace.cz/poskytovana-pece/kranioprogram/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Komplexní intenzivní rehabilitační péče', 'Fyzioterapie', 'Ergoterapie', 'Logopedie', 'Psychologie', 'Spinální rehabilitace'],
    completeness: 88,
    researchHighlights: ['Official Kranioprogram page covers acquired brain injury after ischemic or hemorrhagic stroke and craniotrauma', 'Official page requires ability to complete complex rehabilitation at least four hours daily across physiotherapy, occupational therapy, speech therapy and psychology', 'Official site also lists a spinal rehabilitation unit for patients with recent spinal cord impairment'],
    features: ['brain-injury', 'stroke-rehab', 'spinal-cord', 'intensive-rehab'],
    description: {
      it: 'Istituto pubblico ceco di riabilitazione a Kladruby con kranioprogram per danno cerebrale acquisito, ictus e trauma cranico, oltre a unità di riabilitazione spinale.',
      en: 'A Czech public rehabilitation institute in Kladruby with a cranioprogramme for acquired brain injury, stroke and craniotrauma, plus a spinal rehabilitation unit.'
    }
  },
  {
    id: 'rehabilitacni-ustav-hrabyne-chuchelna',
    name: 'Rehabilitační ústav Hrabyně a Chuchelná',
    country: 'Czech Republic',
    city: 'Hrabyně', region: 'Moravian-Silesian Region', lat: 49.8827, lng: 18.0538,
    address: 'Hrabyně 204, 747 67 Hrabyně 3', phone: '+420 553 603 111',
    url: 'https://www.ruhrabyne.cz/kranio-iktovy-program',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public', 'insurance'],
    disciplines: ['Kranio-iktový program', 'Spinální program', 'Fyzioterapie', 'Ergoterapie', 'Logopedie', 'Psychologie'],
    completeness: 89,
    researchHighlights: ['Official kranio-iktový programme admits adults with acquired brain injury after stroke or craniotrauma', 'Programme requires an intensive rehabilitation programme of at least four hours daily across multiple rehabilitation specialties', 'Official spinal programme page describes specialist care for traumatic and non-traumatic spinal cord injury and a 30-bed spinal rehabilitation unit'],
    features: ['brain-injury', 'stroke-rehab', 'spinal-cord', 'intensive-rehab'],
    description: {
      it: 'Istituto pubblico di riabilitazione a Hrabyně/Chuchelná con programma kranio-ictale per ictus e trauma cranico e programma spinale specialistico.',
      en: 'A public rehabilitation institute in Hrabyně/Chuchelná with a cranio-stroke programme for stroke and craniotrauma and a specialist spinal programme.'
    }
  },
  {
    id: 'hamzova-lecebna-luze',
    name: 'Hamzova odborná léčebna pro děti a dospělé',
    country: 'Czech Republic',
    city: 'Luže', region: 'Pardubice Region', lat: 49.8785, lng: 16.0365,
    address: 'Košumberk 80, 538 54 Luže', phone: '+420 469 648 111',
    url: 'https://www.hamzova-lecebna.cz/kontakty/kontaktni-informace/',
    conditions: ['stroke', 'spinal', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'hippotherapy'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Rehabilitačně-neurologická péče', 'Spinální rehabilitační jednotka', 'Kranioprogram', 'Dětská rehabilitace', 'Robotické centrum', 'Logopedie'],
    completeness: 88,
    researchHighlights: ['Official pavilion listing includes multiple rehabilitation-neurological pavilions including CMP/stroke', 'Official site lists a spinal rehabilitation unit, cranioprogram and pediatric rehabilitation services', 'The same official listing includes a robotic centre, diagnostics, speech therapy, occupational therapy and physiotherapy'],
    features: ['stroke-rehab', 'spinal-cord', 'pediatric-rehab', 'robotics'],
    description: {
      it: 'Istituto ceco di riabilitazione per bambini e adulti a Luže-Košumberk, con padiglioni neurologico-riabilitativi per CMP/ictus, programma spinale, kranioprogram e centro robotico.',
      en: 'A Czech rehabilitation institute for children and adults in Luže-Košumberk, with rehabilitation-neurological pavilions for stroke/CMP, a spinal unit, cranioprogramme and robotic centre.'
    }
  },
  {
    id: 'sanatoria-klimkovice-neurorehabilitace',
    name: 'Sanatoria Klimkovice',
    country: 'Czech Republic',
    city: 'Klimkovice', region: 'Moravian-Silesian Region', lat: 49.8071, lng: 18.0989,
    address: 'Hýlov 24, 742 84 Klimkovice', phone: '',
    url: 'https://www.sanatoria-klimkovice.cz/intenzita/a-374/',
    conditions: ['stroke', 'tbi', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Intenzivní neurorehabilitační pobyty', 'Fyzioterapie', 'Ergoterapie', 'Klinická logopedie', 'Klinická psychologie'],
    completeness: 86,
    researchHighlights: ['Official site describes Sanatoria Klimkovice as an expert treatment institute and neurorehabilitation centre', 'Official INTENZITA+ page lists intensive neurorehabilitation stays for adults after neurological disease or injury', 'Official pediatric treatment page lists post-stroke states, post-injury states and most neurological diagnoses including cerebral palsy'],
    features: ['intensive-neurorehab', 'stroke-rehab', 'brain-injury', 'pediatric-rehab'],
    description: {
      it: 'Centro ceco di neuro-riabilitazione a Klimkovice con soggiorni intensivi per adulti e bambini, indicazioni neurologiche, CMP/ictus e danno cerebrale acquisito.',
      en: 'A Czech neurorehabilitation centre in Klimkovice with intensive adult and pediatric stays for neurological disease, stroke/CMP and acquired brain injury.'
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
    id: 'itk-taastusravikliinik-tallinn',
    name: 'Ida-Tallinna Keskhaigla Taastusravikliinik',
    country: 'Estonia',
    city: 'Tallinn', region: 'Harju County', lat: 59.41682, lng: 24.73878,
    address: 'Pärnu mnt 104, Tallinn', phone: '+372 666 1900',
    url: 'https://www.itk.ee/patsiendile/kliinikud/taastusravikliinik',
    conditions: ['neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Statsionaarne taastusravi', 'Ambulatoorne taastusravi', 'Füsioteraapia', 'Tegevusteraapia', 'Logopeed', 'Psühholoog'],
    completeness: 82,
    researchHighlights: ['Official page says the rehabilitation clinic works with neurological, cardiological, rheumatological, post-traumatic and orthopedic patients', 'Official page lists inpatient and outpatient rehabilitation centres', 'Official multidisciplinary team includes rehabilitation physician, physiotherapist, occupational therapist, speech therapist, psychologist and social worker'],
    features: ['rehabilitation', 'multidisciplinary'],
    description: {
      it: 'Clinica pubblica di riabilitazione dell’Ida-Tallinna Keskhaigla a Tallinn, con percorsi residenziali e ambulatoriali per pazienti neurologici e team multidisciplinare.',
      en: 'A public rehabilitation clinic at East Tallinn Central Hospital with inpatient and outpatient pathways for neurological patients and a multidisciplinary team.'
    }
  },
  {
    id: 'adeli-rehabilitation-center-tallinn',
    name: 'Adeli Rahvusvaheline Rehabilitatsioonikeskus',
    country: 'Estonia',
    city: 'Tallinn', region: 'Harju County', lat: 59.4309, lng: 24.7443,
    address: 'Endla 4, 10142 Tallinn', phone: '+372 654 4840',
    url: 'https://www.adeli.ee/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['fes'], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Füsioteraapia', 'Tegevusteraapia', 'Logopeed', 'Psühholoog', 'Eripedagoog', 'FES elektrofunktsionaalne stimulatsioon'],
    completeness: 87,
    researchHighlights: ['Official Estonian page says Adeli provides evidence-based complex rehabilitation after stroke and brain/spinal cord trauma', 'Official page also names MS, Parkinson disease, children with PCI/cerebral palsy and speech/developmental disorders', 'Official English page describes comprehensive multidisciplinary rehabilitation for adult and pediatric neurological, musculoskeletal and developmental disorders with inpatient and outpatient services'],
    features: ['stroke-rehab', 'brain-injury', 'spinal-cord', 'pediatric-rehab'],
    description: {
      it: 'Centro privato/internazionale di riabilitazione a Tallinn per ictus, traumi cranio-midollari, SM, Parkinson e bambini con PCI/paralisi cerebrale, con servizi residenziali e ambulatoriali.',
      en: 'A private/international rehabilitation centre in Tallinn for stroke, brain and spinal cord trauma, MS, Parkinson and children with cerebral palsy/PCI, with inpatient and outpatient services.'
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
    id: 'semmelweis-rehabilitation-clinic-budapest',
    name: 'Semmelweis University Rehabilitation Clinic',
    country: 'Hungary',
    city: 'Budapest', region: 'Budapest', lat: 47.5031, lng: 18.9665,
    address: '1121 Budapest, Szanatórium u. 19.', phone: '+36 1 391 1900',
    url: 'https://semmelweis.hu/rehabilitaciosklinika/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'cognitive', 'neuromotor'],
    technologies: ['fes'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Agysérültek rehabilitációja', 'Gerincvelősérültek rehabilitációja', 'Fizioterápia', 'Ergoterápia', 'Logopédia', 'Pszichológia', 'Sportterápia'],
    completeness: 90,
    researchHighlights: ['Official Semmelweis page says the clinic is the successor of the former National Institute for Medical Rehabilitation and is the highest progressive level rehabilitation provider', 'Official brain-injury department page lists rehabilitation after traumatic brain injury, stroke and other neurological-origin rehabilitation needs including MS, neuropathy and Guillain-Barre syndrome', 'Official spinal-cord pages list dedicated spinal cord injury and early tetraplegic rehabilitation departments'],
    features: ['brain-injury', 'spinal-cord', 'stroke-rehab', 'research'],
    description: {
      it: 'Clinica universitaria pubblica di Budapest, erede dell’OORI, con riabilitazione per lesioni cerebrali, ictus, lesioni midollari, SM e altre condizioni neurologiche.',
      en: 'A public university rehabilitation clinic in Budapest, successor to OORI, with rehabilitation for brain injury, stroke, spinal cord injury, MS and other neurological conditions.'
    }
  },
  {
    id: 'university-debrecen-rehabilitation-clinic',
    name: 'University of Debrecen Medical Rehabilitation and Physical Medicine Clinic',
    country: 'Hungary',
    city: 'Debrecen', region: 'Hajdú-Bihar County', lat: 47.5316, lng: 21.6168,
    address: 'Bartók Béla út 2-26., Debrecen', phone: 'Unknown',
    url: 'https://rehabilitacio.unideb.hu/',
    conditions: ['tbi', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'day', 'outpatient'], access: ['public'],
    disciplines: ['Orvosi rehabilitáció', 'Fizikális medicina', 'Fizioterápia', 'Gyógytorna', 'Neurológiai szakambulancia'],
    completeness: 82,
    researchHighlights: ['Official overview says the clinic has a unified 110-bed inpatient and 18-bed day-care rehabilitation service', 'Official page states high-progressivity rehabilitation for brain-injured and trauma patients', 'Official page also states care for chronic neurological patients, with outpatient neurological specialist clinic listed on the contact/search page'],
    features: ['brain-injury', 'rehabilitation'],
    description: {
      it: 'Clinica pubblica universitaria di Debrecen per medicina riabilitativa, con degenza, day hospital e percorsi per lesioni cerebrali e pazienti neurologici cronici.',
      en: 'A public university rehabilitation medicine clinic in Debrecen with inpatient, day-care and outpatient services for brain-injured and chronic neurological patients.'
    }
  },
  {
    id: 'szent-vincent-rehab-szeged',
    name: 'Szent Vincent Rehabilitációs Központ Szeged',
    country: 'Hungary',
    city: 'Szeged', region: 'Csongrád-Csanád County', lat: 46.2596, lng: 20.1371,
    address: '6724 Szeged, Bakay Nándor u. 50.', phone: '+36 70 652 0800',
    url: 'https://szentvincentrehab.hu/szeged/',
    conditions: ['stroke', 'ms', 'parkinson', 'neuromotor', 'cognitive'],
    technologies: ['robotics', 'tms'], modes: ['outpatient', 'day'], access: ['private'],
    disciplines: ['Neurológiai szakrendelés', 'Fizioterápia', 'Gyógytorna', 'Ergoterápia', 'Logopédia', 'Pszichológia', 'Robot asszisztált terápia', 'TMS terápia'],
    completeness: 86,
    researchHighlights: ['Official page targets patients after stroke and brain hemorrhage, Parkinson disease, Guillain-Barre syndrome and multiple sclerosis', 'Official page also lists neurodegenerative, peripheral, muscular dystrophy and traumatic conditions', 'Official services include neurological consultation, cognitive assessment, physiotherapy, occupational therapy, speech therapy, TMS and robot-assisted therapy'],
    features: ['stroke-rehab', 'robotics', 'rehabilitation'],
    description: {
      it: 'Centro privato di riabilitazione a Szeged per ictus, Parkinson, Guillain-Barré, SM e altri disturbi neurologici, con terapia robot-assistita e TMS.',
      en: 'A private rehabilitation centre in Szeged for stroke, Parkinson, Guillain-Barre, MS and other neurological disorders, with robot-assisted therapy and TMS.'
    }
  },
  {
    id: 'nrc-kovacova',
    name: 'Národné rehabilitačné centrum Kováčová',
    country: 'Slovakia',
    city: 'Kováčová', region: 'Banská Bystrica Region', lat: 48.6083, lng: 19.1067,
    address: 'Sládkovičova 1, 962 37 Kováčová', phone: 'Unknown',
    url: 'https://www.nrckovacova.sk/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor'],
    technologies: ['robotics'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitácia', 'Spinálna rehabilitačná jednotka', 'Ergoterapia', 'Fyzioterapia', 'Vodoliečba', 'Ortopedická protetika'],
    completeness: 88,
    researchHighlights: ['Official indication spectrum says NRC Kováčová provides complex prevention, diagnostics and qualified rehabilitation treatment', 'Official indications include central nervous system injuries, spinal cord procedures and lasting spinal cord damage requiring admission to the spinal rehabilitation unit', 'Official indications also include brain trauma, acute cerebrovascular events and neuropathies; the homepage references robotic devices for gait rehabilitation'],
    features: ['spinal-cord', 'brain-injury', 'stroke-rehab', 'robotics'],
    description: {
      it: 'Centro nazionale pubblico di riabilitazione a Kováčová, con indicazioni ufficiali per lesioni del sistema nervoso centrale, lesioni midollari, traumi cerebrali e ictus.',
      en: 'A public national rehabilitation centre in Kováčová with official indications for central nervous system injury, spinal cord injury, brain trauma and stroke.'
    }
  },
  {
    id: 'adeli-medical-center-piestany',
    name: 'ADELI Medical Center',
    country: 'Slovakia',
    city: 'Piešťany', region: 'Trnava Region', lat: 48.5947, lng: 17.8382,
    address: 'Hlboká 45, 92101 Piešťany', phone: '+421 33 79 15 900',
    url: 'https://adelicenter.com/',
    conditions: ['stroke', 'tbi', 'spinal', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurorehabilitation', 'Adult rehabilitation', 'Children and youth rehabilitation', 'Physiotherapy', 'Multidisciplinary therapies'],
    completeness: 86,
    researchHighlights: ['Official homepage describes ADELI as an internationally renowned rehabilitation centre specializing in neurological impairments', 'Official adult programme text says neurorehabilitation is for neurological diseases, brain damage after hemorrhage and stroke, and consequences of brain and spinal cord accidents', 'Official site also describes programmes for children and adolescents with neurological diseases'],
    features: ['brain-injury', 'spinal-cord', 'stroke-rehab', 'pediatric-rehab'],
    description: {
      it: 'Centro privato/internazionale di neuro-riabilitazione a Piešťany per adulti e bambini con danni neurologici, ictus, lesioni cerebrali e midollari.',
      en: 'A private/international neurorehabilitation centre in Piešťany for adults and children with neurological impairment, stroke, brain injury and spinal cord injury.'
    }
  },
  {
    id: 'kul-neurorehabilitation-center-palanga',
    name: 'Klaipėdos universiteto ligoninė Neuroreabilitacijos centras Palanga',
    country: 'Lithuania',
    city: 'Palanga', region: 'Klaipėda County', lat: 55.9171, lng: 21.0686,
    address: 'Vytauto g. 153, Palanga', phone: '+370 460 41367',
    url: 'https://www.kul.lt/neurologijos-centras/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Neuroreabilitacijos centras', 'Spinalinės reabilitacijos skyrius', 'Neurologijos reabilitacijos skyrius', 'Kineziterapija', 'Ergoterapija', 'Logoterapija', 'Psichoterapija'],
    completeness: 92,
    researchHighlights: ['Official Klaipėdos University Hospital page says the Palanga neurorehabilitation centre treats spinal cord trauma, brain stroke, brain trauma, Parkinson disease, MS and neuromuscular disease', 'Official page lists tertiary and secondary medical rehabilitation for nervous-system diseases', 'Official page states 95 beds are dedicated to neurological rehabilitation and care is delivered by a multidisciplinary team'],
    features: ['stroke-rehab', 'brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Centro pubblico di neuro-riabilitazione a Palanga per ictus, trauma cranico, lesione midollare, Parkinson, SM e malattie neuromuscolari.',
      en: 'A public neurorehabilitation centre in Palanga for stroke, brain injury, spinal cord injury, Parkinson disease, MS and neuromuscular conditions.'
    }
  },
  {
    id: 'abromiskes-rehabilitation-hospital',
    name: 'Abromiškių reabilitacijos ligoninė',
    country: 'Lithuania',
    city: 'Abromiškės', region: 'Vilnius County', lat: 54.7732, lng: 24.6587,
    address: 'Sanatorijos g. 72, Abromiškių k., Elektrėnų sav., LT-26130', phone: '+370 683 58803',
    url: 'https://www.abromiskes.lt/en/adult-rehabilitation/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurological diseases rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Psychology', 'Speech therapy', 'Social work'],
    completeness: 89,
    researchHighlights: ['Official adult rehabilitation page lists neurological diseases and conditions including stroke, brain and spinal injuries, Parkinson disease and multiple sclerosis', 'Official nervous-system page lists stroke, brain injuries, Parkinson disease, MS, spinal cord injury, neurodegenerative disease and polyneuropathy', 'Official page states treatment programmes are individualised and delivered by doctors, physiotherapists, occupational therapists, psychologists, speech therapists and social workers'],
    features: ['stroke-rehab', 'brain-injury', 'spinal-cord', 'rehabilitation'],
    description: {
      it: 'Ospedale di riabilitazione ad Abromiškės con percorsi neurologici per ictus, lesioni cerebrali e midollari, Parkinson, SM e patologie neurodegenerative.',
      en: 'A rehabilitation hospital in Abromiškės with neurological pathways for stroke, brain and spinal injuries, Parkinson disease, MS and neurodegenerative disease.'
    }
  },
  {
    id: 'kauno-klinikos-rehabilitation-clinic',
    name: 'Kauno klinikos Reabilitacijos klinika',
    country: 'Lithuania',
    city: 'Kaunas', region: 'Kaunas County', lat: 54.9177, lng: 23.9206,
    address: 'Eivenių g. 2, Kaunas, LT-50161', phone: '+370 37 327311',
    url: 'https://www.kaunoklinikos.lt/struktura-ir-kontaktai/profilines-klinikos/reabilitacijos-klinika/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['vr'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neuroreabilitacijos skyrius', 'Fizinės medicinos ir reabilitacijos skyrius', 'Kineziterapija', 'Logoterapija', 'Ergoterapija'],
    completeness: 90,
    researchHighlights: ['Official Kauno Klinikos page states the Rehabilitation Clinic includes a Neurorehabilitation Unit providing level III inpatient services', 'Official text says the unit treats severe biosocial impairment after head and spinal cord trauma or surgery, circulatory disorders and degenerative nervous-system disease', 'Official page lists modern stroke rehabilitation and neurological-patient rehabilitation training, and describes innovative methods including interactive and virtual-reality tools'],
    features: ['brain-injury', 'spinal-cord', 'stroke-rehab', 'research'],
    description: {
      it: 'Clinica universitaria pubblica di Kaunas con unità di neuro-riabilitazione di III livello per traumi cranio-midollari, disturbi circolatori e malattie neurologiche degenerative.',
      en: 'A public university clinic in Kaunas with a level III neurorehabilitation unit for brain and spinal trauma, circulatory disorders and degenerative nervous-system disease.'
    }
  },
  {
    id: 'santaros-rehabilitation-center-vilnius',
    name: 'Santaros klinikos Center of Rehabilitation, Physical and Sports Medicine',
    country: 'Lithuania',
    city: 'Vilnius', region: 'Vilnius County', lat: 54.7421, lng: 25.2803,
    address: 'Santariškių g. 2, Vilnius', phone: 'Unknown',
    url: 'https://www.santa.lt/center-of-rehabilitation-physical-and-sports-medicine-about-center/',
    conditions: ['stroke', 'spinal', 'neuromuscular', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Physical and rehabilitation medicine', 'Spinal cord injury programme', 'Stroke programme', 'Rehabilitation specialists'],
    completeness: 82,
    researchHighlights: ['Official Santaros Klinikos page describes a rehabilitation, physical and sports medicine centre in the university hospital', 'Official page lists UEMS-accredited PRM programmes for patients with spinal cord injury and patients after stroke', 'Official page also states programmes are developed for rare diseases including Huntington disease and that services are delivered by a qualified rehabilitation team'],
    features: ['spinal-cord', 'stroke-rehab', 'rehabilitation'],
    description: {
      it: 'Centro pubblico universitario di Vilnius con programmi riabilitativi accreditati per lesione midollare e post-ictus.',
      en: 'A public university hospital rehabilitation centre in Vilnius with accredited rehabilitation programmes for spinal cord injury and post-stroke care.'
    }
  },
  {
    id: 'rvul-inpatient-rehabilitation-vilnius',
    name: 'Respublikinė Vilniaus universitetinė ligoninė Stacionarinės reabilitacijos skyrius',
    country: 'Lithuania',
    city: 'Vilnius', region: 'Vilnius County', lat: 54.6714, lng: 25.2105,
    address: 'Šiltnamių g. 29, 04129 Vilnius', phone: '+370 5 276 4645',
    url: 'https://www.rvul.lt/index.php/struktura-ir-kontaktai/ligonines-skyriai/stacionarines-reabilitacijos-skyrius/',
    conditions: ['neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Stacionarinė reabilitacija', 'Fizinė medicina ir reabilitacija', 'Kineziterapija', 'Fizioterapija', 'Ergoterapija', 'Psichoterapija'],
    completeness: 78,
    researchHighlights: ['Official RVUL page says the inpatient rehabilitation department provides inpatient medical rehabilitation for patients with nervous-system and musculoskeletal diseases', 'Official page states the inpatient rehabilitation subunit has 40 beds and treats about 450 patients yearly', 'Official page lists physiotherapy, occupational therapy and psychotherapy procedures, including access to pool and therapeutic bath facilities'],
    features: ['rehabilitation', 'inpatient-rehab'],
    description: {
      it: 'Reparto pubblico di riabilitazione stazionaria a Vilnius per pazienti con malattie del sistema nervoso, con 40 letti e team di FMR.',
      en: 'A public inpatient rehabilitation department in Vilnius for patients with nervous-system diseases, with 40 beds and a PRM team.'
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
    id: 'sbkt-krapinske-toplice',
    name: 'Specijalna bolnica za medicinsku rehabilitaciju Krapinske Toplice',
    country: 'Croatia',
    city: 'Krapinske Toplice', region: 'Krapina-Zagorje County', lat: 46.0934, lng: 15.8382,
    address: 'Ulica Ljudevita Gaja 2, 49217 Krapinske Toplice', phone: '+385 49 383 100',
    url: 'https://www.sbkt.hr/KT/odjel-rehabilitaciju-kraniocerebralnih-bolesnika-akutnu-neurologiju/',
    conditions: ['stroke', 'tbi', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'vr', 'gait'],
    modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public'],
    disciplines: ['Neurološka rehabilitacija', 'Rehabilitacija kraniocerebralnih bolesnika', 'Akutna neurologija', 'Logopedija', 'Radna terapija', 'Fizioterapija'],
    completeness: 93,
    researchHighlights: ['Official site lists departments for neurological-patient rehabilitation and cranio-cerebral patient rehabilitation with acute neurology', 'Official cranio-cerebral department page lists 45 rehabilitation beds plus acute neurology beds', 'Official page describes multidisciplinary neurorehabilitation, brain-injury care, stroke neurology, robotic gait/hand rehabilitation and VR'],
    robotNotes: ['Official page references robot-assisted gait and hand rehabilitation plus virtual-reality rehabilitation.'],
    features: ['brain-injury', 'robotics', 'early-rehab'],
    description: {
      it: 'Ospedale speciale croato per neuroriabilitazione, trauma cranico, ictus e neurologia acuta, con riabilitazione robot-assistita e VR.',
      en: 'A Croatian special rehabilitation hospital for neurorehabilitation, brain injury, stroke and acute neurology, with robot-assisted and VR rehabilitation.'
    }
  },
  {
    id: 'varazdinske-toplice-neurorehab',
    name: 'Specijalna bolnica za medicinsku rehabilitaciju Varaždinske Toplice',
    country: 'Croatia',
    city: 'Varaždinske Toplice', region: 'Varaždin County', lat: 46.2108, lng: 16.4185,
    address: 'Trg sv. Martina 1, 42223 Varaždinske Toplice', phone: '+385 42 630 000',
    url: 'https://www.minerva.hr/odjel-za-rehabilitaciju-neuroloskih-bolesnika/',
    conditions: ['stroke', 'spinal', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Odjel za rehabilitaciju neuroloških bolesnika', 'Fizijatrija', 'Neurologija', 'Fizioterapija', 'Radna terapija', 'Logopedija', 'Psihologija'],
    completeness: 89,
    researchHighlights: ['Official page lists a dedicated department for rehabilitation of neurological patients', 'Official text covers central and peripheral nervous-system damage plus neuromuscular conditions', 'Official site also references a national rehabilitation centre project for spinal-cord diseases and impairments'],
    features: ['spinal-cord', 'stroke', 'rehabilitation'],
    description: {
      it: 'Ospedale speciale di Varaždinske Toplice con reparto per riabilitazione di pazienti neurologici, team multidisciplinare e percorsi neurologici/spinali.',
      en: 'A Varaždinske Toplice special hospital with a department for neurological-patient rehabilitation, multidisciplinary care and neurological/spinal pathways.'
    }
  },
  {
    id: 'poliklinika-glavic-zagreb',
    name: 'Poliklinika Glavić Zagreb',
    country: 'Croatia',
    city: 'Zagreb', region: 'City of Zagreb', lat: 45.8135, lng: 15.9937,
    address: 'Ulica Marijana Derenčina 3, Zagreb', phone: '+385 20 435 565',
    url: 'https://www.poliklinika-glavic.hr/poliklinika-zagreb-usluge/neurorehabilitacija-robotikom',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'gait'],
    modes: ['outpatient'], access: ['private'],
    disciplines: ['Robotska neurorehabilitacija', 'Neurološka ordinacija', 'Lokomat', 'Armeo Spring', 'Pablo', 'Amadeo', 'Konvencionalna neurorehabilitacija'],
    completeness: 91,
    researchHighlights: ['Official Zagreb page describes a robotic neurorehabilitation centre and reference centre for South-East Europe', 'Official indication list includes stroke, multiple sclerosis, spinal cord injuries, traumatic brain injuries, neuropathy and paraplegia', 'Official page lists Lokomat, Armeo Spring, Pablo, Amadeo and other robotic neurorehabilitation devices'],
    robotNotes: ['Official page lists Lokomat, Armeo Spring, Pablo, Tymo, Amadeo and other robotic-assisted therapy devices.'],
    features: ['robotics', 'spinal-cord', 'brain-injury'],
    description: {
      it: 'Centro privato a Zagabria per neurorehabilitacija robotikom, con Lokomat e tecnologie per ictus, lesione midollare, trauma cranico, MS e neuropatie.',
      en: 'A private Zagreb robotic neurorehabilitation centre with Lokomat and related technologies for stroke, spinal injury, brain injury, MS and neuropathy.'
    }
  },
  {
    id: 'poliklinika-glavic-dubrovnik',
    name: 'Poliklinika Glavić Dubrovnik',
    country: 'Croatia',
    city: 'Dubrovnik', region: 'Dubrovnik-Neretva County', lat: 42.6583, lng: 18.0845,
    address: 'Ćira Carića 3, 20000 Dubrovnik', phone: '+385 20 435 565',
    url: 'https://www.poliklinika-glavic.hr/poliklinika-dubrovnik-usluge',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['robotics', 'gait'],
    modes: ['outpatient'], access: ['private'],
    disciplines: ['Robotska neurorehabilitacija', 'Neurološka ordinacija', 'Lokomat', 'Neurologija', 'Fizikalna medicina i rehabilitacija'],
    completeness: 90,
    researchHighlights: ['Official Dubrovnik services page lists robotic neurorehabilitation and a neurological clinic', 'Official text describes treatment and rehabilitation of neurological patients in Dubrovnik and Zagreb', 'Official indication list includes stroke, multiple sclerosis, spinal cord injuries, traumatic brain injuries, neuropathy and paraplegia'],
    robotNotes: ['Official Poliklinika Glavić pages reference Lokomat and other robotic neurorehabilitation equipment.'],
    features: ['robotics', 'spinal-cord', 'brain-injury'],
    description: {
      it: 'Sede di Dubrovnik della Poliklinika Glavić con neurorehabilitacija robotikom per ictus, trauma cranico, lesione midollare, MS e neuropatie.',
      en: 'Poliklinika Glavić’s Dubrovnik site, providing robotic neurorehabilitation for stroke, brain injury, spinal injury, MS and neuropathy.'
    }
  },
  {
    id: 'toplice-lipik-neurorehab',
    name: 'Toplice Lipik',
    country: 'Croatia',
    city: 'Lipik', region: 'Požega-Slavonia County', lat: 45.4136, lng: 17.1610,
    address: 'Ulica Marije Terezije 13, 34551 Lipik', phone: '+385 34 440 700',
    url: 'https://toplice-lipik.hr/hr/medicinski-tretmani/stranica/1',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabilitacija neuroloških stanja i bolesti', 'Fizijatrija', 'Neurologija', 'Bobath', 'PNF', 'Radna terapija', 'Logopedoterapija'],
    completeness: 89,
    researchHighlights: ['Official treatment page lists rehabilitation of neurological conditions', 'Official indications include post-stroke hemiparesis/hemiplegia, MS, post-traumatic peripheral nerve lesions, polyneuropathies and Parkinson disease', 'Official page references inpatient wards for mobile and immobile patients plus Bobath, PNF, MOTOMED, occupational therapy and speech therapy'],
    features: ['stroke', 'parkinson', 'rehabilitation'],
    description: {
      it: 'Ospedale speciale croato a Lipik con riabilitazione per condizioni neurologiche, ictus, sclerosi multipla, Parkinson, neuropatie e trauma del sistema nervoso centrale.',
      en: 'A Croatian special rehabilitation hospital in Lipik for neurological conditions, stroke, MS, Parkinson, neuropathies and central-nervous-system trauma.'
    }
  },
  {
    id: 'martin-horvat-rovinj-neurorehab',
    name: 'Specijalna bolnica za ortopediju i rehabilitaciju "Martin Horvat" Rovinj-Rovigno',
    country: 'Croatia',
    city: 'Rovinj', region: 'Istria County', lat: 45.0987, lng: 13.6364,
    address: 'Luigi Monti 2, 52210 Rovinj', phone: '+385 95 6333 229',
    url: 'https://www.bolnica-rovinj.hr/djelatnosti/fizikalna-medicina-i-rehabilitacija/',
    conditions: ['stroke', 'ms', 'neuromuscular', 'pediatric', 'neuromotor'],
    technologies: [],
    modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Fizikalna medicina i rehabilitacija', 'Neurologija', 'Fizioterapija', 'Hidroterapija', 'Dječja rehabilitacija'],
    completeness: 84,
    researchHighlights: ['Official rehabilitation page lists rehabilitation for neurological problems after stroke', 'Official text includes neurological diseases, multiple sclerosis, muscular dystrophy, cerebral palsy, ALS and neuro-risk children', 'Official site lists neurology, physical medicine and rehabilitation, and a children rehabilitation department'],
    features: ['stroke', 'pediatric', 'rehabilitation'],
    description: {
      it: 'Ospedale speciale di Rovinj per ortopedia e riabilitazione con percorsi dichiarati per problematiche neurologiche post-ictus, MS, distrofia muscolare, paralisi cerebrale, SLA e bambini a rischio neurologico.',
      en: 'A Rovinj special orthopaedic and rehabilitation hospital with stated rehabilitation for post-stroke neurological problems, MS, muscular dystrophy, cerebral palsy, ALS and neuro-risk children.'
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
  },
  {
    id: 'catosenteret-son',
    name: 'CatoSenteret',
    country: 'Norway',
    city: 'Son', region: 'Akershus', lat: 59.5102, lng: 10.6906,
    address: 'Kvartsveien 2, 1555 Son', phone: '+47 64 98 44 00',
    url: 'https://www.catosenteret.no/nevrologisk-og-nevromuskulaer-sykdom/',
    conditions: ['tbi', 'spinal', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public', 'private', 'insurance'],
    disciplines: ['Rehabilitering', 'Fysioterapi', 'Ergoterapi', 'Logopedi', 'Psykologi', 'Sykepleie'],
    completeness: 87,
    researchHighlights: ['Official programme for neurological and neuromuscular disease', 'Covers spinal cord injury, acquired brain injury, late moderate traumatic brain injury and neuromuscular disease', 'Adult and child/youth rehabilitation pathways'],
    features: ['brain-injury', 'spinal-cord', 'pediatric'],
    description: {
      it: 'Centro norvegese a Son con programma specialistico per malattie neurologiche e neuromuscolari, lesioni midollari e danno cerebrale acquisito.',
      en: 'A Norwegian centre in Son with specialist rehabilitation for neurological and neuromuscular disease, spinal cord injury, and acquired brain injury.'
    }
  },
  {
    id: 'vikersund-bad',
    name: 'Vikersund Bad Rehabiliteringssenter',
    country: 'Norway',
    city: 'Vikersund', region: 'Buskerud', lat: 59.9726, lng: 9.9985,
    address: 'Haaviks vei 25, 3370 Vikersund', phone: '+47 32 78 15 00',
    url: 'https://vikersundbad.no/rehabilitering/nevrologiske-og-nevromuskulaere-sykdommer/',
    conditions: ['stroke', 'tbi', 'ms', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: ['tele'], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public', 'private', 'insurance'],
    disciplines: ['Rehabilitering', 'Fysioterapi', 'Ergoterapi', 'Logopedi', 'Psykologi', 'Sykepleie'],
    completeness: 86,
    researchHighlights: ['Official neurological and neuromuscular rehabilitation programme', 'Separate official programme for stroke and traumatic brain injury', 'Includes MS and Huntington rehabilitation offers'],
    features: ['brain-injury', 'ms-specialist', 'telemedicine'],
    description: {
      it: 'Centro di riabilitazione a Vikersund con percorsi per ictus, trauma cranico, malattie neurologiche e neuromuscolari, SM e Huntington.',
      en: 'A Vikersund rehabilitation centre with programmes for stroke, traumatic brain injury, neurological and neuromuscular disease, MS, and Huntington disease.'
    }
  },
  {
    id: 'unicare-fram-rykkinn',
    name: 'Unicare Fram',
    country: 'Norway',
    city: 'Rykkinn', region: 'Akershus', lat: 59.9342, lng: 10.4761,
    address: 'Paal Bergs vei 129, 1349 Rykkinn', phone: '+47 67 15 28 00',
    url: 'https://unicare.no/fram/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Legespesialist', 'Fysioterapi', 'Ergoterapi', 'Idrettspedagog', 'Sykepleie', 'Logopedi', 'Psykologi', 'Sosionom'],
    completeness: 85,
    researchHighlights: ['Official branch page links to stroke/acquired brain injury rehabilitation', 'Official branch page links to neurological and neuromuscular disease rehabilitation', 'Part of Unicare specialized rehabilitation services'],
    features: ['brain-injury', 'spinal-cord'],
    description: {
      it: 'Centro Unicare a Rykkinn con programmi per ictus e danno cerebrale acquisito, oltre a riabilitazione neurologica e neuromuscolare.',
      en: 'A Unicare centre in Rykkinn with stroke and acquired brain injury rehabilitation plus neurological and neuromuscular rehabilitation.'
    }
  },
  {
    id: 'unicare-hokksund',
    name: 'Unicare Hokksund',
    country: 'Norway',
    city: 'Hokksund', region: 'Buskerud', lat: 59.7659, lng: 9.9161,
    address: 'Loesmoveien 79, 3300 Hokksund', phone: '+47 32 25 32 00',
    url: 'https://unicare.no/hokksund/',
    conditions: ['spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Legespesialist', 'Fysioterapi', 'Ergoterapi', 'Idrettspedagog', 'Sykepleie', 'Psykologi', 'Sosionom'],
    completeness: 82,
    researchHighlights: ['Official branch page links to neurological and neuromuscular disease rehabilitation', 'Unicare programme covers Parkinson, multiple sclerosis, neuromuscular disease and spinal cord injuries', 'Specialized rehabilitation centre in Øvre Eiker'],
    features: ['spinal-cord', 'ms-specialist'],
    description: {
      it: 'Centro Unicare a Hokksund con riabilitazione per malattie neurologiche e neuromuscolari, inclusi Parkinson, SM e lesioni midollari.',
      en: 'A Unicare centre in Hokksund providing neurological and neuromuscular rehabilitation, including Parkinson, MS, and spinal cord injury pathways.'
    }
  },
  {
    id: 'unicare-steffensrud-boverbru',
    name: 'Unicare Steffensrud',
    country: 'Norway',
    city: 'Bøverbru', region: 'Innlandet', lat: 60.6815, lng: 10.7063,
    address: 'Vestre Totenveg 1530, 2846 Bøverbru', phone: '+47 61 19 91 00',
    url: 'https://unicare.no/steffensrud/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Legespesialist', 'Fysioterapi', 'Ergoterapi', 'Idrettspedagog', 'Sykepleie', 'Logopedi', 'Psykologi', 'Sosionom'],
    completeness: 86,
    researchHighlights: ['Official branch page lists stroke and traumatic brain injury rehabilitation', 'Official branch page lists neurological and neuromuscular disease rehabilitation', 'Includes Parkinson, MS, post-polio and cerebral palsy group offers'],
    features: ['brain-injury', 'spinal-cord', 'ms-specialist'],
    description: {
      it: 'Centro Unicare a Bøverbru con percorsi per ictus, trauma cranico, Parkinson, SM, post-polio, paralisi cerebrale e disturbi neuromuscolari.',
      en: 'A Unicare centre in Bøverbru with stroke, traumatic brain injury, Parkinson, MS, post-polio, cerebral palsy, and neuromuscular rehabilitation.'
    }
  },
  {
    id: 'unicare-helsefort-hasselvika',
    name: 'Unicare Helsefort',
    country: 'Norway',
    city: 'Hasselvika', region: 'Trøndelag', lat: 63.6289, lng: 9.8218,
    address: 'Hysnesveien 11, 7112 Hasselvika', phone: '+47 73 85 53 00',
    url: 'https://unicare.no/helsefort/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Legespesialist', 'Fysioterapi', 'Ergoterapi', 'Idrettspedagog', 'Sykepleie', 'Logopedi', 'Psykologi', 'Sosionom'],
    completeness: 82,
    researchHighlights: ['Official branch page lists stroke and traumatic head injury rehabilitation', 'Specialized rehabilitation provider with Helse Midt-Norge agreement', 'Part of Unicare specialized rehabilitation services'],
    features: ['brain-injury'],
    description: {
      it: 'Centro Unicare a Hasselvika con riabilitazione specialistica per ictus e traumi cranici.',
      en: 'A Unicare centre in Hasselvika providing specialist rehabilitation for stroke and traumatic head injury.'
    }
  },
  {
    id: 'unicare-bakke-halden',
    name: 'Unicare Bakke',
    country: 'Norway',
    city: 'Halden', region: 'Østfold', lat: 59.0164, lng: 11.4489,
    address: 'Iddefjordsveien 885, 1765 Halden', phone: '+47 69 17 26 00',
    url: 'https://unicare.no/bakke/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Legespesialist', 'Fysioterapi', 'Ergoterapi', 'Idrettspedagog', 'Sykepleie', 'Logopedi', 'Psykologi', 'Sosionom'],
    completeness: 82,
    researchHighlights: ['Official branch page links to stroke and acquired brain injury rehabilitation', 'Specialist rehabilitation centre near Halden', 'Part of Unicare specialized rehabilitation services'],
    features: ['brain-injury'],
    description: {
      it: 'Centro Unicare vicino a Halden con riabilitazione per ictus e danno cerebrale acquisito.',
      en: 'A Unicare centre near Halden providing rehabilitation for stroke and acquired brain injury.'
    }
  },
  {
    id: 'unicare-alta',
    name: 'Unicare Alta',
    country: 'Norway',
    city: 'Alta', region: 'Finnmark', lat: 69.9677, lng: 23.2778,
    address: 'Follumsvei 1, 9510 Alta', phone: '+47 97 60 02 00',
    url: 'https://unicare.no/alta/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Legespesialist', 'Fysioterapi', 'Ergoterapi', 'Idrettspedagog', 'Sykepleie', 'Logopedi', 'Psykologi', 'Sosionom'],
    completeness: 81,
    researchHighlights: ['Official branch page links to stroke and acquired brain injury rehabilitation', 'Specialized rehabilitation centre in Alta', 'Part of Unicare specialized rehabilitation services'],
    features: ['brain-injury'],
    description: {
      it: 'Centro Unicare ad Alta con riabilitazione specialistica per ictus e danno cerebrale acquisito.',
      en: 'A Unicare centre in Alta providing specialist rehabilitation for stroke and acquired brain injury.'
    }
  },
  {
    id: 'skogli-lillehammer',
    name: 'Skogli Helse- og Rehabiliteringssenter',
    country: 'Norway',
    city: 'Lillehammer', region: 'Innlandet', lat: 61.1004, lng: 10.4822,
    address: 'Fredrik Colletsvei 13, 2614 Lillehammer', phone: '+47 61 24 91 00',
    url: 'https://skogli.no/rehabilitering/vart-rehabiliteringstilbud/hjerneslag/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient'], access: ['public', 'private'],
    disciplines: ['Lege', 'Sykepleie', 'Fysioterapi', 'Ergoterapi', 'Logopedi', 'Synspedagog', 'Sosionom', 'Ernæringsfysiologi', 'Psykologi'],
    completeness: 87,
    researchHighlights: ['Official stroke and brain injury rehabilitation programme', 'Primary and late-phase inpatient stroke rehabilitation', 'Offers intensive gait training and intensive arm/hand training'],
    features: ['brain-injury', 'gait-training'],
    description: {
      it: 'Centro di riabilitazione a Lillehammer con programma ufficiale per ictus e danno cerebrale, inclusa riabilitazione intensiva del cammino e arto superiore.',
      en: 'A Lillehammer rehabilitation centre with an official stroke and brain injury programme, including intensive gait and upper-limb rehabilitation.'
    }
  },
  {
    id: 'ringen-moelv',
    name: 'Ringen Rehabiliteringssenter',
    country: 'Norway',
    city: 'Moelv', region: 'Innlandet', lat: 60.9647, lng: 10.6730,
    address: 'Nordre Ringsveg 82, 2390 Moelv', phone: '+47 62 33 45 00',
    url: 'https://www.ringen-rehab.no/vaare-tilbud/parkinsonrehabilitering/',
    conditions: ['parkinson', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public', 'private', 'insurance'],
    disciplines: ['Lege', 'Nevrolog', 'Sykepleie', 'Fysioterapi', 'Ergoterapi', 'Logopedi'],
    completeness: 84,
    researchHighlights: ['Official Parkinson rehabilitation programme', 'Individual inpatient, group inpatient and day rehabilitation options', 'Multidisciplinary team includes physician, neurologist, physiotherapist and occupational therapist'],
    features: ['parkinson', 'lsvt-big'],
    description: {
      it: 'Centro di riabilitazione a Moelv con programma specialistico per Parkinson, inclusi percorsi residenziali, diurni e LSVT BIG.',
      en: 'A Moelv rehabilitation centre with specialist Parkinson rehabilitation, including inpatient, day, group, and LSVT BIG pathways.'
    }
  },
  {
    id: 'vigor-tromso',
    name: 'ViGØR Rehabiliteringssykehus',
    country: 'Norway',
    city: 'Tromsø', region: 'Troms', lat: 69.6648, lng: 18.9510,
    address: 'Conrad Holmboes veg 95, 9011 Tromsø', phone: '+47 77 66 88 00',
    url: 'https://vigor.no/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromuscular', 'pediatric', 'cognitive', 'neuromotor'],
    technologies: ['gait'], modes: ['inpatient', 'outpatient', 'day-hospital'], access: ['public', 'private'],
    disciplines: ['Lege', 'Fysioterapi', 'Ergoterapi', 'Logopedi', 'Sykepleie', 'Tverrfaglig team'],
    completeness: 86,
    researchHighlights: ['Official site lists stroke, subacute stroke and acquired brain injury rehabilitation', 'Neurological programmes include MS, Parkinson, Huntington, CP and neuromuscular disorders', 'Offers intensive hand, gait and speech training'],
    features: ['brain-injury', 'ms-specialist', 'parkinson', 'pediatric'],
    description: {
      it: 'Ospedale riabilitativo a Tromsø con percorsi per ictus, danno cerebrale acquisito, SM, Parkinson, Huntington, CP e disturbi neuromuscolari.',
      en: 'A Tromsø rehabilitation hospital with pathways for stroke, acquired brain injury, MS, Parkinson, Huntington, CP, and neuromuscular disorders.'
    }
  },
  {
    id: 'aleris-rehab-station-stockholm',
    name: 'Aleris Rehab Station',
    country: 'Sweden',
    city: 'Solna', region: 'Stockholm', lat: 59.3686, lng: 18.0284,
    address: 'Frösundaviks allé 4A, 169 89 Stockholm', phone: '+46 8 555 44 000',
    url: 'https://www.aleris.se/mottagningar/stockholm/rehab-station/',
    conditions: ['stroke', 'spinal', 'ms', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Medicinsk rehabilitering', 'Fysioterapi', 'Arbetsterapi', 'Logopedi', 'Omvårdnad', 'Forskning'],
    completeness: 86,
    researchHighlights: ['National and international rehabilitation centre on the official site', 'Official page covers acquired and congenital spinal cord injuries, neurological injuries and diseases, stroke and MS', 'Provides specialist care on behalf of Region Stockholm'],
    features: ['spinal-cord', 'ms-specialist', 'research'],
    description: {
      it: 'Centro svedese a Solna per riabilitazione medica specialistica, con percorsi per lesioni midollari, ictus, SM e altre condizioni neurologiche.',
      en: 'A Swedish specialist medical rehabilitation centre in Solna, covering spinal cord injury, stroke, MS, and other neurological conditions.'
    }
  },
  {
    id: 'malargarden-rehab-center-sigtuna',
    name: 'Mälargården Rehab Center',
    country: 'Sweden',
    city: 'Sigtuna', region: 'Stockholm', lat: 59.6200, lng: 17.6920,
    address: 'Hertigvägen 5, 193 21 Sigtuna', phone: '+46 8 594 936 30',
    url: 'https://www.malargarden.se/',
    conditions: ['stroke', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Rehabilitering', 'Fysioterapi', 'Arbetsterapi', 'Omvårdnad', 'Läkare', 'Rehabiliteringsteam'],
    completeness: 85,
    researchHighlights: ['Official site describes specialised rehabilitation in neurology and oncology', 'Official programme links include stroke, Parkinson, MS and post-polio rehabilitation', 'Planned specialised rehabilitation can be financed by county council referral'],
    features: ['ms-specialist', 'parkinson'],
    description: {
      it: 'Centro di riabilitazione specialistica a Sigtuna con programmi ufficiali per neurologia, ictus, Parkinson, SM e post-polio.',
      en: 'A specialist rehabilitation centre in Sigtuna with official neurology, stroke, Parkinson, MS, and post-polio programmes.'
    }
  },
  {
    id: 'valjeviken-solvesborg',
    name: 'Valjeviken',
    country: 'Sweden',
    city: 'Sölvesborg', region: 'Blekinge', lat: 56.0486, lng: 14.5553,
    address: 'Herrgårdsvägen 97, 294 37 Sölvesborg', phone: '+46 456 151 15',
    url: 'https://valjeviken.se/forvarvad-hjarnskada-profil/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'private'],
    disciplines: ['Neurologisk rehabilitering', 'Fysioterapi', 'Arbetsterapi', 'Kurator', 'Logopedi', 'Rehabiliteringsteam'],
    completeness: 81,
    researchHighlights: ['Official acquired brain injury profile', 'Official site states Valjeviken runs neurological rehabilitation', 'Team access includes physiotherapist, occupational therapist, counsellor and speech therapist'],
    features: ['brain-injury'],
    description: {
      it: 'Centro a Sölvesborg con profilo per danno cerebrale acquisito e riabilitazione neurologica, con team multiprofessionale.',
      en: 'A Sölvesborg centre with an acquired brain injury profile and neurological rehabilitation supported by a multidisciplinary team.'
    }
  },
  {
    id: 'bragee-neurological-rehab-stockholm',
    name: 'Bragée Neurologisk rehabilitering',
    country: 'Sweden',
    city: 'Stockholm', region: 'Stockholm', lat: 59.3361, lng: 18.0962,
    address: 'Karlavägen 100, 115 26 Stockholm', phone: '+46 8 425 035 00',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Bragee-Neurologisk-rehabilitering-Ostermalm/',
    conditions: ['stroke', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient', 'day-hospital'], access: ['public', 'private'],
    disciplines: ['Läkare', 'Fysioterapi', 'Psykologi', 'Sjuksköterska', 'Logopedi', 'Dietist'],
    completeness: 84,
    researchHighlights: ['1177 lists neurological rehabilitation and stroke rehabilitation care types', 'Care is provided on behalf of Region Stockholm', 'Team includes physicians, physiotherapists, psychologists, nurses, speech therapist and dietitian'],
    features: ['stroke', 'parkinson'],
    description: {
      it: 'Unità di riabilitazione neurologica a Stoccolma con day rehab e team multidisciplinare, attiva su incarico della Regione Stockholm.',
      en: 'A Stockholm neurological rehabilitation unit with day rehabilitation and a multidisciplinary team, operating on behalf of Region Stockholm.'
    }
  },
  {
    id: 'stora-skondal-neurological-rehab',
    name: 'Neurologiska Rehabiliteringskliniken Stiftelsen Stora Sköndal',
    country: 'Sweden',
    city: 'Stockholm', region: 'Stockholm', lat: 59.2532, lng: 18.1283,
    address: 'Efraim Dahlins väg 5, 128 64 Sköndal', phone: '+46 8 400 291 00',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Neurologiska-Rehabiliteringskliniken-Stiftelsen-Stora-Skondal/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'day-hospital'], access: ['public', 'private'],
    disciplines: ['Neurologisk rehabilitering', 'Rehabiliteringsteam', 'Heldygnsrehabilitering', 'Dagrehabilitering'],
    completeness: 88,
    researchHighlights: ['1177 says the clinic offers specialised neurological rehabilitation for nervous-system diseases and injuries', 'Programmes include stroke, Parkinson, epilepsy, MS, cervical dystonia and acquired brain injury', 'Offers inpatient and day rehabilitation'],
    features: ['brain-injury', 'ms-specialist', 'parkinson'],
    description: {
      it: 'Clinica neurologica di Stora Sköndal con riabilitazione residenziale e diurna per ictus, Parkinson, SM e danno cerebrale acquisito.',
      en: 'Stora Sköndal neurological clinic offering inpatient and day rehabilitation for stroke, Parkinson, MS, and acquired brain injury.'
    }
  },
  {
    id: 'neurorehabilitering-vasterbotten-umea',
    name: 'Neurorehabilitering Västerbotten',
    country: 'Sweden',
    city: 'Umeå', region: 'Västerbotten', lat: 63.8154, lng: 20.2993,
    address: 'Norrlands universitetssjukhus, 901 85 Umeå', phone: '+46 90 785 18 91',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Neurorehabilitering-Vasterbotten/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurorehabilitering', 'Rehabiliteringsmedicin', 'Sjukhusvård', 'Rehabiliteringsteam'],
    completeness: 78,
    researchHighlights: ['1177 identifies Neurorehabilitering Västerbotten at Norrlands universitetssjukhus', 'Public university-hospital neurorehabilitation service', 'Regional specialist neurorehabilitation pathway'],
    features: ['brain-injury'],
    description: {
      it: 'Servizio pubblico di neuroriabilitazione presso il Norrlands universitetssjukhus di Umeå.',
      en: 'A public neurorehabilitation service at Norrlands University Hospital in Umeå.'
    }
  },
  {
    id: 'rehabmedicin-orup-hoor',
    name: 'Rehabiliteringsmedicin Orup Höör',
    country: 'Sweden',
    city: 'Höör', region: 'Skåne', lat: 55.9091, lng: 13.5285,
    address: 'Sanatorievägen 34A, 243 95 Höör', phone: '+46 413 556 670',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Rehabiliteringsmedicinavdelning-neurorehab-trauma-Orup-Hoor/',
    conditions: ['tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Neurorehab trauma', 'Hjärnskaderehabilitering', 'Ryggmärgsskada'],
    completeness: 86,
    researchHighlights: ['1177 lists a neurorehab trauma rehabilitation medicine ward at Orup Höör', 'Separate 1177 records cover brain-injury rehabilitation medicine and spinal-cord-injury rehabilitation medicine at Orup', 'Public Skåne specialist rehabilitation medicine service'],
    features: ['brain-injury', 'spinal-cord'],
    description: {
      it: 'Unità pubblica di medicina riabilitativa a Orup/Höör con percorsi neurotrauma, danno cerebrale e lesione midollare.',
      en: 'A public rehabilitation medicine unit at Orup/Höör with neurotrauma, brain injury, and spinal cord injury pathways.'
    }
  },
  {
    id: 'danderyd-brain-injury-rehab',
    name: 'Hjärnskaderehabilitering Danderyds sjukhus',
    country: 'Sweden',
    city: 'Danderyd', region: 'Stockholm', lat: 59.3907, lng: 18.0407,
    address: 'Entrévägen 6, 182 88 Danderyd', phone: '+46 8 123 567 82',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Hjarnskaderehabilitering-mottagning-Danderyd-Danderyds-sjukhus/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient', 'day-hospital'], access: ['public'],
    disciplines: ['Hjärnskaderehabilitering', 'Rehabiliteringsmedicin', 'Dagvård', 'Konsultteam'],
    completeness: 83,
    researchHighlights: ['1177 lists Danderyd brain-injury rehabilitation outpatient, day-care and consultation-team services', 'Specialised hospital brain-injury rehabilitation service', 'Includes Danderyd and Huddinge brain-injury rehabilitation locations'],
    features: ['brain-injury'],
    description: {
      it: 'Servizio specialistico di Danderyds sjukhus per riabilitazione del danno cerebrale, con ambulatorio, day care e team consulenziale.',
      en: 'A Danderyd Hospital specialist brain-injury rehabilitation service with outpatient, day-care, and consultation-team pathways.'
    }
  },
  {
    id: 'uso-rehabmedicin-neuroteam-orebro',
    name: 'Rehabiliteringsmedicin neuroteam Universitetssjukhuset Örebro',
    country: 'Sweden',
    city: 'Örebro', region: 'Örebro', lat: 59.2762, lng: 15.2290,
    address: 'Universitetssjukhuset Örebro, Södra Grev Rosengatan, 701 85 Örebro', phone: '+46 19 602 11 98',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Rehabiliteringsmedicin-neuroteam-Universitetssjukhuset-Orebro-Orebro/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient', 'day-hospital'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Neuroteam', 'Dagsjukvård', 'Sjukhusvård'],
    completeness: 79,
    researchHighlights: ['1177 lists a rehabilitation medicine neuroteam at Universitetssjukhuset Örebro', 'Public university-hospital rehabilitation medicine service', 'Associated 1177 record for rehabilitation medicine day hospital at USÖ'],
    features: ['brain-injury'],
    description: {
      it: 'Neuroteam pubblico di medicina riabilitativa presso l’ospedale universitario di Örebro.',
      en: 'A public rehabilitation medicine neuroteam at Örebro University Hospital.'
    }
  },
  {
    id: 'kalmar-neurological-rehab-clinic',
    name: 'Neurologiska rehabiliteringsmottagningen Kalmar',
    country: 'Sweden',
    city: 'Kalmar', region: 'Kalmar', lat: 56.6581, lng: 16.3293,
    address: 'Hälsogränd 4, 392 34 Kalmar', phone: '+46 10 358 43 20',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Neurologiska-rehabiliteringsmottagningen-Kalmar/',
    conditions: ['stroke', 'tbi', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public'],
    disciplines: ['Neurologisk rehabilitering', 'Rehabiliteringsmottagning', 'Sjukhusvård'],
    completeness: 76,
    researchHighlights: ['1177 lists Neurologiska rehabiliteringsmottagningen Kalmar', 'Public neurological rehabilitation outpatient clinic', 'Regional specialist neurorehabilitation service'],
    features: ['brain-injury'],
    description: {
      it: 'Ambulatorio pubblico di riabilitazione neurologica a Kalmar.',
      en: 'A public neurological rehabilitation outpatient clinic in Kalmar.'
    }
  },
  {
    id: 'linkoping-spinal-cord-injury-team',
    name: 'Ryggmärgsskadeteam, Smärt- och rehabiliteringsmedicinska kliniken',
    country: 'Sweden',
    city: 'Linköping', region: 'Östergötland', lat: 58.4002, lng: 15.6201,
    address: 'Universitetssjukhuset, 581 85 Linköping', phone: '+46 10 105 97 87',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Ryggmargsskadeteam-Smart-och-Rehabiliteringsmedicinska-kliniken/',
    conditions: ['spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public'],
    disciplines: ['Ryggmärgsskadeteam', 'Rehabiliteringsmedicin', 'Smärt- och rehabiliteringsmedicin'],
    completeness: 77,
    researchHighlights: ['1177 lists a spinal cord injury team at the pain and rehabilitation medicine clinic', 'Public university-hospital specialist service in Linköping', 'Explicit spinal-cord-injury rehabilitation medicine pathway'],
    features: ['spinal-cord'],
    description: {
      it: 'Team pubblico per lesioni midollari presso la clinica di medicina del dolore e riabilitazione dell’ospedale universitario di Linköping.',
      en: 'A public spinal cord injury team at Linköping University Hospital’s pain and rehabilitation medicine clinic.'
    }
  },
  {
    id: 'aleris-rehab-station-liljeholmen',
    name: 'Aleris Rehab Station Liljeholmen',
    country: 'Sweden',
    city: 'Stockholm', region: 'Stockholm', lat: 59.3142, lng: 18.0236,
    address: 'Trekantsvägen 1, 117 43 Stockholm', phone: '+46 8 681 99 90',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Aleris-Rehab-Station-Planerad-neurologisk-rehab-Liljeholmen/',
    conditions: ['ms', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['day-hospital', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Fysioterapi', 'Arbetsterapi', 'Kurator', 'Rehabinstruktör', 'Läkare'],
    completeness: 84,
    researchHighlights: ['1177 says the Liljeholmen branch is specialised in rehabilitation for MS and other neurological diagnoses', 'Day rehabilitation 2-3 half-days per week for 8-12 weeks', 'Care types include neurological rehabilitation, stroke rehabilitation and specialised rehabilitation'],
    features: ['ms-specialist', 'stroke'],
    description: {
      it: 'Sede Aleris a Liljeholmen per day rehab neurologica, specializzata in SM e altre diagnosi neurologiche.',
      en: 'An Aleris Liljeholmen day-rehabilitation branch specialising in MS and other neurological diagnoses.'
    }
  },
  {
    id: 'sunderby-avd-41-neurorehab',
    name: 'Avd 41 Neurorehabilitering Sunderby sjukhus',
    country: 'Sweden',
    city: 'Södra Sunderbyn', region: 'Norrbotten', lat: 65.6712, lng: 21.9319,
    address: 'Sunderby sjukhus, Avd 41 N, trapphus A, plan 4, 954 42 Södra Sunderbyn', phone: '+46 920 282 041',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Avd-41-Neurorehabilitering-Sunderby-sjukhus-Division-MedAK/',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Arbetsterapi', 'Fysioterapi', 'Logopedi', 'Läkare', 'Kurator', 'Neuropsykologi', 'Omvårdnad'],
    completeness: 90,
    researchHighlights: ['County-level specialist rehabilitation assignment for adults with neurological disease or injury', 'Covers intensive rehabilitation after stroke, traumatic brain injury and spinal cord injury', 'Internationally accredited by CARF according to 1177'],
    features: ['brain-injury', 'spinal-cord', 'stroke', 'carf'],
    description: {
      it: 'Unità di neuro-riabilitazione specialistica a Sunderby sjukhus per ictus, trauma cranico, lesioni midollari e altre malattie o lesioni neurologiche.',
      en: 'A specialist neurorehabilitation ward at Sunderby Hospital for stroke, traumatic brain injury, spinal cord injury, and other neurological disease or injury.'
    }
  },
  {
    id: 'sahlgrenska-avd-134-spinal-cord',
    name: 'Avdelning 134 Ryggmärgsskador, Göteborg',
    country: 'Sweden',
    city: 'Göteborg', region: 'Västra Götaland', lat: 57.6826, lng: 11.9617,
    address: 'Bruna stråket 5, 413 46 Göteborg', phone: '+46 31 342 11 34',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Avdelning-134-Ryggmargsskador-Goteborg/',
    conditions: ['spinal', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Ryggmärgsskador', 'Sjukhusvård'],
    completeness: 76,
    researchHighlights: ['1177 lists Avdelning 134 Ryggmärgsskador in Göteborg', 'Hospital ward focused on spinal cord injuries', 'Public rehabilitation medicine service'],
    features: ['spinal-cord'],
    description: {
      it: 'Reparto pubblico a Göteborg per lesioni del midollo spinale nell’ambito della medicina riabilitativa.',
      en: 'A public Gothenburg rehabilitation medicine ward focused on spinal cord injuries.'
    }
  },
  {
    id: 'capio-rehab-neuroteam-enskededalen',
    name: 'Capio Rehab Neuroteam',
    country: 'Sweden',
    city: 'Enskededalen', region: 'Stockholm', lat: 59.2886, lng: 18.0987,
    address: 'Åstorpsringen 6, 121 31 Enskededalen', phone: '+46 8 684 337 14',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Capio-Rehab-Neuroteam/',
    conditions: ['stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'private'],
    disciplines: ['Neuroteam', 'Neurologisk rehabilitering', 'Rehabilitering vid stroke'],
    completeness: 78,
    researchHighlights: ['1177 identifies Capio Rehab Neuroteam as a neuroteam working on behalf of Region Stockholm', 'Care types include neurological rehabilitation and stroke rehabilitation', 'Distinct outpatient neuroteam in Enskededalen'],
    features: ['stroke'],
    description: {
      it: 'Neuroteam ambulatoriale Capio a Enskededalen, attivo su incarico della Regione Stockholm per riabilitazione neurologica e post-ictus.',
      en: 'A Capio outpatient neuroteam in Enskededalen, operating on behalf of Region Stockholm for neurological and stroke rehabilitation.'
    }
  },
  {
    id: 'furuhojden-inpatient-rehab-taby',
    name: 'Furuhöjden Inneliggande Rehabilitering',
    country: 'Sweden',
    city: 'Täby', region: 'Stockholm', lat: 59.4660, lng: 18.0881,
    address: 'Gribbylundsvägen 75, 187 68 Täby', phone: '+46 8 630 89 00',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Furuhojden-Inneliggande-Rehabilitering-Taby/',
    conditions: ['stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public', 'private'],
    disciplines: ['Inneliggande rehabilitering', 'Neurologisk rehabilitering', 'Specialistläkare', 'Multiprofessionellt team', 'Omvårdnad'],
    completeness: 84,
    researchHighlights: ['1177 says Furuhöjden offers inpatient rehabilitation after acute-hospital care and inpatient neurological rehabilitation', 'Works on behalf of Region Stockholm', 'Care types include neurological rehabilitation, stroke rehabilitation and specialised rehabilitation'],
    features: ['stroke'],
    description: {
      it: 'Centro di riabilitazione residenziale a Täby per riabilitazione dopo ospedale acuto e riabilitazione neurologica.',
      en: 'An inpatient rehabilitation centre in Täby for post-acute and neurological rehabilitation.'
    }
  },
  {
    id: 'huddinge-brain-injury-rehab',
    name: 'Hjärnskaderehabilitering Huddinge, Danderyds sjukhus',
    country: 'Sweden',
    city: 'Huddinge', region: 'Stockholm', lat: 59.2207, lng: 17.9394,
    address: 'Blickagången 6D, 141 52 Huddinge', phone: '+46 8 123 595 49',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Hjarnskaderehabilitering-mottagning-Huddinge-Danderyds-sjukhus/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient', 'day-hospital'], access: ['public'],
    disciplines: ['Hjärnskaderehabilitering', 'Rehabiliteringsmedicin', 'Läkare', 'Sjuksköterska'],
    completeness: 82,
    researchHighlights: ['1177 lists the Huddinge brain-injury rehabilitation clinic under neurological rehabilitation and rehabilitation medicine', 'Separate Huddinge location from the Danderyd brain-injury rehabilitation entry', 'Official description covers assessment and planning for continued rehabilitation'],
    features: ['brain-injury'],
    description: {
      it: 'Sede Huddinge del servizio di riabilitazione per danno cerebrale di Danderyds sjukhus, con valutazione e pianificazione riabilitativa.',
      en: 'The Huddinge location of Danderyd Hospital’s brain-injury rehabilitation service, providing assessment and rehabilitation planning.'
    }
  },
  {
    id: 'akademiska-neurogeriatric-rehab-uppsala',
    name: 'Rehabiliteringsmedicin och neurogeriatrisk avdelning 85 C',
    country: 'Sweden',
    city: 'Uppsala', region: 'Uppsala', lat: 59.8473, lng: 17.6410,
    address: 'Akademiska sjukhuset, ingång 85, plan 7, 751 85 Uppsala', phone: '+46 18 611 50 10',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Rehabiliteringsmedicin-och-neurogeriatrisk-avdelning-85-C/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Neurogeriatrik', 'Läkare', 'Arbetsterapi', 'Fysioterapi', 'Logopedi', 'Psykologi', 'Kurator'],
    completeness: 86,
    researchHighlights: ['1177 describes specialised inpatient rehabilitation for adults with brain injury or other neurological disease', 'Team includes physician, nursing, occupational therapy, physiotherapy, speech therapy, psychology and social work', 'Public Akademiska sjukhuset service'],
    features: ['brain-injury'],
    description: {
      it: 'Reparto di riabilitazione e neurogeriatria dell’Akademiska sjukhuset per pazienti con danno cerebrale o altra malattia neurologica.',
      en: 'An Akademiska Hospital rehabilitation medicine and neurogeriatric ward for patients with brain injury or other neurological disease.'
    }
  },
  {
    id: 'specialistrehabilitering-karlshamn',
    name: 'Specialistrehabilitering Karlshamn',
    country: 'Sweden',
    city: 'Karlshamn', region: 'Blekinge', lat: 56.1870, lng: 14.8512,
    address: 'Blekingesjukhuset, Sjukhusvägen 8, 374 41 Karlshamn', phone: '+46 454 732 470',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Specialistrehabilitering-Karlshamn/',
    conditions: ['tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public'],
    disciplines: ['Specialistrehabilitering', 'Arbetsterapi', 'Kurator', 'Logopedi', 'Läkare', 'Neuropsykologi', 'Fysioterapi', 'Omvårdnad'],
    completeness: 79,
    researchHighlights: ['1177 returned the clinic for brain-injury and spinal-cord rehabilitation searches', 'Official card describes specialist rehabilitation after inpatient rehabilitation or referral', 'Team includes speech therapy, physician, neuropsychology, physiotherapy and nursing'],
    features: ['brain-injury', 'spinal-cord'],
    description: {
      it: 'Ambulatorio specialistico di riabilitazione a Karlshamn/Blekingesjukhuset con team multiprofessionale e competenze neuropsicologiche e logopediche.',
      en: 'A specialist rehabilitation clinic at Blekinge Hospital in Karlshamn with a multidisciplinary team including neuropsychology and speech therapy.'
    }
  },
  {
    id: 'vasteras-rehabmed-clinic',
    name: 'Rehabiliteringsmedicinska mottagningen Västerås',
    country: 'Sweden',
    city: 'Västerås', region: 'Västmanland', lat: 59.6171, lng: 16.5807,
    address: 'Västmanlands sjukhus Västerås, Utmarksgatan 8, 722 17 Västerås', phone: '+46 21 175 395',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Rehabiliteringsmedicinska-mottagningen-Vasteras/',
    conditions: ['tbi', 'spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Specialiserade team', 'Neurologisk uppföljning', 'Ryggmärgsskada', 'Hjärnskada'],
    completeness: 84,
    researchHighlights: ['1177 says the clinic has specialised teams for chronic neurological disease, spinal cord injury and brain injury in working-age adults', 'Public Västmanlands sjukhus rehabilitation medicine clinic', 'Combines time-limited interventions with long-term follow-up and support'],
    features: ['brain-injury', 'spinal-cord'],
    description: {
      it: 'Ambulatorio pubblico di medicina riabilitativa a Västerås con team per malattie neurologiche croniche, lesioni midollari e danni cerebrali.',
      en: 'A public Västerås rehabilitation medicine clinic with teams for chronic neurological disease, spinal cord injury and brain injury.'
    }
  },
  {
    id: 'halland-rehabmed-avd-51-halmstad',
    name: 'Avdelning 51 Rehabiliteringsmedicin Hallands sjukhus Halmstad',
    country: 'Sweden',
    city: 'Halmstad', region: 'Halland', lat: 56.6826, lng: 12.8464,
    address: 'Hallands sjukhus Halmstad, ingång 19, målpunkt F, plan 5, 301 85 Halmstad', phone: '+46 35 131 151',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Avdelning-51-Rehabiliteringsmedicin-Hallands-sjukhus-Halmstad/',
    conditions: ['spinal', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'day-hospital', 'outpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Dagrehabilitering', 'Specialiserad öppenvård', 'Logopedi', 'Neuropsykologi', 'Fysioterapi', 'Specialistläkare'],
    completeness: 86,
    researchHighlights: ['1177 lists rehabilitation medicine, neurological rehabilitation and specialised rehabilitation care types', 'Official description covers inpatient care, day rehabilitation and specialised outpatient care including spinal cord injuries', 'CARF-accredited rehabilitation medicine service according to 1177'],
    features: ['spinal-cord', 'carf'],
    description: {
      it: 'Servizio pubblico di medicina riabilitativa ad Halmstad con degenza, day rehab e ambulatorio specialistico, inclusa riabilitazione per lesioni midollari.',
      en: 'A public Halmstad rehabilitation medicine service with inpatient care, day rehabilitation and specialist outpatient care including spinal cord injuries.'
    }
  },
  {
    id: 'falun-rehabmed-outpatient',
    name: 'Rehabiliteringsmedicin Öppenvård Falun',
    country: 'Sweden',
    city: 'Falun', region: 'Dalarna', lat: 60.6101, lng: 15.6456,
    address: 'Falu lasarett, Psilanders väg 1, 791 82 Falun', phone: '+46 23 492 373',
    url: 'https://www.1177.se/hitta-vard/kontaktkort/Rehabiliteringsmedicin-Oppenvard-Falun/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public'],
    disciplines: ['Rehabiliteringsmedicin', 'Neurologi', 'Strokevård', 'Rehabiliteringsteam'],
    completeness: 84,
    researchHighlights: ['1177 lists rehabilitation medicine, neurology and stroke care types', 'Official description covers working-age people with mild to severe brain injuries or other neurological injuries and diseases', 'Assessment, investigation and/or team treatment at Falu lasarett'],
    features: ['brain-injury', 'stroke'],
    description: {
      it: 'Ambulatorio pubblico di medicina riabilitativa a Falun per danni cerebrali e altre lesioni o malattie neurologiche.',
      en: 'A public Falun rehabilitation medicine outpatient service for brain injuries and other neurological injuries or diseases.'
    }
  },
  {
    id: 'rehaklinik-enns',
    name: 'Rehaklinik Enns',
    country: 'Austria',
    city: 'Enns', region: 'Upper Austria', lat: 48.2139, lng: 14.4760,
    address: 'Bahnhofweg 7, 4470 Enns', phone: '+43 7223 82828',
    url: 'https://www.rehaklinikenns.at/',
    conditions: ['stroke', 'ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitationsmedizin', 'Physiotherapie', 'Ergotherapie', 'Logopädie', 'Pflege'],
    completeness: 86,
    researchHighlights: ['Official VITREA site lists Neurologie as a stationaere Reha indication', 'Home page says the clinic treats people with neurological or pneumological diseases', 'Official page identifies the site as an MS Zentrum'],
    features: ['ms-center', 'inpatient-neurorehab'],
    description: {
      it: 'Clinica VITREA di riabilitazione a Enns per pazienti con patologie neurologiche, inclusa competenza MS, con team multiprofessionale.',
      en: 'A VITREA rehabilitation clinic in Enns for neurological conditions, including MS expertise, with a multidisciplinary team.'
    }
  },
  {
    id: 'rehaklinik-gmundnerberg',
    name: 'Rehaklinik Gmundnerberg',
    country: 'Austria',
    city: 'Altmünster', region: 'Upper Austria', lat: 47.9025, lng: 13.7544,
    address: 'Gmundnerberg 82, 4813 Altmünster', phone: '+43 7612 88000',
    url: 'https://www.reha-gmundnerberg.at/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromotor'],
    technologies: [], modes: ['inpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Rehabilitationsmedizin', 'Physiotherapie', 'Ergotherapie', 'Logopädie', 'Neuropsychologie'],
    completeness: 88,
    researchHighlights: ['Official VITREA page lists Neurologie as the rehabilitation indication', 'The site describes Gmundnerberg as one of Austria\'s leading rehabilitation facilities for neurological patients', 'Multiprofessional medical, therapy and nursing team is stated on the official page'],
    features: ['inpatient-neurorehab'],
    description: {
      it: 'Centro VITREA di riabilitazione neurologica sul Gmundnerberg per pazienti neurologici in regime di degenza.',
      en: 'A VITREA neurological inpatient rehabilitation center on the Gmundnerberg for neurological patients.'
    }
  },
  {
    id: 'neurologisches-therapiezentrum-kapfenberg',
    name: 'Neurologisches Therapiezentrum Kapfenberg',
    country: 'Austria',
    city: 'Kapfenberg', region: 'Styria', lat: 47.4440, lng: 15.2933,
    address: 'Anton-Buchalka-Straße 1, 8605 Kapfenberg', phone: '+43 3862 2900',
    url: 'https://www.ntk.at/',
    conditions: ['stroke', 'tbi', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologie', 'Neurologische Akutnachbehandlung', 'Physiotherapie', 'Ergotherapie', 'Logopädie', 'Neuropsychologie'],
    completeness: 89,
    researchHighlights: ['Official page calls NTK the only public special hospital for neurological acute follow-up treatment in Upper Styria', 'Stationary and ambulatory neurological services are both listed', 'Official site lists neurological specialist therapy and neurological outpatient clinic services'],
    features: ['acute-follow-up', 'public-special-hospital'],
    description: {
      it: 'Sonderkrankenanstalt pubblica in Alta Stiria per post-trattamento neurologico acuto, con offerte stazionarie e ambulatoriali.',
      en: 'A public special hospital in Upper Styria for neurological acute follow-up treatment, with inpatient and outpatient services.'
    }
  },
  {
    id: 'nrz-rosenhuegel-wien',
    name: 'Neurologisches Rehabilitationszentrum Rosenhügel',
    country: 'Austria',
    city: 'Vienna', region: 'Vienna', lat: 48.1676, lng: 16.2830,
    address: 'Rosenhügelstraße 192a, 1130 Wien', phone: '+43 1 880 320',
    url: 'https://www.nrz.at/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'day-hospital', 'outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Neuropsychologie', 'Physiotherapie', 'Ergotherapie', 'Logopädie', 'Pflege'],
    completeness: 91,
    researchHighlights: ['Official NRZ page describes Rosenhügel as a competence center for neurological and neuropsychological rehabilitation', 'The center lists 147 beds and 30 ambulatory therapy places', 'Stationary and teil-stationary rehabilitation are both official service lines'],
    features: ['neuropsychology', 'inpatient-neurorehab', 'day-rehab'],
    description: {
      it: 'Centro neurologico e neuropsicologico di riabilitazione a Vienna con degenza, day rehab e posti ambulatoriali.',
      en: 'A neurological and neuropsychological rehabilitation center in Vienna with inpatient, day rehabilitation and outpatient capacity.'
    }
  },
  {
    id: 'rehaklinik-montafon',
    name: 'Rehaklinik Montafon',
    country: 'Austria',
    city: 'Schruns', region: 'Vorarlberg', lat: 47.0801, lng: 9.9206,
    address: 'Wagenweg 4a, 6780 Schruns', phone: '+43 5556 205',
    url: 'https://www.rehaklinik-montafon.at/',
    conditions: ['stroke', 'tbi', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Neurologie', 'Neurochirurgie', 'Rehabilitationsmedizin', 'Physiotherapie', 'Ergotherapie', 'Logopädie'],
    completeness: 84,
    researchHighlights: ['Official page lists neurologische-neurochirurgische Rehabilitation as a clinical focus', 'The clinic reports 215 beds and more than 175 employees', 'VITREA page positions Montafon as a multi-indication rehabilitation clinic rather than a generic therapy center'],
    features: ['neurochirurgical-rehab', 'inpatient-rehab'],
    description: {
      it: 'Clinica riabilitativa VITREA nel Montafon con percorso neurologico-neurochirurgico in degenza.',
      en: 'A VITREA rehabilitation clinic in Montafon with an inpatient neurological and neurosurgical rehabilitation pathway.'
    }
  },
  {
    id: 'gailtal-klinik-hermagor',
    name: 'Gailtal-Klinik',
    country: 'Austria',
    city: 'Hermagor', region: 'Carinthia', lat: 46.6301, lng: 13.3666,
    address: 'Radniger Straße 12, 9620 Hermagor', phone: '+43 4282 2220',
    url: 'https://www.gailtal-klinik.at/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Neurorehabilitation', 'Neuropsychologie', 'Physiotherapie', 'Ergotherapie', 'Logopädie', 'Pflege'],
    completeness: 89,
    researchHighlights: ['KABEG official site describes a comprehensive Neurorehabilitationsangebot', 'Official navigation includes Neurologische Rehabilitation, Neuropsychologie, Ergotherapie, Physiotherapie and Logopädie', 'Public Carinthian hospital provider page gives direct contact details and address'],
    features: ['public-hospital', 'neuropsychology', 'inpatient-neurorehab'],
    description: {
      it: 'Clinica pubblica KABEG a Hermagor con offerta completa di neurorehabilitation e servizi neuropsicologici, fisio, ergo e logopedia.',
      en: 'A public KABEG clinic in Hermagor with a comprehensive neurorehabilitation offer and neuropsychology, physiotherapy, occupational therapy and speech therapy.'
    }
  },
  {
    id: 'optimamed-nrz-kittsee',
    name: 'OptimaMed Neurologisches Rehabilitationszentrum Kittsee',
    country: 'Austria',
    city: 'Kittsee', region: 'Burgenland', lat: 48.0926, lng: 17.0644,
    address: 'Spitalgasse 1, 2421 Kittsee', phone: '+43 2143 30100',
    url: 'https://www.neuroreha-kittsee.at/',
    conditions: ['stroke', 'tbi', 'ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Neurologie', 'Neurorehabilitation', 'Rehabilitationsmedizin', 'Therapie', 'Pflege'],
    completeness: 88,
    researchHighlights: ['Official page calls Kittsee a competence center for Neurologie and Neurorehabilitation', 'OptimaMed location directory lists Schlaganfall, Schädel-Hirn-Traumata and Multiple Sklerose for the center', 'Official page describes wirkungsorientierte Neurorehabilitation in Burgenland'],
    features: ['inpatient-neurorehab', 'brain-injury', 'ms'],
    description: {
      it: 'Centro OptimaMed nel Burgenland dedicato a neurologia e neurorehabilitation, con indicazioni tra cui ictus, trauma cranico e sclerosi multipla.',
      en: 'An OptimaMed center in Burgenland dedicated to neurology and neurorehabilitation, including stroke, brain injury and multiple sclerosis indications.'
    }
  },
  {
    id: 'rehaklinik-kitzbuehel',
    name: 'VITREA Rehaklinik Kitzbühel',
    country: 'Austria',
    city: 'Kitzbühel', region: 'Tyrol', lat: 47.4508, lng: 12.3937,
    address: 'Hornweg 32, 6370 Kitzbühel', phone: '+43 5356 670670',
    url: 'https://www.reha-kitz.at/',
    conditions: ['stroke', 'tbi', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'insurance', 'private'],
    disciplines: ['Neurologische Rehabilitation', 'Neurochirurgische Rehabilitation', 'Physiotherapie', 'Ergotherapie', 'Pflege'],
    completeness: 78,
    researchHighlights: ['Official VITREA site lists neurochirurgische Reha and describes neurological rehabilitation after stroke, neurological disease or nervous-system surgery', 'Stationary rehabilitation and ambulatory therapy are both available', 'Included with lower completeness because the clinic is mixed orthopaedic and neurochirurgical rather than neuro-only'],
    features: ['neurochirurgical-rehab'],
    description: {
      it: 'Clinica VITREA mista a Kitzbühel con percorso neurologico-neurochirurgico, inclusa riabilitazione dopo ictus o chirurgia del sistema nervoso.',
      en: 'A mixed VITREA clinic in Kitzbühel with a neurological and neurosurgical rehabilitation pathway, including rehabilitation after stroke or nervous-system surgery.'
    }
  },
  {
    id: 'optimamed-arz-klagenfurt',
    name: 'OptimaMed Ambulantes Rehabilitationszentrum Klagenfurt',
    country: 'Austria',
    city: 'Klagenfurt', region: 'Carinthia', lat: 46.6247, lng: 14.3095,
    address: '8.-Mai-Straße 3, 9020 Klagenfurt', phone: '+43 463 908013',
    url: 'https://www.rehazentrum-klagenfurt.at/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Ambulante Rehabilitation', 'Physiotherapie', 'Ergotherapie', 'Trainingstherapie'],
    completeness: 80,
    researchHighlights: ['Official page lists neurologische Rehabilitation among seven ambulatory indications', 'The center provides phase 2 after hospital care and phase 3 after inpatient or outpatient rehabilitation', 'OptimaMed page gives a central Klagenfurt outpatient rehab address and insurer-oriented access'],
    features: ['phase-2', 'phase-3', 'outpatient-neurorehab'],
    description: {
      it: 'Centro ambulatoriale OptimaMed a Klagenfurt con riabilitazione neurologica nelle fasi 2 e 3.',
      en: 'An OptimaMed outpatient rehabilitation center in Klagenfurt offering neurological rehabilitation in phases 2 and 3.'
    }
  },
  {
    id: 'optimamed-arz-wiener-neustadt',
    name: 'OptimaMed Ambulantes Rehabilitationszentrum Wiener Neustadt',
    country: 'Austria',
    city: 'Wiener Neustadt', region: 'Lower Austria', lat: 47.8130, lng: 16.2430,
    address: 'Sparkassengasse 1, 2700 Wiener Neustadt', phone: '+43 2622 90990',
    url: 'https://www.reha-wn.at/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Ambulante Rehabilitation', 'Physiotherapie', 'Ergotherapie', 'Trainingstherapie'],
    completeness: 80,
    researchHighlights: ['Official page lists neurologische Rehabilitation among seven ambulatory indications', 'The center describes phase 2 rehabilitation after hospital stay and phase 3 follow-up rehabilitation', 'OptimaMed official page provides direct address and contact data'],
    features: ['phase-2', 'phase-3', 'outpatient-neurorehab'],
    description: {
      it: 'Centro ambulatoriale OptimaMed a Wiener Neustadt con indicazione neurologica e programmi di riabilitazione fase 2 e 3.',
      en: 'An OptimaMed outpatient center in Wiener Neustadt with neurological rehabilitation and phase 2 and 3 programs.'
    }
  },
  {
    id: 'vitrea-rehazentrum-innsbruck',
    name: 'VITREA Rehazentrum Innsbruck',
    country: 'Austria',
    city: 'Innsbruck', region: 'Tyrol', lat: 47.2692, lng: 11.4041,
    address: 'Neuhauserstraße 5, 6020 Innsbruck', phone: '+43 512 3095950',
    url: 'https://www.vitrea-arz-innsbruck.at/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Ambulante Rehabilitation', 'Therapie', 'Rehabilitationsmedizin'],
    completeness: 79,
    researchHighlights: ['Official VITREA page lists neurologische Rehabilitation and Erkrankungen des zentralen und peripheren Nervensystems', 'The center states ambulatory rehabilitation in reha phases 2 and 3', 'Official page lists seven medical disciplines and direct Innsbruck contact data'],
    features: ['phase-2', 'phase-3', 'outpatient-neurorehab'],
    description: {
      it: 'Centro VITREA di riabilitazione ambulatoriale a Innsbruck, incluso percorso neurologico per patologie del sistema nervoso centrale e periferico.',
      en: 'A VITREA outpatient rehabilitation center in Innsbruck, including neurological rehabilitation for central and peripheral nervous-system conditions.'
    }
  },
  {
    id: 'vitrea-rehazentrum-woergl',
    name: 'VITREA Rehazentrum Wörgl',
    country: 'Austria',
    city: 'Wörgl', region: 'Tyrol', lat: 47.4892, lng: 12.0620,
    address: 'Innsbrucker Straße 9, 6300 Wörgl', phone: '+43 5332 20830300',
    url: 'https://www.ambulante-reha-woergl.at/',
    conditions: ['stroke', 'tbi', 'ms', 'parkinson', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'insurance'],
    disciplines: ['Neurologische Rehabilitation', 'Ambulante Rehabilitation', 'Therapie', 'Rehabilitationsmedizin'],
    completeness: 79,
    researchHighlights: ['Official VITREA page lists neurologische Rehabilitation as a service line', 'The Wörgl page lists diseases of the central and peripheral nervous system among supported indications', 'Official page states contracts with PVA, BVAEB, ÖGK, KUF and SVS'],
    features: ['outpatient-neurorehab'],
    description: {
      it: 'Centro VITREA di riabilitazione ambulatoriale a Wörgl con offerta neurologica per patologie del sistema nervoso.',
      en: 'A VITREA outpatient rehabilitation center in Wörgl with a neurological pathway for nervous-system conditions.'
    }
  },
  {
    id: 'hammel-neurocenter',
    name: 'Regionshospitalet Hammel Neurocenter',
    country: 'Denmark',
    city: 'Hammel', region: 'Central Denmark', lat: 56.2568, lng: 9.8683,
    address: 'Voldbyvej 15A, 8450 Hammel', phone: '+45 78 41 96 00',
    url: 'https://www.hospitalsenhedmidt.dk/afdelinger-og-steder/regionshospitalet-hammel-neurocenter/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor', 'pediatric'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurorehabilitering', 'NeuroIntensiv Rehabilitering', 'Neuropsykologi', 'Fysioterapi', 'Ergoterapi', 'Logopædi'],
    completeness: 92,
    researchHighlights: ['Official Region Midtjylland page says Hammel rehabilitates patients with acquired brain injury at highly specialised and regional levels', 'Official service cards include NeuroIntensiv Rehabilitering and Klinik for Neurorehabilitering', 'Offers clinics for adults, children/young people, cerebral palsy, mental functional impairments and spasticity after brain injury'],
    features: ['brain-injury', 'highly-specialised', 'neurointensive'],
    description: {
      it: 'Centro pubblico altamente specializzato per neurorehabilitation dopo danno cerebrale acquisito, con reparti, cliniche e neurointensiva.',
      en: 'A public highly specialised neurorehabilitation center for acquired brain injury, with wards, clinics and neurointensive rehabilitation.'
    }
  },
  {
    id: 'vestdansk-center-rygmarvsskade',
    name: 'Vestdansk Center for Rygmarvsskade',
    country: 'Denmark',
    city: 'Viborg', region: 'Central Denmark', lat: 56.4525, lng: 9.4000,
    address: 'Søndersøparken 11, 8800 Viborg', phone: '+45 78 44 00 00',
    url: 'https://www.hospitalsenhedmidt.dk/afdelinger-og-steder/regionshospitalet-viborg/neurologi/vestdansk-center-for-rygmarvsskade/',
    conditions: ['spinal', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Rygmarvsskade', 'Rehabilitering', 'Neurologi', 'Sengeafsnit', 'Opfølgning og kontrol'],
    completeness: 91,
    researchHighlights: ['Official page describes a highly specialised center rehabilitating people with spinal cord injury from Jutland and Funen', 'Offers Afsnit for Rygmarvsskade, Klinik for Rygmarvsskade and short rehabilitation pathways', 'Public Regionshospitalet Viborg/Neurologi service'],
    features: ['spinal-cord', 'highly-specialised'],
    description: {
      it: 'Centro pubblico altamente specializzato a Viborg per riabilitazione dopo lesione midollare, con reparto e clinica di follow-up.',
      en: 'A public highly specialised Viborg center for spinal cord injury rehabilitation, with an inpatient ward and follow-up clinic.'
    }
  },
  {
    id: 'vejlefjord-rehabilitering',
    name: 'Vejlefjord Rehabilitering',
    country: 'Denmark',
    city: 'Stouby', region: 'Central Denmark', lat: 55.7186, lng: 9.8572,
    address: 'Sanatorievej 27B, 7140 Stouby', phone: '+45 76 82 33 33',
    url: 'https://vejlefjord.dk/voksne/specialiseret-rehabilitering/',
    conditions: ['tbi', 'stroke', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private', 'insurance'],
    disciplines: ['Hjerneskaderehabilitering', 'Neuropsykologi', 'Neuropædagogik', 'Fysioterapi', 'Ergoterapi'],
    completeness: 88,
    researchHighlights: ['Official page states Vejlefjord has treated, retrained and rehabilitated people with acquired brain injury since 1985', 'It describes Vejlefjord as one of Denmark\'s oldest special hospitals for brain injury', 'Pathways are multidisciplinary, coordinated and holistic'],
    features: ['brain-injury', 'special-hospital'],
    description: {
      it: 'Specialsygehus danese per riabilitazione dopo danno cerebrale acquisito, con percorsi multidisciplinari e accesso pubblico, assicurativo o privato.',
      en: 'A Danish special hospital for acquired brain injury rehabilitation, with multidisciplinary pathways and public, insurance or private access routes.'
    }
  },
  {
    id: 'center-for-hjerneskade-copenhagen',
    name: 'Center for Hjerneskade',
    country: 'Denmark',
    city: 'Copenhagen', region: 'Capital Region', lat: 55.6625, lng: 12.5893,
    address: 'Amagerfælledvej 56A, 2300 København S', phone: '+45 35 32 90 06',
    url: 'https://cfh.ku.dk/',
    conditions: ['tbi', 'stroke', 'cognitive', 'pediatric', 'neuromotor'],
    technologies: [], modes: ['outpatient'], access: ['public', 'private'],
    disciplines: ['Hjerneskaderehabilitering', 'Neuropsykologi', 'Sprogtræning', 'Kognitiv træning', 'Fysisk genoptræning'],
    completeness: 83,
    researchHighlights: ['Official Center for Hjerneskade metadata says it specialises in training physical, language and cognitive functions', 'The center offers intensive adapted training for children, young people and adults with acquired brain injury', 'Official University of Copenhagen-hosted page lists adult brain injury and concussion services'],
    features: ['brain-injury', 'outpatient-specialist', 'cognitive-rehab'],
    description: {
      it: 'Centro specialistico ambulatoriale a Copenaghen per danno cerebrale acquisito, funzioni cognitive, linguistiche e fisiche.',
      en: 'A Copenhagen outpatient specialist center for acquired brain injury, including cognitive, language and physical rehabilitation.'
    }
  },
  {
    id: 'sclerosehospitalet-ry',
    name: 'Sclerosehospitalet i Ry',
    country: 'Denmark',
    city: 'Ry', region: 'Central Denmark', lat: 56.0870, lng: 9.7648,
    address: 'Klostervej 136, 8680 Ry', phone: '+45 78 41 25 00',
    url: 'https://www.scleroseforeningen.dk/sclerosehospitalerne/',
    conditions: ['ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Sclerosespecialiseret rehabilitering', 'Neurologi', 'Fysioterapi', 'Ergoterapi', 'Patientinddragelse'],
    completeness: 84,
    researchHighlights: ['Official Sclerosehospitalerne page says the hospitals are specialists in rehabilitation for people with sclerosis', 'The page states people are referred by their doctor or neurologist', 'Ry is one of the two official Sclerosehospitalerne locations'],
    features: ['multiple-sclerosis', 'disease-specific-rehab'],
    description: {
      it: 'Sede di Ry degli ospedali danesi specializzati nella riabilitazione per persone con sclerosi multipla.',
      en: 'The Ry site of the Danish hospitals specialising in rehabilitation for people with multiple sclerosis.'
    }
  },
  {
    id: 'sclerosehospitalet-haslev',
    name: 'Sclerosehospitalet i Haslev',
    country: 'Denmark',
    city: 'Haslev', region: 'Zealand', lat: 55.3238, lng: 11.9645,
    address: 'Ringstedvej 106, 4690 Haslev', phone: '+45 78 41 25 00',
    url: 'https://www.scleroseforeningen.dk/sclerosehospitalerne/kontakt-os/',
    conditions: ['ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Sclerosespecialiseret rehabilitering', 'Neurologi', 'Fysioterapi', 'Ergoterapi', 'Patientinddragelse'],
    completeness: 84,
    researchHighlights: ['Official Sclerosehospitalerne page says the hospitals provide sclerosis-specialised rehabilitation for all people with sclerosis', 'The page lists tailored rehabilitation stays and referral by doctor or neurologist', 'Haslev is one of the two official Sclerosehospitalerne locations'],
    features: ['multiple-sclerosis', 'disease-specific-rehab'],
    description: {
      it: 'Sede di Haslev degli ospedali danesi specializzati nella riabilitazione per persone con sclerosi multipla.',
      en: 'The Haslev site of the Danish hospitals specialising in rehabilitation for people with multiple sclerosis.'
    }
  },
  {
    id: 'specialhospitalet-rodovre',
    name: 'Specialhospitalet i Rødovre',
    country: 'Denmark',
    city: 'Rødovre', region: 'Capital Region', lat: 55.6824, lng: 12.4492,
    address: 'Fjeldhammervej 8, 2610 Rødovre', phone: '+45 36 73 90 00',
    url: 'https://www.specialhospitalet.dk/om-os/faciliteter/faciliteter-i-rodovre/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['vr'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Specialiseret rehabilitering', 'Rygmarvsskade', 'Polio', 'Fysioterapi', 'Ergoterapi'],
    completeness: 83,
    researchHighlights: ['Official site says Specialhospitalet treats polio and accident patients and has more than 75 years of specialised rehabilitation experience', 'Navigation and research sections repeatedly identify spinal cord injury rehabilitation', 'Rødovre site has modern accessible training and treatment facilities'],
    features: ['spinal-cord', 'post-polio', 'special-hospital'],
    description: {
      it: 'Sede di Rødovre dello Specialhospitalet, con riabilitazione specialistica per pazienti con esiti di polio, incidenti e lesione midollare.',
      en: 'The Rødovre site of Specialhospitalet, providing specialised rehabilitation for post-polio, accident and spinal cord injury patients.'
    }
  },
  {
    id: 'specialhospitalet-aarhus',
    name: 'Specialhospitalet i Aarhus',
    country: 'Denmark',
    city: 'Aarhus', region: 'Central Denmark', lat: 56.1418, lng: 10.1998,
    address: 'MarselisborgCentret, Evald Krogs Gade 4C, 8000 Aarhus C', phone: '+45 36 73 90 00',
    url: 'https://www.specialhospitalet.dk/om-os/faciliteter/faciliteter-i-aarhus/',
    conditions: ['spinal', 'neuromotor'],
    technologies: ['vr'], modes: ['outpatient'], access: ['public'],
    disciplines: ['Specialiseret rehabilitering', 'Rygmarvsskade', 'Polio', 'Fysioterapi', 'Ergoterapi'],
    completeness: 80,
    researchHighlights: ['Official site says Specialhospitalet treats polio and accident patients with specialised rehabilitation', 'Research topics include rehabilitation for spinal cord injury and post-polio sequelae', 'Aarhus site has accessible gym facilities, warm-water pool access and a dedicated address at MarselisborgCentret'],
    features: ['spinal-cord', 'post-polio', 'special-hospital'],
    description: {
      it: 'Sede di Aarhus dello Specialhospitalet, con programmi specialistici per esiti di polio, incidenti e lesione midollare.',
      en: 'The Aarhus site of Specialhospitalet, with specialist rehabilitation for post-polio, accident and spinal cord injury patients.'
    }
  },
  {
    id: 'validia-synapsia-helsinki',
    name: 'Validia Kuntoutuskeskus Synapsia',
    country: 'Finland',
    city: 'Helsinki', region: 'Uusimaa', lat: 60.1879, lng: 24.9139,
    address: 'Nordenskiöldinkatu 18 B, 00250 Helsinki', phone: '+358 29 170 7220',
    url: 'https://www.validia.fi/kuntoutus/',
    conditions: ['tbi', 'spinal', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['outpatient', 'inpatient'], access: ['public', 'private'],
    disciplines: ['Neurologinen kuntoutus', 'Moniammatillinen yksilökuntoutus', 'Avokuntoutus', 'Fysioterapia', 'Toimintaterapia'],
    completeness: 84,
    researchHighlights: ['Official Validia page identifies the provider as an expert in rehabilitation for brain and spinal cord injuries and other neurological injuries and diseases', 'The page lists Kuntoutuskeskus Synapsia in Helsinki as a rehabilitation unit', 'Validia lists multidisciplinary individual rehabilitation and outpatient rehabilitation services'],
    features: ['brain-injury', 'spinal-cord', 'multidisciplinary-rehab'],
    description: {
      it: 'Unità Validia a Helsinki per riabilitazione neurologica multidisciplinare, inclusi esiti di lesioni cerebrali e midollari.',
      en: 'A Validia Helsinki unit for multidisciplinary neurological rehabilitation, including brain and spinal cord injury rehabilitation.'
    }
  },
  {
    id: 'maskun-neurologinen-kuntoutuskeskus',
    name: 'Maskun neurologinen kuntoutuskeskus',
    country: 'Finland',
    city: 'Masku', region: 'Southwest Finland', lat: 60.5726, lng: 22.1029,
    address: 'Vaihemäentie 10 A, 21250 Masku', phone: '+358 2 439 2111',
    url: 'https://kuntoutukseen.fi/palvelut/maskun-neurologinen-kuntoutuskeskus/',
    conditions: ['ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Neurologinen kuntoutus', 'Sopeutumisen tuki', 'Yksilökuntoutus', 'Kurssikuntoutus', 'Moniammatillinen kuntoutus'],
    completeness: 86,
    researchHighlights: ['Official Kuntoutukseen page describes Masku as Finland\'s longest-running unit focused on rehabilitation and adaptation support for neurological diseases', 'The page states that the largest client group is people with MS', 'It also identifies Masku as a resource center for rare neurological diseases'],
    features: ['multiple-sclerosis', 'rare-neurological-diseases', 'multidisciplinary-rehab'],
    description: {
      it: 'Centro Neuroliitto a Masku specializzato in riabilitazione per malattie neurologiche, sclerosi multipla e condizioni neurologiche rare.',
      en: 'A Neuroliitto center in Masku specialising in rehabilitation for neurological diseases, multiple sclerosis and rare neurological conditions.'
    }
  },
  {
    id: 'peurunka-neurologinen-kuntoutus',
    name: 'Peurunka neurologinen kuntoutus',
    country: 'Finland',
    city: 'Laukaa', region: 'Central Finland', lat: 62.4167, lng: 25.8826,
    address: 'Peurungantie 85, 41340 Laukaa', phone: '+358 20 751 6300',
    url: 'https://peurunka.fi/kuntoutus/vaativa-laakinnallinen-kuntoutus/',
    conditions: ['stroke', 'spinal', 'parkinson', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public', 'private'],
    disciplines: ['Vaativa lääkinnällinen kuntoutus', 'Aikuisten neurologinen palvelu', 'Moniammatillinen yksilökuntoutus', 'Kuntoutuskurssit', 'Fysioterapia'],
    completeness: 84,
    researchHighlights: ['Official Peurunka demanding medical rehabilitation page lists a neurological pathway for people with neurological disease or spinal cord injury', 'Peurunka describes a multidisciplinary individual rehabilitation need for eligible neurological clients', 'Official Peurunka course pages include adult neurological rehabilitation, stroke and movement-disorder rehabilitation courses'],
    features: ['neurological-disease', 'spinal-cord', 'kela-rehabilitation'],
    description: {
      it: 'Centro di riabilitazione a Laukaa con percorsi neurologici e riabilitazione medica intensiva per malattie neurologiche e lesioni midollari.',
      en: 'A Laukaa rehabilitation center with neurological pathways and demanding medical rehabilitation for neurological disease and spinal cord injury.'
    }
  },
  {
    id: 'neuropiste-helsinki',
    name: 'Neuropiste Helsinki',
    country: 'Finland',
    city: 'Helsinki', region: 'Uusimaa', lat: 60.2089, lng: 24.9766,
    address: 'Arabiankatu 17, 00560 Helsinki', phone: '+358 40 088 4667',
    url: 'https://www.neuropiste.fi/toimipisteet/helsinki/',
    conditions: ['neuromotor', 'cognitive'],
    technologies: ['robotics', 'gait'], modes: ['outpatient'], access: ['public', 'private'],
    disciplines: ['Neurologinen kuntoutus', 'Fysioterapia', 'Kävelykuntoutus', 'Toimintaterapia', 'Neurologin vastaanotto'],
    completeness: 80,
    researchHighlights: ['Official Helsinki branch page says the Arabia and Itäkeskus sites provide rehabilitation for neurological disorders', 'The page states that training uses robotics and game technology', 'The services list includes Lokomat robotic gait rehabilitation at Arabia'],
    features: ['outpatient-neurorehab', 'robotic-gait', 'neurologist'],
    description: {
      it: 'Sede Neuropiste di Helsinki per riabilitazione neurologica ambulatoriale, con robotica Lokomat e tecnologie per il cammino.',
      en: 'Neuropiste\'s Helsinki branch for outpatient neurological rehabilitation, including Lokomat robotic gait training and gait technologies.'
    }
  },
  {
    id: 'neuropiste-turku',
    name: 'Neuropiste Turku',
    country: 'Finland',
    city: 'Turku', region: 'Southwest Finland', lat: 60.4552, lng: 22.2584,
    address: 'Läntinen Pitkäkatu 21-23 B, 20100 Turku', phone: '+358 40 088 4667',
    url: 'https://www.neuropiste.fi/toimipisteet/turku/',
    conditions: ['neuromotor'],
    technologies: ['robotics', 'gait'], modes: ['outpatient'], access: ['public', 'private'],
    disciplines: ['Neurologinen kuntoutus', 'Fysioterapia', 'Kävelykuntoutus', 'Toimintaterapia', 'Allasterapia'],
    completeness: 79,
    researchHighlights: ['Official Turku branch page says Neuropiste Turku specialises in rehabilitation for neurological diseases and injuries', 'The page lists gait rehabilitation and cooperation with the client\'s multidisciplinary network', 'Equipment includes robotic OmegoPlus gait rehabilitation and LiteGait body-weight-supported training'],
    features: ['outpatient-neurorehab', 'gait-rehabilitation', 'rehab-technology'],
    description: {
      it: 'Sede Neuropiste di Turku specializzata in riabilitazione ambulatoriale per malattie e lesioni neurologiche, con tecnologie per il cammino.',
      en: 'Neuropiste\'s Turku branch specialising in outpatient rehabilitation for neurological diseases and injuries, with gait rehabilitation technology.'
    }
  },
  {
    id: 'neuropiste-seinajoki',
    name: 'Neuropiste Seinäjoki',
    country: 'Finland',
    city: 'Seinäjoki', region: 'South Ostrobothnia', lat: 62.7966, lng: 22.8085,
    address: 'Karvarinkatu 8, 60320 Seinäjoki', phone: '+358 40 088 4667',
    url: 'https://www.neuropiste.fi/toimipisteet/seinajoki/',
    conditions: ['neuromotor', 'pediatric'],
    technologies: ['gait'], modes: ['outpatient'], access: ['public', 'private'],
    disciplines: ['Neurologinen fysioterapia', 'Fysioterapia', 'Toimintakykytestaus', 'Kotikäynnit', 'Kuntosaliharjoittelu'],
    completeness: 78,
    researchHighlights: ['Official Seinäjoki branch page states its special area is rehabilitation for neurological diseases and injuries', 'The service list includes neurological physiotherapy for children and young people as well as adults', 'The page describes body-weight-supported gait training as an evidence-based method in neurological rehabilitation'],
    features: ['outpatient-neurorehab', 'pediatric-neurophysiotherapy', 'gait-rehabilitation'],
    description: {
      it: 'Sede Neuropiste di Seinäjoki con fisioterapia neurologica per adulti, bambini e giovani, inclusa riabilitazione del cammino.',
      en: 'Neuropiste\'s Seinäjoki branch with neurological physiotherapy for adults, children and young people, including gait rehabilitation.'
    }
  },
  {
    id: 'national-rehabilitation-hospital-dublin',
    name: 'National Rehabilitation Hospital',
    country: 'Ireland',
    city: 'Dún Laoghaire', region: 'County Dublin', lat: 53.2755, lng: -6.1530,
    address: 'Rochestown Avenue, Dún Laoghaire, Co. Dublin, A96 RPN4', phone: '+353 1 235 5000',
    url: 'https://www.nrh.ie/rehabilitation-services/',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive', 'pediatric'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Complex specialist rehabilitation', 'Acquired brain injury and stroke', 'Spinal cord system of care', 'Paediatric rehabilitation', 'Outpatient and outreach services'],
    completeness: 91,
    researchHighlights: ['Official NRH rehabilitation services page describes consultant-led rehabilitation teams and complex specialist rehabilitation services', 'The page lists Acquired Brain Injury and Stroke Specialty and Spinal Cord System of Care programmes', 'NRH accepts adult and paediatric referrals requiring complex specialist rehabilitation services'],
    features: ['national-specialist-hospital', 'brain-injury-stroke', 'spinal-cord'],
    description: {
      it: 'Ospedale nazionale irlandese per riabilitazione specialistica complessa, con programmi per danno cerebrale, ictus, lesioni midollari e pazienti pediatrici.',
      en: 'Ireland\'s national specialist rehabilitation hospital, with programmes for brain injury, stroke, spinal cord injury and paediatric rehabilitation.'
    }
  },
  {
    id: 'peamount-neuro-rehabilitation',
    name: 'Peamount Healthcare Neuro-Rehabilitation',
    country: 'Ireland',
    city: 'Newcastle', region: 'County Dublin', lat: 53.3149, lng: -6.4853,
    address: 'Newcastle Road, Newcastle, Co. Dublin, D22 Y008', phone: '+353 1 601 0300',
    url: 'https://www.peamount.ie/neuro-rehabilitation/',
    conditions: ['stroke', 'tbi', 'neuromotor', 'cognitive', 'ms', 'parkinson'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Neuro-rehabilitation', 'Consultant-led multidisciplinary rehabilitation', 'Level 2 specialist rehabilitation', 'Managed Clinical Rehabilitation Network', 'Goal-directed rehabilitation'],
    completeness: 85,
    researchHighlights: ['Official Peamount page describes a consultant-led multidisciplinary level 2 specialist inpatient neuro-rehabilitation service', 'The service has a 15-bed unit predominantly for patients under 65 years', 'The page lists traumatic brain injury, stroke, progressive neurological conditions and other neurological conditions'],
    features: ['level-2-specialist-rehab', 'inpatient-neurorehab', 'managed-clinical-network'],
    description: {
      it: 'Servizio specialistico di neuroriabilitazione inpatient a Peamount, guidato da consulenti e integrato nella rete clinica di riabilitazione irlandese.',
      en: 'A specialist inpatient neuro-rehabilitation service at Peamount, consultant-led and integrated into Ireland\'s managed clinical rehabilitation network.'
    }
  },
  {
    id: 'royal-hospital-donnybrook-neurorehabilitation',
    name: 'Royal Hospital Donnybrook Specialist Neurorehabilitation',
    country: 'Ireland',
    city: 'Dublin', region: 'County Dublin', lat: 53.3251, lng: -6.2482,
    address: 'Bloomfield Avenue, Donnybrook, Dublin', phone: '+353 1 406 6600',
    url: 'https://rhd.ie/services/neurorehabilitation/',
    conditions: ['tbi', 'ms', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Specialist neurorehabilitation', 'Rehabilitation medicine', 'Multidisciplinary rehabilitation', 'Progressive neurological conditions', 'Acquired brain injury'],
    completeness: 82,
    researchHighlights: ['Official Royal Hospital Donnybrook page describes specialist neurorehabilitation for adults under 65 with varying degrees of disability', 'The service is a specialist rehabilitation consultant-led multidisciplinary team', 'The page says conditions treated include multiple sclerosis and acquired brain injury in a 12-bed unit'],
    features: ['specialist-neurorehab', 'acquired-brain-injury', 'progressive-neurological-conditions'],
    description: {
      it: 'Unità specialistica di neurorehabilitation a Donnybrook per adulti sotto i 65 anni, incluse sclerosi multipla e lesione cerebrale acquisita.',
      en: 'A specialist neurorehabilitation unit in Donnybrook for adults under 65, including multiple sclerosis and acquired brain injury.'
    }
  },
  {
    id: 'bloomfield-neurological-neurodegenerative',
    name: 'Bloomfield Hospital Neurological and Neurodegenerative Disorders',
    country: 'Ireland',
    city: 'Dublin', region: 'County Dublin', lat: 53.2820, lng: -6.3000,
    address: 'Stocking Lane, Rathfarnham, Dublin 16, D16 C6T4', phone: '+353 1 495 0021',
    url: 'https://bloomfield.ie/service/other-neurological-neurodegenerative-disorders/',
    conditions: ['neuromotor', 'cognitive', 'neuromuscular'],
    technologies: [], modes: ['inpatient', 'residential'], access: ['public', 'private'],
    disciplines: ['Neurological and neurodegenerative disorders', 'Rare neurological diseases', 'Rehabilitative care', 'Neuropsychiatry', 'Multidisciplinary inpatient care'],
    completeness: 76,
    researchHighlights: ['Official Bloomfield page focuses on neurological and neurodegenerative disorders with cognitive and behavioural expression', 'The page refers to rare neurological diseases and long-term or rehabilitative care provision in Ireland', 'Bloomfield states it specialises in provision of care for this group of conditions at its Rathfarnham facilities'],
    features: ['neurodegenerative-disorders', 'rare-neurological-diseases', 'residential-rehab-care'],
    description: {
      it: 'Ospedale specialistico a Rathfarnham per disturbi neurologici e neurodegenerativi con bisogni cognitivi, comportamentali e riabilitativi complessi.',
      en: 'A specialist Rathfarnham hospital for neurological and neurodegenerative disorders with complex cognitive, behavioural and rehabilitative needs.'
    }
  },
  {
    id: 'national-rehabilitation-centre-vaivari',
    name: 'National Rehabilitation Centre Vaivari',
    country: 'Latvia',
    city: 'Jūrmala', region: 'Jūrmala', lat: 56.9591, lng: 23.6677,
    address: 'Asaru prospekts 61, Jūrmala, LV-2008', phone: '+371 66 958 555',
    url: 'https://nrcvaivari.lv/lv',
    conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive', 'pediatric'],
    technologies: ['robotics', 'vr', 'exoskeleton'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurorehabilitation', 'Spinal patient rehabilitation', 'Inpatient rehabilitation', 'Outpatient rehabilitation', 'Multidisciplinary rehabilitation'],
    completeness: 94,
    researchHighlights: ['Official Vaivari site identifies it as Latvia’s largest state medical rehabilitation institution and lists inpatient, outpatient and day-hospital services', 'Official programme list includes neurorehabilitation and spinal patient rehabilitation', 'Official site lists Lokomat Pro robotic gait training, Andago and Ekso GT exoskeleton technology for patients with lower-limb paresis or paralysis'],
    features: ['national-rehabilitation-centre', 'neurorehab', 'spinal-cord', 'robotic-gait-training'],
    description: {
      it: 'Centro nazionale pubblico di riabilitazione a Jūrmala con programmi di neuroriabilitazione e lesione midollare, in regime ricoverato e ambulatoriale.',
      en: 'Latvia’s public national rehabilitation centre in Jūrmala, with neurorehabilitation and spinal rehabilitation programmes across inpatient and outpatient care.'
    }
  },
  {
    id: 'riga-east-university-hospital-rehabilitation-clinic',
    name: 'Rīgas Austrumu klīniskā universitātes slimnīca Rehabilitācijas klīnika',
    country: 'Latvia',
    city: 'Riga', region: 'Riga', lat: 56.9656, lng: 24.2465,
    address: 'Hipokrāta iela 2, Rīga, LV-1038', phone: '+371 67 042 950',
    url: 'https://aslimnica.lv/stacionari/gailezers/rehabilitacijas-klinika/',
    conditions: ['stroke', 'neurodegenerative', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Stroke rehabilitation programme', 'Neurodegenerative disease rehabilitation', 'Neuro-oncology rehabilitation', 'Physical and rehabilitation medicine', 'Occupational therapy'],
    completeness: 91,
    researchHighlights: ['Official Rīga East University Hospital page says its rehabilitation clinic provides inpatient, day-hospital and outpatient rehabilitation across its hospital sites', 'Official programme list includes rehabilitation for stroke, neurodegenerative disease and neuro-oncology patients', 'Official clinic page describes care for acute and chronic neurological disorders from a team of rehabilitation physicians and functional specialists'],
    features: ['stroke-rehab', 'neurodegenerative-rehab', 'neuro-oncology-rehab', 'inpatient-rehab'],
    description: {
      it: 'Clinica pubblica di riabilitazione dell’ospedale universitario di Riga Est, con programmi per ictus, malattie neurodegenerative e neuro-oncologia.',
      en: 'A public Riga East University Hospital rehabilitation clinic with programmes for stroke, neurodegenerative disease and neuro-oncology patients.'
    }
  },
  {
    id: 'pauls-stradins-neurology-clinic',
    name: 'Paula Stradiņa Klīniskā universitātes slimnīca Neiroloģijas klīnika',
    country: 'Latvia',
    city: 'Riga', region: 'Riga', lat: 56.9305, lng: 24.0510,
    address: 'Pilsoņu iela 13, Rīga, LV-1002', phone: '+371 67 069 280',
    url: 'https://www.stradini.lv/lv/content/neirologijas-klinika-0',
    conditions: ['stroke', 'ms', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurology', 'Stroke unit', 'Early neurological rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech therapy'],
    completeness: 88,
    researchHighlights: ['Official Pauls Stradiņš University Hospital page lists a stroke unit, multiple sclerosis centre and rare neurological diseases centre', 'Official page states that inpatient neurological care includes early rehabilitation, physiotherapy, occupational therapy and speech-therapy correction for language disorders', 'The clinic provides both outpatient and inpatient specialist neurological care nationally'],
    features: ['stroke-unit', 'early-neurorehab', 'multiple-sclerosis', 'speech-rehabilitation'],
    description: {
      it: 'Clinica neurologica universitaria pubblica a Riga con unità ictus, sclerosi multipla e riabilitazione neurologica precoce multidisciplinare.',
      en: 'A public university neurology clinic in Riga with a stroke unit, multiple sclerosis service and multidisciplinary early neurological rehabilitation.'
    }
  },
  {
    id: 'children-clinical-university-hospital-neurology',
    name: 'Bērnu klīniskā universitātes slimnīca Bērnu neiroloģijas un neiroķirurģijas klīnika',
    country: 'Latvia',
    city: 'Riga', region: 'Riga', lat: 56.9138, lng: 24.0849,
    address: 'Vienības gatve 45, Rīga, LV-1004', phone: '+371 67 064 405',
    url: 'https://www.bkus.lv/bernu-neirologijas-un-neirokirurgijas-klinika',
    conditions: ['pediatric', 'spinal', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Paediatric neurology', 'Paediatric neurosurgery', 'Neurological rehabilitation', 'Physiotherapy', 'Multidisciplinary paediatric care'],
    completeness: 85,
    researchHighlights: ['Official Children’s Clinical University Hospital page says its paediatric neurology and neurosurgery clinic provides rehabilitation alongside assessment and treatment of acute and chronic nervous-system disease', 'Official service list includes neuromuscular and demyelinating diseases, central nervous-system vascular diseases and consequences of nervous-system trauma', 'The official page reports treatment of about 2,000 patients yearly from infancy onward'],
    features: ['pediatric-neurorehab', 'neuromuscular', 'nervous-system-trauma', 'multidisciplinary-care'],
    description: {
      it: 'Clinica pediatrica universitaria pubblica a Riga con riabilitazione per malattie neurologiche, neuromuscolari, demielinizzanti e conseguenze di traumi del sistema nervoso.',
      en: 'A public university paediatric clinic in Riga providing rehabilitation for neurological, neuromuscular and demyelinating conditions and nervous-system trauma sequelae.'
    }
  },
  {
    id: 'liepaja-regional-hospital-inpatient-rehabilitation',
    name: 'Liepājas reģionālā slimnīca Stacionārā rehabilitācijas nodaļa',
    country: 'Latvia',
    city: 'Liepāja', region: 'Kurzeme', lat: 56.5025, lng: 21.0101,
    address: 'Slimnīcas iela 25, Liepāja, LV-3414', phone: '+371 63 403 222',
    url: 'https://liepajasslimnica.lv/pakalpojumi/stacionarie-pakalpojumi/fizikalas-terapijas-un-rehabilitacijas-nodala',
    conditions: ['stroke', 'neuromotor', 'cognitive'],
    technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Inpatient medical rehabilitation', 'Neurological rehabilitation', 'Physiotherapy', 'Occupational therapy', 'High-intensity rehabilitation'],
    completeness: 83,
    researchHighlights: ['Official Liepāja Regional Hospital page identifies its inpatient rehabilitation department as treating neurological conditions with individual treatment plans', 'Official page describes moderate- and high-intensity subacute medical rehabilitation of two to four hours daily', 'The department also provides long-term rehabilitation for chronic functional impairment with high complication or deterioration risk'],
    features: ['inpatient-rehab', 'neurological-rehabilitation', 'subacute-rehab', 'high-intensity-rehab'],
    description: {
      it: 'Reparto pubblico di riabilitazione ospedaliera a Liepāja per patologie neurologiche, con programmi subacuti e a lungo termine di intensità moderata o alta.',
      en: 'A public inpatient rehabilitation department in Liepāja for neurological conditions, providing moderate- and high-intensity subacute and long-term programmes.'
    }
  },
  {
    id: 'rehazenter-luxembourg',
    name: 'Centre National de Rééducation Fonctionnelle et de Réadaptation Rehazenter',
    country: 'Luxembourg',
    city: 'Luxembourg', region: 'Luxembourg District', lat: 49.6308, lng: 6.1652,
    address: '1, rue André Vésale, L-2674 Luxembourg', phone: '+352 26 98 1',
    url: 'https://www.rehazenter.lu/fr/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurological rehabilitation', 'Physical medicine and rehabilitation', 'Neuropsychology', 'Physiotherapy', 'Occupational therapy', 'Speech therapy'],
    completeness: 94,
    researchHighlights: ['Official Rehazenter information identifies dedicated neurological and trauma-orthopaedic rehabilitation units, with both inpatient rooms and ambulatory activity', 'Its official 2024 annual report describes neurological rehabilitation for severe stroke sequelae, severe traumatic brain injury, disorders of consciousness and spinal cord injury', 'The annual report lists neurological rehabilitation stays for stroke, spinal cord injury, Parkinson disease, multiple sclerosis, myopathy, Guillain-Barre syndrome and severe brain injury'],
    features: ['national-rehabilitation-centre', 'neurological-rehabilitation', 'brain-injury', 'spinal-cord', 'inpatient-rehab'],
    description: {
      it: 'Centro nazionale pubblico di riabilitazione del Lussemburgo con unità di riabilitazione neurologica per ictus, trauma cranico, lesione midollare, Parkinson e sclerosi multipla.',
      en: 'Luxembourg’s public national rehabilitation centre, with neurological rehabilitation for stroke, brain injury, spinal cord injury, Parkinson disease and multiple sclerosis.'
    }
  },
  {
    id: 'hrs-geriatric-neurological-rehabilitation',
    name: 'Hôpitaux Robert Schuman Service de Rééducation Gériatrique et Neurologique',
    country: 'Luxembourg',
    city: 'Luxembourg', region: 'Luxembourg District', lat: 49.6069, lng: 6.1258,
    address: '36, rue Sainte Zithe, L-2763 Luxembourg', phone: '+352 28 63 85 72',
    url: 'https://www.hopitauxschuman.lu/fr/accessibilite/accessibilite-brochure-prise-en-charge-des-avc-aux-hopitaux-robert-schuman/',
    conditions: ['stroke', 'parkinson', 'cognitive', 'neuromotor'],
    technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Geriatric and neurological rehabilitation', 'Stroke rehabilitation', 'Physical medicine and rehabilitation', 'Physiotherapy', 'Occupational therapy', 'Speech therapy', 'Neuropsychology'],
    completeness: 88,
    researchHighlights: ['Official Hôpitaux Robert Schuman stroke-care brochure describes an inpatient geriatric/neurological rehabilitation unit at the ZithaKlinik site', 'The official eligibility description includes functional loss after stroke and advanced degenerative disease', 'Official programme information describes personalised functional rehabilitation delivered by rehabilitation physicians, nursing staff, physiotherapists, occupational therapists, psychologists and dietitians, with motor and speech rehabilitation'],
    features: ['stroke-rehab', 'geriatric-neurorehab', 'inpatient-rehab', 'multidisciplinary-rehab'],
    description: {
      it: 'Servizio ospedaliero pubblico a Lussemburgo per riabilitazione geriatrica e neurologica, incluso post-ictus e malattie degenerative avanzate.',
      en: 'A public Luxembourg hospital service providing geriatric and neurological rehabilitation, including after stroke and advanced degenerative disease.'
    }
  },
  {
    id: 'innbn-neurological-rehabilitation-bucharest',
    name: 'Institutul Național de Neurologie și Boli Neurovasculare Compartiment Recuperare Neurologică',
    country: 'Romania', city: 'Bucharest', region: 'Bucharest', lat: 44.3937, lng: 26.1203,
    address: 'Șoseaua Berceni 10-12, Sector 4, București', phone: '+40 21 334 3004',
    url: 'https://www.innbn-bucuresti.ro/organizare/compartimente/recuperare-neurologica',
    conditions: ['stroke', 'tbi', 'spinal', 'cognitive', 'neuromotor'], technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Neurological rehabilitation', 'Neurology', 'Neurovascular medicine'], completeness: 86,
    researchHighlights: ['Official institute page identifies a dedicated neurological rehabilitation department with 20 beds at the National Institute of Neurology and Neurovascular Diseases', 'The institute is Romania’s national neurological and neurovascular specialist provider.'],
    features: ['national-specialist-institute', 'neurological-rehabilitation', 'inpatient-rehab'],
    description: { it: 'Reparto pubblico nazionale di riabilitazione neurologica a Bucarest, con 20 posti letto nel principale istituto neurovascolare del paese.', en: 'A public national neurological rehabilitation department in Bucharest, with 20 beds within Romania’s specialist neurovascular institute.' }
  },
  {
    id: 'nicolae-robanescu-pediatric-neurorehabilitation',
    name: 'Centrul Național Clinic de Recuperare Neuropsihomotorie Copii Dr. Nicolae Robănescu',
    country: 'Romania', city: 'Bucharest', region: 'Bucharest', lat: 44.3939, lng: 26.1086,
    address: 'Strada Dumitru Minca 44, Sector 4, București', phone: 'Unknown',
    url: 'https://www.ms.ro/ro/unitati-sanitare/centrul-national-clinic-de-recuperare-neuropsihomotorie-copii-dr-nicolae-robanescu/',
    conditions: ['pediatric', 'neuromotor', 'cognitive'], technologies: ['robotics'], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Paediatric neuropsychomotor rehabilitation', 'Physical medicine', 'Occupational therapy', 'Hydrotherapy', 'Robotic limb rehabilitation'], completeness: 89,
    researchHighlights: ['The Romanian Ministry of Health describes Dr. Nicolae Robănescu as a unique European-style monospecialist clinical hospital for children’s neuropsychomotor rehabilitation', 'Official service listing includes occupational therapy, hydrotherapy and a robotic limb-rehabilitation unit.'],
    features: ['national-pediatric-centre', 'pediatric-neurorehab', 'robotic-rehabilitation'],
    description: { it: 'Centro clinico nazionale pubblico di Bucarest per la riabilitazione neuropsicomotoria pediatrica, con terapia occupazionale, idroterapia e riabilitazione robotizzata.', en: 'A public national Bucharest clinical centre for paediatric neuropsychomotor rehabilitation, including occupational therapy, hydrotherapy and robotic rehabilitation.' }
  },
  {
    id: 'cluj-napoca-clinical-rehabilitation-hospital',
    name: 'Spitalul Clinic de Recuperare Cluj-Napoca',
    country: 'Romania', city: 'Cluj-Napoca', region: 'Cluj County', lat: 46.7584, lng: 23.5846,
    address: 'Strada Viilor 46-50, Cluj-Napoca 400347', phone: '+40 264 207021',
    url: 'https://www.recuperarecluj.ro/',
    conditions: ['stroke', 'neuromotor', 'cognitive'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurology', 'Medical rehabilitation', 'Physical medicine', 'Multidisciplinary rehabilitation'], completeness: 87,
    researchHighlights: ['Official hospital page describes multidisciplinary rehabilitation for neurological conditions alongside cardiology, orthopaedics and other specialties', 'The official service profile reports 403 beds and roughly 36,000 outpatient patients annually.'],
    features: ['clinical-rehabilitation-hospital', 'neurological-rehabilitation', 'inpatient-rehab'],
    description: { it: 'Ospedale clinico pubblico di riabilitazione a Cluj-Napoca con neurologia e riabilitazione multidisciplinare in ricovero e ambulatorio.', en: 'A public clinical rehabilitation hospital in Cluj-Napoca with neurology and multidisciplinary inpatient and outpatient rehabilitation.' }
  },
  {
    id: 'national-institute-physical-medicine-rehabilitation-bucharest',
    name: 'Institutul Național de Recuperare Medicină Fizică și Balneoclimatologie București',
    country: 'Romania', city: 'Bucharest', region: 'Bucharest', lat: 44.4468, lng: 26.0862,
    address: 'Strada Cristian Popișteanu 1-3, Sector 1, București', phone: '+40 21 312 2212',
    url: 'https://www.ms.gov.ro/ro/unitati-sanitare/institutul-na%C8%9Bional-de-recuperare-medicin%C4%83-fizic%C4%83-%C8%99i-balneoclimatologie-bucure%C8%99ti/',
    conditions: ['neuromotor', 'cognitive'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Physical medicine and rehabilitation', 'Neurological rehabilitation', 'Kinesiotherapy', 'Functional rehabilitation'], completeness: 82,
    researchHighlights: ['The Romanian Ministry of Health states that this national institute provides complex treatment for neurological functional conditions', 'Official description identifies rehabilitation and kinesiotherapy aimed at improving functional deficits and return to daily and professional life.'],
    features: ['national-rehabilitation-institute', 'neurological-rehabilitation', 'functional-recovery'],
    description: { it: 'Istituto nazionale pubblico di Bucarest per medicina fisica e riabilitazione, con trattamento complesso delle condizioni neurologiche e dei deficit funzionali.', en: 'A public national Bucharest institute for physical medicine and rehabilitation, providing complex treatment for neurological conditions and functional deficits.' }
  },
  {
    id: 'sf-gheorghe-botosani-neurological-rehabilitation',
    name: 'Spitalul de Recuperare Sf. Gheorghe Botoșani Compartiment Recuperare Neurologică',
    country: 'Romania', city: 'Botoșani', region: 'Botoșani County', lat: 47.7474, lng: 26.6663,
    address: 'Calea Națională 2, Botoșani', phone: '+40 231 512822',
    url: 'https://srbt.ro/compartiment-recuperare-neurologica/',
    conditions: ['stroke', 'tbi', 'parkinson', 'neuromotor', 'cognitive'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'],
    disciplines: ['Neurological rehabilitation', 'Neurology', 'Medical rehabilitation'], completeness: 86,
    researchHighlights: ['Official hospital page states that its neurological rehabilitation department serves vascular, traumatic, degenerative, inflammatory and postoperative neurological deficits', 'The hospital has a named neurological rehabilitation department within its specialist recovery services.'],
    features: ['neurological-rehabilitation', 'stroke-rehab', 'brain-injury'],
    description: { it: 'Reparto pubblico di riabilitazione neurologica a Botoșani per deficit neurologici vascolari, traumatici, degenerativi, infiammatori e postoperatori.', en: 'A public neurological rehabilitation department in Botoșani for vascular, traumatic, degenerative, inflammatory and postoperative neurological deficits.' }
  },
  {
    id: 'corneliu-barsan-neuromotor-rehabilitation-dezna',
    name: 'Spitalul de Recuperare Neuromotorie Dr. Corneliu Bârsan Dezna',
    country: 'Romania', city: 'Dezna', region: 'Arad County', lat: 46.3966, lng: 22.2519,
    address: 'Strada Speranței 5, Dezna, Arad 317110', phone: '+40 257 312617',
    url: 'https://www.spitaluldezna.ro/',
    conditions: ['neuromotor', 'cognitive'], technologies: [], modes: ['inpatient'], access: ['public'],
    disciplines: ['Adult neuromotor rehabilitation', 'Neurology', 'Occupational therapy', 'Psychology', 'Speech therapy'], completeness: 91,
    researchHighlights: ['Official hospital page identifies a national-interest hospital dedicated to functional assessment and rehabilitation for neuromotor impairment', 'Official organisational structure lists an adult neuromotor rehabilitation section with 75 beds, plus occupational therapy, psychology and speech therapy.'],
    features: ['national-interest-hospital', 'neuromotor-rehabilitation', 'inpatient-rehab'],
    description: { it: 'Ospedale pubblico di interesse nazionale a Dezna, dedicato alla riabilitazione neuromotoria degli adulti con terapia occupazionale, psicologia e logopedia.', en: 'A Romanian national-interest hospital in Dezna dedicated to adult neuromotor rehabilitation, with occupational therapy, psychology and speech therapy.' }
  },
  {
    id: 'sanador-neurological-rehabilitation-bucharest',
    name: 'Spitalul Clinic SANADOR Recuperare Neurologică',
    country: 'Romania', city: 'Bucharest', region: 'Bucharest', lat: 44.4680, lng: 26.0723,
    address: 'Calea Griviței 324, Sector 1, București', phone: '+40 21 9699',
    url: 'https://www.sanador.ro/recuperare-neurologica',
    conditions: ['stroke', 'tbi', 'neuromuscular', 'cognitive', 'neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['private', 'insurance'],
    disciplines: ['Neurological rehabilitation', 'Neurology', 'Neurosurgery', 'Physical medicine and rehabilitation', 'Speech therapy'], completeness: 88,
    researchHighlights: ['Official SANADOR page describes personalised neurorehabilitation for neurological conditions including stroke, muscular dystrophy, cerebral palsy and neurodegenerative disease', 'Official programme description identifies a multidisciplinary team including neurology, neurosurgery, physical medicine, psychology, speech therapy and social work.'],
    features: ['private-neurorehab', 'stroke-rehab', 'multidisciplinary-rehab'],
    description: { it: 'Servizio privato multidisciplinare di riabilitazione neurologica a Bucarest per ictus, malattie neurodegenerative e disabilità motorie o cognitive.', en: 'A private multidisciplinary neurological rehabilitation service in Bucharest for stroke, neurodegenerative disease and motor or cognitive impairment.' }
  },
  {
    id: 'neuro-rehab-izgrev-sofia', name: 'Neuro Rehab Izgrev', country: 'Bulgaria', city: 'Sofia', region: 'Sofia City', lat: 42.6538, lng: 23.3562,
    address: 'Boulevard G. M. Dimitrov 60, Sofia', phone: '+359 2 872 7297', url: 'https://rehabilitator.bg/en/',
    conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromotor'], technologies: [], modes: ['outpatient'], access: ['private'],
    disciplines: ['Neurorehabilitation', 'Physiotherapy', 'Kinesiotherapy', 'Bobath', 'PNF'], completeness: 87,
    researchHighlights: ['Official clinic page identifies Neuro Rehab Izgrev as a private outpatient clinic specialised in rehabilitation of nervous-system diseases', 'Official programme lists stroke, traumatic brain injury, spinal cord injury and multiple sclerosis rehabilitation.'],
    features: ['specialist-neurorehab', 'outpatient-neurorehab', 'stroke-rehab', 'spinal-cord'],
    description: { it: 'Clinica privata specialistica a Sofia per neuroriabilitazione ambulatoriale dopo ictus, trauma cranico, lesione midollare e sclerosi multipla.', en: 'A specialist private Sofia clinic for outpatient neurorehabilitation after stroke, brain injury, spinal cord injury and multiple sclerosis.' }
  },
  {
    id: 'avis-medica-specialized-rehabilitation-hospital', name: 'Avis Medica Specialized Rehabilitation Hospital', country: 'Bulgaria', city: 'Sofia', region: 'Sofia City', lat: 42.6650, lng: 23.3280,
    address: 'Sofia, Bulgaria', phone: 'Unknown', url: 'https://rehab-bg.bg/en/%D0%B7%D0%B0-%D0%BD%D0%B0%D1%81/',
    conditions: ['neuromotor', 'cognitive'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['private'],
    disciplines: ['Neurorehabilitation', 'Specialised rehabilitation', 'Multidisciplinary rehabilitation'], completeness: 76,
    researchHighlights: ['Official Avis Medica page describes a specialised rehabilitation hospital with certified neurorehabilitation specialists and a full rehabilitation service.'],
    features: ['specialist-rehabilitation-hospital', 'neurorehabilitation'],
    description: { it: 'Ospedale privato specialistico di riabilitazione a Sofia con professionisti certificati in neuroriabilitazione.', en: 'A specialist private rehabilitation hospital in Sofia with certified neurorehabilitation professionals.' }
  },
  { id: 'national-rehabilitation-centre-2nd-prm-athens', name: 'National Rehabilitation Centre 2nd PRM Clinic', country: 'Greece', city: 'Athens', region: 'Attica', lat: 38.0714, lng: 23.6916, address: '3 Spyrou Theologou, Ilion, Athens', phone: 'Unknown', url: 'https://eka-hosp.gr/en/service/2nd-prm-clinic/', conditions: ['stroke', 'tbi', 'spinal', 'ms', 'neuromuscular', 'neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'], disciplines: ['Physical medicine and rehabilitation', 'Neurorehabilitation', 'Spinal cord injury rehabilitation'], completeness: 91, researchHighlights: ['Official National Rehabilitation Centre page states its 2nd PRM Clinic treats severe brain injury, stroke, spinal cord injury, MS, myopathies and peripheral nervous disease.'], features: ['national-rehabilitation-centre', 'neurorehabilitation', 'spinal-cord'], description: { it: 'Clinica pubblica nazionale di Atene per neuro-riabilitazione in lesione cerebrale, ictus, lesione midollare e SM.', en: 'A public national Athens clinic for neurorehabilitation in brain injury, stroke, spinal cord injury and MS.' } },
  { id: 'eginitio-hospital-neurorehabilitation-unit', name: 'Eginitio Hospital Neurorehabilitation Unit', country: 'Greece', city: 'Athens', region: 'Attica', lat: 37.9809, lng: 23.7562, address: '72-74 Vasilissis Sofias Avenue, Athens 11528', phone: '+30 210 7251315', url: 'https://eginitio-en.uoa.gr/1st_department_of_neurology/units/neurorehabilitation_unit/', conditions: ['stroke', 'ms', 'parkinson', 'neuromuscular', 'cognitive', 'neuromotor'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'], disciplines: ['Neurological rehabilitation', 'Neurology', 'Physiotherapy', 'Occupational therapy'], completeness: 91, researchHighlights: ['Official University of Athens hospital page identifies a neurological rehabilitation unit for stroke, demyelinating disease and Parkinson disease coordinated by neurologists and allied health professionals.'], features: ['university-hospital', 'neurorehabilitation', 'stroke-rehab', 'multiple-sclerosis'], description: { it: 'Unità pubblica universitaria di neuroriabilitazione ad Atene per ictus, malattie demielinizzanti e Parkinson.', en: 'A public university neurorehabilitation unit in Athens for stroke, demyelinating disease and Parkinson disease.' } },
  { id: 'kanopa-spinal-cord-rehabilitation-nicosia', name: 'Nicosia General Hospital Spinal Cord Rehabilitation Center KANOPA', country: 'Cyprus', city: 'Nicosia', region: 'Nicosia District', lat: 35.1420, lng: 33.3771, address: 'Nicosia General Hospital, Nicosia', phone: '+357 22603717', url: 'https://www.shso.org.cy/en/clinic/kentro-notiaiomyelikon-pathiseon/', conditions: ['spinal', 'neuromuscular', 'neuromotor', 'cognitive'], technologies: [], modes: ['inpatient', 'outpatient'], access: ['public'], disciplines: ['Spinal cord rehabilitation', 'Neurology', 'Physiotherapy', 'Occupational therapy'], completeness: 94, researchHighlights: ['Official State Health Services page identifies KANOPA as Cyprus’s only organised specialist centre for spinal cord injury and disease rehabilitation.', 'Official programme includes paraplegia, tetraplegia, Guillain-Barre syndrome and ICU-acquired neuromyopathy.'], features: ['national-specialist-centre', 'spinal-cord', 'inpatient-rehab'], description: { it: 'Centro pubblico specialistico di Nicosia per riabilitazione delle lesioni midollari, paraplegia, tetraplegia e Guillain-Barre.', en: 'Cyprus’s public specialist centre in Nicosia for spinal cord rehabilitation, paraplegia, tetraplegia and Guillain-Barre syndrome.' } },
  { id: 'medinstitute-neurological-rehabilitation-nicosia', name: 'MedInstitute Neurological Rehabilitation', country: 'Cyprus', city: 'Nicosia', region: 'Nicosia District', lat: 35.1682, lng: 33.3630, address: '13-15 Digeni Akrita, Nicosia 1055', phone: 'Unknown', url: 'https://medinstitute.com.cy/department/neurological-rehabilitation/', conditions: ['stroke', 'tbi', 'spinal', 'neuromotor', 'cognitive'], technologies: [], modes: ['outpatient'], access: ['private'], disciplines: ['Neurological rehabilitation', 'Nervous system rehabilitation'], completeness: 78, researchHighlights: ['Official MedInstitute programme page describes neurological rehabilitation for illness, injury and disorders of the nervous system, including spinal cord injury.'], features: ['neurological-rehabilitation', 'outpatient-neurorehab'], description: { it: 'Programma privato di riabilitazione neurologica a Nicosia per malattie, lesioni e disturbi del sistema nervoso.', en: 'A private Nicosia neurological rehabilitation programme for illness, injury and disorders of the nervous system.' } }
];
