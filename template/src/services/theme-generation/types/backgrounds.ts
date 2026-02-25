import type { RemoveBeforeSeparator } from './common';
import type { UnionConfiguration } from './config';
import type { staticBackgroundStyles } from '@/theme/backgrounds';

export type Backgrounds = {
  [key in BackgroundKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['backgrounds']
    ? {
        backgroundColor: UnionConfiguration['backgrounds'][RemoveBeforeSeparator<key>];
      }
    : never;
} & typeof staticBackgroundStyles;

type BackgroundKeys = keyof UnionConfiguration['backgrounds'];
