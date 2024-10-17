import { useEffect, useState } from "react"
import { getAllFilms, getFilmsByFilters} from "utils/api";
import { FilmsList } from "pages/FilmsList/FilmsList";
import { Filters } from "components/business/Filters/Filters";
import { useNavigate } from "react-router-dom";



export const AllFilms: React.FC = () => {
    const [films, setFilms] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
getAllFilms()
.then((films)=>setFilms(films))
    }, [])

    function formatDate(filters) {
      const urlParts = [];  
      for(let key in filters) {
      if(key === "genre") {
       urlParts.push(filters.genre.map((item)=>`genres.name=${item}`).join("&"));
      }
      if(key === "raiting") {
        urlParts.push(`rating.kp=${filters.raiting}-10`);
       }
       if(key === "country") {
        urlParts.push(filters.country.map((item)=>`countries.name=${item}`).join("&"))
       }
      }
      return urlParts.join("&");
    }

    const onSend = (filters) => {
  const url = formatDate(filters);
  navigate({search: url}, {replace: true})
  getFilmsByFilters(url)
  .then(res => setFilms(res))
    }
    
    return (
    <>
    <Filters onFilterSet={onSend}/>
    <FilmsList films={films}/>
    </>
    )
}