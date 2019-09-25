import i18nConfig, { i18nKey as i18nConfigKey } from '../config/i18n';
import DeviceInfo from 'react-native-device-info';

const defaultLocale = 'en';
let locale = DeviceInfo.getDeviceLocale();
console.log('locale: ', locale);
locale = locale.indexOf('en') > -1 ? 'en' : locale;
locale = locale.indexOf('zh') > -1 ? 'zh-TW' : defaultLocale;
console.log('locale: ', locale);

const result = {};
Object.keys(i18nConfig).forEach((key) => {
  result[key] = key;
});
// console.log(JSON.stringify(result, null ,2));

export const i18nKey = i18nConfigKey;

const i18n = {
  getDeviceLocale: () => locale,
  t: (key) => {
    if (i18nConfig[key]) {
      const str = i18nConfig[key][locale];
      const defaultStr = i18nConfig[key][defaultLocale];

      if (str) {
        return str;
      } else if (defaultStr) {
        return defaultStr;
      }
      return key;
    }
    return key;
  },
};
export default i18n;
