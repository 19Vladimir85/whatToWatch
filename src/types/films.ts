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

export interface IFilm{
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