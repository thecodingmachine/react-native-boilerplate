import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchOneUserService } from '@/Services/User'

const name = 'user/fetchOne'

const initialState = {
  item: {},
  loading: false,
  error: null,
}

// @todo récupérer une partie du code venant du service ici,
//  notamment la fonction qui contient le rejectWithValue, qui est propre a redux
// c'est ici qu'on doit avoir la logique de l'action, qui peut potentiellement enchainer les appels, etc.
// Service ne doit servir qu'a connaitre l'API et savoir comment traiter le retour, mais pas plus
export const FetchOneUserAction = createAsyncThunk(name, FetchOneUserService)

const pending = (state) => {
  state.item = initialState.item
  state.loading = true
  state.error = null
}

const fulfilled = (state, { payload }) => {
  state.item = payload
  state.loading = false
  state.error = null
}

const rejected = (state, { payload }) => {
  state.item = initialState.item
  state.loading = true
  state.error = payload
}

export default createSlice({
  name,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(FetchOneUserAction.pending, pending)
      .addCase(FetchOneUserAction.fulfilled, fulfilled)
      .addCase(FetchOneUserAction.rejected, rejected)
  },
})
