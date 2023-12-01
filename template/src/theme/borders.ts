import { config } from '@/theme/_config';

import type {
	BorderColors,
	BorderWidths,
	BorderRadius,
} from '@/types/theme/borders';
import type { UnionConfiguration } from '@/types/theme/config';
import type { ViewStyle } from 'react-native';

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
	return config.borders.radius.reduce((acc, radius) => {
		return Object.assign(acc, {
			[`rounded_${radius}`]: {
				borderRadius: radius,
			},
		});
	}, {} as BorderRadius);
};

/**
 * Generates border width styles from configuration
 */
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

/**
 * Static border styles
 * @desc These styles are not generated from configuration, you can add your own
 */
export const staticBorderStyles = {} as const satisfies Record<
	string,
	ViewStyle
>;
