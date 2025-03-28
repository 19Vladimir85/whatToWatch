import styles from './Search.module.css';
import { useState } from 'react';
import { IFilm } from 'types/types';
import { getFilmsByName } from 'utils/api';
import { Film } from '../../ui/Film/Film';
import { resetWarned } from 'antd/es/_util/warning';

export function Search() {
  const [value, setValue] = useState<string>('');
  const [films, setFilms] = useState<IFilm[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    setIsPopupOpen(event.target.value.length > 0);
    getFilmsByName(event.target.value).then((res: IFilm[]) => {
      setFilms(res);
      console.log(res);
    });
  };

  const handleBlur = () => {
    setIsPopupOpen(false);
    setValue('');
  };

  return (
    <div className={styles.wrapper}>
      <form onBlur={handleBlur} className={styles.form}>
        <input
          value={value}
          className={styles.input}
          type="search"
          placeholder="Поиск по названию..."
          onChange={onChange}
        ></input>
      </form>
      {isPopupOpen && (
        <div className={styles.popUp}>
          {films?.map((film) => (
            <Film {...film} isSmall />
          ))}
        </div>
      )}
    </div>
  );
}
