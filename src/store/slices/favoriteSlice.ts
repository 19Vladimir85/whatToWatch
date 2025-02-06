import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilm } from 'types/types';

const initialState: IFilm[] = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFilm: (state, action: PayloadAction<IFilm>) => {
      return [...state, action.payload];
    },
    deleteFilm: (state, action: PayloadAction<number>) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFilm, deleteFilm } = favoriteSlice.actions;
