import { useState, useEffect } from 'react';
import { Carousel } from 'components/ui/Carousel/Carousel';
import { getFilmsByGenres } from 'utils/api';
import { Film } from 'components/ui/Film/Film';
import { IFilm } from 'types/types';
import { Link } from 'react-router-dom';
import styles from './FilmsCarousel.module.css';
import classNames from 'classnames';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface IFilmCarousel {
  title: string;
  genre: string;
}

export const FilmCarousel: React.FC<IFilmCarousel> = ({ title, genre }) => {
  const [films, setFilms] = useState<IFilm[]>([]);

  const { isChecked } = useSelector((state: RootState) => state.themeReducer);

  useEffect(() => {
    getFilmsByGenres(genre).then((res: IFilm[]) => setFilms(res));
  }, [genre]);

  return (
    <div className={styles.wrapper}>
      <Link
        className={classNames(styles.title, isChecked ? 'light' : 'dark')}
        to={genre}
      >
        {title}
      </Link>
      <Carousel
        customSettings={{
          infinite: true,
          speed: 1500,
          slidesToShow: 1,
          slidesToScroll: 5,
          autoplay: true,
          autoplaySpeed: 4000,
          centerPadding: '487px',
          centerMode: true,
          className: 'center',
        }}
        setSlideIndex={() => {}}
      >
        {films?.map((item) => (
          <Film key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};
