import {Metadata} from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.id-group.example'),
  title: {
    default: 'ID GROUP | Solutions industrielles pour le soin du vivant',
    template: '%s | ID GROUP'
  },
  description:
    'ID GROUP imagine des solutions sur-mesure pour sécuriser les environnements Home, Pro et Agri avec une approche RSE mesurée.',
  openGraph: {
    title: 'ID GROUP | Solutions industrielles pour le soin du vivant',
    description:
      'Expert industriel humaniste : confort, hygiène et performance pour la maison, l’entreprise et l’agriculture.',
    images: ['/images/og-hero.png'],
    siteName: 'ID GROUP'
  },
  twitter: {
    card: 'summary_large_image'
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
      'de': '/de'
    }
  },
  robots: {
    index: true,
    follow: true
  }
};
