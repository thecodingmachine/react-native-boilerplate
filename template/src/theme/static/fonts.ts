import { TextStyle } from 'react-native';

export default {
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
