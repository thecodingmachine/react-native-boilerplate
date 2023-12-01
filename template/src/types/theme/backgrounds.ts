import { staticBackgroundStyles } from '@/theme/backgrounds';

import type { RemoveBeforeSeparator } from './common';
import type { UnionConfiguration } from './config';

type BackgroundKeys = keyof UnionConfiguration['backgrounds'];

export type Backgrounds = {
	[key in BackgroundKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['backgrounds']
		? {
				backgroundColor: UnionConfiguration['backgrounds'][RemoveBeforeSeparator<key>];
		  }
		: never;
} & typeof staticBackgroundStyles;
