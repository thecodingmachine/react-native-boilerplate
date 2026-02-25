import type {
  FulfilledThemeConfiguration,
  Variant,
} from '@/Theme/types/config';
import type { ComponentTheme, Theme } from '@/Theme/types/theme';
import type { PropsWithChildren } from 'react';
import type { MMKV } from 'react-native-mmkv';

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createContext, useCallback, useMemo, useState } from 'react';

import {
  generateBackgrounds,
  staticBackgroundStyles,
} from '@/Theme/backgrounds';
import {
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
  staticBorderStyles,
} from '@/Theme/borders';
import componentsGenerator from '@/Theme/components';
import {
  generateFontColors,
  generateFontSizes,
  staticFontStyles,
} from '@/Theme/fonts';
import { generateGutters, staticGutterStyles } from '@/Theme/gutters';
import layout from '@/Theme/layout';
import generateConfig from '@/Theme/ThemeProvider/generateConfig';

type Context = {
  changeTheme: (variant: Variant) => void;
} & Theme;

export const ThemeContext = createContext<Context | undefined>(undefined);

type Properties = PropsWithChildren<{
  readonly storage: MMKV;
}>;

function ThemeProvider({ children = false, storage }: Properties) {
  // Current theme variant
  const [variant, setVariant] = useState<Variant>(() => {
    const storedTheme = storage.getString('theme');

    if (storedTheme) {
      return storedTheme as Variant;
    }

    storage.set('theme', 'default');
    return 'default';
  });

  const changeTheme = useCallback(
    (nextVariant: Variant) => {
      setVariant(nextVariant);
      storage.set('theme', nextVariant);
    },
    [storage],
  );

  // Flatten config with current variant
  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant]);

  const fonts = useMemo(() => {
    return {
      ...generateFontSizes(),
      ...generateFontColors(fullConfig),
      ...staticFontStyles,
    };
  }, [fullConfig]);

  const backgrounds = useMemo(() => {
    return {
      ...generateBackgrounds(fullConfig),
      ...staticBackgroundStyles,
    };
  }, [fullConfig]);

  const gutters = useMemo(() => {
    return {
      ...generateGutters(fullConfig),
      ...staticGutterStyles,
    };
  }, [fullConfig]);

  const borders = useMemo(() => {
    return {
      ...generateBorderColors(fullConfig),
      ...generateBorderRadius(),
      ...generateBorderWidths(),
      ...staticBorderStyles,
    };
  }, [fullConfig]);

  const navigationTheme = useMemo(() => {
    if (variant === 'dark') {
      return {
        ...DarkTheme,
        colors: fullConfig.navigationColors,
        dark: true,
      };
    }
    return {
      ...DefaultTheme,
      colors: fullConfig.navigationColors,
      dark: false,
    };
  }, [variant, fullConfig.navigationColors]);

  const theme = useMemo(() => {
    return {
      backgrounds,
      borders,
      colors: fullConfig.colors,
      fonts,
      gutters,
      layout,
      variant,
    } satisfies ComponentTheme;
  }, [variant, fonts, backgrounds, borders, fullConfig.colors, gutters]);

  const components = useMemo(() => {
    return componentsGenerator(theme);
  }, [theme]);

  const value = useMemo(() => {
    return { ...theme, changeTheme, components, navigationTheme };
  }, [theme, components, navigationTheme, changeTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
