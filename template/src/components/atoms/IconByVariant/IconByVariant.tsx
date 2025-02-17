import type { ReactElement } from 'react';
import type { SvgProps } from 'react-native-svg';

import { useMemo } from 'react';
import { z } from 'zod';

import { useTheme } from '@/theme';
import getAssetsContext from '@/theme/assets/getAssetsContext';

type Props = {
  path: string;
} & SvgProps;

const icons = getAssetsContext('icons');
const EXTENSION = 'svg';

function IconByVariant({ height = 24, path, width = 24, ...props }: Props) {
  const { variant } = useTheme();

  const iconProps = { ...props, height, width };
  const Icon = useMemo(() => {
    try {
      const getDefaultSource = () =>
        z
          .object({
            default: z.function().returns(z.custom<ReactElement<SvgProps>>()),
          })
          .parse(icons(`./${path}.${EXTENSION}`)).default;

      if (variant === 'default') {
        return getDefaultSource();
      }

      try {
        const fetchedModule = z
          .object({
            default: z.function().returns(z.custom<ReactElement<SvgProps>>()),
          })
          .parse(icons(`./${variant}/${path}.${EXTENSION}`));

        return fetchedModule.default;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `Couldn't load the icon: ${path}.${EXTENSION} for the variant ${variant}, Fallback to default`,
          error,
        );
        return getDefaultSource();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Couldn't load the icon: ${path}.${EXTENSION}`, error);
      throw error;
    }
  }, [variant, path]);

  return <Icon {...iconProps} />;
}

export default IconByVariant;
