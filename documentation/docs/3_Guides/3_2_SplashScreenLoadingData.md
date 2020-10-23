---
slug: /SplashScreenLoadingData
title: Splash screen & loading data
---

In many applications, you need to load data from API before displaying any content.
To do that, we built a solid navigation based on a splash screen to load data before the content shows, and [inline require](https://reactnative.dev/docs/ram-bundles-inline-requires#inline-requires) to improve performance.

---

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

  const applicationIsLoading = useSelector((state) => state.startup.loading)

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

So the root navigator is a stack with two screens : 
 - the splash screen (`IndexStartupContainer`),
 - a second navigator (`MainNavigator`). 
 
The main goal of the `ApplicationNavigator` is to only have one screen (the `IndexStartupContainer`) to load. 
And, when the application finish loading, then fetch and display the `MainNavigator`.
In other words, when `ApplicationNavigator` is mounted, it only can display the `IndexStartupContainer` because the `MainNavigator` isn't loaded and imported yet.
In the `StartupContainer`, the redux action which is used to load data on init application is trigger and when the action is finish, the state `state.startup.initialize.loading` turns `true`.
when this state is true, in the useEffect the `MainNavigator` navigator is imported , the navigation navigate and reset to a screen of the `MainNavigator`.

To conclude, all new screens have to be added to `MainNavigator`. The `ApplicationNavigator` increase startup performance thanks to inline require and provides a splash screen to load your data.

## How to load data before app open ❓

To have a great separation of concerns, all API call are make into Services. In the above section, it said that in `IndexStartupContainer`, a redux action is triggered. This action is `InitializeStartupAction` :

```javascript
useEffect(() => {
    dispatch(InitStartup.action())
}, [dispatch])
```

In redux, triggering an action lead to an associated reducer and in most cases the action pass trough a middleware.
All the logic can be found at `Stores/Startup/Init.js`. 

```javascript
import { buildAction, buildReducers } from '@/Store/builder'
import FetchOne from '@/Store/User/FetchOne'

export default {
  initialState: { loading: false, error: null },
  action: buildAction('startup/init', async (args, { dispatch }) => {
    // Here we load the user 1 for example, but you can for example load the connected user
    await dispatch(FetchOne.action(1))
  }),
  reducers: buildReducers({ itemKey: null }), // We do not want to modify some item by default
}
```

All stores are based on redux-toolkit to simplify the process of API calls by using the `createAsyncThunk` function (hidden by the `buildAction` action which is a store builder function).
So, to load data on splash screen you just have to add dispatched action in the buildAction.
