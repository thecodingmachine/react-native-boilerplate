---
slug: /ReduxStore
title: Redux store
---

🚧 It's a Work In Progress section 🚧

## Architecture
The root file include configuration of redux. The two main constants are `reducers` and `persistConfig`

```javascript
const reducers = combineReducers({
  startup,
  user,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
}
```

 - `whitelist` includes state to persist (with `redux-persist`)
 - `reducers` includes all `reducer modules`

## Slices

A slice is a group of actions, states and reducers for a same module. For example, in this boilerplate, there are two slices : `Startup` and `User`.  
In each slice, an `index.js` file which combines each store's feature (`fetchOne.js` for the `User` slice example).   
We've decided to separate each feature in one file in order to avoid very large incomprehensible files.
So each feature includes its scoped state, actions and related reducers. 

```javascript
export default {
  initialState: {
    // Optionally, you can scope variables
    fetchOne: { loading: false, error: null },
  },
  action: buildAction('user/fetchOne', fetchOneUserService),
  reducers: buildReducers({
    errorKey: 'fetchOne.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchOne.loading',
  }),
}
```

In the `index.js` file, all features are merged in a slice where states, actions, and reducers are merged and placed in a slice.

```javascript
const moduleInitialState = {
  item: {},
}

export default buildSlice('user', [FetchOne], moduleInitialState).reducer
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
`Actions` will be : `user/fetchOne/pending`, `user/fetchOne/fulfilled`, `user/fetchOne/rejected`.  
For each action, a reducer is associated.

## Redux-toolkit-wrapper
The boilerplate includes a [wrapper of redux-toolkit](https://github.com/thecodingmachine/redux-toolkit-wrapper) to make it easier to use. It provides three helpers.
If your are not familiar with redux-toolkit, please have a look at their [documentation](https://redux-toolkit.js.org/api/configureStore).

### buildAction
`buildAction` is a wrapper of [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk).

|       Parameters      |      Description                            |   Type    |   Default  |
| :-------------------- | :------------------------------------------ | :-------- | :--------- |
| actionName            | the name of the action                      | string    | undefined  |
| action                | function to launch and await                | function  | () => {}   |

### buildReducers
`buildReducers` create default reducers based on CRUD logic. It creates three functions : pending, fulfilled and rejected.
- `pending` set the `loadingKey` to `true` and the `errorKey` to `null`.
- `fulfilled` replaces `itemKey` with the payload (if `itemKey` is not `null`) and the `loadingKey` to `false`
- `pending` set the `loadingKey` to `false` and the `errorKey` to payload.


|   Parameters   |      Description               |   Type    |   Default |
| :------------- | :----------------------------- | :-------- | :-------- |
| itemKey        | the key of the item state      | string    | 'item'    |
| loadingKey     | the key of the loading state   | string    | 'loading' |
| errorKey       | the key of the error state     | string    | 'error'   |

### buildSlice
`buildSlice` is a wrapper of [`createSlice`](https://redux-toolkit.js.org/api/createSlice).


|       Parameters      |      Description                              |   Type    |   Default |
| :-------------------- | :-------------------------------------------- | :-------- | :-------- |
| name                  | the name of the slice                         | string    | undefined |
| modules               | array of all modules                          | array     | []        |
| moduleInitialState    | initial state for all modules of the slice    | object    | {}        |
