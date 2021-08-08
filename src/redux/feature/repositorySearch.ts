import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';

type RepositorySearchState = {
  searchText: string;
};

const initialState: RepositorySearchState = {
  searchText: '',
};

export const repositorySearchSlice = createSlice({
  name: 'repositorySearch',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = repositorySearchSlice.actions;

export const selectRepositorySearchValue = (state: RootState) =>
  state.repositorySearch.searchText;

export default repositorySearchSlice.reducer;
