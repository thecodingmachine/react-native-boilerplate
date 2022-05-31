---
title: React Native Boilerplate 3.0.0
authors: jed
description: What's in the box? 📦
hide_table_of_contents: false
tags: [boilerplate, starter-kit, starter, kit, react, native, react-native, javascript, typescript]
---

Welcome aboard! 🛥️

As we have active users that uses this boilerplate, we will try to improve communication about updates
we're releasing. It's important for us to give you new reasons to try this boilerplate out!
We would love to have new ideas to make it even more convenient!

To do so, we will post a changelog every major updates. Unlike the changelog in the releases tab, we
will here provide more details and maybe some examples. 

In this first post, we will present the current state of this boilerplate.

<!--truncate-->

## Light 🪶 Simple 👌 and Scalable 📏
This boilerplate is the core of every react-native applications we develop at [TheCodingMachine](https://www.thecodingmachine.com/).
This means that we are the first users! If an issue appear we are the first affected 🥺, that's why this project is actively maintained!

The main idea behind this boilerplate is to have just the necessary and well-known stuff to have a very
"*easy to use*" boilerplate for little and big real world apps.

We don't include components libraries, we don't depend on third-party libraries (like Firebase for example).
It's just a good template project that is build on top of all the accumulated experience of our mobile teams.
It also provides a solid architecture that facilitates separation of concerns between the UI, the state management
and the business logic.
Like that, everyone can add its own touch! 🖌️

🚨 Every decision about the technical stack are made regarding our preferences (every library has his
pros and cons).

## Easy to install 😎

Installation has been facilitated since the v2.0.0, thanks to the use of the react-native-cli and 
[custom template](https://github.com/react-native-community/cli/blob/master/docs/init.md#creating-custom-template).
To run this boilerplate, the only commands you need are

```
npx react-native init --template @thecodingmachine/react-native-boilerplate
yarn start
yarn ios
yarn android
```

That's this simple! 🚀

## Typescript support 💙

Since the v3.0.0, during the installation, you can choose to use typescript for your new app. 
All the boilerplate will then be translated in typescript.

![Typescript init](./assets/typescript.png)

That's this simple! 🚀

## Solid libraries 🔨

As I said before, main concerns are simplicity and scalability.
Each of the used libraries are well-known, tried and tested. 

### Well-know libraries

For the state management we use [**Redux**](https://redux.js.org/) (redux + redux toolkit + redux persist). 
Some people like it, some people don't.
We are really comfortable with this library, it's not so difficult to learn, and the implementation is well-known, 
recognized as a good choice and easy [to debug](/docs/UsingFlipper)! 
Thanks to this boilerplate and [redux-toolkit](https://redux-toolkit.js.org/), the state management is ready out of the box. 
A complete example is even included. This way, you can easier understand how it works.
To deal with the navigation, [**React Navigation**](https://reactnavigation.org/) is THE reference for screen navigation.
For the internationalization we use [**I18next**](https://www.i18next.com/). Well-know library, really easy to use and 
providing nice hooks.

### redux-toolkit-wrapper
This project is a Redux-toolkit wrapper (yes... it's obvious 😅) used to write less code regarding classic CRUD operations.
Redux-toolkit provide a lot of abstraction for async operations, but we always have to create a `loading` and `error` 
state and associated reducers.
Redux-toolkit-wrapper abstract these async operations. For a classic *"fetch one user"* operation all you need is adding these files :

```javascript title="src/Store/User/FetchOne.js"
import {
  buildAsyncState, buildAsyncReducers, buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchOneUserService from '@/Services/User/FetchOne'

export default {
  initialState: buildAsyncState('fetchOne'),
  action: buildAsyncActions('user/fetchOne', fetchOneUserService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchOne.error',
    loadingKey: 'fetchOne.loading',
  }),
}

```

```javascript title="src/Store/User/index.js"
const sliceInitialState = {
  item: {},
}

export default buildSlice('user', [FetchOne], sliceInitialState).reducer
```

Next, you can use your state in your container like this:

```javascript
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text } from 'react-native'
import FetchOne from '@/Store/User/FetchOne'

const ExampleContainer = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.item)
  const fetchOneUserLoading = useSelector(state => state.user.fetchOne.loading)
  const fetchOneUserError = useSelector(state => state.user.fetchOne.error)

  useEffect(() => {
    dispatch(FetchOne.action(id))
  }, [dispatch])

  return (
    <View>
        {fetchOneUserLoading && <ActivityIndicator />}
        {fetchOneUserError ? (
          <Text style={Fonts.textRegular}>{fetchOneUserError.message}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: user.name })}
          </Text>
        )}
    </View>
  )
}

export default ExampleContainer
```

That's this simple! 🚀

:::info
For more details about redux-toolkit-wrapper jump [**here**](/docs/ReduxStore)
:::

## What's in the box? 📦

Still hesitating ? Let's make a recap and see what this beautiful boilerplate can provide you:
- No headaches! 🤒 Thanks to the **quick and easy install**, the
  **documentation** and of course the **included example**! (if you have all the installed
  [requirements](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)
  of course)
- **Typescript** 💙 / **Javascript** 💛 ? Your project, your choice!
- Never again sailing on troubled waters with **React Navigation**: THE powerful library to handle navigation 📱
- **Redux** (with redux-toolkit and redux-toolkit-wrapper 😉) : handling
  redux store has never been as easy as this!! ⚡
- DarkMode or colorful app? Give your users the power to choose!
  **Multi-theming** and **darkMode** support 🌗 (see [here](/docs/ThemesAndDarkMode))
- French kisses aren't translatable, but you can translate your app! **i18n friendly** 🌐 (see [here](/docs/AddALangTranslation))
- You don't like bug hunt? Use **Flipper debugging** 🐛 (see [here](/docs/UsingFlipper))
- Maintained by **passionate developers** ⚛️

Just Test It 🧪 !!

## Installation plugins ⚙️

Freshly in the v3.0.0 we created an installation plugin system. Of course, the first plugin added is the typescript one. 😉
We are now able to add local or npm plugins to our boilerplate in order to apply them during the installation. 
This way, we get the app template with the features we asked for.
In other words, no unwelcome pieces of code will lay in your app architecture anymore.

You got it, it's only the beginning thinking about the many plugins we could create for this project. 🤩
So wait and see what could be the next plugins...🕓🤐

## Why this boilerplate? 🐙

Before starting this project, we looked for already existing boilerplates.
We've found some, but while many were (and are always) awesome, we did not find what we were
looking for: a **light, scalable, and flexible boilerplate with a great separation of concerns**.

One of the most popular was
[Matt Mcnamee's React Native Starter Kit](https://github.com/mcnamee/react-native-starter-kit),
which unfortunately missed Redux middleware and React Navigation.

Digging deeper in the react-native boilerplates (ignoring unmaintained projects),
many popular boilerplates were too opinionated: they
included 3rd party services or very strong architecture choices
that we were not comfortable with.
To name a few:
- [Snowflake](https://github.com/bartonhammond/snowflake) ran with a Hapi Server running on Redhat OpenShift,
- [Apollo's StarterKit](https://github.com/sysgears/apollo-universal-starter-kit) is based on GraphQL using Apollo,
- [Meteor Boilerplate](https://github.com/spencercarli/react-native-meteor-boilerplate) is based on Meteor.

Finally, some did not contain the architecture we were looking for (the separation of concerns),
for example [re-start](https://github.com/react-everywhere/re-start).

One interesting exception was
[Ignite IR Boilerplate "Andross"](https://github.com/infinitered/ignite-andross), but after
consideration we decided not to use it because of the large amount of
unnecessary code/components it provided out of the box.

In 2021, some react-native boilerplates have changed. Let's see what are
the differences:

<table>
    <thead>
    <tr>
        <th align="left">Boilerplate</th>
        <th align="left">Difference from our</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td align="left">mcnamee/react-native-starter-kit</td>
        <td align="left">
            <ul>
                <li>No React Navigation (react-native-router-flux instead),</li>
                <li>No Typescript support,</li>
                <li>Don't use the react-native-cli to init</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left">bartonhammond/snowflake</td>
        <td align="left">Seems not maintained anymore (last release was in 2017) 💤</td>
    </tr>
    <tr>
        <td align="left">sysgears/apollo-universal-starter-kit</td>
        <td align="left">
            <ul>
                <li>Is based on GraphQL using Apollo,</li>
                <li>Don't use the react-native-cli to init</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left">spencercarli/react-native-meteor-boilerplate</td>
        <td align="left">Seems not maintained (no release, last commit was in 2018) 💤</td>
    </tr>
    <tr>
        <td align="left">react-everywhere/re-start</td>
        <td align="left">Seems not maintained (last release was in 2017) 💤</td>
    </tr>
    <tr>
        <td align="left">infinitered/ignite</td>
        <td align="left">
            <ul>
                <li>Specific folders for ignite-cli and boilerplate items,</li>
                <li>MobX instead of Redux,</li>
                <li>Expo ready,</li>
                <li>Reactotron (ignite product) ready,</li>
                <li>Typescript only</li>
            </ul>
        </td>
    </tr>
    </tbody>
</table>

So there is no reason to hesitate : come 🧲, test 🧪 and leave a star ⭐

Thanks for reading, See you for the next release. 🏷️
