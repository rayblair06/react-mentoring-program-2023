import { Movie } from 'interfaces/Movie';
import { FC } from 'react';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => (
  <div className="card">
    <img src={movie.image} alt={movie.image} />

    <div className="card__title">
      <p>{movie.name}</p>

      <span>{movie.releaseDate.getFullYear()}</span>
    </div>
    <p className="card__subtitle">{movie.genres.join(', ').toString()}</p>
  </div>
);

export default MovieCard;
