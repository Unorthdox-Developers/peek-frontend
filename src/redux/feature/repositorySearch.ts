import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';

// Define a type for the slice state
type RepositorySearchState = {
  searchText: string;
};

// Define the initial state using that type
const initialState: RepositorySearchState = {
  searchText: '',
};

export const repositorySearchSlice = createSlice({
  name: 'repositorySearch',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = repositorySearchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRepositorySearchValue = (state: RootState) =>
  state.repositorySearch.searchText;

export default repositorySearchSlice.reducer;
