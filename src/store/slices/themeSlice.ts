// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// interface ISnowSliceState {
//   isChecked: boolean;
// }

// const initialState: ISnowSliceState = {
//   isChecked: false,
// };

// export const snowSlice = createSlice({
//   name: 'snowtheme',
//   initialState,
//   reducers: {
//     setSnowing: (state, action: PayloadAction<boolean>) => {
//       state.isChecked = action.payload;
//     },
//   },
// });

// export const snowReducer = snowSlice.reducer;
// export const { setSnowing } = snowSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IThemeSlice {
  isChecked: boolean;
}

const initialState: IThemeSlice = {
  isChecked: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isChecked = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
