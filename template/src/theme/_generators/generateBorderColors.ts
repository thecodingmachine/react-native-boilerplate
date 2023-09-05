import { BorderColors } from 'types/theme/borders';
import { FulfilledThemeConfiguration } from 'types/theme/config';

export default <Config extends FulfilledThemeConfiguration>(
  configuration: Config,
) => {
  return Object.entries(configuration.borders ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`border_${key}`]: {
          borderColor: value,
        },
      });
    },
    {} as BorderColors<Config>,
  );
};
