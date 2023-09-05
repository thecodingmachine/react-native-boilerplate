import { Backgrounds } from 'types/theme/backgrounds';
import { UnionConfiguration } from 'types/theme/config';

export default (configuration: UnionConfiguration) => {
  return Object.entries(configuration.backgrounds ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`bg_${key}`]: {
          backgroundColor: value,
        },
      });
    },
    {} as Backgrounds,
  );
};
