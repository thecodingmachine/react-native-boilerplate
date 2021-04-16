import { createAction } from '@reduxjs/toolkit'
import { ThemeState } from './index'

interface PayloadInterface {
  payload: ThemeState
}
export default {
  initialState: {},
  action: createAction<ThemeState>('theme/setDefaultTheme'),
  reducers(state: ThemeState, { payload }: PayloadInterface) {
    if (!state.theme) {
      state.theme = payload.theme
      state.darkMode = payload.darkMode
    }
  },
}
