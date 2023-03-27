import { FC } from 'react';

import { Movie } from 'interfaces/Movie';

interface HeaderMovieProps {
  movie?: Movie;
  handleSelectedMovie: (...args: any[]) => void;
}

const HeaderMovie: FC<HeaderMovieProps> = ({ movie, handleSelectedMovie }) => (
  <main>
    {movie && (
      <div id="movie-header">
        <div id="movie-image">
          <img src={movie.image} alt={movie.name} height="455" width="322" />
        </div>

        <div id="movie-details">
          <div id="movie-title">
            <h1>
              {movie.name}

              <span>{movie.rating}</span>
            </h1>

            <h2>{movie.genres.join(', ').toString()}</h2>
          </div>

          <div id="movie-info">
            <div>{movie.releaseDate.getFullYear()}</div>

            <div>{movie.runtime}</div>
          </div>

          <div id="movie-overview">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    )}
  </main>
);

export default HeaderMovie;
