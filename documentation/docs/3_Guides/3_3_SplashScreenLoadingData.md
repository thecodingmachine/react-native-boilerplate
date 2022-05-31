---
slug: /SplashScreenLoadingData
title: Splash screen & loading data 💾
---

In many applications, you need to load data from API before displaying any content.
To do that, we built a solid navigation based on a splash screen to load data before the content shows.

---

## How the navigation is build ❓
The answer is :

> Like it's recommended in the React Navigation V5 documentation 🤓

Like everywhere else, the entry point of the navigation is in the root file :

```jsx title="src/App.js"
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigator />
    </PersistGate>
  </Provider>
)
```

Nothing new into the `Navigators/Application` component too :

```jsx
const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
```
It just contains some requirement like the `SafeAreaView` for ios, 
the `NavigationContainer` bound with a ref to use utils contained in `Navigators/utils` 

## How to load data before app open ❓

In `StartupContainer`, the `init` function is where you can create asynchronous tasks like fetching data 

```javascript
const init = async () => {
  await setDefaultTheme({ theme: 'default', darkMode: null })
  // Here you can add asynchronous/synchronous tasks
  navigateAndSimpleReset('Main')
}
```

This function is called when the StartupContainer is mounted.
