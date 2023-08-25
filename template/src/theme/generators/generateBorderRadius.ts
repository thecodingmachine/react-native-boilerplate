import { config } from '@/theme/theme.config';

import { BorderRadius } from 'types/theme/borders';

export default () => {
  return config.borders.radius.reduce((acc, radius) => {
    return Object.assign(acc, {
      [`rounded_${radius}`]: {
        borderRadius: radius,
      },
    });
  }, {} as BorderRadius);
};
