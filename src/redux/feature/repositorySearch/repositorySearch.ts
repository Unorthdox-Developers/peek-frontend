import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import { repositorySearchAsyncThunks } from './asyncThunks';

type RepositorySearchState = {
  searchText: string;
  searchResults: [];
  searchStatus: string;
};

const initialState: RepositorySearchState = {
  searchText: '',
  searchResults: [],
  searchStatus: 'init',
};

export const repositorySearchSlice = createSlice({
  name: 'repositorySearch',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      repositorySearchAsyncThunks.postRepositorySearch.pending,
      (state, action) => {
        state.searchStatus = 'pending';
      }
    );
    builder.addCase(
      repositorySearchAsyncThunks.postRepositorySearch.rejected,
      (state, action) => {
        state.searchStatus = 'rejected';
      }
    );
    builder.addCase(
      repositorySearchAsyncThunks.postRepositorySearch.fulfilled,
      (state, action) => {
        state.searchStatus = 'fulfilled';
      }
    );
  },
});

export const { setSearchText } = repositorySearchSlice.actions;

export const getRepositorySearchValue = (state: RootState) =>
  state.repositorySearch.searchText;

export const getRepositorySearchStatus = (state: RootState) =>
  state.repositorySearch.searchStatus;

export default repositorySearchSlice.reducer;
