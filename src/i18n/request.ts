import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import messagesFr from '../messages/fr.json';
import messagesEn from '../messages/en.json';
import messagesDe from '../messages/de.json';

export const locales = ['fr', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

const messagesMap: Record<Locale, any> = {
  fr: messagesFr,
  en: messagesEn,
  de: messagesDe
};

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    messages: messagesMap[locale as Locale]
  };
});
