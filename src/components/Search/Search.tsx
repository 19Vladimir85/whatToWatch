import styles from "./Search.module.css";
import { useCallback, useState } from "react";
import { useNavigate, useLocation} from "react-router-dom"
import { IFilm } from "types/films";
import { getFilmsByName } from "utils/api";
import {Film} from "../Film/Film"

export function Search() {

const [value, setValue] = useState<string>("");
const [films, setFilms] = useState<IFilm[]>([]);
const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false)

// const location = useLocation();

// const navigate = useNavigate()

// const params = new URLSearchParams(location.search);

// const onChange = useCallback((event)=>{
// setValue(event.target.value)
// params.set("query", event.target.value);
// const stringParams = params.toString()
// console.log(stringParams);
// navigate(location.pathname + "?" + stringParams)
// }, [location.pathname])

const onChange = (event) => {
  setValue(event.target.value)
  getFilmsByName(event.target.value)
  .then((res)=> setFilms(res))
  console.log(films);
}


  return (
    <div className={styles.wrapper}>
    <form className={styles.form}>
      <input
      value={value}
        className={styles.input}
        type="search"
        placeholder="Поиск по названию..."
        onChange={onChange}
      ></input>
    </form>
    {value && 
    <div className={styles.popUp}>
      {films.map((film)=> <Film {...film} isSmall/>)}
    </div>
}
    </div>
  );
}
