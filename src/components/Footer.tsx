import { FC, PropsWithChildren } from 'react';
import 'styles/app.scss';

const Footer: FC<PropsWithChildren> = ({ children }) => <div id="footer">{children}</div>;

export default Footer;
