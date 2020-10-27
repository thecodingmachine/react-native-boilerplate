<div align="center">
    <img src="documentation/static/img/TOM-Legend.png" alt="Logo" width="100%">
</div>

![GitHub Release Date](https://img.shields.io/github/release-date/thecodingmachine/react-native-boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/thecodingmachine/react-native-boilerplate)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/thecodingmachine/react-native-boilerplate)
![GitHub commits since latest release](https://img.shields.io/github/commits-since/thecodingmachine/react-native-boilerplate/latest)
![GitHub top language](https://img.shields.io/github/languages/top/thecodingmachine/react-native-boilerplate)

# TheCodingMachine React Native boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is fully documented so that each piece of code that lands in your application can be understood and used.

```
If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :)
```


## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick start

To create a new project using the boilerplate simply run :

```
npx react-native init MyApp --template @thecodingmachine/react-native-boilerplate
```

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a `debug key` with:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Digging Deeper

To learn more about this boilerplate, go to [full documentation](https://thecodingmachine.github.io/react-native-boilerplate)

## License

This project is released under the [MIT License](LICENSE).

## About us

[TheCodingMachine](https://www.thecodingmachine.com/) is a web and mobile agency based in Paris and Lyon, France. We are [constantly looking for new developers and team leaders](https://www.thecodingmachine.com/nous-rejoindre/) and we love [working with freelancers](https://coders.thecodingmachine.com/). You'll find [an overview of all our open source projects on our website](https://thecodingmachine.io/open-source) and on [Github](https://github.com/thecodingmachine).
