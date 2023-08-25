import React, { useMemo } from 'react';
import { Variant } from 'types/theme/config';
import { Image } from 'react-native';
import { useTheme } from '@/hooks';

type Props = {

  [variant in Variant]: NodeRequire;
};

const ImageVariant = (props: Props) => {
  const {
    settings: { variant },
  } = useTheme();

  const source = useMemo(() => {
    if (props[variant]) {
        try {
            return props[variant];
        } catch (e) {
            console.log('try to load image failed', e);
            return
        }
    }
    return require('assets/images/brand/logo.png');
  }, [variant]);

  return <Image source={source} />;
};

export default ImageVariant;
