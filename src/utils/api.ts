import { IGenre, IFilm, ICountry } from 'types/types';

const URL = 'https://api.kinopoisk.dev/v1';
const headers = {
  'X-API-KEY': 'YMX184S-JH0411P-QWZT421-QQDJ9QG',
  // 'X-API-KEY': 'C75V1KG-XGTM7V7-GMYGZJG-WHQMG7G',
  // 'YMX184S-JH0411P-QWZT421-QQDJ9QG'
};

export function getFilmsByGenres(value): Promise<IFilm[]> {
  const randomNum = Math.round(Math.random() * (1 - 50)) + 50;
  return fetch(`${URL}/movie?genres.name=${value}&limit=10&page=${randomNum}`, {
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getFilmsByFilters(value) {
  return fetch(`${URL}/movie${value}`, { headers })
    .then((res) => res.json())
    .then((res) => ({
      films: res.docs,
      total: res.total,
    }))
    .catch((error) => {
      console.error('Ошибка загрузки фильмов:', error);
      return { films: [], total: 0 };
    });
}

export function getRandomFilm(): Promise<IFilm> {
  return fetch(`${URL}/movie/random?rating.kp=7`, {
    headers,
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export function getAllFilms(): Promise<IFilm[]> {
  return fetch(`${URL}/movie?limit=100`, {
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getFilmsByName(value): Promise<IFilm[]> {
  return fetch(`https://api.kinopoisk.dev/v1.4/movie/search?query=${value}`, {
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getFilm(id): Promise<IFilm> {
  return fetch(`${URL}/movie/${id}`, {
    headers,
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export function getAllGenres(): Promise<IGenre[]> {
  return fetch(`${URL}/movie/possible-values-by-field?field=genres.name`, {
    headers,
  }).then((res) => res.json());
}

export function getAllCounties(): Promise<ICountry[]> {
  return fetch(`${URL}/movie/possible-values-by-field?field=countries.name`, {
    headers,
  }).then((res) => res.json());
}
