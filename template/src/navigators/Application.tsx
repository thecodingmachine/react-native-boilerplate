import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';

import { Startup } from '@/screens';
import { useTheme } from '@/hooks';
import MainNavigator from './Main';

import { ApplicationStackParamList } from 'types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  const { variant, layout, navigationTheme } = useTheme();

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView
      style={[
        layout.flex_1,
        { backgroundColor: navigationTheme.colors.background },
      ]}
    >
      <NavigationContainer theme={navigationTheme} ref={navigationRef}>
        <StatusBar
          barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
