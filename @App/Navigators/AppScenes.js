import React from 'react';
import { Stack, Scene } from 'react-native-router-flux';

// Custom Scenes
import SplashScreen from 'App/Containers/Splash/SplashScreen';
import RootScreen from 'App/Containers/Root/RootScreen';
import ExampleScreen from 'App/Containers/Example/ExampleScreen';

export default function() {
  return (
    <Stack key="root">
      <Scene key="RootScreen" component={RootScreen} initial />
      <Scene key="ExampleScreen" component={ExampleScreen} />
    </Stack>
  );
}
