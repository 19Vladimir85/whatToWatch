import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filtersSlice';
import { snowReducer } from './slices/snowSlice';
import { authReducer } from './slices/authSlice';
import { commentReducer } from './slices/commentSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    snowReducer,
    authReducer,
    commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
