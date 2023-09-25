import React from 'react';
import { View, DimensionValue } from 'react-native';

import { useTheme } from '@/hooks';
import { ImageVariant } from '@/components/atoms';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({ height, width, mode }: Props) => {
  const { layout } = useTheme();

  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <ImageVariant
        testID={'brand-img'}
        style={[layout.fullHeight, layout.fullWidth]}
        source={require('@/theme/assets/images/tom_light.png')}
        sourceDark={require('@/theme/assets/images/tom_dark.png')}
        resizeMode={mode}
      />
    </View>
  );
};

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default Brand;
