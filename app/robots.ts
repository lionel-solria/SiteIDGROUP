import type {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.id-group.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/fr', '/en', '/de']
      }
    ],
    sitemap: `${base}/sitemap.xml`
  };
}
