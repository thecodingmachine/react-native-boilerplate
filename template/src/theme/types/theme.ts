import type { Backgrounds } from './backgrounds';
import type { Borders } from './borders';
import type { Variant } from './config';
import type { Fonts } from './fonts';
import type { Gutters } from './gutters';
import type componentGenerators from '@/Theme/components';
import type layout from '@/Theme/layout';
import type { Colors } from '@/Theme/types/colors';
import type { Theme as NavigationTheme } from '@react-navigation/native';

export type ComponentTheme = Omit<Theme, 'components' | 'navigationTheme'>;

export type Theme = {
  backgrounds: Backgrounds;
  borders: Borders;
  colors: Colors;
  components: ReturnType<typeof componentGenerators>;
  fonts: Fonts;
  gutters: Gutters;
  layout: typeof layout;
  navigationTheme: NavigationTheme;
  variant: Variant;
};
