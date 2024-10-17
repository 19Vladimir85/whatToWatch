import { Link } from 'react-router-dom';
import { IFilm, IRating } from 'types/films';
import styles from './Film.module.css';
import cx from 'clsx';

const noPoster = `${process.env.PUBLIC_URL}/images/noposter.jpg`;

interface IFilmProp extends IFilm {
  isSmall?: boolean;
}

function getRateNumber(rate: IRating): string {
  return !rate.kp ? rate.imdb.toFixed(1) : rate.kp.toFixed(1);
}

function getRateName(rate: IRating): string {
  return !rate.kp ? 'IMDB' : 'KP';
}

function rateColor(rate: number): string {
  if (rate <= 3) return styles.red;
  if (rate > 3 && rate < 6) return styles.grey;
  return styles.green;
}

export const Film: React.FC<IFilmProp> = ({ name, poster, year, rating, id, countries, genres, isSmall }) => {
  const rate = getRateNumber(rating);
  return (
    <Link className={styles.wrapper} to={`/movie/${id}`}>
      <div className={styles.film}>
        <img className={cx(styles.film__image, { [styles.film__image_small]: isSmall })} src={poster?.url || noPoster} alt="img" />
        <div className={styles.film__card_description}>
          <div className={styles.film__card_description_name}>{name}</div>
          <div className={styles.film__card_description_item}>{year}</div>
          <div className={styles.film__card_description_item}>{countries?.map((el) => el.name).join(', ')}</div>
          <div className={styles.film__card_description_item}>{genres?.map((el) => el.name).join(', ')}</div>
        </div>
        <div className={styles.film__card_description_item}>
          <span className={rateColor(+rate)}>{rate}</span>
          {getRateName(rating)}
        </div>
      </div>
    </Link>
  );
};
