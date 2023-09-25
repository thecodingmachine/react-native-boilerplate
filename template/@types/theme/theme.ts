import { layout } from '@/theme/static';

import type { Theme as NavigationTheme } from '@react-navigation/native';
import { Variant } from './config';
import { Gutters } from './gutters';
import { Fonts } from './fonts';
import { Backgrounds } from './backgrounds';
import { Borders } from './borders';
import { Components } from './components';

export type Theme = {
  variant: Variant;
  layout: typeof layout;
  gutters: Gutters;
  fonts: Fonts;
  backgrounds: Backgrounds;
  borders: Borders;
  navigationTheme: NavigationTheme;
  components: Components;
};

export type ComponentTheme = Omit<Theme, 'components' | 'navigationTheme'>;
