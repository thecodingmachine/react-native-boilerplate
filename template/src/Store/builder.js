import { createAsyncThunk } from '@reduxjs/toolkit'

export function buildReducers(
  initialState,
  {
    itemKey = 'item',
    loadingKey = 'loading',
    errorKey = 'error',
    resetOnPending = true,
  } = {},
) {
  const pending = (state) => {
    if (resetOnPending && itemKey) {
      state[itemKey] = initialState[itemKey]
    }
    state[loadingKey] = true
    state[errorKey] = null
  }

  const fulfilled = (state, { payload }) => {
    if (itemKey) {
      state[itemKey] = payload
    }
    state[loadingKey] = false
    state[errorKey] = null
  }

  const rejected = (state, { payload }) => {
    if (itemKey) {
      state[itemKey] = initialState[itemKey]
    }
    state[loadingKey] = true
    state[errorKey] = payload
  }

  return {
    pending,
    fulfilled,
    rejected,
  }
}

export function buildAction(name, action = () => {}) {
  return createAsyncThunk(name, async (args, thunkAPI) => {
    try {
      return await action(args, thunkAPI)
    } catch (err) {
      thunkAPI.rejectWithValue(err)
    }
  })
}
