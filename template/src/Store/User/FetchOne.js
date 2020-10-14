import { createSlice } from '@reduxjs/toolkit'
import fetchOneUserService from '@/Services/User/FetchOne'
import { buildAction, buildReducers } from '@/Store/builder'

const name = 'user/fetchOne'

const initialState = {
  item: {},
  loading: false,
  error: null,
}

export const FetchOneUserAction = buildAction(name, fetchOneUserService)

const { pending, fulfilled, rejected } = buildReducers(initialState)

const fetchOne = createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(FetchOneUserAction.pending, pending)
      .addCase(FetchOneUserAction.fulfilled, fulfilled)
      .addCase(FetchOneUserAction.rejected, rejected)
  },
})
export default fetchOne.reducer
