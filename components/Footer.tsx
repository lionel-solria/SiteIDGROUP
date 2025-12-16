import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white py-10 text-sm">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-bold">
            <div className="h-8 w-8 rounded-full border-2 border-brand.blue bg-white shadow-card" aria-hidden />
            ID GROUP
          </div>
          <p className="text-gray-600">Solutions industrielles, humaines et responsables.</p>
        </div>
        <div className="flex flex-col gap-2 text-gray-700">
          <Link href="/le-groupe" locale={locale} className="hover:text-brand.orange">
            {t('sitemap')}
          </Link>
          <Link href="/legal" locale={locale} className="hover:text-brand.orange">
            {t('legal')}
          </Link>
          <Link href="/confidentialite" locale={locale} className="hover:text-brand.orange">
            {t('privacy')}
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-gray-700">
          <a href="https://www.linkedin.com" className="hover:text-brand.orange" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:contact@idgroup.fr" className="hover:text-brand.orange">
            contact@idgroup.fr
          </a>
          <span className="text-gray-500">© {year} ID GROUP</span>
        </div>
      </div>
    </footer>
  );
}
