import { ICountry, IGenre, IFilm } from '../../../types/types';
import styles from './FilmDescription.module.css';
import cx from 'clsx';
import { CommentField } from 'components/business/CommentField/CommentField';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { addFilm, deleteFilm } from 'store/slices/favoriteSlice';
import { LikeButton } from '../LikeButton/LikeButton';

const noPoster = `${process.env.PUBLIC_URL}/images/noposter.jpg`;

export interface IFilmDescription {
  film: IFilm;
}

interface IFieldInfo {
  name: string;
  children: React.ReactNode;
  className?: string;
}

const FieldInfo: React.FC<IFieldInfo> = ({
  name,
  children,
  className = '',
}) => {
  return (
    <div className={cx(styles.field, className)}>
      <div className={styles.field__name}>{name}</div>
      <div className={styles.field__info}>{children}</div>
    </div>
  );
};

export const FilmDescription: React.FC<IFilmDescription> = ({ film }) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.favoriteReducer);
  const isLike = films.some((el) => el.id === film.id);

  const onSetLike = () => {
    if (isLike) {
      dispatch(deleteFilm(film.id));
    } else {
      dispatch(addFilm(film));
    }
  };

  return (
    <>
      <div className={styles.film}>
        <img
          src={film.poster ? film.poster.url : noPoster}
          alt=""
          className={styles.film__poster}
        />
        <div className={styles.film__info}>
          <FieldInfo name="Название">{film.name}</FieldInfo>
          <FieldInfo name="Описание">{film.description}</FieldInfo>
          <FieldInfo name="Год">{film.createdAt}</FieldInfo>
          <FieldInfo name="Страна">
            {film.countries?.map((el: ICountry) => el.name)}
          </FieldInfo>
          <FieldInfo name="Жанр">
            {film.genres?.map((el: IGenre) => el.name)}
          </FieldInfo>
          <LikeButton isLike={isLike} setLike={onSetLike} />
        </div>
      </div>
      <CommentField id={film.id} />
    </>
  );
};
