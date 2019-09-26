/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { AppStateTypes } from './Actions';

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AppStateTypes.ON_VERSION_CHANGE]: (
    state,
    { appVersion, buildVersion, bundleIdentifier },
  ) => ({
    ...state,
    currentVersion: {
      appVersion,
      buildVersion,
      bundleIdentifier,
    },
  }),
  [AppStateTypes.ON_LOADING]: (state, { isLoading }) => ({
    ...state,
    isLoading,
  }),
  [AppStateTypes.ON_STATE_CHANGE]: (state, { currentState }) => ({
    ...state,
    currentState,
  }),
  [AppStateTypes.ON_LOCALE_CHANGE]: (state, { currentLocales, currentTimeZone }) => ({
    ...state,
    currentLocales,
    currentTimeZone,
  }),
});
