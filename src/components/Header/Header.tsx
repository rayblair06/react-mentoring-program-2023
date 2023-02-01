import { FC, ReactNode } from 'react';
import 'styles/app.scss';

interface HeaderProps {
  styles: any;
  children: ReactNode;
}

const Header: FC<HeaderProps> = ({ styles, children }) => (
  <div id="header" style={styles}>
    {children}
  </div>
);

export default Header;
