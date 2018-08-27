# React Native boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

This boilerplate contains:

- an empty React Native application created with `react-native init`
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native
- a [directory layout](#directory-layout) for organizing the code of the application

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Containers`](App/Containers): container components
- [`App/Images`](App/Images): images used by the application
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Theme`](App/Theme): base styles for the application

For more information on each directory, click the link and read the directory's README.

## Installation

Make sure you have installed [everything needed to run React Native](https://facebook.github.io/react-native/docs/getting-started.html), then:

- clone this repository
- remove the previous git history: `rm -rf .git/`
- rename the React Native project to your own project name: `npm run rename -- <YourProjectName>` (the default name is `Boilerplate`)

You can now start the application, for example with `react-native run-android`.

## Useful documentation

### Distribute beta builds

[Distributing beta builds](docs/beta%20builds.md)
