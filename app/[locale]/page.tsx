import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import HeroSlider from '@/components/home/HeroSlider';
import ProofPoints from '@/components/home/ProofPoints';
import TeamFunFacts from '@/components/home/TeamFunFacts';
import ArticleCard from '@/components/common/ArticleCard';
import KpiGauge from '@/components/common/KpiGauge';
import {industrialFacts, kpiGauges, newsItems} from '@/data/content';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <section className="section bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center">
          <div className="space-y-4 md:w-3/5">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">ID GROUP</p>
            <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">{t('hero.headline')}</h1>
            <p className="text-base text-slate-700">{t('hero.subhead')}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-blue"
              >
                {t('hero.ctaTalk')}
              </Link>
              <Link
                href="/espace-client"
                className="rounded-full border border-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue hover:border-brand-orange hover:text-brand-orange"
              >
                {t('hero.ctaClient')}
              </Link>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="card p-5">
              <p className="text-sm font-semibold text-brand-charcoal">Trinité des univers</p>
              <p className="text-sm text-slate-700">3 domaines d'activités stratégiques pour orienter vos projets.</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-white">
                <div className="rounded-xl bg-brand-orange px-3 py-4">ID Home</div>
                <div className="rounded-xl bg-brand-blue px-3 py-4">ID Pro</div>
                <div className="rounded-xl bg-brand-green px-3 py-4">ID Agri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroSlider />
      <ProofPoints />

      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[1.2fr_1fr]">
          <div className="card p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Wormhout</p>
            <h2 className="text-2xl font-bold text-brand-charcoal md:text-3xl">{t('wormhout.title')}</h2>
            <p className="mt-3 text-sm text-slate-700">{t('wormhout.story')}</p>
            <ul className="mt-4 space-y-2 text-sm text-brand-charcoal">
              <li>• {t('wormhout.milestones.0')}</li>
              <li>• {t('wormhout.milestones.1')}</li>
              <li>• {t('wormhout.milestones.2')}</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm font-semibold text-brand-charcoal md:grid-cols-4">
              {industrialFacts.map((fact) => (
                <div key={fact.label} className="rounded-xl bg-white px-3 py-4 shadow-soft">
                  <div className="text-2xl">{fact.value}</div>
                  <div className="text-xs text-slate-600">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card flex flex-col justify-between bg-gradient-to-br from-brand-orange/10 via-white to-brand-blue/10 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Positiv'ID</p>
              <h3 className="text-xl font-semibold text-brand-charcoal">{t('rse.title')}</h3>
              <p className="mt-2 text-sm text-slate-700">{t('rse.teaser')}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {kpiGauges.slice(0, 2).map((kpi) => (
                <KpiGauge key={kpi.id} value={kpi.value} label={kpi.label} unit={kpi.unit} caption={kpi.caption} />
              ))}
            </div>
            <Link href="/rse" className="mt-4 text-sm font-semibold text-brand-blue">
              {t('rse.cta')} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t('news.title')}</p>
              <h2 className="text-2xl font-bold text-brand-charcoal md:text-3xl">{t('news.title')}</h2>
            </div>
            <Link href="/actualites" className="text-sm font-semibold text-brand-blue">
              {t('news.cta')} →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {newsItems.map((item) => (
              <ArticleCard key={item.slug} {...item} readMoreLabel={t('newsPage.readMore')} />
            ))}
          </div>
        </div>
      </section>

      <TeamFunFacts />
    </div>
  );
}
