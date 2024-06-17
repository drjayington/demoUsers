import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';
 
export default createMiddleware({
  pathnames,
  locales,
  localePrefix,
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(de|en)/:path*']
};4