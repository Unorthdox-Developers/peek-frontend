import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import { darkTheme, lightTheme } from 'src/styles/theme';

type ThemeState = {
  dark: boolean;
};

const initialState: ThemeState = {
  dark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export const getCurrentTheme = (state: RootState) =>
  state.theme.dark ? darkTheme : lightTheme;

export default themeSlice.reducer;
