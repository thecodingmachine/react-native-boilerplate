import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/theme/types/theme';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AllStyle
  extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

export default ({ layout, backgrounds, fonts }: ComponentTheme) => {
  return {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      height: 64,
      width: 64,
      borderRadius: 35,
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
  } as const satisfies AllStyle;
};
