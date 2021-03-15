---
slug: /Installation
title: Installation
---

## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Using the boilerplate

To create a new project using the boilerplate simply run :

```
npx react-native init MyApp --template @thecodingmachine/react-native-boilerplate
```

## Running with typescript 

During the installation the cli will ask you if you want to use typescript, tap on the `y` key and all the requirement will be set.

## Running the project

Assuming you have all the requirements installed, you can run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a debug key with:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)
