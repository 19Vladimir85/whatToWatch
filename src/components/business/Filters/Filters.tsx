import styles from './Filters.module.css';
import cx from 'clsx';
import { Chip } from 'components/ui/Chip/Chip';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import {
  setFilters,
  clearFilters,
  setLoading,
} from 'store/slices/filtersSlice';
import { IRange, IGenre, ICountry } from 'types/types';
import { ReactNode, useEffect, useState } from 'react';
import { getAllCounties, getAllGenres } from 'utils/api';

interface IFilterRow {
  title: string;
  children: ReactNode;
}

const FilterRow: React.FC<IFilterRow> = ({ title, children }) => {
  return (
    <>
      <div className={styles.filter__title}>{title}</div>
      <div className={styles.filter__value}>{children}</div>
    </>
  );
};

export interface IFilterState {
  genre?: string[];
  data?: IRange;
  rating?: string;
  country?: string;
}

interface IFilterProps {
  defaultFilters?: IFilterState;
  onFilterSet?: (filters: IFilterState) => void;
  className?: string;
}

export const Filters: React.FC<IFilterProps> = ({
  defaultFilters,
  onFilterSet,
  className,
}) => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);

  const { filters, loading } = useSelector(
    (state: RootState) => state.filterReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    Promise.all([getAllGenres(), getAllCounties()])
      .then(([genres, countries]) => {
        setGenres(genres);
        setCountries(countries);
      })
      .finally(() => dispatch(setLoading(false)));
  }, []);

  const onGenreChange = (genre: string, isChecked: boolean) => {
    if (isChecked) {
      dispatch(setFilters({ ...filters, genre: [...filters.genre, genre] }));
    } else {
      dispatch(
        setFilters({
          ...filters,
          genre: filters.genre?.filter((el) => el !== genre),
        })
      );
    }
  };

  const onCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    dispatch(setFilters({ ...filters, country: selectedCountry }));
  };

  const changeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ ...filters, rating: event.target.value }));
  };

  const handleChange = () => {
    onFilterSet(filters);
  };

  const handleReset = () => {
    dispatch(clearFilters());
    onFilterSet(filters);
  };

  if (loading) {
    return <div className={cx(styles.wrapper, className)}>Загрузка</div>;
  }
  return (
    <div className={cx(styles.wrapper, className)}>
      <FilterRow title="Жанры">
        {genres.map(({ name }) => (
          <Chip
            checked={filters.genre?.includes(name)}
            title={name}
            key={name}
            onClick={onGenreChange}
          />
        ))}
      </FilterRow>

      <FilterRow title="Страна">
        <select value={filters.country} onChange={onCountryChange}>
          <option value="">Выберите страну</option>
          {countries.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </FilterRow>

      <FilterRow title="Рейтинг">
        <input
          type="range"
          min={1}
          max={10}
          value={filters.rating}
          onChange={changeRating}
        />
      </FilterRow>
      <button onClick={handleChange}>Отправить</button>
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
};
