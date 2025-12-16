import ArticleCard from '@/components/ArticleCard';
import SectionTitle from '@/components/SectionTitle';
import {articles} from '@/content/site';
import {useTranslations} from 'next-intl';

export default function NewsPage({params}: {params: {locale: string}}) {
  const t = useTranslations('news');
  const locale = params.locale;
  return (
    <div className="section">
      <div className="container space-y-6">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
