import { AppDispatch, RootState } from '@redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from 'src/api/api';

export const repositorySearchAsyncThunks = {
  postRepositorySearch: createAsyncThunk<
    any,
    string,
    {
      dispatch: AppDispatch;
      state: RootState;
    }
  >(
    'repositorySearch/searchStatus',
    async (repositoryName: string, thunkAPI) => {
      const response = await ApiService.repositoryApi.searchForRepository(
        repositoryName
      );
      return response.data;
    },
    {
      condition: (repositoryName: string, { getState, extra }) => {
        const { repositorySearch } = getState();
        const { searchText, searchStatus } = repositorySearch;
        if (repositoryName === searchText && searchStatus === 'pending') {
          return false;
        }
      },
    }
  ),
};
