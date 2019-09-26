import React from 'react';
import { Stack, Scene } from 'react-native-router-flux';

// Custom Scenes
import RootScreen from 'App/Containers/Root/RootScreen';
import ExampleScreen from 'App/Containers/Example/ExampleScreen';

export default () => {
  return (
    <Stack key="root">
      <Scene key="RootScreen" component={RootScreen} initial />
      <Scene key="ExampleScreen" component={ExampleScreen} />
    </Stack>
  );
};
