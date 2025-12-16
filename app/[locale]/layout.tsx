import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ID GROUP | Solutions industrielles durables',
  description:
    'ID GROUP conçoit des solutions pour le confort, l’hygiène et la performance des environnements home, pro et agri.',
  metadataBase: new URL('https://id-group.example'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ID GROUP | Solutions industrielles durables',
    description:
      'Un partenaire industriel humaniste qui sécurise, accompagne et équipe les environnements Home, Pro et Agri.',
    url: 'https://id-group.example',
    siteName: 'ID GROUP',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900">
        <NextIntlClientProvider locale={params.locale} messages={messages} timeZone="Europe/Paris">
          <Header locale={params.locale} />
          <main>{children}</main>
          <Footer locale={params.locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
