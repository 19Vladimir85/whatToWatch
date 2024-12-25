import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'types/types';

interface ICommentPayload {
  moveId: number;
  comment: IComment;
}

type CommentSlice = Record<number, IComment[]>;

const initialState: CommentSlice = {};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<ICommentPayload>) => {
      if (state[action.payload.moveId]) {
        state[action.payload.moveId] = [
          ...state[action.payload.moveId],
          action.payload.comment,
        ];
      } else {
        state[action.payload.moveId] = [action.payload.comment];
      }
    },
  },
});

export const commentReducer = commentSlice.reducer;
export const { setComment } = commentSlice.actions;
