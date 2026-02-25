import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import type { UnionConfiguration } from './config';
import type { config } from '@/Theme/_config';
import type { staticFontStyles } from '@/Theme/fonts';

export type FontColors = {
  [key in FontColorsKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['colors']
    ? {
        color: UnionConfiguration['fonts']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

export type Fonts = FontColors & FontSizes & typeof staticFontStyles;

export type FontSizes = {
  [key in FontSizesKeys]: {
    fontSize: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type FontColorsKeys = keyof UnionConfiguration['fonts']['colors'];

type FontSizesKeys = `size_${ArrayValue<typeof config.fonts.sizes>}`;
