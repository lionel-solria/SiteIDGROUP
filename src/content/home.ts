import {UniverseKey} from '../lib/types';

export const heroSlides = [
  {
    key: 'home' as UniverseKey,
    title: 'ID Home',
    color: 'home',
    punchline: 'Sécuriser la maison et le confort quotidien',
    description: 'Solutions discrètes et responsables pour protéger les personnes et les biens dans l’habitat.',
    cta: '/solutions/home'
  },
  {
    key: 'pro' as UniverseKey,
    title: 'ID Pro',
    color: 'pro',
    punchline: 'Performance et hygiène pour les environnements professionnels',
    description: 'Accompagnement des équipes HSE et Facility sur des environnements critiques.',
    cta: '/solutions/pro'
  },
  {
    key: 'agri' as UniverseKey,
    title: 'ID Agri',
    color: 'agri',
    punchline: 'Bien-être animal et soin des élevages',
    description: 'Solutions robustes pour sécuriser les fermes et protéger le vivant.',
    cta: '/solutions/agri'
  }
];

export const proofPoints = [
  {
    title: 'Expertise industrielle Wormhout',
    detail: 'Production intégrée, supply courte et réactivité des équipes techniques.'
  },
  {
    title: 'Personnalisation',
    detail: 'Design sur-mesure pour chaque environnement et besoin métier.'
  },
  {
    title: 'RSE native',
    detail: 'Programme Positiv’ID, matériaux responsables et circularité.'
  },
  {
    title: 'Accompagnement terrain',
    detail: 'Audit des risques, déploiement, maintenance et suivi qualité.'
  }
];

export const wormhout = {
  title: 'Wormhout / savoir-faire industriel',
  story:
    'Nos équipes conçoivent et fabriquent dans les Hauts-de-France, avec une logique de proximité et de réactivité. Atelier de prototypage, laboratoire d’essais et bureau R&D collaborent pour délivrer vite et bien.',
  markers: [
    {label: '45 ans d’innovation', value: '45+'},
    {label: 'Site certifié ISO 14001', value: 'ISO'},
    {label: 'Livraison France & Europe', value: '48h'},
    {label: 'Equipe terrain', value: '24/7'}
  ]
};

export const rseTeaser = {
  title: 'Positiv’ID : l’impact mesuré',
  description: 'Transparence sur les indicateurs carbone, eau et sécurité. Certifications tierces et actions concrètes.',
  gauges: [
    {label: 'Matières recyclées', value: 68},
    {label: 'Sites alimentés en énergies vertes', value: 82},
    {label: 'Taux de satisfaction clients', value: 96}
  ]
};
