'use client';

import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';

const panels = [
  { id: 'home', color: 'brand.orange', hex: '#FF7A00' },
  { id: 'pro', color: 'brand.blue', hex: '#1D70B8' },
  { id: 'agri', color: 'brand.green', hex: '#3E9C4F' }
];

export default function HeroSlider() {
  const [active, setActive] = useState('home');
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="container-page mt-8">
      <div className="hero-sketch rounded-3xl bg-white p-6 shadow-card">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm uppercase tracking-wide text-gray-500">ID GROUP</p>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">{t('title')}</h1>
          <p className="mt-3 text-lg text-gray-700">{t('subtitle')}</p>
        </div>
        <div className="hidden gap-2 md:flex" role="tablist" aria-label="Univers ID GROUP">
          {panels.map((panel) => {
            const currentActive = active === panel.id;
            return (
              <button
                key={panel.id}
                onMouseEnter={() => setActive(panel.id)}
                onFocus={() => setActive(panel.id)}
                className="slider-panel group flex flex-1 flex-col justify-between rounded-2xl border bg-white/90 p-6 text-left shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ flex: currentActive ? 1.4 : 1, outlineColor: panel.hex }}
                role="tab"
                aria-selected={currentActive}
              >
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: panel.hex }} aria-hidden />
                  {t(`panels.${panel.id}.title` as any)}
                </div>
                <p className="mt-4 text-lg font-semibold text-brand.ink" style={{ color: currentActive ? panel.hex : undefined }}>
                  {t(`panels.${panel.id}.lead` as any)}
                </p>
                <Link
                  href={`/univers/${panel.id}`}
                  locale={locale}
                  className="mt-6 inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
                  style={{ borderColor: panel.hex, color: panel.hex }}
                >
                  {t(`panels.${panel.id}.cta` as any)}
                </Link>
              </button>
            );
          })}
        </div>
        <div className="grid gap-3 md:hidden" aria-label="Univers ID GROUP">
          {panels.map((panel) => (
            <div key={panel.id} className="rounded-2xl border bg-white p-5 shadow-card">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: panel.hex }} aria-hidden />
                {t(`panels.${panel.id}.title` as any)}
              </div>
              <p className="mt-3 text-lg font-semibold text-brand.ink">{t(`panels.${panel.id}.lead` as any)}</p>
              <Link
                href={`/univers/${panel.id}`}
                locale={locale}
                className="mt-4 inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-sm font-semibold"
                style={{ borderColor: panel.hex, color: panel.hex }}
              >
                {t(`panels.${panel.id}.cta` as any)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
