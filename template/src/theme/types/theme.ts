import type { Backgrounds } from './backgrounds';
import type { Borders } from './borders';
import type { Variant } from './config';
import type { Fonts } from './fonts';
import type { Gutters } from './gutters';
import type { Theme as NavigationTheme } from '@react-navigation/native';
import type componentGenerators from '@/theme/components';
import type layout from '@/theme/layout';
import type { Colors } from '@/theme/types/colors';

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

export type ComponentTheme = Omit<Theme, 'components' | 'navigationTheme'>;
