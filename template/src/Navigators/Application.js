import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/Theme'
import { AppearanceProvider } from 'react-native-appearance'

const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector((state) => state.startup.loading)

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  return (
    <AppearanceProvider>
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Startup" component={IndexStartupContainer} />
            {isApplicationLoaded && (
              <Stack.Screen
                name="Main"
                component={MainNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  )
}

export default ApplicationNavigator
