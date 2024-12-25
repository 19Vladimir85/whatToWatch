import { useState } from 'react';
import styles from './Rating.module.css';
import { StarFilled } from '@ant-design/icons';
import { YELLOW, ACTIVE } from 'utils/consts';

export interface IRating {
  size?: 'small' | 'big';
  startRating?: number;
}

export const Rating: React.FC<IRating> = ({ size = 'small', startRating }) => {
  const [rating, setRating] = useState(startRating);
  const [hoverRating, setHoverRating] = useState(null);
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((__, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              onClick={() => setRating(ratingValue)}
              type="radio"
              name="rating"
              value={ratingValue}
              className={styles.starsInput}
            />
            <StarFilled
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(null)}
              className={styles.starItem}
              style={{
                fontSize: '25px',
                color: ratingValue <= (hoverRating || rating) ? YELLOW : ACTIVE,
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

// return (
//   <div className={styles.rating}>
//     {ratings.map((item) => (
//       <button
//         onClick={() => setRating(item)}
//         onMouseEnter={() => setHoverRating(item)}
//         onMouseLeave={() => setHoverRating(0)}
//         className={styles.star_button}
//         key={item}
//       >
//         <div
//           className={cx(styles.star, {
//             [styles.star_filled]: hoverRating
//               ? item <= hoverRating
//               : rating >= item,
//             [styles.star_selected]: item === rating,
//             [styles.star_big]: size === 'big',
//           })}
//         ></div>
//       </button>
//     ))}
//   </div>
// );
