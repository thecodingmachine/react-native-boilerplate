import { createSlice } from '@reduxjs/toolkit'
import { buildAction, buildReducers } from '@/Store/builder'
import initializeStartupService from '@/Services/User/FetchOne'

const name = 'startup'

const initialState = {
  loading: true,
  error: false,
}

export const InitializeStartupAction = buildAction(
  name,
  initializeStartupService,
)

const { pending, fulfilled, rejected } = buildReducers(initialState, {
  itemKey: null,
})

const initialize = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(InitializeStartupAction.pending, pending)
      .addCase(InitializeStartupAction.fulfilled, fulfilled)
      .addCase(InitializeStartupAction.rejected, rejected)
  },
})
export default initialize.reducer
