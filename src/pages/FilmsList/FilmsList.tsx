import { IFilm } from 'types/films';
import { Film } from 'components/Film/Film';
import styles from './FilmsList.module.css';

interface IFilmsList {
  isLoading?: boolean;
  films: IFilm[];
}

export const FilmsList: React.FC<IFilmsList> = ({ isLoading, films }) => {
  return isLoading ? (
    <div>Загрузка</div>
  ) : (
    <div className={styles.wrapper}>
      {films.map((item) => (
        <Film key={item.id} {...item} />
      ))}
    </div>
  );
};
