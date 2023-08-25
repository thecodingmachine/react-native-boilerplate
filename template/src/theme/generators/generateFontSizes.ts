import { config } from '../theme.config';

import { FontSizes } from 'types/theme/fonts';

export default () => {
  return config.fonts.sizes.reduce((acc, size) => {
    return Object.assign(acc, {
      [`text_${size}`]: {
        color: size,
      },
    });
  }, {} as FontSizes);
};
