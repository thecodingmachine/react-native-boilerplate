// import rootSaga from 'App/Sagas'
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import startup from './Startup/Reducers'

const reducers = combineReducers({
  startup,
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
  // middleware: rootSaga,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

const persistor = persistStore(store)

export { store, persistor }
