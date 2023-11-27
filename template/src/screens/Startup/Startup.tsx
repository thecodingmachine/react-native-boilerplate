import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';
import { Brand } from '@/components/molecules';

import { ApplicationScreenProps } from 'types/navigation';

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { layout, gutters, fonts } = useTheme();
  const { t } = useTranslation(['startup']);

  const { isSuccess, isFetching, isError } = useQuery({
    queryKey: ['startup'],
    queryFn: () => {
      return Promise.resolve(true);
    },
  });

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  }, [isSuccess]);

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
      {isFetching && (
        <ActivityIndicator size={'large'} style={[gutters.marginVertical_24]} />
      )}
      {isError && (
        <Text style={[fonts.size_16, fonts.red500]}>{t('startup:error')}</Text>
      )}
    </View>
  );
};

export default Startup;
