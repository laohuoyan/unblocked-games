import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';
import { localePrefix } from './app/navigation';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale: 'en',

  localeDetection: false,

  localePrefix: 'as-needed',
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    `/(en|jp|de|es|fr|pt|ru|cn|tw)/:path*`,
    '/g/:path*',
    '/embed/:path*',
    '/((?!images|_next|api|.*\\..*).*)'
    // `/(${locales.join('|')})/:path*`,
  ]
};