import type { ReactElement } from 'react';
import type { SvgProps } from 'react-native-svg';

import { useMemo } from 'react';
import * as z from 'zod';

import { useTheme } from '@/theme';
import getAssetsContext from '@/theme/assets/getAssetsContext';

type Properties = {
  readonly path: string;
} & SvgProps;

const icons = getAssetsContext('icons');
const EXTENSION = 'svg';
const SIZE = 24;

function IconByVariant({
  height = SIZE,
  path,
  width = SIZE,
  ...props
}: Properties) {
  const { variant } = useTheme();

  const iconProperties = { ...props, height, width };
  const Icon = useMemo(() => {
    try {
      const getDefaultSource = () =>
        z
          .object({
            default: z.custom<React.FC<SvgProps>>(() =>
              z.custom<ReactElement<SvgProps>>(),
            ),
          })
          .parse(icons(`./${path}.${EXTENSION}`)).default;

      if (variant === 'default') {
        return getDefaultSource();
      }

      try {
        const fetchedModule = z
          .object({
            default: z.custom<React.FC<SvgProps>>(() =>
              z.custom<ReactElement<SvgProps>>(),
            ),
          })
          .parse(icons(`./${variant}/${path}.${EXTENSION}`));

        return fetchedModule.default;
      } catch (error) {
        console.warn(
          `Couldn't load the icon: ${path}.${EXTENSION} for the variant ${variant}, Fallback to default`,
          error,
        );
        return getDefaultSource();
      }
    } catch (error) {
      console.error(`Couldn't load the icon: ${path}.${EXTENSION}`, error);
      throw error;
    }
  }, [variant, path]);

  return <Icon {...iconProperties} />;
}

export default IconByVariant;
