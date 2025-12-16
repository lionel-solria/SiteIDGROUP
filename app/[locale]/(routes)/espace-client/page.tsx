import SectionTitle from '@/components/SectionTitle';
import {useTranslations} from 'next-intl';

export default function ClientAreaPage({params}: {params: {locale: string}}) {
  const t = useTranslations('clientArea');
  return (
    <div className="section">
      <div className="container max-w-2xl">
        <SectionTitle title={t('title')} subtitle={t('body')} />
        <div className="card p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-700">
              Email / SSO
              <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" placeholder="prenom.nom@entreprise.com" />
            </label>
            <label className="text-sm text-slate-700">
              Mot de passe
              <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" type="password" />
            </label>
          </div>
          <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold">
            {t('cta')}
          </button>
          <p className="text-xs text-slate-500">Support : support@id-group.example</p>
        </div>
      </div>
    </div>
  );
}
