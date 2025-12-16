'use client';

import {useState} from 'react';
import Link from 'next/link';
import {heroSlides} from '../../content/home';
import {CTAButton} from '../ui/CTAButton';
import {clsx} from 'clsx';

export function HeroSlider() {
  const [active, setActive] = useState(heroSlides[0].key);
  const slides = heroSlides;

  return (
    <section className="mt-8">
      <div className="hidden gap-3 md:grid grid-cols-3 h-[420px]">
        {slides.map((slide) => {
          const isActive = slide.key === active;
          return (
            <button
              key={slide.key}
              onMouseEnter={() => setActive(slide.key)}
              className={clsx(
                'relative overflow-hidden text-left transition-all duration-300 border border-slate-200 bg-white',
                isActive ? 'col-span-2 lg:col-span-2' : 'col-span-1',
                'focus-ring'
              )}
            >
              <div
                className={clsx('absolute inset-0 opacity-15', {
                  'bg-primary-home/10': slide.color === 'home',
                  'bg-primary-pro/10': slide.color === 'pro',
                  'bg-primary-agri/10': slide.color === 'agri'
                })}
              />
              <div className="flex h-full flex-col justify-between p-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{slide.title}</p>
                  <h2 className="text-2xl font-semibold text-slate-900 leading-tight">{slide.punchline}</h2>
                  <p className="text-slate-600 text-sm max-w-xl">{slide.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <CTAButton href={slide.cta} label="Découvrir" tone={slide.color === 'pro' ? 'dark' : 'light'} />
                  <Link href="/espace-client" className="text-sm font-semibold underline">
                    Espace Client
                  </Link>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="md:hidden space-y-4">
        {slides.map((slide) => (
          <div key={slide.key} className="sketch-border rounded-2xl bg-white p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{slide.title}</p>
            <h2 className="text-xl font-semibold text-slate-900 leading-tight">{slide.punchline}</h2>
            <p className="text-slate-600 text-sm mt-2">{slide.description}</p>
            <div className="mt-4 flex gap-3 flex-wrap">
              <CTAButton href={slide.cta} label="Découvrir" />
              <CTAButton href="/espace-client" label="Espace Client" tone="outline" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
