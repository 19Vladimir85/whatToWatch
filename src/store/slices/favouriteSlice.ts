import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilm } from 'types/types';

const initialState: IFilm[] = [];

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFilm: (state, action: PayloadAction<IFilm>) => {
      state.push(action.payload);
    },
    deleteFilm: (state, action: PayloadAction<number>) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});
