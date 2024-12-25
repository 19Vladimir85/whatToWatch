import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ISnowSliceState {
  isChecked: boolean;
}

const initialState: ISnowSliceState = {
  isChecked: false,
};

export const snowSlice = createSlice({
  name: 'snowtheme',
  initialState,
  reducers: {
    setSnowing: (state, action: PayloadAction<boolean>) => {
      state.isChecked = action.payload;
    },
  },
});

export const snowReducer = snowSlice.reducer;
export const { setSnowing } = snowSlice.actions;
