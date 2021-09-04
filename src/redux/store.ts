import { configureStore } from '@reduxjs/toolkit';
import { repositorySearchSlice } from './feature/repositorySearch/repositorySearch';
import { logger } from 'redux-logger';
import { themeSlice } from './feature/theme';

export const store = configureStore({
  reducer: {
    repositorySearch: repositorySearchSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
