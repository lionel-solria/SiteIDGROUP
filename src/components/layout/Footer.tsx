import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {localeLinks} from '../../content/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
        <div>
          <div className="font-semibold text-lg">ID GROUP</div>
          <p className="text-sm text-slate-600">Expert industriel humaniste, centré sur le soin du vivant.</p>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold text-slate-900 mb-2">{t('sitemap')}</div>
          <ul className="space-y-1">
            <li><Link href="/le-groupe">Le Groupe</Link></li>
            <li><Link href="/rse">RSE</Link></li>
            <li><Link href="/actualites">Actualités</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold text-slate-900 mb-2">{t('follow')}</div>
          <p>LinkedIn</p>
          <p>Youtube</p>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold text-slate-900 mb-2">{t('languages')}</div>
          <div className="flex gap-2 flex-wrap">
            {localeLinks.map((locale) => (
              <span key={locale.code} className="rounded-full border border-slate-300 px-3 py-1">
                {locale.label}
              </span>
            ))}
          </div>
          <div className="mt-4 space-x-3">
            <Link href="/mentions-legales" className="underline">
              {t('legal')}
            </Link>
            <Link href="/confidentialite" className="underline">
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
