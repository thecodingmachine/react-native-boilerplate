import { config } from '@/theme/_config';
import { staticFontStyles } from '@/theme/fonts';

import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import type { UnionConfiguration } from './config';

type FontSizesKeys = `size_${ArrayValue<typeof config.fonts.sizes>}`;

export type FontSizes = {
	[key in FontSizesKeys]: {
		fontSize: ToNumber<RemoveBeforeSeparator<key>>;
	};
};

type FontColorsKeys = `${keyof UnionConfiguration['fonts']['colors']}`;

export type FontColors = {
	[key in FontColorsKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['colors']
		? {
				color: UnionConfiguration['fonts']['colors'][RemoveBeforeSeparator<key>];
		  }
		: never;
};

export type Fonts = FontSizes & FontColors & typeof staticFontStyles;
