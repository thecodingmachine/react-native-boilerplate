import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

// Config
import { config } from '@/theme/_config';

// Generators
import {
  generateFontSizes,
  generateFontColors,
  staticFontStyles,
} from '../fonts';
import {
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
} from '../borders';
import layout from '../layout';
import componentsGenerator from '../components';
import { generateBackgrounds } from '../backgrounds';
import { generateGutters } from '../gutters';
import generateConfig from '../generateConfig';

// Types
import type { ComponentTheme, Theme } from 'types/theme/theme';
import type { FulfilledThemeConfiguration, Variant } from 'types/theme/config';
import type { MMKV } from 'react-native-mmkv';

type Context = Theme & {
  changeTheme: (variant: Variant) => void;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

type Props = {
  storage: MMKV;
};

const ThemeProvider = ({ children, storage }: PropsWithChildren & Props) => {
  // Current theme variant
  const [variant, setVariant] = useState(
    (storage.getString('theme') as Variant) || 'default',
  );

  // Initialize theme at default if not defined
  useEffect(() => {
    const appHasThemeDefined = storage.contains('theme');
    if (!appHasThemeDefined) {
      storage.set('theme', 'default');
      setVariant('default');
    }
  }, []);

  const changeTheme = (nextVariant: Variant) => {
    setVariant(nextVariant);
    storage.set('theme', nextVariant);
  };

  // Flatten config with current variant
  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant, config]);

  const fonts = useMemo(() => {
    return Object.assign(
      {},
      generateFontSizes(),
      generateFontColors(fullConfig),
      staticFontStyles,
    );
  }, [fullConfig]);

  const backgrounds = useMemo(() => {
    return generateBackgrounds(fullConfig);
  }, [fullConfig]);

  const borders = useMemo(() => {
    return Object.assign(
      {},
      generateBorderColors(fullConfig),
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
        colors: fullConfig.colors,
        variant,
        gutters: generateGutters(),
        layout,
        fonts,
        backgrounds,
        borders,
      } satisfies ComponentTheme),
    [variant, layout, fonts, backgrounds, borders, fullConfig.colors],
  );

  const components = useMemo(() => {
    return componentsGenerator(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ ...theme, components, navigationTheme, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
