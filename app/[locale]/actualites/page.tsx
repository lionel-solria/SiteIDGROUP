import {newsCards} from '@/data/mock/content';
import Link from 'next-intl/link';
import {getLocale} from 'next-intl/server';

export default async function NewsPage() {
  const locale = await getLocale();
  return (
    <div className="container-page mt-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wide text-gray-500">Actualités</p>
        <h1 className="text-3xl font-bold text-brand.ink">Blog & études de cas</h1>
        <p className="mt-2 text-gray-700">RSE, salons, cas clients et conseils pratiques.</p>
      </header>
      <div className="card-grid">
        {newsCards.map((article) => (
          <article key={article.slug} className="rounded-2xl border bg-white p-5 shadow-card">
            <p className="text-xs uppercase tracking-wide text-gray-500">{article.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-brand.ink">{article.title}</h3>
            <p className="mt-2 text-gray-700">{article.excerpt}</p>
            <div className="mt-4 text-sm text-gray-500">{article.date}</div>
            <Link
              href={`/actualites/${article.slug}`}
              locale={locale}
              className="mt-3 inline-block text-sm font-semibold text-brand.blue hover:underline"
            >
              Lire
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
