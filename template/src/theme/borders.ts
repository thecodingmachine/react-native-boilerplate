import { BorderColors, BorderWidths } from 'types/theme/borders';
import { UnionConfiguration } from 'types/theme/config';
import { config } from '@/theme/_config';
import { BorderRadius } from 'types/theme/borders';
import { ViewStyle } from 'react-native';

export const generateBorderColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.borders.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          borderColor: value,
        },
      });
    },
    {} as BorderColors,
  );
};

export const generateBorderRadius = () => {
  return config.borders.radius.reduce((acc, radius) => {
    return Object.assign(acc, {
      [`rounded_${radius}`]: {
        borderRadius: radius,
      },
    });
  }, {} as BorderRadius);
};

export const generateBorderWidths = () => {
  return config.borders.widths.reduce((acc, width) => {
    return Object.assign(acc, {
      [`${width}`]: {
        borderWidth: width,
      },
      [`top_${width}`]: {
        borderTopWidth: width,
      },
      [`bottom_${width}`]: {
        borderBottomWidth: width,
      },
      [`left_${width}`]: {
        borderLeftWidth: width,
      },
      [`right_${width}`]: {
        borderRightWidth: width,
      },
    });
  }, {} as BorderWidths);
};

export const staticBorderStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
