import React, { useEffect } from 'react'
import { ActivityIndicator, View, Button, Text } from 'react-native'
import { Layout, Fonts } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { CommonActions } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

const IndexStartupContainer = ({ navigation }) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const isApplicationLoading = useSelector((state) => state.startup.loading)

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.rowCenter]}>
      {isApplicationLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text style={Fonts.textCenter}>{t('welcome')}</Text>
          <Button
            title={t('actions.continue')}
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Main' }],
                }),
              )
            }
          />
        </View>
      )}
    </View>
  )
}

export default IndexStartupContainer
