import {newsItems} from '@/data/content';
import {notFound} from 'next/navigation';

export default function ArticlePage({params}: {params: {slug: string}}) {
  const article = newsItems.find((item) => item.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <article className="section">
      <div className="mx-auto max-w-3xl space-y-4 px-4">
        <p className="badge bg-brand-orange/10 text-brand-orange">{article.category}</p>
        <h1 className="text-3xl font-bold text-brand-charcoal">{article.title}</h1>
        <p className="text-sm text-slate-600">Publié le {new Date(article.date).toLocaleDateString()}</p>
        <p className="text-base text-slate-700">{article.excerpt}</p>
        <div className="card space-y-3 p-5 text-sm text-slate-700">
          <p>Contenu mock pour démontrer la structure MDX/CMS future.</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Zone pour intégrer un récit client ou un retour salon.</li>
            <li>Appels à l'action vers Contact ou Espace client.</li>
            <li>Optimisation SEO avec balises Hn et meta OG.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
