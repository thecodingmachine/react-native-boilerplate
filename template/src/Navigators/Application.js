import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)

  const applicationIsReady = useSelector(
    (state) => state.startup.applicationIsReady,
  )

  useEffect(() => {
    if (MainNavigator == null && applicationIsReady) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsReady])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Startup" component={IndexStartupContainer} />
      {isApplicationLoaded && (
        <Stack.Screen name="Main" component={MainNavigator} />
      )}
    </Stack.Navigator>
  )
}

export default ApplicationNavigator
