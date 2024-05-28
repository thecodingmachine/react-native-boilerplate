---
slug: /debugging
sidebar_label: Debugging
title: Debugging
id: debugging
keywords: [debugging, reactotron]
---

Found a bug in your app? It can be difficult to identify, especially if you're unsure whether it's related to the network or not.
In our boilerplate, we've seamlessly integrated [Reactotron](https://github.com/infinitered/reactotron), a powerful desktop app for inspecting React Native projects. 
Reactotron is invaluable during development, offering an easy way to view your application's logs, async storage, network calls, and state.

### Setup
By default, the boilerplate comes with Reactotron already configured, saving you time and effort.
However, if you ever need to fine-tune your Reactotron settings to better suit your
project's requirements, rest assured that it's a breeze to do so.

Simply navigate to the `./ReactotronConfig.js` file, where you'll find
the Reactotron configuration. By default, we've set it up to use the configuration suitable for development environment, ensuring a smooth and hassle-free experience from the get-go.


```typescript
import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {
  QueryClientManager,
  reactotronReactQuery,
} from 'reactotron-react-query';

import { storage, queryClient } from './src/App';
import config from './app.json';

const queryClientManager = new QueryClientManager({
  queryClient,
});

// highlight-next-line
// You can change the storage configuration here
Reactotron.configure({
  name: config.name,
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  },
})
  .useReactNative()
  // highlight-next-line
  .use(mmkvPlugin({ storage })) // We use the mmkv plugin to store the Reactotron state
  // highlight-next-line
  .use(reactotronReactQuery(queryClientManager)) // We use the react-query plugin to store the Reactotron state
  .connect();
```

### Going Further
For a deeper dive into the world of debugging with
[Reactotron](https://github.com/infinitered/reactotron),
we invite you to explore its comprehensive documentation.
There, you'll find valuable insights and detailed guidance on harnessing the full potential
of this tool to enhance your app's debugging process.

:::info
    We use Reactotron while the official React-Native Debugger is not stable. We recommend using Reactotron for debugging purposes.
:::
