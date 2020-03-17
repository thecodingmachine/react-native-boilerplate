/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer} from "@reduxjs/toolkit";
import { ExampleTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { payload : { user } }) => ({
  ...state,
  user: user,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { payload : { errorMessage } }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

/**
 * @see https://redux-toolkit.js.org/api/createReducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
