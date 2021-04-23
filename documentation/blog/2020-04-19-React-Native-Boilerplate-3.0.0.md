---
title: React Native Boilerplate 3.0.0
author: Jérémy Dollé
author_title: React Native Boilerplate contributor
author_url: https://github.com/JeremyDolle
author_image_url: https://avatars.githubusercontent.com/u/15814069?v=4
description: What's in the box? 📦
image: https://i.imgur.com/mErPwqL.png
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
Redux-toolkit-wrapper abstract this async operations. For a classic *"fetch one user"* operation all you need to add these files :

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

After that, you can use you state in you container like this :

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

## What is included? 📦

Still hesitating? Let's make a recap and see what this beautiful boilerplate can provide to you :
- No headache! 🤒 It's really easy to install and use 
  (if you have all the [requirements](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies) 
  installed of course)
- Typescript 💙 / Javascript 💛? You choose!!
- React Navigation : THE powerful library to handle navigation 📱
- Redux (with redux-toolkit and redux-toolkit-wrapper 😉) : handling redux store has never been as easy as this!! ⚡
- Multi-theming and darkMode friendly 🌗 (see [here](/docs/ThemesAndDarkMode))
- i18n friendly 🌐 (see [here](/docs/AddALangTranslation))
- Flipper debugger ready 🐛 (see [here](/docs/UsingFlipper))
- Maintained by passionate developers ⚛️
- Full online documentation : https://thecodingmachine.github.io/react-native-boilerplate/

just test it 🧪!!

## Installation plugins ⚙️

In the v3.0.0 we add an installation plugins system on our boilerplate. The first plugin is the typescript one of course. 
So now, we are able to add local or npm plugins on our boilerplate to apply them during the installation, without any 
unwelcome piece of code in the final app architecture. So it's invisible for the final user but hide a lot of future creation!! 🤩
So wait and see what could be the next plugins...🕓🤐

## What is different from other? 🪟

We looked into existing boilerplates before starting this project, and while many of them are awesome, we did not find 
what we were looking for.

One of the most popular was [Matt Mcnamee's React Native Starter Kit](https://github.com/mcnamee/react-native-starter-kit),
which unfortunately missed Redux Saga (used in the V1.0.0 of this project).

When we looked at the rest (and ignore unmaintained projects), many popular boilerplates were too opinionated: they 
included 3rd party services or very strong architecture choices that we are not comfortable with. 
To name a few: 
- [Snowflake](https://github.com/bartonhammond/snowflake) runs with a Hapi Server running on Redhat OpenShift, 
- [Apollo's StarterKit](https://github.com/sysgears/apollo-universal-starter-kit) is targeted at GraphQL using Apollo,
- [Meteor Boilerplate](https://github.com/spencercarli/react-native-meteor-boilerplate) targets Meteor…

Finally, some did not contain the architecture we are looking for (the separation of concerns with Redux, Sagas, etc.), 
for example [re-start](https://github.com/react-everywhere/re-start).

One interesting exception was [Ignite IR Boilerplate "Andross"](https://github.com/infinitered/ignite-andross), but after
consideration we decided not to use it because of the large amount of unnecessary code/components it provided.

In 2021, some react-native boilerplates have change. Let's see what are the difference

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
                <li>No react Navigation (react-native-router-flux instead),</li>
                <li>No typescript support,</li>
                <li>Don't use the react-native-cli to init</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left">bartonhammond/snowflake</td>
        <td align="left">seems not maintain (last release in 2017) 💤</td>
    </tr>
    <tr>
        <td align="left">sysgears/apollo-universal-starter-kit</td>
        <td align="left">
            <ul>
                <li>Is targeted at GraphQL using Apollo,</li>
                <li>Don't use the react-native-cli to init</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td align="left">spencercarli/react-native-meteor-boilerplate</td>
        <td align="left">seems not maintain (no release, last commit in 2018) 💤</td>
    </tr>
    <tr>
        <td align="left">react-everywhere/re-start</td>
        <td align="left">seems not maintain (last release in 2017) 💤</td>
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
