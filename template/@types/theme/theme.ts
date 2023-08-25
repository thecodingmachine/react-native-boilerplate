import { config } from '@/theme/theme.config';
import { layout } from '@/theme/overrides/layout';

import type { Theme as NavigationTheme } from '@react-navigation/native';
import { FulfilledThemeConfiguration, Variant } from './config';
import { Gutters } from './gutters';
import { Fonts } from './fonts';
import { Backgrounds } from './backgrounds';
import { BorderColors } from './borders';
import { Components } from './components';

export type Theme<Config extends FulfilledThemeConfiguration = typeof config> =
  {
    layout: typeof layout;
    gutters: Gutters;
    fonts: Fonts<Config>;
    backgrounds: Backgrounds<Config>;
    borders: BorderColors<Config>;
    navigationTheme: NavigationTheme;
    components: Components;
  };

export type ThemeSettings = {
  settings: {
    isDark: boolean;
    variant: Variant;
  };
};

export type ComponentTheme<
  Config extends FulfilledThemeConfiguration = typeof config,
> = ThemeSettings & Omit<Theme<Config>, 'components' | 'navigationTheme'>;
