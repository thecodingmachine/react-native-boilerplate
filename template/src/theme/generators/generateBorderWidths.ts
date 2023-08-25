import { config } from '@/theme/theme.config';

import { BorderWidths } from 'types/theme/borders';

export default () => {
  return config.borders.widths.reduce((acc, width) => {
    return Object.assign(acc, {
      [`border_${width}`]: {
        borderWidth: width,
      },
    });
  }, {} as BorderWidths);
};
