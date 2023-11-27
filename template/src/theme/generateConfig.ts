import { config } from '@/theme/_config';

import { Variant } from 'types/theme/config';
import { hasProperty } from 'types/theme/common';

export default (variant: Variant) => {
  const { variants, ...defaultConfig } = config;
  let variantConfig = variant !== 'default' ? variants[variant] : null;

  const fontColors = {
    ...defaultConfig.fonts.colors,
    ...(variantConfig && hasProperty(variantConfig, 'fonts.colors')
      ? variantConfig.fonts.colors
      : {}),
  };
  const backgroundColors = {
    ...defaultConfig.backgrounds,
    ...(variantConfig && hasProperty(variantConfig, 'backgrounds')
      ? variantConfig.backgrounds
      : {}),
  };
  const borderColors = {
    ...defaultConfig.borders.colors,
    ...(variantConfig && hasProperty(variantConfig, 'borders.colors')
      ? variantConfig.borders.colors
      : {}),
  };
  const navigationColors = {
    ...defaultConfig.navigationColors,
    ...(variantConfig && hasProperty(variantConfig, 'navigationColors')
      ? variantConfig.navigationColors
      : {}),
  };

  return {
    colors: {
      ...fontColors,
      ...backgroundColors,
      ...borderColors,
      ...navigationColors,
    },
    fonts: {
      sizes: defaultConfig.fonts.sizes,
      colors: fontColors,
    },
    gutters: defaultConfig.gutters,
    backgrounds: backgroundColors,
    borders: {
      widths: defaultConfig.borders.widths,
      radius: defaultConfig.borders.radius,
      colors: borderColors,
    },
    navigationColors: navigationColors,
  } as const;
};
