import { BorderColors } from 'types/theme/borders';
import { UnionConfiguration } from 'types/theme/config';

export default (configuration: UnionConfiguration) => {
  return Object.entries(configuration.borders ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`border_${key}`]: {
          borderColor: value,
        },
      });
    },
    {} as BorderColors,
  );
};
