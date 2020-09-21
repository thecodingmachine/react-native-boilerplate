import initHelper from '@/Store/initHelper'
// import { fetchUser } from '@/Services/ExampleService'
// import { createAsyncThunk } from '@reduxjs/toolkit'

const Types = {
  // Action listened by sagas
  INIT_APPLICATION: null,
  // The operation has started and is loading
  INIT_APPLICATION_LOADING: false,
  // We finished loading the app
  INIT_APPLICATION_SUCCESS: null,
  // An error occurred
  INIT_APPLICATION_ERROR: (errorMessage) => ({ errorMessage }),
}

export const [StartupActions, StartupTypes] = initHelper(Types)

// export const fetchUsers = createAsyncThunk('users/fetchUser', fetchUser)
