import { useEffect, useState } from "react";
import {getRandomFilm} from "../../utils/api";
import {IFilm} from "../../types/films"
import { FilmDescription } from "components/FilmDescription/FilmDescription";

export const RandomFilm: React.FC = () => {

    const [film, setFilm] = useState<IFilm>();

useEffect(()=>{
getRandomFilm()
.then(res => setFilm(res));
}, [])

console.log(film)
if (!film) return "Загрузка"

return <FilmDescription film={film}/>
}