import type { ImageProps } from 'react-native';

import { View } from 'react-native';

import { useTheme } from '@/theme';

import { AssetByVariant } from '@/components/atoms';

function Brand({
  height = 200,
  width = 200,
  resizeMode = 'contain',
}: Pick<ImageProps, 'height' | 'width' | 'resizeMode'>) {
  const { layout } = useTheme();

  return (
    <View style={{ height, width }} testID="brand-img-wrapper">
      <AssetByVariant
        path={'tom'}
        resizeMode={resizeMode}
        style={[layout.fullHeight, layout.fullWidth]}
        testID="brand-img"
      />
    </View>
  );
}

export default Brand;
