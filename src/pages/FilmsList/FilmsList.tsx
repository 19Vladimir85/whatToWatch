import { IFilmsList } from 'types/types';
import { Film } from 'components/Film/Film';
import styles from './FilmsList.module.css';

export const FilmsList: React.FC<IFilmsList> = ({ isLoading, films }) => {
  return isLoading ? (
    <div>Загрузка</div>
  ) : (
    <div className={styles.wrapper}>
      {films?.map((item) => (
        <Film key={item.id} {...item} />
      ))}
    </div>
  );
};
