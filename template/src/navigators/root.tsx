import type { RootStackParamList } from '@/services/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks';

import { Example, Startup } from '@/screens';

import { Paths } from '@/services/navigation/paths';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  const { isError, isSuccess } = useQuery({
    queryFn: () => {
      return Promise.resolve(true);
    },
    queryKey: ['startup'],
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          {isSuccess ? (
            <Stack.Screen component={Example} name={Paths.Example} />
          ) : (
            <Stack.Screen
              component={Startup}
              initialParams={{ isError }}
              name={Paths.Startup}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
