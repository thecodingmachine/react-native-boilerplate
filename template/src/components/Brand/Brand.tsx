import React from 'react';
import { View, Image, DimensionValue } from 'react-native';
import { useTheme } from '../../hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme();

  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <Image
        testID={'brand-img'}
        style={Layout.fullSize}
        source={Images.logo}
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
