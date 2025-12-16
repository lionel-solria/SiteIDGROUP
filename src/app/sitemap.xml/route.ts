import {NextResponse} from 'next/server';
import {locales} from '../../i18n/request';

export async function GET() {
  const base = 'https://www.id-group.example';
  const urls = ['/', '/solutions', '/le-groupe', '/rse', '/actualites', '/contact', '/espace-client'];
  const entries = urls
    .flatMap((url) => locales.map((locale) => `${base}/${locale}${url}`))
    .map((loc) => `<url><loc>${loc}</loc><changefreq>weekly</changefreq></url>`) 
    .join('');

  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
  return new NextResponse(xml, {headers: {'Content-Type': 'application/xml'}});
}
