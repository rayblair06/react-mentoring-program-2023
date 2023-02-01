import { GenreEnum } from '../constants';

export interface Movies extends Array<Movie> {}

export interface Movie {
  id: number;
  name: string;
  genres: GenreEnum[];
  image: string;
  releaseDate: Date;
  runtime: string;
  rating: number;
  overview: string;
}
