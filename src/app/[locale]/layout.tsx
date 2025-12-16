import type {Metadata} from 'next';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import {locales, defaultLocale} from '../../i18n/request';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'ID GROUP',
    template: '%s | ID GROUP'
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = useMessages();
  const locale = locales.includes(params.locale as any) ? params.locale : defaultLocale;

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
