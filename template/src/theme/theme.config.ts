import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { ThemeConfiguration } from 'types/theme/config';

export const config = {
  fonts: {
    sizes: [16, 20, 40],
    colors: {
      red_500: '#C13333',
      gray_800: '#303030',
      gray_400: '#4D4D4D',
      gray_200: '#A1A1A1',
    },
  },
  gutters: [10, 20, 30],
  backgrounds: {
    gray_200: '#DFDFDF',
    purple_500: '#44427D',
    purple_100: '#E1E1EF',
  },
  borders: {
    widths: [1],
    radius: [140],
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
        gray_200: '#000000',
        purple_500: '#A6A4F0',
        purple_100: '#252732',
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: '#1B1A23',
        card: '#1B1A23',
      },
    },
  },
} as const satisfies ThemeConfiguration;
