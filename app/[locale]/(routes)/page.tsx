import ArticleCard from '@/components/ArticleCard';
import HeroSlider from '@/components/HeroSlider';
import ProofPoints from '@/components/ProofPoints';
import SectionTitle from '@/components/SectionTitle';
import TeamFunFacts from '@/components/TeamFunFacts';
import UniverseCard from '@/components/UniverseCard';
import KpiGauge from '@/components/KpiGauge';
import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import {articles, gauges, proofPoints, team, universes} from '@/content/site';

export default function HomePage({params}: {params: {locale: string}}) {
  const t = useTranslations();
  const locale = params.locale;

  return (
    <div>
      <HeroSlider locale={locale} />

      <section className="section">
        <div className="container">
          <SectionTitle title={t('why.title')} subtitle={t('why.subtitle')} />
          <ProofPoints items={proofPoints} locale={locale} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <SectionTitle title={t('wormhout.title')} subtitle={t('wormhout.body')} />
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900">
              {t('wormhout.metrics')}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {universes.map((universe) => (
              <UniverseCard key={universe.id} universe={universe} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title={t('rse.title')} subtitle={t('rse.subtitle')} />
          <div className="grid gap-4 sm:grid-cols-3">
            {gauges.map((gauge) => (
              <KpiGauge key={gauge.label.fr} label={gauge.label[locale as 'fr']} value={gauge.value} />
            ))}
          </div>
          <Link
            href="/rse"
            locale={locale}
            className="inline-flex mt-6 text-sm font-semibold text-slate-900"
          >
            {t('rse.cta')} →
          </Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionTitle title={t('news.title')} subtitle={t('news.subtitle')} />
          <div className="grid gap-4 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <SectionTitle title={t('team.title')} subtitle={t('team.subtitle')} />
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="card p-4">{universes[0].baseline[locale as 'fr']}</div>
              <div className="card p-4">{universes[1].baseline[locale as 'fr']}</div>
              <div className="card p-4">{universes[2].baseline[locale as 'fr']}</div>
            </div>
          </div>
          <TeamFunFacts members={team} locale={locale} />
        </div>
      </section>
    </div>
  );
}
