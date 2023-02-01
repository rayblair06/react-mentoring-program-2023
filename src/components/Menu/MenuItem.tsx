import { FC } from 'react';

interface MenuItemProps {
  item: string;
}

const MenuItem: FC<MenuItemProps> = ({ item }) => <li>{item}</li>;

export default MenuItem;
