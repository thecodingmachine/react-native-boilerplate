import type { ImageProps, ImageSourcePropType } from 'react-native';

import { useMemo } from 'react';
import { Image } from 'react-native';
import { z } from 'zod';

import { useTheme } from '@/theme';
import getAssetsContext from '@/theme/assets/getAssetsContext';

type Props = {
  extension?: string;
  path: string;
} & Omit<ImageProps, 'source'>;

const images = getAssetsContext('images');

function AssetByVariant({ extension = 'png', path, ...props }: Props) {
  const { variant } = useTheme();

  const image = useMemo(() => {
    const getDefaultSource = () =>
      z.custom<ImageSourcePropType>().parse(images(`./${path}.${extension}`));

    try {
      if (variant === 'default') {
        return getDefaultSource();
      }

      try {
        return z
          .custom<ImageSourcePropType>()
          .parse(images(`./${variant}/${path}.${extension}`));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `Couldn't load the image: ${path}.${extension} for the variant ${variant}, Fallback to default`,
          error,
        );
        return getDefaultSource();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Couldn't load the image: ${path}`, error);
      return null;
    }
  }, [path, extension, variant]);

  return image && <Image source={image} testID="variant-image" {...props} />;
}

export default AssetByVariant;
