import type { Backgrounds } from '@/services/theme-generation/types/backgrounds';
import type { UnionConfiguration } from '@/services/theme-generation/types/config';
import type { ViewStyle } from 'react-native';

/**
 * Generates background styles from configuration
 * @param configuration
 */
export const generateBackgrounds = (configuration: UnionConfiguration) => {
  // eslint-disable-next-line unicorn/no-array-reduce
  return Object.entries(configuration.backgrounds).reduce<Backgrounds>(
    (accumulator, [key, value]) => {
      return Object.assign(accumulator, {
        [key]: {
          backgroundColor: value,
        },
      });
    },
    {} as Backgrounds,
  );
};

/**
 * Static background styles
 * @desc These styles are not generated from configuration, you can add your own
 */
export const staticBackgroundStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
