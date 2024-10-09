import type { ThemeConfiguration } from '@/theme/types/config';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const enum Variant {
  DARK = 'dark',
}

const colorsLight = {
  skeleton: '#A1A1A1',
  red500: '#C13333',
  gray800: '#303030',
  gray400: '#4D4D4D',
  gray200: '#A1A1A1',
  gray100: '#DFDFDF',
  gray50: '#EFEFEF',
  purple500: '#44427D',
  purple100: '#E1E1EF',
  purple50: '#1B1A23',
} as const;

const colorsDark = {
  skeleton: '#303030',
  red500: '#C13333',
  gray800: '#E0E0E0',
  gray400: '#969696',
  gray200: '#BABABA',
  gray100: '#000000',
  gray50: '#EFEFEF',
  purple500: '#A6A4F0',
  purple100: '#252732',
  purple50: '#1B1A23',
} as const;

const sizes = [12, 16, 24, 32, 40, 80] as const;

export const config = {
  colors: colorsLight,
  fonts: {
    sizes,
    colors: colorsLight,
  },
  gutters: sizes,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [4, 16],
    colors: colorsLight,
  },
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.gray50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
      borders: {
        colors: colorsDark,
      },
    },
  },
} as const satisfies ThemeConfiguration;
