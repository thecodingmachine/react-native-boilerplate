import { config } from '@/theme/theme.config';

import { RemoveBeforeSeparator } from './common';
import { FulfilledThemeConfiguration } from './config';

type BackgroundKeys<Config extends FulfilledThemeConfiguration> =
  keyof Config['backgrounds'] extends string
    ? `bg_${keyof Config['backgrounds']}`
    : never;

export type Backgrounds<
  Config extends FulfilledThemeConfiguration = typeof config,
> = {
  [key in BackgroundKeys<Config>]: RemoveBeforeSeparator<key> extends keyof Config['backgrounds']
    ? {
        backgroundColor: Config['backgrounds'][RemoveBeforeSeparator<key>];
      }
    : never;
};
