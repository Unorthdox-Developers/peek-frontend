import { configureStore } from '@reduxjs/toolkit';
import { repositorySearchSlice } from './feature/repositorySearch';
import { logger } from 'redux-logger';

export const store = configureStore({
  reducer: {
    repositorySearch: repositorySearchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend()
      // prepend and concat calls can be chained
      .concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
