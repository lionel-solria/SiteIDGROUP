import '@/styles/globals.css';
import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {unstable_setRequestLocale, getMessages} from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Metadata} from 'next';

export const locales = ['fr', 'en', 'de'];

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const messages = (await getMessages()) as any;
  const site = messages.site;
  return {
    title: site?.title,
    description: site?.description,
    alternates: {
      canonical: `https://www.idgroup.com/${params.locale}`,
      languages: {
        fr: 'https://www.idgroup.com/fr',
        en: 'https://www.idgroup.com/en',
        de: 'https://www.idgroup.com/de'
      }
    },
    openGraph: {
      title: site?.title,
      description: site?.description,
      url: `https://www.idgroup.com/${params.locale}`,
      locale: params.locale,
      siteName: 'ID GROUP'
    }
  };
}

export default async function LocaleLayout({children, params}: {children: ReactNode; params: {locale: string}}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-[#f7f7f9] text-brand.ink">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="pb-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
