'use client';

import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';

const locales = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('footer');

  return (
    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs font-semibold shadow-card">
      {locales.map((item) => (
        <Link
          key={item.code}
          href={pathname || '/'}
          locale={item.code}
          className={`rounded-full px-2 py-1 transition ${locale === item.code ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label={`${t('sitemap')} - ${item.label}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
