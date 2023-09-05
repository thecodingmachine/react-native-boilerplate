import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '@/hooks';
import { Brand } from '@/components';
import { setDefaultTheme } from '@/store/theme';
import { ApplicationScreenProps } from 'types/navigation';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { layout, gutters } = useTheme();

  useEffect(() => {
    setDefaultTheme({ variant: 'default' });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  }, []);

  return (
    <View
      style={[
        layout.flex_1,
        layout.col,
        layout.itemsCenter,
        layout.justifyCenter,
      ]}
    >
      <Brand />
      <ActivityIndicator size={'large'} style={[gutters.marginVertical_20]} />
    </View>
  );
};

export default Startup;
