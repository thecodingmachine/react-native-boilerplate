import { config } from '@/theme/_config';
import { staticGutterStyles } from '@/theme/gutters';

import type {
	ArrayValue,
	RemoveAfterSeparator,
	RemoveBeforeSeparator,
	ToNumber,
} from './common';

type Margins =
	| 'margin'
	| 'marginBottom'
	| 'marginTop'
	| 'marginRight'
	| 'marginLeft'
	| 'marginVertical'
	| 'marginHorizontal';

type MarginKeys = `${Margins}_${ArrayValue<typeof config.gutters>}`;

type MarginGutters = {
	[key in MarginKeys]: {
		[K in Extract<RemoveAfterSeparator<key>, Margins>]: ToNumber<
			RemoveBeforeSeparator<key>
		>;
	};
};

type Paddings =
	| 'padding'
	| 'paddingBottom'
	| 'paddingTop'
	| 'paddingRight'
	| 'paddingLeft'
	| 'paddingVertical'
	| 'paddingHorizontal';

type PaddingKeys = `${Paddings}_${ArrayValue<typeof config.gutters>}`;

type PaddingGutters = {
	[key in PaddingKeys]: {
		[K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
			RemoveBeforeSeparator<key>
		>;
	};
};

export type Gutters = MarginGutters &
	PaddingGutters &
	typeof staticGutterStyles;
