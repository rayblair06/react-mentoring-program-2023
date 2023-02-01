import { FC } from 'react';
import 'styles/app.scss';
import LogoImage from 'images/netflixroulette.png';
import { Movie } from 'interfaces/Movie';

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

      <div onClick={() => handleSelectedMovie(null)}>Search</div>
    </div>

    <main>{movie && <p>{movie.name}</p>}</main>
  </>
);

export default HeaderMovie;
