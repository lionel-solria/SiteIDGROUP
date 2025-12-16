'use client';

import {useState} from 'react';
import {Universe} from '../../lib/types';
import {CTAButton} from '../ui/CTAButton';

export function SketchHotspots({universe}: {universe: Universe}) {
  const [selected, setSelected] = useState(universe.hotspots[0]);
  return (
    <section className="mt-10 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Hotspots</p>
        <h3 className="text-2xl font-semibold text-slate-900">{universe.hero.title}</h3>
        <p className="text-slate-700">{universe.hero.description}</p>
        <div className="mt-4 space-y-2">
          {universe.hotspots.map((spot) => (
            <button
              key={spot.title}
              onClick={() => setSelected(spot)}
              className={`w-full rounded-xl border p-3 text-left focus-ring transition ${
                selected.title === spot.title ? 'border-slate-900 bg-primary-' + universe.color + '/10' : 'border-slate-200'
              }`}
            >
              <div className="font-semibold text-slate-900">{spot.title}</div>
              <div className="text-sm text-slate-600">{spot.description}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 shadow-sketch flex flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Zoom</p>
          <h4 className="text-xl font-semibold text-slate-900">{selected.title}</h4>
          <p className="text-slate-700">{selected.description}</p>
        </div>
        <div className="mt-4 flex gap-3 flex-wrap">
          <CTAButton href="/contact" label="Parler à un expert" tone="dark" />
          <CTAButton href="/espace-client" label="Espace client" tone="outline" />
        </div>
      </div>
    </section>
  );
}
