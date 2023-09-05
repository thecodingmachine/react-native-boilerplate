import React, { createContext, PropsWithChildren, useMemo } from 'react';
import { useSelector } from 'react-redux';

import {
  generateBackgrounds,
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
  generateConfig,
  generateFontColors,
  generateFontSizes,
  generateGutters,
} from '@/theme/_generators';
import { config } from '@/theme/theme.config';

import { fonts as fontsOverrides } from '@/theme/overrides/fonts';
import { layout } from '@/theme/overrides/layout';
import componentGenerators from '@/theme/components';

import { Components } from 'types/theme/components';
import { ComponentTheme, Theme } from 'types/theme/theme';
import { FulfilledThemeConfiguration, ThemeState } from 'types/theme/config';

type Props = PropsWithChildren;

export type Context = Theme<ReturnType<typeof generateConfig>>;

export const ThemeContext = createContext<Context | undefined>(undefined);

const ThemeProvider = ({ children }: Props) => {
  const variant = useSelector(
    (state: { theme: ThemeState }) => state.theme.variant,
  );

  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant, config]);

  const gutters = useMemo(() => {
    return generateGutters();
  }, [fullConfig]);

  const fonts = useMemo(() => {
    return Object.assign(
      {},
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
      {},
      generateBorderColors<typeof fullConfig>(fullConfig),
      generateBorderRadius(),
      generateBorderWidths(),
    );
  }, [fullConfig]);

  const navigationTheme = useMemo(() => {
    return {
      dark: variant === 'dark',
      colors: fullConfig.navigationColors,
    };
  }, [variant, fullConfig.navigationColors]);

  const theme = useMemo(
    () =>
      ({
        variant,
        gutters,
        layout,
        fonts,
        backgrounds,
        borders,
      } satisfies ComponentTheme),
    [variant, gutters, layout, fonts, backgrounds, borders],
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

  const value = useMemo(() => {
    return Object.assign(theme, {
      navigationTheme,
      components,
    }) satisfies Theme<typeof fullConfig>;
  }, [theme, navigationTheme, components]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
