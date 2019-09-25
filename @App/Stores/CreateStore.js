import createSensitiveStorage from 'redux-persist-sensitive-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
// Uncomment to use non-sensitive persist storage.
// import storage from 'redux-persist/lib/storage';

// Using sensitive persist storage.
const storage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs',
});

const persistConfig = {
  key: 'root',
  storage: storage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    'appState',
    'appRoute',
    // 'auth',
  ],
};

export default (rootReducer, rootSaga) => {
  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();

  // Add middleware here
  const middleware = [];
  middleware.push(sagaMiddleware);
  middleware.push(thunk);

  // Debug tool integration;
  let composeEnhancers = compose;
  if (__DEV__) {
    // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
      require('remote-redux-devtools').composeWithDevTools)({
      name: Platform.OS,
    });
  }

  // Enable hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('App/Stores').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // Create the store
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return {
    persistor: persistStore(store),
    store,
  };
};
