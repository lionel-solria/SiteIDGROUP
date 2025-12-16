import Link from 'next/link';
import {articles} from '../../content/articles';

export function ArticlesPreview() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-900">Actualités</h3>
        <Link href="/actualites" className="text-sm underline">
          Voir tout
        </Link>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{article.category}</p>
            <h4 className="text-lg font-semibold text-slate-900">{article.title}</h4>
            <p className="text-sm text-slate-600">{article.excerpt}</p>
            <p className="mt-2 text-xs text-slate-500">{article.date}</p>
            <Link href={`/actualites/${article.slug}`} className="mt-2 inline-block text-sm font-semibold underline">
              Lire
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
