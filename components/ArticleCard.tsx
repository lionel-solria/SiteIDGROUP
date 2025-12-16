import Link from 'next-intl/link';
import {Article} from '@/content/site';

export default function ArticleCard({article, locale}: {article: Article; locale: string}) {
  return (
    <Link
      href={`/actualites/${article.slug}`}
      locale={locale}
      className="card p-5 flex flex-col gap-3 hover:-translate-y-1 transition"
    >
      <span className="text-xs uppercase tracking-wide text-slate-500">{article.category[locale as 'fr']}</span>
      <h3 className="text-lg font-semibold text-slate-900">{article.title[locale as 'fr']}</h3>
      <p className="text-sm text-slate-600">{article.excerpt[locale as 'fr']}</p>
      <span className="text-xs text-slate-500">{new Date(article.date).toLocaleDateString(locale)}</span>
    </Link>
  );
}
