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
  }
];
