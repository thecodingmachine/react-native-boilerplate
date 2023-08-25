import { Backgrounds } from 'types/theme/backgrounds';
import { FulfilledThemeConfiguration } from 'types/theme/config';

export default <Config extends FulfilledThemeConfiguration>(
  configuration: Config,
) => {
  return Object.entries(configuration.backgrounds ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`bg_${key}`]: {
          backgroundColor: value,
        },
      });
    },
    {} as Backgrounds<Config>,
  );
};
