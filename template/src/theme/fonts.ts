import { TextStyle } from 'react-native';
import type { FontColors, FontSizes } from '@/types/theme/fonts';
import type { UnionConfiguration } from '@/types/theme/config';
import { config } from '@/theme/_config';

export const generateFontColors = (configuration: UnionConfiguration) => {
	return Object.entries(configuration.fonts.colors ?? {}).reduce(
		(acc, [key, value]) => {
			return Object.assign(acc, {
				[`${key}`]: {
					color: value,
				},
			});
		},
		{} as FontColors,
	);
};

export const generateFontSizes = () => {
	return config.fonts.sizes.reduce((acc, size) => {
		return Object.assign(acc, {
			[`size_${size}`]: {
				fontSize: size,
			},
		});
	}, {} as FontSizes);
};

export const staticFontStyles = {
	bold: {
		fontWeight: 'bold',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	alignCenter: {
		textAlign: 'center',
	},
} as const satisfies Record<string, TextStyle>;
