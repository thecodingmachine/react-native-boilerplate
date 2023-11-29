---
slug: /storage
sidebar_label: Storage
title: Storage
id: storage
keywords: [storage, localstorage, local, mmkv, react-native-mmkv]
---

While crafting your application, you'll inevitably encounter scenarios where local 
data storage becomes essential. In our boilerplate, we've seamlessly integrated the capability
to store data locally.
For instance, we utilize this feature to remember the user's chosen theme variant. 
This means that when a user opens the app, explores its features, switches themes, 
closes the app, and returns later, their preferred theme remains consistent, 
just as they left it.

This nifty functionality is made possible through the power of the 
[react native mmkv](https://github.com/mrousavy/react-native-mmkv) library, 
ensuring a seamless and personalized user experience.

### Setup
By default, the boilerplate comes with storage already configured, saving you time and effort.
However, if you ever need to fine-tune your storage settings to better suit your 
project's requirements, rest assured that it's a breeze to do so.

Simply navigate to the `src/App.tsx` file, where you'll find 
the storage configuration. By default, we've set it up to use the `default` storage,
ensuring a smooth and hassle-free experience from the get-go.

```typescript
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV(
    // highlight-next-line
    // You can change the storage configuration here
);
```

### Theme Provider Example
In our boilerplate, we take care of storing the selected theme variant directly on the user's
device. As you may already know, our ThemeProvider component is responsible for generating 
themes, making it the ideal place to manage theme variants.

We've simplified the process with just two straightforward methods:

```typescript
// To store the theme variant
storage.set('theme', 'default');

// To retrieve the theme variant
storage.getString('theme');
```

### Going Further
For a deeper dive into the world of storage management with the 
[react native mmkv](https://github.com/mrousavy/react-native-mmkv) library, 
we invite you to explore its comprehensive documentation. 
There, you'll find valuable insights and detailed guidance on harnessing the full potential
of this library to enhance your app's local data management.
