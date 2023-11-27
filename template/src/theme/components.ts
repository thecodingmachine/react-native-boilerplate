import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { ComponentTheme } from 'types/theme/theme';

export default ({ layout, backgrounds, fonts }: ComponentTheme) => {
  return {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      height: 70,
      width: 70,
      borderRadius: 35,
    },
  } as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
