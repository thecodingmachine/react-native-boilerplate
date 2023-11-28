import { config } from '@/theme/_config';
import { staticBorderStyles } from '@/theme/borders';

import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import type { UnionConfiguration } from './config';

type BorderColorKeys = keyof UnionConfiguration['borders']['colors'];

export type BorderColors = {
	[key in BorderColorKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['borders']['colors']
		? {
				borderColor: UnionConfiguration['borders']['colors'][RemoveBeforeSeparator<key>];
		  }
		: never;
};

type BorderRadiusKeys = `rounded_${ArrayValue<typeof config.borders.radius>}`;

export type BorderRadius = {
	[key in BorderRadiusKeys]: {
		borderRadius: ToNumber<RemoveBeforeSeparator<key>>;
	};
};

type BorderWidthKeys = `w_${ArrayValue<typeof config.borders.widths>}`;

export type BorderWidths = {
	[key in BorderWidthKeys]: {
		borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
	};
};

export type Borders = BorderColors &
	BorderRadius &
	BorderWidths &
	typeof staticBorderStyles;
