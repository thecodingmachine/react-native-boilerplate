# React Native boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides an architecture optimized for building solid applications through separation of concerns between the UI and business logic.

## Content

The boilerplate contains:

- an "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" React Native application (v0.55) created with `react-native init`
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v3.7) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.9) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v5.0) to separate side-effects and logic from state and UI logic
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v0.7) to facilitate using Redux
- [apisauce](https://github.com/infinitered/apisauce) (v0.15) to make [axios](https://github.com/axios/axios) even better
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

## Updates

The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible.

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Containers`](App/Containers): container components
- [`App/Images`](App/Images): images used by the application
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Theme`](App/Theme): base styles for the application

For more information on each directory, click the link and read the directory's README.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Usage

To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: `rm -rf .git/`
- rename the React Native project to your own project name: `npm run rename -- <YourProjectName>` (the default name is `Boilerplate`)
- remove the LICENSE file and the License section from the README if your project is not open source

Feel free to remove this section from the README as you will no longer need it in your project. You are encouraged to keep the rest of the documentation in your project so that it is self-explanatory.

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)
- `react-native run-ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## License

This project is released under the [MIT License](LICENSE).

## About us

[TheCodingMachine](https://www.thecodingmachine.com/) is a web and mobile agency based in Paris and Lyon, France. We are [constantly looking for new developers and team leaders](https://www.thecodingmachine.com/nous-rejoindre/) and we love [working with freelancers](https://coders.thecodingmachine.com/). You'll find [an overview of all our open source projects on our website](https://thecodingmachine.io/open-source) and on [Github](https://github.com/thecodingmachine).

## See also

Here are alternative boilerplates that you may want to check out:

- [Ignite boilerplate](https://github.com/infinitered/ignite-ir-boilerplate-andross): this boilerplate is much more opinionated and packed that this one, we wanted something lighter which is why we did no go with it
