import type { AllPartial } from './common';
import type { config } from '@/theme/_config';
import type generateConfig from '@/theme/ThemeProvider/generateConfig';
import type { Theme as NavigationTheme } from '@react-navigation/native';

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

export type ThemeConfiguration = {
  variants: Record<PropertyKey, AllPartial<VariantThemeConfiguration>>;
} & FulfilledThemeConfiguration;

export type ThemeState = {
  variant: Variant;
};

export type UnionConfiguration = ReturnType<typeof generateConfig>;

export type Variant = 'default' | keyof typeof config.variants;

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
