import styles from './LikeButton.module.css';

interface ILikeButton {
  isLike: boolean;
  setLike: () => void;
}

export const LikeButton: React.FC<ILikeButton> = ({ isLike, setLike }) => {
  const onSetLike = (event: any) => {
    event.stopPropagation();
    setLike();
  };

  return (
    <button className={styles.text} onClick={(event) => onSetLike(event)}>
      {isLike ? 'Удалить из избранного' : 'Добавить в избранное'}
    </button>
  );
};
