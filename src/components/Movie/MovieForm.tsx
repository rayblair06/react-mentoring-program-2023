import React, { useState } from 'react';
import '../../styles/app.scss';
import Modal from '../Utilities/Modal';
import Select from 'react-select';
import { Movie } from 'src/interfaces/Movie';

const MovieForm = ({ movie }: { movie?: Movie }) => {
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
    <div className="row">
      <div className="column">
        <label>
          Title
          <input type="text" placeholder="Title" value={movie?.title ? movie.title : ''} />
        </label>
      </div>

      <div className="column">
        <label>
          Release Date
          <input
            type="date"
            placeholder="Select Date"
            value={movie?.release_date ? movie.release_date : ''}
          />
        </label>
      </div>

      <div className="column">
        <label>
          Movie Url
          <input
            type="text"
            placeholder="https://"
            // value={movie?.url ? movie.url : ''}
          />
        </label>
      </div>

      <div className="column">
        <label>
          vote_average
          <input
            type="text"
            placeholder="7.8"
            value={movie?.vote_average ? movie.vote_average : ''}
          />
        </label>
      </div>

      <div className="column">
        <label>
          Genre
          <Select
            options={options}
            isMulti
            menuPortalTarget={document.body}
            menuPosition={'fixed'}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: '-webkit-fill-available',
                background: 'rgba(50, 50, 50, 0.948044)',
                borderRadius: '4px',
                mixBlendMode: 'normal',
                opacity: 0.7,
                border: 'none',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 300,
                // fontSize: '20px',
                lineHeight: '24px',
                color: '#ffffff',
                margin: '13px 0',
                padding: '6px 8px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'rgba(50, 50, 50, 0.948044)',
                color: '#ffffff',
              }),
            }}
          />
        </label>
      </div>

      <div className="column">
        <label>
          Runtime
          <input type="text" placeholder="minutes" value={movie?.runtime ? movie.runtime : ''} />
        </label>
      </div>

      <div className="column">
        <label>
          Overview
          <textarea placeholder="Movie description" value={movie?.overview ? movie.overview : ''} />
        </label>
      </div>
    </div>
  );
};

export default MovieForm;
