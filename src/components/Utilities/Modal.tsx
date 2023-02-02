import { FC, ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  handleClose: (...args: any[]) => void;
}

const Modal: FC<ModalProps> = ({ show = false, children, handleClose }) => (
  <div className={`modal${show ? ' show' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={handleClose}>
        &times;
      </span>
      <div className="modal-body">{children}</div>
    </div>
  </div>
);

export default Modal;
