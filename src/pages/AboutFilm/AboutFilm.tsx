import { useEffect, useState } from 'react';
import { getFilm, getRandomFilm } from '../../utils/api';
import { IFilm } from '../../types/types';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { addFilm, deleteFilm } from 'store/slices/favoriteSlice';
import { LikeButton } from 'components/ui/LikeButton/LikeButton';
import { PersonList } from 'components/ui/PersonList/PersonList';
import { CommentField } from 'components/business/CommentField/CommentField';
import styles from './AboutFilm.module.css';
import { Description } from 'components/ui/FilmDescription copy/FilmDescription';
import { formatData } from 'utils/formatDate';
const descFilds = {
  name: 'Название',
  description: 'Описание',
  genres: 'Жанр',
  countries: 'Страна',
  movieLength: 'Длительность',
  createdAt: 'Год',
};

export const AboutFilm: React.FC = () => {
  const { pathname } = useLocation();
  const [film, setFilm] = useState<IFilm>();

  const { filmId } = useParams();

  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.favoriteReducer);
  const isLike = films.some((el) => el.id === film.id);

  const onSetLike = () => {
    if (isLike) {
      dispatch(deleteFilm(film.id));
    } else {
      dispatch(addFilm(film));
    }
  };

  useEffect(() => {
    if (pathname.includes('random')) {
      getRandomFilm().then((res) => setFilm(res));
    } else {
      getFilm(filmId).then((res) => setFilm(res));
    }
  }, [filmId]);

  if (!film) return <>Загрузка</>;
  console.log(film);

  return (
    <>
      <div className={styles.film}>
        <div className={styles.film__info}>
          <Description
            title="О фильме"
            desc={formatData(film, descFilds)}
            poster={film.poster.url}
          />
          <LikeButton isLike={isLike} setLike={onSetLike} />
          <PersonList
            title="В главных ролях"
            showPersonsCount={5}
            personList={film.persons || []}
            filmId={film.id.toString()}
          />
        </div>
      </div>
      <CommentField id={film.id} />
    </>
  );
};
