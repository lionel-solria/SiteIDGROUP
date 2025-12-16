import {Universe} from '../lib/types';

export const universes: Universe[] = [
  {
    key: 'home',
    title: 'ID Home',
    color: 'home',
    hero: {
      title: 'Sécuriser les habitats sans les dénaturer',
      description:
        'Solutions discrètes pour le confort, la sécurité domestique et le soin du vivant au quotidien.',
      imageAlt: 'Croquis d’un intérieur de maison'
    },
    hotspots: [
      {title: 'Entrées & accueils', description: 'Revêtements antiglisse, contrôle des flux visiteurs.'},
      {title: 'Espaces de vie', description: 'Matériaux hypoallergéniques, protection enfants et seniors.'},
      {title: 'Extérieurs', description: 'Drainage, traitement des zones humides, confort thermique.'}
    ],
    stories: [
      {
        title: 'Résidence senior : zéro chute sur 12 mois',
        summary: 'Audit, plan de prévention et pose de revêtements antidérapants sur 3 sites.'
      },
      {
        title: 'Programme bailleur social',
        summary: 'Kit confort été/hiver pour 500 logements, maintenance incluse.'
      }
    ]
  },
  {
    key: 'pro',
    title: 'ID Pro',
    color: 'pro',
    hero: {
      title: 'Performance et hygiène en environnements exigeants',
      description: 'Conception d’aires de travail sûres et performantes, de l’usine au laboratoire.',
      imageAlt: 'Croquis d’une usine'
    },
    hotspots: [
      {title: 'Flux logistiques', description: 'Zones de chargement sécurisées, signalétique dynamique.'},
      {title: 'Production', description: 'Revêtements résistants, confort opérateurs, hygiène renforcée.'},
      {title: 'Espaces communs', description: 'Confort acoustique et hygiène pour vestiaires, restauration, bureaux.'}
    ],
    stories: [
      {
        title: 'Site agroalimentaire',
        summary: 'Plan HACCP, sols industriels, maintenance et formation équipes.'
      },
      {title: 'Pharmaceutique', summary: 'Salle propre : continuité de service et maîtrise particulaire.'}
    ]
  },
  {
    key: 'agri',
    title: 'ID Agri',
    color: 'agri',
    hero: {
      title: 'Bien-être animal et performance des élevages',
      description: 'Solutions robustes pour logettes, couloirs et aires de soins.',
      imageAlt: 'Croquis d’une ferme'
    },
    hotspots: [
      {title: 'Logettes', description: 'Tapis confort, hygiène renforcée, réduction des blessures.'},
      {title: 'Traite & soins', description: 'Zones antidérapantes, confort opérateur et animal.'},
      {title: 'Circulation', description: 'Gestion des écoulements, réduction du stress des troupeaux.'}
    ],
    stories: [
      {title: 'Gaec des Dunes', summary: 'Baisse des boiteries de 35% grâce aux tapis logettes.'},
      {title: 'Ferme la Prairie', summary: 'Circuit sécurisé pour 200 vaches laitières, confort été/hiver.'}
    ]
  }
];
