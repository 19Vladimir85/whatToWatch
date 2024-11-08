export interface IPoster {
  url: string;
  previewUrl: string;
}

export interface IRating {
  kp: number;
  imdb: number;
}

export interface IGenre {
  name: string;
}

export interface ICountry {
  name: string;
}

interface IPerson {
  id: number;
  photo: string;
  name: string;
}

export interface IFilm {
  name?: string;
  alternativeName?: string;
  createdAt?: string;
  description?: string;
  poster?: IPoster;
  year?: number;
  rating?: IRating;
  genres?: IGenre[];
  countries?: ICountry[];
  persons?: IPerson[];
  id: number;
}

export interface IRange {
  from?: string;
  to?: string;
}

export interface IFilmProp extends IFilm {
  isSmall?: boolean;
}

export interface IFilmDescription {
  film: IFilm;
}

export interface IMenuItem {
  name: string;
  url: string;
}

export interface IButton {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactElement;
}

export interface IChip {
  title: string;
  checked?: boolean;
  onClick: (item: string, checked: boolean) => void;
}

export interface IFieldInfo {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export interface IFilmCarousel {
  title: string;
  genre: string;
}

export interface IRating {
  size?: 'small' | 'big';
  startRating?: number;
}

export interface IFilmsList {
  isLoading?: boolean;
  films: IFilm[];
}
