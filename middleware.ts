import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale: 'fr',
  alternateLinks: true,
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
