import { INITIAL_STATE } from './InitialState'
import { createReducer } from '@reduxjs/toolkit'
import { StartupTypes } from './Actions'

export const initApplicationLoading = (state) => ({
  ...state,
  applicationIsReady: false,
  appHandleError: false,
})

export const initApplicationSuccess = (state) => ({
  ...state,
  applicationIsReady: true,
  appHandleError: false,
})

export const initApplicationError = (state, { errorMessage }) => ({
  ...state,
  applicationIsReady: true,
  appHandleError: errorMessage,
})

/**
 * @see https://redux-toolkit.js.org/api/createReducer
 */
export default createReducer(INITIAL_STATE, {
  [StartupTypes.INIT_APPLICATION_LOADING]: initApplicationLoading,
  [StartupTypes.INIT_APPLICATION_SUCCESS]: initApplicationSuccess,
  [StartupTypes.INIT_APPLICATION_ERROR]: initApplicationError,
})
