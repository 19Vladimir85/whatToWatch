import { IFilm } from 'types/types';
import { Film } from 'components/ui/Film/Film';
import styles from './FilmsList.module.css';

export interface IFilmsList {
  isLoading?: boolean;
  films: IFilm[];
}

export const FilmsList: React.FC<IFilmsList> = ({ isLoading, films }) => {
  return isLoading ? (
    <div>Загрузка</div>
  ) : (
    <div className={styles.wrapper}>
      {films?.map((item) => (
        <Film className={styles.film} key={item.id} {...item} />
      ))}
    </div>
  );
};
