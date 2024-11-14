const URL = 'https://api.kinopoisk.dev/v1.4';

export function getFilmsByGenres(value) {
  return fetch(`${URL}/movie?genres.name=${value}`, {
    headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getFilmsByFilters(value) {
  return fetch(`${URL}/movie?${value}&limit=100`, {
    headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getRandomFilm() {
  return fetch(`${URL}/movie/random?raiting.kp=7`, {
    headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export function getAllFilms() {
  return fetch(`${URL}/movie?limit=100`, {
    headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getFilmsByName(value) {
  return fetch(`${URL}/movie/search?query=${value}`, {
    headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
  })
    .then((res) => res.json())
    .then((res) => res.docs)
    .catch((error) => console.log(error));
}

export function getFilm(id) {
  return fetch(`${URL}/movie/${id}`, {
    headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

export function getAllGenres() {
  return fetch(
    'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
    {
      headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
    }
  ).then((res) => res.json());
}

export function getAllCounties() {
  return fetch(
    'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name',
    {
      headers: { 'X-API-KEY': 'SSEYD2Z-R8V4489-PE8C1K4-GXFZH3A' },
    }
  ).then((res) => res.json());
}
