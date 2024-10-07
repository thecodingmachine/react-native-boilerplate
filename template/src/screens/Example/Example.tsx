import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTheme } from '@/theme';
import { useI18n, useUser } from '@/hooks';

import { AssetByVariant } from '@/components/atoms';
import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/templates';

function Example() {
  const { t } = useTranslation();
  const { useFetchOneQuery } = useUser();
  const { toggleLanguage } = useI18n();

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

  const { isSuccess, data, isFetching } = useFetchOneQuery(currentId);

  useEffect(() => {
    if (isSuccess) {
      Alert.alert(t('screen_example.hello_user', data.name));
    }
  }, [isSuccess, data, t, currentId]);

  const onChangeTheme = () => {
    changeTheme(variant === 'default' ? 'dark' : 'default');
  };

  return (
    <SafeScreen>
      <ScrollView>
        <View
          style={[
            layout.justifyCenter,
            layout.itemsCenter,
            gutters.marginTop_80,
          ]}
        >
          <View
            style={[layout.relative, backgrounds.gray100, components.circle250]}
          />

          <View style={[layout.absolute, gutters.paddingTop_80]}>
            <Brand height={300} width={300} />
          </View>
        </View>

        <View style={[gutters.paddingHorizontal_32, gutters.marginTop_40]}>
          <View style={[gutters.marginTop_40]}>
            <Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
              {t('screen_example.title')}
            </Text>
            <Text
              style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}
            >
              {t('screen_example.description')}
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
              onPress={() => setCurrentId(Math.ceil(Math.random() * 10 + 1))}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="fetch-user-button"
            >
              {isFetching ? (
                <ActivityIndicator />
              ) : (
                <AssetByVariant
                  path={'send'}
                  style={{ tintColor: colors.purple500 }}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onChangeTheme()}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-theme-button"
            >
              <AssetByVariant
                path={'colorswatch'}
                style={{ tintColor: colors.purple500 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleLanguage}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-language-button"
            >
              <AssetByVariant
                path={'translate'}
                style={{ tintColor: colors.purple500 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Example;
