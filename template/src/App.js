import React from 'react'
import { SafeAreaView, View, Text, StatusBar } from 'react-native'
import { Fonts, Layout, Colors, Gutters } from '@/Theme'
import { MyComp } from '@/Components'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={[Layout.fill, Layout.rowCenter]}>
      <View style={[Layout.colCenter, Layout.fullWidth]}>
        <View
          style={[
            Layout.fill,
            Layout.rowCenter,
            Gutters.smallHPadding,
            { backgroundColor: Colors.white },
          ]}>
          <Text style={Fonts.textSmall}>EXAMPLE</Text>
          <MyComp />
        </View>
      </View>
    </SafeAreaView>
  </>
)

export default App
