import type {
  BorderBottomRadius,
  BorderColors,
  BorderRadius,
  BorderTopRadius,
  BorderWidths,
} from '@/theme/types/borders';
import type { UnionConfiguration } from '@/theme/types/config';
import type { ViewStyle } from 'react-native';

import { config } from '@/theme/_config';

/**
 * Generates border color styles from configuration
 * @param configuration
 */
export const generateBorderColors = (configuration: UnionConfiguration) => {
  return Object.entries(
    configuration.borders.colors,
    // eslint-disable-next-line unicorn/no-array-reduce
  ).reduce<BorderColors>((accumulator, [key, value]) => {
    return Object.assign(accumulator, {
      [key]: {
        borderColor: value,
      },
    });
  }, {} as BorderColors);
};

/**
 * Generates border radius styles from configuration
 */
export const generateBorderRadius = () => {
  // eslint-disable-next-line unicorn/no-array-reduce
  return config.borders.radius.reduce<
    BorderBottomRadius & BorderRadius & BorderTopRadius
  >(
    (accumulator, radius) => {
      return Object.assign(accumulator, {
        [`rounded_${radius}`]: {
          borderRadius: radius,
        },
        [`roundedBottom_${radius}`]: {
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        },
        [`roundedBottomRight_${radius}`]: {
          borderBottomRightRadius: radius,
        },
        [`roundedTop_${radius}`]: {
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        },
        [`roundedTopLeft_${radius}`]: {
          borderTopLeftRadius: radius,
        },
      });
    },
    {} as BorderBottomRadius & BorderRadius & BorderTopRadius,
  );
};

/**
 * Generates border width styles from configuration
 */
export const generateBorderWidths = () => {
  // eslint-disable-next-line unicorn/no-array-reduce
  return config.borders.widths.reduce<BorderWidths>((accumulator, width) => {
    return Object.assign(accumulator, {
      [`w_${width}`]: {
        borderWidth: width,
      },
      [`wBottom_${width}`]: {
        borderBottomWidth: width,
      },
      [`wLeft_${width}`]: {
        borderLeftWidth: width,
      },
      [`wRight_${width}`]: {
        borderRightWidth: width,
      },
      [`wTop_${width}`]: {
        borderTopWidth: width,
      },
    });
  }, {} as BorderWidths);
};

/**
 * Static border styles
 * @desc These styles are not generated from configuration, you can add your own
 */
export const staticBorderStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
