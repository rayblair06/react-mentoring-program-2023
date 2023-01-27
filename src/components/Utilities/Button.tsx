import { FC, PropsWithChildren } from 'react';
import 'styles/app.scss';

const Button: FC<PropsWithChildren> = ({ children }) => <button type="button">{children}</button>;

export default Button;
