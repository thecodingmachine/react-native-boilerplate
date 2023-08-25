import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { config } from '@/theme/theme.config';
import { layout } from '@/theme/overrides/layout';
import { fonts as fontsOverrides } from '@/theme/overrides/fonts';
import componentGenerators from '@/theme/components';
import {
  generateConfig,
  generateGutters,
  generateFontSizes,
  generateFontColors,
  generateBackgrounds,
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
} from '@/theme/generators';

import { Components } from 'types/theme/components';
import { FulfilledThemeConfiguration, ThemeState } from 'types/theme/config';
import { ComponentTheme, Theme, ThemeSettings } from 'types/theme/theme';

const useTheme = () => {
  const colorScheme = useColorScheme();

  const variant = useSelector(
    (state: { theme: ThemeState }) => state.theme.variant,
  );

  const darkMode = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  );

  const isDark = darkMode === null ? colorScheme === 'dark' : darkMode;

  const settings = useMemo(
    () => ({
      isDark,
      variant,
    }),
    [isDark, variant],
  );

  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant, config]);

  const gutters = useMemo(() => {
    return generateGutters();
  }, [fullConfig]);

  const fonts = useMemo(() => {
    return Object.assign(
      generateFontSizes(),
      generateFontColors<typeof fullConfig>(fullConfig),
      fontsOverrides,
    );
  }, [fullConfig]);

  const backgrounds = useMemo(() => {
    return generateBackgrounds<typeof fullConfig>(fullConfig);
  }, [fullConfig]);

  const borders = useMemo(() => {
    return Object.assign(
      generateBorderColors<typeof fullConfig>(fullConfig),
      generateBorderRadius(),
      generateBorderWidths(),
    );
  }, [fullConfig]);

  const navigationTheme = useMemo(() => {
    return {
      dark: isDark,
      colors: Object.assign(
        isDark ? DefaultTheme.colors : DarkTheme.colors,
        fullConfig.navigationColors,
      ),
    };
  }, [isDark, fullConfig.navigationColors]);

  const theme = useMemo(
    () =>
      ({
        settings,
        gutters,
        layout,
        fonts,
        backgrounds,
        borders,
      } satisfies ComponentTheme<typeof fullConfig>),
    [settings, gutters, layout, fonts, backgrounds, borders, navigationTheme],
  );

  const components = useMemo(() => {
    return Object.entries(componentGenerators).reduce(
      (acc, [key, generator]) => {
        return Object.assign(acc, {
          [key]: generator(theme),
        });
      },
      {} as Components,
    );
  }, [theme]);

  return Object.assign(theme, {
    navigationTheme,
    components,
  }) satisfies Theme<typeof fullConfig> & ThemeSettings;
};

export default useTheme;
