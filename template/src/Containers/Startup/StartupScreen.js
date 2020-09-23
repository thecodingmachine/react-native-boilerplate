import React, { useEffect } from 'react'
import { ActivityIndicator, View, Button } from 'react-native'
import { Layout } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { initApplication } from '@/Store/Startup/Actions'
import { CommonActions } from '@react-navigation/native'

const StartupScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const isApplicationReady = useSelector(
    (state) => state.startup.applicationIsReady,
  )

  useEffect(() => {
    dispatch(initApplication())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.rowCenter]}>
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
    </View>
  )
}

export default StartupScreen
