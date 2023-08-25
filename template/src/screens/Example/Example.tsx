import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { useTheme } from '@/hooks';
import { Brand } from '@/components';
import { useLazyFetchOneQuery } from '@/services/modules/users';
import { changeTheme, ThemeState } from '@/store/theme';

const Example = () => {
  const { t } = useTranslation(['example', 'welcome']);

  const {
    settings: { isDark },
    layout,
    gutters,
    fonts,
    components,
  } = useTheme();

  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <ScrollView
      style={layout.flex_1}
      contentContainerStyle={[
        layout.fullHeight,
        layout.fullWidth,
        layout.flex_1,
        layout.col,
        layout.justifyCenter,
        layout.itemsCenter,
        // layout.scrollSpaceBetween,
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
            {
              height: 250,
              width: 250,
              backgroundColor: isDark ? '#000000' : '#DFDFDF',
              borderRadius: 140,
            },
          ]}
        />
        <Image
          style={[
            layout.absolute,
            {
              bottom: '-30%',
              left: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-bottomLeft.png')}
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
        <Image
          style={[
            layout.absolute,
            layout.flex_1,
            {
              top: 0,
              left: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-topLeft.png')}
          resizeMode={'contain'}
        />
        <Image
          style={[
            layout.absolute,
            {
              top: '-5%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-top.png')}
          resizeMode={'contain'}
        />
        <Image
          style={[
            layout.absolute,
            {
              top: '15%',
              right: 20,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-topRight.png')}
          resizeMode={'contain'}
        />
        <Image
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

        <Image
          style={[
            layout.absolute,
            {
              top: '75%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-bottom.png')}
          resizeMode={'contain'}
        />
        <Image
          style={[
            layout.absolute,
            {
              top: '60%',
              right: 0,
            },
          ]}
          source={require('@/theme/assets/images/sparkles-bottomRight.png')}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={[
          layout.flex_1,
          layout.justifyBetween,
          layout.itemsStart,
          layout.fullWidth,
          gutters.paddingHorizontal_20,
        ]}
      >
        <View>
          <Text style={[fonts.font_40]}>{t('welcome:title')}</Text>
          <Text style={[fonts.bold, fonts.font_16, gutters.marginBottom_10]}>
            {t('welcome:subtitle')}
          </Text>
          <Text style={[fonts.font_14]}>{t('welcome:description')}</Text>
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
              <Image
                source={require('@/theme/assets/images/send.png')}
                style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[components.buttons.circle, gutters.marginBottom_10]}
            onPress={() => onChangeTheme({ darkMode: !isDark })}
          >
            <Image
              source={require('@/theme/assets/images/colorswatch.png')}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[components.buttons.circle, gutters.marginBottom_10]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }
          >
            <Image
              source={require('@/theme/assets/images/translate.png')}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Example;
