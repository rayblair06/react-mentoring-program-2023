import React from 'react';
import '../../styles/app.scss';
import Modal from '../Utilities/Modal';
import { Movie } from '../../interfaces/Movie';

const DeleteMovieModal = ({
  show = false,
  handleClose,
  handleRemoveMovie,
  movie,
}: {
  show: any;
  handleClose: any;
  handleRemoveMovie: any;
  movie?: Movie;
}) => (
  <Modal show={show} handleClose={handleClose}>
    <div style={{ margin: '50px' }}>
      <div>
        <h1>Delete Movie</h1>
        <p>Are you sure you want to delete this movie?</p>
      </div>

      {movie && (
        <div style={{ textAlign: 'right' }}>
          <button
            type="button"
            className="button"
            onClick={() => {
              handleRemoveMovie(movie.id);
              handleClose();
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  </Modal>
);

export default DeleteMovieModal;