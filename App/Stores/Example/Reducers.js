/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'
import { List } from 'immutable'

export const fetchUserLoading = (state) =>
  state.merge({
    userIsLoading: true,
    userErrorMessage: '',
  })

export const fetchUserSuccess = (state, { user }) =>
  state.merge({
    user: user,
    userIsLoading: false,
    userErrorMessage: null,
  })

export const fetchUserFailure = (state, { errorMessage }) =>
  state.merge({
    user: List(),
    userIsLoading: false,
    userErrorMessage: errorMessage,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,
})
