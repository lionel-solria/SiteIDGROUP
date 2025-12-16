import ArticleCard from '@/components/common/ArticleCard';
import {newsItems} from '@/data/content';
import {useTranslations} from 'next-intl';

export default function NewsPage() {
  const t = useTranslations('newsPage');
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t('title')}</p>
          <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">{t('title')}</h1>
          <p className="max-w-3xl text-sm text-slate-700">{t('subtitle')}</p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <ArticleCard key={item.slug} {...item} readMoreLabel={t('readMore')} />
          ))}
        </div>
      </div>
    </section>
  );
}
