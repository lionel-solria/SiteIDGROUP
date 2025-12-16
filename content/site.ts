import {AppLocale} from '@/i18n/request';

export type LocaleText = Record<AppLocale, string>;

export type Universe = {
  id: 'home' | 'pro' | 'agri';
  color: string;
  name: LocaleText;
  baseline: LocaleText;
  hotspots: {id: string; label: LocaleText; description: LocaleText; position: {top: string; left: string}}[];
  stories: {title: LocaleText; summary: LocaleText; client: string}[];
};

export type ProofPoint = {
  title: LocaleText;
  detail: LocaleText;
  icon: string;
};

export type Article = {
  slug: string;
  title: LocaleText;
  excerpt: LocaleText;
  category: LocaleText;
  date: string;
};

export type TeamMember = {
  name: string;
  role: LocaleText;
  funFact: LocaleText;
};

export const universes: Universe[] = [
  {
    id: 'home',
    color: 'brand.home',
    name: {fr: 'ID Home', en: 'ID Home', de: 'ID Home'},
    baseline: {
      fr: 'Confort et hygiène pour l’habitat collectif ou individuel',
      en: 'Comfort and hygiene for collective and individual housing',
      de: 'Komfort und Hygiene für Wohnungen und Häuser',
    },
    hotspots: [
      {
        id: 'accueil',
        label: {fr: 'Entrée', en: 'Entrance', de: 'Eingang'},
        description: {
          fr: 'Revêtements faciles à poser, antidérapants et durables pour accueillir sans risque.',
          en: 'Easy-to-lay, non-slip and durable coverings to welcome safely.',
          de: 'Einfach zu verlegende, rutschfeste und langlebige Beläge für einen sicheren Empfang.',
        },
        position: {top: '25%', left: '20%'},
      },
      {
        id: 'piece-a-vivre',
        label: {fr: 'Pièce à vivre', en: 'Living area', de: 'Wohnraum'},
        description: {
          fr: 'Isolation acoustique et confort thermique pour des espaces plus sereins.',
          en: 'Acoustic insulation and thermal comfort for quieter spaces.',
          de: 'Akustikdämmung und thermischer Komfort für ruhigere Räume.',
        },
        position: {top: '55%', left: '60%'},
      },
      {
        id: 'salle-de-bain',
        label: {fr: 'Salle de bain', en: 'Bathroom', de: 'Bad'},
        description: {
          fr: 'Solutions antimoisissures et hygiène pour protéger durablement.',
          en: 'Anti-mould and hygiene solutions for lasting protection.',
          de: 'Schimmel- und Hygienelösungen für dauerhaften Schutz.',
        },
        position: {top: '70%', left: '35%'},
      },
    ],
    stories: [
      {
        client: 'Habitat Nord',
        title: {
          fr: 'Rénover plus vite sans gêner les habitants',
          en: 'Renovate faster without disturbing residents',
          de: 'Schneller renovieren ohne Bewohner zu stören',
        },
        summary: {
          fr: 'Chantiers en site occupé avec un kit prêt à poser, réduit de 30% le temps d’intervention.',
          en: 'Occupied-site projects with ready-to-install kits reduced intervention time by 30%.',
          de: 'Projekte im bewohnten Zustand mit sofort verlegbaren Kits senkten die Einsatzzeit um 30%.',
        },
      },
    ],
  },
  {
    id: 'pro',
    color: 'brand.pro',
    name: {fr: 'ID Pro', en: 'ID Pro', de: 'ID Pro'},
    baseline: {
      fr: 'Performance industrielle et sécurité des équipes',
      en: 'Industrial performance and team safety',
      de: 'Industrielle Leistung und Mitarbeitersicherheit',
    },
    hotspots: [
      {
        id: 'atelier',
        label: {fr: 'Atelier', en: 'Workshop', de: 'Werkstatt'},
        description: {
          fr: 'Revêtements techniques résistants aux agents chimiques et aux chocs.',
          en: 'Technical floorings resistant to chemicals and impacts.',
          de: 'Technische Bodenbeläge, beständig gegen Chemikalien und Stöße.',
        },
        position: {top: '35%', left: '50%'},
      },
      {
        id: 'zone-logistique',
        label: {fr: 'Zone logistique', en: 'Logistics area', de: 'Logistikzone'},
        description: {
          fr: 'Signalétique claire et antidérapante pour sécuriser les flux.',
          en: 'Clear, anti-slip signage to secure flows.',
          de: 'Klare, rutschfeste Beschilderung für sichere Flüsse.',
        },
        position: {top: '60%', left: '25%'},
      },
      {
        id: 'zone-sociale',
        label: {fr: 'Espaces sociaux', en: 'Social areas', de: 'Sozialräume'},
        description: {
          fr: 'Ambiances confortables et faciles à entretenir pour les équipes.',
          en: 'Comfortable, easy-care environments for teams.',
          de: 'Komfortable, pflegeleichte Umgebungen für Teams.',
        },
        position: {top: '50%', left: '70%'},
      },
    ],
    stories: [
      {
        client: 'Usine NordTech',
        title: {
          fr: 'Sécuriser les flux de chariots en 3 semaines',
          en: 'Securing forklift flows in 3 weeks',
          de: 'Flurförderer-Flüsse in 3 Wochen sichern',
        },
        summary: {
          fr: 'Traçage lumineux et tapis antidérapants pour diviser par deux les incidents mineurs.',
          en: 'Luminous markings and anti-slip mats halved minor incidents.',
          de: 'Leuchtmarkierungen und Anti-Rutsch-Matten halbierten die Zwischenfälle.',
        },
      },
    ],
  },
  {
    id: 'agri',
    color: 'brand.agri',
    name: {fr: 'ID Agri', en: 'ID Agri', de: 'ID Agri'},
    baseline: {
      fr: 'Bien-être animal et robustesse des bâtiments d’élevage',
      en: 'Animal well-being and robust farm buildings',
      de: 'Tierwohl und robuste Stallgebäude',
    },
    hotspots: [
      {
        id: 'stabulation',
        label: {fr: 'Logette', en: 'Cubicle', de: 'Liegebox'},
        description: {
          fr: 'Tapis confort et drainage pour limiter les blessures.',
          en: 'Comfort mats and drainage to reduce injuries.',
          de: 'Komfortmatten und Drainage zur Verringerung von Verletzungen.',
        },
        position: {top: '25%', left: '55%'},
      },
      {
        id: 'aire-alimentation',
        label: {fr: 'Aire d’alimentation', en: 'Feeding area', de: 'Fütterungsbereich'},
        description: {
          fr: 'Surfaces antidérapantes et lavables pour l’hygiène quotidienne.',
          en: 'Non-slip, washable surfaces for daily hygiene.',
          de: 'Rutschfeste, abwaschbare Oberflächen für die tägliche Hygiene.',
        },
        position: {top: '60%', left: '30%'},
      },
      {
        id: 'nurserie',
        label: {fr: 'Nurserie', en: 'Nursery', de: 'Aufzucht'},
        description: {
          fr: 'Isolation et confort thermique pour les jeunes animaux.',
          en: 'Insulation and thermal comfort for young animals.',
          de: 'Dämmung und thermischer Komfort für Jungtiere.',
        },
        position: {top: '70%', left: '65%'},
      },
    ],
    stories: [
      {
        client: 'Ferme de la Lys',
        title: {
          fr: 'Diviser les boiteries par deux en hiver',
          en: 'Halving lameness during winter',
          de: 'Lahmheiten im Winter halbieren',
        },
        summary: {
          fr: 'Pose rapide de tapis logettes et drainage pour améliorer la locomotion.',
          en: 'Fast installation of cubicle mats and drainage improved locomotion.',
          de: 'Schnelle Montage von Liegeboxmatten und Drainage verbesserte die Beweglichkeit.',
        },
      },
    ],
  },
];

export const proofPoints: ProofPoint[] = [
  {
    title: {
      fr: 'Savoir-faire industriel',
      en: 'Industrial know-how',
      de: 'Industrielles Know-how',
    },
    detail: {
      fr: 'Site de production Wormhout, prototypage rapide et circuits courts.',
      en: 'Wormhout production site, rapid prototyping and short supply chains.',
      de: 'Produktionsstandort Wormhout, Rapid Prototyping und kurze Lieferketten.',
    },
    icon: 'factory',
  },
  {
    title: {fr: 'Accompagnement expert', en: 'Expert guidance', de: 'Expertenbegleitung'},
    detail: {
      fr: 'Conseil terrain, visites techniques, tests in situ pour adapter chaque solution.',
      en: 'On-site advice, technical visits and in-situ tests to adapt each solution.',
      de: 'Vor-Ort-Beratung, technische Besuche und In-situ-Tests zur Anpassung jeder Lösung.',
    },
    icon: 'support',
  },
  {
    title: {fr: 'Engagement RSE', en: 'CSR commitment', de: 'CSR-Engagement'},
    detail: {
      fr: 'Programme Positiv’ID, matériaux recyclés et traçabilité transparente.',
      en: 'Positiv’ID program, recycled materials and transparent traceability.',
      de: 'Positiv’ID Programm, recycelte Materialien und transparente Rückverfolgbarkeit.',
    },
    icon: 'leaf',
  },
  {
    title: {fr: 'Réactivité', en: 'Responsiveness', de: 'Reaktivität'},
    detail: {
      fr: 'Stock stratégique et logistique optimisée pour livrer en quelques jours.',
      en: 'Strategic stock and optimized logistics to deliver within days.',
      de: 'Strategischer Lagerbestand und optimierte Logistik für Lieferungen in wenigen Tagen.',
    },
    icon: 'flash',
  },
];

export const articles: Article[] = [
  {
    slug: 'positivid-bilan-2024',
    title: {
      fr: 'Positiv’ID : premiers résultats 2024',
      en: 'Positiv’ID: early 2024 results',
      de: 'Positiv’ID: erste Ergebnisse 2024',
    },
    excerpt: {
      fr: '3 jauges clés pour mesurer notre impact : énergie, matières, territoire.',
      en: 'Three key gauges to measure our impact: energy, materials, territory.',
      de: 'Drei Kennzahlen zur Messung unserer Wirkung: Energie, Materialien, Region.',
    },
    category: {fr: 'RSE', en: 'CSR', de: 'CSR'},
    date: '2024-11-05',
  },
  {
    slug: 'salon-sima-2024',
    title: {
      fr: 'ID Group au SIMA 2024',
      en: 'ID Group at SIMA 2024',
      de: 'ID Group auf der SIMA 2024',
    },
    excerpt: {
      fr: 'Rencontrez l’équipe et découvrez les nouveautés anti-liqueurs.',
      en: 'Meet the team and discover the newest anti-slip ranges.',
      de: 'Treffen Sie das Team und entdecken Sie die neuesten Anti-Rutsch-Lösungen.',
    },
    category: {fr: 'Salons', en: 'Events', de: 'Messen'},
    date: '2024-09-10',
  },
  {
    slug: 'cas-client-usine-nordtech',
    title: {
      fr: 'NordTech : flux logistiques sécurisés',
      en: 'NordTech: secured logistics flows',
      de: 'NordTech: gesicherte Logistikflüsse',
    },
    excerpt: {
      fr: 'Un marquage lumineux pour diminuer les incidents sur site.',
      en: 'Luminous markings to reduce on-site incidents.',
      de: 'Leuchtmarkierungen zur Verringerung von Zwischenfällen.',
    },
    category: {fr: 'Cas client', en: 'Case study', de: 'Kundenfall'},
    date: '2024-07-22',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Élodie',
    role: {fr: 'CX & produit', en: 'CX & product', de: 'CX & Produkt'},
    funFact: {
      fr: 'Croque toujours les croquis du site à main levée.',
      en: 'Always sketches wireframes by hand first.',
      de: 'Skizziert die Wireframes immer zuerst von Hand.',
    },
  },
  {
    name: 'Yassine',
    role: {fr: 'Responsable RSE', en: 'CSR lead', de: 'CSR-Leiter'},
    funFact: {
      fr: 'Chronomètre les temps de pose sur chaque chantier.',
      en: 'Times every installation on site.',
      de: 'Stoppt jede Installation auf der Baustelle.',
    },
  },
  {
    name: 'Lena',
    role: {fr: 'Ingénieure matériaux', en: 'Materials engineer', de: 'Werkstoffingenieurin'},
    funFact: {
      fr: 'Collectionne des échantillons de sols vintage.',
      en: 'Collects vintage flooring samples.',
      de: 'Sammelt Vintage-Bodenproben.',
    },
  },
  {
    name: 'Martin',
    role: {fr: 'Lead agri', en: 'Agri lead', de: 'Agri-Leiter'},
    funFact: {
      fr: 'Peut repérer une logette confortable à 50m.',
      en: 'Can spot a comfy cubicle from 50m.',
      de: 'Erkennt eine bequeme Liegebox aus 50 m Entfernung.',
    },
  },
];

export const gauges = [
  {label: {fr: 'Matières recyclées', en: 'Recycled materials', de: 'Recycelte Materialien'}, value: 62},
  {label: {fr: 'Énergie verte', en: 'Green energy', de: 'Grüne Energie'}, value: 48},
  {label: {fr: 'Clients accompagnés', en: 'Clients supported', de: 'Begleitete Kunden'}, value: 320},
];

export const newsCategories = [
  {id: 'rse', label: {fr: 'RSE', en: 'CSR', de: 'CSR'}},
  {id: 'salons', label: {fr: 'Salons', en: 'Events', de: 'Messen'}},
  {id: 'cas-client', label: {fr: 'Cas client', en: 'Case study', de: 'Kundenfall'}},
  {id: 'conseils', label: {fr: 'Conseils', en: 'Guides', de: 'Ratgeber'}},
];
