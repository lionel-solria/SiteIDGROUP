import {useTranslations} from 'next-intl';

export default function ClientPage() {
  const t = useTranslations('clientSpace');
  return (
    <div className="container-page mt-10">
      <p className="text-xs uppercase tracking-wide text-gray-500">Phase 2</p>
      <h1 className="text-3xl font-bold text-brand.ink">{t('title')}</h1>
      <p className="mt-2 text-gray-700">{t('description')}</p>
      <div className="mt-6 rounded-3xl border bg-white p-6 shadow-card">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full border-2 border-brand.blue" aria-hidden />
          <div>
            <p className="font-semibold text-brand.ink">Connexion sécurisée</p>
            <p className="text-gray-700">SSO / login client disponible en phase 2. Besoin d\'accès ? Contactez le support.</p>
          </div>
        </div>
        <button className="mt-4 rounded-full bg-brand.blue px-4 py-2 text-sm font-semibold text-white shadow-card" type="button">
          Accéder au portail
        </button>
      </div>
    </div>
  );
}
