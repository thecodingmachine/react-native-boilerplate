---
slug: /ReduxStore
title: Redux store 🗃️
---

<div align="center">
    <img width="100%" src={require('../assets/RTW.png').default} />
</div>

The store section is now really easy to use thanks to [Redux-tookit](https://redux-toolkit.js.org/) and our [Redux-tookit-wrapper](https://github.com/thecodingmachine/redux-toolkit-wrapper).

## Architecture
The root file include configuration of redux. The two main constants are `reducers` and `persistConfig`

```javascript
const reducers = combineReducers({
  startup,
  user,
  theme
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}
```

 - `whitelist` includes state to persist (with `redux-persist`)
 - `reducers` includes all `reducer modules`

## Slices

A slice is a group of actions, states and reducers for a same domain. For example, in this boilerplate, there are tree slices : `Startup` `Theme` and `User`.  
In each slice, an `index.js` file which combines each store's feature/module (`fetchOne.js` for the `User` slice example).   
We've decided to separate each module in one file in order to avoid very large incomprehensible files.
So each of them includes its scoped state, his only action and related reducers. 

```javascript
export default {
  initialState: buildAsyncState('fetchOne'),
  action: buildAsyncActions('user/fetchOne', fetchOneUserService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchOne.error',
    loadingKey: 'fetchOne.loading',
  }),
}
```

In the `index.js` file, all modules are merged in a slice where states, actions, and reducers are merged and placed into it.

```javascript
const sliceInitialState = {
  item: {},
}

export default buildSlice('user', [FetchOne], sliceInitialState).reducer
```

For the `User` example, the below state will be created :
```
{
  user: {
    item: {},
    fetchOne: {
      loading: false,
      error: null,
    }   
 }
}
```

Actions will be : `user/fetchOne/pending`, `user/fetchOne/fulfilled`, `user/fetchOne/rejected` prefixed and wrapped by the `user/fetchOne` action  
For each wrapped action, a reducer is associated.

## Redux-toolkit-wrapper
The boilerplate includes a [wrapper of redux-toolkit](https://github.com/thecodingmachine/redux-toolkit-wrapper) to make it easier to use. It provides three helpers.
If your are not familiar with redux-toolkit, please have a look at their [documentation](https://redux-toolkit.js.org/api/configureStore).

### buildAsyncState
`buildAsyncState` create a loading and error state. You can scope it in a key.

|       Parameters      |      Description                            |   Type    |   Default  |
| :-------------------- | :------------------------------------------ | :-------- | :--------- |
| scope                 | name of the scope                           | string    | undefined  |

#### Example
```javascript
 buildAsyncState('fetchOne')
...
 buildAsyncState()
```

Will generate:
```
  {
    fetchOne: {
      loading: false, 
      error: null,
    }
  } 
...
  {
    loading: false, 
    error: null,
  } 
```

### buildAsyncActions
`buildAsyncActions` is a wrapper of [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk).

|       Parameters      |      Description                            |   Type    |   Default  |
| :-------------------- | :------------------------------------------ | :-------- | :--------- |
| actionName            | the name of the action                      | string    | undefined  |
| action                | function to launch and await                | function  | () => {}   |

#### Example
```javascript
   buildAsyncActions('user/fetchOne', fetchOneUserService)
```

Where fetchOneUserService is an async function. 
So, when the fetchOneUserService is launched the action `user/fetchOne/pending` is dispatched.
When the fetchOneUserService is endded the action `user/fetchOne/fulfilled` is dispatched.
When the fetchOneUserService throw an error the action `user/fetchOne/rejected` is dispatched.

### buildAsyncReducers
`buildAsyncReducers` create default reducers based on CRUD logic. It creates three functions : pending, fulfilled and rejected.
- `pending` set the `loadingKey` to `true` and the `errorKey` to `null`.
- `fulfilled` replaces `itemKey` with the payload (if `itemKey` is not `null`) and the `loadingKey` to `false`
- `rejected` set the `loadingKey` to `false` and the `errorKey` to payload.


|   Parameters   |      Description               |   Type    |   Default |
| :------------- | :----------------------------- | :-------- | :-------- |
| itemKey        | the key of the item state      | string    | 'item'    |
| loadingKey     | the key of the loading state   | string    | 'loading' |
| errorKey       | the key of the error state     | string    | 'error'   |

#### Example
```javascript
buildAsyncReducers({
    errorKey: 'fetchOne.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchOne.loading',
})
```

### buildSlice
`buildSlice` is a wrapper of [`createSlice`](https://redux-toolkit.js.org/api/createSlice).

|       Parameters      |      Description                              |   Type    |   Default        |
| :-------------------- | :-------------------------------------------- | :-------- | :--------------- |
| name                  | the name of the slice                         | string    | undefined        |
| modules               | array of all modules                          | array     | []               |
| sliceInitialState     | initial state for all modules of the slice    | object    | {}               |

#### Example
```javascript
buildSlice('user', [FetchOne], { item: {} } ).reducer
```

:::note
For async function you have to use `buildAsyncState`, `buildAsyncActions` and `buildAsyncReducers` from @thecodingmachine/redux-toolkit-wrapper.
For no async function you have to use `createAction` from redux-toolkit. And follow the example of the slice `Theme`
:::
