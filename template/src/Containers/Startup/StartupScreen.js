import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Button } from 'react-native'
import { Layout } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { StartupActions } from '@/Store/Startup/Actions'
import { CommonActions } from '@react-navigation/native'

const StartupScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const isApplicationReady = useSelector(
    (state) => state.startup.applicationIsReady,
  )

  useEffect(() => {
    setTimeout(() => dispatch(StartupActions.initApplicationSuccess()), 5000)
  })

  return (
    <SafeAreaView style={[Layout.fill, Layout.rowCenter]}>
      {!isApplicationReady ? (
        <ActivityIndicator />
      ) : (
        <Button
          title={'Continue'}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Base' }],
              }),
            )
          }
        />
      )}
    </SafeAreaView>
  )
}

export default StartupScreen
