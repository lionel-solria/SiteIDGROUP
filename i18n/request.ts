import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const locales = ['fr', 'en', 'de'] as const;

export type AppLocale = (typeof locales)[number];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as AppLocale)) {
    notFound();
  }

  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    messages,
    locale,
  };
});

export {locales};
