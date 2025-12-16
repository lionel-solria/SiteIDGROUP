'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {localeLinks} from '../../content/navigation';
import {clsx} from 'clsx';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-2 text-xs font-semibold">
      {localeLinks.map((locale) => {
        const parts = pathname?.split('/') || [];
        parts[1] = locale.code;
        const localizedPath = parts.join('/') || '/';
        const active = pathname?.startsWith(`/${locale.code}`);
        return (
          <Link
            key={locale.code}
            href={localizedPath}
            className={clsx(
              'rounded-full border px-3 py-1 transition hover:border-slate-900',
              active ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 text-slate-600'
            )}
          >
            {locale.label}
          </Link>
        );
      })}
    </div>
  );
}
