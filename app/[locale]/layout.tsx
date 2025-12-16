import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '@/i18n/config';
import '@/app/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'meta'});
  const metadataBase = new URL('https://www.id-group.com');
  const languages: Record<string, string> = {
    fr: '/fr',
    en: '/en',
    de: '/de'
  };

  return {
    title: t('title'),
    description: t('description'),
    metadataBase,
    alternates: {
      canonical: `/${params.locale}`,
      languages
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      siteName: 'ID GROUP',
      url: `https://www.id-group.com/${params.locale}`
    }
  };
}

export default async function LocaleLayout({children, params}: {children: ReactNode; params: {locale: string}}) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className="min-h-screen bg-brand-sand text-brand-charcoal">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
