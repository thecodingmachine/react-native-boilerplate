---
slug: /Introduction
title: React Native Boilerplate 🐙
---

<div align="center">
    <img width="300" height="300" src={require('../assets/TOM.png').default} />
</div>

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kick-start a mobile application.

The boilerplate provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. 
We made this full documentation so that each piece of code that lands in your application can be understood and used.


:::tip Don't forget !!
If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives 🌈 ☀️
:::

## Architecture 🧱

The driving goal of the architecture of the boilerplate is separation of concerns and using React Native at its best.

- **Using modern Javascript**
    So many javascript features are indispensable now like hooks, functional component and really cool dependencies.

- **Presentational components are separated from containers**.

    Presentational components are small components that are concerned with *how things look*. 
    Containers usually define whole application screens and are concerned with *how things work*: they include presentational components and wire everything together.
    
    If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **State is managed using global [Redux](https://redux.js.org/) stores**.

    When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.
    
    With Redux, state is shared using global *stores*, and changes are predictable: *actions* are applied by *reducers* to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.
    
    If you are interested you can [read more about it here](https://redux.js.org/introduction/motivation).
    
## Content 🧳

The boilerplate contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.65.1**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v**4.1.1**) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v**6.0.0**) to persist the Redux state
- [React Navigation](https://reactnavigation.org/) (v**6**) to handle routing and navigation in the app, with a splash screen setup by default
- [redux toolkit](https://redux-toolkit.js.org/) (v**1.6.1**) to make redux easier
- [axios](https://github.com/axios/axios) (v**0.21.4**) to make API calls
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native
- [react-native-flipper](https://fbflipper.com/) (v**2.0.0**) to debug react-native and [redux-flipper](https://github.com/jk-gan/redux-flipper) (v**1.4.2**) to debug redux

The boilerplate includes an example (displaying fake user data) from UI components to the business logic. The example is easy to remove so that it doesn't get in the way.

## Directory layout 🗂️

- `src/Assets`: assets (image, audio files, ...) used by the application
- `src/Components`: presentational components
- `src/Config`: configuration of the application
- `src/Containers`: container components, i.e. the application's screens
- `src/Navigators`: react navigation navigators 
- `src/Services`: application services, e.g. API clients
- `src/Stores`: redux [actions, reducers and stores](https://redux.js.org/basics)
- `src/Translations`: application strings, you can add languages files and be able to translate your app strings
- `src/Theme`: base styles for the application

## Updates 🕐

The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible.
