import {newsCards} from '@/data/mock/content';
import {notFound} from 'next/navigation';

interface Params {
  params: {slug: string};
}

export default function ArticlePage({params}: Params) {
  const article = newsCards.find((item) => item.slug === params.slug);
  if (!article) return notFound();

  return (
    <div className="container-page mt-10 space-y-4">
      <p className="text-xs uppercase tracking-wide text-gray-500">{article.category}</p>
      <h1 className="text-3xl font-bold text-brand.ink">{article.title}</h1>
      <p className="text-gray-500">{article.date}</p>
      <div className="rounded-3xl bg-white p-6 shadow-card">
        <p className="mb-4 text-lg text-gray-800">{article.excerpt}</p>
        <p className="text-gray-700">
          Contenu détaillé à venir via CMS headless. Chaque article pourra intégrer des visuels croquis, des blocs citations et
          des téléchargements.
        </p>
      </div>
    </div>
  );
}
