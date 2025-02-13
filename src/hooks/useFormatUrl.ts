import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useLocation, useNavigate } from 'react-router-dom';

export const useFormatUrl = () => {
  const { filters } = useSelector((state: RootState) => state.filterReducer);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
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
      if (key === 'rating' && filters.rating) {
        searchParams.append('rating.kp', `${filters.rating}-10`);
      }
      if (key === 'country' && filters.country) {
        searchParams.append('countries.name', filters.country);
      }
    }
    const newUrl = searchParams.toString();
    navigate({ search: newUrl }, { replace: true });
  }, [filters]);
};
