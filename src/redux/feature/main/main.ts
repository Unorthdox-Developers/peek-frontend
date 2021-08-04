import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';

// Define a type for the slice state
type MainState = {
  repositorySearchValue: string;
};

// Define the initial state using that type
const initialState: MainState = {
  repositorySearchValue: '',
};

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    assignValue: (state, action: PayloadAction<string>) => {
      state.repositorySearchValue = action.payload;
    },
  },
});

export const { assignValue } = mainSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRepositorySearchValue = (state: RootState) =>
  state.main.repositorySearchValue;

export default mainSlice.reducer;
