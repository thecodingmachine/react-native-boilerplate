import i18next from 'i18next';

import { SupportedLanguages } from './schema';

const changeLanguage = (lang: SupportedLanguages) => {
  void i18next.changeLanguage(lang);
};

const toggleLanguage = () => {
  void i18next.changeLanguage(
    i18next.language === (SupportedLanguages.EN_EN as string)
      ? SupportedLanguages.FR_FR
      : SupportedLanguages.EN_EN,
  );
};

export const useI18n = () => {
  return { changeLanguage, toggleLanguage };
};
