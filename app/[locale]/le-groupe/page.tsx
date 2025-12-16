import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import {industrialFacts} from '@/data/content';

export default function GroupPage() {
  const t = useTranslations('wormhout');
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Le Groupe</p>
          <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">Mission & valeurs</h1>
          <p className="max-w-3xl text-sm text-slate-700">
            Nous accompagnons les collectivités, industriels et éleveurs avec des solutions qui protègent les personnes et le vivant.
            Une approche design + industrie pour réconcilier performance, sécurité et confort.
          </p>
        </header>

        <div id="histoire" className="card space-y-3 p-6">
          <h2 className="text-xl font-semibold text-brand-charcoal">Histoire</h2>
          <p className="text-sm text-slate-700">{t('story')}</p>
          <ul className="grid gap-3 md:grid-cols-3">
            <li className="rounded-xl bg-white p-4 shadow-soft">{t('milestones.0')}</li>
            <li className="rounded-xl bg-white p-4 shadow-soft">{t('milestones.1')}</li>
            <li className="rounded-xl bg-white p-4 shadow-soft">{t('milestones.2')}</li>
          </ul>
        </div>

        <div id="usines" className="grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-brand-charcoal">Wormhout</h3>
            <p className="text-sm text-slate-700">Site historique, composites et finition.</p>
            <Link href="/rse" className="mt-3 inline-block text-sm font-semibold text-brand-blue">
              Process responsables →
            </Link>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-brand-charcoal">Alpespace</h3>
            <p className="text-sm text-slate-700">Capacité supplémentaire et logistique rapprochée.</p>
            <p className="mt-2 text-xs text-slate-500">Mise en route 2024</p>
          </div>
        </div>

        <div id="equipe" className="card p-6">
          <h3 className="text-lg font-semibold text-brand-charcoal">Equipe</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm font-semibold text-brand-charcoal md:grid-cols-4">
            {industrialFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl bg-white px-3 py-4 shadow-soft">
                <div className="text-2xl">{fact.value}</div>
                <div className="text-xs text-slate-600">{fact.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-700">
            Organisation agile, design industriel interne, bureau d'études, production et support digital pour préparer le portail client.
          </p>
        </div>
      </div>
    </section>
  );
}
