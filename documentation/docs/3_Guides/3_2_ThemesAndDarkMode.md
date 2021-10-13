---
slug: /ThemesAndDarkMode
title: Themes and darkMode 🌗
---

This boilerplate handle dark themes and theme overrides

---

## What is the default configuration ❓
By default, the boilerplate comes with a `default` theme and a `default dark` theme. 
The default theme is build around the different files at the root of `src/Theme`, by default:
 - Common.js
 - Fonts.js
 - Gutters.js
 - Images.js
 - Layout.js
 - Variables.js

the `default dark` theme is located in `src/Theme/themes/default_dark`.


The Boilerplate Theme system is based on layers overriding.  
In other words, the `default` theme is the "base theme" of the application. 
On the top of it, if the `darkMode` is on, the base theme is overrided by style classes or variables of the `default dark` theme.

Moreover, if we add a new theme into `src/Theme/themes`, for example : `custom`.
The theme system will override the `default` theme classes by the ones of `custom` theme. 
If the dark mode is activated, the theme system will try to get a `custom_dark` directory if exists, and override the theme too.

So, the merge of style and variables classes look like this :
```
default theme <- custom theme <- custom dark theme (if darkMode = true and theme exist)
``` 

The name of the current theme and if the dark mode is on are stored in redux and persisted in the device. At a given point of the time the state can look like this :
```
{
   theme: 'custom',
   darkMode: true, // can be null|true|false
}
```

The `darkMode` values can be :
 - null (by default) : the darkMode is automatically set depending of the scheme of the device
 - true : force the theme to be dark
 - false : force the theme to be light

There are two Actions availabled to set a new theme :
 - `DefaultTheme` allow to set the theme from parameters only if the `state.theme` is null (used in the initialisation of the app to set the default theme if this is the first time the app is openned or if the data were cleared)
 - `ChangeTheme` allow to set a given theme (see example bellow)

## Create a new theme 🧩

### Basic example
To create a new theme, create a new directory into `src/Theme/themes` with the name of your theme. For example `custom`.
Add files with the same names of the default theme files. 
For example, if `custom` theme has to override the primary color, simply create a new file called `Variables` into `src/Theme/themes/custom` with the following :

```javascript title="src/Theme/themes/custom/Variables.js"
const Colors = {
  primary: 'yellow',
}

export default {
  Colors,
}
``` 

🚨 After adding a new override file, don't forget to export it into the root file of the `custom` directory with the following :
```javascript title="src/Theme/themes/custom/index.js"
export { default as Variables } from './Variables'
```

🚨 Each time a new theme is create, import it into the root of themes directory with the name of the theme :
```javascript title="src/Theme/themes/index.js"
import * as default_dark from './default_dark'
import * as custom from './custom' // <-- add this line

export default {
  default_dark,
  custom, // <-- add this line
}
```

That's it ! now you can use the `ChangeTheme` action to set the theme in a container for example:

```jsx title="src/Containers/Example/index.js"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Button } from 'react-native'
import { useTheme } from '@/Hooks'
import { changeTheme } from '@/Store/Theme'

const IndexExampleContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Button onPress={() => changeTheme({ theme: 'custom' })} title="set theme custom" />
        <Button onPress={() => changeTheme({ theme: 'default' })} title="set theme default" />
      </View>
    </View>
  )
}
export default IndexExampleContainer
```

### Extended example with dark theme
After adding a new theme, to handle the dark theme of it, the same way the new theme was created, the dark will be. 😎  
So, the first step is to create the `src/Theme/themes/custom_dark` directory. This theme will override the default and the custom theme by :
 - adding a new color
 - override the React Navigation primary color
 - apply the new color by adding a border on the `backgroundPrimary` class.

Let's create the following files :

```jsx title="src/Theme/themes/custom_dark/Variables.js"
const Colors = {
  orange: 'orange', // adding a new color ✅
}

const NavigationColors = {
  primary: 'red', // override the React Navigation primary color ✅
}

export default {
  Colors,
  NavigationColors,
}

```

And, 

```jsx title="src/Theme/themes/custom_dark/Common.js"
import { StyleSheet } from 'react-native'

export default function ({ Colors }) {
  return StyleSheet.create({
    backgroundPrimary: {
      backgroundColor: Colors.primary,
      borderColor: Colors.orange, // apply the new color by adding a border on the `backgroundPrimary` class ✅
    },
  })
}
```

🚨 After adding a new override file, don't forget to export it into the root file of the `custom_dark` directory with the following :
```jsx title="src/Theme/themes/custom_dark/index.js"
export { default as Variables } from './Variables'
export { default as Common } from './Common'
```

🚨 Each time a new theme is create, import it into the root of themes directory with the name of the theme :
```jsx title="src/Theme/themes/index.js"
import * as default_dark from './default_dark'
import * as custom from './custom'
import * as custom_dark from './custom_dark' // <- add this line

export default {
  default_dark,
  custom,
  custom_dark, // <- add this line
}
```

You can add extra buttons to the `ExampleContainer` below to test it :

```jsx title="src/Containers/Example/index.js"
...
const ExampleContainer = () => {
  ...
  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Button onPress={() => changeTheme({ theme: 'custom' })} title="set theme custom" />
        <Button onPress={() => changeTheme({ theme: 'default' })} title="set theme default" />
        <Button onPress={() => changeTheme({ darkMode: null })} title="Dark auto" /> {/* <- add this line */}
        <Button onPress={() => changeTheme({ darkMode: true })} title="set to Dark" /> {/* <- add this line */}
        <Button onPress={() => changeTheme({ darkMode: false })} title="set to Light" /> {/* <- add this line */}
      </View>
    </View>
  )
}
```

That's it ! you can now enjoy multi theming and dark mode ! 👏 
