import { useState } from 'react';
import { IComment } from 'types/types';
import styles from './CommentField.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import {
  setComment,
  deleteComment,
  setLike,
  editComment,
} from 'store/slices/commentSlice';

interface ICommentComponent extends IComment {
  onClick: () => void;
  onSetLike: () => void;
  onEditComment: (text) => void;
}

const Comment: React.FC<ICommentComponent> = ({
  autor,
  data,
  content,
  isLike,
  onClick,
  onSetLike,
  onEditComment,
}) => {
  const [openTextArea, setOpenTextArea] = useState(false);
  const [text, setText] = useState(content);

  const handleOpen = () => {
    setOpenTextArea(true);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.comment_auth}>{autor}</div>
      <div className={styles.comment_data}>{data.toString()}</div>
      <div className={styles.comment_content}>{content}</div>
      <div
        className={isLike ? styles.like : styles.disLike}
        onClick={onSetLike}
      ></div>
      <button className={styles.comment_button} onClick={onClick}>
        Удалить
      </button>
      <button className={styles.comment_button} onClick={handleOpen}>
        Редактировать
      </button>
      {openTextArea && (
        <>
          <label>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <button
            className={styles.comment_button}
            onClick={() => {
              onEditComment(text);
              setOpenTextArea(false);
            }}
          >
            Отправить
          </button>
        </>
      )}
    </div>
  );
};

interface ICommentField {
  id: number;
}
export const CommentField: React.FC<ICommentField> = ({ id }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.commentReducer[id]);
  const user = useSelector((state: RootState) => state.authReducer.authUser);

  const addComment = () => {
    dispatch(
      setComment({
        moveId: id,
        comment: { autor: user || 'аноним', data: new Date(), content: text },
      })
    );
    setText('');
  };

  const handleDeleteComment = (commentId: number) => {
    dispatch(
      deleteComment({
        moveId: id,
        commentId,
      })
    );
  };

  const handleLike = (commentId: number, isLike: boolean) => {
    dispatch(
      setLike({
        moveId: id,
        commentId,
        isLike,
      })
    );
  };

  const handleEditComment = (commentId: number, newContent: string) => {
    dispatch(
      editComment({
        moveId: id,
        commentId,
        newContent,
      })
    );
  };

  return (
    <div className={styles.comment_field}>
      <h4 className={styles.comment_name}>Оставьте ваш комментарий</h4>
      <label>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button className={styles.comment_button} onClick={addComment}>
        Отправить
      </button>
      {comments?.map((comment, index) => (
        <Comment
          onSetLike={() => handleLike(index, !comment.isLike)}
          onClick={() => handleDeleteComment(index)}
          onEditComment={(newContent) => handleEditComment(index, newContent)}
          {...comment}
        />
      ))}
    </div>
  );
};
