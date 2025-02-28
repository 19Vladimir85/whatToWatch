import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filtersSlice';
import { themeReducer } from './slices/themeSlice';
import { authReducer } from './slices/authSlice';
import { commentReducer } from './slices/commentSlice';
import { favoriteReducer } from './slices/favoriteSlice';
import { pagesReducer } from './slices/pagesSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    themeReducer,
    authReducer,
    commentReducer,
    favoriteReducer,
    pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
