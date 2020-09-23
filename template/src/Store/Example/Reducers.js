import { INITIAL_STATE } from './InitialState'
import { createReducer } from '@reduxjs/toolkit'
import { fetchUser } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userLoading: true,
  userError: null,
})

export const fetchUserSuccess = (state, { payload }) => ({
  ...state,
  user: payload,
  userLoading: false,
  userError: false,
})

export const fetchUserError = (state, { errorMessage }) => ({
  ...state,
  userLoading: true,
  userError: errorMessage,
})

/**
 * @see https://redux-toolkit.js.org/api/createReducer
 */
export default createReducer(INITIAL_STATE, {
  [fetchUser.pending]: fetchUserLoading,
  [fetchUser.fulfilled]: fetchUserSuccess,
  [fetchUser.rejected]: fetchUserError,
})
