import { useState } from 'react';
import { IComment } from 'types/types';
import styles from './CommentField.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setComment } from 'store/slices/commentSlice';

const Comment: React.FC<IComment> = ({ autor, data, content }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_auth}>{autor}</div>
      <div className={styles.comment_data}>{data.toString()}</div>
      <div className={styles.comment_content}>{content}</div>
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
      {comments?.map((comment) => (
        <Comment {...comment} />
      ))}
    </div>
  );
};
