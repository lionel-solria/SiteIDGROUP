import HeroSlider from '@/components/HeroSlider';
import ProofPoints from '@/components/ProofPoints';
import KpiGauge from '@/components/KpiGauge';
import ArticleCard from '@/components/ArticleCard';
import TeamFunFacts from '@/components/TeamFunFacts';
import UniverseCard from '@/components/UniverseCard';
import Link from 'next-intl/link';
import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <div>
      <HeroSlider />
      <section className="container-page mt-12">
        <h2 className="text-2xl font-semibold text-brand.ink">{t('why.title')}</h2>
        <ProofPoints />
      </section>

      <section className="container-page mt-12 grid gap-6 rounded-3xl bg-white p-6 shadow-card md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-brand.ink">{t('wormhout.title')}</h3>
          <p className="mt-2 text-gray-700">{t('wormhout.description')}</p>
        </div>
        <div className="grid gap-3 text-sm text-gray-700">
          <div className="rounded-2xl border bg-white p-4 shadow-card">8 000 m² d'atelier intégré</div>
          <div className="rounded-2xl border bg-white p-4 shadow-card">Cellule R&D matériaux + design</div>
          <div className="rounded-2xl border bg-white p-4 shadow-card">Prototypage express & circuits courts</div>
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-brand.ink">{t('rse.title')}</h3>
          <Link className="text-sm font-semibold text-brand.blue hover:underline" href="/rse">
            {t('rse.cta')}
          </Link>
        </div>
        <div className="mt-4">
          <KpiGauge />
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-brand.ink">{t('news.title')}</h3>
          <Link className="text-sm font-semibold text-brand.blue hover:underline" href="/actualites">
            {t('news.cta')}
          </Link>
        </div>
        <div className="mt-4">
          <ArticleCard />
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-brand.ink">{t('team.title')}</h3>
        </div>
        <div className="mt-4">
          <TeamFunFacts />
        </div>
      </section>

      <section className="container-page mt-12">
        <h3 className="text-2xl font-semibold text-brand.ink">{t('nav.solutions')}</h3>
        <p className="text-gray-700">3 univers pour adresser chaque contexte : résidentiel, professionnel, agricole.</p>
        <div className="mt-4">
          <UniverseCard />
        </div>
      </section>
    </div>
  );
}
