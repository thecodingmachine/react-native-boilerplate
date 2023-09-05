import { ThemeConfiguration } from 'types/theme/config';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const config = {
  fonts: {
    sizes: [14, 16, 20, 40],
    colors: {
      gray_800: '#303030',
      gray_400: '#4D4D4D',
      gray_200: '#A1A1A1',
    },
  },
  gutters: [10, 20, 30],
  backgrounds: {
    transparent: 'rgba(0,0,0,0)',
    white: '#FFFFFF',
    gray_200: '#DFDFDF',
    purple_500: '#44427D',
    purple_300: '#A6A4F0',
    purple_100: '#E1E1EF',
  },
  borders: {
    widths: [1],
    radius: [0, 5, 140],
    colors: {},
  },
  navigationColors: {
    ...DefaultTheme.colors,
    background: '#EFEFEF',
    card: '#EFEFEF',
  },
  variants: {
    dark: {
      fonts: {
        colors: {
          gray_800: '#E0E0E0',
          gray_400: '#969696',
          gray_200: '#BABABA',
        },
      },
      backgrounds: {
        white: '#000000',
        gray_200: '#000000',
        purple_100: '#252732',
        purple_500: '#A6A4F0',
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: '#1B1A23',
        card: '#1B1A23',
      },
    },
    // premium: {
    //   fonts: {
    //     colors: {
    //       gray_800: '2',
    //     },
    //   },
    //   borders: {
    //     colors: {
    //       red: '#00FF00',
    //     },
    //   },
    // },
  },
} as const satisfies ThemeConfiguration;
