import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'de'] as const;
  export const localePrefix = 'always'; // Default
   
  export const pathnames = {
    '/': '/',
   
    '/user/add': {
      en: '/user/add',
      de: '/hinzufügen/benutzer'
    },
   
    '/user/[id]': {
      en: '/user/[id]',
      de: '/hinzufügen/benutzer/[id]'
    },
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});