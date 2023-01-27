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
import HeaderMain from 'components/Header/HeaderMain';
import Footer from 'components/Footer';
import Menu from 'components/Menu/Menu';
import MovieList from 'components/Movie/MovieList';
import LogoImage from 'images/netflixroulette.png';
import Container from 'components/Utilities/Container';
import ErrorBoundary from 'components/ErrorBoundary';
import { AppConfig } from 'interfaces/AppConfig';
import { Movies } from 'interfaces/Movie';
import { GenreEnum } from '../constants';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,500,600,700', 'sans-serif'],
  },
});

interface InitialStateProps {
  app: AppConfig;
  menu: Array<string>;
  movies: Movies;
}

const initialState: InitialStateProps = {
  app: {
    title: 'Netflix Roulette',
  },
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
  const { app, menu, movies } = initialState;

  return (
    <Page>
      <Header>
        <HeaderTop title={app.title} />
        <HeaderMain />
      </Header>

      <div className="header-trim" />

      <Container>
        <Menu menu={menu} />

        <div className="separator" />

        <ErrorBoundary>
          <MovieList movies={movies} />
        </ErrorBoundary>
      </Container>

      <Footer>
        <img src={LogoImage} alt={app.title} />
      </Footer>
    </Page>
  );
};

export default App;
