import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';

type RepositoryDashboardState = {
  repository: any;
};

const initialState: RepositoryDashboardState = {
  repository: null,
};

export const repositoryDashboardSlice = createSlice({
  name: 'repositoryDashboard',
  initialState,
  reducers: {
    setRepository: (
      state: RepositoryDashboardState,
      action: PayloadAction<any>
    ) => {
      state.repository = action.payload;
    },
  },
});

export const { setRepository } = repositoryDashboardSlice.actions;

export const getRepositorySearchValue = (state: RootState) =>
  state.repositoryDashboard.repository;

export default repositoryDashboardSlice.reducer;
