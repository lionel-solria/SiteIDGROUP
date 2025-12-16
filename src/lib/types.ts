export type UniverseKey = 'home' | 'pro' | 'agri';

export type Universe = {
  key: UniverseKey;
  title: string;
  color: 'home' | 'pro' | 'agri';
  hero: {
    title: string;
    description: string;
    imageAlt: string;
  };
  hotspots: {title: string; description: string}[];
  stories: {title: string; summary: string}[];
};
