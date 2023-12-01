---
slug: /installation
sidebar_label: Installation
title: Installation
id: installation
keywords: [getting started, installation, react native, react-native, react-native-boilerplate, boilerplate, react-native-template, template, TypeScript, JavaScript]
---

## Requirements

To get started, you simply need to meet the same requirements as outlined in the 
[React Native environment setup](https://reactnative.dev/docs/environment-setup) guide. 
Follow the installation instructions, and you'll be on your way!

## Using the boilerplate

You can create a new project using the React Native CLI's init command and set the appropriate template by running:

```bash title=">_ terminal"
npx react-native@latest init MyApp --template @thecodingmachine/react-native-boilerplate
```

During the installation process, you will encounter the following prompt:

```bash title=">_ terminal"
📘 Using typescript ? (Y/n)
```

This prompt gives you the flexibility to choose whether you want to use TypeScript or not. 
If you choose not to use TypeScript, the project will be created without any TypeScript configuration.

## Running the project

Assuming you have all the requirements installed, you can run the project with the following steps:

- Run `yarn start` to initiate the Metro bundler. Open a separate terminal for this.

- Run `yarn <platform>` to launch the application on your desired platform. 
Make sure to either start a simulator or connect a physical device for testing.
