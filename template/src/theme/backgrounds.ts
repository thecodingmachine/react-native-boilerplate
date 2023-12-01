import { ViewStyle } from 'react-native';

import type { UnionConfiguration } from '@/types/theme/config';
import type { Backgrounds } from '@/types/theme/backgrounds';

/**
 * Generates background styles from configuration
 * @param configuration
 */
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

/**
 * Static background styles
 * @desc These styles are not generated from configuration, you can add your own
 */
export const staticBackgroundStyles = {} as const satisfies Record<
	string,
	ViewStyle
>;
