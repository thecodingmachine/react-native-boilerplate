import { config } from '@/theme/theme.config';

import { Variant } from 'types/theme/config';
import { hasProperty } from 'types/theme/common';

export default (variant: Variant) => {
  const { variants, ...defaultConfig } = config;
  let variantConfig = variant !== 'default' ? variants[variant] : null;

  const result = {
    fonts: {
      sizes: defaultConfig.fonts.sizes,
      colors: {
        ...defaultConfig.fonts.colors,
        ...(variantConfig && hasProperty(variantConfig, 'fonts.colors')
          ? variantConfig.fonts.colors
          : {}),
      },
    },
    gutters: defaultConfig.gutters,
    backgrounds: {
      ...defaultConfig.backgrounds,
      ...(variantConfig && hasProperty(variantConfig, 'backgrounds')
        ? variantConfig.backgrounds
        : {}),
    },
    borders: {
      widths: defaultConfig.borders.widths,
      radius: defaultConfig.borders.radius,
      colors: {
        ...defaultConfig.borders.colors,
        ...(variantConfig && hasProperty(variantConfig, 'borders.colors')
          ? variantConfig.borders.colors
          : {}),
      },
    },
    navigationColors: {
      ...defaultConfig.navigationColors,
      ...(variantConfig && hasProperty(variantConfig, 'navigationColors')
        ? variantConfig.navigationColors
        : {}),
    },
  } as const;

  return result;
};
