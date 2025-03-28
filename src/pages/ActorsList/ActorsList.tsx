import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './ActorsList.module.css';
import { Description } from 'components/ui/FilmDescription copy/FilmDescription';
import { IPerson, IFilm } from 'types/types';
import { getFilm } from 'utils/api';

export const ActorsList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const filmId = searchParams.get('filmId');
  const [actors, setActors] = useState<IPerson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filmId) {
      setError('Фильм не найден');
      setLoading(false);
      return;
    }

    const fetchActors = async () => {
      try {
        const filmData: IFilm = await getFilm(filmId);
        setActors(filmData.persons || []);
      } catch (err) {
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [filmId]);

  const navigate = useNavigate();

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!actors.length) return <div>Актёры не найдены</div>;

  return (
    <div className={styles.actorsList}>
      <h2>Актёры фильма</h2>
      <div className={styles.actorContainer}>
        {actors.map((actor) => (
          <div key={actor.id} className={styles.actorCard}>
            <Description
              title={actor.name}
              desc={{ Профессия: actor.profession }}
              poster={actor.photo}
            />
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </div>
  );
};

export default ActorsList;
