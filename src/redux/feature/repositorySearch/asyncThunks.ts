import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from 'src/api/api';

export const repositorySearchAsyncThunks = {
  postRepositorySearch: createAsyncThunk(
    'repositorySearch/searchStatus',
    async (repositoryName: string, thunkAPI) => {
      console.log('repositoryName', repositoryName);
      console.log('thunkAPI', thunkAPI);
      const response = await ApiService.repositoryApi.searchForRepository(
        repositoryName
      );
      return response.data;
    }
  ),
};
