import React from 'react'
import { SafeAreaView, View, Text, StatusBar } from 'react-native'
import { Fonts, Layout, Colors, Gutters } from '@/Theme'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={[Layout.fill, Layout.rowCenter]}>
      <View
        style={[
          Layout.colCenter,
          Layout.fullWidth,
          {
            height: 50,
            backgroundColor: Colors.primary,
          },
        ]}>
        <View
          style={[
            Layout.fill,
            Layout.rowCenter,
            Gutters.smallHPadding,
            { backgroundColor: Colors.white },
          ]}>
          <Text style={Fonts.textSmall}>EXAMPLE</Text>
        </View>
      </View>
    </SafeAreaView>
  </>
)

export default App
