import type { UnionConfiguration } from '@/theme/types/config';
import type { Gutters } from '@/theme/types/gutters';

import { type ViewStyle } from 'react-native';

export const generateGutters = (configuration: UnionConfiguration): Gutters => {
  // eslint-disable-next-line unicorn/no-array-reduce
  return configuration.gutters.reduce<Gutters>((accumulator, current) => {
    return Object.assign(accumulator, {
      [`gap_${current}`]: {
        gap: current,
      },
      [`margin_${current}`]: {
        margin: current,
      },
      [`marginBottom_${current}`]: {
        marginBottom: current,
      },
      [`marginHorizontal_${current}`]: {
        marginHorizontal: current,
      },
      [`marginLeft_${current}`]: {
        marginLeft: current,
      },
      [`marginRight_${current}`]: {
        marginRight: current,
      },
      [`marginTop_${current}`]: {
        marginTop: current,
      },
      [`marginVertical_${current}`]: {
        marginVertical: current,
      },
      [`padding_${current}`]: {
        padding: current,
      },
      [`paddingBottom_${current}`]: {
        paddingBottom: current,
      },
      [`paddingHorizontal_${current}`]: {
        paddingHorizontal: current,
      },
      [`paddingLeft_${current}`]: {
        paddingLeft: current,
      },
      [`paddingRight_${current}`]: {
        paddingRight: current,
      },
      [`paddingTop_${current}`]: {
        paddingTop: current,
      },
      [`paddingVertical_${current}`]: {
        paddingVertical: current,
      },
    });
  }, {} as Gutters);
};

export const staticGutterStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
