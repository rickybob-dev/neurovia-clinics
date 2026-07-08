export const conditionLabels = {
  stroke: { it: 'Ictus', en: 'Stroke' },
  tbi: { it: 'Trauma cranico', en: 'Brain injury' },
  spinal: { it: 'Lesioni midollari', en: 'Spinal cord injury' },
  ms: { it: 'Sclerosi multipla', en: 'Multiple sclerosis' },
  parkinson: { it: 'Parkinson', en: "Parkinson's" },
  neuromuscular: { it: 'Malattie neuromuscolari', en: 'Neuromuscular conditions' },
  pediatric: { it: 'Età evolutiva', en: 'Pediatric rehabilitation' }
};

export const technologyLabels = {
  robotics: { it: 'Robotica', en: 'Robotics' },
  exoskeleton: { it: 'Esoscheletri', en: 'Exoskeletons' },
  vr: { it: 'Realtà virtuale', en: 'Virtual reality' },
  bci: { it: 'Interfacce cervello-computer', en: 'Brain-computer interfaces' },
  tele: { it: 'Teleriabilitazione', en: 'Telerehabilitation' },
  gait: { it: 'Analisi del cammino', en: 'Gait analysis' }
};

export const centers = [
  {
    id: 'santa-lucia-roma',
    name: 'Fondazione Santa Lucia IRCCS',
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
  }
];
