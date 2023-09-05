import { config } from '@/theme/theme.config';
import { layout } from '@/theme/overrides/layout';

import type { Theme as NavigationTheme } from '@react-navigation/native';
import { FulfilledThemeConfiguration, Variant } from './config';
import { Gutters } from './gutters';
import { Fonts } from './fonts';
import { Backgrounds } from './backgrounds';
import { Borders } from './borders';
import { Components } from './components';
import { generateConfig } from '@/theme/_generators';

export type Theme<Config extends FulfilledThemeConfiguration = typeof config> =
  {
    variant: Variant;
    layout: typeof layout;
    gutters: Gutters;
    fonts: Fonts<Config>;
    backgrounds: Backgrounds<Config>;
    borders: Borders<Config>;
    navigationTheme: NavigationTheme;
    components: Components;
  };

export type ComponentTheme = Omit<
  Theme<ReturnType<typeof generateConfig>>,
  'components' | 'navigationTheme'
>;
