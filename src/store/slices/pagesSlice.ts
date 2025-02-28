import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IPages {
  filmsPages: number;
}

const initialState: IPages = {
  filmsPages: 10,
};

const pagesSlice = createSlice({
  name: 'pagesAmount',
  initialState,
  reducers: {
    setPagesAmount: (state, action: PayloadAction<number>) => {
      state.filmsPages = action.payload;
    },
  },
});

export const pagesReducer = pagesSlice.reducer;
export const { setPagesAmount } = pagesSlice.actions;
