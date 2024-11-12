import type { DimensionValue, ViewProps } from 'react-native';

import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@/theme';

type Props = {
  height?: DimensionValue;
  loading?: boolean;
  width?: DimensionValue;
} & ViewProps;

const FROM = 0.2;
const TO = 1;

function SkeletonLoader({
  children,
  height = 24,
  loading = false,
  width = '100%',
  ...props
}: Props) {
  const { backgrounds, borders } = useTheme();

  const opacity = useSharedValue(FROM);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    if (!loading) {
      return;
    }
    opacity.value = withRepeat(withTiming(TO, { duration: 800 }), -1, true);
  }, [loading, opacity]);

  return (
    <View
      {...props}
      style={[{ minHeight: height, minWidth: width }, props.style]}
    >
      {loading ? (
        <Animated.View
          style={[
            animatedStyles,
            backgrounds.skeleton,
            borders.rounded_4,
            {
              height,
              width,
            },
            props.style,
          ]}
          testID="skeleton-loader"
        />
      ) : (
        children
      )}
    </View>
  );
}

export default SkeletonLoader;
