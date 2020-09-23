import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleScreen } from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ExampleScreen} />
    </Tab.Navigator>
  )
}

export default MainNavigator
