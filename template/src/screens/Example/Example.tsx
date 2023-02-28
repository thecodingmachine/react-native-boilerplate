import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { changeTheme, ThemeState } from '../../store/theme';

const Example = () => {
  const { t } = useTranslation('example');
  const { Common, Fonts, Gutters, Layout } = useTheme();
  const dispatch = useDispatch();

  const [userId, setUserId] = useState('9');
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
        Gutters.smallHPadding,
      ]}
    >
      <View style={[Layout.fullWidth, Gutters.smallVMargin]}>
        <View>
          <Text style={[Fonts.titleSmall, Gutters.smallBMargin]}>
            {t('titles.apiCalls')}
          </Text>

          <Text style={[Fonts.textSmall, Gutters.smallBMargin]}>
            {t('labels.userId')}
          </Text>
          <TextInput
            onChangeText={setUserId}
            editable={!isLoading}
            keyboardType={'number-pad'}
            value={userId}
            maxLength={1}
            selectTextOnFocus
            style={[Common.textInput]}
          />
        </View>

        <View style={[Layout.rowCenter, Gutters.smallTMargin]}>
          <View style={{ flex: 0.3 }}>
            <Brand height={70} width={70} />
          </View>
          <View style={{ flex: 0.7 }}>
            {(isLoading || isFetching) && <ActivityIndicator />}
            {!!error && <Text style={Fonts.textRegular}>ERROR</Text>}
            {isSuccess && (
              <Text style={[Fonts.textSmall]}>
                {t('helloUser', { name: data?.name })}
              </Text>
            )}
          </View>
        </View>
      </View>

      <View style={[Layout.fullWidth, Gutters.smallVMargin]}>
        <Text style={[Fonts.titleSmall, Gutters.smallBMargin]}>
          {t('titles.themeChoice')}
        </Text>

        <View
          style={[Layout.fullWidth, Layout.row, Layout.justifyContentBetween]}
        >
          <TouchableOpacity
            style={[Common.button.rounded, Gutters.regularBMargin]}
            onPress={() => onChangeTheme({ darkMode: null })}
          >
            <Text style={Fonts.textRegular}>Auto</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.outlineRounded, Gutters.regularBMargin]}
            onPress={() => onChangeTheme({ darkMode: true })}
          >
            <Text style={Fonts.textRegular}>Dark</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Common.button.outline, Gutters.regularBMargin]}
            onPress={() => onChangeTheme({ darkMode: false })}
          >
            <Text style={Fonts.textRegular}>Light</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Example;
