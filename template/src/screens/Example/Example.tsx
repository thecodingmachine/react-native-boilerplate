import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useQuery } from '@tanstack/react-query';

import { useTheme } from '@/theme';
import { ImageVariant } from '@/components/atoms';
import { Brand } from '@/components/molecules';
import { fetchOne } from '@/services/users';

const Example = () => {
  const { t } = useTranslation(['example', 'welcome']);

  const {
    colors,
    variant,
    changeTheme,
    layout,
    gutters,
    fonts,
    components,
    backgrounds,
  } = useTheme();

  const [currentId, setCurrentId] = useState(-1);

  const { isSuccess, data, isFetching } = useQuery({
    queryKey: ['example', currentId],
    queryFn: () => {
      return fetchOne(currentId);
    },
    select: response => response,
    enabled: currentId >= 0,
  });

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:welcome', data.name));
    }
  }, [isSuccess, data]);

  const onChangeTheme = () => {
    changeTheme(variant === 'default' ? 'dark' : 'default');
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <ScrollView
      style={[layout.flex_1]}
      contentContainerStyle={[
        layout.flex_1,
        layout.col,
        layout.justifyCenter,
        layout.itemsCenter,
      ]}
    >
      <View
        style={[
          layout.flex_1,
          layout.relative,
          layout.fullWidth,
          layout.justifyCenter,
          layout.itemsCenter,
        ]}
      >
        <View
          style={[
            layout.absolute,
            backgrounds.gray200,
            {
              borderRadius: 140,
              height: 250,
              width: 250,
            },
          ]}
        />

        <View
          style={[
            layout.absolute,
            {
              height: 300,
              width: 300,
              transform: [{ translateY: 40 }],
            },
          ]}
        >
          <Brand height={300} width={300} />
        </View>
      </View>

      <View
        style={[
          layout.flex_1,
          layout.justifyBetween,
          layout.itemsStart,
          layout.fullWidth,
          gutters.paddingHorizontal_32,
          gutters.marginTop_40,
        ]}
      >
        <View>
          <Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
            {t('welcome:title')}
          </Text>
          <Text
            style={[
              fonts.gray400,
              fonts.bold,
              fonts.size_24,
              gutters.marginBottom_32,
            ]}
          >
            {t('welcome:subtitle')}
          </Text>
          <Text style={[fonts.size_16, fonts.gray200]}>
            {t('welcome:description')}
          </Text>
        </View>

        <View
          style={[
            layout.row,
            layout.justifyBetween,
            layout.fullWidth,
            gutters.marginTop_16,
          ]}
        >
          <TouchableOpacity
            testID={'fetch-user-button'}
            style={[components.buttonCircle, gutters.marginBottom_16]}
            onPress={() => setCurrentId(Math.ceil(Math.random() * 10 + 1))}
          >
            {isFetching ? (
              <ActivityIndicator />
            ) : (
              <ImageVariant
                source={require('@/theme/assets/images/send.png')}
                style={{ tintColor: colors.purple500 }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            testID={'change-theme-button'}
            style={[components.buttonCircle, gutters.marginBottom_16]}
            onPress={() => onChangeTheme()}
          >
            <ImageVariant
              source={require('@/theme/assets/images/colorswatch.png')}
              style={{ tintColor: colors.purple500 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            testID={'change-language-button'}
            style={[components.buttonCircle, gutters.marginBottom_16]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <ImageVariant
              source={require('@/theme/assets/images/translate.png')}
              style={{ tintColor: colors.purple500 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Example;
