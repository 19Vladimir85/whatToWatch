import { useState, useEffect } from "react";
import { Carousel } from "components/Carousel/Carousel";
import { getFilmsByGenres} from "utils/api";
import { Film } from "components/Film/Film";
import { IFilm } from "types/films";
import { Link } from "react-router-dom";

interface IFilmCarousel{
  title: string;
  genre: string;
  }
export const FilmCarousel: React.FC<IFilmCarousel> = ({title, genre}) => {
  const [films, setFilms] = useState<IFilm[]>([]);


  useEffect(() => {
    getFilmsByGenres(genre)
    .then((res)=>setFilms(res))
    }, [genre])
  return (
    <>
    <Link to={genre}>
        <div>{title}</div>
      </Link>
      <Carousel setSlideIndex={() => {}}>
        {films?.map(item=><Film key={item.id} {...item}/>)}
      </Carousel>
      </>
  );
};

