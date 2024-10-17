import styles from './Search.module.css';
import { useState } from 'react';
import { IFilm } from 'types/films';
import { getFilmsByName } from 'utils/api';
import { Film } from '../Film/Film';

export function Search() {
  const [value, setValue] = useState<string>('');
  const [films, setFilms] = useState<IFilm[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    getFilmsByName(event.target.value).then((res: IFilm[]) => setFilms(res));
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input value={value} className={styles.input} type="search" placeholder="Поиск по названию..." onChange={onChange}></input>
      </form>
      {value && (
        <div className={styles.popUp}>
          {films.map((film) => (
            <Film {...film} isSmall />
          ))}
        </div>
      )}
    </div>
  );
}
