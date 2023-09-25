import 'whatwg-fetch';
import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-i18next', () => ({
//   // this mock makes sure any components using the translation hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: str => str,
//       i18n: {
//         changeLanguage: () => new Promise(() => {}),
//       },
//     };
//   },
//   initReactI18next: {
//     type: '3rdParty',
//     init: jest.fn(),
//   },
// }));
