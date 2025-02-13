import { Link } from 'react-router-dom';
import { IFilmsRating, IFilm } from 'types/types';
import styles from './Film.module.css';
import cx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { addFilm, deleteFilm } from 'store/slices/favoriteSlice';
import { LikeButton } from '../LikeButton/LikeButton';

const noPoster = `${process.env.PUBLIC_URL}/images/noposter.jpg`;

interface IFilmProp extends IFilm {
  isSmall?: boolean;
  className?: string;
}

function getRateNumber(rate: IFilmsRating): string {
  return !rate.kp ? rate.imdb.toFixed(1) : rate.kp.toFixed(1);
}

export function getRateName(rate: IFilmsRating): string {
  return !rate.kp ? 'IMDB' : 'KP';
}

export function rateColor(rate: number): string {
  if (rate <= 3) return styles.red;
  if (rate > 3 && rate < 6) return styles.grey;
  return styles.green;
}

export const Film: React.FC<IFilmProp> = ({
  className,
  name,
  poster,
  year,
  rating,
  id,
  countries,
  genres,
  isSmall,
}) => {
  const rate = getRateNumber(rating);
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.favoriteReducer);
  const isLike = films.some((el) => el.id === id);

  const onSetLike = () => {
    if (isLike) {
      dispatch(deleteFilm(id));
    } else {
      dispatch(addFilm({ name, poster, year, rating, id, countries, genres }));
    }
  };

  return (
    <Link className={styles.wrapper} to={`/movie/${id}`}>
      <div className={className}>
        <img
          className={cx(styles.film__image, {
            [styles.film__image_small]: isSmall,
          })}
          src={poster?.url || noPoster}
          alt="img"
        />
        <div className={styles.film__card_description}>
          <div className={styles.film__card_description_name}>{name}</div>
          <div className={styles.film__card_description_item}>{year}</div>
          <div className={styles.film__card_description_item}>
            {countries?.map((el) => el.name).join(', ')}
          </div>
          <div className={styles.film__card_description_item}>
            {genres?.map((el) => el.name).join(', ')}
          </div>
          <LikeButton isLike={isLike} setLike={onSetLike} />
        </div>

        <div className={styles.film__card_description_item}>
          <span className={rateColor(+rate)}>{rate}</span>
          {getRateName(rating)}
        </div>
      </div>
    </Link>
  );
};
