import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setFilters } from 'store/slices/filtersSlice';

export const useParseUrlParams = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const params = {
      genre: searchParams.get('genres.name')?.split(',') || [],
      rating: searchParams.get('rating.kp')?.split('-')[0],
      country: searchParams.get('countries.name'),
    };
    dispatch(setFilters(params));
  }, []);
};
