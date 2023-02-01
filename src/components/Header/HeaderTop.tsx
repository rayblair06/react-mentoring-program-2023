import { FC } from 'react';
import 'styles/app.scss';
import LogoImage from 'images/netflixroulette.png';
import Button from 'components/Utilities/Button';

interface HeaderTopProps {
  title: string;
  handleOpenModal: (...args: any[]) => void;
}

const HeaderTop: FC<HeaderTopProps> = ({ title, handleOpenModal }) => (
  <div id="top">
    <div>
      <img src={LogoImage} alt={title} />
    </div>

    <div>
      <Button onClick={() => handleOpenModal('addMovieModal')}>+ Add Movie</Button>
    </div>
  </div>
);

export default HeaderTop;
