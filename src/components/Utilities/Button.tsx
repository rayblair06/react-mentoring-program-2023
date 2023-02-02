import { FC, PropsWithChildren } from 'react';

const Button: FC<PropsWithChildren> = ({ children }) => <button type="button">{children}</button>;

export default Button;
