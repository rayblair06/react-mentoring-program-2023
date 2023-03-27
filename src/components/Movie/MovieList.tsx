import { FC } from 'react';
import { Movie } from 'interfaces/Movie';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Array<Movie>;
  handleOpenModal: (...args: any[]) => void;
  handleSelectedMovie: (...args: any[]) => void;
}

const MovieList: FC<MovieListProps> = ({ movies, handleOpenModal, handleSelectedMovie }) => (
  <div id="movielist">
    <p id="results">
      <span>{movies.length}</span> movies found
    </p>

    <div id="movielist__container">
      {movies.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleOpenModal={handleOpenModal}
          handleSelectedMovie={handleSelectedMovie}
        />
      ))}
    </div>
  </div>
);

export default MovieList;
