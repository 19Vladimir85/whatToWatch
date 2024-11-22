import { useState, useEffect } from 'react';
import { Carousel } from 'components/ui/Carousel/Carousel';
import { getFilmsByGenres } from 'utils/api';
import { Film } from 'components/ui/Film/Film';
import { IFilm } from 'types/types';
import { Link } from 'react-router-dom';

interface IFilmCarousel {
  title: string;
  genre: string;
}
export const FilmCarousel: React.FC<IFilmCarousel> = ({ title, genre }) => {
  const [films, setFilms] = useState<IFilm[]>([]);

  useEffect(() => {
    getFilmsByGenres(genre).then((res: IFilm[]) => setFilms(res));
  }, [genre]);
  return (
    <>
      <Link to={genre}>{title}</Link>
      <Carousel setSlideIndex={() => {}}>
        {films?.map((item) => (
          <Film key={item.id} {...item} />
        ))}
      </Carousel>
    </>
  );
};
