import { config } from '@/theme/theme.config';

import { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import { FulfilledThemeConfiguration } from './config';

type BorderColorKeys<Config extends FulfilledThemeConfiguration> =
  keyof Config['borders']['colors'] extends string
    ? `border_${keyof Config['borders']['colors']}`
    : never;

export type BorderColors<
  Config extends FulfilledThemeConfiguration = typeof config,
> = {
  [key in BorderColorKeys<Config>]: RemoveBeforeSeparator<key> extends keyof Config['borders']['colors']
    ? {
        borderColor: Config['borders']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

type BorderRadiusKeys = `rounded_${ArrayValue<typeof config.borders.radius>}`;

export type BorderRadius = {
  [key in BorderRadiusKeys]: {
    borderRadius: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type BorderWidthKeys = `border_${ArrayValue<typeof config.borders.widths>}`;

export type BorderWidths = {
  [key in BorderWidthKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type Borders<
  Config extends FulfilledThemeConfiguration = typeof config,
> = BorderColors<Config> & BorderRadius & BorderWidths;
