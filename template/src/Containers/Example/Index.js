import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput, Button } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'

const IndexExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.item)
  const fetchOneUserLoading = useSelector(
    (state) => state.user.fetchOne.loading,
  )
  const fetchOneUserError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    setUserId(id)
    dispatch(FetchOne.action(id))
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {fetchOneUserLoading && <ActivityIndicator />}
        {fetchOneUserError ? (
          <Text style={Fonts.textRegular}>{fetchOneUserError.message}</Text>
        ) : (
          <Text style={Fonts.textRegular}>{t('example.helloUser', { name: user.name })}</Text>
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
        <Text style={[Layout.fill, Fonts.textCenter]}>
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
      <Text style={Fonts.textRegular}>DarkMode :</Text>
      <Button onPress={() => changeTheme({ darkMode: null })} title="Auto" />
      <Button onPress={() => changeTheme({ darkMode: true })} title="Dark" />
      <Button onPress={() => changeTheme({ darkMode: false })} title="Light" />
    </View>
  )
}

export default IndexExampleContainer
