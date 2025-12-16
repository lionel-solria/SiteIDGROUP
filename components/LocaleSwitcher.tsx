'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';

const locales = [
  {code: 'fr', label: 'FR'},
  {code: 'en', label: 'EN'},
  {code: 'de', label: 'DE'},
];

export default function LocaleSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');
  const currentLocale = useLocale();

  const handleChange = (code: string) => {
    router.replace(pathname, {locale: code});
  };

  return (
    <div className="inline-flex items-center gap-2" aria-label={`${t('clientArea')} locale`}>
      {locales.map((item) => (
        <button
          key={item.code}
          onClick={() => handleChange(item.code)}
          className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
            currentLocale === item.code
              ? 'bg-slate-900 text-white border-slate-900'
              : 'border-slate-200 text-slate-600 hover:border-slate-400'
          }`}
          aria-pressed={currentLocale === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
