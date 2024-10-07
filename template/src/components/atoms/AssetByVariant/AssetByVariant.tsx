import type { ImageProps, ImageSourcePropType } from 'react-native';

import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { z } from 'zod';

import { useTheme } from '@/theme';
import getAssetsContext from '@/theme/assets/getAssetsContext';

type Props = Omit<ImageProps, 'source'> & {
  extension?: string;
  path: string;
};

const images = getAssetsContext('images');

function AssetByVariant({ path, extension = 'png', ...props }: Props) {
  const [image, setImage] = useState<ImageSourcePropType>();
  const { variant } = useTheme();

  useEffect(() => {
    try {
      const defaultSource = z
        .custom<ImageSourcePropType>()
        .parse(images(`./${path}.${extension}`));

      const fetchedModule = z
        .custom<ImageSourcePropType>()
        .parse(images(`./${variant}/${path}.${extension}`));
      setImage(fetchedModule ?? defaultSource);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Couldn't load the image: ${path}`, error);
    }
  }, [variant, extension, path]);

  return image && <Image source={image} testID="variant-image" {...props} />;
}

export default AssetByVariant;
