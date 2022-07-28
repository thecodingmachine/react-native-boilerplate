---
slug: /Migrating
title: Migrating from V1 👴
---

For the V2, our code of conduct is "keep the code simple and concise" 🤓

## Redux

After the redux-toolkit release, and understood that we don't need the **power**, and the **large among of functionalities** that **Redux Saga** provides,
we conclude that, because we want simple and concise code, we will now use redux-toolkit.

🚨️ **We decided to remove Redux Saga from the boilerplate not because this isn't a good library or a good pattern but for less complexity and use an official and light dependency like redux-toolkit.** 🚨️

|   Libraries           |   V1   | V2     |   Goal                                        |
| :-------------------- | :----: | :----: | :---------------------------------------------|
| redux                 |   ✅   |  ✅   | State management                              |
| redux saga            |   ✅   |  ❌   | Redux middleware                              |
| redux sauce           |   ✅   |  ❌   | Simplify redux syntax                         |
| redux-toolkit         |   ❌   |  ✅   | New redux library with some function helpers  |
| redux-toolkit-wrapper |   ❌   |  ✅   | Easier CRUD redux-toolkit function helpers    |


### Migration guide

This is not really a migration guide because there is so much breaking changes between the two versions and mostly because of the update of all dependencies.
So, in next sections, there is a structure and code comparison.

### Architecture

First, a quick comparison on the tree files. On V1 the state management logic was divide in `Services`, `Sagas` and `Store`.
In V2 it is divide in `Service` and `Store`. In V2, all directory as an `index.js` file for better imports and a homogenization of the code.

```jsx title="V1"
Services
    └- UserService.js
Sagas
    ├- UserSaga.js
    ├- StartupSaga.js
    └- index.js
Store
    ├- Startup
    │   └- Actions.js
    ├- Theme...
    ├- User
    │   ├- Actions.js
    │   ├- InitialSate.js
    │   ├- Reducers.js
    │   └- Selectors.js
    ├- CreateStore.js
    └- index.js
```

```jsx title="V2"
Services
    ├- User
    │   ├- FetchOne.js
    │   └- index.js
    └- index.js
Store
    ├- Startup
    │   ├- index.js
    │   └- Init.js
    ├- Theme...
    ├- User
    │   ├- FetchOne.js
    │   └- index.js
    └- index.js
```

### Configure store

Thanks to a refactoring and redux-toolkit, the store configuration is now in one file easy to understand and flipper debugging ready.

#### V1

```jsx title="V1  App/Stores/CreateStore.js"
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [
    // 'auth',
  ],
}

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
```
```jsx title="V1  App/Stores/index.js"
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
```

#### V2

```jsx title="V2 src/Store/index.js"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'

import startup from './Startup'
import user from './User'
import theme from './Theme'

const reducers = combineReducers({
  startup,
  user,
  theme,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  },
})

const persistor = persistStore(store)

export { store, persistor }
```

### Example feature

Now, a comparison with a feature example present in the V1 and in V2

#### V1

##### Store
In the boilerplate V1, the creation of the Store goes like this :

- init the state
```jsx title="App/Stores/User/InitialState.js"
export const INITIAL_STATE = {
  user: {},
  userIsLoading: false,
  userErrorMessage: null,
}
```

- creation of actions

```jsx title="App/Stores/User/Actions.js"
import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchUser: null,
  fetchUserLoading: null,
  fetchUserSuccess: ['user'],
  fetchUserFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators
```

- creation of associated reducers

```jsx title="App/Stores/User/Reducers.js"
import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
```

##### Saga
In the boilerplate V1, the creation of the Saga goes like this :

- creation of the saga
```jsx title="App/Sagas/UserSaga.js"
import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { userService } from 'App/Services/UserService'

export function* fetchUser() {
  yield put(ExampleActions.fetchUserLoading())

  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(ExampleActions.fetchUserSuccess(user))
  } else {
    yield put(
      ExampleActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}
```

- listen the saga
```jsx title="App/Sagas/index.js"
import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ExampleTypes.FETCH_USER, fetchUser), // Add this line
  ])
}
```


##### Service
In the boilerplate V1, the creation of the Service goes like this :

```jsx title="App/Services/UserService.js"
import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const userApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser() {
  const number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

export const userService = {
  fetchUser,
}
```

#### V2

##### Store
In the boilerplate V2 action, initial state and reducers goes like this:

```jsx title="src/Store/User/FetchOne.js"
import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
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

```jsx title="src/Store/User/index.js"
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from './FetchOne'

const sliceInitialState = { item: {} }

export default buildSlice('user', [FetchOne], sliceInitialState).reducer
```

##### Service

In the boilerplate V2, the creation of the Service goes like this :

```javascript
import api, { handleError } from '@/Services'

export default async (userId) => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  const response = await api.get(`users/${userId}`)
  return response.data
}
```

## I18next
This is a new feature of the boilerplate V2, now it handles internationalization thanks to [i18next](https://www.i18next.com/).
See the documentation about it [here](../3_Guides/3_5_AddALangTranslation.md)

## Flipper
This is a new feature of the boilerplate V2, Flipper is now fully integrate with the redux debugger plugin.
See the documentation about it [here](../3_Guides/3_6_UsingFlipper.md)
