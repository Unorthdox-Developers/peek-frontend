import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import { lightTheme } from 'src/styles/theme';
import { Theme } from '@material-ui/core';

type ThemeState = {
  current: Theme;
};

const initialState: ThemeState = {
  current: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Draft<Theme>>) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const getCurrentTheme = (state: RootState) => state.theme.current;

export default themeSlice.reducer;
