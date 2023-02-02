import { FC, ReactNode } from 'react';

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
