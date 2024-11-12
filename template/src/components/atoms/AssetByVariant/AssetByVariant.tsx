import type { ImageProps, ImageSourcePropType } from 'react-native';

import { useEffect, useState } from 'react';
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
  const [image, setImage] = useState<ImageSourcePropType>();
  const { variant } = useTheme();

  useEffect(() => {
    try {
      const defaultSource = z
        .custom<ImageSourcePropType>()
        .parse(images(`./${path}.${extension}`));

      if (variant === 'default') {
        setImage(defaultSource);
        return;
      }

      try {
        const fetchedModule = z
          .custom<ImageSourcePropType>()
          .parse(images(`./${variant}/${path}.${extension}`));
        setImage(fetchedModule);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(
          `Couldn't load the image: ${path}.${extension} for the variant ${variant}, Fallback to default`,
          error,
        );
        setImage(defaultSource);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Couldn't load the image: ${path}`, error);
    }
  }, [variant, extension, path]);

  return image && <Image source={image} testID="variant-image" {...props} />;
}

export default AssetByVariant;
