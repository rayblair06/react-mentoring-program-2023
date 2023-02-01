import { FC } from 'react';
import 'styles/app.scss';
import Select from 'react-select';
import { Movie } from 'interfaces/Movie';

interface MovieFormProps {
  movie?: Movie;
  genres: Array<string>;
}

const MovieForm: FC<MovieFormProps> = ({ movie, genres }) => {
  const options = genres.map((genre) => ({ value: genre, label: genre }));

  return (
    <div className="row">
      <div className="column">
        <label>
          Title
          <input type="text" placeholder="Title" value={movie?.name ? movie.name : ''} />
        </label>
      </div>

      <div className="column">
        <label>
          Release Date
          <input
            type="date"
            placeholder="Select Date"
            value={movie?.releaseDate ? movie.releaseDate.getFullYear() : ''}
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
          Rating
          <input type="text" placeholder="7.8" value={movie?.rating ? movie.rating : ''} />
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
