import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface IAuth {
  authUser: string;
}

const initialState: IAuth = {
  authUser: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuth>) => {
      state.authUser = action.payload.authUser;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuth } = authSlice.actions;
