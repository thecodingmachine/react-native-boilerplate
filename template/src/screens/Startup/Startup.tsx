import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '@/hooks';
import { Brand } from '@/components';
import { setDefaultTheme } from '@/store/theme';
import { ApplicationScreenProps } from 'types/navigation';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { layout, gutters } = useTheme();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  useEffect(() => {
    init();
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
