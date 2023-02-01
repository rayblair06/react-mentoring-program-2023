import React, { useState, useEffect } from 'react';
import { Movie } from '../../interfaces/Movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Utilities/Dropdown';

const MovieCard = ({
  key,
  movie,
  handleOpenModal,
  handleSelectedMovie,
}: {
  key: any;
  movie: Movie;
  handleOpenModal: any;
  handleSelectedMovie: any;
}) => {
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
    <div className="card" onMouseEnter={handleShowOptions} onMouseLeave={handleHideOptions}>
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

      {/* <ul className="custom-menu" onMouseLeave={handleHideDropdown}>
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
        </ul> */}

      <img src={movie.poster_path} alt={movie.poster_path} height="455" width="322" />

      <div className="card__title">
        <p>{movie.title}</p>

        <span>{movie.release_date}</span>
      </div>
      <p className="card__subtitle">{movie.genres.join(', ').toString()}</p>
    </div>
  );
};

export default MovieCard;
