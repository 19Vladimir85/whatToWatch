import { useContext } from "react";
import styles from "./Filters.module.css";
import { FilterContext } from "context/filterContext";

interface IRange {
  from?: string;
  to?: string;
}

export interface IFilterState {
  genre?: string[];
  data?: IRange;
  raiting?: string;
  country?: string[];
}

interface IFilterProps {
  defaultFilters?: IFilterState;
  onFilterSet?: (filters: IFilterState) => void;
}


type genre = "комедия" | "ужасы" | "криминал" | "драма" | "мелодрама";
const genres: genre[] = ["комедия", "ужасы", "криминал", "драма", "мелодрама"];

type country = "Россия" | "США" | "Германия" | "Франция" | "Австралия";
const countries: country[] = ["Россия", "США", "Германия", "Франция", "Австралия"];

export const Filters: React.FC<IFilterProps> = ({
  defaultFilters,
  onFilterSet,
}) => {

const {filters, setFilters} = useContext(FilterContext)

  const onGenreChange = (genre: genre, isCheked: boolean) => {
    if (isCheked) {
      setFilters({ ...filters, genre: [...filters.genre, genre] });
    } else {
      setFilters({
        ...filters,
        genre: filters.genre?.filter((el) => el !== genre),
      });
    }
  };

  const onСountryChange = (country: country, isCheked: boolean) => {
    if (isCheked) {
      setFilters({ ...filters, country: [...filters.country, country] });
    } else {
      setFilters({
        ...filters,
        country: filters.country?.filter((el) => el !== country),
      });
    }
  };

  console.log(filters);

  const changeRaiting = (event) => {
    setFilters({...filters, raiting: event.target.value})
  }

const handleChange = () => {
  onFilterSet(filters)
}

  console.log(filters);


  return (
    
      <div className={styles.filter}>
        <div className={styles.filter__title}>Жанры</div>
        <div className={styles.filter__value}>
        {genres.map((el) => (
          <>
            <input
              id={el}
              type="checkbox"
              checked={filters.genre?.includes(el)}
              onChange={(event) => onGenreChange(el, event.target.checked)}
            />
            <label htmlFor={el}>{el}</label>
          </>

        
        ))}
        </div>

        <div className={styles.filter__title}>Страна</div>
        <div className={styles.filter__value}>
        {countries.map((el) => (
          <>
            <input
              id={el}
              type="checkbox"
              checked={filters.country?.includes(el)}
              onChange={(event) => onСountryChange(el, event.target.checked)}
            />
            <label htmlFor={el}>{el}</label>
          </>

        
        ))}
        </div>

        <div className={styles.filter__title}>Рейтинг</div>
        <div className={styles.filter__value}>
          <input type="range" min={1} max={10} value={filters.raiting} onChange={changeRaiting}></input>
        </div>
<button onClick={handleChange}>Отправить</button>
      </div>
   
  );
};
