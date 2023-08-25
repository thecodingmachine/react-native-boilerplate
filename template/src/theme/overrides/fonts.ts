import { TextStyle } from 'react-native';

export const fonts = {
  bold: {
    fontWeight: 'bold',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
} as const satisfies Record<string, TextStyle>;
