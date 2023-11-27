import { DarkTheme } from '@react-navigation/native';

import { ThemeConfiguration } from 'types/theme/config';

const colorsLight = {
  red500: '#C13333',
  gray800: '#303030',
  gray400: '#4D4D4D',
  gray200: '#A1A1A1',
  gray100: '#DFDFDF',
  purple500: '#44427D',
  purple100: '#E1E1EF',
} as const;

const colorsDark = {
  gray800: '#E0E0E0',
  gray400: '#969696',
  gray200: '#BABABA',
  gray100: '#000000',
  purple500: '#A6A4F0',
  purple100: '#252732',
} as const;

export const config = {
  fonts: {
    sizes: [12, 16, 24, 32, 40],
    colors: colorsLight,
  },
  gutters: [8, 16, 24, 32, 40],
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [4, 16],
    colors: colorsLight,
  },
  navigationColors: {
    ...DarkTheme.colors,
    background: '#EFEFEF',
    card: '#EFEFEF',
  },
  variants: {
    dark: {
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      navigationColors: {
        ...DarkTheme.colors,
        background: '#1B1A23',
        card: '#1B1A23',
      },
    },
  },
} as const satisfies ThemeConfiguration;
