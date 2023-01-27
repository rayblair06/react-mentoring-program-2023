import { FC, PropsWithChildren } from 'react';
import 'styles/app.scss';

const Page: FC<PropsWithChildren> = ({ children }) => <div id="page">{children}</div>;

export default Page;
