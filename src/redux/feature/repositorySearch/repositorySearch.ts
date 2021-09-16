import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';
import { repositorySearchAsyncThunks } from './asyncThunks';
import { AsyncTrunkRequestStatus } from 'src/config/constants';

export type SearchResultPayload = {
  total_count: number;
  items: any[];
};

type RepositorySearchState = {
  searchText: string;
  searchResults: any[];
  searchStatus: AsyncTrunkRequestStatus;
  totalResultsCount: number;
};

const initialState: RepositorySearchState = {
  searchText: '',
  searchResults: [],
  searchStatus: AsyncTrunkRequestStatus.Initial,
  totalResultsCount: 0,
};

export const repositorySearchSlice = createSlice({
  name: 'repositorySearch',
  initialState,
  reducers: {
    setSearchText: (
      state: RepositorySearchState,
      action: PayloadAction<string>
    ) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      repositorySearchAsyncThunks.postRepositorySearch.pending,
      (state: RepositorySearchState, action) => {
        state.searchStatus = AsyncTrunkRequestStatus.Pending;
      }
    );
    builder.addCase(
      repositorySearchAsyncThunks.postRepositorySearch.rejected,
      (state: RepositorySearchState, action) => {
        state.searchStatus = AsyncTrunkRequestStatus.Rejected;
      }
    );
    builder.addCase(
      repositorySearchAsyncThunks.postRepositorySearch.fulfilled,
      (
        state: RepositorySearchState,
        action: PayloadAction<SearchResultPayload>
      ) => {
        state.searchStatus = AsyncTrunkRequestStatus.Fulfilled;
        state.searchResults = [...action.payload.items];
        state.totalResultsCount = action.payload.total_count;
      }
    );
  },
});

export const { setSearchText } = repositorySearchSlice.actions;

export const getRepositorySearchValue = (state: RootState) =>
  state.repositorySearch.searchText;

export const getRepositorySearchStatus = (state: RootState) =>
  state.repositorySearch.searchStatus;

export const getRepositorySearchResults = (state: RootState) =>
  state.repositorySearch.searchResults;

export default repositorySearchSlice.reducer;
