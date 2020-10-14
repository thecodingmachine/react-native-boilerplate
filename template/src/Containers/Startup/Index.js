import React, { useEffect } from 'react'
import { ActivityIndicator, View, Button } from 'react-native'
import { Layout } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { InitializeStartupAction } from '@/Store/Startup/Initialize'
import { CommonActions } from '@react-navigation/native'

const IndexStartupContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  const isApplicationLoading = useSelector(
    (state) => state.startup.initialize.loading,
  )

  useEffect(() => {
    dispatch(InitializeStartupAction())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.rowCenter]}>
      {isApplicationLoading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title={'Continue'}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Main' }],
              }),
            )
          }
        />
      )}
    </View>
  )
}

export default IndexStartupContainer
