import { DarkTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {
	red500: '#C13333',
	gray800: '#303030',
	gray400: '#4D4D4D',
	gray200: '#A1A1A1',
	gray100: '#DFDFDF',
	gray50: '#EFEFEF',
	purple500: '#44427D',
	purple100: '#E1E1EF',
} as const;

const colorsDark = {
	gray800: '#E0E0E0',
	gray400: '#969696',
	gray200: '#BABABA',
	gray100: '#000000',
	purple500: '#A6A4F0',
	purple100: '#252732',
	purple50: '#1B1A23',
} as const;

const sizes = [12, 16, 24, 32, 40, 80] as const;

export const config = {
	fonts: {
		sizes,
		colors: colorsLight,
	},
	gutters: sizes,
	backgrounds: colorsLight,
	borders: {
		widths: [1, 2],
		radius: [4, 16],
		colors: colorsLight,
	},
	navigationColors: {
		...DarkTheme.colors,
		background: colorsLight.gray50,
		card: colorsLight.gray50,
	},
	variants: {
		dark: {
			fonts: {
				colors: colorsDark,
			},
			backgrounds: colorsDark,
			navigationColors: {
				...DarkTheme.colors,
				background: colorsDark.purple50,
				card: colorsDark.purple50,
			},
		},
	},
} as const satisfies ThemeConfiguration;
