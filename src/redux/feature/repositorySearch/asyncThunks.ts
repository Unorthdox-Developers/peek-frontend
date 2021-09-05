import { AppDispatch, RootState } from '@redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from 'src/api/api';

export const repositorySearchAsyncThunks = {
  postRepositorySearch: createAsyncThunk<
    any, // type of return value (response.data)
    string,
    {
      dispatch: AppDispatch;
      state: RootState;
    }
  >(
    'repositorySearch/searchStatus',
    async (repositoryName: string, thunkAPI) => {
      if (repositoryName) {
        const response = await ApiService.repositoryApi.searchForRepository(
          repositoryName
        );
        return response.data.items;
      } else {
        return [];
      }
    }
  ),
};
