import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from '@/Navigators/AppNavigator'

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <AppNavigator />
  </NavigationContainer>
)

export default App
