import React, { useState } from 'react';
import '../styles/app.scss';
import WebFont from 'webfontloader';
import PulpFictionPoster from '../images/pulp-fiction.png';
import BohemianRhapsodyPoster from '../images/bohemian-rhapsody.png';
import KillBillVol2Poster from '../images/kill-bill-vol-2.png';
import AvengersPoster from '../images/avengers.png';
import InceptionPoster from '../images/inception.png';
import ReservoirDogsPoster from '../images/reservior-dogs.png';
import Page from './Utilities/Page';
import Header from './Header/Header';
import HeaderTop from './Header/HeaderTop';
import HeaderMain from './Header/HeaderMain';
import Footer from './Footer';
import Menu from './Menu/Menu';
import MovieList from './Movie/MovieList';
import LogoImage from '../images/netflixroulette.png';
import Container from './Utilities/Container';
import ErrorBoundary from './ErrorBoundary';
import AddMovieModal from './Modals/AddMovieModal';
import EditMovieModal from './Modals/EditMovieModal';
import DeleteMovieModal from './Modals/DeleteMovieModal';
import { Movie, Movies } from '../interfaces/Movie';
import { AppConfig } from 'src/interfaces/AppConfig';

WebFont.load({
  google: {
    families: ['Montserrat:100,200,300,400,500,600,700', 'sans-serif'],
  },
});

const menu = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const defaultStates: { app: AppConfig; selectedMovie: any; genres: Array<string>; movies: Movies } =
  {
    app: {
      title: 'Netflix Roulette',
    },
    selectedMovie: 0,
    genres: [
      'Action & Adventure',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Horror',
      'Music',
      'Oscar winning Movie',
    ],
    movies: [
      {
        id: 1,
        title: 'Pulp Fiction',
        genres: ['Action & Adventure'],
        poster_path: PulpFictionPoster,
        release_date: '2008',
        runtime: 200,
        vote_average: 7.8,
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
      },
      {
        id: 2,
        title: 'Bohenmian Rhapsody',
        genres: ['Drama', 'Biography', 'Music'],
        poster_path: BohemianRhapsodyPoster,
        release_date: '2008',
        runtime: 200,
        vote_average: 7.8,
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
      },
      {
        id: 3,
        title: 'Kill Bill: Vol 2',
        genres: ['Oscar winning Movie'],
        poster_path: KillBillVol2Poster,
        release_date: '2008',
        runtime: 200,
        vote_average: 7.8,
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
      },
      {
        id: 4,
        title: 'Avengers: War of Infinity',
        genres: ['Action & Adventure'],
        poster_path: AvengersPoster,
        release_date: '2008',
        runtime: 200,
        vote_average: 7.8,
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
      },
      {
        id: 5,
        title: 'Inception',
        genres: ['Action & Adventure'],
        poster_path: InceptionPoster,
        release_date: '2008',
        runtime: 200,
        vote_average: 7.8,
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
      },
      {
        id: 6,
        title: 'Reservoir Dogs',
        genres: ['Oscar winning Movie'],
        poster_path: ReservoirDogsPoster,
        release_date: '2008',
        runtime: 200,
        vote_average: 7.8,
        overview:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
      },
    ],
  };

const App = () => {
  const [app] = useState(defaultStates.app);
  const [selectedMovie, setSelectedMovie] = useState(defaultStates.selectedMovie);
  const [movies, setMovies] = useState(defaultStates.movies);

  const [showModal, setModal] = useState('');

  const handleOpenModal = (modal: any) => {
    setModal(modal);
  };

  const handleCloseModal = () => {
    setModal('');
  };

  const handleSelectedMovie = (id: any) => {
    setSelectedMovie(id);
  };

  const handleAddMovie = (movie: Movie) => {
    // TODO: To be completed in Task 5
    // movies.push(movie);
    // setMovies(movies);
  };

  const handleEditMovie = (updatedMovie: Movie) => {
    // TODO: To be completed in Task 5
    // const indexOfMovie = movies.findIndex((movie: Movie) => movie.id === updatedMovie.id);
    // movies[indexOfMovie] = updatedMovie;
    // setMovies(movies);
  };

  const handleRemoveMovie = (id: any) => {
    // TODO: To be completed in Task 5
    // const indexOfMovie = movies.findIndex((movie: Movie) => movie.id === id);
    // if (indexOfMovie > -1) {
    //   movies.splice(indexOfMovie, 1);
    //   setMovies(movies);
    // }
  };

  return (
    <Page>
      <Header>
        <HeaderTop handleOpenModal={handleOpenModal} />
        <HeaderMain />
      </Header>

      <div className="header-trim" />

      <Container>
        <Menu menu={menu} />

        <div className="separator" />

        <ErrorBoundary>
          <MovieList
            movies={movies}
            handleOpenModal={handleOpenModal}
            handleSelectedMovie={handleSelectedMovie}
          />
        </ErrorBoundary>
      </Container>

      <Footer>
        <img src={LogoImage} alt={LogoImage} />
      </Footer>

      <AddMovieModal
        show={showModal === 'addMovieModal'}
        handleClose={handleCloseModal}
        handleAddMovie={handleAddMovie}
      />
      <EditMovieModal
        show={showModal === 'editMovieModal'}
        handleClose={handleCloseModal}
        handleEditMovie={handleEditMovie}
        movie={movies.find((movie: Movie) => movie.id === selectedMovie)}
      />
      <DeleteMovieModal
        show={showModal === 'deleteMovieModal'}
        handleClose={handleCloseModal}
        handleRemoveMovie={handleRemoveMovie}
        movie={movies.find((movie: Movie) => movie.id === selectedMovie)}
      />
    </Page>
  );
};

export default App;
