import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StartupScreen } from '@/Containers'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

let ExampleScreen

// @refresh reset
const AppNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)

  const applicationIsReady = useSelector(
    (state) => state.startup.applicationIsReady,
  )

  useEffect(() => {
    if (ExampleScreen == null && applicationIsReady) {
      ExampleScreen = require('@/Containers').ExampleScreen
      setIsApplicationLoaded(true)
    }
  }, [applicationIsReady])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Startup" component={StartupScreen} />
      {isApplicationLoaded && (
        <Stack.Screen name="Home" component={ExampleScreen} />
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator
