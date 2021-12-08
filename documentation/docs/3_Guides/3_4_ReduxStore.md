---
slug: /ReduxStore
title: Redux store 🗃️
---

This boilerplate use [`Redux-Toolkit`](https://redux-toolkit.js.org/introduction/getting-started) 
and [`RTKQuery`](https://redux-toolkit.js.org/rtk-query/overview) 
to deal with business side. 
We use them because they are often used by the community, very trendy and easy to debug.

[`RTKQuery`](https://redux-toolkit.js.org/rtk-query/overview) is a powerful data fetching and caching tool.
**So we using it for asynchronous api calls.** 

[`Redux-Toolkit`](https://redux-toolkit.js.org/introduction/getting-started) is intended to be the standard way to write Redux logic.
**So we using it for synchronous operations.**

## How is it used in this boilerplate ❓

**For the RTKQuery side**, all is located in `Services`. 
You will find `api.js` file that contains the declaration of the 
[fetchBaseQuery](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery)
customized with an interceptor
and the [createApi](https://redux-toolkit.js.org/rtk-query/api/createApi)
with the `fetchBaseQuery` and empty endpoints.

```javascript title="src/Service/api.js"
    import { Config } from '@/Config'
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
    
    const baseQuery = fetchBaseQuery({ baseUrl: Config.API_URL })
    
    const baseQueryWithInterceptor = async (args, api, extraOptions) => {
      let result = await baseQuery(args, api, extraOptions)
      if (result.error && result.error.status === 401) {
        // here you can deal with 401 error
      }
      return result
    }
    
    export const api = createApi({
      baseQuery: baseQueryWithInterceptor,
      endpoints: () => ({}),
    })
```

Next to the `Services/api.js` file you have a `modules` folder. Each module 
corresponds to an entity type and will inject endpoints 
into the exported `api` const of `Services/api.js`

For example , here are the user services : 
```javascript title="src/Service/modules/users/index.js"
    import { api } from '../../api'
    import fetchOne from './fetchOne'
    
    export const userApi = api.injectEndpoints({
      endpoints: build => ({
        fetchOne: fetchOne(build), // Code split of the service api call
        // You can add endpoints here
      }),
      overrideExisting: false,
    })
    
    export const { useLazyFetchOneQuery } = userApi
    //                    |-- generated query which will be used in Containers
```
```javascript title="src/Service/modules/users/fetchOne.js"
    export default build => build.query({
        query: id => `/users/${id}`,
    })
```

Then in your containers it could be use like this :

```javascript
import React, { useState, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import { useLazyFetchOneQuery } from '@/Services/modules/users' // Import the query

const ExampleContainer = () => {
  const [userId, setUserId] = useState('9')
  
  const [
    fetchOne,
    { data, isSuccess, isLoading, isFetching, error },
  ] = useLazyFetchOneQuery() // use the query

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  return (
    <View>
      <TextInput
        onChangeText={setUserId}
        editable={!isLoading}
        keyboardType={'number-pad'}
        maxLength={1}
        value={userId}
      />
    </View>
  )
}

export default ExampleContainer
```

The RTKQuery is linked to the redux store in order to make it work and be debuggable with Flipper.

:::info
See the [API usage](https://redux-toolkit.js.org/rtk-query/overview) for more information
:::


**On the redux-toolkit side**, we use it to configure all the store and save the default theme of the application.

For example, the storing of the favorite theme of the user
```javascript
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'theme',
  initialState: { theme: null, darkMode: null },
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode
      }
    },
    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
      if (!state.theme) {
        state.theme = theme
        state.darkMode = darkMode
      }
    },
  },
})

export const { changeTheme, setDefaultTheme } = slice.actions
//                  |-------------|-- Generated actions which will be used in Containers

export default slice.reducer
```

:::info
See the [API usage](https://redux-toolkit.js.org/usage/usage-guide) for more information
:::
