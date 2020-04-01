import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="ExampleScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ExampleScreen" component={ExampleScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
