import React, { useState } from 'react';
import '../../styles/app.scss';
import Modal from '../Utilities/Modal';
import Select from 'react-select';
import MovieForm from '../Movie/MovieForm';

const AddMovieModal = ({
  show = false,
  handleClose,
  handleAddMovie,
}: {
  show: any;
  handleClose: any;
  handleAddMovie: any;
}) => {
  const [showDropdown, setDropdown] = useState(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleShowDropdown = () => {
    setDropdown(true);
  };

  const handleHideDropdown = () => {
    setDropdown(false);
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div id="add-movie-modal">
        <div>
          <h1>Add Movie</h1>
        </div>

        <MovieForm />

        <div style={{ textAlign: 'right' }}>
          <button type="button" className="button-outline">
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              // handleAddMovie(movie); TODO:
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
