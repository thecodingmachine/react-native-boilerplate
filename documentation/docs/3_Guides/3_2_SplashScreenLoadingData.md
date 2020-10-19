---
slug: /SplashScreenLoadingData
title: Splash screen & loading data
---


In many applications, you need to load data from API before displaying any content.
To do that, we built a solid navigation based on a splash screen to load data before the content shows, and [inline require](https://reactnative.dev/docs/ram-bundles-inline-requires#inline-requires) to improve performance.

## How the navigation is build ❓
The answer is :

> Like it's recommended in the React Navigation V5 documentation 🤓

Like everywhere else, the entry point of the navigation is in the root file `src/App.js` :

```jsx
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView style={Layout.fill}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <ApplicationNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </PersistGate>
  </Provider>
)
```

What is new here is into the `ApplicationNavigator` component :

```jsx
const Stack = createStackNavigator()

let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)

  const applicationIsLoading = useSelector(
    (state) => state.startup.initialize.loading,
  )

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Startup" component={IndexStartupContainer} />
      {isApplicationLoaded && (
        <Stack.Screen name="Main" component={MainNavigator} />
      )}
    </Stack.Navigator>
  )
}
```

So the root navigator is a stack with two screens : the splash screen (Startup) and a second navigator (Main). 
The main goal of the ApplicationNavigator is to, by default, just have one screen (the Startup) and when the application finish loading data then fetch and display the `Main` Navigator.
So when ApplicationNavigator is mounted, he only can display the Startup screen because the Main screen isn't loaded and imported nether.
in the StartupContainer, the redux action which is used to load data on init application is trigger and when the action is finish, the state `state.startup.initialize.loading` turns `true`.
when this state is true, the useEffect just above import the Main navigator, the navigation navigate and reset to a screen of the MainNavigator.

## How to make heavy loading before app open

That why we decided to create the navigation architecture saw before to expose a SplashScreen which will be in charge of loading extra data.
So what happen in the `Containers/Startup` file and how to add api call to load data at startup ?

First in `Containers/Startup` the useEffect Hook launches the redux action to fetch startup data:

```javascript
useEffect(() => {
  dispatch(InitializeStartupAction())
}, [dispatch])
```

So as you probably know, a redux action is follow by an associated reducer.
You can find the process at `Stores/Startup/Initialize.js`.
We use redux-toolkit to simplify the process of API calls by using the `createAsyncThunk` function hidden by the `buildAction` action

```javascript
export const InitializeStartupAction = buildAction(
  name,
  initializeStartupService,
)
```

initializeStartupService is the Service launched when the action is trigger.
`src/Services/Startup/Initialize.js`

```javascript
export default async () => {
  //Simulation of an async function delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 3000)
  })
}
```

So you can replace the fake call simulated with the Promise by real api calls like this:

```javascript
export default async () => {
  const response = await api.get(`users/${userId}`)
    return response.data
}
```
