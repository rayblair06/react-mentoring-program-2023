import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Modal = ({
  show = false,
  children,
  handleClose,
}: {
  show?: any;
  children: ReactNode;
  handleClose?: any;
}) => {
  return (
    <div className={`modal${show ? ' show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;