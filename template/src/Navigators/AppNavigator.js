import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StartupScreen } from '@/Containers'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const AppNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)

  const applicationIsReady = useSelector(
    (state) => state.startup.applicationIsReady,
  )

  useEffect(() => {
    if (MainNavigator == null && applicationIsReady) {
      MainNavigator = require('@/Navigators/MainNavigator').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsReady])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Startup" component={StartupScreen} />
      {isApplicationLoaded && (
        <Stack.Screen name="Base" component={MainNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator
