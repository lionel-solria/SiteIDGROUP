import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-brand-orange/10 border border-brand-orange flex items-center justify-center font-bold text-brand-orange">
              ID
            </div>
            <div>
              <p className="text-sm font-semibold">ID GROUP</p>
              <p className="text-xs text-slate-500">Industrie engagée pour le soin du vivant</p>
            </div>
          </div>
          <div className="text-sm text-slate-600 space-y-1">
            <p>Wormhout • Alpespace</p>
            <p>contact@id-group.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900">{t('group')}</h3>
            <ul className="space-y-1 text-slate-600">
              <li><Link href="/le-groupe">Mission & valeurs</Link></li>
              <li><Link href="/le-groupe#histoire">Histoire</Link></li>
              <li><Link href="/le-groupe#usines">Sites industriels</Link></li>
              <li><Link href="/le-groupe#equipe">Équipe</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900">{t('commitments')}</h3>
            <ul className="space-y-1 text-slate-600">
              <li><Link href="/rse">Positiv'ID</Link></li>
              <li><Link href="/rse#indicateurs">Indicateurs</Link></li>
              <li><Link href="/rse#ressources">Certifications</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-slate-900">{t('solutions')}</h3>
            <ul className="space-y-1 text-slate-600">
              <li><Link href="/solutions/id-home">ID Home</Link></li>
              <li><Link href="/solutions/id-pro">ID Pro</Link></li>
              <li><Link href="/solutions/id-agri">ID Agri</Link></li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <Link href="/contact" className="font-semibold text-brand-blue">{t('contact')}</Link>
          <p>Mentions légales • Politique de confidentialité</p>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wide text-slate-500">Langues</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
