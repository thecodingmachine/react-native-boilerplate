import { createReducer } from '@reduxjs/toolkit'

import initialState from './InitialState'
import { FetchOneUserAction } from './Actions'

const fetchOnePending = (state) => {
  state.item = initialState.item
  state.userLoading = true
  state.fetchOneError = null
}

const fetchOneFulfilled = (state, { payload }) => {
  state.item = payload
  state.fetchOneLoading = false
  state.fetchOneError = null
}

const fetchOneRejected = (state, { payload }) => {
  state.item = initialState.item
  state.fetchOneLoading = true
  state.fetchOneError = payload
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(FetchOneUserAction.pending, fetchOnePending)
    .addCase(FetchOneUserAction.fulfilled, fetchOneFulfilled)
    .addCase(FetchOneUserAction.rejected, fetchOneRejected)
})
