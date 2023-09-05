import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from 'types/theme/config';

const slice = createSlice({
  name: 'theme',
  initialState: { variant: 'default' } as ThemeState,
  reducers: {
    changeTheme: (state, { payload: { variant } }: ThemePayload) => {
      if (typeof variant !== 'undefined') {
        state.variant = variant;
      }
    },
    setDefaultTheme: (state, { payload: { variant } }: ThemePayload) => {
      if (!state.variant) {
        if (typeof variant !== 'undefined') {
          state.variant = variant;
        }
      }
    },
  },
});

export const { changeTheme, setDefaultTheme } = slice.actions;

export default slice.reducer;

type ThemePayload = {
  payload: Partial<ThemeState>;
};
