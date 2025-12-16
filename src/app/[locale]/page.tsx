import {HeroSlider} from '../../components/sections/HeroSlider';
import {ProofPoints} from '../../components/sections/ProofPoints';
import {WormhoutStory} from '../../components/sections/WormhoutStory';
import {RseTeaser} from '../../components/sections/RseTeaser';
import {ArticlesPreview} from '../../components/sections/ArticlesPreview';
import {TeamFunFacts} from '../../components/sections/TeamFunFacts';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="hero-pattern rounded-3xl border border-slate-200 p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">ID Group</p>
        <h1 className="text-3xl font-semibold text-slate-900 leading-tight max-w-2xl">
          L’expert industriel humaniste dédié au soin du vivant
        </h1>
        <p className="text-slate-700 max-w-2xl">
          Des solutions sur-mesure pour sécuriser les environnements Home, Pro et Agri. Discours solution avant produit,
          pour le confort, l’hygiène, la performance et le bien-être.
        </p>
        <HeroSlider />
      </div>
      <ProofPoints />
      <WormhoutStory />
      <RseTeaser />
      <ArticlesPreview />
      <TeamFunFacts />
    </div>
  );
}
