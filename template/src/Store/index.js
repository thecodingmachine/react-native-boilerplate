import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import createDebugger from 'redux-flipper'
import { configureStore } from '@reduxjs/toolkit'

import startup from './Startup/Reducers'
import example from './Example/Reducers'

const reducers = combineReducers({
  startup,
  example,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * whitelist state that we need/want to persist
   */
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
