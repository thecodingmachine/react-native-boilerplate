import { config } from '@/theme/theme.config';

import { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import { UnionConfiguration } from './config';
import { fonts as fontsOverrides } from '@/theme/overrides/fonts';

type FontSizesKeys = `font_${ArrayValue<typeof config.fonts.sizes>}`;

export type FontSizes = {
  [key in FontSizesKeys]: {
    fontSize: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type FontColorsKeys = keyof UnionConfiguration['fonts']['colors'] extends string
  ? `text_${keyof UnionConfiguration['fonts']['colors']}`
  : never;

export type FontColors = {
  [key in FontColorsKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['fonts']['colors']
    ? {
        color: UnionConfiguration['fonts']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

export type Fonts = FontSizes & FontColors & typeof fontsOverrides;
