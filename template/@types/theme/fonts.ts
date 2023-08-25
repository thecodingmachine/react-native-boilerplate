import { config } from '@/theme/theme.config';

import { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import { FulfilledThemeConfiguration } from './config';

type FontSizesKeys = `font_${ArrayValue<typeof config.fonts.sizes>}`;

export type FontSizes = {
  [key in FontSizesKeys]: {
    fontSize: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type FontColorsKeys<C extends FulfilledThemeConfiguration> =
  keyof C['fonts']['colors'] extends string
    ? `text_${keyof C['fonts']['colors']}`
    : never;

export type FontColors<
  Config extends FulfilledThemeConfiguration = typeof config,
> = {
  [key in FontColorsKeys<Config>]: RemoveBeforeSeparator<key> extends keyof Config['fonts']['colors']
    ? {
        color: Config['fonts']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

export type Fonts<Config extends FulfilledThemeConfiguration = typeof config> =
  FontSizes & FontColors<Config>;
