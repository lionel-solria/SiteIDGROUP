import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';

export default function Footer({locale}: {locale: string}) {
  const t = useTranslations('nav');
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-bold text-lg">ID GROUP</div>
          <p className="text-sm text-slate-200 mt-2">
            Solutions industrielles responsables pour le confort, la sécurité et le soin du vivant.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <Link href="/groupe" locale={locale} className="hover:underline">
              {t('group')}
            </Link>
            <Link href="/rse" locale={locale} className="hover:underline">
              {t('rse')}
            </Link>
            <Link href="/actualites" locale={locale} className="hover:underline">
              {t('news')}
            </Link>
          </div>
          <div className="space-y-2">
            <Link href="/contact" locale={locale} className="hover:underline">
              {t('contact')}
            </Link>
            <Link href="/espace-client" locale={locale} className="hover:underline">
              {t('clientArea')}
            </Link>
            <Link href="/sitemap.xml" locale={locale} className="hover:underline">
              Plan du site
            </Link>
          </div>
        </div>
        <div className="text-sm text-slate-300">
          <div className="font-semibold text-white">Réseaux & contact</div>
          <p>contact@id-group.example</p>
          <p>+33 (0)3 00 00 00 00</p>
          <p className="mt-2">LinkedIn · YouTube</p>
        </div>
      </div>
    </footer>
  );
}
