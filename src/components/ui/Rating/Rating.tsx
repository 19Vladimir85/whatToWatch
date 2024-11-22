import { useState } from 'react';
import styles from './Rating.module.css';
import cx from 'clsx';

export interface IRating {
  size?: 'small' | 'big';
  startRating?: number;
}

const ratings = [1, 2, 3, 4, 5];

export const Rating: React.FC<IRating> = ({ size = 'small', startRating }) => {
  const [rating, setRating] = useState(startRating || 0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className={styles.rating}>
      {ratings.map((item) => (
        <button
          onClick={() => setRating(item)}
          onMouseEnter={() => setHoverRating(item)}
          onMouseLeave={() => setHoverRating(0)}
          className={styles.star_button}
          key={item}
        >
          <div
            className={cx(styles.star, {
              [styles.star_filled]: hoverRating
                ? item <= hoverRating
                : rating >= item,
              [styles.star_selected]: item === rating,
              [styles.star_big]: size === 'big',
            })}
          ></div>
        </button>
      ))}
    </div>
  );
};
