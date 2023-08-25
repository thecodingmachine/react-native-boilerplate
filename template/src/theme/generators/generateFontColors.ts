import { FontColors } from 'types/theme/fonts';
import { FulfilledThemeConfiguration } from 'types/theme/config';

export default <Config extends FulfilledThemeConfiguration>(
  configuration: Config,
) => {
  return Object.entries(configuration.fonts.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`text_${key}`]: {
          color: value,
        },
      });
    },
    {} as FontColors<Config>,
  );
};
