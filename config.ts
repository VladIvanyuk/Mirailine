import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'ru' as const;
export const locales = ['en', 'ru'] as const;

export const pathnames = {
  '/': '/',
  about: 'about',
  contacts: 'contacts',
  prices: 'prices',
  schedule: 'schedule',
  tracking: 'tracking',
  services: 'services',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;
