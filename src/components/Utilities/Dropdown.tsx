import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Dropdown = ({
  show = false,
  handleClose,
  children,
}: {
  show: any;
  handleClose?: any;
  children: ReactNode;
}) => {
  return (
    <>
      {show && (
        <ul className="custom-menu" onMouseLeave={handleClose}>
          {children}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
