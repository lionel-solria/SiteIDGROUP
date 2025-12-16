import {MetadataRoute} from 'next';
import {locales} from '@/i18n/request';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://id-group.example';
  const routes = ['/', '/groupe', '/rse', '/actualites', '/contact', '/espace-client', '/univers/id-home', '/univers/id-pro', '/univers/id-agri'];
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      entries.push({
        url: `${base}/${locale}${route === '/' ? '' : route}`,
        changeFrequency: 'weekly',
        priority: route === '/' ? 1 : 0.6,
        alternates: {
          languages: Object.fromEntries(locales.map((loc) => [loc, `${base}/${loc}${route === '/' ? '' : route}`])),
        },
      });
    });
  });

  return entries;
}
