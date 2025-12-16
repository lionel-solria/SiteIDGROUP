import type {MetadataRoute} from 'next';
import {locales} from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.id-group.com';
  const paths = ['/', '/le-groupe', '/rse', '/solutions', '/actualites', '/contact', '/espace-client'];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path === '/' ? '' : path}`,
      changeFrequency: 'weekly',
      priority: path === '/' ? 1 : 0.8
    }))
  );
}
