---
slug: /Installation
title: Installation 💿
---

## Requirements 🎒

Node 12 or greater is required. Development for iOS requires a Mac and Xcode 10 or up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Using the boilerplate 💻

To create a new project using the boilerplate simply run :

```
npx react-native init MyApp --template @thecodingmachine/react-native-boilerplate
```

## Running with typescript 💙

During the installation the cli will ask you if you want to use typescript, tap on the `y` key and all the requirement will be set.
to type check your project just run `yarn tsc`.

## Running the project 📲

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the *platform* application (remember to start a simulator or connect a device)
