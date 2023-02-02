import { FC } from 'react';

import Modal from '../Utilities/Modal';
import { Movie } from '../../interfaces/Movie';

interface DeleteMovieModalProps {
  show: boolean;
  handleClose: (...args: any[]) => void;
  handleRemoveMovie: (...args: any[]) => void;
  movie?: Movie;
}

const DeleteMovieModal: FC<DeleteMovieModalProps> = ({
  show = false,
  handleClose,
  handleRemoveMovie,
  movie,
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
