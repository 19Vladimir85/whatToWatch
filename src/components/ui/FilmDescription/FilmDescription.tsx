import { ICountry, IGenre, IFilm } from '../../../types/types';
import styles from './FilmDescription.module.css';
import cx from 'clsx';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { setComment } from 'store/slices/commentSlice';
import { CommentField } from 'components/business/CommentField/CommentField';

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
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.commentReducer);

  const addComment = () => {};

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
        </div>
      </div>
      <CommentField id={film.id} />
    </>
  );
};
