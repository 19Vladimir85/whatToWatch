import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'types/types';

interface ICommentPayload {
  moveId: number;
  comment: IComment;
}

interface ICommentDelete {
  moveId: number;
  commentId: number;
  isLike?: boolean;
}

type CommentSlice = Record<number, IComment[]>; // Record тип для описания объекта ( number - ключ, IComment[] - значение)

const initialState: CommentSlice = {};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<ICommentPayload>) => {
      const { moveId, comment } = action.payload;
      if (state[moveId]) {
        state[moveId] = [...state[moveId], comment];
      } else {
        state[moveId] = [comment];
      }
    },
    deleteComment: (state, action: PayloadAction<ICommentDelete>) => {
      state[action.payload.moveId].splice(action.payload.commentId, 1);
    },
    setLike: (state, action: PayloadAction<ICommentDelete>) => {
      const { moveId, isLike, commentId } = action.payload;
      state[moveId][commentId].isLike = isLike;
    },
  },
});

export const commentReducer = commentSlice.reducer;
export const { setComment, deleteComment, setLike } = commentSlice.actions;

// {
//   moveId: [{}, {}];
// }