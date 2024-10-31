import styles from './Filters.module.css';
import cx from 'clsx';
import { Chip } from 'components/ui/Chip/Chip';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { setFilters } from 'store/slices/filtersSlice';

// type genre = 'комедия' | 'ужасы' | 'криминал' | 'драма' | 'мелодрама';
// const genres: genre[] = ['комедия', 'ужасы', 'криминал', 'драма', 'мелодрама'];

// type country = 'Россия' | 'США' | 'Германия' | 'Франция' | 'Австралия';
// const countries: country[] = [
//   'Россия',
//   'США',
//   'Германия',
//   'Франция',
//   'Австралия',
// ];

// interface IRange {
//   from?: string;
//   to?: string;
// }

// export interface IFilterState {
//   genre?: genre[];
//   data?: IRange;
//   raiting?: string;
//   country?: country[];
// }

// interface IFilterProps {
//   defaultFilters?: IFilterState;
//   onFilterSet?: (filters: IFilterState) => void;
//   className?: string;
// }

// export const Filters: React.FC<IFilterProps> = ({
//   defaultFilters,
//   onFilterSet,
//   className,
// }) => {
//   const { filters, setFilters } = useContext(FilterContext);

//   const onGenreChange = (genre: genre, isCheked: boolean) => {
//     if (isCheked) {
//       setFilters({ ...filters, genre: [...filters.genre, genre] });
//     } else {
//       setFilters({
//         ...filters,
//         genre: filters.genre?.filter((el) => el !== genre),
//       });
//     }
//   };

//   const onСountryChange = (country: country, isCheked: boolean) => {
//     if (isCheked) {
//       setFilters({ ...filters, country: [...filters.country, country] });
//     } else {
//       setFilters({
//         ...filters,
//         country: filters.country?.filter((el) => el !== country),
//       });
//     }
//   };

//   const changeRaiting = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFilters({ ...filters, raiting: event.target.value });
//   };

//   const handleChange = () => {
//     onFilterSet(filters);
//   };

//   return (
//     <div className={cx(styles.wrapper, className)}>
//       <div className={styles.filters}>
//         <div className={styles.filter__title}>Жанры</div>
//         <div className={styles.filter__value}>
//           {genres.map((el) => (
//             <>
//               <input
//                 id={el}
//                 type="checkbox"
//                 checked={filters.genre?.includes(el)}
//                 onChange={(event) => onGenreChange(el, event.target.checked)}
//               />
//               <label htmlFor={el}>{el}</label>
//             </>
//           ))}
//         </div>

//         <div className={styles.filter__title}>Страна</div>

//         <div className={styles.filter__value}>
//           {countries.map((el) => (
//             <>
//               <input
//                 id={el}
//                 type="checkbox"
//                 checked={filters.country?.includes(el)}
//                 onChange={(event) => onСountryChange(el, event.target.checked)}
//               />
//               <label htmlFor={el}>{el}</label>
//             </>
//           ))}
//         </div>

//         <div className={styles.filter__title}>Рейтинг</div>
//         <div className={styles.filter__value}>
//           <input
//             type="range"
//             min={1}
//             max={10}
//             value={filters.raiting}
//             onChange={changeRaiting}
//           ></input>
//         </div>
//         <button onClick={handleChange}>Отправить</button>
//       </div>
//     </div>
//   );
// };

// type genre = 'комедия' | 'ужасы' | 'криминал' | 'драма' | 'мелодрама';
// const genres: genre[] = ['комедия', 'ужасы', 'криминал', 'драма', 'мелодрама'];

// type country = 'Россия' | 'США' | 'Германия' | 'Франция' | 'Австралия';
// const countries: country[] = [
//   'Россия',
//   'США',
//   'Германия',
//   'Франция',
//   'Австралия',
// ];

export type genre =
  | 'Комедия'
  | 'Ужасы'
  | 'Фантастика'
  | 'Триллеры'
  | 'Боевики'
  | 'Мелодрамы'
  | 'Детективы'
  | 'Приключения'
  | 'Фэнтези'
  | 'Военные'
  | 'Семейные'
  | 'Исторические'
  | 'Драмы'
  | 'Документальные'
  | 'Детские'
  | 'Криминал'
  | 'Биографии'
  | 'Вестерны'
  | 'Фильмы-нуар'
  | 'Спортивные'
  | 'Короткометражки'
  | 'Музыкальные'
  | 'Мюзиклы';
const genres: genre[] = [
  'Комедия',
  'Ужасы',
  'Фантастика',
  'Триллеры',
  'Боевики',
  'Мелодрамы',
  'Детективы',
  'Приключения',
  'Фэнтези',
  'Военные',
  'Семейные',
  'Исторические',
  'Драмы',
  'Документальные',
  'Детские',
  'Криминал',
  'Биографии',
  'Вестерны',
  'Фильмы-нуар',
  'Спортивные',
  'Короткометражки',
  'Музыкальные',
  'Мюзиклы',
];

export type country =
  | 'Россия'
  | 'СССР'
  | 'США'
  | 'Казахстан'
  | 'Франция'
  | 'Южная Корея'
  | 'Великобритания'
  | 'Япония'
  | 'Италия'
  | 'Испания'
  | 'Германия'
  | 'Турция'
  | 'Швеция'
  | 'Дания'
  | 'Норвегия'
  | 'Гонконг'
  | 'Австралия';
const countries: country[] = [
  'Россия',
  'СССР',
  'США',
  'Казахстан',
  'Франция',
  'Южная Корея',
  'Великобритания',
  'Япония',
  'Италия',
  'Испания',
  'Германия',
  'Турция',
  'Швеция',
  'Дания',
  'Норвегия',
  'Гонконг',
  'Австралия',
];

interface IRange {
  from?: string;
  to?: string;
}

export interface IFilterState {
  genre?: genre[];
  data?: IRange;
  raiting?: string;
  country?: country;
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
  const filters = useSelector(
    (state: RootState) => state.filterReducer.filters
  );
  const dispatch = useDispatch();

  const onGenreChange = (genre: genre, isCheked: boolean) => {
    if (isCheked) {
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
    const selectedCountry = event.target.value as country;
    dispatch(setFilters({ ...filters, country: selectedCountry }));
  };

  const changeRaiting = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ ...filters, raiting: event.target.value }));
  };

  const handleChange = () => {
    onFilterSet(filters);
  };

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.filter__title}>Жанры</div>
      <div className={styles.filter__value}>
        {genres.map((el) => (
          <Chip title={el} onClick={onGenreChange} />
        ))}
      </div>

      <div className={styles.filter__title}>Страна</div>
      <div className={styles.filter__value}>
        <select value={filters.country} onChange={onCountryChange}>
          <option value="">Выберите страну</option>
          {countries.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filter__title}>Рейтинг</div>
      <div className={styles.filter__value}>
        <input
          type="range"
          min={1}
          max={10}
          value={filters.raiting}
          onChange={changeRaiting}
        />
      </div>
      <button onClick={handleChange}>Отправить</button>
    </div>
  );
};
