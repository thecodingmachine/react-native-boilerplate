import React from 'react';
import { Stack, Scene } from 'react-native-router-flux';

// Definitions

// Custom Views
// import SplashScreen from 'App/Containers/Splash/SplashScreen';
import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import RootScreen from 'App/Containers/Root/RootScreen';

function AppScenes() {
  return (
    <Stack key="root">
      {/* <Scene key="SplashScreen" component={SplashScreen} hideNavBar={false} /> */}
      <Scene key="ExampleScreen" component={ExampleScreen} hideNavBar={false} />
      <Scene key="RootScreen" component={RootScreen} hideNavBar={false} />
    </Stack>
  );
}

export default AppScenes;
