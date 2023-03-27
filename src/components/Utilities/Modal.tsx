import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  handleClose: (...args: any[]) => void;
}

const Modal: FC<ModalProps> = ({ show = false, children, handleClose }) => {
  const modalStyles = clsx('modal', {
    show: show,
  });

  return (
    <div className={modalStyles}>
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
