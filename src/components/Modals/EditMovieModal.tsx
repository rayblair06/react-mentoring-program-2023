import React from 'react';
import '../../styles/app.scss';
import Modal from '../Utilities/Modal';
import { Movie } from '../../interfaces/Movie';
import MovieForm from '../Movie/MovieForm';

const EditMovieModal = ({
  show = false,
  handleClose,
  handleEditMovie,
  movie,
}: {
  show: any;
  handleClose: any;
  handleEditMovie: any;
  movie?: Movie;
}) => (
  <Modal show={show} handleClose={handleClose}>
    <div id="edit-movie-modal">
      <div>
        <h1>Edit Movie</h1>
      </div>

      <MovieForm movie={movie} />

      <div style={{ textAlign: 'right' }}>
        <button type="button" className="button-outline">
          Reset
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            handleEditMovie(movie);
            handleClose();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  </Modal>
);

export default EditMovieModal;
