import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import createDebugger from 'redux-flipper'
import { configureStore } from '@reduxjs/toolkit'

import startup from './Startup/Reducers'
import user from './User/Reducers'

const reducers = combineReducers({
  startup,
  user,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createDebugger()),
})

const persistor = persistStore(store)

export { store, persistor }
