import { useEffect, useState } from 'react';
import { getAllFilms, getFilmsByFilters } from 'utils/api';
import { FilmsList } from 'components/ui/FilmsList/FilmsList';
import { Filters } from 'components/business/Filters/Filters';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './AllFilms.module.css';
import { useDispatch } from 'react-redux';
import { setFilters } from 'store/slices/filtersSlice';
export const AllFilms: React.FC = () => {
  const [films, setFilms] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();

  useEffect(() => {
    getFilmsByFilters(location.search.slice(1)).then((films) =>
      setFilms(films)
    );
    parseUrl(location.search);
  }, []);

  function parseUrl(url) {
    const params = {
      genre: searchParams.get('genres.name')?.split(',') || [],
      rating: searchParams.get('rating.kp')?.split('-')[0],
      country: searchParams.get('countries.name'),
    };
    dispatch(setFilters(params));
  }

  function formatUrl(filters) {
    ['genres.name', 'rating.kp', 'countries.name'].forEach((el) =>
      searchParams.delete(el)
    );
    console.log(filters);

    for (let key in filters) {
      if (key === 'genre') {
        searchParams.append(
          'genres.name',
          filters.genre.join(',').toLowerCase()
        );
      }
      if (key === 'raiting' && filters.raiting) {
        searchParams.append('rating.kp', `${filters.raiting}-10`);
      }
      if (key === 'country' && filters.country) {
        searchParams.append('countries.name', filters.country.toLowerCase());
      }
    }
    const newUrl = searchParams.toString();
    return newUrl;
  }

  function changeUrl(filters) {
    const url = formatUrl(filters);
    navigate({ search: url }, { replace: true });
    return url;
  }

  const onSend = (filters) => {
    const url = changeUrl(filters);
    getFilmsByFilters(url).then((res) => setFilms(res));
  };

  return (
    <div className={styles.wrapper}>
      <Filters className={styles.filters} onFilterSet={onSend} />
      <FilmsList films={films} />
    </div>
  );
};
