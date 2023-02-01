import { FC, PropsWithChildren } from 'react';
import 'styles/app.scss';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
