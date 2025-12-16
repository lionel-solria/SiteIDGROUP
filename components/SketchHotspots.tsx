'use client';

import {universes} from '@/data/mock/content';
import {useState} from 'react';

interface Props {
  universeId: string;
}

export default function SketchHotspots({universeId}: Props) {
  const universe = universes.find((u) => u.id === universeId);
  const [selected, setSelected] = useState(universe?.hotspots[0]);

  if (!universe) return null;

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white shadow-card md:col-span-3">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,0,.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(29,112,184,.08),transparent_45%)]" />
        {universe.hotspots.map((spot) => (
          <button
            key={spot.id}
            className="hotspot px-3 py-2 text-left text-sm font-semibold text-brand.ink"
            style={{ top: spot.position.top, left: spot.position.left }}
            onClick={() => setSelected(spot)}
            aria-pressed={selected?.id === spot.id}
          >
            {spot.title}
          </button>
        ))}
      </div>
      <div className="md:col-span-2">
        <p className="text-xs uppercase tracking-wide text-gray-500">{universe.title}</p>
        <h3 className="mt-2 text-xl font-semibold">{selected?.title}</h3>
        <p className="mt-2 text-gray-700">{selected?.description}</p>
        <div className="mt-4 space-y-2">
          {universe.cases.map((item) => (
            <div key={item.title} className="rounded-xl border bg-white p-3 shadow-card">
              <p className="text-sm font-semibold text-brand.ink">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
