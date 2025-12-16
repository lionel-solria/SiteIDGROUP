'use client';

import {Universe} from '@/content/site';
import {useState} from 'react';

export default function SketchHotspots({universe, locale}: {universe: Universe; locale: string}) {
  const [active, setActive] = useState<string | null>(null);
  const accent = universe.id === 'home' ? 'from-orange-100 to-orange-50' : universe.id === 'pro' ? 'from-blue-100 to-blue-50' : 'from-green-100 to-green-50';

  return (
    <div className={`relative rounded-3xl border border-dashed border-slate-200 p-6 bg-gradient-to-b ${accent}`}>
      <div className="aspect-video rounded-2xl border border-slate-200 relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#e2e8f0,transparent_30%),radial-gradient(circle_at_80%_40%,#cbd5e1,transparent_25%),linear-gradient(120deg,#fff,#f8fafc)]">
        {universe.hotspots.map((spot) => {
          const isActive = active === spot.id;
          return (
            <button
              key={spot.id}
              className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-900 bg-white/90 shadow-soft focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition ${
                isActive ? 'scale-105' : 'hover:scale-105'
              }`}
              style={{top: spot.position.top, left: spot.position.left}}
              aria-label={spot.label[locale as 'fr']}
              onClick={() => setActive(isActive ? null : spot.id)}
            >
              <span className="sr-only">{spot.label[locale as 'fr']}</span>
            </button>
          );
        })}
        {active && (
          <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur p-4 rounded-xl shadow-soft border border-slate-100">
            {universe.hotspots
              .filter((spot) => spot.id === active)
              .map((spot) => (
                <div key={spot.id}>
                  <div className="text-sm font-semibold text-slate-900">{spot.label[locale as 'fr']}</div>
                  <p className="text-sm text-slate-700 mt-1">{spot.description[locale as 'fr']}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
