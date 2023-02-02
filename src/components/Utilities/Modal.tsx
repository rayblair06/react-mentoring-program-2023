import { FC, ReactNode } from 'react';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  handleClose: (...args: any[]) => void;
}

const Modal: FC<ModalProps> = ({ show = false, children, handleClose }) => (
  <div className={`modal${show ? ' show' : ''}`}>
    <div className="modal-content">
      <button type="button" className="button-unstyled close" onClick={handleClose}>
        &times;
      </button>
      <div className="modal-body">{children}</div>
    </div>
  </div>
);

export default Modal;
