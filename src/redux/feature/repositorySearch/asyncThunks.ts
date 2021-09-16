import { AppDispatch, RootState } from '@redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from 'src/api/api';
import { SearchResultPayload } from './repositorySearch';

export const repositorySearchAsyncThunks = {
  postRepositorySearch: createAsyncThunk<
    SearchResultPayload,
    string,
    {
      dispatch: AppDispatch;
      state: RootState;
    }
  >(
    'repositorySearch/searchStatus',
    async (repositoryName: string, thunkAPI) => {
      var result: SearchResultPayload = {
        total_count: 0,
        items: [],
      };
      if (repositoryName) {
        const response = await ApiService.repositoryApi.searchForRepository(
          repositoryName
        );
        result.total_count = response.data.total_count;
        result.items = [...response.data.items];
      }
      return result;
    }
  ),
};
