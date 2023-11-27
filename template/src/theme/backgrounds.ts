import { ViewStyle } from 'react-native';

import { UnionConfiguration } from 'types/theme/config';
import { Backgrounds } from 'types/theme/backgrounds';

export const generateBackgrounds = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.backgrounds ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          backgroundColor: value,
        },
      });
    },
    {} as Backgrounds,
  );
};

export const staticBackgroundStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
