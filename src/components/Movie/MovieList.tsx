import React, { useState } from 'react';
import '../../styles/app.scss';
import MovieCard from './MovieCard';
import { Movies, Movie } from '../../interfaces/Movie';

const MovieList = ({
  movies,
  handleOpenModal,
  handleSelectedMovie,
}: {
  movies: Movies;
  handleOpenModal: any;
  handleSelectedMovie: any;
}) => {
  return (
    <div id="movielist">
      <p id="results">
        <span>{movies.length}</span> movies found
      </p>

      <div id="movielist__container">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleOpenModal={handleOpenModal}
            handleSelectedMovie={handleSelectedMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
