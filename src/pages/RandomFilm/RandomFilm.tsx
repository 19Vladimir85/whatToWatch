import { useEffect, useState } from 'react';
import { getRandomFilm } from '../../utils/api';
import { IFilm } from '../../types/types';
import { FilmDescription } from 'components/FilmDescription/FilmDescription';

export const RandomFilm: React.FC = () => {
  const [film, setFilm] = useState<IFilm>();

  useEffect(() => {
    getRandomFilm().then((res) => setFilm(res));
  }, []);

  if (!film) return <>Загрузка</>;

  return <FilmDescription film={film} />;
};
