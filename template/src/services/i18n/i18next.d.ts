import type {
  defaultNS,
  resources,
  SupportedLanguages,
} from '@/services/i18n/instance';

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
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface i18n {
    changeLanguage(
      lng: SupportedLanguages,
      callback?: Callback,
    ): Promise<TFunction>;
    language: SupportedLanguages;
  }
}
