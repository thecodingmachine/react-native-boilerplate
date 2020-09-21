import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { MyComp } from '@/Components'
import { Fonts, Gutters, Layout } from '@/Theme'

const ExampleScreen = () => {
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
