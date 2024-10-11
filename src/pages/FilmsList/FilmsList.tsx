import { IFilm } from "types/films";
import { Film } from "components/Film/Film";

interface IFilmsList {
isLoading?: boolean;
films: IFilm[];
}

export const FilmsList: React.FC<IFilmsList> = ({isLoading, films}) => {
return (
    isLoading ? <div>Загрузка</div> : <div>{films.map(item=><Film key={item.id} {...item}/>)}</div>
)
}