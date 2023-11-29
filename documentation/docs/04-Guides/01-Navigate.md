---
slug: /navigate
sidebar_label: Navigate
title: Navigate
id: navigate
keywords: [navigation, navigate, react-navigation]
---

All navigation within the app is accomplished using [React Navigation](https://reactnavigation.org/). 
We adhere to the default navigation options without any overrides, custom navigators, or special configurations. 
This approach allows us to stay aligned with the latest releases of React Navigation, ensuring that we can swiftly adopt 
any new features and improvements.

## Navigation structure

All navigation-related configurations and navigators are neatly organized within the `src/navigators` folder. Here's a brief overview:

### Root file (`Application.{js, tsx}`)

This serves as the root navigator, which is responsible for handling the initial navigation of the application.
It's a simple stack navigator that includes the [`Startup`](/docs/data-fetching#fetching-data-at-startup) screen and an Example screen.

The workflow is designed so that when the application launches, the user is initially presented with the `Startup` screen. 
This screen takes on the responsibility of loading essential application data, such as user profiles and settings. 
Once this data is loaded, the `Startup` screen facilitates navigation to the `Example` screen.

As your application evolves, you have the flexibility to extend this file by adding more screens and navigators.

:::note Not a fan of the structure ?
Please note that this navigation structure is intentionally kept simple, providing you with a foundational structure that you can build upon. 
You can either add your own navigators or, if you prefer, replace the existing structure with your own custom navigation.
:::

## Using typescript

It's crucial not to overlook the creation of types for your navigation parameters. This practice helps prevent errors and enhances autocompletion. 
You can define these types in the `@types/navigation.ts` file.

For more in-depth information on this topic, please refer to the [React Navigation documentation](https://reactnavigation.org/docs/typescript/).

## Advanced usage

To gain a deeper understanding of the various navigators and their usage in React Navigation, 
We recommend following the [React Navigation documentation's "Getting Started" section](https://reactnavigation.org/docs/getting-started). 
This resource provides comprehensive information and examples that will help you become proficient in using different 
navigation options in your React Native application.
