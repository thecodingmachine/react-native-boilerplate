import type { Theme as NavigationTheme } from '@react-navigation/native';

import layout from '@/theme/layout';
import componentGenerators from '@/theme/components';

import { Variant } from './config';
import { Gutters } from './gutters';
import { Fonts } from './fonts';
import { Backgrounds } from './backgrounds';
import { Borders } from './borders';
import { Colors } from 'types/theme/colors';

export type Theme = {
  colors: Colors;
  variant: Variant;
  layout: typeof layout;
  gutters: Gutters;
  fonts: Fonts;
  backgrounds: Backgrounds;
  borders: Borders;
  navigationTheme: NavigationTheme;
  components: ReturnType<typeof componentGenerators>;
};

export type ComponentTheme = Omit<Theme, 'components' | 'navigationTheme'>;
