import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import i18n from 'i18next'

const IndexExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.item)
  const fetchOneUserLoading = useSelector(
    (state) => state.user.fetchOne.loading,
  )
  const fetchOneUserError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')
  const [internationalLanguage, setInternationalLanguage] = useState(true)

  const fetch = (id) => {
    setUserId(id)
    if (id) {
      dispatch(FetchOne.action(id))
    }
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  const getLanguage = () => i18n.language

  const setLanguage = async (language) => {
    await i18n.changeLanguage(language)
    setInternationalLanguage(!internationalLanguage)
  }

  const toggleLanguage = () => {
    getLanguage() === 'fr' ? setLanguage('en') : setLanguage('fr')
  }

  return (
    <View style={[Layout.fill, Gutters.smallHPadding]}>
      <View
        style={[
          Layout.rowReverse,
          Gutters.smallTMargin,
          Gutters.smallRMargin,
          Gutters.largeBMargin,
        ]}
      >
        <View style={[Layout.row, Layout.center]}>
          <Text style={[Fonts.textRegular, Gutters.tinyHPadding]}>FR</Text>
          <Switch
            thumbColor={Colors.primary}
            onValueChange={toggleLanguage}
            value={internationalLanguage}
            trackColor={{
              false: Colors.inputBackground,
              true: Colors.trackTrueColor,
            }}
          />
          <Text style={[Fonts.textRegular, Gutters.tinyHPadding]}>EN</Text>
        </View>
      </View>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {fetchOneUserLoading && <ActivityIndicator />}
        {fetchOneUserError ? (
          <Text style={Fonts.textRegular}>{fetchOneUserError.message}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: user.name })}
          </Text>
        )}
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={(text) => fetch(text)}
          editable={!fetchOneUserLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View>

      <View style={[Layout.colCenter]}>
        <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>
          {t('example.labels.darkMode')}
        </Text>
        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin]}
          onPress={() => changeTheme({ darkMode: null })}
        >
          <Text style={Fonts.textRegular}>{t('example.labels.auto')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.regularBMargin]}
          onPress={() => changeTheme({ darkMode: true })}
        >
          <Text style={Fonts.textRegular}>{t('example.labels.dark')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Common.button.outline, Gutters.regularBMargin]}
          onPress={() => changeTheme({ darkMode: false })}
        >
          <Text style={Fonts.textRegular}>{t('example.labels.light')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default IndexExampleContainer
