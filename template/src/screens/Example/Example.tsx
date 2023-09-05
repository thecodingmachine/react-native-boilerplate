import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { useTheme } from '@/hooks';
import { Brand } from '@/components';
import { useLazyFetchOneQuery } from '@/services/modules/users';
import { changeTheme } from '@/store/theme';
import ImageVariant from '@/components/ImageVariant/ImageVariant';

const Example = () => {
  const { t } = useTranslation(['example', 'welcome']);

  const { variant, layout, gutters, fonts, components, backgrounds, borders } =
    useTheme();

  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = () => {
    dispatch(
      changeTheme({ variant: variant === 'default' ? 'dark' : 'default' }),
    );
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
            backgrounds.bg_gray_200,
            borders.rounded_140,
            {
              height: 250,
              width: 250,
            },
          ]}
        />
        <ImageVariant
          style={[
            layout.absolute,
            {
              bottom: '-30%',
              left: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-bottom-left.png')}
          resizeMode={'contain'}
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
        <ImageVariant
          style={[
            layout.absolute,
            layout.flex_1,
            {
              top: 0,
              left: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-top-left.png')}
          resizeMode={'contain'}
        />
        <ImageVariant
          style={[
            layout.absolute,
            {
              top: '-5%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-top.png')}
          sourceDark={require('@/theme/assets/images/sparkles-bottom.png')}
          resizeMode={'contain'}
        />
        <ImageVariant
          style={[
            layout.absolute,
            {
              top: '15%',
              right: 20,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-top-right.png')}
          resizeMode={'contain'}
        />
        <ImageVariant
          style={[
            layout.absolute,
            {
              bottom: '-10%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-right.png')}
          resizeMode={'contain'}
        />

        <ImageVariant
          style={[
            layout.absolute,
            {
              top: '75%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-bottom.png')}
          sourceDark={require('@/theme/assets/images/sparkles-top.png')}
          resizeMode={'contain'}
        />
        <ImageVariant
          style={[
            layout.absolute,
            {
              top: '60%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-bottom-right.png')}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={[
          layout.flex_1,
          layout.justifyBetween,
          layout.itemsStart,
          layout.fullWidth,
          gutters.paddingHorizontal_30,
          gutters.marginTop_30,
        ]}
      >
        <View>
          <Text style={[fonts.font_40, fonts.text_gray_800, fonts.bold]}>
            {t('welcome:title')}
          </Text>
          <Text
            style={[
              fonts.text_gray_400,
              fonts.bold,
              fonts.font_20,
              gutters.marginBottom_30,
            ]}
          >
            {t('welcome:subtitle')}
          </Text>
          <Text style={[fonts.font_16, fonts.text_gray_200]}>
            {t('welcome:description')}
          </Text>
        </View>

        <View
          style={[
            layout.row,
            layout.justifyBetween,
            layout.fullWidth,
            gutters.marginTop_10,
          ]}
        >
          <TouchableOpacity
            style={[components.buttons.circle, gutters.marginBottom_10]}
            onPress={() => fetchOne(`${Math.ceil(Math.random() * 10 + 1)}`)}
          >
            {isFetching || isLoading ? (
              <ActivityIndicator />
            ) : (
              <ImageVariant
                source={require('@/theme/assets/images/send.png')}
                style={{ tintColor: backgrounds.bg_purple_500.backgroundColor }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[components.buttons.circle, gutters.marginBottom_10]}
            onPress={() => onChangeTheme()}
          >
            <ImageVariant
              source={require('@/theme/assets/images/colorswatch.png')}
              style={{ tintColor: backgrounds.bg_purple_500.backgroundColor }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[components.buttons.circle, gutters.marginBottom_10]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <ImageVariant
              source={require('@/theme/assets/images/translate.png')}
              style={{ tintColor: backgrounds.bg_purple_500.backgroundColor }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Example;
