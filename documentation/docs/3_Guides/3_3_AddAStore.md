---
slug: /AddAStore
title: Add a store
---

🚧 It's a Work In Progress section 🚧

## The Architecture
The root file include the configuration of redux. The two important const are `reducers` and `persistConfig`

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

`whitelist` in presistConfig could includes store to persist

`reducers` should includes all modules

## Modules

A module is a group of action, state and reducers for a same domain. For example, in the boilerplate there are two modules : `Startup` and `User`
in each module there is a `index.js` file which combines each store feature (`fetchOne.js` for the User modules) . We decide to separate each features in one file in order to avoid very big incomprehensible files.
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

In the root file, all features are merge in a slice where states, actions, and reducers are merged and place in a module.

```javascript
const moduleInitialState = {
  item: {},
}

export default buildSlice('user', [FetchOne], moduleInitialState).reducer
```

## Redux-toolkit-wrapper
🚧 It's a Work In Progress section 🚧
