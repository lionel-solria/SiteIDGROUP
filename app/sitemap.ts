import {MetadataRoute} from 'next';

const locales = ['fr', 'en', 'de'];
const baseUrl = 'https://www.idgroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/le-groupe', '/solutions', '/rse', '/actualites', '/contact', '/espace-client'];
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      changefreq: 'weekly',
      priority: route === '' ? 1 : 0.7
    }))
  );
}
