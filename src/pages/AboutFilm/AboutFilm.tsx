import { useEffect, useState } from 'react';
import { getFilm } from '../../utils/api';
import { IFilm } from '../../types/types';

import { FilmDescription } from 'components/FilmDescription/FilmDescription';
import { useParams } from 'react-router-dom';

export const AboutFilm: React.FC = () => {
  const [film, setFilm] = useState<IFilm>();

  const { filmId } = useParams();

  useEffect(() => {
    getFilm(filmId).then((res) => setFilm(res));
  }, [filmId]);

  if (!film) return <>Загрузка</>;

  return <FilmDescription film={film} />;
};
