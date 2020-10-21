import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export function buildReducers({
  itemKey = 'item',
  loadingKey = 'loading',
  errorKey = 'error',
} = {}) {
  const pending = (state, { type }) => {
    stateKeysExists(state, [loadingKey, errorKey], type)
    setNestedValue(state, loadingKey, true)
    setNestedValue(state, errorKey, null)
  }

  const fulfilled = (state, { payload, type }) => {
    stateKeysExists(state, [loadingKey, errorKey], type)
    if (itemKey) {
      stateKeyExists(state, itemKey, type)
      setNestedValue(state, itemKey, payload)
    }
    setNestedValue(state, loadingKey, false)
    setNestedValue(state, errorKey, null)
  }

  const rejected = (state, { payload, type }) => {
    stateKeysExists(state, [loadingKey, errorKey], type)
    setNestedValue(state, loadingKey, false)
    setNestedValue(state, errorKey, payload)
  }

  return {
    pending,
    fulfilled,
    rejected,
  }
}

function stateKeysExists(state, keys, type) {
  keys.forEach((key) => stateKeyExists(state, key, type))
}

function stateKeyExists(state, key, type) {
  if (typeof getNestedValue(state, key) === 'undefined') {
    console.error(`Invalid state key : ${key} in ${type}`)
  }
}

function setNestedValue(state, dotKey, value) {
  dotKey.split('.').reduce((acc, key, index, arr) => {
    if (index === arr.length - 1) {
      acc[key] = value
    }
    return acc[key]
  }, state)
}

function getNestedValue(state, dotKey) {
  return dotKey.split('.').reduce((acc, key) => acc[key], state)
}

export function buildAction(actionName, action = () => {}) {
  return createAsyncThunk(actionName, async (args, thunkAPI) => {
    try {
      return await action(args, thunkAPI)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })
}

export function buildSlice(name, modules, moduleInitialState = {}) {
  const initialState = modules.reduce(
    (acc, module) => ({
      ...acc,
      ...module.initialState,
    }),
    { ...moduleInitialState },
  )

  return createSlice({
    name,
    initialState,
    extraReducers: (builder) => {
      modules.forEach((module) => {
        builder
          .addCase(module.action.pending, module.reducers.pending)
          .addCase(module.action.fulfilled, module.reducers.fulfilled)
          .addCase(module.action.rejected, module.reducers.rejected)
      })
    },
  })
}
