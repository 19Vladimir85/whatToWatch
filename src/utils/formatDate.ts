import { IPerson, IGenre, ICountry, IFilm } from 'types/types';

const formatFilds = (data: IGenre[] | ICountry[]) =>
  data.map((el) => el.name).join(', ');

export const formatData = (data: IFilm | IPerson, descFilds) => {
  const filmDesc = {};
  Object.entries(data).forEach(([key, data]) => {
    if (descFilds[key]) {
      if (key === 'genres' || key === 'countries') {
        filmDesc[descFilds[key]] = formatFilds(data);
      } else {
        filmDesc[descFilds[key]] = data;
      }
    }
  });
  return filmDesc;
};
