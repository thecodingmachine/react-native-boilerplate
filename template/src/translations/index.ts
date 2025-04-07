import 'intl-pluralrules';

import type { Language } from '@/hooks/language/schema';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en-EN.json';
import fr from './fr-FR.json';

export const defaultNS = 'boilerplate';

export const resources = {
  'en-EN': en,
  'fr-FR': fr,
} as const satisfies Record<Language, unknown>;

void i18n.use(initReactI18next).init({
  defaultNS,
  fallbackLng: 'fr-FR',
  lng: 'fr-FR',
  resources,
});

// add capitalization formatter
i18n.services.formatter?.add(
  'capitalize',
  (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
);

export { default } from 'i18next';
