export interface IPoster {
  url: string;
  previewUrl: string;
}

export interface IFilmsRating {
  kp: number;
  imdb: number;
}

export interface IGenre {
  name: string;
}

export interface ICountry {
  name: string;
}

export interface IPerson {
  id: number;
  photo: string;
  name: string;
  profession: string;
}

export interface IFilm {
  name?: string;
  alternativeName?: string;
  createdAt?: string;
  description?: string;
  poster?: IPoster;
  year?: number;
  rating?: IFilmsRating;
  genres?: IGenre[];
  countries?: ICountry[];
  persons?: IPerson[];
  id: number;
  total?: number;
}

export interface IRange {
  from?: string;
  to?: string;
}

export interface IComment {
  autor: string;
  data: Date;
  content: string;
  isLike?: boolean;
}
