import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import { BaseTheme, lightTheme } from 'src/styles/theme';

type RepositorySearchState = {
  current: BaseTheme;
};

const initialState: RepositorySearchState = {
  current: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<BaseTheme>) => {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const getCurrentTheme = (state: RootState) => state.theme.current;

export default themeSlice.reducer;
