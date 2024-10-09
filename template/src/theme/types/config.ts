import type { AllPartial } from './common';
import type { Theme as NavigationTheme } from '@react-navigation/native';
import type { config } from '@/theme/_config';
import type generateConfig from '@/theme/ThemeProvider/generateConfig';

export type Variant = keyof typeof config.variants | 'default';

export type ThemeState = {
  variant: Variant;
};

export type FulfilledThemeConfiguration = {
  readonly backgrounds: Record<string, string>;
  borders: {
    readonly colors: Record<string, string>;
    radius: readonly number[];
    widths: readonly number[];
  };
  readonly colors: Record<string, string>;
  fonts: {
    readonly colors: Record<string, string>;
    sizes: readonly number[];
  };
  gutters: readonly number[];
  readonly navigationColors: NavigationTheme['colors'];
};

export type VariantThemeConfiguration = {
  readonly backgrounds: FulfilledThemeConfiguration['backgrounds'];
  borders: {
    readonly colors: FulfilledThemeConfiguration['borders']['colors'];
  };
  readonly colors: FulfilledThemeConfiguration['colors'];
  fonts: {
    readonly colors: FulfilledThemeConfiguration['fonts']['colors'];
  };
  readonly navigationColors: Partial<NavigationTheme['colors']>;
};

export type ThemeConfiguration = FulfilledThemeConfiguration & {
  variants: {
    [key: PropertyKey]: AllPartial<VariantThemeConfiguration>;
  };
};

export type UnionConfiguration = ReturnType<typeof generateConfig>;
