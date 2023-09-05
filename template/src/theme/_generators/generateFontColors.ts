import { FontColors } from 'types/theme/fonts';
import { UnionConfiguration } from 'types/theme/config';

export default (configuration: UnionConfiguration) => {
  return Object.entries(configuration.fonts.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`text_${key}`]: {
          color: value,
        },
      });
    },
    {} as FontColors,
  );
};
