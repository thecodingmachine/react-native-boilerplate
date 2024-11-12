import type { ReactElement } from 'react';
import type { SvgProps } from 'react-native-svg';

import { useCallback, useEffect, useState } from 'react';
import { z } from 'zod';

import { useTheme } from '@/theme';
import getAssetsContext from '@/theme/assets/getAssetsContext';

type Props = {
  path: string;
} & SvgProps;

const icons = getAssetsContext('icons');
const EXTENSION = 'svg';

function IconByVariant({ height = 24, path, width = 24, ...props }: Props) {
  const [icon, setIcon] = useState<ReactElement<SvgProps>>();
  const { variant } = useTheme();

  useEffect(() => {
    try {
      const defaultSource = z
        .object({ default: z.custom<ReactElement<SvgProps>>() })
        .parse(icons(`./${path}.${EXTENSION}`));

      if (variant === 'default') {
        setIcon(defaultSource.default);
        return;
      }

      try {
        const fetchedModule = z
          .object({ default: z.custom<ReactElement<SvgProps>>() })
          .parse(icons(`./${variant}/${path}.${EXTENSION}`));

        setIcon(fetchedModule.default);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `Couldn't load the icon: ${path}.${EXTENSION} for the variant ${variant}, Fallback to default`,
          error,
        );
        setIcon(defaultSource.default);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Couldn't load the icon: ${path}.${EXTENSION}`, error);
    }
  }, [variant, path]);

  const Component = useCallback(
    (currentProps: SvgProps) => {
      if (!icon) {
        return null;
      }

      return {
        ...icon,
        props: {
          ...icon.props,
          height,
          width,
          ...currentProps,
        },
      };
    },
    [icon, width, height],
  );

  return <Component {...props} />;
}

export default IconByVariant;
