import {notFound} from 'next/navigation';
import {articles} from '../../../../../content/articles';

export function generateStaticParams() {
  const locales = ['fr', 'en', 'de'];
  return locales.flatMap((locale) => articles.map((article) => ({locale, slug: article.slug})));
}

export default function ArticlePage({params}: {params: {slug: string}}) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <article className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{article.category}</p>
      <h1 className="text-3xl font-semibold text-slate-900">{article.title}</h1>
      <p className="text-sm text-slate-500">{article.date}</p>
      <p className="text-slate-700">
        Contenu mock : le portail client sera accessible en phase 2. Cet article illustre la capacité ID GROUP à sécuriser des
        environnements critiques en quelques semaines.
      </p>
    </article>
  );
}
