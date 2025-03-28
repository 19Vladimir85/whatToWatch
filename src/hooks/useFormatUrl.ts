import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useLocation, useNavigate } from 'react-router-dom';

export const useFormatUrl = () => {
  const { filters, page, filmsOnPages } = useSelector(
    (state: RootState) => state.filterReducer
  );
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search); // Query -параметры
    ['genres.name', 'rating.kp', 'countries.name', 'page', 'limit'].forEach(
      (el) => searchParams.delete(el)
    );
    if (page) {
      searchParams.append('page', page.toString());
    }

    if (filmsOnPages) {
      searchParams.append('limit', filmsOnPages.toString());
    }

    for (let key in filters) {
      if (key === 'genre' && filters.genre?.length > 0) {
        searchParams.append(
          'genres.name',
          filters.genre.join(',').toLowerCase()
        );
      }
      if (key === 'rating' && filters.rating) {
        searchParams.append('rating.kp', `${filters.rating}-10`);
      }
      if (key === 'country' && filters.country) {
        searchParams.append('countries.name', filters.country);
      }
    }
    const newUrl = searchParams.toString();
    navigate({ search: newUrl }, { replace: true });
  }, [filters, page, filmsOnPages]);
};
