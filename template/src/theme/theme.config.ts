import { ThemeConfiguration } from 'types/theme/config';

export const config = {
  fonts: {
    sizes: [14, 16, 20, 40],
    colors: {
      gray_800: '#212121',
      gray_400: '#4D4D4D',
      gray_200: '#A1A1A1',
    },
  },
  gutters: [10, 20],
  backgrounds: {
    transparent: 'rgba(0,0,0,0)',
    white: '#FFFFFF',
  },
  borders: {
    widths: [1],
    radius: [5],
    colors: {
      red: '#E14032',
    },
  },
  navigationColors: {
    primary: '1',
  },
  variants: {
    dark: {
      backgrounds: {
        white: '#000000',
      },
    },
    premium: {
      fonts: {
        colors: {
          gray_800: '#A1A1A1',
        },
      },
      borders: {
        colors: {
          red: '#00FF00',
        },
      },
    },
  },
} as const satisfies ThemeConfiguration;
