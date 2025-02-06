import { useSelector } from 'react-redux';
import styles from './FavoriteFilms.module.css';
import { RootState } from 'store/store';
import { FilmsList } from 'components/ui/FilmsList/FilmsList';

export const FavoriteFilms: React.FC = () => {
  const films = useSelector((state: RootState) => state.favoriteReducer);
  console.log(films);
  return (
    <div className={styles.FavoriteFilms}>
      <FilmsList films={films}></FilmsList>
    </div>
  );
};
