import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';

import { reducer as AppStateReducer } from './AppState/Reducers';
import { reducer as AppRouteReducer } from './AppRoute/Reducers';
import { reducer as ExampleReducer } from './Example/Reducers';

export default () => {
  const rootReducer = combineReducers({
    // do not modify appState/appRoute
    appState: AppStateReducer,
    appRoute: AppRouteReducer,
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    // feel free to remove or change this.
    example: ExampleReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
