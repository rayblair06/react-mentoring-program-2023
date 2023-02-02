import { Movie } from 'interfaces/Movie';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Utilities/Dropdown';

interface MovieCardProps {
  key: number;
  movie: Movie;
  handleOpenModal: (...args: any[]) => void;
  handleSelectedMovie: (...args: any[]) => void;
}

const MovieCard: FC<MovieCardProps> = ({ key, movie, handleOpenModal, handleSelectedMovie }) => {
  const [showOptions, setOptions] = useState(false);

  const handleShowOptions = () => {
    setOptions(true);
  };

  const handleHideOptions = () => {
    setOptions(false);
  };

  const [showDropdown, setDropdown] = useState(false);

  const handleShowDropdown = () => {
    setDropdown(true);
  };

  const handleHideDropdown = () => {
    setDropdown(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleShowOptions}
      onMouseLeave={handleHideOptions}
      onClick={() => {
        handleSelectedMovie(movie.id);
      }}
    >
      {showOptions && (
        <div className="options" onClick={handleShowDropdown}>
          <div>
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>
      )}

      <Dropdown show={showDropdown} handleClose={handleHideDropdown}>
        <li
          data-action="edit"
          onClick={() => {
            handleOpenModal('editMovieModal');
            handleSelectedMovie(movie.id);
          }}
        >
          Edit
        </li>
        <li
          data-action="delete"
          onClick={() => {
            handleOpenModal('deleteMovieModal');
            handleSelectedMovie(movie.id);
          }}
        >
          Delete
        </li>
      </Dropdown>

      <img src={movie.image} alt={movie.image} height="455" width="322" />

      <div className="card__title">
        <p>{movie.name}</p>

        <span>{movie.releaseDate.getFullYear()}</span>
      </div>
      <p className="card__subtitle">{movie.genres.join(', ').toString()}</p>
    </div>
  );
};

export default MovieCard;
