'use client';

import {useLocale} from 'next-intl';
import Link from 'next-intl/link';
import {usePathname} from 'next/navigation';
import {localeNames, locales} from '@/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((lng) => {
        const isActive = lng === locale;
        return (
          <Link
            key={lng}
            href={pathname.replace(`/${locale}`, `/${lng}`)}
            className={`rounded-full px-3 py-1 border text-xs font-semibold transition-colors ${
              isActive
                ? 'border-brand-orange text-brand-orange bg-brand-orange/10'
                : 'border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue'
            }`}
            aria-label={`Basculer en ${localeNames[lng]}`}
          >
            {lng.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
