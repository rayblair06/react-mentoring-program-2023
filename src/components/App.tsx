import { useEffect, useState } from 'react';
import 'styles/app.scss';
import WebFont from 'webfontloader';
import PulpFictionPoster from 'images/pulp-fiction.png';
import BohemianRhapsodyPoster from 'images/bohemian-rhapsody.png';
import KillBillVol2Poster from 'images/kill-bill-vol-2.png';
import AvengersPoster from 'images/avengers.png';
import InceptionPoster from 'images/inception.png';
import ReservoirDogsPoster from 'images/reservior-dogs.png';
import Page from 'components/Utilities/Page';
import Header from 'components/Header/Header';
import HeaderTop from 'components/Header/HeaderTop';
import HeaderMovie from 'components/Header/HeaderMovie';
import HeaderMain from 'components/Header/HeaderMain';
import Footer from 'components/Footer';
import Menu from 'components/Menu/Menu';
import MovieList from 'components/Movie/MovieList';
import LogoImage from 'images/netflixroulette.png';
import Container from 'components/Utilities/Container';
import ErrorBoundary from 'components/ErrorBoundary';
import { AppConfig } from 'interfaces/AppConfig';
import { Movie, Movies } from 'interfaces/Movie';
import { GenreEnum, ModalState } from '../constants';
import AddMovieModal from './Modals/AddMovieModal';
import EditMovieModal from './Modals/EditMovieModal';
import DeleteMovieModal from './Modals/DeleteMovieModal';
import HeaderImage from 'images/header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from './Utilities/Button';

WebFont.load({
  google: {
    families: ['Montserrat:100,200,300,400,500,600,700', 'sans-serif'],
  },
});

interface InitialStateProps {
  app: AppConfig;
  selectedMovie: number | null;
  genres: Array<string>;
  menu: Array<string>;
  movies: Movies;
}

const initialState: InitialStateProps = {
  app: {
    title: 'Netflix Roulette',
  },
  selectedMovie: null,
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
  menu: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
  movies: [
    {
      id: 1,
      name: 'Pulp Fiction',
      genres: [GenreEnum.ACTIONANDADVENTURE],
      image: PulpFictionPoster,
      releaseDate: new Date(2008),
      runtime: '200 mins',
      rating: 7.8,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
    },
    {
      id: 2,
      name: 'Bohenmian Rhapsody',
      genres: [GenreEnum.DRAMA, GenreEnum.BIOGRAPHY, GenreEnum.MUSIC],
      image: BohemianRhapsodyPoster,
      releaseDate: new Date(2008),
      runtime: '200 mins',
      rating: 7.8,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
    },
    {
      id: 3,
      name: 'Kill Bill: Vol 2',
      genres: [GenreEnum.ACTIONANDADVENTURE],
      image: KillBillVol2Poster,
      releaseDate: new Date(2008),
      runtime: '200 mins',
      rating: 7.8,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
    },
    {
      id: 4,
      name: 'Avengers: War of Infinity',
      genres: [GenreEnum.ACTIONANDADVENTURE],
      image: AvengersPoster,
      releaseDate: new Date(2008),
      runtime: '200 mins',
      rating: 7.8,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
    },
    {
      id: 5,
      name: 'Inception',
      genres: [GenreEnum.ACTIONANDADVENTURE],
      image: InceptionPoster,
      releaseDate: new Date(2008),
      runtime: '200 mins',
      rating: 7.8,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
    },
    {
      id: 6,
      name: 'Reservoir Dogs',
      genres: [GenreEnum.OSCARWINNINGMOVIE],
      image: ReservoirDogsPoster,
      releaseDate: new Date(2008),
      runtime: '200 mins',
      rating: 7.8,
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non feugiat felis, in accumsan justo. Quisque enim leo, volutpat ac tempus eu, ullamcorper eu nulla. Duis sagittis convallis dolor ac ullamcorper. Nam fringilla venenatis sem gravida vulputate. Vestibulum sagittis eu elit sed rhoncus. Etiam blandit erat a augue auctor, ut vestibulum ligula posuere. Sed arcu quam, tristique non accumsan a, eleifend sed lorem. In nec augue et ante maximus rhoncus. Fusce at neque lorem. Pellentesque a gravida dolor. Nam ac molestie tortor. Donec at nunc ut purus rhoncus fermentum in et tortor. Mauris pulvinar non ligula non pharetra. Nullam diam nulla, vehicula sit amet fringilla quis, sodales vel magna. Cras nec nulla tempor, ullamcorper purus a, egestas ex. Nam semper scelerisque arcu, a malesuada tortor.',
    },
  ],
};

const App = () => {
  const { app, genres, menu } = initialState;

  const [selectedMovie, setSelectedMovie] = useState(initialState.selectedMovie);
  const [movies, setMovies] = useState(initialState.movies);

  const [showModal, setModal] = useState<ModalState | null>(null);

  const handleOpenModal = (modal: ModalState) => {
    setModal(modal);
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  const handleSelectedMovie = (id: any) => {
    setSelectedMovie(id);
  };

  useEffect(() => {
    //
  }, [selectedMovie]);

  const handleAddMovie = (movie: Movie) => {
    movies.push(movie);
    setMovies(movies);
  };

  const handleEditMovie = (updatedMovie: Movie) => {
    const indexOfMovie = movies.findIndex((movie: Movie) => movie.id === updatedMovie.id);

    movies[indexOfMovie] = updatedMovie;
    setMovies(movies);
  };

  const handleRemoveMovie = (id: any) => {
    const indexOfMovie = movies.findIndex((movie: Movie) => movie.id === id);

    if (indexOfMovie > -1) {
      movies.splice(indexOfMovie, 1);
      setMovies(movies);
    }
  };

  return (
    <Page>
      {/* TODO: Move children components to Header component and pass props to 'return' correct Header based on selectedMovie prop. use useEffect if possible */}
      {selectedMovie ? (
        <Header styles={{ background: `#232323` }}>
          <HeaderTop title={app.title}>
            <div id="search" onClick={() => handleSelectedMovie(null)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </HeaderTop>

          <HeaderMovie
            movie={movies.find((movie: Movie) => movie.id === selectedMovie)}
            handleSelectedMovie={handleSelectedMovie}
          />
        </Header>
      ) : (
        <Header styles={{ background: `url(${HeaderImage})` }}>
          <HeaderTop title={app.title}>
            <Button onClick={() => handleOpenModal(ModalState.addMovieModal)}>+ Add Movie</Button>
          </HeaderTop>
          <HeaderMain />
        </Header>
      )}

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
        <img src={LogoImage} alt={app.title} />
      </Footer>

      <AddMovieModal
        show={showModal === ModalState.addMovieModal}
        handleClose={handleCloseModal}
        handleAddMovie={handleAddMovie}
        genres={genres}
      />

      <EditMovieModal
        show={showModal === ModalState.editMovieModal}
        handleClose={handleCloseModal}
        handleEditMovie={handleEditMovie}
        movie={movies.find((movie: Movie) => movie.id === selectedMovie)}
        genres={genres}
      />

      <DeleteMovieModal
        show={showModal === ModalState.deleteMovieModal}
        handleClose={handleCloseModal}
        handleRemoveMovie={handleRemoveMovie}
        movie={movies.find((movie: Movie) => movie.id === selectedMovie)}
      />
    </Page>
  );
};

export default App;
