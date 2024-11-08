import { ICountry, IGenre, IFilmDescription } from '../../types/types';
import { FieldInfo } from 'components/ui/FieldInfo/FieldInfo';
import styles from './FilmDescription.module.css';

const noPoster = `${process.env.PUBLIC_URL}/images/noposter.jpg`;

// export interface IFilmDescription {
//   film: IFilm;
// }

export const FilmDescription: React.FC<IFilmDescription> = ({ film }) => {
  return (
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
  );
};
