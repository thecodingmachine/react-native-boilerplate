import type { ViewStyle } from 'react-native';
import type {
  BorderBottomRadius,
  BorderColors,
  BorderRadius,
  BorderTopRadius,
  BorderWidths,
} from '@/theme/types/borders';
import type { UnionConfiguration } from '@/theme/types/config';

import { config } from '@/theme/_config';

/**
 * Generates border color styles from configuration
 * @param configuration
 */
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

/**
 * Generates border radius styles from configuration
 */
export const generateBorderRadius = () => {
  return config.borders.radius.reduce(
    (acc, radius) => {
      return Object.assign(acc, {
        [`rounded_${radius}`]: {
          borderRadius: radius,
        },
        [`roundedTop_${radius}`]: {
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        },
        [`roundedBottom_${radius}`]: {
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        },
        [`roundedBottomRight_${radius}`]: {
          borderBottomRightRadius: radius,
        },
        [`roundedTopLeft_${radius}`]: {
          borderTopLeftRadius: radius,
        },
      });
    },
    {} as BorderRadius & BorderTopRadius & BorderBottomRadius,
  );
};

/**
 * Generates border width styles from configuration
 */
export const generateBorderWidths = () => {
  return config.borders.widths.reduce((acc, width) => {
    return Object.assign(acc, {
      [`w_${width}`]: {
        borderWidth: width,
      },
      [`wTop_${width}`]: {
        borderTopWidth: width,
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
