import React, { ReactNode } from 'react';

const Button = ({ onClick = {}, children }: { onClick?: any; children: ReactNode }) => (
  <button onClick={() => onClick('')} type="button">
    {children}
  </button>
);

export default Button;
