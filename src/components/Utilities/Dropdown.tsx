import { FC, ReactNode } from 'react';

interface DropdownProps {
  show: boolean;
  handleClose: (...args: any[]) => void;
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ show = false, handleClose, children }) => (
  <>
    {show && (
      <ul className="custom-menu" onMouseLeave={handleClose}>
        {children}
      </ul>
    )}
  </>
);

export default Dropdown;
