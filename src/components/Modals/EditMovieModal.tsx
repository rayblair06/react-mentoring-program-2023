import { FC } from 'react';

import Modal from '../Utilities/Modal';
import { Movie } from '../../interfaces/Movie';
import MovieForm from '../Movie/MovieForm';

interface EditMovieModalProps {
  show: boolean;
  handleClose: (...args: any[]) => void;
  handleEditMovie: (...args: any[]) => void;
  movie?: Movie;
  genres: Array<string>;
}

const EditMovieModal: FC<EditMovieModalProps> = ({
  show = false,
  handleClose,
  handleEditMovie,
  movie,
  genres,
}) => (
  <Modal show={show} handleClose={handleClose}>
    <div id="edit-movie-modal">
      <div>
        <h1>Edit Movie</h1>
      </div>

      <MovieForm movie={movie} genres={genres} />

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
