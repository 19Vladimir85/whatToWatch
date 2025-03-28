import { useEffect, useState } from 'react';
import { getFilmsByFilters } from 'utils/api';
import { FilmsList } from 'components/ui/FilmsList/FilmsList';
import { Filters } from 'components/business/Filters/Filters';
import { useLocation } from 'react-router-dom';
import styles from './AllFilms.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { setFilmsOnPage } from 'store/slices/filtersSlice';
import { PaginatedItems } from 'components/ui/Pagination/Pagination';
import { useFormatUrl } from 'hooks/useFormatUrl';
import { useParseUrlParams } from 'hooks/useParseUrlParams';

export const AllFilms: React.FC = () => {
  const [films, setFilms] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  useFormatUrl();
  useParseUrlParams();

  const filmsAmount = useSelector(
    (state: RootState) => state.filterReducer.filmsOnPages
  );

  useEffect(() => {
    setLoading(true);
    getFilmsByFilters(location.search)
      .then(({ films, total }) => {
        setFilms(films);
        setTotal(total);
      })
      .finally(() => setLoading(false));
  }, [location.search]);

  const filmsOnPage: number[] = [10, 20, 30];

  const onFilmsAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilmsOnPage(Number(event.target.value)));
  };
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    console.log(total, filmsAmount);
    if (filmsAmount > 0) {
      setPageCount(Math.ceil(total / filmsAmount));
    }
  }, [filmsAmount, total]);

  return (
    <div className={styles.wrapper}>
      <Filters className={styles.filters} onFilterSet={() => {}} />
      {loading ? (
        'Загрузка'
      ) : (
        <div>
          <FilmsList films={films} />
          <div className={styles.filmsOnPage}>
            <PaginatedItems pageCount={pageCount} />
            <div>Фильмов на странице:</div>
            <select onChange={onFilmsAmountChange} value={filmsAmount}>
              {filmsOnPage.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
