import { configureStore } from '@reduxjs/toolkit';
import { repositorySearchSlice } from './feature/repositorySearch/repositorySearch';
import { logger } from 'redux-logger';
import { themeSlice } from './feature/theme';
import { repositoryDashboardSlice } from './feature/repositoryDashboard/repositoryDashboard';

export const store = configureStore({
  reducer: {
    repositorySearch: repositorySearchSlice.reducer,
    repositoryDashboard: repositoryDashboardSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
