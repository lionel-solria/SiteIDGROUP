'use client';

import {useState} from 'react';
import {Hotspot} from '@/data/content';

interface Props {
  hotspots: Hotspot[];
}

export default function SketchHotspots({hotspots}: Props) {
  const [selected, setSelected] = useState<Hotspot | null>(hotspots[0] ?? null);

  return (
    <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
      <div className="relative h-72 overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-gradient-to-br from-brand-sand via-white to-brand-sand shadow-soft">
        <svg className="absolute inset-0 opacity-30" viewBox="0 0 400 240" role="presentation">
          <path
            d="M30 200 L120 80 L220 120 L340 60 L380 140 L260 200 Z"
            fill="none"
            stroke="#F26B1D"
            strokeWidth="3"
            strokeDasharray="10 6"
          />
          <path d="M60 160 C120 150 170 100 230 110" stroke="#0079C4" strokeWidth="2" fill="none" strokeDasharray="6 8" />
          <circle cx="260" cy="150" r="28" fill="none" stroke="#2F9D4A" strokeWidth="3" strokeDasharray="8 6" />
        </svg>
        {hotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            className={`absolute flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white/90 text-xs font-bold shadow-soft transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-orange ${
              selected?.id === hotspot.id ? 'border-brand-orange text-brand-orange' : 'border-slate-300 text-slate-600'
            }`}
            style={{top: hotspot.position.top, left: hotspot.position.left}}
            onClick={() => setSelected(hotspot)}
            aria-pressed={selected?.id === hotspot.id}
            aria-label={hotspot.label}
          >
            ●
          </button>
        ))}
      </div>
      <div className="card p-5">
        <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Hotspot</p>
        <h3 className="mt-1 text-xl font-semibold text-brand-charcoal">{selected?.label}</h3>
        <p className="mt-2 text-sm text-slate-700">{selected?.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
          {hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              onClick={() => setSelected(hotspot)}
              className={`rounded-full border px-3 py-1 transition ${
                selected?.id === hotspot.id
                  ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
                  : 'border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {hotspot.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
