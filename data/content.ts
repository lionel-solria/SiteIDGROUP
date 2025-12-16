export type UniverseId = 'home' | 'pro' | 'agri';

export const universes = [
  {
    id: 'home' as UniverseId,
    name: 'ID Home',
    color: 'bg-brand-orange',
    accent: 'text-brand-orange',
    description: "Solutions de confort et d'hygiène pour les logements collectifs et résidences.",
    image: '/images/ImageIDHome.jpg'
  },
  {
    id: 'pro' as UniverseId,
    name: 'ID Pro',
    color: 'bg-brand-blue',
    accent: 'text-brand-blue',
    description: 'Performance, hygiène et sécurité pour les environnements professionnels exigeants.',
    image: '/images/ImageIDPro.jpg'
  },
  {
    id: 'agri' as UniverseId,
    name: 'ID Agri',
    color: 'bg-brand-green',
    accent: 'text-brand-green',
    description: 'Solutions robustes pour le bien-être animal et la fiabilité des élevages.',
    image: '/images/ImageIDAgri.jpg'
  }
];

export const proofPoints = [
  {
    title: 'Fabrication maîtrisée',
    detail: 'Production intégrée à Wormhout, traçabilité complète et matériaux responsables.'
  },
  {
    title: 'Accompagnement expert',
    detail: 'Ingénierie, co-design et équipes terrain pour adapter chaque solution.'
  },
  {
    title: 'Réactivité logistique',
    detail: 'Sites Wormhout + Alpespace pour raccourcir les délais et sécuriser les chantiers.'
  },
  {
    title: 'Mesure RSE',
    detail: 'Indicateurs Positiv\'ID, audits et certifications disponibles.'
  },
  {
    title: 'Digital-ready',
    detail: 'Portail client phase 2 pour vos documents, SAV et suivis.'
  }
];

export const industrialFacts = [
  {label: 'Collaborateurs', value: '150+'},
  {label: 'Années d\'innovation', value: '40'},
  {label: 'Sites de production', value: '2'},
  {label: 'Pays livrés', value: '18'}
];

export const kpiGauges = [
  {id: 'co2', label: 'CO₂ scope 1 & 2', value: 64, unit: '%', caption: 'Réduction vs 2019'},
  {id: 'recycled', label: 'Matières recyclées', value: 52, unit: '%', caption: 'Contenu recyclé moyen'},
  {id: 'safety', label: 'Taux de fréquence', value: 8, unit: '', caption: 'Sécurité renforcée sur site'},
  {id: 'satisfaction', label: 'Satisfaction clients', value: 92, unit: '%', caption: 'Qualité perçue sur les projets clés'}
];

export const rseActions = [
  {
    title: 'Éco-conception',
    detail: 'Optimisation des masses, choix de résines et fibres bas carbone.'
  },
  {
    title: 'Boucles courtes',
    detail: 'Partenaires matières et transporteurs situés à <400 km.'
  },
  {
    title: 'Sécurité & inclusion',
    detail: 'Plan de formation, ergonomie poste et diversité des équipes.'
  }
];

export const downloads = [
  {title: 'Charte Positiv\'ID', href: '#'},
  {title: 'Certificat ISO 14001', href: '#'},
  {title: 'Fiches matériaux', href: '#'}
];

export const newsItems = [
  {
    slug: 'positivid-certification',
    title: "Positiv'ID : première vague d'indicateurs publiés",
    category: 'RSE',
    excerpt: 'Nos nouveaux KPI environnementaux et sociaux sont disponibles en open-data pour nos clients.',
    date: '2024-10-12'
  },
  {
    slug: 'salon-space',
    title: 'ID Agri dévoile sa station de soin au SPACE',
    category: 'Salon',
    excerpt: 'Démonstration live des parcours animal bien-être avec capteurs intégrés.',
    date: '2024-09-01'
  },
  {
    slug: 'cas-client-logement',
    title: 'Réhabilitation d\'une résidence seniors en ID Home',
    category: 'Cas client',
    excerpt: 'Sol antidérapant, protections murales et hygiène renforcée déployés en 6 semaines.',
    date: '2024-07-15'
  }
];

export type Hotspot = {
  id: string;
  label: string;
  description: string;
  position: {top: string; left: string};
};

export const hotspots: Record<UniverseId, Hotspot[]> = {
  home: [
    {
      id: 'hall',
      label: 'Hall & circulations',
      description: 'Revêtements antidérapants, protections murales et signalétique inclusive.',
      position: {top: '40%', left: '30%'}
    },
    {
      id: 'bathroom',
      label: 'Salle d\'eau',
      description: 'Bacs et panneaux résistants, faciles à nettoyer et sécurisants.',
      position: {top: '70%', left: '55%'}
    }
  ],
  pro: [
    {
      id: 'production',
      label: 'Zone de production',
      description: 'Caillebotis anti-fatigue, protections de machines, marquage des flux.',
      position: {top: '45%', left: '42%'}
    },
    {
      id: 'vestiaires',
      label: 'Vestiaires',
      description: 'Casiers ventilés, sols drainants, cloisons hygiéniques.',
      position: {top: '65%', left: '60%'}
    }
  ],
  agri: [
    {
      id: 'logette',
      label: 'Logette',
      description: 'Tapis confort certifiés bien-être animal, drainage optimisé.',
      position: {top: '35%', left: '30%'}
    },
    {
      id: 'laiterie',
      label: 'Salle de traite',
      description: 'Revêtements haute adhérence, hygiène facilitée, réduction du stress animal.',
      position: {top: '60%', left: '55%'}
    }
  ]
};

export const successStories = [
  {
    title: 'Co-conception d\'un sas hygiène pour une usine agro',
    universe: 'pro',
    impact: 'Temps de nettoyage divisé par 2, conformité IFS renforcée.'
  },
  {
    title: 'Equipements sur mesure pour une étable connectée',
    universe: 'agri',
    impact: '+15% de confort animal, capteurs intégrés pour la maintenance prédictive.'
  },
  {
    title: 'Résidence inclusive sécurisée',
    universe: 'home',
    impact: 'Zéro chute déclarée depuis la pose des revêtements sécurisés.'
  }
];

export const team = [
  {name: 'Camille', role: 'CEO & vision client', fun: 'Collectionne les croquis d\'usines iconiques.'},
  {name: 'Léo', role: 'Responsable industriel', fun: 'Pilote de drones pour inspecter les toitures.'},
  {name: 'Sarah', role: 'RSE & Positiv\'ID', fun: 'A planté 200 arbres avec des clients.'},
  {name: 'Milan', role: 'UX Portail client', fun: 'Café lover, code la nuit pour optimiser les flux.'}
];

export const contactNeeds = [
  'Habitat collectif / ID Home',
  'Milieu professionnel / ID Pro',
  'Exploitation agricole / ID Agri',
  'Autre ou multi-sites'
];
