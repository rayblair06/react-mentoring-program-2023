import { FC, ReactNode } from 'react';

import LogoImage from 'images/netflixroulette.png';

interface HeaderTopProps {
  title: string;
  children: ReactNode;
}

const HeaderTop: FC<HeaderTopProps> = ({ title, children }) => (
  <div id="top">
    <div>
      <img src={LogoImage} alt={title} />
    </div>

    <div>{children}</div>
  </div>
);

export default HeaderTop;
