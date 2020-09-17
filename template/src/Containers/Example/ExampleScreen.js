import React, { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { MyComp } from '@/Components'
import { Fonts, Gutters, Layout } from '@/Theme'
import { StartupActions } from '@/Store/Startup/Actions'

const ExampleScreen = () => {
  const dispatch = useDispatch()
  const isReady = useSelector((state) => state.startup.appIsReady)

  useEffect(() => {
    dispatch(StartupActions.initApplicationSuccess())
  })

  useEffect(() => {
    console.log(isReady)
  }, [isReady])

  return (
    <SafeAreaView style={[Layout.fill, Layout.rowCenter]}>
      <View style={[Layout.colCenter, Layout.fullWidth]}>
        <View style={[Layout.rowCenter, Gutters.smallHPadding]}>
          <Text style={Fonts.textSmall}>EXAMPLE</Text>
          <MyComp />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ExampleScreen
