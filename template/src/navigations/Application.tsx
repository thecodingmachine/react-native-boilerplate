import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Example, Startup} from '@/screens';
import {useTheme} from '@/theme';
import {RootStackParamList} from "@/navigations/types";
import {Paths} from "@/navigations/paths";

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
					<Stack.Screen name={Paths.Startup} component={Startup} />
					<Stack.Screen name={Paths.Example} component={Example} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
