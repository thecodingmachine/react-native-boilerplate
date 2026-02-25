import type { FC } from 'react';
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

// 1. Declare the fallback outside to guarantee a stable, single reference in memory.
const FallbackIcon: FC<SvgProps> = () => undefined;

// 2. Resolve the component without creating ANY new functions inline.
const resolveIconComponent = (path: string, variant: string): FC<SvgProps> => {
  const schema = z.object({
    default: z.custom<FC<SvgProps>>(),
  });

  const getModule = (p: string) => schema.parse(icons(p)).default;

  try {
    if (variant !== 'default') {
      try {
        return getModule(`./${variant}/${path}.${EXTENSION}`);
      } catch {
        // Continue to default fallback below
      }
    }
    return getModule(`./${path}.${EXTENSION}`);
  } catch (error) {
    console.warn(`Icon ${path} not found. Returning fallback.`, error);
    // 3. Return the stable reference instead of an inline function
    return FallbackIcon;
  }
};

function IconByVariant({
  height = SIZE,
  path,
  width = SIZE,
  ...props
}: Properties) {
  const { variant } = useTheme();

  const IconComponent = useMemo(
    () => resolveIconComponent(path, variant),
    [path, variant],
  );

  // eslint-disable-next-line react-hooks/static-components
  return <IconComponent height={height} width={width} {...props} />;
}

export default IconByVariant;
