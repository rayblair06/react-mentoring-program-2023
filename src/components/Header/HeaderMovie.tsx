import { FC } from 'react';

import LogoImage from 'images/netflixroulette.png';
import { Movie } from 'interfaces/Movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface HeaderMovieProps {
  movie?: Movie;
  handleSelectedMovie: (...args: any[]) => void;
}

const HeaderMovie: FC<HeaderMovieProps> = ({ movie, handleSelectedMovie }) => (
  <>
    <div id="top">
      <div>
        <img src={LogoImage} />
      </div>

      <div id="top-search" onClick={() => handleSelectedMovie(null)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>

    <main>
      {movie && (
        <div id="movie-header">
          <div id="movie-image">
            <img src={movie.image} alt={movie.image} height="455" width="322" />
          </div>

          <div id="movie-details">
            <div id="movie-title">
              <h1>{movie.name}</h1>
              <h2>{movie.genres}</h2>
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
  </>
);

export default HeaderMovie;
