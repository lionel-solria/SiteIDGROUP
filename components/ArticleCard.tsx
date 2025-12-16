import Link from 'next-intl/link';
import {newsCards} from '@/data/mock/content';

export default function ArticleCard() {
  return (
    <div className="card-grid">
      {newsCards.map((article) => (
        <article key={article.slug} className="rounded-2xl border bg-white p-5 shadow-card">
          <p className="text-xs uppercase tracking-wide text-gray-500">{article.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-brand.ink">{article.title}</h3>
          <p className="mt-2 text-gray-700">{article.excerpt}</p>
          <div className="mt-4 text-sm text-gray-500">{article.date}</div>
          <Link href={`/actualites/${article.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand.blue hover:underline">
            Lire
          </Link>
        </article>
      ))}
    </div>
  );
}
