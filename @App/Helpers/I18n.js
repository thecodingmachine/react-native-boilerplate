import i18n from 'i18n-js';
import Locales from 'App/Locales';
import { memoize } from 'lodash';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(Locales)) || fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: Locales[languageTag]() };
  i18n.locale = languageTag;
};
