import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ExampleScreen, StartupScreen } from '@/Containers'

const Stack = createStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Startup" component={StartupScreen} />
    <Stack.Screen name="Home" component={ExampleScreen} />
  </Stack.Navigator>
)

export default AppNavigator
