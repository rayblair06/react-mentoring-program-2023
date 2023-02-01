import { FC, PropsWithChildren } from 'react';
import HeaderImage from 'images/header.png';

const Header: FC<PropsWithChildren> = ({ children }) => (
  <div
    id="header"
    style={{
      background: `url(${HeaderImage})`,
    }}
  >
    {children}
  </div>
);

export default Header;
