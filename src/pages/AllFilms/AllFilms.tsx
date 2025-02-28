import { useEffect, useState } from 'react';
import { getFilmsByFilters } from 'utils/api';
import { FilmsList } from 'components/ui/FilmsList/FilmsList';
import { Filters } from 'components/business/Filters/Filters';
import { useLocation } from 'react-router-dom';
import styles from './AllFilms.module.css';
import { useFormatUrl } from 'hooks/useFormatUrl';
import { useParseUrlParams } from 'hooks/useParseUrlParams';
import { PaginatedItems } from '../../components/ui/Pagination/Pagination.js';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

export const AllFilms: React.FC = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const filmsAmount = useSelector((state: RootState) => state.pagesReducer);
  useFormatUrl();
  useParseUrlParams();

  useEffect(() => {
    getFilmsByFilters(location.search.slice(1)).then((films) =>
      setFilms(films)
    );
  }, [location.search]);
  console.log('++++++', filmsAmount);

  return (
    <>
      <div className={styles.wrapper}>
        <Filters className={styles.filters} onFilterSet={() => {}} />
        <FilmsList films={films} />
      </div>
      <PaginatedItems pageCount={filmsAmount.filmsPages} itemsPerPage={1000} />
    </>
  );
};
