import { FC, ReactNode } from 'react';
import 'styles/app.scss';

interface ButtonProps {
  onClick?: any;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick = {}, children }) => (
  <button onClick={() => onClick('')} type="button">
    {children}
  </button>
);

export default Button;
