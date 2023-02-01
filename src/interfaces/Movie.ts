export interface Movies extends Array<Movie> {}

export interface Movie {
  id: number;
  title: string;
  tagline?: string;
  vote_average: number;
  vote_count?: number;
  release_date: string;
  poster_path: any;
  overview: string;
  budget?: number;
  revenue?: number;
  genres: Array<string>;
  runtime: number;
}
