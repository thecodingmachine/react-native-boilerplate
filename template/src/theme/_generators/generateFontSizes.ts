import { config } from '@/theme/theme.config';

import { FontSizes } from 'types/theme/fonts';

export default () => {
  return config.fonts.sizes.reduce((acc, size) => {
    return Object.assign(acc, {
      [`font_${size}`]: {
        fontSize: size,
      },
    });
  }, {} as FontSizes);
};
