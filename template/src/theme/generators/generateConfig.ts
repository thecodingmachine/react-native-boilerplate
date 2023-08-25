import { config } from '../theme.config';

import { Variant } from 'types/theme/config';
import { hasProperty } from 'types/theme/common';

export default (variant: Variant) => {
  const { variants, ...defaultConfig } = config;
  let variantConfig = variant !== 'default' ? variants[variant] : null;

  return {
    fonts: {
      sizes: defaultConfig.fonts.sizes,
      colors: Object.assign(
        defaultConfig.fonts.colors,
        variantConfig && hasProperty(variantConfig, 'fonts.colors')
          ? variantConfig.fonts.colors
          : {},
      ),
    },
    gutters: defaultConfig.gutters,
    backgrounds: Object.assign(
      defaultConfig.backgrounds,
      variantConfig && hasProperty(variantConfig, 'backgrounds')
        ? variantConfig.backgrounds
        : {},
    ),
    borders: {
      widths: defaultConfig.borders.widths,
      radius: defaultConfig.borders.radius,
      colors: Object.assign(
        defaultConfig.borders.colors,
        variantConfig && hasProperty(variantConfig, 'borders.colors')
          ? variantConfig.borders.colors
          : {},
      ),
    },
    navigationColors: Object.assign(
      hasProperty(defaultConfig, 'navigationColors')
        ? defaultConfig.navigationColors
        : {},
      variantConfig && hasProperty(variantConfig, 'navigationColors')
        ? variantConfig.navigationColors
        : {},
    ),
  } as const;
};
