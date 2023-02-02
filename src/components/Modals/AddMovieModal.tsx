import { FC } from 'react';
   
import Modal from '../Utilities/Modal';
import MovieForm from '../Movie/MovieForm';

interface AddMovieModalProps {
  show: any;
  handleClose: any;
  handleAddMovie: any;
  genres: Array<string>;
}

const AddMovieModal: FC<AddMovieModalProps> = ({
  show = false,
  handleClose,
  handleAddMovie,
  genres,
}) => {
  const handleReset = () => {
    // TODO: Implement in Task 5
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div id="add-movie-modal">
        <div>
          <h1>Add Movie</h1>
        </div>

        <MovieForm genres={genres} />

        <div style={{ textAlign: 'right' }}>
          <button type="button" className="button-outline" onClick={handleReset}>
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              // handleAddMovie(movie); TODO: To be completed in Task 5
              handleClose();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddMovieModal;
