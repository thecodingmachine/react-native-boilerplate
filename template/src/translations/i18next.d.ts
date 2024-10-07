import type { SupportedLanguages } from '@/hooks/language/schema';
import type { defaultNS, resources } from '@/translations';

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type RecursiveKeys<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object ? Join<K, RecursiveKeys<T[K]>> : K;
    }[keyof T]
  : never;

type defaultTranslations = (typeof resources)[SupportedLanguages.EN_EN];

export type TranslationKeys = RecursiveKeys<
  defaultTranslations[typeof defaultNS]
>;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: defaultTranslations;
  }
}
