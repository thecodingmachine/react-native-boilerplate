import type { SupportedLanguages } from '@/hooks/language/schema';
import type { defaultNS, resources } from '@/translations';

export type TranslationKeys = RecursiveKeys<
  defaultTranslations[typeof defaultNS]
>;

type defaultTranslations = (typeof resources)[SupportedLanguages.EN_EN];

type Join<K, P> = K extends number | string
  ? P extends number | string
    ? `${K}.${P}`
    : never
  : never;

type RecursiveKeys<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object ? Join<K, RecursiveKeys<T[K]>> : K;
    }[keyof T]
  : never;

declare module 'i18next' {
  type CustomTypeOptions = {
    defaultNS: typeof defaultNS;
    resources: defaultTranslations;
  };
}
