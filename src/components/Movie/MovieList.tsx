import 'styles/app.scss';
import MovieCard from './MovieCard';
import { Movie } from 'interfaces/Movie';
import { FC } from 'react';

interface MovieListProps {
  movies: Array<Movie>;
}

const MovieList: FC<MovieListProps> = ({ movies }) => (
  <div id="movielist">
    <p id="results">
      <span>{movies.length}</span> movies found
    </p>

    <div id="movielist__container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

export default MovieList;
